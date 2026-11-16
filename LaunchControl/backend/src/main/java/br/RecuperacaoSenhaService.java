
package br.com.launchcontrol;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.HexFormat;
import java.util.Locale;

// Serviço responsável pela recuperação de senha do LaunchControl.
// Gera um link temporário, envia por e-mail e permite cadastrar
// uma nova senha sem comprometer os dados do usuário.
@Service
class RecuperacaoSenhaService {

    // Repositório responsável pelos usuários cadastrados.
    private final UsuarioRepo usuarios;

    // Repositório responsável pelos tokens de recuperação.
    private final TokenRecuperacaoSenhaRepo tokens;

    // Codifica a nova senha antes de armazená-la no banco.
    private final PasswordEncoder encoder;

    // Gera valores aleatórios seguros para os tokens.
    private final SecureRandom random = new SecureRandom();

    // Cliente HTTP para comunicação com a API da Brevo.
    private final HttpClient httpClient = HttpClient.newBuilder()
        .connectTimeout(Duration.ofSeconds(10))
        .build();

    // Endereço público do frontend.
    @Value("${app.frontend-url:http://localhost:8080}")
    private String frontendUrl;

    // Chave secreta da API, configurada no Render.
    @Value("${BREVO_API_KEY}")
    private String brevoApiKey;

    // E-mail remetente autorizado na Brevo.
    @Value("${BREVO_SENDER_EMAIL}")
    private String remetenteEmail;

    // Nome exibido para quem recebe a mensagem.
    @Value("${BREVO_SENDER_NAME:LaunchControl}")
    private String remetenteNome;

    // O Spring fornece os repositórios e o codificador de senha.
    RecuperacaoSenhaService(
        UsuarioRepo usuarios,
        TokenRecuperacaoSenhaRepo tokens,
        PasswordEncoder encoder
    ) {
        this.usuarios = usuarios;
        this.tokens = tokens;
        this.encoder = encoder;
    }

    // Calcula o SHA-256 do token.
    // Apenas o hash é armazenado no banco de dados.
    private String hash(String valor) {
        try {
            byte[] bytes = MessageDigest
                .getInstance("SHA-256")
                .digest(valor.getBytes(StandardCharsets.UTF_8));

            return HexFormat.of().formatHex(bytes);

        } catch (Exception e) {
            throw new IllegalStateException(
                "Não foi possível gerar o hash do token.",
                e
            );
        }
    }

    // Escapa caracteres especiais para criar um JSON válido.
    // Isso evita problemas com nomes, aspas e quebras de linha.
    private String escaparJson(String texto) {
        if (texto == null) {
            return "";
        }

        StringBuilder resultado = new StringBuilder();

        for (char caractere : texto.toCharArray()) {
            switch (caractere) {
                case '"' -> resultado.append("\\\"");
                case '\\' -> resultado.append("\\\\");
                case '\n' -> resultado.append("\\n");
                case '\r' -> resultado.append("\\r");
                case '\t' -> resultado.append("\\t");

                default -> {
                    if (caractere < 0x20) {
                        resultado.append(
                            String.format(
                                "\\u%04x",
                                (int) caractere
                            )
                        );
                    } else {
                        resultado.append(caractere);
                    }
                }
            }
        }

        return resultado.toString();
    }

    // Envia o e-mail de recuperação pela API HTTP da Brevo.
    // A comunicação utiliza HTTPS, sem depender de SMTP.
    private void enviarEmail(
        String destinatario,
        String nomeUsuario,
        String link
    ) {

        // Conteúdo enviado ao usuário.
        String mensagem =
            "Olá, " + nomeUsuario + "!\n\n"
            + "Recebemos uma solicitação para redefinir "
            + "sua senha do LaunchControl.\n\n"
            + "Para criar uma nova senha, acesse:\n"
            + link + "\n\n"
            + "Este link expira em 15 minutos.\n\n"
            + "Se você não solicitou a recuperação, "
            + "ignore este e-mail.";

        // Estrutura JSON exigida pela API da Brevo.
        String json = """
            {
                "sender": {
                    "name": "%s",
                    "email": "%s"
                },
                "to": [
                    {
                        "email": "%s"
                    }
                ],
                "subject": "LaunchControl - Recuperação de senha",
                "textContent": "%s"
            }
            """.formatted(
                escaparJson(remetenteNome),
                escaparJson(remetenteEmail),
                escaparJson(destinatario),
                escaparJson(mensagem)
            );

        try {

            // Monta a requisição HTTP com a chave da API.
            HttpRequest requisicao = HttpRequest.newBuilder()
                .uri(URI.create(
                    "https://api.brevo.com/v3/smtp/email"
                ))
                .timeout(Duration.ofSeconds(20))
                .header("accept", "application/json")
                .header("content-type", "application/json")
                .header("api-key", brevoApiKey)
                .POST(
                    HttpRequest.BodyPublishers.ofString(
                        json,
                        StandardCharsets.UTF_8
                    )
                )
                .build();

            // Envia a requisição e recebe a resposta da Brevo.
            HttpResponse<String> resposta = httpClient.send(
                requisicao,
                HttpResponse.BodyHandlers.ofString()
            );

            // Respostas HTTP 2xx indicam aceitação da requisição.
            // Isso não garante a entrega na caixa de entrada.
            if (resposta.statusCode() < 200 ||
                resposta.statusCode() >= 300) {

                throw new IllegalStateException(
                    "Brevo recusou o envio. Código HTTP: "
                    + resposta.statusCode()
                );
            }

        } catch (InterruptedException e) {

            // Preserva o estado de interrupção da thread.
            Thread.currentThread().interrupt();

            throw new IllegalStateException(
                "O envio do e-mail foi interrompido.",
                e
            );

        } catch (IOException e) {

            throw new IllegalStateException(
                "Falha na comunicação com a Brevo.",
                e
            );
        }
    }

    // Inicia o processo de recuperação de senha.
    void solicitar(String email) {

        // Ignora solicitações sem endereço de e-mail.
        if (email == null || email.isBlank()) {
            return;
        }

        // Normaliza o endereço informado pelo usuário.
        String emailNormalizado = email
            .trim()
            .toLowerCase(Locale.ROOT);

        // Procura a conta no banco de dados.
        var usuario = usuarios.findByEmail(emailNormalizado);

        // Não revela se o e-mail está cadastrado.
        if (usuario.isEmpty()) {
            return;
        }

        // Gera um token seguro com 32 bytes aleatórios.
        byte[] bytes = new byte[32];
        random.nextBytes(bytes);

        String token = Base64.getUrlEncoder()
            .withoutPadding()
            .encodeToString(bytes);

        // Registra apenas o hash do token.
        // O link será válido por 15 minutos.
        TokenRecuperacaoSenha registro =
            new TokenRecuperacaoSenha(
                usuario.get(),
                hash(token),
                LocalDateTime.now().plusMinutes(15)
            );

        tokens.save(registro);

        // Mantém o formato de link usado pelo frontend.
        String link = frontendUrl.replaceAll("/+$", "")
            + "/?recuperarToken=" + token;

        // Solicita à Brevo o envio da mensagem.
        enviarEmail(
            usuario.get().email,
            usuario.get().nome,
            link
        );
    }

    // Valida o token e atualiza a senha do usuário.
    @Transactional
    void redefinir(String token, String novaSenha) {

        // Impede a consulta com token vazio.
        if (token == null || token.isBlank()) {
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "Link inválido ou expirado."
            );
        }

        // Busca o registro usando o hash do token.
        TokenRecuperacaoSenha registro = tokens
            .findByTokenHash(hash(token))
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "Link inválido ou expirado."
            ));

        // Rejeita tokens expirados ou já utilizados.
        if (registro.utilizado ||
            !registro.expiraEm.isAfter(LocalDateTime.now())) {

            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "Link inválido ou expirado."
            );
        }

        // Exige uma senha com pelo menos oito caracteres.
        if (novaSenha == null || novaSenha.length() < 8) {

            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "A senha deve ter pelo menos 8 caracteres."
            );
        }

        // Codifica a senha antes de salvá-la.
        registro.usuario.senha = encoder.encode(novaSenha);

        usuarios.save(registro.usuario);

        // Invalida todos os tokens pendentes desse usuário.
        // Assim, links anteriores não poderão ser reutilizados.
        for (TokenRecuperacaoSenha t :
            tokens.findByUsuarioIdAndUtilizadoFalse(
                registro.usuario.id
            )) {

            t.utilizado = true;
            tokens.save(t);
        }
    }
}


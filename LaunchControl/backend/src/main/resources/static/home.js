/*
 * LAUNCHCONTROL — HOME PÚBLICA
 * Página de apresentação da plataforma.
 * Não altera autenticação, API ou painel.
 */

function homeScreen() {
  app.innerHTML = `
    <div class="lc-home" id="inicio">
      <header class="home-header">
        <nav class="home-container home-nav">
          <a class="home-logo" href="#inicio">
            LAUNCH<span>CONTROL</span>
          </a>

          <div class="home-nav-links">
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#solucoes">Soluções</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#sobre-nos">Sobre nós</a>
          </div>

          <div class="home-nav-actions">
            <button class="home-btn home-btn-ghost"
                    id="home-login">
              Entrar
            </button>
            <button class="home-btn home-btn-primary"
                    id="home-register">
              Criar conta
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section class="home-hero">
          <div class="home-container home-hero-content">
            <div class="home-hero-copy">
              <span class="home-eyebrow">
                GESTÃO AUTOMOTIVA INTELIGENTE
              </span>

              <h1>
                Seu veículo merece cuidado.
                <span>Sua gestão merece controle.</span>
              </h1>

              <p>
                Conectamos clientes, oficinas e fornecedores
                em uma plataforma que simplifica solicitações,
                orçamentos e o acompanhamento de serviços.
              </p>

              <div class="home-hero-actions">
                <button class="home-btn home-btn-primary"
                        data-home-register>
                  Começar agora
                  <span aria-hidden="true">↗</span>
                </button>

                <a class="home-btn home-btn-outline"
                   href="#funcionalidades">
                  Explorar a plataforma
                </a>
              </div>

              <div class="home-hero-caption">
                <span class="home-status-dot"></span>
                Mais organização em cada etapa do atendimento.
              </div>
            </div>
          </div>
        </section>

        <section class="home-section"
                 id="funcionalidades">
          <div class="home-container">
            <div class="home-section-heading">
              <span class="home-kicker">
                TUDO EM UM SÓ LUGAR
              </span>

              <h2>
                Tecnologia que acompanha
                cada etapa do serviço.
              </h2>

              <p>
                Do primeiro contato à conclusão do
                atendimento, mantenha as informações
                importantes organizadas.
              </p>
            </div>

            <div class="home-feature-grid">
              <article class="home-feature">
                <div class="home-feature-icon">▤</div>
                <h3>Solicitações de serviço</h3>
                <p>
                  Registre problemas e acompanhe
                  o andamento das solicitações.
                </p>
              </article>

              <article class="home-feature">
                <div class="home-feature-icon">◇</div>
                <h3>Orçamentos</h3>
                <p>
                  Consulte propostas e tome decisões
                  com mais clareza.
                </p>
              </article>

              <article class="home-feature">
                <div class="home-feature-icon">▣</div>
                <h3>Gestão de veículos</h3>
                <p>
                  Cadastre veículos e consulte
                  informações dos atendimentos.
                </p>
              </article>

              <article class="home-feature">
                <div class="home-feature-icon">↗</div>
                <h3>Acompanhamento</h3>
                <p>
                  Visualize atualizações e o
                  status dos serviços.
                </p>
              </article>

              <article class="home-feature">
                <div class="home-feature-icon">⚙</div>
                <h3>Peças e fornecedores</h3>
                <p>
                  Organize peças e pesquise
                  opções em plataformas externas.
                </p>
              </article>

              <article class="home-feature">
                <div class="home-feature-icon">◉</div>
                <h3>Visão centralizada</h3>
                <p>
                  Acesse informações relevantes
                  em um ambiente organizado.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section class="home-section home-section-alt"
                 id="solucoes">
          <div class="home-container">
            <div class="home-section-heading">
              <span class="home-kicker">
                UMA PLATAFORMA, TRÊS PERFIS
              </span>

              <h2>
                Uma solução para cada
                parte do setor automotivo.
              </h2>

              <p>
                Ferramentas pensadas para as
                necessidades de cada usuário.
              </p>
            </div>

            <div class="home-role-grid">
              <article class="home-role-card">
                <span class="home-role-number">
                  01 / CLIENTES
                </span>
                <h3>
                  Mais tranquilidade para
                  cuidar do seu carro.
                </h3>
                <p>
                  Cadastre veículos, solicite
                  atendimentos e acompanhe orçamentos.
                </p>
                <button class="home-btn home-btn-outline"
                        data-home-register>
                  Sou cliente ↗
                </button>
              </article>

              <article class="home-role-card">
                <span class="home-role-number">
                  02 / OFICINAS
                </span>
                <h3>
                  Mais organização para
                  cada atendimento.
                </h3>
                <p>
                  Gerencie solicitações, prepare
                  orçamentos e atualize serviços.
                </p>
                <button class="home-btn home-btn-outline"
                        data-home-register>
                  Sou oficina ↗
                </button>
              </article>

              <article class="home-role-card">
                <span class="home-role-number">
                  03 / FORNECEDORES
                </span>
                <h3>
                  Mais controle sobre
                  suas peças.
                </h3>
                <p>
                  Cadastre produtos e organize
                  informações de estoque.
                </p>
                <button class="home-btn home-btn-outline"
                        data-home-register>
                  Sou fornecedor ↗
                </button>
              </article>
            </div>
          </div>
        </section>

        <section class="home-section"
                 id="como-funciona">
          <div class="home-container">
            <div class="home-section-heading">
              <span class="home-kicker">
                SIMPLES E PRÁTICO
              </span>

              <h2>
                Comece em três passos.
              </h2>
            </div>

            <div class="home-step-grid">
              <article class="home-step">
                <span>01</span>
                <h3>Crie sua conta</h3>
                <p>
                  Escolha seu perfil e faça
                  o cadastro na plataforma.
                </p>
              </article>

              <article class="home-step">
                <span>02</span>
                <h3>Organize suas informações</h3>
                <p>
                  Cadastre veículos, peças ou
                  serviços conforme seu perfil.
                </p>
              </article>

              <article class="home-step">
                <span>03</span>
                <h3>Acompanhe tudo</h3>
                <p>
                  Consulte as informações e
                  atualizações no painel.
                </p>
              </article>
            </div>
          </div>
        </section>

        <!-- SOBRE NÓS: história e fotografia original da equipe -->
        <section class="home-section home-about" id="sobre-nos" aria-labelledby="about-heading">
          <div class="home-container">
            <div class="home-about-layout">
              <div class="home-about-intro">
                <span class="home-kicker">NOSSA HISTÓRIA</span>
                <h2 id="about-heading">Oito pessoas. Uma ideia. <span>Um novo caminho para o setor automotivo.</span></h2>
                <p class="home-about-lead">O LaunchControl nasceu de uma ideia construída em equipe: tornar a experiência automotiva mais conectada, clara e organizada.</p>
              </div>
              <div class="home-about-story">
                <p>Nossa história começou em 2026, no Centro Universitário UNICEPLAC, quando oito estudantes se uniram para transformar desafios reais do setor automotivo em uma proposta tecnológica.</p>
                <p>Percebemos que solicitar serviços, consultar orçamentos, encontrar peças e acompanhar atendimentos poderia ser mais simples. Foi dessa vontade de aproximar clientes, oficinas e fornecedores que surgiu o <strong>LaunchControl</strong>.</p>
                <p>Mais do que um projeto acadêmico, o LaunchControl representa colaboração, aprendizado e a determinação de transformar uma ideia compartilhada em uma plataforma útil para as pessoas.</p>
              </div>
            </div>
            <div class="home-team" id="nossa-equipe">
              <div class="home-team-heading">
                <div><span class="home-kicker">QUEM FAZ ACONTECER</span><h3>Nossa equipe</h3></div>
                <p>Por trás de cada linha de código, existem pessoas, dedicação e uma visão em comum.</p>
              </div>
              <figure class="home-team-photo">
                <img src="./imagemequipe.jpg" alt="Fotografia original dos oito integrantes do projeto LaunchControl, reunidos em sala de aula" loading="lazy" decoding="async">
                <figcaption>Equipe LaunchControl · 2026</figcaption>
              </figure>
              <div class="home-team-grid" aria-label="Integrantes do projeto em ordem alfabética">
                <div class="home-team-member">Ana Letícia Souza Pimentel</div>
                <div class="home-team-member">Gabriel de Souza Teodoro</div>
                <div class="home-team-member">Guilherme Abreu Bonfim</div>
                <div class="home-team-member">João Victtor Vieira Silva</div>
                <div class="home-team-member">Lucas Moreira Rodrigues Ribeiro</div>
                <div class="home-team-member">Luís Paulo Mendes Barbosa</div>
                <div class="home-team-member">Miguel Luiz Silverio</div>
                <div class="home-team-member">Murilo Ferreira Macedo</div>
              </div>
            </div>
          </div>
        </section>

        <section class="home-section home-cta-section">
          <div class="home-container">
            <div class="home-cta">
              <span class="home-kicker">
                O PRÓXIMO PASSO COMEÇA AQUI
              </span>

              <h2>
                Uma maneira mais inteligente
                de conectar o universo automotivo.
              </h2>

              <p>
                Tenha mais organização, clareza
                e controle sobre seus atendimentos.
              </p>

              <button class="home-btn home-btn-primary"
                      data-home-register>
                Criar minha conta ↗
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer class="home-footer" id="mapa-do-site">
        <div class="home-container">
          <div class="home-footer-top">
            <div class="home-footer-brand">
              <a class="home-logo" href="#inicio">LAUNCH<span>CONTROL</span></a>
              <p>Conectando pessoas. Simplificando caminhos. Movendo o futuro.</p>
            </div>
            <nav class="home-sitemap" aria-label="Mapa do Site">
              <div class="home-sitemap-column"><h3>Plataforma</h3><a href="#inicio">Início</a><a href="#funcionalidades">Funcionalidades</a><a href="#solucoes">Soluções</a><a href="#como-funciona">Como funciona</a></div>
              <div class="home-sitemap-column"><h3>Institucional</h3><a href="#sobre-nos">Sobre nós</a><a href="#nossa-equipe">Nossa equipe</a><a href="#mapa-do-site">Mapa do Site</a></div>
              <div class="home-sitemap-column"><h3>Acesso</h3><button type="button" data-home-login>Entrar</button><button type="button" data-home-register>Criar conta</button></div>
            </nav>
          </div>
          <div class="home-footer-bottom"><span>© ${new Date().getFullYear()} LaunchControl. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div>
        </div>
      </footer>
    </div>
  `;

  // Todos os botões públicos usam as telas de autenticação já existentes.
  app.querySelectorAll("#home-login, [data-home-login]").forEach(button => {
    button.addEventListener("click", () => loginScreen(false));
  });

  app.querySelectorAll("#home-register, [data-home-register]").forEach(button => {
    button.addEventListener("click", () => loginScreen(true));
  });
}

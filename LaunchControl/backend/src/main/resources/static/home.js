
/*
 * LAUNCHCONTROL — HOME PÚBLICA
 * Apresentação do projeto, equipe e navegação.
 * Mantém as telas existentes de login e cadastro.
 */

function homeScreen() {
  app.innerHTML = `
    <div class="lc-home" id="inicio">

      <!-- CABEÇALHO -->
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
            <button
              class="home-btn home-btn-ghost"
              id="home-login"
              type="button">
              Entrar
            </button>

            <button
              class="home-btn home-btn-primary"
              id="home-register"
              type="button">
              Criar conta
            </button>

            <button
              class="home-mobile-menu-btn"
              id="home-mobile-menu-btn"
              type="button"
              aria-label="Abrir menu"
              aria-controls="home-mobile-menu"
              aria-expanded="false">
              ☰
            </button>
          </div>
        </nav>

        <!-- MENU DO CELULAR -->
        <div
          class="home-mobile-menu"
          id="home-mobile-menu"
          hidden>

          <a href="#inicio">Início</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#solucoes">Soluções</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre-nos">Sobre nós</a>
          <a href="#nossa-equipe">Nossa equipe</a>
          <a href="#mapa-do-site">Mapa do Site</a>

          <button type="button" data-home-login>
            Entrar
          </button>

          <button type="button" data-home-register>
            Criar conta
          </button>
        </div>
      </header>

      <main>

        <!-- APRESENTAÇÃO PRINCIPAL -->
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
                <button
                  class="home-btn home-btn-primary"
                  type="button"
                  data-home-register>
                  Começar agora ↗
                </button>

                <a
                  class="home-btn home-btn-outline"
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

        <!-- FUNCIONALIDADES -->
        <section class="home-section" id="funcionalidades">
          <div class="home-container">

            <div class="home-section-heading">
              <span class="home-kicker">
                TUDO EM UM SÓ LUGAR
              </span>

              <h2>
                Tecnologia que acompanha cada etapa do serviço.
              </h2>

              <p>
                Do primeiro contato à conclusão do atendimento,
                mantenha as informações importantes organizadas.
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
                  Organize peças e pesquise opções
                  em plataformas externas.
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

        <!-- SOLUÇÕES -->
        <section class="home-section home-section-alt" id="solucoes">
          <div class="home-container">

            <div class="home-section-heading">
              <span class="home-kicker">
                UMA PLATAFORMA, TRÊS PERFIS
              </span>

              <h2>
                Uma solução para cada parte
                do setor automotivo.
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
                  Mais tranquilidade para cuidar do seu carro.
                </h3>

                <p>
                  Cadastre veículos, solicite atendimentos
                  e acompanhe orçamentos.
                </p>

                <button
                  class="home-btn home-btn-outline"
                  type="button"
                  data-home-register>
                  Sou cliente ↗
                </button>
              </article>

              <article class="home-role-card">
                <span class="home-role-number">
                  02 / OFICINAS
                </span>

                <h3>
                  Mais organização para cada atendimento.
                </h3>

                <p>
                  Gerencie solicitações, prepare orçamentos
                  e atualize serviços.
                </p>

                <button
                  class="home-btn home-btn-outline"
                  type="button"
                  data-home-register>
                  Sou oficina ↗
                </button>
              </article>

              <article class="home-role-card">
                <span class="home-role-number">
                  03 / FORNECEDORES
                </span>

                <h3>
                  Mais controle sobre suas peças.
                </h3>

                <p>
                  Cadastre produtos e organize
                  informações de estoque.
                </p>

                <button
                  class="home-btn home-btn-outline"
                  type="button"
                  data-home-register>
                  Sou fornecedor ↗
                </button>
              </article>

            </div>
          </div>
        </section>

        <!-- COMO FUNCIONA -->
        <section class="home-section" id="como-funciona">
          <div class="home-container">

            <div class="home-section-heading">
              <span class="home-kicker">
                SIMPLES E PRÁTICO
              </span>

              <h2>Comece em três passos.</h2>
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
                  Cadastre veículos, peças ou serviços
                  conforme seu perfil.
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

        <!-- SOBRE NÓS -->
        <section class="home-section home-section-alt" id="sobre-nos">
          <div class="home-container">

            <div class="home-section-heading">
              <span class="home-kicker">
                SOBRE NÓS
              </span>

              <h2>
                Oito pessoas. Uma ideia.
                Um novo caminho para o setor automotivo.
              </h2>

              <p>
                Conheça a história e as pessoas
                por trás do LaunchControl.
              </p>
            </div>

            <div class="home-about-story">

              <h3>
                Nascemos de uma ideia.
                Evoluímos com um propósito.
              </h3>

              <p>
                Nossa história começou em 2026, no
                Centro Universitário UNICEPLAC,
                quando oito estudantes decidiram
                transformar um desafio do setor
                automotivo em uma oportunidade
                de inovação.
              </p>

              <p>
                Percebemos que encontrar serviços
                mecânicos, consultar peças, solicitar
                orçamentos e acompanhar atendimentos
                não precisava ser um processo complicado.
              </p>

              <p>
                Foi dessa visão compartilhada que nasceu
                o LaunchControl: uma plataforma idealizada
                para aproximar clientes, oficinas
                e fornecedores.
              </p>

              <p>
                Por trás de cada tela, funcionalidade
                e linha de código, existe uma equipe
                que acredita no poder das ideias
                construídas em conjunto.
              </p>

              <p>
                Nosso projeto representa aprendizado,
                colaboração e a vontade de criar algo
                que ultrapasse os limites da sala de aula.
              </p>

              <strong>
                Somos a equipe por trás do LaunchControl.
                Estamos construindo uma nova forma
                de conectar o universo automotivo.
              </strong>

            </div>
          </div>
        </section>

        <!-- NOSSA EQUIPE -->
        <section class="home-section" id="nossa-equipe">
          <div class="home-container">

            <div class="home-section-heading">
              <span class="home-kicker">
                QUEM FAZ ACONTECER
              </span>

              <h2>Conheça nossa equipe.</h2>

              <p>
                O LaunchControl é resultado do esforço,
                da dedicação e da colaboração
                de oito integrantes.
              </p>
            </div>

            <div class="home-team-photo-wrap">
              <img
                src="./imagemequipe.jpg"
                alt="Fotografia original da equipe LaunchControl"
                class="home-team-photo"
                loading="lazy"
              >
            </div>

            <div class="home-team-heading">
              <h3>Os idealizadores do LaunchControl</h3>
              <p>
                Uma equipe. Um propósito compartilhado.
              </p>
            </div>

            <div class="home-team-grid">
              <div class="home-team-member">
                Ana Letícia Souza Pimentel
              </div>

              <div class="home-team-member">
                Gabriel de Souza Teodoro
              </div>

              <div class="home-team-member">
                Guilherme Abreu Bonfim
              </div>

              <div class="home-team-member">
                João Victtor Vieira Silva
              </div>

              <div class="home-team-member">
                Lucas Moreira Rodrigues Ribeiro
              </div>

              <div class="home-team-member">
                Luís Paulo Mendes Barbosa
              </div>

              <div class="home-team-member">
                Miguel Luiz Silverio
              </div>

              <div class="home-team-member">
                Murilo Ferreira Macedo
              </div>
            </div>

          </div>
        </section>

        <!-- CHAMADA FINAL -->
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

              <button
                class="home-btn home-btn-primary"
                type="button"
                data-home-register>
                Criar minha conta ↗
              </button>

            </div>
          </div>
        </section>

      </main>

      <!-- RODAPÉ E MAPA DO SITE -->
      <footer class="home-footer" id="mapa-do-site">
        <div class="home-container">

          <div class="home-sitemap">

            <div>
              <a class="home-logo" href="#inicio">
                LAUNCH<span>CONTROL</span>
              </a>

              <p>
                Gestão automotiva em um só lugar.
              </p>
            </div>

            <div>
              <h3>Plataforma</h3>
              <a href="#inicio">Início</a>
              <a href="#funcionalidades">Funcionalidades</a>
              <a href="#solucoes">Soluções</a>
              <a href="#como-funciona">Como funciona</a>
            </div>

            <div>
              <h3>Institucional</h3>
              <a href="#sobre-nos">Sobre nós</a>
              <a href="#nossa-equipe">Nossa equipe</a>
              <a href="#mapa-do-site">Mapa do Site</a>
            </div>

            <div>
              <h3>Acesso</h3>
              <button type="button" data-home-login>
                Entrar
              </button>
              <button type="button" data-home-register>
                Criar conta
              </button>
            </div>

          </div>

          <div class="home-footer-bottom">
            <span>
              © ${new Date().getFullYear()} LaunchControl.
              Todos os direitos reservados.
            </span>

            <a href="#inicio">
              Voltar ao topo ↑
            </a>
          </div>

        </div>
      </footer>

    </div>
  `;

  // Conecta os botões às telas já existentes.
  app.querySelectorAll(
    "#home-login, [data-home-login]"
  ).forEach(button => {
    button.addEventListener("click", () => {
      loginScreen(false);
    });
  });

  app.querySelectorAll(
    "#home-register, [data-home-register]"
  ).forEach(button => {
    button.addEventListener("click", () => {
      loginScreen(true);
    });
  });

  // Abre e fecha o menu do celular.
  const menuButton = app.querySelector(
    "#home-mobile-menu-btn"
  );

  const mobileMenu = app.querySelector(
    "#home-mobile-menu"
  );

  if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {
      const aberto =
        menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute(
        "aria-expanded",
        String(!aberto)
      );

      mobileMenu.hidden = aberto;
    });

    // Fecha o menu ao selecionar uma seção.
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.hidden = true;
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }
}

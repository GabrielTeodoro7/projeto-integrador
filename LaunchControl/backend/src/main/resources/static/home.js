/* LaunchControl | Landing page publica. Isolada das telas autenticadas. */
"use strict";

function homeScreen() {
  const root = document.querySelector("#app");
  root.innerHTML = `
    <div class="lc-home" id="inicio">
      <style>
        .lc-home{--orange:#ff792d;--ink:#0a0d12;--muted:#aeb6c3;color:#f7f8fa;background:#0a0d12;font-family:Inter,system-ui,sans-serif;min-height:100vh;overflow:hidden}
        .lc-home *{box-sizing:border-box}.lc-home button{font:inherit;cursor:pointer}.lc-home a{color:inherit;text-decoration:none}.lc-home .wrap{max-width:1180px;margin:auto;padding:0 24px}
        .lc-home .nav{position:relative;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 0;background:transparent;border:0}
        .lc-home .brand{font-size:20px;font-weight:900;letter-spacing:-.9px;white-space:nowrap}.lc-home .brand span{color:var(--orange)}
        .lc-home .navlinks{display:flex;gap:28px;align-items:center;font-size:13px;color:#d6d9e0}.lc-home .navlinks a:hover{color:var(--orange)}
        .lc-home .actions{display:flex;gap:10px;align-items:center}.lc-home .btn{border-radius:9px;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;gap:9px;font-weight:750;font-size:14px;padding:14px 21px;transition:transform .2s,background .2s;min-height:46px}
        .lc-home .btn:hover{transform:translateY(-2px)}.lc-home .primary{background:var(--orange);color:#14100c}.lc-home .primary:hover{background:#ff944f}.lc-home .outline{border-color:#ffffff38;background:#ffffff0a;color:#fff}.lc-home .outline:hover{background:#ffffff1c}
        .lc-home .hero{position:relative;isolation:isolate;min-height:640px;display:flex;align-items:center;background:linear-gradient(90deg,#090c12 0%,#090c12e8 36%,#090c1280 70%,#090c1259 100%),url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85') center 53%/cover}
        .lc-home .hero:after{content:"";position:absolute;inset:auto 0 0;height:150px;background:linear-gradient(transparent,#0a0d12);z-index:-1}
        .lc-home .hero .wrap{width:100%;padding-top:58px;padding-bottom:80px}.lc-home .eyebrow{display:inline-flex;align-items:center;gap:9px;color:#ffac7e;font-size:11px;letter-spacing:2.5px;font-weight:800;text-transform:uppercase}
        .lc-home .eyebrow:before{content:"";height:6px;width:6px;background:var(--orange);border-radius:50%;box-shadow:0 0 16px var(--orange)}
        .lc-home h1{font-size:clamp(43px,6vw,78px);letter-spacing:-3.7px;line-height:1.04;margin:23px 0;max-width:790px;font-weight:850}
        .lc-home h1 em{font-style:normal;color:var(--orange)}.lc-home .lead{font-size:17px;line-height:1.75;max-width:555px;color:#c9ced8;margin-bottom:30px}
        .lc-home .hero-actions{display:flex;gap:12px;flex-wrap:wrap}.lc-home .hero-note{font-size:12px;color:#c2c7cf;margin-top:26px;display:flex;gap:9px;align-items:center}
        .lc-home .section{padding:95px 0}.lc-home .section-head{max-width:720px;margin-bottom:38px}.lc-home .kicker{color:var(--orange);font-size:12px;font-weight:850;letter-spacing:2.1px;text-transform:uppercase}
        .lc-home h2{font-size:clamp(30px,4vw,48px);letter-spacing:-1.7px;line-height:1.14;margin:15px 0 18px;font-weight:850}.lc-home .desc{font-size:16px;color:var(--muted);line-height:1.8}
        .lc-home .features{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px}.lc-home .feature{background:linear-gradient(145deg,#181d26,#10141b);border:1px solid #ffffff13;border-radius:18px;padding:30px;min-height:218px}
        .lc-home .feature .symbol{font-size:27px;display:inline-grid;place-items:center;width:51px;height:51px;background:#ff792d17;border:1px solid #ff792d45;border-radius:12px;margin-bottom:20px}
        .lc-home h3{font-size:19px;letter-spacing:-.5px;margin:0 0 11px}.lc-home .feature p,.lc-home .role p,.lc-home .step p{color:var(--muted);font-size:14px;line-height:1.75;margin:0}
        .lc-home .band{background:#111720;border-block:1px solid #ffffff12}.lc-home .roles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px}
        .lc-home .role{border:1px solid #ffffff19;border-radius:17px;padding:34px 27px;background:linear-gradient(180deg,#1c2430,#131820)}.lc-home .role small{display:block;color:var(--orange);font-weight:800;letter-spacing:1.4px;margin-bottom:24px}.lc-home .role h3{font-size:24px}.lc-home .role .btn{margin-top:24px;width:100%}
        .lc-home .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}.lc-home .step{border-top:1px solid #ffffff2b;padding-top:20px}.lc-home .step b{color:var(--orange);font-size:15px}.lc-home .step h3{margin-top:18px}
        .lc-home .cta{position:relative;border:1px solid #ff792d4a;background:radial-gradient(circle at 80% 20%,#ff792d28,transparent 45%),linear-gradient(135deg,#25212a,#11151d);border-radius:24px;padding:65px 60px}.lc-home .cta h2{max-width:700px}.lc-home .cta .desc{max-width:630px;margin-bottom:28px}
        .lc-home .footer{padding:42px 0;border-top:1px solid #ffffff1b}.lc-home .footrow{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}.lc-home .footer p{color:#939aa6;font-size:12px;line-height:1.6}
        .lc-home .menu-toggle{display:none}.lc-home a:focus-visible,.lc-home button:focus-visible{outline:3px solid #ffb88e;outline-offset:3px}
        @media(max-width:850px){.lc-home .navlinks{display:none}.lc-home .features,.lc-home .roles{grid-template-columns:repeat(2,minmax(0,1fr))}.lc-home .hero{min-height:590px;background-position:60% center}.lc-home .hero .wrap{padding-top:40px}}
        @media(max-width:600px){.lc-home .wrap{padding:0 19px}.lc-home .nav{padding:17px 0}.lc-home .nav .actions .outline{display:none}.lc-home .brand{font-size:17px}.lc-home .nav .btn{padding:10px 13px;min-height:40px;font-size:12px}.lc-home .hero{min-height:630px;background:linear-gradient(90deg,#090c12ef,#090c12a8),url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=80') 60% center/cover}.lc-home h1{font-size:46px;letter-spacing:-2.4px}.lc-home .lead{font-size:15px}.lc-home .section{padding:66px 0}.lc-home .features,.lc-home .roles,.lc-home .steps{grid-template-columns:1fr}.lc-home .feature{min-height:auto}.lc-home .cta{padding:37px 25px}.lc-home .hero-actions .btn{width:100%}}
        @media(prefers-reduced-motion:reduce){.lc-home .btn{transition:none}}
      </style>
      <header class="wrap">
        <nav class="nav" aria-label="Navegação principal">
          <a class="brand" href="#inicio" aria-label="LaunchControl, início">LAUNCH<span>CONTROL</span></a>
          <div class="navlinks"><a href="#solucoes">Soluções</a><a href="#para-quem">Para quem</a><a href="#como-funciona">Como funciona</a></div>
          <div class="actions"><button class="btn outline" type="button" data-home-login>Entrar</button><button class="btn primary" type="button" data-home-register>Criar conta ↗</button></div>
        </nav>
      </header>
      <main>
        <section class="hero" aria-labelledby="home-title">
          <div class="wrap">
            <span class="eyebrow">GESTÃO AUTOMOTIVA INTELIGENTE</span>
            <h1 id="home-title">Seu veículo merece cuidado. <em>Sua gestão, controle.</em></h1>
            <p class="lead">Do primeiro atendimento ao serviço concluído: clientes, oficinas e fornecedores conectados em um só lugar, com mais clareza em cada etapa.</p>
            <div class="hero-actions"><button class="btn primary" type="button" data-home-register>Comece agora <span aria-hidden="true">↗</span></button><a class="btn outline" href="#solucoes">Conheça a plataforma ↓</a></div>
            <p class="hero-note">✓ Acompanhe solicitações e orçamentos em uma única plataforma.</p>
          </div>
        </section>
        <section class="section" id="solucoes">
          <div class="wrap">
            <div class="section-head"><span class="kicker">TUDO CONECTADO</span><h2>Menos desencontro. Mais controle em cada atendimento.</h2><p class="desc">Organize informações importantes e acompanhe o andamento dos serviços sem depender de conversas espalhadas.</p></div>
            <div class="features">
              <article class="feature"><span class="symbol" aria-hidden="true">▤</span><h3>Solicitações de serviço</h3><p>Registre o que o veículo precisa e acompanhe o andamento da solicitação.</p></article>
              <article class="feature"><span class="symbol" aria-hidden="true">◇</span><h3>Orçamentos claros</h3><p>Visualize propostas e aprove ou recuse orçamentos dentro do sistema.</p></article>
              <article class="feature"><span class="symbol" aria-hidden="true">▣</span><h3>Veículos organizados</h3><p>Cadastre seus veículos e consulte o histórico dos atendimentos.</p></article>
              <article class="feature"><span class="symbol" aria-hidden="true">↗</span><h3>Acompanhamento</h3><p>Consulte status, atualizações e informações do serviço em execução.</p></article>
              <article class="feature"><span class="symbol" aria-hidden="true">⚙</span><h3>Peças e fornecedores</h3><p>Organize o estoque e pesquise peças em plataformas externas.</p></article>
              <article class="feature"><span class="symbol" aria-hidden="true">✉</span><h3>Comunicação centralizada</h3><p>Troque mensagens relacionadas ao atendimento e consulte notificações.</p></article>
            </div>
          </div>
        </section>
        <section class="section band" id="para-quem">
          <div class="wrap">
            <div class="section-head"><span class="kicker">FEITO PARA CADA PERFIL</span><h2>Uma plataforma. Diferentes necessidades.</h2><p class="desc">Cada perfil encontra ferramentas relacionadas ao seu papel no atendimento automotivo.</p></div>
            <div class="roles">
              <article class="role"><small>01 / CLIENTES</small><h3>Mais tranquilidade para cuidar do seu carro.</h3><p>Cadastre veículos, solicite serviços, avalie orçamentos e acompanhe cada etapa.</p><button class="btn outline" type="button" data-home-register>Sou cliente ↗</button></article>
              <article class="role"><small>02 / OFICINAS</small><h3>Atendimentos mais organizados.</h3><p>Receba solicitações, prepare propostas e registre o andamento dos serviços.</p><button class="btn outline" type="button" data-home-register>Sou oficina ↗</button></article>
              <article class="role"><small>03 / FORNECEDORES</small><h3>Peças e informações em um só ambiente.</h3><p>Cadastre itens e mantenha informações de estoque disponíveis no sistema.</p><button class="btn outline" type="button" data-home-register>Sou fornecedor ↗</button></article>
            </div>
          </div>
        </section>
        <section class="section" id="como-funciona">
          <div class="wrap">
            <div class="section-head"><span class="kicker">SIMPLES DO INÍCIO AO FIM</span><h2>Começar é mais fácil do que parece.</h2></div>
            <div class="steps">
              <article class="step"><b>01</b><h3>Crie sua conta</h3><p>Escolha o perfil que representa sua atuação na plataforma.</p></article>
              <article class="step"><b>02</b><h3>Organize suas informações</h3><p>Cadastre veículos, serviços ou peças, conforme seu perfil.</p></article>
              <article class="step"><b>03</b><h3>Acompanhe tudo</h3><p>Consulte solicitações, propostas e atualizações no mesmo ambiente.</p></article>
            </div>
          </div>
        </section>
        <section class="section" id="comecar"><div class="wrap"><div class="cta"><span class="kicker">PRONTO PARA COMEÇAR?</span><h2>Uma nova forma de conectar o universo automotivo.</h2><p class="desc">Tenha mais organização e visibilidade no relacionamento entre clientes, oficinas e fornecedores.</p><button class="btn primary" type="button" data-home-register>Criar minha conta ↗</button></div></div></section>
      </main>
      <footer class="footer"><div class="wrap footrow"><div><a href="#inicio" class="brand">LAUNCH<span>CONTROL</span></a><p>Gestão automotiva em um só lugar.</p></div><p>© 2026 LaunchControl · Projeto de plataforma automotiva.</p></div></footer>
    </div>
  `;
  root.querySelectorAll("[data-home-login]").forEach(el => el.addEventListener("click", () => loginScreen(false)));
  root.querySelectorAll("[data-home-register]").forEach(el => el.addEventListener("click", () => loginScreen(true)));
}

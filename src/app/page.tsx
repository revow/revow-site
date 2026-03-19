import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/5521988889760?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Revow!";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ═══════════════ HEADER ═══════════════ */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-teal-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Image src="/images/logo_white_revow.png" alt="Revow" width={120} height={32} priority />
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#problema" className="transition hover:text-white">Problema</a>
          <a href="#solucao" className="transition hover:text-white">Solução</a>
          <a href="#produto" className="transition hover:text-white">Produto</a>
          <a href="#diferencial" className="transition hover:text-white">Diferencial</a>
          <a href="#time" className="transition hover:text-white">Time</a>
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-teal-accent px-5 py-2.5 text-sm font-semibold text-teal-dark transition hover:bg-cyan-glow">
          Fale Conosco
        </a>
      </div>
    </header>
  );
}

/* ═══════════════ HERO ═══════════════ */
function Hero() {
  return (
    <section className="hero-gradient noise-overlay relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-sm font-medium text-teal-accent">
            Revenue Operating System
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Sua receita está vazando.{" "}
            <span className="text-teal-accent">A Revow encontra e protege.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Inteligência de receita com IA que detecta perdas, prescreve ações e aprende com cada decisão.
            O primeiro Revenue Operating System do Brasil.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="glow-teal inline-flex items-center justify-center gap-2 rounded-full bg-teal-accent px-8 py-4 text-base font-semibold text-teal-dark transition hover:bg-cyan-glow">
              <WhatsAppIcon className="h-5 w-5" />
              Fale pelo WhatsApp
            </a>
            <a href="#solucao" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition hover:border-white/40 hover:bg-white/5">
              Veja como funciona
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-teal-accent/10 blur-[120px]" />
      <div className="absolute -left-20 bottom-1/4 h-64 w-64 rounded-full bg-cyan-glow/5 blur-[100px]" />
    </section>
  );
}

/* ═══════════════ LOGO BAR ═══════════════ */
function LogoBar() {
  const clients = [
    { name: "Carrefour", vertical: "Fuel Retail" },
    { name: "Inspirali (Ânima)", vertical: "Educação" },
    { name: "Sky", vertical: "Telecom" },
    { name: "Simulation", vertical: "Ed. Corporativa" },
  ];
  return (
    <section className="border-b border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-gray-400">
          Validado em 3 verticais &middot; Produção real &middot; Resultados medidos
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {clients.map((c) => (
            <div key={c.name} className="text-center">
              <p className="text-lg font-semibold text-teal-dark">{c.name}</p>
              <p className="text-xs text-gray-400">{c.vertical}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ PROBLEMA ═══════════════ */
function Problem() {
  const problems = [
    {
      title: "Silos de Dados",
      desc: "KPIs desalinhados mascaram ineficiência entre Vendas, Marketing e CS. Uma campanha líder em MQLs frequentemente destrói o CAC e não converte.",
    },
    {
      title: "Ferramentas Passivas",
      desc: "O BI tradicional é um espelho retrovisor. Mostra o que aconteceu, mas falha em diagnosticar onde a operação quebrou ou como consertar em tempo real.",
    },
    {
      title: "Diagnóstico Manual",
      desc: "90% dos vazamentos de receita não são encontrados por análise humana. A busca manual sempre perde para a velocidade das operações diárias.",
    },
  ];
  return (
    <section id="problema" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-accent">O Problema</p>
          <h2 className="mt-3 text-3xl font-bold text-teal-dark sm:text-4xl md:text-5xl">
            Empresas perdem de 4% a 10% da receita todo ano
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Vazamentos operacionais invisíveis drenam receita enquanto as ferramentas tradicionais mostram apenas o retrovisor.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-teal-accent/30 hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-teal-dark">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ SOLUÇÃO ═══════════════ */
function Solution() {
  const layers = [
    { number: "01", title: "Conecta", subtitle: "Camada de Dados", desc: "Conecta fontes legadas (ERP, CRM, BigQuery, APIs), organizando e validando a integridade da informação em tempo real.", color: "bg-teal-dark" },
    { number: "02", title: "Entende", subtitle: "Camada de Inteligência", desc: "Mapeia o fluxo real de receita da sua empresa usando modelo formal validado que traduz a complexidade do negócio em estados observáveis.", color: "bg-teal-mid" },
    { number: "03", title: "Age", subtitle: "Camada de Entrega", desc: "Dashboards ativos com prescrição de ações e Copilots multi-agente que interagem diretamente com a operação via plataforma e WhatsApp.", color: "bg-teal-accent" },
  ];
  return (
    <section id="solucao" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-accent">A Solução</p>
          <h2 className="mt-3 text-3xl font-bold text-teal-dark sm:text-4xl md:text-5xl">
            Revow não é um dashboard.<br />
            <span className="text-teal-accent">É um Sistema Operacional de Receita.</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {layers.map((l) => (
            <div key={l.number} className="group relative overflow-hidden rounded-2xl border border-gray-200 p-8 transition hover:border-teal-accent/40 hover:shadow-xl">
              <span className="absolute -right-4 -top-4 text-8xl font-black text-gray-100 transition group-hover:text-teal-light">{l.number}</span>
              <div className="relative z-10">
                <div className={`mb-4 inline-block rounded-full ${l.color} px-3 py-1 text-xs font-semibold text-white`}>{l.subtitle}</div>
                <h3 className="mb-3 text-2xl font-bold text-teal-dark">{l.title}</h3>
                <p className="text-gray-500 leading-relaxed">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ PRODUTO ═══════════════ */
function Product() {
  const features = [
    { title: "Visão Unificada", desc: "Centralização absoluta de KPIs em tempo real. Monitoramento de 1.000+ pontos de venda, tanques, campus — qualquer unidade operacional." },
    { title: "Previsibilidade", desc: "Sugestões autônomas de ação baseadas em projeção de esgotamento e regras de negócio. O sistema age antes que o problema vire prejuízo." },
    { title: "Revenue Copilot", desc: "Agentes de IA via painel e WhatsApp interagindo com a operação diária para correção imediata de rotas e análise de impacto." },
    { title: "Alertas Inteligentes", desc: "Circuit Breakers nativos: o sistema se recusa a recomendar quando não confia nos dados. Anti-alucinação por design." },
  ];
  return (
    <section id="produto" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-accent">Produto</p>
          <h2 className="mt-3 text-3xl font-bold text-teal-dark sm:text-4xl md:text-5xl">Visibilidade absoluta e IA conversacional</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">Pare de adivinhar. Comece a ver.</p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-teal-accent/30 hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold text-teal-dark">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ DIFERENCIAL ═══════════════ */
function Differentiator() {
  const verticals = [
    { vertical: "Fuel Retail", client: "Carrefour", unit: "Tanque", offering: "Gasolina", state: "Estoque" },
    { vertical: "Telecom", client: "Sky", unit: "Instalador", offering: "Assinatura", state: "Backlog" },
    { vertical: "Educação", client: "Inspirali", unit: "Campus", offering: "Vaga Medicina", state: "Funil" },
  ];
  const bullets = [
    "Funciona em qualquer vertical — comprovado em 3",
    "IA que explica POR QUE — não só mostra dados",
    "Alertas que param antes de errar — anti-alucinação nativo",
    "Preço acessível para mid-market — não cobra $1M+",
  ];
  return (
    <section id="diferencial" className="hero-gradient noise-overlay relative py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-accent">Diferencial</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">O mesmo cérebro. Qualquer vertical.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Receita é um sistema físico mapeável, não apenas um KPI. A mesma inteligência funciona em qualquer indústria.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {verticals.map((v) => (
            <div key={v.client} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-teal-accent/30 hover:bg-white/10">
              <p className="text-sm font-medium text-teal-accent">{v.vertical}</p>
              <h3 className="mt-1 text-xl font-bold text-white">{v.client}</h3>
              <div className="mt-6 space-y-3">
                {[["Unidade", v.unit], ["Oferta", v.offering], ["Estado", v.state]].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-sm text-white/50">{label}</span>
                    <span className="text-sm font-medium text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <h3 className="mb-8 text-2xl font-bold text-white">O que nenhuma outra plataforma faz</h3>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {bullets.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-left">
                <svg className="h-5 w-5 shrink-0 text-teal-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ METODOLOGIA ═══════════════ */
function Methodology() {
  const methods = [
    { name: "PACE", desc: "4 curvas — Referência, Meta, Realizado, Projeção. Substitui benchmarking ingênuo por bússola direcional exata." },
    { name: "Loss Typology", desc: "Classifica perda de receita em Vazamento, Ruptura, Gargalo e Degradação. Cada tipo gera ação diferente." },
    { name: "Circuit Breakers", desc: "IA avalia a própria confiabilidade e se recusa a recomendar quando a confiança nos dados é baixa." },
    { name: "Learning Loop", desc: "O sistema mede se recomendações funcionaram e calibra modelos preditivos automaticamente." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-accent">Metodologia Proprietária</p>
          <h2 className="mt-3 text-3xl font-bold text-teal-dark sm:text-4xl">Engenharia de Produção aplicada à Receita</h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((m) => (
            <div key={m.name} className="rounded-2xl border border-gray-200 p-6 text-center transition hover:border-teal-accent/30 hover:shadow-lg">
              <h3 className="mb-3 text-lg font-bold text-teal-dark">{m.name}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ TIME ═══════════════ */
function Team() {
  const founders = [
    { name: "Wecsley Vieira", role: "COO & Comercial", desc: "25+ anos em operações, CX e transformação digital. Ex-COO da Virtual Connection." },
    { name: "Mariana Spinelli", role: "CEO & Experience", desc: "25+ anos liderando estratégia de receita e transformação digital em edtechs, startups e grandes empresas." },
    { name: "Giulliano Bueno", role: "CTO & Product", desc: "20+ anos em tech, produto e inovação. Ex-Head of Engineering na Blacklane, Senior Director na Oviva." },
  ];
  return (
    <section id="time" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-accent">Time</p>
          <h2 className="mt-3 text-3xl font-bold text-teal-dark sm:text-4xl">Quem está construindo</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">70+ anos combinados em receita, operações e engenharia.</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {founders.map((f) => (
            <div key={f.name} className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-teal-dark text-2xl font-bold text-white">
                {f.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="text-lg font-semibold text-teal-dark">{f.name}</h3>
              <p className="text-sm font-medium text-teal-accent">{f.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ CTA FINAL ═══════════════ */
function FinalCTA() {
  return (
    <section className="hero-gradient noise-overlay relative py-24">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Vamos revolucionar a operação de receita — juntos.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
          Converse diretamente com a fundadora. Sem formulário, sem espera.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="glow-teal mt-10 inline-flex items-center gap-3 rounded-full bg-teal-accent px-10 py-5 text-lg font-semibold text-teal-dark transition hover:bg-cyan-glow">
          <WhatsAppIcon className="h-6 w-6" />
          Fale pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ═══════════════ FOOTER ═══════════════ */
function Footer() {
  return (
    <footer className="bg-teal-dark py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Image src="/images/logo_white_revow.png" alt="Revow" width={100} height={28} />
          <p className="text-sm text-white/40">&copy; 2026 Revow. Todos os direitos reservados.</p>
          <a href="mailto:mariana@revow.ai" className="text-sm text-white/60 transition hover:text-white">mariana@revow.ai</a>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════ PAGE ═══════════════ */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBar />
        <Problem />
        <Solution />
        <Product />
        <Differentiator />
        <Methodology />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

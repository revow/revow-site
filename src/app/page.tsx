import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import Typewriter from "@/components/Typewriter";
import SimFunnel from "@/components/SimFunnel";
import SimAlerts from "@/components/SimAlerts";
import SimCopilot from "@/components/SimCopilot";
import SimConversion from "@/components/SimConversion";

const WHATSAPP = "https://wa.me/5521988889760?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Revow!";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
);

/* ═══════════ HEADER ═══════════ */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Image src="/images/logo_cor_revow.png" alt="Revow" width={110} height={30} priority />
        <nav className="hidden md:flex items-center gap-8 text-sm text-text-secondary font-medium">
          <a href="#solutions" className="hover:text-accent transition">Solutions</a>
          <a href="#platform" className="hover:text-accent transition">Platform</a>
          <a href="#how" className="hover:text-accent transition">How It Works</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition shadow-sm">
          Book a Demo
        </a>
      </div>
    </header>
  );
}

/* ═══════════ HERO ═══════════ */
function Hero() {
  return (
    <section className="hero-light relative flex items-center pt-20 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:py-14 grid md:grid-cols-[2fr_1fr] gap-8 items-center">
        <div>
          <FadeUp>
            <span className="inline-block rounded-full border border-accent/20 bg-accent-bg px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-4">
              Revenue Operating System
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-text-primary">
              From blind spots<br />to{" "}
              <span className="text-accent">smart signals.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-4 text-lg text-text-secondary max-w-xl leading-relaxed">
              AI-powered revenue intelligence that maps your entire revenue cycle,
              detects invisible leaks, and prescribes actions — customized to your business.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <p className="mt-2 text-base text-text-muted h-7">
              <Typewriter />
            </p>
          </FadeUp>
          <FadeUp delay={400}>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-light transition shadow-md shadow-accent/20">
                <WhatsAppIcon className="w-5 h-5" />
                Book a Demo
              </a>
              <a href="#solutions"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-base font-medium text-text-secondary hover:border-accent/30 hover:text-accent transition">
                See How It Works
              </a>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={200}>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bg.png"
              alt="Revow Revenue Operating System — Three layers: Data, Intelligence, and Delivery"
              className="w-full h-auto max-w-[560px] mx-auto mix-blend-screen"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════ TRUST BAR ═══════════ */
function TrustBar() {
  const verticals = ["Education", "Fuel & Energy", "Telecom", "Enterprise Services"];
  return (
    <section className="border-y border-border py-10 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs text-text-muted font-medium uppercase tracking-widest mb-6">Trusted across multiple industries</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {verticals.map((v) => (
            <span key={v} className="text-sm font-semibold text-text-primary/60 tracking-wide">{v}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ PROBLEM ═══════════ */
function Problem() {
  const problems = [
    { title: "Data Silos", desc: "Misaligned KPIs across Sales, Marketing, and CS mask inefficiency. A campaign leading in MQLs often destroys CAC without converting." },
    { title: "Passive Tools", desc: "Traditional BI is a rearview mirror. It shows what happened but fails to diagnose where operations broke or how to fix them in real time." },
    { title: "Manual Diagnosis", desc: "90% of revenue leaks aren't found by human analysis. Manual search always loses to the speed of daily operations." },
  ];
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">The Problem</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
              Companies lose 20–30% of revenue to process inefficiency
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Fragmented data, passive dashboards, and manual processes create blind spots that drain revenue silently — every single day.
            </p>
          </div>
        </FadeUp>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <FadeUp key={p.title} delay={i * 120}>
              <div className="rounded-2xl bg-white border border-border p-8 h-full hover:border-accent/20 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-text-primary mb-3">{p.title}</h3>
                <p className="text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ PLATFORM (3 LAYERS) ═══════════ */
function Platform() {
  const layers = [
    { n: "01", title: "Data Layer", subtitle: "Connect", desc: "Integrates your legacy sources (ERP, CRM, BigQuery, APIs), organizing and validating data integrity in real time. Every signal captured, nothing lost." },
    { n: "02", title: "Intelligence Layer", subtitle: "Understand", desc: "The brain of the system. Our proprietary revenue ontology translates your business complexity into a validated formal model — turning loose concepts into observable, actionable states." },
    { n: "03", title: "Delivery Layer", subtitle: "Act", desc: "Active dashboards with action prescriptions and multi-agent AI Copilots that interact directly with your front line — via platform, WhatsApp, or API." },
  ];
  return (
    <section id="platform" className="section-dark py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">The Platform</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Not a dashboard.<br />A Revenue Operating System.
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Three layers working together to see, understand, and protect your revenue — autonomously.
            </p>
          </div>
        </FadeUp>
        <div className="grid gap-6 md:grid-cols-3">
          {layers.map((l, i) => (
            <FadeUp key={l.n} delay={i * 150}>
              <div className="glass-dark rounded-2xl p-8 h-full hover:border-accent-light/20 transition group">
                <div className="w-10 h-10 rounded-xl bg-accent-light/10 flex items-center justify-center text-accent-light text-sm font-bold mb-5 group-hover:bg-accent-light/20 transition">{l.n}</div>
                <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-1">{l.subtitle}</p>
                <h3 className="text-xl font-bold text-white mb-3">{l.title}</h3>
                <p className="text-white/50 leading-relaxed">{l.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ SOLUTIONS ═══════════ */
function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Solutions</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
              See what your revenue is really doing
            </h2>
          </div>
        </FadeUp>
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeUp><div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Revenue Monitoring</h3>
            <p className="text-text-secondary mb-5">Real-time hourly tracking with PACE methodology — four curves that replace naive benchmarking with directional precision.</p>
            <SimFunnel />
          </div></FadeUp>
          <FadeUp delay={150}><div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Funnel Intelligence</h3>
            <p className="text-text-secondary mb-5">End-to-end conversion with baseline, target, and trend detection. Know where value is created and where it leaks.</p>
            <SimConversion />
          </div></FadeUp>
          <FadeUp><div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Alert Engine</h3>
            <p className="text-text-secondary mb-5">Every leak is classified by type and severity. Your team knows exactly what to do, not just that something is wrong.</p>
            <SimAlerts />
          </div></FadeUp>
          <FadeUp delay={150}><div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Revenue Copilot</h3>
            <p className="text-text-secondary mb-5">Ask questions in natural language — get answers grounded in your real data, with anti-hallucination safeguards built in.</p>
            <SimCopilot />
          </div></FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ═══════════ HOW IT WORKS ═══════════ */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Consult", desc: "We study your revenue operations, map every touchpoint, and design a custom intelligence layer tailored to your business." },
    { n: "02", title: "Connect", desc: "We integrate your data sources into our proprietary revenue ontology — the brain that understands your business as a system." },
    { n: "03", title: "Protect", desc: "Your custom platform monitors 24/7, detects leaks, sends smart alerts, and prescribes actions via dashboard, WhatsApp, or API." },
  ];
  return (
    <section id="how" className="py-24 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">How It Works</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
              Built for <span className="text-accent">your</span> revenue cycle
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Not a template. A custom revenue operating system engineered around how your business actually works.
            </p>
          </div>
        </FadeUp>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 150}>
              <div className="rounded-2xl bg-white border border-border p-8 h-full hover:border-accent/20 hover:shadow-lg transition group">
                <div className="w-10 h-10 rounded-xl bg-accent-bg flex items-center justify-center text-accent text-sm font-bold mb-5">{s.n}</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{s.title}</h3>
                <p className="text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ DIFFERENCE ═══════════ */
function Difference() {
  const points = [
    { title: "Custom-built for your revenue cycle", desc: "Every deployment is engineered around your specific revenue operations — not a one-size-fits-all template." },
    { title: "Proprietary revenue ontology", desc: "A formal model that understands revenue as a system: states, transitions, events, and diagnostic rules." },
    { title: "AI that knows when NOT to act", desc: "Circuit Breakers evaluate data confidence and refuse to recommend when trust is low. Anti-hallucination by design." },
    { title: "Proven across industries", desc: "The same intelligence engine validated in education, fuel retail, telecom, and services — because revenue follows universal patterns." },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Why Revow</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
              What no other platform does
            </h2>
          </div>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-2">
          {points.map((p, i) => (
            <FadeUp key={p.title} delay={i * 100}>
              <div className="rounded-2xl bg-bg-secondary border border-border p-8 h-full hover:border-accent/20 hover:shadow-lg transition">
                <div className="w-8 h-8 rounded-lg bg-accent-bg flex items-center justify-center text-accent mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{p.title}</h3>
                <p className="text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ CTA ═══════════ */
function CTA() {
  return (
    <section id="contact" className="section-dark py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Let&apos;s protect your revenue —{" "}
            <span className="text-accent-light">together.</span>
          </h2>
          <p className="mt-6 text-lg text-white/50">Talk directly to our team. No forms, no waiting.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-light px-10 py-5 text-lg font-semibold text-white hover:bg-accent-glow transition shadow-lg shadow-accent-light/20">
              <WhatsAppIcon className="w-5 h-5" />
              Talk on WhatsApp
            </a>
            <a href="mailto:mariana@revow.ai"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-10 py-5 text-lg font-medium text-white/60 hover:border-white/30 hover:text-white transition">
              Email Us
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════ FOOTER ═══════════ */
function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image src="/images/logo_cor_revow.png" alt="Revow" width={90} height={24} />
          <div className="flex gap-6 text-sm text-text-muted">
            <a href="#solutions" className="hover:text-accent transition">Solutions</a>
            <a href="#platform" className="hover:text-accent transition">Platform</a>
            <a href="#how" className="hover:text-accent transition">How It Works</a>
            <a href="mailto:mariana@revow.ai" className="hover:text-accent transition">Contact</a>
          </div>
          <p className="text-xs text-text-muted">&copy; 2026 Revow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════ PAGE ═══════════ */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Platform />
        <Solutions />
        <HowItWorks />
        <Difference />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

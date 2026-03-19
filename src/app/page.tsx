import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import Typewriter from "@/components/Typewriter";
import SimFunnel from "@/components/SimFunnel";
import SimAlerts from "@/components/SimAlerts";
import SimCopilot from "@/components/SimCopilot";
import SimConversion from "@/components/SimConversion";

const WHATSAPP = "https://wa.me/5521988889760?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Revow!";
const DEMO_CTA = WHATSAPP;

/* ═══════════ HEADER ═══════════ */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/70 backdrop-blur-xl border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Image src="/images/logo_white_revow.png" alt="Revow" width={110} height={30} priority />
        <nav className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <a href="#solutions" className="hover:text-text-primary transition">Solutions</a>
          <a href="#how" className="hover:text-text-primary transition">How It Works</a>
          <a href="#difference" className="hover:text-text-primary transition">Why Revow</a>
          <a href="#contact" className="hover:text-text-primary transition">Contact</a>
        </nav>
        <a href={DEMO_CTA} target="_blank" rel="noopener noreferrer"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg-primary hover:bg-accent-glow transition">
          Book a Demo
        </a>
      </div>
    </header>
  );
}

/* ═══════════ HERO ═══════════ */
function Hero() {
  return (
    <section className="mesh-bg relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          <FadeUp>
            <span className="inline-block rounded-full border border-accent/20 bg-accent-soft px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-6">
              Revenue Operating System
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
              From blind spots<br />to{" "}
              <span className="text-accent">smart signals.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
              AI-powered revenue intelligence that maps your entire revenue cycle,
              detects invisible leaks, and prescribes actions — customized to your business.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <p className="mt-4 text-base text-text-muted h-7">
              <Typewriter />
            </p>
          </FadeUp>
          <FadeUp delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href={DEMO_CTA} target="_blank" rel="noopener noreferrer"
                className="glow inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-bg-primary hover:bg-accent-glow transition">
                Book a Demo
              </a>
              <a href="#solutions"
                className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-base font-medium text-text-secondary hover:border-accent/30 hover:text-text-primary transition">
                See How It Works
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
      {/* AI IMAGE PLACEHOLDER: Premium dark 3D abstract visualization — interconnected glowing nodes
          forming a revenue flow network, teal/cyan particles on deep navy background, depth of field,
          cinematic lighting. Size: 600x600px. Replace with AI-generated image. */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] hidden lg:block opacity-40">
        <div className="w-full h-full rounded-full bg-accent/5 blur-[100px]" />
      </div>
    </section>
  );
}

/* ═══════════ TRUST BAR ═══════════ */
function TrustBar() {
  const verticals = ["Education", "Fuel & Energy", "Telecom", "Enterprise Services"];
  return (
    <section className="border-y border-border py-10 bg-bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-text-muted mb-6">Trusted across multiple industries</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {verticals.map((v) => (
            <span key={v} className="text-sm font-medium text-text-secondary tracking-wide">{v}</span>
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
    <section className="py-24 bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">The Problem</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold">
              Companies lose 4–10% of revenue every year to invisible leaks
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Fragmented data, passive dashboards, and manual processes create blind spots that drain revenue silently.
            </p>
          </div>
        </FadeUp>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <FadeUp key={p.title} delay={i * 120}>
              <div className="glass rounded-2xl p-8 h-full hover:border-border-hover transition">
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

/* ═══════════ SOLUTIONS ═══════════ */
function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Solutions</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold">
              Everything you need to protect your revenue
            </h2>
          </div>
        </FadeUp>
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeUp delay={0}>
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Revenue Monitoring</h3>
              <p className="text-text-secondary mb-6">Real-time hourly tracking of your entire revenue flow. Compare current performance against baseline and targets with PACE methodology — the four curves that replace naive benchmarking.</p>
              <SimFunnel />
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Alert Engine</h3>
              <p className="text-text-secondary mb-6">Automatic detection of leaks, bottlenecks, and anomalies. Every alert is classified by type and severity — so your team knows exactly what to do, not just that something is wrong.</p>
              <SimAlerts />
            </div>
          </FadeUp>
          <FadeUp delay={0}>
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Revenue Copilot</h3>
              <p className="text-text-secondary mb-6">AI that explains diagnostics, identifies root causes, and prescribes specific actions. Ask questions in natural language — get answers grounded in your real data, not hallucinations.</p>
              <SimCopilot />
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Funnel Intelligence</h3>
              <p className="text-text-secondary mb-6">End-to-end conversion analysis with baseline comparison, target tracking, and trend detection. Know exactly where value is created and where it leaks — at every stage.</p>
              <SimConversion />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ═══════════ HOW IT WORKS ═══════════ */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Consult", desc: "We study your revenue operations, map every touchpoint in your revenue cycle, and design a custom intelligence layer tailored to your business." },
    { n: "02", title: "Connect", desc: "We integrate your data sources — ERP, CRM, BigQuery, APIs — into our proprietary revenue ontology. The brain that understands your business as a system." },
    { n: "03", title: "Protect", desc: "Your custom platform monitors 24/7, detects leaks in real time, sends smart alerts, and prescribes actions via dashboard, WhatsApp, or API." },
  ];
  return (
    <section id="how" className="py-24 bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">How It Works</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold">
              Built for <span className="text-accent">your</span> revenue cycle
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Not a template. A custom revenue operating system engineered around how your business actually works.
            </p>
          </div>
        </FadeUp>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 150}>
              <div className="glass rounded-2xl p-8 h-full relative overflow-hidden group hover:border-border-hover transition">
                <span className="absolute -right-2 -top-4 text-7xl font-black text-white/[0.03] group-hover:text-accent/[0.06] transition">{s.n}</span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-sm font-bold mb-5">{s.n}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{s.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
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
    { title: "Custom-built for your revenue cycle", desc: "Not a one-size-fits-all dashboard. Every deployment is engineered around your specific revenue operations." },
    { title: "Proprietary revenue ontology", desc: "33 classes, 52 relationships, 24 diagnostic rules — a formal model that understands revenue as a system, not just numbers." },
    { title: "AI that knows when NOT to act", desc: "Circuit Breakers evaluate data confidence and refuse to recommend when trust is low. Anti-hallucination by design." },
    { title: "Proven across industries", desc: "The same intelligence engine works in education, fuel retail, telecom, and services — because revenue follows universal patterns." },
  ];
  return (
    <section id="difference" className="py-24 mesh-bg">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Why Revow</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold">
              Not another dashboard.<br />A Revenue Operating System.
            </h2>
          </div>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-2">
          {points.map((p, i) => (
            <FadeUp key={p.title} delay={i * 100}>
              <div className="glass rounded-2xl p-8 h-full hover:border-border-hover transition">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
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
    <section id="contact" className="py-24 bg-bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold">
            Let&apos;s protect your revenue —{" "}
            <span className="text-accent">together.</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary">Talk directly to our team. No forms, no waiting.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={DEMO_CTA} target="_blank" rel="noopener noreferrer"
              className="glow inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-5 text-lg font-semibold text-bg-primary hover:bg-accent-glow transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Talk on WhatsApp
            </a>
            <a href="mailto:mariana@revow.ai"
              className="inline-flex items-center justify-center rounded-full border border-border px-10 py-5 text-lg font-medium text-text-secondary hover:border-accent/30 hover:text-text-primary transition">
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
    <footer className="bg-bg-primary border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image src="/images/logo_white_revow.png" alt="Revow" width={90} height={24} />
          <div className="flex gap-6 text-sm text-text-muted">
            <a href="#solutions" className="hover:text-text-primary transition">Solutions</a>
            <a href="#how" className="hover:text-text-primary transition">How It Works</a>
            <a href="#difference" className="hover:text-text-primary transition">Why Revow</a>
            <a href="mailto:mariana@revow.ai" className="hover:text-text-primary transition">Contact</a>
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
        <Solutions />
        <HowItWorks />
        <Difference />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

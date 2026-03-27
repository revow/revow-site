import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import Typewriter from "@/components/Typewriter";
import SimFunnel from "@/components/SimFunnel";
import SimAlerts from "@/components/SimAlerts";
import SimCopilot from "@/components/SimCopilot";
import SimConversion from "@/components/SimConversion";
import LangSwitcher from "@/components/LangSwitcher";
import MobileMenu from "@/components/MobileMenu";
import { getMessages } from "@/i18n";

const WA_NUMBER = "5521988889760";

function whatsappUrl(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
);

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getMessages(locale);
  const wa = whatsappUrl(t.nav.whatsapp_msg);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Image src="/images/logo_cor_revow.png" alt="Revow" width={110} height={30} priority />
          <nav className="hidden md:flex items-center gap-8 text-sm text-text-secondary font-medium">
            <a href="#solutions" className="hover:text-accent transition">{t.nav.solutions}</a>
            <a href="#platform" className="hover:text-accent transition">{t.nav.platform}</a>
            <a href="#how" className="hover:text-accent transition">{t.nav.how}</a>
            <a href={`/${locale}/blog`} className="hover:text-accent transition">{t.blog.label}</a>
            <a href="#contact" className="hover:text-accent transition">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <LangSwitcher locale={locale} />
            <a href="https://demo.revow.ai" target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex rounded-full border border-accent px-5 py-2.5 text-sm font-semibold text-accent hover:bg-accent hover:text-white transition">
              {t.nav.demo}
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition shadow-sm">
              {t.nav.cta}
            </a>
            <MobileMenu nav={t.nav} blogLabel={t.blog.label} locale={locale} />
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero-light relative flex items-center pt-16 overflow-hidden">
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-6 md:py-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <FadeUp>
                <span className="inline-block rounded-full border border-accent/20 bg-accent-bg px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-4">{t.hero.badge}</span>
              </FadeUp>
              <FadeUp delay={100}>
                <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-text-primary">
                  {t.hero.h1_1} {t.hero.h1_2}{" "}<span className="text-accent">{t.hero.h1_3}</span>
                </h1>
              </FadeUp>
              <FadeUp delay={200}>
                <p className="mt-4 text-lg text-text-secondary max-w-lg leading-relaxed">{t.hero.sub}</p>
              </FadeUp>
              <FadeUp delay={300}>
                <p className="mt-2 text-base text-text-muted h-7"><Typewriter phrases={t.typewriter} /></p>
              </FadeUp>
              <FadeUp delay={400}>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href={wa} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-light transition shadow-md shadow-accent/20">
                    <WhatsAppIcon className="w-5 h-5" />{t.hero.cta1}
                  </a>
                  <a href="https://demo.revow.ai" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-accent px-7 py-3.5 text-base font-semibold text-accent hover:bg-accent hover:text-white transition">
                    {t.hero.cta_demo}
                  </a>
                  <a href="#solutions"
                    className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-base font-medium text-text-secondary hover:border-accent/30 hover:text-accent transition">
                    {t.hero.cta2}
                  </a>
                </div>
              </FadeUp>
            </div>
            <FadeUp delay={200} className="md:col-span-7">
              <div className="relative md:-mr-8 lg:-mr-12">
                <Image src="/images/bg.png" alt="Revow Revenue Operating System" width={800} height={800} className="w-full h-auto mix-blend-screen scale-105 md:scale-110 origin-center" priority />
              </div>
            </FadeUp>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-y border-border py-10 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-center text-xs text-text-muted font-medium uppercase tracking-widest mb-6">{t.trust.label}</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {t.trust.verticals.map((v: string) => (
                <span key={v} className="text-sm font-semibold text-text-primary/60 tracking-wide">{v}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-24 bg-bg-secondary">
          <div className="mx-auto max-w-7xl px-6">
            <FadeUp>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t.problem.label}</p>
                <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">{t.problem.h2}</h2>
                <p className="mt-4 text-lg text-text-secondary">{t.problem.sub}</p>
              </div>
            </FadeUp>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {t.problem.items.map((p: { title: string; desc: string }, i: number) => (
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

        {/* PLATFORM */}
        <section id="platform" className="section-dark py-24">
          <div className="mx-auto max-w-7xl px-6">
            <FadeUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">{t.platform.label}</p>
                <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  {t.platform.h2_1}<br />{t.platform.h2_2}
                </h2>
                <p className="mt-4 text-lg text-white/50">{t.platform.sub}</p>
              </div>
            </FadeUp>
            <div className="grid gap-6 md:grid-cols-3">
              {t.platform.layers.map((l: { n: string; title: string; subtitle: string; desc: string }, i: number) => (
                <FadeUp key={l.n} delay={i * 150}>
                  <div className="glass-dark rounded-2xl p-8 h-full hover:border-accent-light/20 transition group">
                    <div className="w-10 h-10 rounded-xl bg-accent-light/10 flex items-center justify-center text-accent-light text-sm font-bold mb-5">{l.n}</div>
                    <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-1">{l.subtitle}</p>
                    <h3 className="text-xl font-bold text-white mb-3">{l.title}</h3>
                    <p className="text-white/50 leading-relaxed">{l.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <FadeUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t.solutions.label}</p>
                <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">{t.solutions.h2}</h2>
              </div>
            </FadeUp>
            <div className="grid gap-10 lg:grid-cols-2">
              {t.solutions.items.map((s: { key: string; title: string; desc: string }, i: number) => (
                <FadeUp key={s.key} delay={i % 2 === 1 ? 150 : 0}>
                  <div>
                    <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">{s.title}</h3>
                    <p className="text-text-secondary mb-5">{s.desc}</p>
                    {s.key === "monitoring" && <SimFunnel labels={t.sim.funnel} />}
                    {s.key === "funnel" && <SimConversion labels={t.sim.conversion} />}
                    {s.key === "alerts" && <SimAlerts labels={t.sim.alerts} />}
                    {s.key === "copilot" && <SimCopilot labels={t.sim.copilot} locale={locale} />}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* DEMO CTA BANNER */}
        <section className="py-12 bg-accent">
          <div className="mx-auto max-w-7xl px-6">
            <FadeUp>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
                <p className="text-white text-lg font-semibold">{t.solutions.demo_cta_text}</p>
                <a href="https://demo.revow.ai" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:text-accent transition">
                  {t.solutions.demo_cta}
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-24 bg-bg-secondary">
          <div className="mx-auto max-w-7xl px-6">
            <FadeUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t.how.label}</p>
                <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
                  {t.how.h2_1} <span className="text-accent">{t.how.h2_accent}</span> {t.how.h2_2}
                </h2>
                <p className="mt-4 text-lg text-text-secondary">{t.how.sub}</p>
              </div>
            </FadeUp>
            <div className="grid gap-6 md:grid-cols-3">
              {t.how.steps.map((s: { n: string; title: string; desc: string }, i: number) => (
                <FadeUp key={s.n} delay={i * 150}>
                  <div className="rounded-2xl bg-white border border-border p-8 h-full hover:border-accent/20 hover:shadow-lg transition">
                    <div className="w-10 h-10 rounded-xl bg-accent-bg flex items-center justify-center text-accent text-sm font-bold mb-5">{s.n}</div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">{s.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{s.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENCE */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <FadeUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t.difference.label}</p>
                <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">{t.difference.h2}</h2>
              </div>
            </FadeUp>
            <div className="grid gap-6 sm:grid-cols-2">
              {t.difference.items.map((p: { title: string; desc: string }, i: number) => (
                <FadeUp key={p.title} delay={i * 100}>
                  <div className="rounded-2xl bg-bg-secondary border border-border p-8 h-full hover:border-accent/20 hover:shadow-lg transition">
                    <div className="w-8 h-8 rounded-lg bg-accent-bg flex items-center justify-center text-accent mb-4"><CheckIcon /></div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{p.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{p.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="section-dark py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <FadeUp>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {t.cta.h2_1} <span className="text-accent-light">{t.cta.h2_2}</span>
              </h2>
              <p className="mt-6 text-lg text-white/50">{t.cta.sub}</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a href={wa} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-light px-10 py-5 text-lg font-semibold text-white hover:bg-accent-glow transition shadow-lg shadow-accent-light/20">
                  <WhatsAppIcon className="w-5 h-5" />{t.cta.whatsapp}
                </a>
                <a href="https://demo.revow.ai" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-accent-light px-10 py-5 text-lg font-semibold text-accent-light hover:bg-accent-light hover:text-white transition">
                  {t.cta.demo}
                </a>
                <a href="mailto:mariana@revow.ai"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-10 py-5 text-lg font-medium text-white/60 hover:border-white/30 hover:text-white transition">
                  {t.cta.email}
                </a>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Image src="/images/logo_cor_revow.png" alt="Revow" width={90} height={24} />
            <div className="flex flex-wrap gap-6 text-sm text-text-muted">
              <a href="#solutions" className="hover:text-accent transition">{t.nav.solutions}</a>
              <a href="#platform" className="hover:text-accent transition">{t.nav.platform}</a>
              <a href="#how" className="hover:text-accent transition">{t.nav.how}</a>
              <a href={`/${locale}/blog`} className="hover:text-accent transition">{t.blog.label}</a>
              <a href="mailto:mariana@revow.ai" className="hover:text-accent transition">{t.nav.contact}</a>
            </div>
            <p className="text-xs text-text-muted">&copy; 2026 Revow. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

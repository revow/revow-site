import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import ContactForm from "@/components/ContactForm";
import { getMessages } from "@/i18n";

export default async function EbookPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <>
      {/* MINIMAL HEADER */}
      <header className="bg-white border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`}>
            <Image src="/images/logo_cor_revow.png" alt="Revow" width={110} height={30} priority />
          </Link>
          <Link
            href={`/${locale}`}
            className="text-sm font-medium text-text-secondary hover:text-accent transition"
          >
            {t.blog.back_home}
          </Link>
        </div>
      </header>

      <main className="min-h-screen bg-bg-secondary">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* LEFT — VALUE PROP */}
            <div>
              <FadeUp>
                <span className="inline-block rounded-full border border-accent/20 bg-accent-bg px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                  E-book
                </span>
              </FadeUp>
              <FadeUp delay={100}>
                <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-text-primary">
                  {t.ebook.h1}
                </h1>
              </FadeUp>
              <FadeUp delay={200}>
                <p className="mt-4 text-lg text-text-secondary leading-relaxed">{t.ebook.sub}</p>
              </FadeUp>

              {/* BULLET POINTS */}
              <FadeUp delay={300}>
                <ul className="mt-8 space-y-4">
                  {t.ebook.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-text-secondary leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>

              {/* EBOOK MOCKUP */}
              <FadeUp delay={400}>
                <div className="mt-10 rounded-2xl section-dark p-8 flex items-center justify-center">
                  <div className="w-48 h-64 bg-white/10 rounded-lg border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-10 h-10 rounded-xl bg-accent-light/20 flex items-center justify-center text-accent-light mb-4">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <p className="text-xs font-bold text-white/80 uppercase tracking-wider">Revow</p>
                    <p className="text-[10px] text-white/40 mt-1">{t.ebook.mockup_label}</p>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* RIGHT — FORM */}
            <FadeUp delay={200}>
              <div className="rounded-2xl bg-white border border-border p-8 md:p-10 shadow-sm">
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-text-primary mb-2">
                  {t.ebook.form_title}
                </h2>
                <p className="text-sm text-text-secondary mb-6">{t.ebook.form_sub}</p>
                <ContactForm variant="ebook" labels={t.form} />
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="bg-white border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs text-text-muted">&copy; 2026 Revow. {t.footer.rights}</p>
        </div>
      </footer>
    </>
  );
}

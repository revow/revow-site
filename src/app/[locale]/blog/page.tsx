import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import LangSwitcher from "@/components/LangSwitcher";
import { getMessages } from "@/i18n";
import { getArticlesByLocale } from "@/data/articles";

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getMessages(locale);
  const articles = getArticlesByLocale(locale === "es" ? "pt" : locale === "en" ? "pt" : locale);

  // Fallback to PT articles if none found for current locale
  const displayArticles = articles.length > 0 ? articles : getArticlesByLocale("pt");

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`}>
            <Image src="/images/logo_cor_revow.png" alt="Revow" width={110} height={30} priority />
          </Link>
          <div className="flex items-center gap-4">
            <LangSwitcher locale={locale} />
            <Link
              href={`/${locale}`}
              className="text-sm font-medium text-text-secondary hover:text-accent transition"
            >
              {t.blog.back_home}
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20">
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 mb-16">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t.blog.label}</p>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
              {t.blog.h1}
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl">{t.blog.sub}</p>
          </FadeUp>
        </section>

        {/* ARTICLES GRID */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayArticles.map((article, i) => (
              <FadeUp key={article.slug} delay={i * 100}>
                <Link href={`/${locale}/blog/${article.slug}`} className="block h-full">
                  <article className="rounded-2xl bg-white border border-border p-8 h-full hover:border-accent/20 hover:shadow-lg transition group">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.axioms.slice(0, 2).map((axiom) => (
                        <span
                          key={axiom}
                          className="inline-block rounded-full border border-accent/20 bg-accent-bg px-3 py-1 text-[11px] font-semibold text-accent uppercase tracking-wider"
                        >
                          {axiom}
                        </span>
                      ))}
                    </div>
                    <time className="text-xs text-text-muted font-medium">
                      {new Date(article.date).toLocaleDateString(locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "pt-BR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="mt-2 text-lg font-bold text-text-primary group-hover:text-accent transition leading-snug">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-accent">
                      {t.blog.read_more} &rarr;
                    </span>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* CTA EBOOK */}
        <section className="mx-auto max-w-7xl px-6 mt-20">
          <FadeUp>
            <div className="section-dark rounded-2xl p-10 md:p-16 text-center">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white">
                {t.blog.ebook_cta_title}
              </h2>
              <p className="mt-3 text-white/50 max-w-xl mx-auto">{t.blog.ebook_cta_sub}</p>
              <Link
                href={`/${locale}/ebook`}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-accent-light px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-glow transition shadow-md shadow-accent-light/20"
              >
                {t.blog.ebook_cta_btn}
              </Link>
            </div>
          </FadeUp>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Image src="/images/logo_cor_revow.png" alt="Revow" width={90} height={24} />
            <div className="flex gap-6 text-sm text-text-muted">
              <Link href={`/${locale}`} className="hover:text-accent transition">{t.nav.solutions}</Link>
              <Link href={`/${locale}/blog`} className="hover:text-accent transition">{t.blog.label}</Link>
              <Link href={`/${locale}/ebook`} className="hover:text-accent transition">E-book</Link>
              <a href="mailto:mariana@revow.ai" className="hover:text-accent transition">{t.nav.contact}</a>
            </div>
            <p className="text-xs text-text-muted">&copy; 2026 Revow. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

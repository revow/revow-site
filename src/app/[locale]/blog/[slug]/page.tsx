import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeUp from "@/components/FadeUp";
import LangSwitcher from "@/components/LangSwitcher";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getMessages } from "@/i18n";
import { getArticleBySlug, getAllSlugs } from "@/data/articles";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = getMessages(locale);

  // Try current locale, fall back to PT
  const article = getArticleBySlug(slug, locale) ?? getArticleBySlug(slug, "pt");

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "pt-BR",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const shareUrl = `https://revow.ai/${locale}/blog/${slug}`;
  const shareTitle = encodeURIComponent(article.title);
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

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
              href={`/${locale}/blog`}
              className="text-sm font-medium text-text-secondary hover:text-accent transition"
            >
              {t.blog.back_blog}
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          {/* META */}
          <FadeUp>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition mb-6"
            >
              &larr; {t.blog.back_blog}
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {article.axioms.map((axiom) => (
                <span
                  key={axiom}
                  className="inline-block rounded-full border border-accent/20 bg-accent-bg px-3 py-1 text-[11px] font-semibold text-accent uppercase tracking-wider"
                >
                  {axiom}
                </span>
              ))}
            </div>

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              {article.title}
            </h1>

            <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
              <span className="font-semibold text-text-secondary">Mariana Spinelli</span>
              <span>&middot;</span>
              <time>{formattedDate}</time>
            </div>
          </FadeUp>

          {/* CONTENT */}
          <FadeUp delay={100}>
            <div className="mt-10">
              <MarkdownRenderer content={article.content} />
            </div>
          </FadeUp>

          {/* SHARE */}
          <FadeUp delay={200}>
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm font-semibold text-text-secondary mb-3">{t.blog.share}</p>
              <div className="flex gap-3">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-secondary hover:border-accent/30 hover:text-accent transition"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-secondary hover:border-accent/30 hover:text-accent transition"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>
              </div>
            </div>
          </FadeUp>

          {/* CTA EBOOK BANNER */}
          <FadeUp delay={300}>
            <div className="mt-12 section-dark rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-light mb-2">E-book</p>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-white">
                  {t.ebook.h1}
                </h2>
                <p className="mt-3 text-white/50 max-w-lg mx-auto text-sm">{t.ebook.sub}</p>
                <Link
                  href={`/${locale}/ebook`}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-accent-light px-8 py-3 text-sm font-semibold text-white hover:bg-accent-glow transition shadow-md shadow-accent-light/20"
                >
                  {t.ebook.cta}
                </Link>
              </div>
            </div>
          </FadeUp>
        </article>
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

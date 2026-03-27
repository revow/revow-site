# Revow Site — Landing Page

@~/.claude/shared/revow-identity.md
@~/.claude/shared/nextjs-rules.md

## Projeto
- **Produto**: landing page institucional da Revow (`www.revow.ai`)
- **Stack**: Next.js 16.2 + React 19 + Tailwind 4
- **GitHub**: `revow/revow-site`
- **Vercel**: project `revow-site`
- **Marca**: assets em `~/Documents/Revow/marca/`

## Comandos
- **Build**: `unset NODE_ENV && npx next build` (NODE_ENV=development no shell quebra build — bug Next.js 16)
- **Deploy**: `cd ~/Documents/Revow/revow-site && npx vercel --prod --yes`

## i18n
- 3 idiomas: EN, PT, ES
- Arquivos: `src/messages/{en,pt,es}.json`
- Middleware auto-detect de idioma
- Simulacoes recebem labels i18n como props + SimCopilot recebe `locale`

## SEO e AI Visibility
- **GA4**: `G-0QD3HWVEJE` (propriedade `revowai`)
- hreflang EN/PT/ES com alternates
- Canonical URLs por locale
- JSON-LD: Organization + SoftwareApplication
- `public/llms.txt` para crawlers de IA
- Sitemap com hreflang + robots.txt
- OG image: `public/images/og.png` (1200x630)

## Estrutura da Landing
1. Header (sticky, LangSwitcher, CTA WhatsApp)
2. Hero (typewriter, 3-layer platform)
3. Trust Bar (4 verticais)
4. Problem → Platform → Solutions (simulacoes interativas Recharts)
5. How It Works → Difference → CTA → Footer

## Regras
- **WhatsApp**: numero `5521988889760`, mensagem muda por idioma
- **Contato**: `mariana@revow.ai`
- **global-error.tsx** em `src/app/` e obrigatorio (bug prerender Next.js 16)

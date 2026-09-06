# Technical Decisions — Baruch Kairy Professional Site

Last updated: 2026-09-03 (Sprint 3)

---

## Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 16 (App Router) | Latest stable, SSR + static generation |
| Styling | Tailwind CSS v4 | Utility-first, tokens in `@theme` block |
| Components | shadcn/ui (manual setup) | shadcn init blocked by network policy; deps installed manually (cva, clsx, tailwind-merge). cn() utility in `src/lib/utils.ts`. |
| Language | TypeScript | Strict mode enabled |
| Fonts | Frank Ruhl Libre (headings) + Heebo (body) via next/font | Hebrew subset, display=swap |
| Icons | Phosphor Icons (to be installed Sprint 2) | Line weight: regular. SVG imports, not web font. |
| Form handling | TBD (Sprint 4) | Formspree or Resend — confirm before implementing |
| Analytics | TBD (Sprint 5) | Plausible or GA4 — confirm before setup |
| Hosting | Vercel | Zero-config deployment |

## Site Structure

Hebrew-only, RTL site. `<html dir="rtl" lang="he">`.

```
/app
  layout.tsx           → RTL, Hebrew, fonts, global metadata
  page.tsx             → Homepage (דף הבית)
  /about/page.tsx      → About (אודות)
  /services/page.tsx   → Individual Services (שירותים לפרט)
  /services/organizations/page.tsx → Org Services (שירותים לארגונים)
  /workshops/page.tsx  → Workshops (סדנאות)
  /faq/page.tsx        → FAQ (שאלות נפוצות)
  /contact/page.tsx    → Contact (צור קשר)
```

## Design Tokens

All tokens defined in `src/app/globals.css` `@theme inline` block. Source of truth: design-rules.md in Google Drive (id: `1gzqam0Qf-ZmmAkZaNVNAglgOZAYxWwscrwMUMYKWSOQ`).

Custom spacing scale: `xs` (4px) through `4xl` (96px).

## RTL Implementation

- CSS logical properties used exclusively (margin-inline-start, padding-inline-end)
- Flexbox/grid flow RTL automatically via `dir="rtl"`
- Phone numbers and emails use `dir="ltr"` with `unicode-bidi: isolate`
- Navigation: rightmost item is "home" (first in source order, reversed by RTL)
- No letter-spacing on Hebrew text — explicitly set to 0

## Contact Information

- Phone: 052-515-1351
- WhatsApp: 052-515-1351 (wa.me/972525151351)
- Email: kairybaruch@gmail.com
- Contact page: 3 channel cards (phone/WhatsApp/email) + form with dropdown

## Source Documents

| Document | Location |
|----------|----------|
| design-rules.md | Google Drive: `1gzqam0Qf-ZmmAkZaNVNAglgOZAYxWwscrwMUMYKWSOQ` |
| website-copy.md | Google Drive: `1m0ZXVHx7wmRdsgEx_ugcUzXKKYrMLPpx09flChcZt8c` |
| product-brain.md | Not yet created for this project |

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-02 | shadcn/ui manual setup | Network policy blocks ui.shadcn.com; installed cva, clsx, tailwind-merge directly |
| 2026-09-02 | No i18n setup | Hebrew-only site per spec — no bilingual routing needed |
| 2026-09-02 | Phosphor Icons deferred to Sprint 2 | Will install as SVG imports when building components |
| 2026-09-02 | Skip-to-content link added | Accessibility requirement from design-rules.md section 12 |
| 2026-09-02 | Fonts switched to next/font/local | Google Fonts blocked by network policy; woff2 files self-hosted from public/fonts/ |
| 2026-09-02 | @phosphor-icons/react installed | Line-weight regular, SVG imports per design-rules.md section 6.6 |
| 2026-09-02 | UI components: Button, Card, Input, Textarea, Select, Section | Built with cva for variants; all per design-rules.md section 6 specs |
| 2026-09-03 | Homepage sections built | HeroSection, RoutingCards, TrustBar, AboutPreview, ContactCTA — all with props-based content from website-copy.md |
| 2026-09-03 | Photos placed in public/images/ | baruch-portrait.png (hero), baruch-conference-a.jpg (about), baruch-conference-b.jpg (workshops) |
| 2026-09-03 | Phosphor SSR imports used | @phosphor-icons/react/dist/ssr for server-component compatibility |
| 2026-09-03 | Secondary pages built (Sprint 4) | About, Services (individual + org), Workshops, FAQ, Contact — all with content from website-copy.md via props |
| 2026-09-03 | Footer bg changed to #1F363D | Deeper teal-black that ties to primary color family; new --color-dark token added |

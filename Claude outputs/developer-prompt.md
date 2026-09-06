# Developer Prompt — Baruch Kairy Professional Website

> This document is the single source of truth for any developer (human or AI) working on this site. Read it fully before making changes.

---

## 1. Project Overview

**What:** Professional Hebrew RTL website for Baruch Kairy, an occupational psychologist with 30 years of experience. Two audiences: individuals at career crossroads, and organizations needing assessment/screening processes.

**Brand name:** ברוך קאירי — פסיכולוג תעסוקתי מומחה-מדריך. Organizational services operate under the **IHS** brand.

**Tone:** Professional but warm. Confident without being loud. Direct and practical — never clinical, never salesy. Think "a calm conversation with someone who knows what they're doing."

**Location:** `~/Desktop/baruch-kairy-site/` (Windows machine, no git repo initialized)

---

## 2. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router, Turbopack) | 16.3.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS v4 (`@theme inline`) | ^4 |
| UI primitives | shadcn/ui pattern (custom components) | — |
| Icons | Phosphor Icons (`@phosphor-icons/react`) | ^2.1 |
| Utility | clsx + tailwind-merge via `cn()` | — |
| Font loading | `next/font/local` (woff2 files in `public/fonts/`) | — |
| React | 19.2.8 | — |

**No git repo.** No CI/CD pipeline. No testing framework. Development is done via `npm run dev` (Turbopack hot reload).

**Build caveat:** `next build` must run natively on the Windows machine — the SWC binary is Windows-specific. Do not attempt builds from WSL or a Linux container.

---

## 3. Directory Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout: HTML dir="rtl" lang="he", fonts, Header, Footer, JSON-LD, GA4
│   ├── page.tsx              # Home page
│   ├── globals.css           # All design tokens, base styles, keyframe animations
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── services/
│   │   ├── page.tsx          # Individual services
│   │   └── organizations/page.tsx
│   └── workshops/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Sticky header, logo far-right (RTL), nav, mobile hamburger
│   │   └── Footer.tsx        # Dark footer, two columns (name + contact)
│   ├── sections/
│   │   ├── HeroSection.tsx   # Name + inline title, subtitle, CTA, portrait
│   │   ├── RoutingCards.tsx   # Two cards: individuals vs. organizations
│   │   ├── TrustBar.tsx      # Flat layout with dividers, 4 credential badges
│   │   ├── AboutPreview.tsx  # Home page "about" teaser
│   │   └── ContactCTA.tsx    # Bottom CTA strip
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx           # Has `interactive` prop for hover effects
│       ├── DecorativeCircle.tsx  # PNG-based animated circle component (ACTIVE)
│       ├── DecorativeCircles.tsx # OLD SVG version — NOT USED, can be deleted
│       ├── IconCircle.tsx     # Circular icon container with teal shadow
│       ├── Input.tsx
│       ├── ScrollReveal.tsx   # Intersection Observer scroll-reveal wrapper
│       ├── Section.tsx        # Standard section wrapper + SectionDivider
│       ├── Select.tsx
│       ├── Textarea.tsx
│       └── index.ts           # Barrel exports
├── lib/
│   ├── fonts.ts              # Heebo + Frank Ruhl Libre font definitions
│   └── utils.ts              # cn() utility (clsx + tailwind-merge)
public/
├── fonts/                    # Heebo + Frank Ruhl Libre woff2 files
├── images/
│   ├── logo6-clean.png       # Main logo
│   ├── baruch-portrait3.png  # Portrait photo
│   ├── circles/              # 14 processed circle PNGs (7 designs × 2 colors)
│   └── new circles/          # Source circle images (unprocessed)
```

---

## 4. Design Tokens (LOCKED — do not modify)

All tokens are defined in `src/app/globals.css` using Tailwind v4's `@theme inline` directive. They are referenced as Tailwind utilities (`bg-primary`, `text-accent`, `p-lg`, etc.).

### Colors — "Tranquil Waters" Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#40798C` | Cerulean — primary buttons, links, active states |
| `--color-primary-dark` | `#1F363D` | Jet Black — hover states, footer bg, heading text |
| `--color-accent` | `#70A9A1` | Tropical Teal — decorative accents, underlines |
| `--color-text` | `#1F363D` | Body text |
| `--color-text-secondary` | `#4A6B6A` | Secondary/muted text |
| `--color-subtle` | `#CFE0C3` | Tea Green — borders, dividers |
| `--color-subtle-bg` | `#E8F0E0` | Light tint — alternating section backgrounds |
| `--color-bg` | `#EFF5E9` | Main page background |
| `--color-white` | `#FFFFFF` | Card backgrounds |
| `--color-error` | `#C0392B` | Error states |

**Orange accent:** `#FF8200` — used only in decorative circle tints, never as a UI color.

### Spacing (8px base)

| Token | Value | Tailwind |
|-------|-------|----------|
| `--spacing-xs` | 4px | `p-xs`, `gap-xs` |
| `--spacing-sm` | 8px | `p-sm`, `gap-sm` |
| `--spacing-md` | 16px | `p-md`, `gap-md` |
| `--spacing-lg` | 24px | `p-lg`, `gap-lg` |
| `--spacing-xl` | 32px | `p-xl`, `gap-xl` |
| `--spacing-2xl` | 48px | `p-2xl` |
| `--spacing-3xl` | 64px | `p-3xl` |
| `--spacing-4xl` | 96px | `p-4xl` |

### Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--max-width` | 1120px | Content container max width |
| `--max-width-text` | 680px | Narrow text columns |

### Typography

**Heebo** for everything — headings and body. Frank Ruhl Libre was explicitly rejected as "outdated." Both fonts are loaded as local woff2 via `next/font/local` in `src/lib/fonts.ts`, but only Heebo is used:

```css
--font-heading: var(--font-heebo), 'Heebo', sans-serif;
--font-body: var(--font-heebo), 'Heebo', sans-serif;
```

Letter-spacing is globally set to `0` — never add letter-spacing to Hebrew text.

### Shadows

| Usage | Value |
|-------|-------|
| Card default | `shadow-[0_2px_8px_rgba(64,121,140,0.08)]` (teal-tinted) |
| Card hover | `shadow-[0_8px_24px_rgba(64,121,140,0.15)]` (deeper teal) |
| IconCircle | `0 4px 12px rgba(158,193,163,0.6)` (muted teal-green) |

---

## 5. RTL Rules

The site is fully RTL Hebrew. The `<html>` tag has `dir="rtl" lang="he"`.

### CSS Logical Properties

Always use logical properties instead of physical ones:

| Physical (DON'T) | Logical (DO) |
|-------------------|--------------|
| `pl-`, `pr-` | `ps-` (padding-start), `pe-` (padding-end) |
| `ml-`, `mr-` | `ms-` (margin-start), `me-` (margin-end) |
| `left`, `right` | `start`, `end` (for positioning use `left`/`right` since Tailwind absolute positioning doesn't auto-flip) |
| `text-left` | `text-start` |
| `border-l` | `border-s` |

**Exception:** Absolute positioning (`left-[-50px]`, `right-[10%]`) uses physical properties because these position decorative elements relative to the viewport edge, not the text direction.

### LTR Overrides

Phone numbers, emails, and URLs must be wrapped in LTR isolation:

```tsx
<span dir="ltr" style={{ unicodeBidi: "embed" }}>052-515-1351</span>
```

Or use the `.ltr` utility class defined in globals.css.

---

## 6. Component Patterns

### Section Layout

Every page section uses the `<Section>` component:

```tsx
<Section background="bg">        {/* or "subtle-bg", "primary", "text" */}
  {children}
</Section>
```

Sections alternate between `bg` (#EFF5E9) and `subtle-bg` (#E8F0E0). Responsive padding: 48px mobile → 64px tablet → 96px desktop.

### Cards

Use the `<Card>` component with `interactive` prop for clickable cards:

```tsx
<Card interactive>
  <CardContent>...</CardContent>
</Card>
```

Interactive cards get hover lift (`-translate-y-1`) and deeper teal shadow. Non-interactive cards have a static teal-tinted shadow.

### Decorative Circles

The `<DecorativeCircle>` component renders pre-tinted PNG images from `public/images/circles/`:

```tsx
<DecorativeCircle
  design="split-rings"       // 7 designs available
  color="orange"             // "orange" (#FF8200) or "teal" (#70A9A1)
  size={300}                 // px
  animation="float"          // 8 animation types
  opacity={0.5}              // 0-1
/>
```

**Available designs:** `split-rings`, `swirl-arcs`, `dots-dense`, `dots-spiral`, `diagonal-lines`, `sunburst`, `spirograph`

**Available animations:** `float`, `spin-slow`, `drift`, `drift-rtl`, `drift-diagonal`, `pulse-gentle`, `wobble`, `float-rotate`

**Placement rules:**
- Always `hidden lg:block` — desktop only
- Always `pointer-events-none` and `aria-hidden="true"`
- Always `absolute` within a `relative` parent
- Content must be `relative z-10` above circles at `z-0`
- Opacity 0.4–0.6 for subtlety
- Mix different designs, sizes, and animations across pages

**Current circle assignments per page:**

| Page | Circles |
|------|---------|
| Home | split-rings-orange (350px, float-rotate) + split-rings-teal (200px, drift) in hero; split-rings-teal (250px, pulse-gentle) in routing cards; split-rings-orange (220px, wobble) in trust bar |
| Services (individual) | dots-spiral-orange with spin-slow |
| Services (organizations) | spirograph-teal + spirograph-orange flanking pillars grid; diagonal-lines-teal in lectures |
| Workshops | circle in upper-left corner (brought forward, z-20) |
| FAQ | 4 sunburst circles cascading down the left side: orange 300px (5%), teal 180px (35%), orange 220px (60%), teal 150px (82%) |
| Contact | dots-dense-teal (260px, drift) right side; diagonal-lines-orange (220px, wobble) left side |
| About | circle-orange-dots (legacy Image) + sunburst-orange DecorativeCircle |

### ScrollReveal

Wrap sections in `<ScrollReveal>` for entrance animation (fade-up on scroll):

```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal"

<ScrollReveal>
  <Section>...</Section>
</ScrollReveal>
```

### IconCircle

Circular icon container with teal shadow, used in trust bar and contact cards:

```tsx
<IconCircle>
  <Phone size={24} weight="regular" className="text-primary" />
</IconCircle>
```

---

## 7. Header & Navigation

The header is sticky with scroll-triggered backdrop blur. Key structural decisions:

- **Logo** is pushed to the far-right viewport edge (RTL) — the header flex container has NO `max-w-[var(--max-width)]` constraint. Instead it uses `pe-[24px] sm:pe-[40px]` for edge padding.
- **Logo size:** `h-[120px] w-auto sm:h-[150px]`
- **Nav items** use `me-auto ms-xl` to push to the left (in RTL).
- **Mobile menu** is a hamburger with animated bars (rotate to X).
- **CTA button** ("צור קשר") appears in both desktop and mobile nav.

---

## 8. Footer

Minimal two-column layout:
- Column 1: Name + credentials
- Column 2: Contact info (phone, email)
- Bottom bar: copyright

The "ניווט מהיר" (quick navigation) section was intentionally removed to keep the footer narrow.

---

## 9. Page-Specific Notes

### Home (`page.tsx`)
- Hero: Name "ברוך קאירי" and title "פסיכולוג תעסוקתי, מומחה ומדריך" are displayed **inline** using `flex flex-wrap items-baseline gap-sm`. Title is `text-[16px]`.
- TrustBar: Flat layout with vertical dividers between badges (not white boxes).
- RoutingCards: Two cards linking to individual and organizational services.

### About (`about/page.tsx`)
- Full bio text (3 paragraphs in section 1, 3 paragraphs in section 2 "איך אני עובד?")
- Portrait image on the right side
- Legacy `circle-orange-dots.png` image used alongside new DecorativeCircle

### Services — Individual (`services/page.tsx`)
- Three service cards: ייעוץ תעסוקתי פרטני, ייעוץ מודע טראומה, ליווי בצמתים
- Cards are interactive (hover effects)

### Services — Organizations (`services/organizations/page.tsx`)
- IHS branding in heading
- 4 pillars section (ייחודיות, בעלות, יעילות, הוגנות) in 2×2 grid
- 6 service cards in grid
- הרצאות והכשרות section with 8 lecture topic cards

### Workshops (`workshops/page.tsx`)
- "במבט קדימה" workshop description
- Info cards: "למי מתאים?", "מה בפנים?", "עם מה יוצאים?"
- "חשוב לדעת" callout box
- הרצאות והכשרות section (shared content with organizations page)

### FAQ (`faq/page.tsx`)
- 6 questions in accordion/details format
- Details elements have hover shadow
- 4 sunburst decorative circles cascading down the left

### Contact (`contact/page.tsx`)
- Three equal-sized channel cards (phone, WhatsApp, email) in a grid with gap-px dividers
- Wrapped in `bg-subtle-bg rounded-lg`
- Hover effects on channel links

---

## 10. CSS Animations

All keyframe animations are defined in `globals.css`. Summary:

| Name | Duration | Description |
|------|----------|-------------|
| `float` | 8s | Vertical bob (0 → -15px → 0) |
| `spin-slow` | 45s | Full 360° rotation |
| `drift` | 10s | Horizontal slide (0 → 12px → 0) |
| `drift-rtl` | 12s | Reverse horizontal (0 → -15px → 0) |
| `drift-diagonal` | 9s | Diagonal movement (8px, -8px) |
| `pulse-gentle` | 10s | Scale pulse (1 → 1.05 → 1) |
| `wobble` | 12s | Gentle rotation (0 → 3° → -3° → 0) |
| `float-rotate` | 10s | Combined vertical bob + slight rotation |

All animations respect `prefers-reduced-motion: reduce` — a global rule in globals.css forces `animation-duration: 0.01ms` and `animation-iteration-count: 1`.

---

## 11. Image Processing Pipeline

The decorative circle images were processed from hand-drawn originals using ImageMagick:

1. Convert to grayscale
2. Negate (invert: dark lines become light)
3. Extract as alpha mask
4. Create solid color canvas (#FF8200 for orange, #70A9A1 for teal)
5. Composite the alpha mask onto the canvas using CopyOpacity

This preserves line detail and natural opacity variation. The processing script is at `/home/claude/process_circles.py` (cloud container only).

**Result:** 14 files in `public/images/circles/`:
`circle-{split-rings,swirl-arcs,dots-dense,dots-spiral,diagonal-lines,sunburst,spirograph}-{orange,teal}.png`

---

## 12. Structured Data & SEO

- JSON-LD: Person + LocalBusiness schema in `layout.tsx`
- OpenGraph meta with `he_IL` locale
- Each page has its own `<Metadata>` export with Hebrew title and description
- Google Analytics via `NEXT_PUBLIC_GA_ID` env var (tag manager script loaded conditionally)
- Favicon: `/favicon.svg`

---

## 13. Accessibility

- Skip-to-content link (`.skip-to-content` class)
- `aria-hidden="true"` on all decorative elements
- `:focus-visible` ring: `3px solid rgba(64,121,140,0.4)`
- Semantic HTML: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- Mobile nav: `aria-label`, `aria-expanded` on hamburger button
- Reduced motion: global media query disables all animations

---

## 14. Content Source of Truth

All website copy lives in the project doc `claude/website-copy.md`. Any content changes should reference this document. The `claude/product-brain.md` document contains brand strategy, positioning, tone of voice, and audience definitions.

Items marked `[DRAFT — לאישור]` in the content doc require Baruch's confirmation before implementation.

---

## 15. What NOT to Do

- **Don't change design tokens** without updating this document
- **Don't use Frank Ruhl Libre** — it was explicitly rejected
- **Don't add letter-spacing** to any Hebrew text
- **Don't use physical CSS properties** (left/right padding/margin) — use logical (start/end)
- **Don't run `next build` from Linux** — SWC binary mismatch
- **Don't use the old `DecorativeCircles.tsx`** (SVG version) — use `DecorativeCircle.tsx` (PNG version)
- **Don't place decorative circles on mobile** — always `hidden lg:block`
- **Don't use warm/gold shadow colors** — all shadows use teal `rgba(64,121,140,...)`
- **Don't make the footer wider** — the ניווט מהיר section was intentionally removed
- **Don't change the logo size or position** without explicit request — it's deliberately at the far-right edge at 120/150px height

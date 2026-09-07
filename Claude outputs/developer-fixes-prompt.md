# Developer Prompt 7: Visual Fixes — Decorative Circles & Trust Bar

**Task:** Fix 5 visual issues with the decorative circles and trust bar across the entire site.

**Important:** All site content is now managed in `src/lib/content.ts`. Do NOT hardcode any text — import everything from this file. See Section 14 of the main developer prompt for details.

---

## Issue 1: Trust Bar Content — Stop Overwriting with Placeholder Text

The trust bar keeps showing random numbers, lorem ipsum, or made-up statistics. This is wrong. The trust bar content is **locked** in `src/lib/content.ts` and must be imported from there — never hardcoded.

The correct trust bar badges are:

```
{ stat: "30+", label: "שנות ניסיון" }
{ label: "פסיכולוג תעסוקתי מומחה-מדריך" }
{ label: 'סא"ל (מיל׳) ראש מערכי מיון והערכה בצה"ל' }
{ label: "ליווי עשרות ארגונים מובילים" }
```

**What to do:**
- Open `src/app/page.tsx` and verify the trust bar uses `HOME.trustBar` from `src/lib/content.ts`
- Do NOT replace, modify, or add placeholder text/numbers
- If the `TrustBar` component needs changes, the data must still flow from `content.ts`
- The first badge is the only one with a `stat` field — the other three show only a label

**Rule:** If you need to change any text on the site, change it in `src/lib/content.ts` — not in the page files.

---

## Issue 2: Remove Visible Backgrounds from Decorative Circle PNGs

All 14 circle PNG images in `public/images/circles/` display a faint rectangular background behind the circle artwork. The circles should appear on a fully transparent background, but they don't.

**Root cause:** The PNGs are palette-based (mode=P) with transparency set to alpha=29 in what should be fully transparent areas (alpha=0). This creates a visible light wash behind every circle.

**Files affected:** All 14 files in `public/images/circles/`:
```
circle-split-rings-orange.png    circle-split-rings-teal.png
circle-swirl-arcs-orange.png     circle-swirl-arcs-teal.png
circle-dots-dense-orange.png     circle-dots-dense-teal.png
circle-dots-spiral-orange.png    circle-dots-spiral-teal.png
circle-diagonal-lines-orange.png circle-diagonal-lines-teal.png
circle-sunburst-orange.png       circle-sunburst-teal.png
circle-spirograph-orange.png     circle-spirograph-teal.png
```

**Fix:** Re-export each PNG with proper transparency:

1. Convert from palette mode (P) to RGBA mode
2. Set alpha=0 for all pixels that currently have alpha ≤ 29
3. Preserve the artwork pixels (the actual circle lines/dots) — keep their colors and alpha values intact
4. Save as standard RGBA PNG (not palette-based)

**Python script to fix all images:**

```python
from PIL import Image
import os

circles_dir = "public/images/circles"

for filename in os.listdir(circles_dir):
    if not filename.endswith(".png"):
        continue
    
    filepath = os.path.join(circles_dir, filename)
    img = Image.open(filepath).convert("RGBA")
    
    pixels = img.load()
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            # Zero out near-transparent pixels (the "background" leak)
            if a <= 29:
                pixels[x, y] = (0, 0, 0, 0)
    
    img.save(filepath)
    print(f"Fixed: {filename}")
```

Run this from the project root. After running, verify visually that the circle artwork is preserved and the rectangular background is gone.

---

## Issue 3: Remove Overflow Clipping on Decorative Circle Containers

Decorative circles are being cut off (clipped) because their parent containers have `overflow-hidden`. Since circles are `absolute` positioned and intentionally extend beyond section bounds, this clipping hides parts of them.

**What to do:**

On every page file, find `<div>` or `<section>` containers that:
1. Have `overflow-hidden` in their className
2. Contain a `<DecorativeCircle>` component (or a decorative circle `<Image>`)

Remove `overflow-hidden` from those containers. The circles are already `pointer-events-none` and `aria-hidden="true"`, so they won't interfere with user interactions.

**Files to check and fix:**

| File | Approx. locations |
|------|-------------------|
| `src/app/page.tsx` | Hero section wrapper, routing cards wrapper, trust bar wrapper, about preview wrapper |
| `src/app/about/page.tsx` | Section 1 wrapper, section 2 wrapper |
| `src/app/services/page.tsx` | Service cards section wrapper |
| `src/app/services/organizations/page.tsx` | Pillars section, services grid, lectures section |
| `src/app/workshops/page.tsx` | Info cards section, lectures section |
| `src/app/faq/page.tsx` | Main FAQ section |
| `src/app/contact/page.tsx` | Contact cards section |

**Pattern:** Search for `overflow-hidden` in each page file. If the element contains or wraps a decorative circle, remove `overflow-hidden`. If the element uses `overflow-hidden` for a different purpose (e.g., text truncation, image cropping), leave it.

**Note:** If removing `overflow-hidden` causes content layout issues on a specific section, use `overflow-x-clip` or `overflow-y-visible` as a targeted alternative — but in most cases, simply removing it is correct.

---

## Issue 4: Apply Fixes Across All Pages

Issues 2 and 3 must be fixed consistently across **all 7 page files**:

- `src/app/page.tsx` (Home)
- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/services/organizations/page.tsx`
- `src/app/workshops/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/contact/page.tsx`

After fixing, visually verify each page on desktop (≥1024px) to confirm:
- Circles appear without rectangular backgrounds
- Circles extend naturally beyond section edges (not cut off)
- Circles don't block any clickable content
- Page layout is not broken

---

## Issue 5: Add/Adjust Opacity on All Decorative Circles

All decorative circles should be subtle background texture — not prominent visual elements. Ensure every `<DecorativeCircle>` component across the site has an appropriate `opacity` prop.

**Target opacity range:** `0.3` to `0.5`

- Use `opacity={0.3}` for larger circles (≥300px) or circles near text-heavy areas
- Use `opacity={0.4}` as the default for most circles
- Use `opacity={0.5}` for smaller circles (≤200px) or circles in less busy areas

**What to check:**
- Every `<DecorativeCircle>` component on every page
- The legacy `<Image>` circle on the About page (`circle-orange-dots.png`) — apply opacity via Tailwind class `opacity-[0.4]` on its wrapper div
- If any circle currently has no opacity set, add `opacity={0.4}` as default

**Do NOT** set opacity above 0.5 — the circles should feel like watermarks, not foreground elements.

---

## Z-Index Pattern (Updated)

The previous prompt said circles should be `z-0` and content `z-10`. This has been updated:

- **Decorative circles:** `z-[1]` (just above the background)
- **Content wrappers:** `relative` (no explicit z-index needed — default `auto` stacking is sufficient)

This avoids creating unnecessary stacking contexts. The circles sit at z-index 1, and content naturally stacks above them.

---

## Summary Checklist

| # | Fix | Scope |
|---|-----|-------|
| 1 | Trust bar imports from `content.ts` — no hardcoded text | `page.tsx`, `TrustBar.tsx` |
| 2 | Re-export circle PNGs with alpha=0 transparency | 14 files in `public/images/circles/` |
| 3 | Remove `overflow-hidden` from circle containers | All 7 page files |
| 4 | Verify fixes on all pages | All 7 page files |
| 5 | Set circle opacity to 0.3–0.5 range | All `<DecorativeCircle>` instances |

**Do NOT change:**
- Any text content (it lives in `content.ts`)
- Font sizes, spacing, or layout structure
- Colors in the design token palette
- The logo, portrait, or other non-circle images
- Component architecture or file organization

import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { RoutingCards } from "@/components/sections/RoutingCards"
import { TrustBar } from "@/components/sections/TrustBar"
import { AboutPreview } from "@/components/sections/AboutPreview"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export const metadata: Metadata = {
  title: "ברוך קאירי — פסיכולוג תעסוקתי | ייעוץ קריירה ומיון",
  description:
    "ברוך קאירי, פסיכולוג תעסוקתי מומחה עם 30 שנות ניסיון. ייעוץ קריירה וליווי בצמתים תעסוקתיים לפרט, מיון והערכה ובניית תהליכים לארגונים. שיחת היכרות ללא עלות.",
}

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero (bg) */}
      <HeroSection
        headline="לדעת מה הצעד הבא — בקריירה ובמיון"
        subheadline="ברוך קאירי, פסיכולוג תעסוקתי מומחה עם 30 שנות ניסיון, מלווה אנשים בצמתים תעסוקתיים וארגונים בבניית תהליכי מיון והערכה שעובדים."
        imageSrc="/images/baruch-portrait.png"
        imageAlt="ברוך קאירי, פסיכולוג תעסוקתי מומחה"
      />

      {/* Section 2 — Routing Cards (subtle-bg) */}
      <ScrollReveal>
      <RoutingCards
        sectionHeading="איך אני יכול לעזור"
        cards={[
          {
            icon: "individual",
            heading: "בצומת תעסוקתי?",
            description:
              "ייעוץ קריירה, ליווי בתקופות שינוי, וכלים לקבלת ההחלטה הנכונה — בקצב שלך.",
            linkLabel: "עוד על שירותים לפרט",
            linkHref: "/services",
          },
          {
            icon: "organization",
            heading: "תהליך המיון לא עובד?",
            description:
              "אבחון, בנייה ושדרוג של תהליכי מיון והערכה — מותאם לארגון, לא מהמדף.",
            linkLabel: "עוד על שירותים לארגונים",
            linkHref: "/services/organizations",
          },
        ]}
      />
      </ScrollReveal>

      {/* Section 3 — Trust Bar (bg) */}
      <ScrollReveal>
      <TrustBar
        badges={[
          { stat: "30+", label: "שנות ניסיון" },
          { label: "פסיכולוג תעסוקתי מומחה-מדריך" },
          { label: 'סא"ל (מיל׳) — ראש מערכי מיון והערכה בצה"ל' },
          { label: "ליווי עשרות ארגונים מובילים" },
        ]}
      />
      </ScrollReveal>

      {/* Section 4 — About Preview (subtle-bg) */}
      <ScrollReveal>
      <AboutPreview
        text="אם הגעת לכאן, כנראה שמשהו זז. אולי תחושת תקיעות בעבודה, אולי החלטה שצריך לקבל, אולי תהליך מיון שלא נותן את התוצאות שציפית להן. אני עוסק בזה כבר שלושה עשורים — בליווי אנשים שרוצים להבין לאן הם הולכים, ובבנייה של תהליכי מיון שבאמת מזהים את האדם הנכון."
        linkLabel="קצת עליי"
        linkHref="/about"
      />
      </ScrollReveal>
    </>
  )
}

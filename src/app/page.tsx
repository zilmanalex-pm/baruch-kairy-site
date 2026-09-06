import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { RoutingCards } from "@/components/sections/RoutingCards"
import { TrustBar } from "@/components/sections/TrustBar"
import { AboutPreview } from "@/components/sections/AboutPreview"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { DecorativeCircle } from "@/components/ui/DecorativeCircle"

export const metadata: Metadata = {
  title: "ברוך קאירי פסיכולוג תעסוקתי | ייעוץ קריירה ומיון",
  description:
    "ברוך קאירי, פסיכולוג תעסוקתי מומחה עם 30 שנות ניסיון. ייעוץ קריירה וליווי בצמתים תעסוקתיים לפרט, מיון והערכה ובניית תהליכים לארגונים. שיחת היכרות ללא עלות.",
}

export default function HomePage() {
  return (
    <div className="relative">

      <div className="relative">
      {/* Section 1 Hero (bg) */}
      <div className="relative overflow-hidden">
        <DecorativeCircle
          design="split-rings"
          color="orange"
          size={300}
          animation="float"
          opacity={0.5}
          className="absolute hidden lg:block z-[1] left-[-120px] bottom-[-80px]"
        />
        <div className="relative">
          <HeroSection
            name="ברוך קאירי"
            title="פסיכולוג תעסוקתי"
            headline="לדעת מה הצעד הבא בקריירה ובמיון"
            subheadline="ברוך קאירי, פסיכולוג תעסוקתי מומחה עם 30 שנות ניסיון, מלווה אנשים בצמתים תעסוקתיים וארגונים בבניית תהליכי מיון והערכה שעובדים."
            imageSrc="/images/baruch-portrait3.png"
            imageAlt="ברוך קאירי, פסיכולוג תעסוקתי מומחה"
          />
        </div>
      </div>

      {/* Section 2 Routing Cards (subtle-bg) */}
      <ScrollReveal>
      <div className="relative overflow-hidden">
        <DecorativeCircle
          design="sunburst"
          color="teal"
          size={200}
          animation="drift"
          opacity={0.5}
          className="absolute hidden lg:block z-[1] right-[-60px] top-[-40px]"
        />
        <div className="relative">
          <RoutingCards
            sectionHeading="איך אני יכול לעזור"
            cards={[
              {
                icon: "individual",
                heading: "בצומת תעסוקתי?",
                description:
                  "ייעוץ קריירה, ליווי בתקופות שינוי, וכלים לקבלת ההחלטה הנכונה בקצב שלך.",
                linkLabel: "עוד על שירותים לפרט",
                linkHref: "/services",
              },
              {
                icon: "organization",
                heading: "תהליך המיון לא עובד?",
                description:
                  "אבחון, בנייה ושדרוג של תהליכי מיון והערכה מותאם לארגון, לא מהמדף.",
                linkLabel: "עוד על שירותים לארגונים",
                linkHref: "/services/organizations",
              },
            ]}
          />
        </div>
      </div>
      </ScrollReveal>

      {/* Section 3 Trust Bar (bg) */}
      <ScrollReveal>
      <div className="relative overflow-hidden">
        <DecorativeCircle
          design="swirl-arcs"
          color="orange"
          size={350}
          animation="pulse-gentle"
          opacity={0.5}
          className="absolute hidden lg:block z-[1] left-[-100px] top-1/2 -translate-y-1/2"
        />
        <div className="relative">
          <TrustBar
            badges={[
              { stat: "30+", label: "שנות ניסיון" },
              { label: "פסיכולוג תעסוקתי מומחה-מדריך" },
              { label: 'סא"ל (מיל׳) ראש מערכי מיון והערכה בצה"ל' },
              { label: "ליווי עשרות ארגונים מובילים" },
            ]}
          />
        </div>
      </div>
      </ScrollReveal>

      {/* Section 4 About Preview (subtle-bg) */}
      <ScrollReveal>
      <AboutPreview
        text="פסיכולוג תעסוקתי מומחה עם שלושה עשורים של ניסיון בליווי אנשים בצמתים תעסוקתיים ובבניית תהליכי מיון והערכה לארגונים. הגישה שלי מבוססת על שותפות, הקשבה וכלים מקצועיים שמותאמים בדיוק לצרכים שלכם."
        linkLabel="קצת עליי"
        linkHref="/about"
      />
      </ScrollReveal>
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import {
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "סדנאות העצמה תעסוקתית — ברוך קאירי",
  description:
    "סדנאות קריירה לאנשים בצמתים תעסוקתיים — מחליפי מקצוע, סטודנטים ואנשים בתקופות מעבר. כלים מקצועיים, עבודה אישית ודיון קבוצתי בקבוצות קטנות.",
}

const audienceItems = [
  "אנשים שמרגישים תקיעות בקריירה",
  "מחליפי מקצוע ובוחנים כיוונים חדשים",
  "סטודנטים שעומדים לפני כניסה לשוק העבודה",
  "מי שעומדים מול שינוי ארגוני",
  "אנשים בתקופות מעבר תעסוקתי",
]

const outcomes = [
  "בהירות לגבי הכיוון",
  "כלים מעשיים לתהליך קבלת ההחלטות",
  "תחושה שההחלטה הבאה — אפשר לקחת אותה",
]

export default function WorkshopsPage() {
  return (
    <>
      {/* Section 1 — Hero with conference photo B (bg) */}
      <Section background="bg">
        <div className="flex flex-col lg:flex-row gap-xl lg:gap-2xl items-start">
          {/* Text column */}
          <div className="flex-1">
            <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
              סדנאות העצמה תעסוקתית
            </h1>
            <SectionDivider className="mt-lg mb-xl !justify-start" />
            <p className="text-lg leading-[1.7] text-text-secondary">
              מרגישים תקועים? לא בטוחים מה הכיוון? לפעמים השינוי מתחיל מהבנה
              שאתם לא לבד בזה.
            </p>
          </div>

          {/* Photo placeholder */}
          <div className="w-full lg:w-[45%] flex-shrink-0">
            <div className="w-full aspect-[16/9] rounded-md overflow-hidden bg-subtle flex items-center justify-center">
              <span className="text-text-secondary text-sm">תמונה תתווסף בקרוב</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2 — Audience (subtle-bg) */}
      <ScrollReveal>
      <Section background="subtle-bg">
        <div className="max-w-[var(--max-width-text)]">
          <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-lg">
            למי הסדנאות מיועדות?
          </h2>
          <ul className="space-y-sm">
            {audienceItems.map((item) => (
              <li key={item} className="flex items-start gap-sm">
                <CheckCircle
                  size={20}
                  weight="regular"
                  className="text-primary flex-shrink-0 mt-[4px]"
                />
                <span className="font-body text-lg leading-[1.7] text-text-secondary">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      </ScrollReveal>

      {/* Section 3 — What happens + outcomes (bg) */}
      <ScrollReveal>
      <Section background="bg">
        <div className="max-w-[var(--max-width-text)]">
          <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-lg">
            מה קורה בסדנה?
          </h2>
          <p className="text-lg leading-[1.7] text-text-secondary mb-xl">
            הסדנה משלבת כלים מקצועיים מעולם הפסיכולוגיה התעסוקתית עם עבודה
            אישית ודיון קבוצתי. במהלך הסדנה נבחן מה מניע אתכם, מהם החוזקות
            שאתם לא רואים, ומהם הצעדים הקונקרטיים שאפשר לעשות — כבר עכשיו.
          </p>

          <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-lg">
            מה יוצאים עם?
          </h2>
          <ul className="space-y-sm mb-xl">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-sm">
                <CheckCircle
                  size={20}
                  weight="regular"
                  className="text-primary flex-shrink-0 mt-[4px]"
                />
                <span className="font-body text-lg leading-[1.7] text-text-secondary">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-base leading-[1.7] text-text-secondary">
            הסדנאות מתקיימות בקבוצות קטנות, ומותאמות לקהל היעד.
          </p>
        </div>
      </Section>
      </ScrollReveal>
    </>
  )
}

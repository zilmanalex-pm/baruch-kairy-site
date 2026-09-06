import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { IconCircle } from "@/components/ui/IconCircle"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import {
  Users,
  ListChecks,
  Trophy,
  Microphone,
} from "@phosphor-icons/react/dist/ssr"
import { DecorativeCircle } from "@/components/ui/DecorativeCircle"

export const metadata: Metadata = {
  title: "סדנאות העצמה תעסוקתית | ברוך קאירי",
  description:
    "סדנאות קריירה לאנשים בצמתים תעסוקתיים מחליפי מקצוע, סטודנטים ואנשים בתקופות מעבר. כלים מקצועיים, עבודה אישית ודיון קבוצתי בקבוצות קטנות.",
}

const infoCards = [
  {
    icon: Users,
    title: "למי מתאים?",
    items: [
      "אנשים שמרגישים תקיעות בקריירה",
      "מחליפי מקצוע ובוחנים כיוונים חדשים",
      "סטודנטים לפני כניסה לשוק העבודה",
      "אנשים בתקופות מעבר תעסוקתי",
    ],
  },
  {
    icon: ListChecks,
    title: "מה בפנים?",
    items: [
      "כלים מקצועיים מעולם הפסיכולוגיה התעסוקתית",
      "עבודה אישית ודיון קבוצתי",
      "בחינת חוזקות, מוטיבציות וכיוונים",
      "צעדים קונקרטיים שאפשר לעשות כבר עכשיו",
      "משך הסדנה: יום וחצי",
    ],
  },
  {
    icon: Trophy,
    title: "עם מה יוצאים?",
    items: [
      "בהירות לגבי הכיוון",
      "כלים מעשיים לקבלת החלטות",
      "תחושה שההחלטה הבאה — אפשר לקחת אותה",
      "הזמנה למפגש סיכום אישי עם מיפוי אישיותי-תעסוקתי מעמיק",
    ],
  },
]

const lectures = [
  {
    title: "מנהיגות ומנהיגים בראי הפסיכולוגיה",
    subtitle: "מה הפסיכולוגיה יודעת על מנהיגות, ומה זה אומר בפועל.",
  },
  {
    title: "בחן את עצמך — על אבחון, מבחנים ואנשים",
    subtitle: "מה באמת מודדים מבחנים פסיכולוגיים, ואיך לקרוא את התוצאות נכון.",
  },
  {
    title: "העבודה היא חיינו",
    subtitle: "על בחירת קריירה ותעסוקה במעגלי החיים — איך בחירות תעסוקתיות משתנות.",
  },
  {
    title: "\"לאסוף את השברים\"",
    subtitle: "חוסן אישי והתמודדות — כלים פסיכולוגיים לתקופות שינוי ומשבר.",
  },
  {
    title: "\"איזהו חכם?\"",
    subtitle: "על אינטליגנציות בעת המודרנית — מה זה אומר להיות חכם היום.",
  },
  {
    title: "\"אף אחד לא מושלם\"",
    subtitle: "על לקויות למידה ודרכי אבחונן — הבנה מעשית.",
  },
  {
    title: "דור העתיד — מאפיינים פסיכולוגיים",
    subtitle: "מה מאפיין את הדורות החדשים ואיך זה משפיע על עולם העבודה.",
  },
  {
    title: "קבלת החלטות",
    subtitle: "מנגנונים פסיכולוגיים שמשפיעים על הבחירות שלנו, ואיך להשתמש בהם.",
  },
]

export default function WorkshopsPage() {
  return (
    <>
      {/* Section 1 Hero (bg) */}
      <Section background="bg">
        <div className="max-w-[var(--max-width-text)]">
          <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
            סדנאות העצמה תעסוקתית
          </h1>
          <SectionDivider className="mt-lg mb-xl !justify-start" />
          <p className="text-lg leading-[1.7] text-text-secondary">
            מרגישים תקועים? לא בטוחים מה הכיוון? לפעמים השינוי מתחיל מהבנה
            שאתם לא לבד בזה. הסדנה עושה שימוש מרכזי בקבוצה כפלטפורמה — ללמידה
            על עצמך, על המאפיינים שלך בהקשר צוותי וארגוני, ועל הכיוונים שמתאימים
            לך.
          </p>
        </div>
      </Section>

      {/* Section 2 Three info cards (subtle-bg) */}
      <ScrollReveal>
      <div className="relative overflow-hidden">
        <DecorativeCircle className="absolute hidden lg:block z-[1] left-[-30px] top-[-20px]" design="swirl-arcs" color="orange" size={320} animation="wobble" opacity={0.45} />
        <div className="relative">
          <Section background="subtle-bg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {infoCards.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="bg-white rounded-[12px] border border-[#CFE0C3] p-[24px] shadow-[0_2px_8px_rgba(64,121,140,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(64,121,140,0.15)]"
                  >
                    <div className="mb-md">
                      <IconCircle>
                        <Icon size={24} weight="regular" className="text-primary" />
                      </IconCircle>
                    </div>
                    <h3 className="font-heading text-[20px] font-bold leading-[1.3] text-text mb-md">
                      {card.title}
                    </h3>
                    <ul className="space-y-xs">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className="font-body text-[16px] leading-[1.7] text-text-secondary flex items-start gap-sm"
                        >
                          <span className="text-primary mt-[2px] flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            {/* "חשוב לדעת" callout */}
            <div className="mt-xl bg-white rounded-[12px] border border-[#CFE0C3] p-[24px] shadow-[0_2px_8px_rgba(64,121,140,0.08)] max-w-[var(--max-width-text)]">
              <h3 className="font-heading text-lg font-bold text-text mb-sm">
                חשוב לדעת
              </h3>
              <p className="font-body text-base leading-[1.7] text-text-secondary">
                הסדנה אינה עוסקת ברכישת מיומנויות כגון כתיבת קורות חיים והכנה לראיונות.
                הסדנה עוסקת ברכישת תובנות אישיות כחלק מתהליך קבוצתי — הבנה עמוקה יותר
                של מי אתם ומה מתאים לכם.
              </p>
            </div>

            <p className="text-sm leading-[1.7] text-text-secondary mt-xl">
              הסדנאות מתקיימות בקבוצות קטנות, ומותאמות לקהל היעד.
            </p>
          </Section>
        </div>
      </div>
      </ScrollReveal>

      {/* Section 3 Lectures (bg) */}
      <ScrollReveal>
      <div className="relative overflow-hidden">
        <DecorativeCircle className="absolute hidden lg:block z-[1] right-[-100px] bottom-[-80px]" design="spirograph" color="teal" size={250} animation="pulse-gentle" opacity={0.4} />
        <div className="relative">
          <Section background="bg">
            <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-md section-heading-accent">
              הרצאות והכשרות
            </h2>
            <p className="text-lg leading-[1.7] text-text-secondary mb-xl max-w-[var(--max-width-text)]">
              מגוון הרצאות מקצועיות לארגונים, כנסים ומסגרות לימודיות — כל אחת משלבת ידע פסיכולוגי עדכני עם דוגמאות מהשטח.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
              {lectures.map((lecture) => (
                <div
                  key={lecture.title}
                  className="bg-white rounded-[12px] border border-[#CFE0C3] p-[20px] shadow-[0_2px_8px_rgba(64,121,140,0.08)]"
                >
                  <div className="mb-sm"><IconCircle className="!w-[40px] !h-[40px]"><Microphone size={20} weight="regular" className="text-primary" /></IconCircle></div>
                  <h3 className="font-heading text-[16px] font-medium leading-[1.3] text-text mb-xs">
                    {lecture.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.6] text-text-secondary">
                    {lecture.subtitle}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base leading-[1.7] text-text-secondary mt-lg">
              מעוניינים בהרצאה לארגון, לכנס או למסגרת לימודית? <a href="/contact" className="text-primary font-medium hover:text-primary-dark hover:underline transition-colors duration-150">צרו קשר</a>
            </p>
          </Section>
        </div>
      </div>
      </ScrollReveal>
    </>
  )
}

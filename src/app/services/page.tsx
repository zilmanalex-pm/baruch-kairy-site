import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { Card, CardContent } from "@/components/ui/Card"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import {
  User,
  Heartbeat,
  Signpost,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "ייעוץ תעסוקתי פרטני — ברוך קאירי, פסיכולוג תעסוקתי",
  description:
    "ייעוץ קריירה, ליווי בצמתים תעסוקתיים וייעוץ תעסוקתי מודע טראומה. תהליך פסיכולוגי מקצועי שעוזר לך להבין מה הצעד הבא ולפעול לפיו. שיחת היכרות ללא מחויבות.",
}

const services = [
  {
    icon: User,
    title: "ייעוץ תעסוקתי פרטני",
    audience:
      "לך, אם אתה מרגיש שהקריירה לא הולכת לאן שחשבת. אם אתה אומר לעצמך \"אני לא מרוצה מתחום העיסוק שלי ורוצה לעשות שינוי\" — אבל לא יודע לאן. או שפוטרתי לאחרונה ולא יודע מה לעשות הלאה — והקרקע מרגישה לא יציבה.",
    process:
      "בייעוץ תעסוקתי אנחנו עובדים יחד על הבנת היכולות, העניין והכיוון שלך. אני משתמש בכלים פסיכולוגיים מקצועיים — אבחון, שיחות מובנות, שאלונים — כדי לעזור לך לזהות מה מתאים לך, מה הבשל ומה עוד דורש חשיבה. לא מדובר בתשובות מוכנות. מדובר בתהליך שבסופו אתה יודע מה הצעד הבא — ויכול לעשות אותו.",
  },
  {
    icon: Heartbeat,
    title: "ייעוץ תעסוקתי מודע טראומה",
    audience:
      "לאנשים שחוויות קשות — צבאיות, אישיות או אחרות — משפיעות על היכולת שלהם לתפקד בעבודה או לקבל החלטות תעסוקתיות. כשהעבר לא נותן לך להתקדם קדימה.",
    process:
      "התהליך משלב ייעוץ תעסוקתי עם רגישות לטראומה. אני מכיר את ההשפעה שיכולה להיות לחוויות קשות על תחושת המסוגלות, הביטחון העצמי וקבלת ההחלטות. העבודה נעשית בקצב שלך, עם כלים שמותאמים למצב — כולל גישות כמו ACT ו-SEE FAR CBT — כדי שתוכל לחזור לעבוד מתוך בחירה ולא מתוך הישרדות.",
  },
  {
    icon: Signpost,
    title: "ליווי בצמתים תעסוקתיים",
    audience:
      "למי שעומד מול החלטה: לעזוב או להישאר? לעבור תפקיד? להחליף כיוון לגמרי? כשיש תחושת תקיעות בקריירה ולא ברור מה הדרך הנכונה.",
    process:
      "ליווי ממוקד שנבנה סביב ההחלטה שעל הפרק. אנחנו בוחנים יחד את השיקולים — מקצועיים, אישיים, כלכליים — מרחיבים את נקודות המבט, ומגיעים להחלטה מבוססת. זה לא קואצ'ינג מוטיבציוני. זה תהליך מקצועי שעוזר לך להבין מה נכון לך, ולפעול לפי זה.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Section 1 — Page header (bg) */}
      <Section background="bg">
        <div className="max-w-[var(--max-width-text)]">
          <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
            שירותים לפרט
          </h1>
          <SectionDivider className="mt-lg mb-xl !justify-start" />
          <p className="text-lg leading-[1.7] text-text-secondary">
            כל אדם מגיע עם סיפור אחר. התהליכים שלי מותאמים אישית — כי אין
            שתי קריירות זהות ואין שני אנשים זהים.
          </p>
        </div>
      </Section>

      {/* Section 2 — Service cards (subtle-bg) */}
      <ScrollReveal>
      <Section background="subtle-bg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title}>
                <CardContent>
                  <div className="mb-md">
                    <Icon
                      size={32}
                      weight="regular"
                      className="text-primary"
                    />
                  </div>
                  <h2 className="font-heading text-xl font-medium leading-[1.3] text-text mb-md">
                    {service.title}
                  </h2>
                  <div className="space-y-sm">
                    <div>
                      <h3 className="font-body text-sm font-medium text-text mb-xs">
                        למי זה מתאים?
                      </h3>
                      <p className="font-body text-base leading-[1.7] text-text-secondary">
                        {service.audience}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-medium text-text mb-xs">
                        מה קורה בתהליך?
                      </h3>
                      <p className="font-body text-base leading-[1.7] text-text-secondary">
                        {service.process}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>
      </ScrollReveal>
    </>
  )
}

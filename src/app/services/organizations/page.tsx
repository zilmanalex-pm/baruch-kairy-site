import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { Card, CardContent } from "@/components/ui/Card"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import {
  UsersFour,
  Wrench,
  MagnifyingGlass,
  ChartLine,
  Chalkboard,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "מיון והערכה לארגונים — IHS | ברוך קאירי",
  description:
    "מרכזי הערכה, פיתוח כלי מיון מותאמים, בדק בית מיוני, מחקרי מעקב והכשרת מנהלים. תהליכי מיון שנבנים בדיוק לארגון שלכם — לא מהמדף.",
}

const pillars = [
  {
    title: "ייחודיות",
    description:
      "כל תהליך מיון נבנה מאפס, על בסיס הכרת הארגון, התרבות הארגונית, ודרישות התפקיד הספציפיות.",
  },
  {
    title: "בעלות",
    description:
      "הכלים נשארים אצלכם. אנחנו בונים יכולת פנימית, לא תלות בגורם חיצוני.",
  },
  {
    title: "יעילות",
    description:
      "תהליכים ממוקדים שלא מבזבזים זמן — לא שלכם ולא של המועמדים.",
  },
  {
    title: "הוגנות",
    description:
      "תהליכי מיון שקופים ומבוססי מחקר, שנותנים למועמד הזדמנות אמיתית להראות את עצמו.",
  },
]

const orgServices = [
  {
    icon: UsersFour,
    title: "אבחון, מיון והערכה",
    audience:
      "לארגונים שצריכים להפעיל תהליכי מיון — ממיון מועמדים לקבלה ועד מרכז הערכה לקידום ולמיפוי פוטנציאל ניהולי.",
    description:
      "בנייה והפעלה של מרכז הערכה מותאם לארגון, כתיבת חוות דעת מקצועיות על מועמדים, הפעלת סוללות מבחנים ותרגילי סימולציה, וליווי הארגון בקבלת ההחלטה. הכל על בסיס מתודולוגיה מבוססת מחקר ומותאמת לצרכים שלכם.",
  },
  {
    icon: Wrench,
    title: "פיתוח כלי מיון",
    audience:
      "לארגונים שרוצים כלי מיון שנבנו בדיוק בשבילם — לא שאלונים גנריים, אלא כלים שמודדים את מה שחשוב לתפקיד הספציפי בארגון שלכם.",
    description:
      "פיתוח מבחנים, שאלונים, ראיונות מובנים וסימולציות, מותאמים לתרבות הארגונית ולפרופיל התפקיד. כל כלי עובר תיקוף ובדיקה.",
  },
  {
    icon: MagnifyingGlass,
    title: '\"בדק בית\" מיוני',
    audience:
      "למנהלי משאבי אנוש שיודעים שתהליך המיון שלהם לא נותן את התוצאות — תחלופה גבוהה, אי-התאמות חוזרות, תחושה שמשהו לא עובד.",
    description:
      "בחינה מעמיקה של תהליכי המיון הקיימים: כלים, מתודולוגיה, עקביות, ותוקף. בסוף התהליך תקבלו דוח ברור עם ממצאים והמלצות מעשיות — מה לתקן, מה להחליף, ומה לשמר.",
  },
  {
    icon: ChartLine,
    title: "מחקרי מעקב",
    audience:
      "לארגונים שרוצים לדעת אם ההחלטות שקיבלו בתהליכי המיון אכן עובדות — האם מי שנבחר מצליח בתפקיד? האם הכלים חוזים את מה שהם צריכים לחזות?",
    description:
      "מחקר שיטתי שבודק את הקשר בין הביצועים במיון לבין ההצלחה בפועל. זה הכלי שמאפשר ללמוד מהניסיון ולשפר את התהליך באופן מתמשך.",
  },
  {
    icon: Chalkboard,
    title: "הכשרה למנהלים ומשאבי אנוש",
    audience:
      "למנהלים שמראיינים מועמדים ולא בטוחים שהם עושים את זה נכון. לצוותי HR שרוצים לשדרג את המיומנויות שלהם בהערכה ובמתן משוב.",
    description:
      "סדנאות והכשרות מעשיות: איך לנהל ראיון עבודה מובנה, איך להעריך מועמד על בסיס ראיות ולא תחושות בטן, ואיך לתת משוב בונה למועמד שלא התקבל. כלים שמשתמשים בהם כבר מהיום שאחרי.",
  },
]

export default function OrganizationsPage() {
  return (
    <>
      {/* Section 1 — IHS intro (bg) */}
      <Section background="bg">
        <div className="max-w-[var(--max-width-text)]">
          <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
            שירותים לארגונים
          </h1>
          <SectionDivider className="mt-lg mb-xl !justify-start" />
          <p className="text-lg leading-[1.7] text-text-secondary mb-md">
            IHS הוקמה מתוך הבנה שתהליכי מיון צריכים להיות מדויקים, הוגנים,
            ומותאמים לארגון הספציפי. לא עוד תבניות גנריות — אלא כלים שנבנו
            בדיוק לצרכים שלכם, מופעלים בתוך הארגון, וכוללים מעקב ובקרה.
          </p>
        </div>
      </Section>

      {/* Section 2 — Four pillars (subtle-bg) */}
      <ScrollReveal>
      <Section background="subtle-bg">
        <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-xl text-center">
          ארבעת העמודים של IHS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center"
            >
              <h3 className="font-heading text-xl font-medium leading-[1.3] text-primary mb-sm">
                {pillar.title}
              </h3>
              <p className="font-body text-base leading-[1.7] text-text-secondary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
      </ScrollReveal>

      {/* Section 3 — Service cards (bg) */}
      <ScrollReveal>
      <Section background="bg">
        <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-xl">
          מה אנחנו עושים
        </h2>
        <div className="space-y-lg">
          {orgServices.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title}>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-lg">
                    <div className="flex-shrink-0">
                      <Icon
                        size={32}
                        weight="regular"
                        className="text-primary"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-medium leading-[1.3] text-text mb-sm">
                        {service.title}
                      </h3>
                      <p className="font-body text-sm font-medium text-text mb-xs">
                        למי זה?
                      </p>
                      <p className="font-body text-base leading-[1.7] text-text-secondary mb-md">
                        {service.audience}
                      </p>
                      <p className="font-body text-sm font-medium text-text mb-xs">
                        מה כולל?
                      </p>
                      <p className="font-body text-base leading-[1.7] text-text-secondary">
                        {service.description}
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

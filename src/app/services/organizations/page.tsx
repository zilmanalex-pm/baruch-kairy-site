import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { Card, CardContent } from "@/components/ui/Card"
import { IconCircle } from "@/components/ui/IconCircle"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import {
  UsersFour,
  Wrench,
  MagnifyingGlass,
  ChartLine,
  Chalkboard,
  Handshake,
  Fingerprint,
  House,
  Lightning,
  Scales,
  Microphone,
} from "@phosphor-icons/react/dist/ssr"
import { DecorativeCircle } from "@/components/ui/DecorativeCircle"

export const metadata: Metadata = {
  title: "מיון והערכה לארגונים | ברוך קאירי",
  description:
    "מרכזי הערכה, פיתוח כלי מיון מותאמים, בדק בית מיוני, מחקרי מעקב והכשרת מנהלים. תהליכי מיון שנבנים בדיוק לארגון שלכם לא מהמדף.",
}

const pillars = [
  {
    icon: Fingerprint,
    title: "ייחודיות",
    description:
      "מיון בוטיק, ממוקד בצרכים שלך ומותאם בקפידה — חליפה לפי מידה. אתה לא \"עוד לקוח\", אלא אתה \"ה-לקוח\".",
  },
  {
    icon: House,
    title: "בעלות",
    description:
      "גמישות ושליטה. הכלים נשארים אצלכם, הידע קיים בבית. אנחנו בונים יכולת פנימית, לא תלות בגורם חיצוני.",
  },
  {
    icon: Lightning,
    title: "יעילות",
    description:
      "תהליכים ממוקדים שלא מבזבזים זמן — לא שלכם ולא של המועמדים.",
  },
  {
    icon: Scales,
    title: "הוגנות",
    description:
      "תהליכי מיון שקופים ומבוססי מחקר, שנותנים למועמד הזדמנות אמיתית להראות את עצמו.",
  },
]

const orgServices = [
  {
    icon: UsersFour,
    title: "אבחון, מיון והערכה",
    description:
      "לארגונים שצריכים להפעיל תהליכי מיון ממיון מועמדים לקבלה ועד מרכז הערכה לקידום ולמיפוי פוטנציאל ניהולי. בנייה והפעלה של מרכז הערכה מותאם לארגון, כתיבת חוות דעת מקצועיות, הפעלת סוללות מבחנים ותרגילי סימולציה, וליווי הארגון בקבלת ההחלטה.",
  },
  {
    icon: Wrench,
    title: "פיתוח כלי מיון",
    description:
      "לארגונים שרוצים כלי מיון שנבנו בדיוק בשבילם לא שאלונים גנריים, אלא כלים שמודדים את מה שחשוב לתפקיד הספציפי. פיתוח מבחנים, שאלונים, ראיונות מובנים וסימולציות, מותאמים לתרבות הארגונית ולפרופיל התפקיד.",
  },
  {
    icon: MagnifyingGlass,
    title: '"בדק בית" מיוני',
    description:
      "למנהלי משאבי אנוש שיודעים שתהליך המיון שלהם לא נותן את התוצאות — תחלופה גבוהה, אי-התאמות חוזרות, תחושה שמשהו לא עובד. בדיקת יעילות ואפקטיביות תהליכי המיון הפועלים אצלכם בארגון. הבדיקה נערכת בעזרת מודל אבחון ייחודי המייצר אינדקס למידת ההתאמה של התהליך הקיים — כלים, מתודולוגיה, עקביות ותוקף. בסוף התהליך תקבלו דוח ברור עם ממצאים והמלצות מעשיות — מה לתקן, מה להחליף, ומה לשמר.",
  },
  {
    icon: ChartLine,
    title: "מחקרי מעקב",
    description:
      "לארגונים שרוצים לדעת אם ההחלטות שקיבלו בתהליכי המיון אכן עובדות. מחקר שיטתי שבודק את הקשר בין הביצועים במיון לבין ההצלחה בפועל, ומאפשר ללמוד מהניסיון ולשפר את התהליך באופן מתמשך.",
  },
  {
    icon: Chalkboard,
    title: "הכשרה למנהלים ומשאבי אנוש",
    description:
      "למנהלים שמראיינים מועמדים ולצוותי HR שרוצים לשדרג מיומנויות הערכה. סדנאות מעשיות: ראיון עבודה מובנה, הערכה על בסיס ראיות, ומתן משוב בונה. כלים שמשתמשים בהם כבר מהיום שאחרי.",
  },
  {
    icon: Handshake,
    title: "ייעוץ בבחירת ספקים",
    description:
      "לארגונים שצריכים לבחור ספקי מיון והערכה ורוצים לעשות את זה נכון — לא על בסיס מחיר בלבד, אלא על בסיס התאמה מקצועית אמיתית. ליווי בכל שלבי הבחירה: כתיבת מכרזים בתחומי מיון והערכה, הגדרת פרמטרים להערכת ספקים, ניתוח חלופות, והמלצה מבוססת.",
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

export default function OrganizationsPage() {
  return (
    <>
      {/* Section 1 Intro (bg) */}
      <Section background="bg">
        <div className="max-w-[var(--max-width-text)]">
          <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
            שירותים לארגונים — IHS
          </h1>
          <SectionDivider className="mt-lg mb-xl !justify-start" />
          <p className="text-lg leading-[1.7] text-text-secondary mb-md">
            IHS הוקמה מתוך הבנה שתהליכי מיון צריכים להיות מדויקים, הוגנים,
            ומותאמים לארגון הספציפי. לא עוד תבניות גנריות — אלא כלים שנבנו
            בדיוק לצרכים שלכם, מופעלים בתוך הארגון, וכוללים מעקב ובקרה.
          </p>
        </div>
      </Section>

      {/* Section 2 Four pillars as white icon cards (subtle-bg) */}
      <ScrollReveal>
      <div className="relative overflow-hidden">
        <DecorativeCircle className="absolute hidden lg:block z-0 left-[-40px] top-[15%]" design="spirograph" color="teal" size={250} animation="spin-slow" opacity={0.35} />
        <DecorativeCircle className="absolute hidden lg:block z-0 right-[-40px] bottom-[10%]" design="spirograph" color="orange" size={220} animation="spin-slow" opacity={0.4} />
        <div className="relative z-10">
          <Section background="subtle-bg">
            <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-xl text-center section-heading-accent">
              העקרונות שמנחים אותנו
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg max-w-[var(--max-width-text)] mx-auto">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    className="bg-white rounded-[12px] border border-[#CFE0C3] p-[24px] shadow-[0_2px_8px_rgba(64,121,140,0.08)] text-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(64,121,140,0.15)]"
                  >
                    <div className="flex justify-center mb-md">
                      <IconCircle>
                        <Icon size={24} weight="regular" className="text-primary" />
                      </IconCircle>
                    </div>
                    <h3 className="font-heading text-xl font-medium leading-[1.3] text-primary mb-sm">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-base leading-[1.7] text-text-secondary">
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </Section>
        </div>
      </div>
      </ScrollReveal>

      {/* Section 3 Service cards 2-col grid (bg) */}
      <ScrollReveal>
      <div className="relative overflow-hidden">
        <DecorativeCircle className="absolute hidden lg:block z-0 right-[-40px] top-[30%]" design="diagonal-lines" color="orange" size={220} animation="drift-diagonal" opacity={0.45} />
        <div className="relative z-10">
          <Section background="bg">
            <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-xl section-heading-accent">
              פירוט השירותים
            </h2>
            <div className="flex flex-wrap justify-center gap-lg">
              {orgServices.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.title} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                    <Card className="h-full" interactive>
                      <CardContent>
                        <div className="flex items-start gap-md">
                          <div className="flex-shrink-0 mt-[2px]">
                            <IconCircle>
                              <Icon size={22} weight="regular" className="text-primary" />
                            </IconCircle>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading text-lg font-medium leading-[1.3] text-text mb-sm">
                              {service.title}
                            </h3>
                            <p className="font-body text-base leading-[1.7] text-text-secondary">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </Section>
        </div>
      </div>
      </ScrollReveal>

      {/* Section 4 Lectures (subtle-bg) */}
      <ScrollReveal>
      <div className="relative overflow-hidden">
        <DecorativeCircle className="absolute hidden lg:block z-0 left-[-50px] top-[20%]" design="diagonal-lines" color="teal" size={280} animation="drift-diagonal" opacity={0.35} />
        <div className="relative z-10">
          <Section background="subtle-bg">
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

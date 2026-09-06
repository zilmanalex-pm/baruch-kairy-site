import type { Metadata } from "next"
import Image from "next/image"
import { Section, SectionDivider } from "@/components/ui/Section"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { DecorativeCircle } from "@/components/ui/DecorativeCircle"
import { IconCircle } from "@/components/ui/IconCircle"
import {
  Brain,
  Buildings,
  GraduationCap,
  Handshake,
  UsersThree,
  Heartbeat,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "אודות ברוך קאירי פסיכולוג תעסוקתי מומחה-מדריך",
  description:
    'פסיכולוג תעסוקתי מומחה-מדריך עם 30 שנות ניסיון בצה"ל, בסקטור הציבורי, הביטחוני והעסקי. גישה של שותפות אישית ומקצועית לכל לקוח ולכל ארגון.',
}

export default function AboutPage() {
  return (
    <>
      {/* Section 1 Page title + personal narrative (bg) */}
      <div className="relative overflow-hidden">
        {/* Legacy decorative orange half-circle accent — DO NOT MODIFY */}
        <div
          className="hidden lg:block absolute left-[-80px] top-1/2 -translate-y-1/2 w-[450px] h-[450px] pointer-events-none opacity-[0.8] z-0 animate-[float_8s_ease-in-out_infinite]"
          aria-hidden="true"
        >
          <Image
            src="/images/circle-orange-dots.png"
            alt=""
            fill
            className="object-contain"
            sizes="450px"
          />
        </div>

        <Section background="bg">
          <div className="max-w-[var(--max-width-text)] relative z-10">
            <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
              קצת על עצמי
            </h1>

            <SectionDivider className="mt-lg mb-xl !justify-start" />

            <div className="space-y-md text-lg leading-[1.7] text-text-secondary">
              <div className="flex gap-md items-start">
                <div className="flex-shrink-0 mt-1">
                  <IconCircle>
                    <Brain size={24} weight="duotone" className="text-primary" />
                  </IconCircle>
                </div>
                <p>
                  אני פסיכולוג תעסוקתי כבר שלושים שנה. לא התחלתי שם — באתי מרקע של
                  מדעים מדויקים, אבל הסקרנות לגבי אנשים תמיד היתה חזקה יותר. מה
                  גורם לאדם לבחור את מה שהוא בוחר? מה קורה כשמישהו מרגיש תקוע?
                  ואיך אפשר לעזור לארגון למצוא את האדם הנכון למקום הנכון?
                </p>
              </div>
              <div className="flex gap-md items-start">
                <div className="flex-shrink-0 mt-1">
                  <IconCircle>
                    <Buildings size={24} weight="duotone" className="text-primary" />
                  </IconCircle>
                </div>
                <p>
                  השאלות האלה ליוו אותי לאורך הקריירה. בצבא הייתי ראש מערכי מיון
                  והערכה בחיל הים, חיל האוויר וממד&quot;ה. משם המשכתי לעבודה עם עשרות
                  ארגונים — משטרת ישראל, שב&quot;ס, משרד ראש הממשלה, משרד החוץ, בתי
                  המשפט, אל על, ג&apos;וינט, משרד הביטחון, האוניברסיטה הפתוחה,
                  אוניברסיטת תל אביב, ועוד. למדתי מדעי התנהגות באוניברסיטת בן
                  גוריון ופסיכולוגיה חברתית באוניברסיטה העברית. לאורך השנים הוספתי
                  כלים — פוטותרפיה, ACT, עבודה עם טראומה, MBTI, הנחיית קבוצות — כי
                  כל אדם וכל ארגון דורשים משהו אחר.
                </p>
              </div>
              <div className="flex gap-md items-start">
                <div className="flex-shrink-0 mt-1">
                  <IconCircle>
                    <GraduationCap size={24} weight="duotone" className="text-primary" />
                  </IconCircle>
                </div>
                <p>
                  במהלך השנים התמחיתי בפיתוח, הפעלה והטמעה של מערכות מיון והערכה,
                  בכתיבת חוות דעת פסיכולוגיות, ובמתן משוב אינטגרטיבי למועמדים
                  ולארגונים. במקביל אני מדריך פסיכולוגים וגורמי משאבי אנוש — כי יש
                  ערך בכך שהידע הזה לא נשאר רק אצלי, אלא עובר הלאה. אני גם מרצה
                  ומנחה סדנאות בכנסים מקצועיים של הפ&quot;י (הסתדרות הפסיכולוגים
                  בישראל).
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Section 2 Approach (subtle-bg) */}
      <ScrollReveal>
      <div className="relative overflow-hidden">
        <DecorativeCircle
          design="dots-spiral"
          color="orange"
          size={300}
          animation="spin-slow"
          opacity={0.5}
          className="absolute hidden lg:block z-0 right-[-100px] top-[20%]"
        />
        <div className="relative z-10">
          <Section background="subtle-bg">
            <div className="flex flex-col lg:flex-row gap-xl lg:gap-2xl items-stretch">
              {/* Text column */}
              <div className="flex-1">
                <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-lg section-heading-accent">
                  איך אני עובד?
                </h2>

                <div className="space-y-md text-lg leading-[1.7] text-text-secondary">
                  <div className="flex gap-md items-start">
                    <div className="flex-shrink-0 mt-1">
                      <IconCircle>
                        <Handshake size={24} weight="duotone" className="text-primary" />
                      </IconCircle>
                    </div>
                    <p>
                      בשותפות. לא אגיד לך מה לעשות — אני אעזור לך לראות את מה שאתה
                      כבר יודע, ואת מה שעוד לא חשבת עליו. העבודה שלי היא לשאול את
                      השאלות הנכונות, להביא כלים מקצועיים שמרחיבים את התמונה, ולהלוות
                      אותך עד שההחלטה נראית ברורה. הגישה הזו עובדת בין אם מדובר באדם
                      שפוטר ולא יודע מה הלאה, ובין אם מדובר במנהלת משאבי אנוש שרוצה
                      לבנות תהליך מיון חדש מהיסוד.
                    </p>
                  </div>
                  <div className="flex gap-md items-start">
                    <div className="flex-shrink-0 mt-1">
                      <IconCircle>
                        <UsersThree size={24} weight="duotone" className="text-primary" />
                      </IconCircle>
                    </div>
                    <p>
                      עם ארגונים אני עובד בגישה דומה: מקשיב, לומד את הצרכים, ובונה
                      תהליכי מיון מותאמים — לא פתרונות מוכנים מהמדף, אלא כלים שנבנו
                      בדיוק לארגון שלכם, על בסיס מתודולוגיה מבוססת מחקר וניסיון שטח.
                      הקמתי את IHS כדי לעשות בדיוק את זה — ייעוץ בוטיק, אישי ומעמיק,
                      שנותן לארגון בעלות על הכלים שנבנו עבורו.
                    </p>
                  </div>
                  <div className="flex gap-md items-start">
                    <div className="flex-shrink-0 mt-1">
                      <IconCircle>
                        <Heartbeat size={24} weight="duotone" className="text-primary" />
                      </IconCircle>
                    </div>
                    <p>
                      הקליניקה שלי נמצאת בצפון תל אביב, ואני עובד גם אונליין. מה
                      שמניע אותי בסוף הוא פשוט: הסקרנות והעניין להקשיב לאנשים, לסיפורים
                      האישיים והמקצועיים שלהם, ולעזור — גם בימים של ודאות וגם בתקופות של
                      בלבול ומשבר. אני איש מקצוע שמשלב ראייה מערכתית, יחסי אנוש,
                      והובלה של נושאים בתחום המשאב האנושי — ובסוף, המטרה תמיד אותו דבר:
                      לראות את התמונה הכוללת ולהציע מענה פרקטי שמקדם את הפרט ואת הארגון
                      לקבלת ההחלטה הנכונה.
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo column — stretches to match text height */}
              <div className="w-full lg:w-[32%] flex-shrink-0">
                <div className="relative w-full h-full min-h-[360px] rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(64,121,140,0.12)]">
                  <Image
                    src="/images/baruch-lecture.png"
                    alt="ברוך קאירי מרצה בכנס מקצועי"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 32vw"
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
      </ScrollReveal>
    </>
  )
}

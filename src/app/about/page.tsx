import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export const metadata: Metadata = {
  title: "אודות ברוך קאירי — פסיכולוג תעסוקתי מומחה-מדריך",
  description:
    'פסיכולוג תעסוקתי מומחה-מדריך עם 30 שנות ניסיון בצה"ל, בסקטור הציבורי, הביטחוני והעסקי. גישה של שותפות — אישית ומקצועית לכל לקוח ולכל ארגון.',
}

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — Page title + personal narrative (bg) */}
      <Section background="bg">
        <div className="max-w-[var(--max-width-text)]">
          <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
            קצת על עצמי
          </h1>

          <SectionDivider className="mt-lg mb-xl !justify-start" />

          <div className="space-y-md text-lg leading-[1.7] text-text-secondary">
            <p>
              אני פסיכולוג תעסוקתי כבר שלושים שנה. לא התחלתי שם — באתי מרקע של
              מדעים מדויקים, אבל הסקרנות לגבי אנשים תמיד היתה חזקה יותר. מה
              גורם לאדם לבחור את מה שהוא בוחר? מה קורה כשמישהו מרגיש תקוע?
              ואיך אפשר לעזור לארגון למצוא את האדם הנכון למקום הנכון?
            </p>
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
        </div>
      </Section>

      {/* Section 2 — Approach (subtle-bg) */}
      <ScrollReveal>
      <Section background="subtle-bg">
        <div className="max-w-[var(--max-width-text)]">
          {/* Photo placeholder */}
          <div className="w-full aspect-[16/9] rounded-md overflow-hidden mb-lg bg-subtle flex items-center justify-center">
            <span className="text-text-secondary text-sm">תמונה תתווסף בקרוב</span>
          </div>

          <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-lg">
            איך אני עובד?
          </h2>

          <div className="space-y-md text-lg leading-[1.7] text-text-secondary">
            <p>
              בשותפות. לא אגיד לך מה לעשות — אני אעזור לך לראות את מה שאתה
              כבר יודע, ואת מה שעוד לא חשבת עליו. העבודה שלי היא לשאול את
              השאלות הנכונות, להביא כלים מקצועיים שמרחיבים את התמונה, ולהלוות
              אותך עד שההחלטה נראית ברורה. הגישה הזו עובדת בין אם מדובר באדם
              שפוטר ולא יודע מה הלאה, ובין אם מדובר במנהלת משאבי אנוש שרוצה
              לבנות תהליך מיון חדש מהיסוד.
            </p>
            <p>
              עם ארגונים אני עובד בגישה דומה: מקשיב, לומד את הצרכים, ובונה
              תהליכי מיון מותאמים — לא פתרונות מוכנים מהמדף, אלא כלים שנבנו
              בדיוק לארגון שלכם, על בסיס מתודולוגיה מבוססת מחקר וניסיון שטח.
              הקמתי את IHS כדי לעשות בדיוק את זה — ייעוץ בוטיק, אישי ומעמיק,
              שנותן לארגון בעלות על הכלים שנבנו עבורו.
            </p>
            <p>
              הקליניקה שלי נמצאת בצפון תל אביב, ואני עובד גם אונליין. מה
              שמניע אותי בסוף הוא פשוט: הסקרנות והעניין להקשיב לאנשים, לסיפורים
              האישיים והמקצועיים שלהם, ולעזור — גם בימים של ודאות וגם בתקופות של
              בלבול ומשבר. לראות את התמונה הכוללת ולהציע מענה פרקטי שמקדם את
              הפרט ואת הארגון לקבלת ההחלטה הנכונה. זה מה שאני עושה, וזה מה
              שאני אוהב לעשות.
            </p>
          </div>
        </div>
      </Section>
      </ScrollReveal>
    </>
  )
}

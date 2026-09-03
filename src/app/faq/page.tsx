import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export const metadata: Metadata = {
  title: "שאלות נפוצות — ייעוץ תעסוקתי | ברוך קאירי",
  description:
    "תשובות לשאלות נפוצות על ייעוץ תעסוקתי עם ברוך קאירי: כמה זמן לוקח, מה העלות, מה ההבדל מקואצ׳ינג, אפשרות אונליין ואיך נראית פגישה ראשונה.",
}

const faqs = [
  {
    question: "כמה זמן לוקח תהליך ייעוץ תעסוקתי?",
    answer:
      "זה תלוי בסיטואציה. תהליך ייעוץ פרטני נמשך בדרך כלל בין 3 ל-6 מפגשים, אבל חלק מהמקרים מסתיימים לפני כן וחלק דורשים ליווי ארוך יותר. בשיחה הראשונה נבין מה המצב ונתאים את המתווה.",
  },
  {
    question: "מה העלות?",
    answer:
      "העלות תלויה בסוג השירות ובהיקפו. אני מאמין בשקיפות — בשיחה הראשונה נעבור על מה שנדרש ואתן לכם תמחור מדויק, ללא הפתעות. שיחת ההיכרות עצמה אינה כרוכה בעלות.",
  },
  {
    question: "האם זה באמת יכול לעזור לי?",
    answer:
      "תשובה ישרה: כן, אבל לא בדרך קסומה. תהליך ייעוץ תעסוקתי מבוסס על מתודולוגיה פסיכולוגית שעוזרת לך לראות דברים שלא ראית לבד — דפוסים, חוזקות, עניין שלא ידעת שקיים, חסמים שלא זיהית. זה לא פתרון מיידי, אבל זה תהליך שמקדם. שלושים שנה ומאות לקוחות מלמדים אותי שזה עובד.",
  },
  {
    question: "מה ההבדל בין ייעוץ תעסוקתי לקואצ׳ינג?",
    answer:
      "קואצ׳ינג עוסק בדרך כלל במוטיבציה, מיקוד מטרות ותוכניות פעולה. ייעוץ תעסוקתי הוא תהליך פסיכולוגי מקצועי שכולל הערכה מעמיקה — כולל אבחון, שאלונים וכלים מקצועיים — ומטרתו להבין מה באמת מתאים לך, לא רק מה אתה רוצה לשמוע. אני פסיכולוג תעסוקתי מומחה, לא קואצ׳ר, וההבדל הזה משנה את עומק התהליך.",
  },
  {
    question: "האם אפשר לעשות את זה אונליין?",
    answer:
      "כן. חלק מהתהליכים מתנהלים באופן מלא אונליין, וחלקם משלבים מפגשים פנים אל פנים בקליניקה בצפון תל אביב עם מפגשים מקוונים. ניתאים את הפורמט למה שנוח ונכון לכם.",
  },
  {
    question: "איך נראית פגישה ראשונה?",
    answer:
      "שיחת היכרות — לא מבחן, לא ראיון, לא מחויבות. נדבר על מה שמביא אתכם, אבין את הסיטואציה, ונחשוב ביחד אם ואיך אני יכול לעזור. בסוף השיחה תדעו מה האפשרויות ותוכלו להחליט אם להמשיך.",
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Section 1 — FAQ accordion (bg) */}
      <Section background="bg">
        <div className="max-w-[var(--max-width-text)]">
          <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
            שאלות נפוצות
          </h1>
          <SectionDivider className="mt-lg mb-xl !justify-start" />

          <div className="space-y-sm">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-subtle rounded-lg bg-white"
              >
                <summary className="flex items-center justify-between cursor-pointer px-lg py-md font-body text-lg font-medium text-text hover:text-primary transition-colors duration-150 list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    className="flex-shrink-0 ms-md text-text-secondary group-open:rotate-180 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-lg pb-lg">
                  <p className="font-body text-base leading-[1.7] text-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

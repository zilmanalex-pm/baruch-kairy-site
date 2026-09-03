import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "צור קשר — ברוך קאירי, פסיכולוג תעסוקתי",
  description:
    "לתיאום שיחת היכרות עם ברוך קאירי — טלפון, וואטסאפ, מייל או טופס. פנייה ראשונה לא מחייבת ואינה כרוכה בעלות. אחזור אליכם תוך יום עסקים אחד.",
}

const channels = [
  {
    icon: Phone,
    label: "טלפון",
    value: "052-515-1351",
    href: "tel:+972525151351",
  },
  {
    icon: WhatsappLogo,
    label: "וואטסאפ",
    value: "שליחת הודעה מהירה",
    href: "https://wa.me/972525151351",
  },
  {
    icon: EnvelopeSimple,
    label: 'דוא"ל',
    value: "kairybaruch@gmail.com",
    href: "mailto:kairybaruch@gmail.com",
  },
]

const inquiryOptions = [
  { value: "", label: "בחרו נושא פנייה" },
  { value: "individual", label: "ייעוץ תעסוקתי פרטני" },
  { value: "organization", label: "שירותים לארגונים" },
  { value: "workshop", label: "סדנאות" },
  { value: "other", label: "אחר" },
]

export default function ContactPage() {
  return (
    <>
      {/* Section 1 — Intro + Channel cards (bg) */}
      <Section background="bg">
        <div className="max-w-[var(--max-width-text)]">
          <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
            בואו נדבר
          </h1>
          <SectionDivider className="mt-lg mb-xl !justify-start" />
          <p className="text-lg leading-[1.7] text-text-secondary mb-xl">
            פנייה ראשונה לא מחייבת. לפעמים מספיקה שיחה קצרה כדי להבין אם זה
            מתאים — ומה הצעד הבא. אתם מוזמנים לפנות בדרך הנוחה לכם.
          </p>
        </div>

        {/* Channel cards — per design-rules section 6.6 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-lg">
          {channels.map((channel) => {
            const Icon = channel.icon
            return (
              <a
                key={channel.label}
                href={channel.href}
                className="block rounded-lg border border-subtle bg-white p-lg shadow-sm text-center hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <Icon
                  size={32}
                  weight="regular"
                  className="text-primary mx-auto mb-sm"
                />
                <span className="block font-body text-sm text-text-secondary mb-xs">
                  {channel.label}
                </span>
                <span
                  className="block font-body text-lg font-medium text-text"
                  dir="ltr"
                  style={{ unicodeBidi: "isolate" }}
                >
                  {channel.value}
                </span>
              </a>
            )
          })}
        </div>
      </Section>

      {/* Section 2 — Contact form + portrait sidebar (subtle-bg) */}
      <ScrollReveal>
      <Section background="subtle-bg">
        <div className="flex flex-col lg:flex-row gap-2xl items-start">
          {/* Form column */}
          <div className="flex-1 w-full">
            <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-lg">
              או השאירו פרטים
            </h2>
            <p className="font-body text-base leading-[1.7] text-text-secondary mb-xl">
              אחזור אליכם תוך יום עסקים אחד.
            </p>

            <form className="space-y-lg">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-body text-sm font-medium text-text mb-xs"
                >
                  שם
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full h-[48px] bg-white border-[1.5px] border-subtle rounded-md px-md font-body text-base text-text placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/15 transition-colors duration-150"
                  placeholder="השם שלכם"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-body text-sm font-medium text-text mb-xs"
                >
                  דוא&quot;ל
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  dir="ltr"
                  style={{ unicodeBidi: "isolate" }}
                  className="w-full h-[48px] bg-white border-[1.5px] border-subtle rounded-md px-md font-body text-base text-text placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/15 transition-colors duration-150 text-left"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone (optional) */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block font-body text-sm font-medium text-text mb-xs"
                >
                  טלפון{" "}
                  <span className="text-text-secondary font-normal">
                    (לא חובה)
                  </span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  dir="ltr"
                  style={{ unicodeBidi: "isolate" }}
                  className="w-full h-[48px] bg-white border-[1.5px] border-subtle rounded-md px-md font-body text-base text-text placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/15 transition-colors duration-150 text-left"
                  placeholder="05X-XXX-XXXX"
                />
              </div>

              {/* Inquiry type dropdown */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-body text-sm font-medium text-text mb-xs"
                >
                  נושא הפנייה
                </label>
                <div className="relative">
                  <select
                    id="contact-subject"
                    required
                    className="w-full h-[48px] bg-white border-[1.5px] border-subtle rounded-md px-md pe-[40px] font-body text-base text-text focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/15 transition-colors duration-150 appearance-none"
                    defaultValue=""
                  >
                    {inquiryOptions.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.value === ""}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute start-[12px] top-1/2 -translate-y-1/2 text-text-secondary"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-body text-sm font-medium text-text mb-xs"
                >
                  כמה מילים על הפנייה
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="w-full min-h-[120px] bg-white border-[1.5px] border-subtle rounded-md px-md py-[12px] font-body text-base text-text placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/15 transition-colors duration-150 resize-y"
                  placeholder="ספרו לי בקצרה מה מביא אתכם..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary text-white font-body text-base font-medium px-[32px] py-[14px] hover:bg-primary-dark active:bg-[#2E4A55] transition-colors duration-150 cursor-pointer focus-visible:outline-3 focus-visible:outline-primary/40 focus-visible:outline-offset-2"
              >
                לתיאום שיחת היכרות
              </button>

              <p className="font-body text-sm text-text-secondary">
                הפנייה אינה מחייבת ואינה כרוכה בעלות.
              </p>
            </form>
          </div>

          {/* Portrait placeholder */}
          <div className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="aspect-[3/4] w-full rounded-lg overflow-hidden sticky top-[96px] bg-subtle flex items-center justify-center">
              <span className="text-text-secondary text-sm">תמונה תתווסף בקרוב</span>
            </div>
          </div>
        </div>
      </Section>
      </ScrollReveal>
    </>
  )
}

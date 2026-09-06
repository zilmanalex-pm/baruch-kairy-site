import type { Metadata } from "next"
import { IconCircle } from "@/components/ui/IconCircle"
import { Section, SectionDivider } from "@/components/ui/Section"
import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr"
import { DecorativeCircle } from "@/components/ui/DecorativeCircle"

export const metadata: Metadata = {
  title: "צור קשר | ברוך קאירי, פסיכולוג תעסוקתי",
  description:
    "לתיאום שיחת היכרות עם ברוך קאירי טלפון, וואטסאפ או מייל.",
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

export default function ContactPage() {
  return (
    <>
      <div className="relative">
        {/* Decorative circles */}
        <div
          className="hidden lg:block absolute right-[-40px] top-[15%] pointer-events-none z-[1]"
          aria-hidden="true"
        >
          <DecorativeCircle design="dots-dense" color="teal" size={260} animation="drift" opacity={0.45} />
        </div>
        <div
          className="hidden lg:block absolute left-[-30px] bottom-[5%] pointer-events-none z-[1]"
          aria-hidden="true"
        >
          <DecorativeCircle design="diagonal-lines" color="orange" size={220} animation="wobble" opacity={0.5} />
        </div>

        <div className="relative">
          <Section background="bg">
            <div className="max-w-[var(--max-width-text)]">
              <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
                בואו נדבר
              </h1>
              <SectionDivider className="mt-lg mb-xl !justify-start" />
              <p className="text-lg leading-[1.7] text-text-secondary mb-xl">
                פנייה ראשונה לא מחייבת. לפעמים מספיקה שיחה קצרה כדי להבין אם זה
                מתאים ומה הצעד הבא. אתם מוזמנים לפנות בדרך הנוחה לכם.
              </p>
            </div>

            {/* Channel cards - equal-sized grid */}
            <div className="max-w-[var(--max-width)] bg-subtle-bg rounded-lg py-xl px-md">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#40798C]/15">
                {channels.map((channel) => {
                  const Icon = channel.icon
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      className="flex flex-col items-center justify-center text-center py-xl px-lg bg-subtle-bg group transition-shadow duration-300 hover:shadow-md"
                    >
                      <div className="mb-md transition-transform duration-300 group-hover:-translate-y-1">
                        <IconCircle>
                          <Icon size={24} weight="regular" className="text-primary" />
                        </IconCircle>
                      </div>
                      <span className="block font-body text-sm text-text-secondary mb-xs">
                        {channel.label}
                      </span>
                      <span
                        className="block font-body text-lg font-medium text-text group-hover:text-primary transition-colors duration-150"
                        dir="ltr"
                        style={{ unicodeBidi: "embed" }}
                      >
                        {channel.value}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  )
}

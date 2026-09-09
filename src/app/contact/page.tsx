import type { Metadata } from "next"
import { IconCircle } from "@/components/ui/IconCircle"
import { Section, SectionDivider } from "@/components/ui/Section"
import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr"
import { GradientBlob } from "@/components/ui/GradientBlob"
import { ContactForm } from "@/components/sections/ContactForm"
import { META, CONTACT } from "@/lib/content"

export const metadata: Metadata = {
  title: META.contact.title,
  description: META.contact.description,
}

const iconMap = { Phone, WhatsappLogo, EnvelopeSimple } as const

export default function ContactPage() {
  return (
    <>
      <div className="relative bg-bg">
        <GradientBlob
          color="teal"
          size={500}
          opacity={0.18}
          className="absolute hidden lg:block z-[1] right-[30px] top-[10%]"
        />
        <GradientBlob
          color="green"
          size={350}
          opacity={0.15}
          className="absolute hidden lg:block z-[1] left-[30px] bottom-[5%]"
        />

        <div className="relative z-[2]">
          <Section background="none">
            <div className="max-w-[var(--max-width-text)]">
              <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
                {CONTACT.pageTitle}
              </h1>
              <SectionDivider className="mt-lg mb-xl !justify-start" />
              <p className="text-lg leading-[1.7] text-text-secondary mb-xl">
                {CONTACT.pageIntro}
              </p>
            </div>

            {/* Channel cards - equal-sized grid */}
            <div className="max-w-[var(--max-width)] bg-subtle-bg rounded-lg py-xl px-md mb-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#40798C]/15">
                {CONTACT.channels.map((channel) => {
                  const Icon = iconMap[channel.iconName as keyof typeof iconMap]
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

            {/* Contact form */}
            <div className="max-w-[var(--max-width-text)]">
              <h2 className="font-heading text-[1.5rem] font-bold leading-[1.3] text-text mb-sm">
                השאירו פרטים
              </h2>
              <p className="font-body text-base text-text-secondary mb-lg">
                מלאו את הפרטים ואחזור אליכם בהקדם.
              </p>
              <ContactForm />
            </div>
          </Section>
        </div>
      </div>
    </>
  )
}

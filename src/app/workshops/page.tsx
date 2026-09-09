import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { IconCircle } from "@/components/ui/IconCircle"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import {
  Users,
  ListChecks,
  Trophy,
} from "@phosphor-icons/react/dist/ssr"
import { BotanicalSVG } from "@/components/ui/BotanicalSVG"
import { META, WORKSHOPS, LECTURES } from "@/lib/content"

export const metadata: Metadata = {
  title: META.workshops.title,
  description: META.workshops.description,
}

const infoCardIconMap = { Users, ListChecks, Trophy } as const

export default function WorkshopsPage() {
  return (
    <>
      {/* Section 1 Hero (bg) */}
      <Section background="bg">
        <div className="max-w-[var(--max-width-text)]">
          <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
            {WORKSHOPS.pageTitle}
          </h1>
          <SectionDivider className="mt-lg mb-xl !justify-start" />
          <p className="text-lg leading-[1.7] text-text-secondary">
            {WORKSHOPS.pageIntro}
          </p>
        </div>
      </Section>

      {/* Section 2 Three info cards (subtle-bg) */}
      <ScrollReveal>
      <div className="relative bg-subtle-bg">
        <BotanicalSVG variant={5} className="absolute hidden lg:block z-[1] left-[-10px] top-[-40px] w-[380px] h-[520px] opacity-70" />
        <div className="relative z-[2]">
          <Section background="none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {WORKSHOPS.infoCards.map((card) => {
                const Icon = infoCardIconMap[card.iconName as keyof typeof infoCardIconMap]
                return (
                  <div
                    key={card.title}
                    className="bg-white rounded-[12px] border border-[#CFE0C3] border-s-[3px] border-s-accent p-[24px] shadow-[0_2px_8px_rgba(64,121,140,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(64,121,140,0.15)]"
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
            <div className="mt-xl bg-white rounded-[12px] border border-[#CFE0C3] border-s-[3px] border-s-accent p-[24px] shadow-[0_2px_8px_rgba(64,121,140,0.08)] max-w-[var(--max-width-text)]">
              <h3 className="font-heading text-lg font-bold text-text mb-sm">
                {WORKSHOPS.importantNoteHeading}
              </h3>
              <p className="font-body text-base leading-[1.7] text-text-secondary">
                {WORKSHOPS.importantNoteText}
              </p>
            </div>

            <p className="text-sm leading-[1.7] text-text-secondary mt-xl">
              {WORKSHOPS.smallGroupNote}
            </p>
          </Section>
        </div>
      </div>
      </ScrollReveal>

      {/* Section 3 Lectures (bg) */}
      <ScrollReveal>
      <div className="relative bg-bg">
        <BotanicalSVG variant={2} className="absolute hidden lg:block z-[1] right-[-10px] top-[10%] w-[360px] h-[520px] opacity-65" />
        <div className="relative z-[2]">
          <Section background="none">
            <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-md section-heading-accent">
              {LECTURES.sectionHeading}
            </h2>
            <p className="text-lg leading-[1.7] text-text-secondary mb-xl max-w-[var(--max-width-text)]">
              {LECTURES.sectionIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
              {LECTURES.items.map((lecture) => (
                <div
                  key={lecture.title}
                  className="bg-white rounded-[12px] border border-[#CFE0C3] border-s-[3px] border-s-accent p-[20px] shadow-[0_2px_8px_rgba(64,121,140,0.08)]"
                >
                  <h3 className="font-heading text-[16px] font-medium leading-[1.3] text-text mb-xs">
                    {lecture.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.6] text-text-secondary">
                    {lecture.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
      </ScrollReveal>
    </>
  )
}

import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { IconCircle } from "@/components/ui/IconCircle"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import {
  Users,
  ListChecks,
  Trophy,
  Microphone,
} from "@phosphor-icons/react/dist/ssr"
import { DecorativeCircle } from "@/components/ui/DecorativeCircle"
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
      <div className="relative">
        <DecorativeCircle className="absolute hidden lg:block left-[-100px] top-[-40px]" design="swirl-arcs" color="orange" size={480} animation="spin-slow" opacity={0.7} />
        <div className="relative">
          <Section background="subtle-bg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {WORKSHOPS.infoCards.map((card) => {
                const Icon = infoCardIconMap[card.iconName as keyof typeof infoCardIconMap]
                return (
                  <div
                    key={card.title}
                    className="bg-white rounded-[12px] border border-[#CFE0C3] p-[24px] shadow-[0_2px_8px_rgba(64,121,140,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(64,121,140,0.15)]"
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
            <div className="mt-xl bg-white rounded-[12px] border border-[#CFE0C3] p-[24px] shadow-[0_2px_8px_rgba(64,121,140,0.08)] max-w-[var(--max-width-text)]">
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
      <div className="relative">
        <DecorativeCircle className="absolute hidden lg:block right-[-80px] bottom-[-60px]" design="spirograph" color="teal" size={340} animation="spin-slow" opacity={0.7} />
        <div className="relative">
          <Section background="bg">
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
              {LECTURES.contactPrompt} <a href={LECTURES.contactLinkHref} className="text-primary font-medium hover:text-primary-dark hover:underline transition-colors duration-150">{LECTURES.contactLinkLabel}</a>
            </p>
          </Section>
        </div>
      </div>
      </ScrollReveal>
    </>
  )
}

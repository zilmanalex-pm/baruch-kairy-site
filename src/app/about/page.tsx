import type { Metadata } from "next"
import Image from "next/image"
import { Section, SectionDivider } from "@/components/ui/Section"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { BotanicalSVG } from "@/components/ui/BotanicalSVG"
import { IconCircle } from "@/components/ui/IconCircle"
import {
  Brain,
  GraduationCap,
  ShieldChevron,
  Certificate,
  BookOpenText,
  Handshake,
  UsersThree,
  Heartbeat,
  Heart,
} from "@phosphor-icons/react/dist/ssr"
import { META, ABOUT } from "@/lib/content"

export const metadata: Metadata = {
  title: META.about.title,
  description: META.about.description,
}

const credentialIconMap = { GraduationCap, ShieldChevron, Certificate, BookOpenText } as const
const approachIcons = [Handshake, UsersThree, Heartbeat]

export default function AboutPage() {
  const credentialSections = [
    ABOUT.credentials.education,
    ABOUT.credentials.career,
    ABOUT.credentials.certifications,
    ABOUT.credentials.training,
  ]

  return (
    <>
      {/* Section 1 — Intro narrative (bg) */}
      <div className="relative bg-bg">
        <BotanicalSVG
          variant={1}
          className="absolute hidden lg:block z-[1] left-[-20px] top-[5%] w-[420px] h-[520px] opacity-75"
        />
        <div className="relative z-[2]">
          <Section background="none">
            <div className="max-w-[var(--max-width-text)] relative">
              <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
                {ABOUT.pageTitle}
              </h1>
              <SectionDivider className="mt-lg mb-xl !justify-start" />
              <div className="flex gap-md items-start text-lg leading-[1.7] text-text-secondary">
                <div className="flex-shrink-0 mt-1">
                  <IconCircle>
                    <Brain size={24} weight="duotone" className="text-primary" />
                  </IconCircle>
                </div>
                <p>{ABOUT.introNarrative}</p>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Section 2 — Credentials cards (subtle-bg) */}
      <ScrollReveal>
        <div className="relative bg-subtle-bg">
          <div className="relative z-[2]">
            <Section background="none">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-lg max-w-[var(--max-width)]">
                {credentialSections.map((section) => {
                  const Icon = credentialIconMap[section.iconName as keyof typeof credentialIconMap]
                  return (
                    <div key={section.heading}>
                      <div className="flex items-center gap-sm mb-md">
                        <IconCircle>
                          <Icon size={22} weight="duotone" className="text-primary" />
                        </IconCircle>
                        <h3 className="font-heading text-[18px] font-bold leading-[1.3] text-text">
                          {section.heading}
                        </h3>
                      </div>
                      <ul className="space-y-xs">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="font-body text-[15px] leading-[1.6] text-text-secondary flex items-start gap-sm"
                          >
                            <span className="text-accent mt-[3px] flex-shrink-0 text-[10px]">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>

              {/* Personal note */}
              <div className="mt-lg flex gap-md items-center text-lg leading-[1.7] text-text-secondary max-w-[var(--max-width)]">
                <div className="flex-shrink-0">
                  <IconCircle>
                    <Heart size={22} weight="duotone" className="text-primary" />
                  </IconCircle>
                </div>
                <p>{ABOUT.personalNote}</p>
              </div>
            </Section>
          </div>
        </div>
      </ScrollReveal>

      {/* Section 3 — Closing narrative + what I do today (bg) */}
      <ScrollReveal>
        <div className="relative bg-bg">
          <div className="relative z-[2]">
            <Section background="none">
              <div className="max-w-[var(--max-width-text)]">
                <div className="flex gap-md items-start text-lg leading-[1.7] text-text-secondary">
                  <div className="flex-shrink-0 mt-1">
                    <IconCircle>
                      <GraduationCap size={24} weight="duotone" className="text-primary" />
                    </IconCircle>
                  </div>
                  <p>{ABOUT.closingNarrative}</p>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </ScrollReveal>

      {/* Section 4 — Approach (subtle-bg) */}
      <ScrollReveal>
        <div className="relative bg-subtle-bg">
          <BotanicalSVG
            variant={4}
            className="absolute hidden lg:block z-[1] right-[-10px] top-[10%] w-[400px] h-[540px] opacity-70"
          />
          <div className="relative z-[2]">
            <Section background="none">
              <div className="flex flex-col lg:flex-row gap-xl lg:gap-2xl items-stretch">
                {/* Text column */}
                <div className="flex-1">
                  <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-lg section-heading-accent">
                    {ABOUT.approachHeading}
                  </h2>

                  <div className="space-y-md text-lg leading-[1.7] text-text-secondary">
                    {ABOUT.approachParagraphs.map((paragraph, index) => {
                      const Icon = approachIcons[index]
                      return (
                        <div key={index} className="flex gap-md items-start">
                          <div className="flex-shrink-0 mt-1">
                            <IconCircle>
                              <Icon size={24} weight="duotone" className="text-primary" />
                            </IconCircle>
                          </div>
                          <p>{paragraph}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Photo column */}
                <div className="w-full lg:w-[32%] flex-shrink-0">
                  <div className="relative w-full h-full min-h-[360px] rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(64,121,140,0.12)]">
                    <Image
                      src={ABOUT.photo.src}
                      alt={ABOUT.photo.alt}
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

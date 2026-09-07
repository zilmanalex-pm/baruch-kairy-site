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
import { META, ORGANIZATIONS, LECTURES } from "@/lib/content"

export const metadata: Metadata = {
  title: META.organizations.title,
  description: META.organizations.description,
}

const pillarIconMap = { Fingerprint, House, Lightning, Scales } as const
const serviceIconMap = { UsersFour, Wrench, MagnifyingGlass, ChartLine, Chalkboard, Handshake } as const

export default function OrganizationsPage() {
  return (
    <>
      {/* Section 1 Intro (bg) */}
      <Section background="bg">
        <div className="max-w-[var(--max-width-text)]">
          <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
            {ORGANIZATIONS.pageTitle}
          </h1>
          <SectionDivider className="mt-lg mb-xl !justify-start" />
          <p className="text-lg leading-[1.7] text-text-secondary mb-md">
            {ORGANIZATIONS.pageIntro}
          </p>
        </div>
      </Section>

      {/* Section 2 Four pillars as white icon cards (subtle-bg) */}
      <ScrollReveal>
      <div className="relative bg-subtle-bg">
        <DecorativeCircle className="absolute hidden lg:block z-[1] left-[-100px] top-[10%]" design="spirograph" color="teal" size={480} animation="spin-slow" opacity={0.7} />
        <div className="relative z-[2]">
          <Section background="none">
            <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-xl text-center section-heading-accent">
              {ORGANIZATIONS.pillarsHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg max-w-[var(--max-width-text)] mx-auto">
              {ORGANIZATIONS.pillars.map((pillar) => {
                const Icon = pillarIconMap[pillar.iconName as keyof typeof pillarIconMap]
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

      {/* Section 3 Service cards (bg) */}
      <ScrollReveal>
      <div className="relative bg-bg">
        <DecorativeCircle className="absolute hidden lg:block z-[1] right-[-80px] top-[25%]" design="diagonal-lines" color="orange" size={340} animation="spin-slow" opacity={0.7} />
        <div className="relative z-[2]">
          <Section background="none">
            <h2 className="font-heading text-[1.875rem] font-bold leading-[1.3] text-text mb-xl section-heading-accent">
              {ORGANIZATIONS.servicesHeading}
            </h2>
            <div className="flex flex-wrap justify-center gap-lg">
              {ORGANIZATIONS.services.map((service) => {
                const Icon = serviceIconMap[service.iconName as keyof typeof serviceIconMap]
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
      <div className="relative bg-subtle-bg">
        <DecorativeCircle className="absolute hidden lg:block z-[1] left-[-80px] top-[15%]" design="dots-dense" color="teal" size={380} animation="spin-slow" opacity={0.7} />
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

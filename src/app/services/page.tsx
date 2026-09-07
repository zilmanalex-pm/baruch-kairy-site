import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { Card, CardContent } from "@/components/ui/Card"
import { IconCircle } from "@/components/ui/IconCircle"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import {
  User,
  Heartbeat,
  Signpost,
} from "@phosphor-icons/react/dist/ssr"
import { DecorativeCircle } from "@/components/ui/DecorativeCircle"
import { META, SERVICES } from "@/lib/content"

export const metadata: Metadata = {
  title: META.services.title,
  description: META.services.description,
}

const iconMap = { User, Heartbeat, Signpost } as const

export default function ServicesPage() {
  return (
    <>
      {/* Section 1 Page header (bg) */}
      <div className="relative">
        <DecorativeCircle className="absolute hidden lg:block left-[-100px] top-[5%]" design="dots-spiral" color="orange" size={480} animation="spin-slow" opacity={0.7} />
        <div className="relative">
          <Section background="bg">
            <div className="max-w-[var(--max-width-text)]">
              <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
                {SERVICES.pageTitle}
              </h1>
              <SectionDivider className="mt-lg mb-xl !justify-start" />
              <p className="text-lg leading-[1.7] text-text-secondary">
                {SERVICES.pageIntro}
              </p>
            </div>
          </Section>
        </div>
      </div>

      {/* Section 2 Service cards (subtle-bg) */}
      <ScrollReveal>
      <div className="relative">
        <DecorativeCircle className="absolute hidden lg:block right-[-80px] bottom-[-40px]" design="swirl-arcs" color="teal" size={340} animation="spin-slow" opacity={0.7} />
        <div className="relative">
          <Section background="subtle-bg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
              {SERVICES.cards.map((service) => {
                const Icon = iconMap[service.iconName as keyof typeof iconMap]
                return (
                  <Card key={service.title} interactive>
                    <CardContent>
                      <div className="mb-md">
                        <IconCircle>
                          <Icon size={24} weight="regular" className="text-primary" />
                        </IconCircle>
                      </div>
                      <h2 className="font-heading text-xl font-medium leading-[1.3] text-text mb-md">
                        {service.title}
                      </h2>
                      <div className="space-y-sm">
                        <div>
                          <h3 className="font-body text-sm font-medium text-text mb-xs">
                            למי זה מתאים?
                          </h3>
                          <p className="font-body text-base leading-[1.7] text-text-secondary">
                            {service.audience}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-body text-sm font-medium text-text mb-xs">
                            מה קורה בתהליך?
                          </h3>
                          <p className="font-body text-base leading-[1.7] text-text-secondary">
                            {service.process}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </Section>
        </div>
      </div>
      </ScrollReveal>
    </>
  )
}

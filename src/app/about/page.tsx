import type { Metadata } from "next"
import Image from "next/image"
import { Section, SectionDivider } from "@/components/ui/Section"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { DecorativeCircle } from "@/components/ui/DecorativeCircle"
import { IconCircle } from "@/components/ui/IconCircle"
import {
  Brain,
  Buildings,
  GraduationCap,
  Handshake,
  UsersThree,
  Heartbeat,
} from "@phosphor-icons/react/dist/ssr"
import { META, ABOUT } from "@/lib/content"

export const metadata: Metadata = {
  title: META.about.title,
  description: META.about.description,
}

const narrativeIcons = [Brain, Buildings, GraduationCap]
const approachIcons = [Handshake, UsersThree, Heartbeat]

export default function AboutPage() {
  return (
    <>
      {/* Section 1 Page title + personal narrative (bg) */}
      <div className="relative bg-bg">
        {/* Legacy decorative orange half-circle accent — DO NOT MODIFY */}
        <div
          className="hidden lg:block absolute left-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.7] z-[1] animate-[spin-slow_45s_linear_infinite] rounded-full overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/images/circle-orange-dots.png"
            alt=""
            fill
            className="object-contain rounded-full"
            sizes="450px"
          />
        </div>

        <Section background="none">
          <div className="max-w-[var(--max-width-text)] relative">
            <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
              {ABOUT.pageTitle}
            </h1>

            <SectionDivider className="mt-lg mb-xl !justify-start" />

            <div className="space-y-md text-lg leading-[1.7] text-text-secondary">
              {ABOUT.narrativeParagraphs.map((paragraph, index) => {
                const Icon = narrativeIcons[index]
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
        </Section>
      </div>

      {/* Section 2 Approach (subtle-bg) */}
      <ScrollReveal>
      <div className="relative bg-subtle-bg">
        <DecorativeCircle
          design="swirl-arcs"
          color="teal"
          size={350}
          animation="spin-slow"
          opacity={0.7}
          className="absolute hidden lg:block z-[1] right-[-80px] top-[15%]"
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

              {/* Photo column — stretches to match text height */}
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

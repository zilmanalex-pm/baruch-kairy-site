import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { RoutingCards } from "@/components/sections/RoutingCards"
import { TrustBar } from "@/components/sections/TrustBar"
import { AboutPreview } from "@/components/sections/AboutPreview"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { DecorativeCircle } from "@/components/ui/DecorativeCircle"
import { META, HOME } from "@/lib/content"

export const metadata: Metadata = {
  title: META.home.title,
  description: META.home.description,
}

export default function HomePage() {
  return (
    <div className="relative">

      <div className="relative">
      {/* Section 1 Hero (bg) */}
      <div className="relative bg-bg">
        <DecorativeCircle
          design="split-rings"
          color="orange"
          size={480}
          animation="spin-slow"
          opacity={0.7}
          className="absolute hidden lg:block z-[1] left-[30px] bottom-[-40px]"
        />
        <div className="relative z-[2]">
          <HeroSection
            transparentBg
            name={HOME.hero.name}
            title={HOME.hero.title}
            headline={HOME.hero.headline}
            subheadline={HOME.hero.subheadline}
            imageSrc={HOME.hero.imageSrc}
            imageAlt={HOME.hero.imageAlt}
          />
        </div>
      </div>

      {/* Section 2 Routing Cards (subtle-bg) */}
      <ScrollReveal>
      <div className="relative bg-subtle-bg">
        <DecorativeCircle
          design="sunburst"
          color="teal"
          size={340}
          animation="spin-slow"
          opacity={0.7}
          className="absolute hidden lg:block z-[1] right-[30px] top-[-30px]"
        />
        <div className="relative z-[2]">
          <RoutingCards
            transparentBg
            sectionHeading={HOME.routingCards.sectionHeading}
            cards={[...HOME.routingCards.cards]}
          />
        </div>
      </div>
      </ScrollReveal>

      {/* Section 3 Trust Bar (bg) */}
      <ScrollReveal>
      <div className="relative">

        <div className="relative z-[2]">
          <TrustBar
            badges={[...HOME.trustBar]}
          />
        </div>
      </div>
      </ScrollReveal>

      {/* Section 4 About Preview (subtle-bg) */}
      <ScrollReveal>
      <AboutPreview
        text={HOME.aboutPreview.text}
        linkLabel={HOME.aboutPreview.linkLabel}
        linkHref={HOME.aboutPreview.linkHref}
      />
      </ScrollReveal>
      </div>
    </div>
  )
}

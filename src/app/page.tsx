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
      <div className="relative">
        <DecorativeCircle
          design="split-rings"
          color="orange"
          size={420}
          animation="float"
          opacity={0.7}
          className="absolute hidden lg:block z-[1] left-[-120px] bottom-[-80px]"
        />
        <div className="relative">
          <HeroSection
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
      <div className="relative">
        <DecorativeCircle
          design="sunburst"
          color="teal"
          size={300}
          animation="drift"
          opacity={0.7}
          className="absolute hidden lg:block z-[1] right-[-60px] top-[-40px]"
        />
        <div className="relative">
          <RoutingCards
            sectionHeading={HOME.routingCards.sectionHeading}
            cards={[...HOME.routingCards.cards]}
          />
        </div>
      </div>
      </ScrollReveal>

      {/* Section 3 Trust Bar (bg) */}
      <ScrollReveal>
      <div className="relative">
        <DecorativeCircle
          design="swirl-arcs"
          color="orange"
          size={450}
          animation="pulse-gentle"
          opacity={0.7}
          className="absolute hidden lg:block z-[1] left-[-100px] top-1/2 -translate-y-1/2"
        />
        <div className="relative">
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

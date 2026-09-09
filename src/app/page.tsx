import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { RoutingCards } from "@/components/sections/RoutingCards"
import { TrustBar } from "@/components/sections/TrustBar"
import { AboutPreview } from "@/components/sections/AboutPreview"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { BotanicalDecoration } from "@/components/ui/BotanicalDecoration"
import { BotanicalSVG } from "@/components/ui/BotanicalSVG"
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
        <div className="relative z-[2]">
          <HeroSection
            name={HOME.hero.name}
            title={HOME.hero.title}
            headline={HOME.hero.headline}
            headlineSub={HOME.hero.headlineSub}
            subheadline={HOME.hero.subheadline}
            imageSrc={HOME.hero.imageSrc}
            imageAlt={HOME.hero.imageAlt}
          />
        </div>
      </div>

      {/* Section 2 Routing Cards (subtle-bg) */}
      <ScrollReveal>
      <div className="relative bg-subtle-bg">
        <BotanicalDecoration
          className="absolute hidden lg:block z-[1] right-[-40px] top-[-80px] w-[450px] h-[450px] opacity-80"
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
      <div className="relative">
        <BotanicalSVG
          variant={6}
          className="absolute hidden lg:block z-[1] left-[-30px] top-[-60px] w-[380px] h-[380px] opacity-70"
        />
        <div className="relative z-[2]">
      <AboutPreview
        text={HOME.aboutPreview.text}
        linkLabel={HOME.aboutPreview.linkLabel}
        linkHref={HOME.aboutPreview.linkHref}
      />
        </div>
      </div>
      </ScrollReveal>
      </div>
    </div>
  )
}

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/Card"
import { IconCircle } from "@/components/ui/IconCircle"
import { User, Buildings } from "@phosphor-icons/react/dist/ssr"

interface RoutingCardData {
  icon: "individual" | "organization"
  heading: string
  description: string
  linkLabel: string
  linkHref: string
}

interface RoutingCardsProps {
  sectionHeading: string
  cards: [RoutingCardData, RoutingCardData]
  transparentBg?: boolean
}

const iconMap = {
  individual: User,
  organization: Buildings,
}

export function RoutingCards({ sectionHeading, cards, transparentBg }: RoutingCardsProps) {
  return (
    <section className={`${transparentBg ? "" : "bg-subtle-bg"} py-2xl sm:py-3xl lg:py-4xl`}>
      <div className="mx-auto max-w-[var(--max-width)] px-lg sm:px-[40px] lg:px-0">
        <h2 className="font-heading text-2xl font-medium text-text text-center mb-xl lg:mb-2xl section-heading-accent">
          {sectionHeading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg lg:gap-xl">
          {cards.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <Card key={card.linkHref} interactive className="flex flex-col">
                <CardContent>
                  <IconCircle>
                    <Icon size={28} weight="regular" className="text-primary" />
                  </IconCircle>
                  <h3 className="font-heading text-xl font-medium text-text">
                    {card.heading}
                  </h3>
                  <p className="text-text-secondary leading-[1.7]">
                    {card.description}
                  </p>
                  <Link
                    href={card.linkHref}
                    className="inline-flex items-center gap-sm text-primary font-medium hover:text-primary-dark hover:underline transition-colors duration-150 mt-sm"
                  >
                    {card.linkLabel}
                    <span aria-hidden="true" className="text-lg">←</span>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

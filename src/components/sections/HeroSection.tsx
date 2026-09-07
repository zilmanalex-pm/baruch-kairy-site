import Image from "next/image"

interface HeroSectionProps {
  name?: string
  title?: string
  headline: string
  subheadline: string
  imageSrc: string
  imageAlt: string
  transparentBg?: boolean
}

export function HeroSection({
  name,
  title,
  headline,
  subheadline,
  imageSrc,
  imageAlt,
  transparentBg,
}: HeroSectionProps) {
  return (
    <section className={`relative ${transparentBg ? "" : "bg-bg"} pt-3xl pb-2xl sm:pt-4xl sm:pb-3xl lg:pt-4xl lg:pb-3xl overflow-hidden`}>
      <div className="mx-auto max-w-[var(--max-width)] px-lg sm:px-[40px] lg:px-0 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-xl lg:gap-2xl">
          {/* Text column right side in RTL */}
          <div className="flex-1 text-center lg:text-start">
            {name && (
              <div className="flex flex-wrap items-baseline gap-sm justify-center lg:justify-start">
                <p className="font-heading text-[36px] font-bold leading-[1.2] text-text">
                  {name}
                </p>
                {title && (
                  <p className="font-body text-[16px] leading-[1.5] text-text-secondary">
                    {title}
                  </p>
                )}
              </div>
            )}
            <h1 className={`font-heading text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] font-bold leading-[1.2] lg:leading-[1.1] text-text ${name ? "mt-lg" : ""}`}>
              {headline}
            </h1>
            <p className="mt-md text-lg leading-[1.7] text-text-secondary max-w-[var(--max-width-text)]">
              {subheadline}
            </p>
          </div>

          {/* Photo column left side in RTL */}
          <div className="w-full lg:w-[40%] flex-shrink-0">
            <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto lg:mx-0 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

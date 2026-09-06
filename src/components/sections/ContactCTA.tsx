import Link from "next/link"

interface ContactCTAProps {
  text: string
  buttonLabel: string
  buttonHref: string
}

export function ContactCTA({ text, buttonLabel, buttonHref }: ContactCTAProps) {
  return (
    <section className="bg-primary py-2xl sm:py-3xl lg:py-4xl">
      <div className="mx-auto max-w-[var(--max-width)] px-lg sm:px-[40px] lg:px-0 text-center">
        <p className="font-body text-xl leading-[1.5] text-white max-w-[var(--max-width-text)] mx-auto">
          {text}
        </p>
        <div className="mt-xl">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center rounded-md bg-white text-primary font-body text-lg font-medium px-[40px] py-[16px] hover:bg-bg transition-colors duration-150"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}

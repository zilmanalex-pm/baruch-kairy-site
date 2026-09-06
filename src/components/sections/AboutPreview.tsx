import Link from "next/link"

interface AboutPreviewProps {
  text: string
  linkLabel: string
  linkHref: string
}

export function AboutPreview({ text, linkLabel, linkHref }: AboutPreviewProps) {
  return (
    <section className="bg-subtle-bg py-2xl sm:py-3xl lg:py-4xl">
      <div className="mx-auto max-w-[var(--max-width)] px-lg sm:px-[40px] lg:px-0">
        {/* Pull-quote block */}
        <div className="max-w-[var(--max-width-text)] mx-auto">
          <blockquote
            className="rounded-tl-none rounded-bl-none rounded-tr-[12px] rounded-br-[12px] border-r-[4px] border-r-primary py-[24px] px-[32px]"
            style={{ backgroundColor: "#F2F7F0" }}
          >
            <p className="font-body text-[18px] leading-[1.8] text-[#2D3436]">
              {text}
            </p>
          </blockquote>
          <div className="mt-lg">
            <Link
              href={linkHref}
              className="inline-flex items-center gap-sm text-primary font-medium hover:text-primary-dark hover:underline transition-colors duration-150"
            >
              {linkLabel}
              <span aria-hidden="true" className="text-lg">←</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { SectionDivider } from "@/components/ui/Section"

interface AboutPreviewProps {
  text: string
  linkLabel: string
  linkHref: string
}

export function AboutPreview({ text, linkLabel, linkHref }: AboutPreviewProps) {
  return (
    <section className="bg-subtle-bg py-2xl sm:py-3xl lg:py-4xl">
      <div className="mx-auto max-w-[var(--max-width)] px-lg sm:px-[40px] lg:px-0">
        <SectionDivider className="mb-xl" />
        <div className="max-w-[var(--max-width-text)] mx-auto lg:mx-0">
          <p className="font-body text-lg leading-[1.7] text-text-secondary">
            {text}
          </p>
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

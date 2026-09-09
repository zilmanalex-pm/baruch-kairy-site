import type { Metadata } from "next"
import { Section, SectionDivider } from "@/components/ui/Section"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { GradientBlob } from "@/components/ui/GradientBlob"
import { META, FAQ } from "@/lib/content"

export const metadata: Metadata = {
  title: META.faq.title,
  description: META.faq.description,
}

export default function FAQPage() {
  return (
    <>
      {/* Section 1 FAQ accordion (bg) */}
      <div className="relative bg-bg">
        <GradientBlob
          color="teal"
          size={500}
          opacity={0.2}
          className="absolute hidden lg:block z-[1] left-[30px] top-[-20px]"
        />
        <GradientBlob
          color="green"
          size={380}
          opacity={0.15}
          className="absolute hidden lg:block z-[1] right-[30px] bottom-[-20px]"
        />
        <div className="relative z-[2]">
          <Section background="none">
            <div className="max-w-[var(--max-width-text)]">
              <h1 className="font-heading text-[2.25rem] font-bold leading-[1.2] text-text">
                {FAQ.pageTitle}
              </h1>
              <SectionDivider className="mt-lg mb-xl !justify-start" />

              <div className="space-y-sm">
                {FAQ.items.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-[#CFE0C3] rounded-lg bg-white shadow-[0_2px_8px_rgba(64,121,140,0.08)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(64,121,140,0.15)]"
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-lg py-md font-body text-lg font-medium text-text hover:text-primary transition-colors duration-150 list-none [&::-webkit-details-marker]:hidden">
                      <span>{faq.question}</span>
                      <span
                        className="flex-shrink-0 ms-md text-text-secondary group-open:rotate-180 transition-transform duration-200"
                        aria-hidden="true"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-lg pb-lg">
                      <p className="font-body text-base leading-[1.7] text-text-secondary">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  )
}

import { type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Background variant: alternating bg/subtle-bg per design spec */
  background?: "bg" | "subtle-bg" | "primary" | "text" | "none"
  /** Narrow the content to text max-width (680px) */
  narrow?: boolean
  children?: ReactNode
}

/**
 * SectionWrapper consistent section layout with responsive vertical padding.
 *
 * Padding per design-rules.md section 5:
 * - Mobile (<640px): 48px (space-2xl)
 * - Tablet (640–1024px): 64px (space-3xl)
 * - Desktop (>1024px): 96px (space-4xl)
 */
function Section({ className, background = "bg", narrow = false, children, ...props }: SectionProps) {
  const bgClasses: Record<string, string> = {
    bg: "bg-bg",
    "subtle-bg": "bg-subtle-bg",
    primary: "bg-primary text-white",
    text: "bg-dark text-white/90",
    none: "",
  }

  return (
    <section
      className={cn(
        "py-2xl sm:py-3xl lg:py-4xl",
        bgClasses[background],
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto px-lg sm:px-[40px] lg:px-0",
          narrow ? "max-w-[var(--max-width-text)]" : "max-w-[var(--max-width)]"
        )}
      >
        {children}
      </div>
    </section>
  )
}

/**
 * Decorative divider 48px wide, 2px tall, accent color, centered.
 * Per design-rules.md section 6.5: used for stronger visual breaks.
 */
function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex justify-center py-md", className)}
      aria-hidden="true"
    >
      <div className="w-[48px] h-[2px] bg-primary" />
    </div>
  )
}

export { Section, SectionDivider }

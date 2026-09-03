"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  /** Delay before animation starts (ms). Use for staggering siblings. */
  delay?: number
}

/**
 * ScrollReveal — fade-in + translate-up 12px on viewport entry.
 *
 * Per design-rules.md section 11:
 * - Duration: 400ms
 * - Easing: ease-out
 * - Respects prefers-reduced-motion (no animation)
 *
 * Uses IntersectionObserver with threshold 0.15.
 * Once revealed, stays visible (no re-hide on scroll out).
 */
export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion — show immediately
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (motionQuery.matches) {
      el.style.opacity = "1"
      el.style.transform = "none"
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                el.classList.add("scroll-reveal--visible")
              }, delay)
            } else {
              el.classList.add("scroll-reveal--visible")
            }
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`scroll-reveal ${className ?? ""}`}>
      {children}
    </div>
  )
}

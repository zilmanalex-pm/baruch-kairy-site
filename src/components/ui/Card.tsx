import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Enable hover shadow lift for interactive/clickable cards */
  interactive?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg bg-white border border-[#CFE0C3] p-lg shadow-[0_2px_8px_rgba(64,121,140,0.08)]",
          interactive && "transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(64,121,140,0.15)]",
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = "Card"

/** Card sub-component for structured content with consistent spacing */
const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-md", className)}
        {...props}
      />
    )
  }
)

CardContent.displayName = "CardContent"

export { Card, CardContent }

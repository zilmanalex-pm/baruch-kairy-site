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
          "rounded-lg bg-white border border-subtle p-lg shadow-sm",
          interactive && "transition-shadow duration-200 ease-in-out hover:shadow-md",
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

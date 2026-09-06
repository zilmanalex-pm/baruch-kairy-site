import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  /* Base styles shared across all variants */
  [
    "inline-flex items-center justify-center",
    "font-body font-medium",
    "rounded-md",
    "cursor-pointer",
    "transition-all duration-150 ease-in-out",
    "disabled:cursor-not-allowed",
    "focus-visible:outline-3 focus-visible:outline-primary/40 focus-visible:outline-offset-2",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-primary text-white",
          "hover:bg-primary-dark",
          "active:bg-primary-active",
          "disabled:bg-subtle disabled:text-text-secondary",
        ].join(" "),
        secondary: [
          "bg-transparent text-primary",
          "border-[1.5px] border-primary",
          "hover:bg-primary/8 hover:border-primary-dark",
          "active:bg-primary/12",
          "disabled:border-subtle disabled:text-text-secondary",
        ].join(" "),
        ghost: [
          "bg-transparent text-primary",
          "hover:text-primary-dark hover:underline",
          "active:text-primary-active",
          "disabled:text-text-secondary disabled:no-underline",
        ].join(" "),
      },
      size: {
        sm: "text-sm px-[20px] py-[10px]",
        default: "text-base px-[32px] py-[14px]",
        lg: "text-lg px-[40px] py-[16px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }

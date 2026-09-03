import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label text displayed above the input */
  label?: string
  /** Error message displayed below the input */
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || (label ? label.replace(/\s+/g, "-") : undefined)

    return (
      <div className="flex flex-col gap-xs">
        {label && (
          <label
            htmlFor={inputId}
            className="font-body text-sm font-medium text-text"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "h-[48px] w-full rounded-md bg-white",
            "border-[1.5px] px-md font-body text-base text-text",
            "placeholder:text-text-secondary",
            "transition-colors duration-150",
            "focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(74,109,124,0.15)]",
            "disabled:cursor-not-allowed disabled:bg-subtle-bg disabled:text-text-secondary",
            error
              ? "border-error"
              : "border-subtle",
            className
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={error && inputId ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={inputId ? `${inputId}-error` : undefined}
            className="font-body text-sm text-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }

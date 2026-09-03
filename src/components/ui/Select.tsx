import { forwardRef, type SelectHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Label text displayed above the select */
  label?: string
  /** Error message displayed below the select */
  error?: string
  /** Placeholder option text */
  placeholder?: string
  /** Options as {value, label} pairs */
  options: { value: string; label: string }[]
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, placeholder, options, id, ...props }, ref) => {
    const selectId = id || (label ? label.replace(/\s+/g, "-") : undefined)

    return (
      <div className="flex flex-col gap-xs">
        {label && (
          <label
            htmlFor={selectId}
            className="font-body text-sm font-medium text-text"
          >
            {label}
          </label>
        )}
        <select
          id={selectId}
          ref={ref}
          className={cn(
            "h-[48px] w-full rounded-md bg-white appearance-none",
            "border-[1.5px] px-md font-body text-base text-text",
            "transition-colors duration-150",
            "focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(74,109,124,0.15)]",
            "disabled:cursor-not-allowed disabled:bg-subtle-bg disabled:text-text-secondary",
            error ? "border-error" : "border-subtle",
            className
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={error && selectId ? `${selectId}-error` : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p
            id={selectId ? `${selectId}-error` : undefined}
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

Select.displayName = "Select"

export { Select }

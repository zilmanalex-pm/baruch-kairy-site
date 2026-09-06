import { forwardRef, type TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text displayed above the textarea */
  label?: string
  /** Error message displayed below the textarea */
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || (label ? label.replace(/\s+/g, "-") : undefined)

    return (
      <div className="flex flex-col gap-xs">
        {label && (
          <label
            htmlFor={textareaId}
            className="font-body text-sm font-medium text-text"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "min-h-[120px] w-full rounded-md bg-white resize-y",
            "border-[1.5px] px-md py-[12px] font-body text-base text-text",
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
          aria-describedby={error && textareaId ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={textareaId ? `${textareaId}-error` : undefined}
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

Textarea.displayName = "Textarea"

export { Textarea }

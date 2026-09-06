import { type ReactNode } from "react"

interface IconCircleProps {
  children: ReactNode
  className?: string
}

/**
 * Circular container for icons with teal shadow.
 * Matches the reference design: light bg circle with colored drop shadow.
 */
export function IconCircle({ children, className = "" }: IconCircleProps) {
  return (
    <div
      className={`inline-flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#F2F7F0] ${className}`}
      style={{ boxShadow: '0 4px 12px rgba(158, 193, 163, 0.6)' }}
    >
      {children}
    </div>
  )
}

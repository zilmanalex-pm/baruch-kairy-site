"use client"

interface DecorativeCirclesProps {
  variant: "orange" | "teal"
  size?: number
  className?: string
}

export function DecorativeCircles({ variant, size = 300, className = "" }: DecorativeCirclesProps) {
  const color = variant === "orange" ? "#FF8200" : "#70A9A1"
  const rings = 8
  const maxRadius = size / 2 - 2
  const step = maxRadius / rings

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
    >
      {Array.from({ length: rings }, (_, i) => (
        <circle
          key={i}
          cx={size / 2}
          cy={size / 2}
          r={maxRadius - i * step}
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          opacity={0.5 - i * 0.04}
        />
      ))}
    </svg>
  )
}

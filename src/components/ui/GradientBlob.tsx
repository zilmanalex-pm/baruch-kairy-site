"use client"

export type BlobColor = "teal" | "green" | "orange"

const colorMap: Record<BlobColor, string> = {
  teal: "rgba(64, 121, 140, 0.7)",
  green: "rgba(158, 193, 163, 0.7)",
  orange: "rgba(255, 130, 0, 0.5)",
}

interface GradientBlobProps {
  color?: BlobColor
  size?: number
  className?: string
  opacity?: number
}

export function GradientBlob({
  color = "teal",
  size = 400,
  className = "",
  opacity = 0.38,
}: GradientBlobProps) {
  const fill = colorMap[color]

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        background: `radial-gradient(circle at center, ${fill} 0%, transparent 70%)`,
        filter: "blur(40px)",
      }}
      aria-hidden="true"
    />
  )
}

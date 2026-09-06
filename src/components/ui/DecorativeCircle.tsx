"use client"

import Image from "next/image"

export type CircleDesign =
  | "split-rings"
  | "swirl-arcs"
  | "dots-dense"
  | "dots-spiral"
  | "diagonal-lines"
  | "sunburst"
  | "spirograph"

export type CircleAnimation =
  | "float"
  | "spin-slow"
  | "drift"
  | "drift-rtl"
  | "drift-diagonal"
  | "pulse-gentle"
  | "wobble"
  | "float-rotate"

const animationStyles: Record<CircleAnimation, string> = {
  "float": "float 8s ease-in-out infinite",
  "spin-slow": "spin-slow 45s linear infinite",
  "drift": "drift 10s ease-in-out infinite",
  "drift-rtl": "drift-rtl 12s ease-in-out infinite",
  "drift-diagonal": "drift-diagonal 9s ease-in-out infinite",
  "pulse-gentle": "pulse-gentle 10s ease-in-out infinite",
  "wobble": "wobble 12s ease-in-out infinite",
  "float-rotate": "float-rotate 10s ease-in-out infinite",
}

interface DecorativeCircleProps {
  design: CircleDesign
  color: "orange" | "teal"
  size: number
  animation?: CircleAnimation
  className?: string
  opacity?: number
}

export function DecorativeCircle({
  design,
  color,
  size,
  animation = "float",
  className = "",
  opacity = 0.6,
}: DecorativeCircleProps) {
  const src = `/images/circles/circle-${design}-${color}.png`

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        animation: animationStyles[animation],
      }}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        className="w-full h-full object-contain"
        aria-hidden="true"
      />
    </div>
  )
}

"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef } from "react"

export interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
}

export const Marquee = ({ className, reverse, pauseOnHover, children }: MarqueeProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current) return

    // Add animation styles directly to ensure it works
    const scrollerContent = scrollerRef.current
    const scrollerClone = scrollerContent.innerHTML

    // Clone the content to ensure continuous scrolling
    scrollerContent.innerHTML += scrollerClone
  }, [])

  return (
    <div className={cn("scroller relative z-20 max-w-full overflow-hidden", className)}>
      <div
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4",
          reverse ? "animate-scroll-reverse" : "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{
          animationDuration: "var(--duration, 40s)",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {children}
      </div>
    </div>
  )
}


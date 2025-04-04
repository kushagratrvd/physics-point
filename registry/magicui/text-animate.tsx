"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AnimationType = "blurIn" | "typewriter" | "fadeIn"

interface TextAnimateProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  animation?: AnimationType
  children: React.ReactNode
  delay?: number
  className?: string
}

export function TextAnimate({
  as: Component = "div",
  animation = "blurIn",
  children,
  delay = 0,
  className,
  ...props
}: TextAnimateProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [delay])

  const animationClass = {
    blurIn: "animate-blur-in",
    typewriter: "animate-typewriter",
    fadeIn: "animate-fade-in",
  }[animation]

  return (
    <Component
      ref={ref}
      className={cn(isVisible ? animationClass : "opacity-0 blur-sm", "transition-all duration-1000", className)}
      {...props}
    >
      {children}
    </Component>
  )
}


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const routes = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/videos", label: "YouTube Videos" },
    { href: "/toppers", label: "Past Toppers" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-background border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex flex-col items-start">
          <span className="text-2xl font-bold text-purple-900 dark:text-purple-400 transition-transform hover:scale-105">
            Physics Point
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400">by AV BHAIYA</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium transition-all duration-300 hover:text-purple-900 dark:hover:text-purple-400 relative group"
            >
              {route.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-900 dark:bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full hover:animate-spin"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route, index) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-lg font-medium transition-all duration-300 hover:text-purple-900 dark:hover:text-purple-400 hover:translate-x-2"
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


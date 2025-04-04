import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
// Add the import for ContactButton
import ContactButton from "@/components/contact-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Physics Point - Excellence in Physics Education",
  description:
    "Physics Point is a premier coaching institute for physics education, helping students excel in competitive exams.",
    generator: 'v0.dev'
}

// Update the RootLayout function to include ContactButton
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ContactButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
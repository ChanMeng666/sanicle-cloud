import type React from "react"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/layout/MainNav"
import { SiteFooter } from "@/components/layout/SiteFooter"

export const metadata = {
  title: "Sanicle.cloud - Revolutionizing Women's Workplace Health",
  description:
    "A B2B-B2G platform dedicated to transforming women's workplace wellbeing through menstrual health benefits.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
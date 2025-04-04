import type React from "react"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/layout/MainNav"
import { SiteFooter } from "@/components/layout/SiteFooter"

export const metadata = {
  title: "Sanicle.cloud - Revolutionizing Women's Workplace Health",
  description:
    "A B2B-B2G platform dedicated to transforming women's workplace wellbeing through menstrual health benefits.",
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1 w-full">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



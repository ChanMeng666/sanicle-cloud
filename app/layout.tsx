import type React from "react"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/layout/MainNav"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { ChatWidgetWrapper } from "@/components/chat/ChatWidgetWrapper"
import { CookieConsent } from "@/components/cookie/CookieConsent"
import { CookieConsentProvider } from "@/components/cookie/CookieConsentContext"

export const metadata = {
  title: "Sanicle",
  description:
    "A B2B-B2G platform dedicated to transforming women's workplace wellbeing through menstrual health benefits.",
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: "/logo/leave-green.svg",
    shortcut: "/logo/leave-green.svg",
    apple: "/logo/leave-green.svg",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo/leave-green.svg" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.onerror = function(message, source, lineno, colno, error) {
              console.log('Caught error:', message);
              // Attempt recovery for specific errors
              if (message && message.includes('is not a function')) {
                console.log('Recovering from function error');
                return true;
              }
              return false;
            };
          `
        }} />
      </head>
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light">
          <CookieConsentProvider>
            <div className="relative flex min-h-screen flex-col">
              <MainNav />
              <div className="z-[1] relative pt-16 sm:pt-20">
                <main className="flex-1 w-full">{children}</main>
              </div>
              <SiteFooter />
              <ChatWidgetWrapper />
              <CookieConsent />
            </div>
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



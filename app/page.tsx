"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { ValueProposition } from "@/components/home/ValueProposition"
import { HowItWorks } from "@/components/home/HowItWorks"
import { TeamSection } from "@/components/team-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { StatisticsSection } from "@/components/statistics-section"
import { useEffect, useState } from "react"
import { useSafeMobile } from "@/hooks/use-safe-mobile"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const { isMobile, deviceInfo } = useSafeMobile()
  const [hasError, setHasError] = useState(false)
  const [isOlderBrowser, setIsOlderBrowser] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  // Check for older browsers that need special handling
  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      // Check for older mobile browsers
      const ua = navigator.userAgent.toLowerCase()
      
      // Simple browser version detection for common browsers
      const chromeMatch = ua.match(/chrome\/(\d+)/)
      const chromeVersion = chromeMatch ? parseInt(chromeMatch[1], 10) : 999
      
      const safariMatch = ua.match(/safari\/(\d+)/)
      const safariVersion = safariMatch ? parseInt(safariMatch[1], 10) : 999
      
      const isAndroid = /android/.test(ua)
      const isOldAndroid = isAndroid && /android\s([0-9]|10)/.test(ua) // Android 10 or lower
      
      // Conditions that indicate an older browser
      const isOlderBrowser = (
        (chromeVersion < 100) || // Chrome older than version 100
        (safariVersion < 600) || // Older Safari versions
        isOldAndroid ||          // Older Android
        (/opera mini|ucbrowser|firefox\/[1-9]\d/).test(ua) // Other potentially problematic browsers
      )
      
      console.log("Browser detection:", { 
        chromeVersion, 
        safariVersion, 
        isAndroid, 
        isOldAndroid, 
        isConsideredOlder: isOlderBrowser 
      })
      
      // If it's an older browser and on mobile, redirect to the simplified experience
      if (isOlderBrowser && isMobile) {
        setIsOlderBrowser(true)
        console.log("Older mobile browser detected, redirecting to simplified experience")
        
        // Add a small delay to ensure logging happens
        setTimeout(() => {
          router.push("/mobile-error?reason=older_browser")
        }, 300)
        return
      }
      
      setIsLoading(false)
    } catch (error) {
      console.error("Error during browser compatibility check:", error)
      setIsLoading(false)
    }
  }, [isMobile, router])
  
  // Add an error tracking function specific to mobile
  useEffect(() => {
    if (!isMobile) return
    
    // Function to handle serious errors on mobile
    const handleMobileError = (error: any) => {
      console.error("Mobile specific error:", error)
      setHasError(true)
      
      // Only redirect if it's a serious error
      if (error && (
        error.toString().includes("is not a function") || 
        error.toString().includes("undefined is not an object") ||
        error.toString().includes("null is not an object") ||
        error.toString().includes("cannot read property") ||
        error.toString().includes("is not defined")
      )) {
        // Redirect to the mobile error page
        try {
          // Add a small delay to allow logs to be captured
          setTimeout(() => {
            router.push("/mobile-error?reason=runtime_error")
          }, 300)
        } catch (e) {
          console.error("Failed to redirect:", e)
        }
      }
    }
    
    // Add event listeners
    window.addEventListener("error", handleMobileError)
    window.addEventListener("unhandledrejection", (event) => handleMobileError(event.reason))
    
    return () => {
      window.removeEventListener("error", handleMobileError)
      window.removeEventListener("unhandledrejection", (event) => handleMobileError(event.reason))
    }
  }, [isMobile, router])
  
  // Show a simple loading state during detection
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    )
  }
  
  // If we had an error on mobile, don't try to render complex components
  if ((isMobile && hasError) || isOlderBrowser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Redirecting to mobile-friendly view...</p>
      </div>
    )
  }

  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <div className="w-full">
        <HeroSection />
      </div>
      <ValueProposition />
      <HowItWorks />
      <StatisticsSection />
      <TestimonialSection />
      <TeamSection />
    </main>
  )
}


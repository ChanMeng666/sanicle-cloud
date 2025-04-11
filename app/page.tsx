"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { ValueProposition } from "@/components/home/ValueProposition"
import { HowItWorks } from "@/components/home/HowItWorks"
import { TeamSection } from "@/components/team-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { StatisticsSection } from "@/components/statistics-section"
import { useEffect, useState } from "react"
import { useSafeMobile } from "@/hooks/use-safe-mobile"
import { useRouter, useSearchParams } from "next/navigation"

// Check for force parameter
function ForceView() {
  const searchParams = useSearchParams()
  
  useEffect(() => {
    try {
      const force = searchParams.get('force')
      if (force === 'true') {
        // Set the session storage to force continue
        sessionStorage.setItem('sanicle-mobile-force-continue', 'true')
        
        // Remove the force parameter from URL to keep it clean
        const newUrl = window.location.pathname
        window.history.replaceState({}, document.title, newUrl)
      }
    } catch (e) {
      console.error("Error handling force parameter:", e)
    }
  }, [searchParams])
  
  return null
}

export default function Home() {
  const router = useRouter()
  const { isMobile, deviceInfo } = useSafeMobile()
  const [hasError, setHasError] = useState(false)
  
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
        error.toString().includes("null is not an object")
      )) {
        // Redirect to the mobile error page
        try {
          // Add a small delay to allow logs to be captured
          setTimeout(() => {
            router.push("/mobile-error")
          }, 500)
        } catch (e) {
          console.error("Failed to redirect:", e)
        }
      }
    }
    
    // Add event listeners
    window.addEventListener("error", handleMobileError)
    window.addEventListener("unhandledrejection", (event) => handleMobileError(event.reason))
    
    // For serious React errors, use immediate redirection
    try {
      // Test for common mobile browser quirks
      if (
        typeof window !== 'undefined' && 
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) &&
        window.innerWidth < 768
      ) {
        console.log("Mobile browser detected, checking for compatibility...")
        
        // Add any mobile-specific checks here
        // For instance, test if the browser supports features you need
        
        // Log device information
        console.log("Screen size:", window.innerWidth, "x", window.innerHeight)
        console.log("User agent:", navigator.userAgent)
      }
    } catch (error) {
      console.error("Error during mobile compatibility check:", error)
    }
    
    return () => {
      window.removeEventListener("error", handleMobileError)
      window.removeEventListener("unhandledrejection", (event) => handleMobileError(event.reason))
    }
  }, [isMobile, router])
  
  // If we had an error on mobile, don't try to render complex components
  if (isMobile && hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Redirecting to mobile-friendly view...</p>
      </div>
    )
  }

  return (
    <>
      <ForceView />
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
    </>
  )
}


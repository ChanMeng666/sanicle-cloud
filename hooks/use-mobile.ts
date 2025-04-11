"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768) // Adjust breakpoint as needed
      }

      // Set initial value
      handleResize()

      // Listen for window resize events
      window.addEventListener("resize", handleResize)

      // Clean up event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    } catch (error) {
      console.error("Error in useMobile hook:", error)
      // Default to desktop if there's an error
      setIsMobile(false)
    }
  }, [])

  return isMobile
}


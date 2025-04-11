"use client"

import { useState, useEffect } from "react"

export function useSafeMobile() {
  // Start with null to indicate "not determined yet"
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [deviceInfo, setDeviceInfo] = useState<{
    width: number | null
    height: number | null
    userAgent: string | null
    platform: string | null
  }>({
    width: null,
    height: null,
    userAgent: null,
    platform: null
  })

  useEffect(() => {
    // Safety check for SSR
    if (typeof window === 'undefined') return

    try {
      // Get device information
      const getDeviceInfo = () => {
        try {
          return {
            width: window.innerWidth,
            height: window.innerHeight,
            userAgent: navigator.userAgent,
            platform: navigator.platform
          }
        } catch (error) {
          console.error("Error getting device info:", error)
          return {
            width: null,
            height: null,
            userAgent: null,
            platform: null
          }
        }
      }

      // Function to determine if the device is mobile
      const checkIfMobile = () => {
        try {
          // Check if touch device - more reliable than just width
          const isTouch = 'ontouchstart' in window || 
                         navigator.maxTouchPoints > 0 || 
                         (navigator as any).msMaxTouchPoints > 0

          // Check screen size
          const isSmallScreen = window.innerWidth < 768

          // Check user agent for mobile devices
          const userAgent = navigator.userAgent.toLowerCase()
          const isMobileUserAgent = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)

          // Log the info for debugging
          console.log('Mobile detection info:', {
            isTouch,
            isSmallScreen,
            isMobileUserAgent,
            userAgent
          })

          // If any two of these conditions are true, consider it a mobile device
          const mobileScore = (isTouch ? 1 : 0) + (isSmallScreen ? 1 : 0) + (isMobileUserAgent ? 1 : 0)
          return mobileScore >= 2
        } catch (error) {
          console.error("Error checking if mobile:", error)
          // Conservative default - treat as non-mobile if there's an error
          return false 
        }
      }

      // Safe handler for resize
      const handleResize = () => {
        try {
          setIsMobile(checkIfMobile())
          setDeviceInfo(getDeviceInfo())
        } catch (error) {
          console.error("Error in resize handler:", error)
          setIsMobile(false) // Default to desktop view
        }
      }

      // Initial check
      handleResize()

      // Add event listener for resize
      window.addEventListener("resize", handleResize)

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    } catch (error) {
      console.error("Error setting up mobile detection:", error)
      setIsMobile(false) // Default to desktop view
    }
  }, [])

  return { 
    isMobile,
    deviceInfo,
    isLoading: isMobile === null
  }
} 
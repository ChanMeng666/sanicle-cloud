"use client"

import { useEffect, useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export function MobileCompatibilityCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // Don't run detection if we're already on the error page
  const isErrorPage = pathname === '/mobile-error'
  const desktopMode = searchParams?.get('desktop') === '1'
  
  // Store compatibility state
  const [isCompatible, setIsCompatible] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Skip check if we're already on the error page or desktop mode is enabled
    if (isErrorPage || desktopMode) {
      setIsLoading(false)
      return
    }
    
    try {
      // Check if the browser is likely to have compatibility issues
      const ua = navigator.userAgent.toLowerCase()
      
      // Chrome versions below 90 have issues with modern React/Next.js
      const chromeMatch = ua.match(/chrome\/(\d+)/)
      const chromeVersion = chromeMatch ? parseInt(chromeMatch[1], 10) : 999
      
      // Android WebView is often problematic
      const isAndroidWebView = ua.includes('wv') && ua.includes('android')
      
      // Older Android versions (< 10) struggle with newer features
      const androidMatch = ua.match(/android\s(\d+)/)
      const androidVersion = androidMatch ? parseInt(androidMatch[1], 10) : 999
      
      // Check for UC Browser, Opera Mini, etc. which have custom rendering engines
      const isProblematicBrowser = /ucbrowser|opera mini|miui browser|samsungbrowser\/[1-6]/.test(ua)
      
      // Facebook in-app browser is particularly problematic
      const isFacebookBrowser = ua.includes('fb_iab') || ua.includes('fbav') || ua.includes('fban')
      
      // Instagram in-app browser also has issues
      const isInstagramBrowser = ua.includes('instagram')
      
      // Check for small screen sizes that may have layout issues
      const hasSmallScreen = window.innerWidth < 360
      
      // Conditions that would trigger the compatibility mode
      const hasCompatibilityIssues = (
        isAndroidWebView ||
        isFacebookBrowser ||
        isInstagramBrowser ||
        (androidVersion < 10 && isAndroidWebView) ||
        chromeVersion < 90 ||
        isProblematicBrowser ||
        hasSmallScreen
      )
      
      // Log the detection results
      console.log('Browser compatibility check:', {
        chromeVersion,
        androidVersion,
        isAndroidWebView,
        isFacebookBrowser,
        isInstagramBrowser,
        isProblematicBrowser,
        hasSmallScreen,
        hasIssues: hasCompatibilityIssues
      })
      
      // If compatibility issues detected and we're not already on the error page
      if (hasCompatibilityIssues && !isErrorPage) {
        // On mobile devices, redirect to the error page
        if (/android|iphone|ipad|ipod|mobile/i.test(ua) && window.innerWidth < 768) {
          setIsCompatible(false)
          console.log('Redirecting to mobile compatibility page')
          router.push('/mobile-error?reason=older_browser')
          return
        }
      }
      
      setIsCompatible(true)
      setIsLoading(false)
    } catch (error) {
      console.error('Error in compatibility check:', error)
      setIsCompatible(true) // Default to compatible on error
      setIsLoading(false)
    }
  }, [router, isErrorPage, desktopMode])
  
  // Show a minimal loading spinner if we're still checking
  if (isLoading && !isErrorPage && !desktopMode) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }
  
  return children
} 
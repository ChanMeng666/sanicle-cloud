"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RefreshCw } from "lucide-react"
import Link from "next/link"

export const MobileFallback = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      try {
        // Simple check for mobile device
        const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        const isSmallScreen = window.innerWidth < 768
        
        setIsMobile(isMobileDevice && isSmallScreen)
        
        // Check for specific iOS Safari regex issues
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        
        if (isIOS) {
          // Test if site has regex issues by intentionally trying a named group
          try {
            // eslint-disable-next-line no-new
            new RegExp('(?<name>test)')
          } catch (e) {
            if (e instanceof SyntaxError && e.message.includes('group specifier')) {
              // iOS has regex issues with named groups
              console.warn("iOS RegExp compatibility issues detected")
              setHasError(true)
            }
          }
        }
      } catch (e) {
        // If we hit any errors, default to non-mobile
        setIsMobile(false)
      }
    }
    
    checkMobile()
    
    // Listen for errors that may occur after initial render
    const handleError = () => {
      if (isMobile) {
        setHasError(true)
      }
    }
    
    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleError)
    
    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleError)
    }
  }, [isMobile])
  
  // If mobile and has errors, show simple fallback
  if (isMobile && hasError) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center p-4 text-center">
        <div className="max-w-sm mx-auto pt-12">
          <img 
            src="/logo/sanicle_logo.svg" 
            alt="Sanicle Logo" 
            className="h-10 mx-auto mb-8" 
          />
          
          <h1 className="text-xl font-medium text-primary mb-4">
            Optimized for Desktop
          </h1>
          
          <p className="text-gray-600 mb-6 text-sm">
            We're working on our mobile experience. Please visit on desktop or try one of these options:
          </p>
          
          <div className="space-y-3 mb-8">
            <Button 
              className="w-full"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Refresh Page
            </Button>
            
            <Link href="/" className="block w-full">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Go to Homepage
              </Button>
            </Link>
          </div>
          
          <div className="text-xs text-gray-400">
            <p>For the best experience, please visit sanicle.cloud on a desktop browser.</p>
          </div>
        </div>
      </div>
    )
  }
  
  // Otherwise, render children normally
  return <>{children}</>
} 
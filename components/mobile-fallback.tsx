"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RefreshCw, AlertTriangle } from "lucide-react"
import Link from "next/link"

export const MobileFallback = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [forceContinue, setForceContinue] = useState(false)
  
  useEffect(() => {
    // Check if user has previously chosen to continue anyway
    try {
      const userPreference = sessionStorage.getItem('sanicle-mobile-force-continue')
      if (userPreference === 'true') {
        setForceContinue(true)
        return
      }
    } catch (e) {
      console.error("Error reading from sessionStorage:", e)
    }
    
    // Detect mobile and immediately disable problematic components
    const checkMobile = () => {
      try {
        // Simple check for mobile device
        const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        const isSmallScreen = window.innerWidth < 768
        
        const mobileDetected = isMobileDevice && isSmallScreen
        setIsMobile(mobileDetected)
        
        // If mobile, disable cookie consent and chat widget to prevent issues
        if (mobileDetected) {
          // Immediately try to find and disable cookie consent and chat widget
          const disableWidgets = () => {
            try {
              // Hide cookie container
              const cookieElements = document.querySelectorAll('[id*="cookie"], [class*="cookie"], [aria-label*="cookie"]');
              cookieElements.forEach(el => {
                if (el instanceof HTMLElement) {
                  el.style.display = 'none';
                  console.log("Hidden cookie element:", el);
                }
              });
              
              // Hide chat container
              const chatElements = document.querySelectorAll('[id*="chat"], [class*="chat"], [aria-label*="chat"]');
              chatElements.forEach(el => {
                if (el instanceof HTMLElement) {
                  el.style.display = 'none';
                  console.log("Hidden chat element:", el);
                }
              });
              
              // Set global flag
              if (typeof window !== 'undefined') {
                (window as any).__DISABLE_WIDGETS_ON_MOBILE = true;
              }
            } catch (e) {
              console.error("Error disabling widgets:", e);
            }
          };
          
          // Try immediately and also after DOM is loaded
          disableWidgets();
          
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', disableWidgets);
          } else {
            // DOM already loaded, run again after a short delay to catch dynamic elements
            setTimeout(disableWidgets, 500);
          }
        }
        
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
        console.error("Error in mobile detection:", e);
        setIsMobile(false)
      }
    }
    
    checkMobile()
    
    // Listen for errors that may occur after initial render
    const handleError = (event: ErrorEvent | PromiseRejectionEvent) => {
      console.log("Mobile specific error:", event);
      
      // Only set error if not already forcing continue
      if (forceContinue) return;
      
      // Check if the error is related to RegExp syntax
      const errorMessage = event instanceof ErrorEvent ? event.message : 
                          (event as PromiseRejectionEvent).reason?.message || '';
      
      if (errorMessage.includes('group specifier') || 
          errorMessage.includes('regular expression')) {
        setHasError(true);
      }
      
      // Also set error if we detect any critical errors in iOS
      if (isMobile && /iPhone|iPad|iPod/.test(navigator.userAgent)) {
        setHasError(true);
      }
    }
    
    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleError)
    
    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleError)
    }
  }, [isMobile, forceContinue])
  
  // Function to allow user to continue anyway
  const handleContinueAnyway = () => {
    try {
      // Store preference in session storage
      sessionStorage.setItem('sanicle-mobile-force-continue', 'true')
      setForceContinue(true)
      
      // Force redirection to homepage
      window.location.href = '/?force=true';
    } catch (e) {
      console.error("Failed to save preference:", e)
    }
  }
  
  // Function to handle homepage navigation
  const goToHomepage = () => {
    try {
      // Temporarily store a flag to allow viewing homepage
      sessionStorage.setItem('sanicle-mobile-force-continue', 'true')
      // Redirect with force parameter to prevent immediate fallback
      window.location.href = '/?force=true';
    } catch (e) {
      console.error("Error navigating to homepage:", e)
      // Fallback to direct navigation
      window.location.href = '/';
    }
  }
  
  // If force continue is enabled or no errors, render children
  if (forceContinue || !(isMobile && hasError)) {
    return <>{children}</>
  }
  
  // Mobile fallback UI
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
        
        <div className="space-y-3 mb-4">
          <button 
            className="w-full flex items-center justify-center bg-primary text-white px-4 py-2 rounded"
            onClick={() => {
              console.log("Attempting to refresh page...");
              // First set the force continue to true
              try {
                sessionStorage.setItem('sanicle-mobile-force-continue', 'true')
              } catch(e) {}
              // Then reload
              window.location.href = window.location.pathname + '?force=true';
            }}
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh Page
          </button>
          
          <button 
            className="w-full flex items-center justify-center border border-gray-300 text-primary px-4 py-2 rounded"
            onClick={goToHomepage}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Go to Homepage
          </button>
          
          <button
            className="w-full flex items-center justify-center border border-orange-300 text-orange-600 bg-orange-50 px-4 py-2 rounded mt-4"
            onClick={handleContinueAnyway}
          >
            <AlertTriangle className="mr-2 h-4 w-4" /> Continue Anyway (May Not Work)
          </button>
        </div>
        
        <div className="text-xs text-gray-400 mt-4">
          <p>For the best experience, please visit sanicle.cloud on a desktop browser.</p>
        </div>
      </div>
    </div>
  )
} 
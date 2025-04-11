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

    // Define a safe way to check for mobile
    const safeCheckMobile = () => {
      try {
        // Simple check based just on width - most reliable across browsers
        return window.innerWidth < 768;
      } catch (e) {
        // If anything fails, default to desktop view
        return false;
      }
    };

    // Initial check - run once immediately
    try {
      setIsMobile(safeCheckMobile());
      
      // Get basic device info if available
      if (typeof navigator !== 'undefined') {
        setDeviceInfo({
          width: window.innerWidth || null,
          height: window.innerHeight || null,
          userAgent: navigator.userAgent || null,
          platform: navigator.platform || null
        });
      }
    } catch (e) {
      // Silent fail and default to desktop view
      setIsMobile(false);
    }

    // Set up resize handler with try/catch
    const handleResize = () => {
      try {
        setIsMobile(safeCheckMobile());
        setDeviceInfo(prev => ({
          ...prev,
          width: window.innerWidth || null,
          height: window.innerHeight || null
        }));
      } catch (e) {
        // Silent fail and keep current state
      }
    };

    // Add event listener with try/catch
    try {
      window.addEventListener("resize", handleResize);
      
      return () => {
        try {
          window.removeEventListener("resize", handleResize);
        } catch (e) {
          // Silent cleanup failure
        }
      };
    } catch (e) {
      // If adding the event handler fails, just continue
      // The app will still work, just without responsive detection
    }
  }, []);

  return { 
    isMobile,
    deviceInfo,
    isLoading: isMobile === null
  }
} 
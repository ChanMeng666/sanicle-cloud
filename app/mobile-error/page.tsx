"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function MobileErrorPage() {
  const [deviceInfo, setDeviceInfo] = useState<Record<string, any>>({})
  
  useEffect(() => {
    // Collect device information
    try {
      const info = {
        userAgent: navigator.userAgent,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        pixelRatio: window.devicePixelRatio,
        orientation: screen.orientation ? screen.orientation.type : "unknown",
        platform: navigator.platform,
        vendor: navigator.vendor,
      }
      setDeviceInfo(info)
      
      // Log to console for debugging
      console.log("Device Information:", info)
    } catch (error) {
      console.error("Error collecting device info:", error)
    }
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <img 
            src="/logo/sanicle_logo.svg" 
            alt="Sanicle Logo" 
            className="h-12 mx-auto mb-6" 
          />
          <h1 className="text-2xl font-bold text-primary mb-4">
            Mobile Experience Issue
          </h1>
          <p className="text-gray-600 mb-6">
            We're working on improving our mobile experience. Please try one of the following options:
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-primary/5 rounded-lg p-4">
            <h2 className="font-medium text-primary mb-2">Try Desktop Mode</h2>
            <p className="text-sm text-gray-600 mb-4">
              Switch to desktop mode in your mobile browser settings for the best experience.
            </p>
            <Button onClick={() => window.location.href = "/"} className="w-full">
              Continue to Website
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="font-medium text-gray-800 mb-2">Refresh Page</h2>
            <p className="text-sm text-gray-600 mb-4">
              Sometimes a simple refresh can resolve display issues.
            </p>
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()} 
              className="w-full flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4" /> Refresh Page
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="font-medium text-gray-800 mb-2">Try Our Homepage</h2>
            <p className="text-sm text-gray-600 mb-4">
              Return to our homepage to navigate to other sections.
            </p>
            <Link href="/" className="w-full">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Go to Homepage
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-xs text-gray-400 text-center">
          <p>We appreciate your patience as we improve our mobile experience.</p>
          <p className="mt-2">Device Info: {deviceInfo.platform || "Unknown"} / {deviceInfo.screenWidth || "?"} x {deviceInfo.screenHeight || "?"}</p>
        </div>
      </div>
    </div>
  )
} 
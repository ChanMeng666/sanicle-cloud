"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RefreshCw, Smartphone, Globe } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function MobileErrorPage() {
  const searchParams = useSearchParams()
  const errorReason = searchParams?.get('reason') || 'unknown'
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
  
  // Get title and description based on error reason
  const getErrorInfo = () => {
    switch(errorReason) {
      case 'older_browser':
        return {
          title: "Browser Compatibility Issue",
          description: "Your browser version may not support all the features needed for our website. We've detected you're using an older browser version."
        }
      case 'runtime_error':
        return {
          title: "Mobile Experience Issue",
          description: "We've encountered a technical issue with our mobile experience on your device."
        }
      default:
        return {
          title: "Mobile Experience Issue",
          description: "We're working on improving our mobile experience for all devices and browsers."
        }
    }
  }
  
  const errorInfo = getErrorInfo()
  
  // Attempt to extract browser and version for more specific help
  const getBrowserInfo = () => {
    try {
      const ua = deviceInfo.userAgent?.toLowerCase() || ''
      
      if (ua.includes('chrome')) {
        const match = ua.match(/chrome\/(\d+)/)
        return match ? `Chrome ${match[1]}` : 'Chrome'
      } else if (ua.includes('firefox')) {
        const match = ua.match(/firefox\/(\d+)/)
        return match ? `Firefox ${match[1]}` : 'Firefox'
      } else if (ua.includes('safari') && !ua.includes('chrome')) {
        const match = ua.match(/safari\/(\d+)/)
        return match ? `Safari ${match[1]}` : 'Safari'
      } else if (ua.includes('edge')) {
        return 'Edge'
      } else if (ua.includes('opera') || ua.includes('opr')) {
        return 'Opera'
      }
      
      return 'Unknown Browser'
    } catch (e) {
      return 'Unknown Browser'
    }
  }
  
  const browserInfo = getBrowserInfo()
  
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
            {errorInfo.title}
          </h1>
          <p className="text-gray-600 mb-6">
            {errorInfo.description}
          </p>
        </div>
        
        <div className="space-y-4">
          {(errorReason === 'older_browser') && (
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
              <h2 className="font-medium text-amber-700 mb-2 flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                Browser Update Recommended
              </h2>
              <p className="text-sm text-amber-700 mb-4">
                We've detected you're using {browserInfo}. For the best experience, we recommend updating your browser or using Chrome, Firefox, or Safari.
              </p>
            </div>
          )}
          
          <div className="bg-primary/5 rounded-lg p-4">
            <h2 className="font-medium text-primary mb-2 flex items-center">
              <Smartphone className="h-4 w-4 mr-2" />
              Try Desktop Mode
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Switch to desktop mode in your mobile browser settings for the best experience.
            </p>
            <Button onClick={() => window.location.href = "/?desktop=1"} className="w-full">
              Continue in Desktop Mode
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
          <p className="mt-1">Browser: {browserInfo}</p>
        </div>
      </div>
    </div>
  )
} 
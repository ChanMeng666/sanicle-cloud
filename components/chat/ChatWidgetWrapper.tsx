"use client";

import { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// 动态导入 ChatWidget 组件，不使用SSR
const DynamicChatWidget = dynamic(
  () => import("./ChatWidget").then(mod => mod.ChatWidget),
  {
    ssr: false,
    loading: () => null
  }
);

export function ChatWidgetWrapper() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktopModeForced, setIsDesktopModeForced] = useState(false);

  // Check if we're in desktop mode via URL parameter
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const desktopParam = urlParams.get('desktop');
      setIsDesktopModeForced(desktopParam === '1');
    }
  }, []);

  // 确保组件仅在客户端渲染 and detect mobile
  useEffect(() => {
    setMounted(true);
    
    // Simple mobile detection
    if (typeof window !== 'undefined') {
      try {
        const ua = navigator.userAgent.toLowerCase();
        const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(ua);
        const isSmallScreen = window.innerWidth < 768;
        setIsMobile(isMobileDevice && isSmallScreen);
        
        // Log for debugging
        console.log("Chat widget device detection:", { 
          isMobileDevice, 
          isSmallScreen, 
          isMobile: isMobileDevice && isSmallScreen,
          width: window.innerWidth
        });
      } catch (error) {
        console.error("Error detecting mobile for chat widget:", error);
        setIsMobile(false);
      }
    }
  }, []);

  // Don't render on mobile browsers unless desktop mode is forced
  if (!mounted || (isMobile && !isDesktopModeForced)) return null;

  return (
    <Suspense fallback={null}>
      <DynamicChatWidget />
    </Suspense>
  );
} 
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
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setIsCollapsed(prev => !prev);
  };

  // 确保组件仅在客户端渲染，并检测是否为移动设备
  useEffect(() => {
    setMounted(true);
    
    try {
      // Check if we're on a mobile device
      const isMobileDevice = /iPhone|iPad|iPod|Android|Mobile|webOS|BlackBerry/i.test(navigator.userAgent);
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isMobileDevice && isSmallScreen);
      
      // Also check if we have the global flag set
      if (typeof window !== 'undefined' && (window as any).__DISABLE_WIDGETS_ON_MOBILE) {
        setIsMobile(true);
      }
      
      // Log the decision for debugging
      if (isMobileDevice && isSmallScreen) {
        console.log("Mobile device detected - chat widget disabled");
      }
    } catch (e) {
      console.error("Error detecting mobile device:", e);
    }
  }, []);

  // Don't render on mobile or when not mounted
  if (!mounted || isMobile) return null;

  return (
    <Suspense fallback={null}>
      <DynamicChatWidget 
        isCollapsed={isCollapsed}
        toggleCollapsed={toggleCollapsed}
      />
    </Suspense>
  );
} 
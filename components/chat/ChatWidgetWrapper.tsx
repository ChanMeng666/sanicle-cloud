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

  // 确保组件仅在客户端渲染
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Suspense fallback={null}>
      <DynamicChatWidget />
    </Suspense>
  );
} 
"use client"

import { useSafeMobile } from "./use-safe-mobile"

export function useMobile() {
  const { isMobile } = useSafeMobile()
  
  // Default to non-mobile if still loading or error occurred
  return isMobile === null ? false : isMobile
}


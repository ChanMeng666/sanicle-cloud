"use client"

// Basic hook for detecting mobile screens
export function useMobile() {
  // Static implementation for safety
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    return window.innerWidth < 768;
  } catch {
    // Return false if any errors
    return false;
  }
}


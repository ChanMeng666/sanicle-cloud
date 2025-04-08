"use client"

import { CookieConsent } from './CookieConsentContext';

// Class for managing cookies
export class CookieManager {
  // Set cookie
  static setCookie(name: string, value: string, days: number, path: string = '/'): void {
    if (typeof window === 'undefined') return;
    
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=${path};SameSite=Lax`;
  }

  // Get cookie
  static getCookie(name: string): string | null {
    if (typeof window === 'undefined') return null;
    
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Delete cookie
  static deleteCookie(name: string, path: string = '/'): void {
    if (typeof window === 'undefined') return;
    
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path};SameSite=Lax`;
  }

  // Apply consent settings
  static applyConsentSettings(consentType: CookieConsent): void {
    if (typeof window === 'undefined') return;
    
    if (consentType === 'all') {
      // Enable all cookie types
      this.enableAnalytics();
      this.enableFunctional();
      this.enableAdvertising();
    } else if (consentType === 'necessary') {
      // Only enable necessary cookies, disable others
      this.disableAnalytics();
      this.disableFunctional();
      this.disableAdvertising();
    } else {
      // If no consent or consent is withdrawn, delete all non-essential cookies
      this.clearAllNonEssentialCookies();
    }
  }

  // Enable analytics cookies
  static enableAnalytics(): void {
    // Example: If the project uses Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    
    // Add configuration for other analytics tools here
  }

  // Disable analytics cookies
  static disableAnalytics(): void {
    // Example: If the project uses Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    
    // Add code to disable other analytics tools here
  }

  // Enable functional cookies
  static enableFunctional(): void {
    // Logic to enable functional cookies
    // Example: Set a functional cookie
    this.setCookie('functional_enabled', 'true', 365);
  }

  // Disable functional cookies
  static disableFunctional(): void {
    // Logic to disable functional cookies
    // Example: Delete a functional cookie
    this.deleteCookie('functional_enabled');
  }

  // Enable advertising cookies
  static enableAdvertising(): void {
    // Example: If the project uses Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'granted'
      });
    }
  }

  // Disable advertising cookies
  static disableAdvertising(): void {
    // Example: If the project uses Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'denied'
      });
    }
  }

  // Clear all non-essential cookies
  static clearAllNonEssentialCookies(): void {
    // Get all cookies
    if (typeof document === 'undefined') return;
    
    const cookies = document.cookie.split(';');
    
    // List of essential cookie names (example)
    const essentialCookies = ['session_id', 'csrf_token', 'cookieConsent'];
    
    // Delete all non-essential cookies
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const cookieName = cookie.split('=')[0];
      
      // If not in essential cookies list, delete it
      if (!essentialCookies.includes(cookieName)) {
        this.deleteCookie(cookieName);
      }
    }
  }
} 
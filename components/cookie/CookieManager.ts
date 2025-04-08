"use client"

import { CookieConsent } from './CookieConsentContext';

// 封装Cookie管理的类
export class CookieManager {
  // 设置Cookie
  static setCookie(name: string, value: string, days: number, path: string = '/'): void {
    if (typeof window === 'undefined') return;
    
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=${path};SameSite=Lax`;
  }

  // 获取Cookie
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

  // 删除Cookie
  static deleteCookie(name: string, path: string = '/'): void {
    if (typeof window === 'undefined') return;
    
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path};SameSite=Lax`;
  }

  // 根据同意类型应用Cookie设置
  static applyConsentSettings(consentType: CookieConsent): void {
    if (typeof window === 'undefined') return;
    
    if (consentType === 'all') {
      // 启用所有Cookie类型
      this.enableAnalytics();
      this.enableFunctional();
      this.enableAdvertising();
    } else if (consentType === 'necessary') {
      // 只启用必要Cookie，禁用其他
      this.disableAnalytics();
      this.disableFunctional();
      this.disableAdvertising();
    } else {
      // 如果没有同意或同意被撤回，删除所有非必要Cookie
      this.clearAllNonEssentialCookies();
    }
  }

  // 启用分析Cookie
  static enableAnalytics(): void {
    // 示例：如果项目使用Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    
    // 这里可以添加其他分析工具的配置
  }

  // 禁用分析Cookie
  static disableAnalytics(): void {
    // 示例：如果项目使用Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    
    // 这里可以添加其他分析工具的禁用代码
  }

  // 启用功能性Cookie
  static enableFunctional(): void {
    // 启用功能性Cookie的逻辑
    // 示例：设置一个功能性Cookie
    this.setCookie('functional_enabled', 'true', 365);
  }

  // 禁用功能性Cookie
  static disableFunctional(): void {
    // 禁用功能性Cookie的逻辑
    // 示例：删除功能性Cookie
    this.deleteCookie('functional_enabled');
  }

  // 启用广告Cookie
  static enableAdvertising(): void {
    // 示例：如果项目使用Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'granted'
      });
    }
  }

  // 禁用广告Cookie
  static disableAdvertising(): void {
    // 示例：如果项目使用Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'denied'
      });
    }
  }

  // 清除所有非必要Cookie
  static clearAllNonEssentialCookies(): void {
    // 获取所有Cookie
    if (typeof document === 'undefined') return;
    
    const cookies = document.cookie.split(';');
    
    // 必要Cookie的名称列表（示例）
    const essentialCookies = ['session_id', 'csrf_token', 'cookieConsent'];
    
    // 删除所有非必要Cookie
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const cookieName = cookie.split('=')[0];
      
      // 如果不在必要Cookie列表中，则删除
      if (!essentialCookies.includes(cookieName)) {
        this.deleteCookie(cookieName);
      }
    }
  }
} 
"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type CookieConsent = 'all' | 'necessary' | null;

interface CookieSettings {
  necessary: boolean;  // 必要的，永远为true
  functional: boolean; // 功能性
  analytics: boolean;  // 分析
  advertising: boolean; // 广告
}

interface CookieConsentContextType {
  consent: CookieConsent;
  setConsent: (consent: CookieConsent) => void;
  isConsentGiven: boolean;
  settings: CookieSettings;
  updateSettings: (newSettings: Partial<CookieSettings>) => void;
  resetConsent: () => void;
}

const defaultSettings: CookieSettings = {
  necessary: true,
  functional: false,
  analytics: false,
  advertising: false
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<CookieConsent>(null);
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>(defaultSettings);

  useEffect(() => {
    // 在组件挂载时检查现有的同意状态
    try {
      if (typeof window !== 'undefined') {
        const storedConsent = localStorage.getItem('cookieConsent') as CookieConsent;
        if (storedConsent) {
          setConsentState(storedConsent);
          setIsConsentGiven(true);
          
          // 根据存储的同意状态设置Cookie设置
          if (storedConsent === 'all') {
            setSettings({
              necessary: true,
              functional: true,
              analytics: true,
              advertising: true
            });
          } else if (storedConsent === 'necessary') {
            setSettings({
              necessary: true,
              functional: false,
              analytics: false,
              advertising: false
            });
          }
        }
      }
    } catch (error) {
      console.error("访问localStorage时出错:", error);
    }
  }, []);

  const setConsent = (newConsent: CookieConsent) => {
    try {
      if (typeof window !== 'undefined') {
        if (newConsent) {
          localStorage.setItem('cookieConsent', newConsent);
          setIsConsentGiven(true);
          
          // 更新设置以匹配同意级别
          if (newConsent === 'all') {
            setSettings({
              necessary: true,
              functional: true,
              analytics: true,
              advertising: true
            });
          } else if (newConsent === 'necessary') {
            setSettings({
              necessary: true,
              functional: false,
              analytics: false,
              advertising: false
            });
          }
        } else {
          localStorage.removeItem('cookieConsent');
          setIsConsentGiven(false);
          setSettings(defaultSettings);
        }
        setConsentState(newConsent);
      }
    } catch (error) {
      console.error("访问localStorage时出错:", error);
    }
  };

  const updateSettings = (newSettings: Partial<CookieSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    
    // 根据设置更新consent类型
    if (updatedSettings.functional && updatedSettings.analytics && updatedSettings.advertising) {
      setConsent('all');
    } else {
      setConsent('necessary');
    }
  };

  const resetConsent = () => {
    setConsent(null);
  };

  return (
    <CookieConsentContext.Provider value={{ 
      consent, 
      setConsent, 
      isConsentGiven, 
      settings,
      updateSettings,
      resetConsent
    }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  
  if (context === undefined) {
    throw new Error('useCookieConsent必须在CookieConsentProvider内部使用');
  }
  
  return context;
} 
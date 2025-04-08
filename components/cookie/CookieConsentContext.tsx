"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type CookieConsent = 'all' | 'necessary' | null;

interface CookieSettings {
  necessary: boolean;  // Essential, always true
  functional: boolean; // Functional
  analytics: boolean;  // Analytics
  advertising: boolean; // Advertising
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
    // Check for existing consent when component mounts
    try {
      if (typeof window !== 'undefined') {
        const storedConsent = localStorage.getItem('cookieConsent') as CookieConsent;
        if (storedConsent) {
          setConsentState(storedConsent);
          setIsConsentGiven(true);
          
          // Set cookie settings based on stored consent
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
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  const setConsent = (newConsent: CookieConsent) => {
    try {
      if (typeof window !== 'undefined') {
        if (newConsent) {
          localStorage.setItem('cookieConsent', newConsent);
          setIsConsentGiven(true);
          
          // Update settings to match consent level
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
      console.error("Error accessing localStorage:", error);
    }
  };

  const updateSettings = (newSettings: Partial<CookieSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    
    // Update consent type based on settings
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
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  
  return context;
} 
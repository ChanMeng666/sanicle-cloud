"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCookieConsent } from './CookieConsentContext';
import { CookieSettingsDialog } from './CookieSettingsDialog';

export function ManageCookies() {
  const { consent } = useCookieConsent();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const openSettings = () => {
    setSettingsOpen(true);
  };

  return (
    <>
      <Button 
        variant="link" 
        className="text-neutral-500 hover:text-primary transition-colors duration-200 text-sm px-0"
        onClick={openSettings}
      >
        管理Cookie
      </Button>
      
      <CookieSettingsDialog 
        open={settingsOpen} 
        onOpenChange={setSettingsOpen} 
      />
    </>
  );
} 
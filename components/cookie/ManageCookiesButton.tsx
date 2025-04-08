"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCookieConsent } from './CookieConsentContext';
import { CookieSettingsDialog } from './CookieSettingsDialog';

export function ManageCookiesButton() {
  const { consent } = useCookieConsent();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const openSettings = () => {
    setSettingsOpen(true);
  };

  return (
    <>
      <Button 
        variant="default" 
        className="px-6"
        onClick={openSettings}
      >
        Manage Cookie Settings
      </Button>
      
      <CookieSettingsDialog 
        open={settingsOpen} 
        onOpenChange={setSettingsOpen} 
      />
    </>
  );
} 
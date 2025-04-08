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

  // Helper function to get a human-readable consent status
  const getConsentStatus = () => {
    if (consent === 'all') {
      return 'All cookies accepted';
    } else if (consent === 'necessary') {
      return 'Only necessary cookies accepted';
    } else {
      return 'No cookie preferences set';
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <div className="text-sm">
          <span className="text-muted-foreground">Current setting: </span>
          <span className="font-medium">{getConsentStatus()}</span>
        </div>
        <Button 
          variant="default" 
          className="px-6"
          onClick={openSettings}
        >
          Manage Cookies
        </Button>
      </div>
      
      <CookieSettingsDialog 
        open={settingsOpen} 
        onOpenChange={setSettingsOpen} 
      />
    </>
  );
} 
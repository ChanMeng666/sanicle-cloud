"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useCookieConsent } from './CookieConsentContext';
import { CookieSettingsDialog } from './CookieSettingsDialog';
import { CookieManager } from './CookieManager';

export function CookieConsent() {
  const [consentDialogOpen, setConsentDialogOpen] = useState(false);
  const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);
  const { consent, setConsent, isConsentGiven } = useCookieConsent();
  
  useEffect(() => {
    // Show cookie consent popup after a short delay if consent not given
    if (!isConsentGiven) {
      const timer = setTimeout(() => {
        setConsentDialogOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isConsentGiven]);

  const acceptAll = () => {
    setConsent('all');
    CookieManager.applyConsentSettings('all');
    setConsentDialogOpen(false);
  };

  const acceptNecessary = () => {
    setConsent('necessary');
    CookieManager.applyConsentSettings('necessary');
    setConsentDialogOpen(false);
  };

  const openCustomizeSettings = () => {
    setConsentDialogOpen(false);
    setSettingsDialogOpen(true);
  };

  // Apply settings whenever consent changes
  useEffect(() => {
    if (consent) {
      CookieManager.applyConsentSettings(consent);
    }
  }, [consent]);

  return (
    <>
      {/* Initial popup */}
      <Dialog open={consentDialogOpen} onOpenChange={setConsentDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Cookie Consent</DialogTitle>
            <DialogDescription>
              We use cookies to enhance your browsing experience, provide personalized content or ads, and analyze our traffic.
              By clicking "Accept All", you consent to our use of all cookies.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-start space-x-2 text-sm">
              <div>
                <p className="text-muted-foreground">
                  This website uses cookies to ensure you get the best experience. Learn more about our{" "}
                  <a href="/legal/cookies" className="text-primary underline">Cookie Policy</a>.
                </p>
              </div>
            </div>
          </div>
          <DialogFooter className="sm:justify-start gap-2">
            <Button variant="default" onClick={acceptAll}>
              Accept All
            </Button>
            <Button variant="outline" onClick={acceptNecessary}>
              Accept Necessary
            </Button>
            <Button variant="outline" onClick={openCustomizeSettings}>
              Customize Settings
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Detailed settings dialog */}
      <CookieSettingsDialog 
        open={settingsDialogOpen} 
        onOpenChange={setSettingsDialogOpen} 
      />
    </>
  );
} 
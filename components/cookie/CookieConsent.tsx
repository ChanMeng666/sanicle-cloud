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
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on a mobile device - do this first
  useEffect(() => {
    try {
      // Check for mobile browser
      const checkMobile = () => {
        const isMobileDevice = /iPhone|iPad|iPod|Android|Mobile|webOS|BlackBerry/i.test(navigator.userAgent);
        const isSmallScreen = window.innerWidth < 768;
        setIsMobile(isMobileDevice && isSmallScreen);
      };
      
      // Check right away
      checkMobile();
      
      // Also check on resize
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    } catch (e) {
      console.error("Error in mobile detection for cookie consent:", e);
    }
  }, []);
  
  // First-time visit detection for the consent popup
  useEffect(() => {
    // Only show popup if consent hasn't been given AND we're not on mobile
    if (!isConsentGiven && !isMobile) {
      const timer = setTimeout(() => {
        setConsentDialogOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (!isConsentGiven && isMobile) {
      // On mobile, automatically use necessary cookies only without showing dialog
      try {
        console.log("Mobile detected - automatically setting necessary cookies only");
        setConsent('necessary');
        CookieManager.applyConsentSettings('necessary');
      } catch (e) {
        console.error("Error applying default cookie settings on mobile:", e);
      }
    }
  }, [isConsentGiven, isMobile, setConsent]);

  // Make sure we don't show both dialogs at once
  useEffect(() => {
    if (consentDialogOpen && settingsDialogOpen) {
      setSettingsDialogOpen(false);
    }
  }, [consentDialogOpen, settingsDialogOpen]);

  const acceptAll = () => {
    try {
      setConsent('all');
      CookieManager.applyConsentSettings('all');
      setConsentDialogOpen(false);
    } catch (error) {
      console.error("Error accepting all cookies:", error);
    }
  };

  const acceptNecessary = () => {
    try {
      setConsent('necessary');
      CookieManager.applyConsentSettings('necessary');
      setConsentDialogOpen(false);
    } catch (error) {
      console.error("Error accepting necessary cookies:", error);
    }
  };

  const openCustomizeSettings = () => {
    setConsentDialogOpen(false);
    // Small delay to prevent visual glitch with two dialogs
    setTimeout(() => {
      setSettingsDialogOpen(true);
    }, 100);
  };

  // Handle dialog closing via ESC key or clicking outside
  const handleConsentDialogChange = (open: boolean) => {
    if (!open && !isConsentGiven) {
      // If user dismisses without making a choice, set to necessary as default
      acceptNecessary();
    } else {
      setConsentDialogOpen(open);
    }
  };

  // Don't render anything on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Initial popup */}
      <Dialog open={consentDialogOpen} onOpenChange={handleConsentDialogChange}>
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
            <Button 
              variant="default" 
              onClick={acceptAll}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">Accept All</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
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
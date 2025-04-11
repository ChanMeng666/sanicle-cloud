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
  const [showBanner, setShowBanner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktopModeForced, setIsDesktopModeForced] = useState(false);

  // First-time visit detection for the consent popup
  useEffect(() => {
    // Only show popup if consent hasn't been given
    if (!isConsentGiven) {
      const timer = setTimeout(() => {
        setConsentDialogOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isConsentGiven]);

  // Make sure we don't show both dialogs at once
  useEffect(() => {
    if (consentDialogOpen && settingsDialogOpen) {
      setSettingsDialogOpen(false);
    }
  }, [consentDialogOpen, settingsDialogOpen]);

  // Check if we're in desktop mode via URL parameter
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const desktopParam = urlParams.get('desktop');
      setIsDesktopModeForced(desktopParam === '1');
      
      // On mobile, automatically set necessary cookies without showing banner
      // This prevents issues with cookie banner on mobile browsers
      try {
        const ua = navigator.userAgent.toLowerCase();
        const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(ua);
        const isSmallScreen = window.innerWidth < 768;
        const detectedMobile = isMobileDevice && isSmallScreen;
        setIsMobile(detectedMobile);
        
        // Log for debugging
        console.log("Cookie component device detection:", { 
          isMobileDevice, 
          isSmallScreen, 
          isMobile: detectedMobile 
        });
        
        // If on mobile and not forced desktop mode, automatically accept necessary cookies
        if (detectedMobile && !desktopParam) {
          // Set necessary cookies without showing banner
          if (!consent) {
            console.log("Auto-accepting necessary cookies on mobile");
            setConsent('necessary');
          }
        }
      } catch (error) {
        console.error("Error in cookie consent mobile detection:", error);
      }
    }
  }, [consent, setConsent]);

  useEffect(() => {
    // Don't show banner on mobile devices unless desktop mode is forced
    if (isMobile && !isDesktopModeForced) {
      setShowBanner(false);
      return;
    }
    
    // Check if user has already made a choice
    const hasConsent = !!consent;
    setShowBanner(!hasConsent);
  }, [consent, isMobile, isDesktopModeForced]);

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

  // If on mobile and not in desktop mode, don't render the banner at all
  if (isMobile && !isDesktopModeForced) {
    return null;
  }

  if (!showBanner) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-8">
              <h3 className="text-lg font-semibold mb-2">We value your privacy</h3>
              <p className="text-sm text-gray-600">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col md:flex-row md:items-center gap-2 md:justify-end">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSettingsDialogOpen(true)}
              >
                Cookie Settings
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={acceptNecessary}
              >
                Necessary Only
              </Button>
              <Button 
                size="sm"
                onClick={acceptAll}
              >
                Accept All
              </Button>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-400">
            <p>
              You can change your preferences at any time by clicking on Cookie Settings in the footer.
            </p>
          </div>
        </div>
      </div>
      
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
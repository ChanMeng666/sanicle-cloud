"use client"

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCookieConsent } from './CookieConsentContext';
import { CookieTypeSelector } from './CookieTypeSelector';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CookieManager } from './CookieManager';

interface CookieSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CookieSettingsDialog({ open, onOpenChange }: CookieSettingsDialogProps) {
  const { consent, setConsent, settings } = useCookieConsent();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Reset tab to overview when dialog opens
  useEffect(() => {
    if (open) {
      setActiveTab("overview");
    }
  }, [open]);

  const acceptAll = () => {
    setConsent('all');
    CookieManager.applyConsentSettings('all');
    onOpenChange(false);
  };

  const acceptNecessary = () => {
    setConsent('necessary');
    CookieManager.applyConsentSettings('necessary');
    onOpenChange(false);
  };

  const handleSaveSettings = () => {
    // The settings are already saved via the context
    // Just close the dialog
    onOpenChange(false);
  };

  // Helper function to get consent status text
  const getConsentStatusText = () => {
    if (consent === 'all') {
      return "All cookies accepted";
    } else if (consent === 'necessary') {
      return "Only necessary cookies accepted";
    } else {
      return "No preference set";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Cookie Settings</DialogTitle>
          <DialogDescription>
            You can customize your cookie settings and choose which types of cookies you allow.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-2 mb-4 text-sm">
          <div className="bg-muted/50 p-2 rounded flex justify-between">
            <span>Current status:</span>
            <span className="font-medium">{getConsentStatusText()}</span>
          </div>
        </div>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Detailed Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="py-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-base">How We Use Cookies</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  We use cookies to enhance your browsing experience, provide personalized content or ads, and analyze our traffic.
                  By clicking "Accept All", you consent to our use of all cookies.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex flex-col space-y-1.5">
                  <h4 className="text-sm font-medium">Essential Cookies</h4>
                  <p className="text-xs text-muted-foreground">
                    These cookies are necessary for the basic functionality of the website, such as login, shopping cart, etc., and cannot be disabled.
                  </p>
                </div>
                
                <div className="flex flex-col space-y-1.5">
                  <h4 className="text-sm font-medium">Functional, Analytics, and Advertising Cookies</h4>
                  <p className="text-xs text-muted-foreground">
                    These cookies help us provide personalized features, analyze website performance, and deliver relevant ads.
                    You can choose to accept all of these cookies or only the essential ones.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="py-4 min-h-[300px]">
            <CookieTypeSelector onSave={handleSaveSettings} />
          </TabsContent>
        </Tabs>
        
        <DialogFooter className="sm:justify-start gap-2 pt-2">
          <Button variant="default" onClick={acceptAll} className="relative overflow-hidden group">
            <span className="relative z-10">Accept All</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Button>
          <Button variant="outline" onClick={acceptNecessary}>
            Accept Necessary
          </Button>
          {activeTab === "overview" && (
            <Button variant="outline" onClick={() => setActiveTab("details")}>
              Customize Settings
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 
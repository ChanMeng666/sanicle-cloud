"use client"

import { useState } from 'react';
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

interface CookieSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CookieSettingsDialog({ open, onOpenChange }: CookieSettingsDialogProps) {
  const { consent, setConsent } = useCookieConsent();
  const [activeTab, setActiveTab] = useState("overview");

  const acceptAll = () => {
    setConsent('all');
    onOpenChange(false);
  };

  const acceptNecessary = () => {
    setConsent('necessary');
    onOpenChange(false);
  };

  const handleSaveSettings = () => {
    onOpenChange(false);
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
        
        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full mt-4">
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
          
          <TabsContent value="details" className="py-4">
            <CookieTypeSelector onSave={handleSaveSettings} />
          </TabsContent>
        </Tabs>
        
        <DialogFooter className="sm:justify-start gap-2 pt-2">
          <Button variant="default" onClick={acceptAll}>
            Accept All
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
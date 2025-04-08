"use client"

import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useCookieConsent } from './CookieConsentContext';

interface CookieTypeSelectorProps {
  onSave: () => void;
}

export function CookieTypeSelector({ onSave }: CookieTypeSelectorProps) {
  const { settings, updateSettings } = useCookieConsent();
  
  const handleSave = () => {
    // Save completed (all changes are applied immediately through updateSettings)
    onSave();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium">Essential Cookies</h4>
            <p className="text-xs text-muted-foreground">
              These cookies are necessary for the basic functionality of the website and cannot be disabled.
            </p>
          </div>
          <Switch checked={settings.necessary} disabled={true} />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium">Functional Cookies</h4>
            <p className="text-xs text-muted-foreground">
              These cookies enable the website to remember your choices and provide enhanced, personalized features.
            </p>
          </div>
          <Switch 
            id="functional" 
            checked={settings.functional}
            onCheckedChange={(checked) => updateSettings({ functional: checked })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium">Analytics Cookies</h4>
            <p className="text-xs text-muted-foreground">
              These cookies help us understand how visitors interact with our website, allowing us to improve user experience.
            </p>
          </div>
          <Switch 
            id="analytics" 
            checked={settings.analytics}
            onCheckedChange={(checked) => updateSettings({ analytics: checked })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium">Advertising Cookies</h4>
            <p className="text-xs text-muted-foreground">
              These cookies are used to display relevant advertisements and help us measure the effectiveness of marketing campaigns.
            </p>
          </div>
          <Switch 
            id="advertising" 
            checked={settings.advertising}
            onCheckedChange={(checked) => updateSettings({ advertising: checked })}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
} 
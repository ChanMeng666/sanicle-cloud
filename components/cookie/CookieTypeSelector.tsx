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
  
  // Local state to ensure UI responsiveness
  const [localSettings, setLocalSettings] = useState(settings);
  
  // Update local state when settings change from context
  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);
  
  const handleToggle = (key: keyof typeof settings, value: boolean) => {
    // Update local state immediately for responsive UI
    setLocalSettings(prev => ({ ...prev, [key]: value }));
    // Update context state
    updateSettings({ [key]: value });
  };

  const handleSave = () => {
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
          <Switch checked={true} disabled={true} />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="functional-cookie" className="flex-1 cursor-pointer">
            <div>
              <h4 className="text-sm font-medium">Functional Cookies</h4>
              <p className="text-xs text-muted-foreground">
                These cookies enable the website to remember your choices and provide enhanced, personalized features.
              </p>
            </div>
          </Label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {localSettings.functional ? "Enabled" : "Disabled"}
            </span>
            <Switch 
              id="functional-cookie" 
              checked={localSettings.functional}
              onCheckedChange={(checked) => handleToggle("functional", checked)}
              aria-label="Toggle functional cookies"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="analytics-cookie" className="flex-1 cursor-pointer">
            <div>
              <h4 className="text-sm font-medium">Analytics Cookies</h4>
              <p className="text-xs text-muted-foreground">
                These cookies help us understand how visitors interact with our website, allowing us to improve user experience.
              </p>
            </div>
          </Label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {localSettings.analytics ? "Enabled" : "Disabled"}
            </span>
            <Switch 
              id="analytics-cookie" 
              checked={localSettings.analytics}
              onCheckedChange={(checked) => handleToggle("analytics", checked)}
              aria-label="Toggle analytics cookies"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="advertising-cookie" className="flex-1 cursor-pointer">
            <div>
              <h4 className="text-sm font-medium">Advertising Cookies</h4>
              <p className="text-xs text-muted-foreground">
                These cookies are used to display relevant advertisements and help us measure the effectiveness of marketing campaigns.
              </p>
            </div>
          </Label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {localSettings.advertising ? "Enabled" : "Disabled"}
            </span>
            <Switch 
              id="advertising-cookie" 
              checked={localSettings.advertising}
              onCheckedChange={(checked) => handleToggle("advertising", checked)}
              aria-label="Toggle advertising cookies"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
} 
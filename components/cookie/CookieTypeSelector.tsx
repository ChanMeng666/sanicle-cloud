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
    // 保存已完成（所有更改都是通过updateSettings立即应用的）
    onSave();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium">必要Cookie</h4>
            <p className="text-xs text-muted-foreground">
              这些Cookie对网站的基本功能是必需的，不能被禁用。
            </p>
          </div>
          <Switch checked={settings.necessary} disabled={true} />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium">功能性Cookie</h4>
            <p className="text-xs text-muted-foreground">
              这些Cookie使网站能够记住您的选择，提供增强和个性化功能。
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
            <h4 className="text-sm font-medium">分析Cookie</h4>
            <p className="text-xs text-muted-foreground">
              这些Cookie帮助我们了解访问者如何使用我们的网站，以便我们改进用户体验。
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
            <h4 className="text-sm font-medium">广告Cookie</h4>
            <p className="text-xs text-muted-foreground">
              这些Cookie用于向您显示相关广告，并帮助我们衡量营销活动的有效性。
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
          保存设置
        </button>
      </div>
    </div>
  );
} 
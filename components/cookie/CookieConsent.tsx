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

  // 每当consent变化时应用设置
  useEffect(() => {
    if (consent) {
      CookieManager.applyConsentSettings(consent);
    }
  }, [consent]);

  return (
    <>
      {/* 初始弹窗 */}
      <Dialog open={consentDialogOpen} onOpenChange={setConsentDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Cookie 同意</DialogTitle>
            <DialogDescription>
              我们使用Cookie来增强您的浏览体验，提供个性化内容或广告，并分析我们的流量。
              通过点击"接受所有"，您同意我们使用所有Cookie。
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-start space-x-2 text-sm">
              <div>
                <p className="text-muted-foreground">
                  本网站使用Cookie确保您获得最佳的体验。了解更多关于我们的{" "}
                  <a href="/legal/cookies" className="text-primary underline">Cookie政策</a>。
                </p>
              </div>
            </div>
          </div>
          <DialogFooter className="sm:justify-start gap-2">
            <Button variant="default" onClick={acceptAll}>
              接受所有
            </Button>
            <Button variant="outline" onClick={acceptNecessary}>
              仅接受必要
            </Button>
            <Button variant="outline" onClick={openCustomizeSettings}>
              自定义设置
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 详细设置弹窗 */}
      <CookieSettingsDialog 
        open={settingsDialogOpen} 
        onOpenChange={setSettingsDialogOpen} 
      />
    </>
  );
} 
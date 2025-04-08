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
          <DialogTitle>Cookie 设置</DialogTitle>
          <DialogDescription>
            您可以自定义Cookie设置，选择接受哪些类型的Cookie。
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">概览</TabsTrigger>
            <TabsTrigger value="details">详细设置</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="py-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-base">我们使用Cookie的方式</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  我们使用Cookie来增强您的浏览体验，提供个性化内容或广告，并分析我们的流量。
                  通过点击"接受所有"，您同意我们使用所有Cookie。
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex flex-col space-y-1.5">
                  <h4 className="text-sm font-medium">必要Cookie</h4>
                  <p className="text-xs text-muted-foreground">
                    这些Cookie对网站的基本功能是必需的，例如登录、购物车等，不能被禁用。
                  </p>
                </div>
                
                <div className="flex flex-col space-y-1.5">
                  <h4 className="text-sm font-medium">功能性、分析与广告Cookie</h4>
                  <p className="text-xs text-muted-foreground">
                    这些Cookie帮助我们提供个性化功能、分析网站性能并投放相关广告。
                    您可以选择接受所有这些Cookie，或者只接受必要的Cookie。
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
            接受所有
          </Button>
          <Button variant="outline" onClick={acceptNecessary}>
            仅接受必要
          </Button>
          {activeTab === "overview" && (
            <Button variant="outline" onClick={() => setActiveTab("details")}>
              自定义设置
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 
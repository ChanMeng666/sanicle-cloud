"use client"

import { useState } from 'react';
import Link from 'next/link';
import { CookieSettingsDialog } from './CookieSettingsDialog';

export function FloatingCookieButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-white text-primary hover:bg-primary/10 transition-colors duration-200 py-2 px-4 rounded-full shadow-lg"
          aria-label="Cookie Settings"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 14v.01" />
          </svg>
          <span className="font-medium text-sm">Cookie Settings</span>
        </button>
      </div>

      <CookieSettingsDialog
        open={isOpen}
        onOpenChange={setIsOpen}
      />
    </>
  );
} 
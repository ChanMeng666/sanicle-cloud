import type React from "react"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/layout/MainNav"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { ChatWidgetWrapper } from "@/components/chat/ChatWidgetWrapper"
import { CookieConsent } from "@/components/cookie/CookieConsent"
import { CookieConsentProvider } from "@/components/cookie/CookieConsentContext"
import { Viewport } from "next"
import { ErrorBoundary } from "@/components/error-boundary"
import { MobileCompatibilityCheck } from "@/components/mobile-compatibility"

// Separate viewport export as recommended by Next.js
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata = {
  title: "Sanicle",
  description:
    "A B2B-B2G platform dedicated to transforming women's workplace wellbeing through menstrual health benefits.",
  generator: 'v0.dev',
  icons: {
    icon: "/logo/leave-green.svg",
    shortcut: "/logo/leave-green.svg",
    apple: "/logo/leave-green.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo/leave-green.svg" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Create a custom logging element to view logs on the device itself
            function createLogElement() {
              if (document.getElementById('mobile-error-log')) return;
              
              const logContainer = document.createElement('div');
              logContainer.id = 'mobile-error-log';
              logContainer.style.position = 'fixed';
              logContainer.style.bottom = '0';
              logContainer.style.left = '0';
              logContainer.style.right = '0';
              logContainer.style.maxHeight = '50vh';
              logContainer.style.overflowY = 'auto';
              logContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
              logContainer.style.color = 'white';
              logContainer.style.fontFamily = 'monospace';
              logContainer.style.fontSize = '12px';
              logContainer.style.padding = '10px';
              logContainer.style.zIndex = '10000';
              logContainer.style.display = 'none';
              
              const closeButton = document.createElement('button');
              closeButton.textContent = 'Close';
              closeButton.style.position = 'absolute';
              closeButton.style.right = '10px';
              closeButton.style.top = '10px';
              closeButton.style.backgroundColor = '#555';
              closeButton.style.border = 'none';
              closeButton.style.color = 'white';
              closeButton.style.padding = '5px 10px';
              closeButton.style.borderRadius = '4px';
              closeButton.onclick = function() {
                logContainer.style.display = 'none';
              };
              
              logContainer.appendChild(closeButton);
              document.body.appendChild(logContainer);
              
              // Add toggle button
              const toggleButton = document.createElement('button');
              toggleButton.textContent = 'Show Logs';
              toggleButton.style.position = 'fixed';
              toggleButton.style.bottom = '10px';
              toggleButton.style.right = '10px';
              toggleButton.style.backgroundColor = 'rgba(0,0,0,0.6)';
              toggleButton.style.color = 'white';
              toggleButton.style.border = 'none';
              toggleButton.style.padding = '5px 10px';
              toggleButton.style.borderRadius = '4px';
              toggleButton.style.zIndex = '10001';
              
              toggleButton.onclick = function() {
                logContainer.style.display = logContainer.style.display === 'none' ? 'block' : 'none';
              };
              
              document.body.appendChild(toggleButton);
              
              return logContainer;
            }
            
            function logToScreen(message, type = 'info') {
              const logContainer = createLogElement();
              const logEntry = document.createElement('div');
              logEntry.style.marginBottom = '5px';
              logEntry.style.borderLeft = '4px solid ' + (type === 'error' ? 'red' : type === 'warn' ? 'orange' : 'green');
              logEntry.style.paddingLeft = '10px';
              
              // Make timestamp
              const timestamp = new Date().toISOString().slice(11, 19);
              logEntry.innerHTML = '<span style="color:#aaa">[' + timestamp + ']</span> ' + message;
              
              logContainer.appendChild(logEntry);
              logContainer.scrollTop = logContainer.scrollHeight;
            }
            
            // Override console methods to also log to screen
            const originalConsoleLog = console.log;
            const originalConsoleError = console.error;
            const originalConsoleWarn = console.warn;
            
            console.log = function() {
              originalConsoleLog.apply(console, arguments);
              logToScreen(Array.from(arguments).map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
              ).join(' '));
            };
            
            console.error = function() {
              originalConsoleError.apply(console, arguments);
              logToScreen(Array.from(arguments).map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
              ).join(' '), 'error');
            };
            
            console.warn = function() {
              originalConsoleWarn.apply(console, arguments);
              logToScreen(Array.from(arguments).map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
              ).join(' '), 'warn');
            };
            
            // Global error handler
            window.onerror = function(message, source, lineno, colno, error) {
              console.error('GLOBAL ERROR:', message);
              console.error('Source:', source);
              console.error('Line:', lineno, 'Column:', colno);
              if (error && error.stack) {
                console.error('Stack:', error.stack);
              }
              
              // Show log automatically on error
              const logContainer = document.getElementById('mobile-error-log');
              if (logContainer) {
                logContainer.style.display = 'block';
              }
              
              // Try to collect additional information about the browser/device
              try {
                console.log('USER AGENT:', navigator.userAgent);
                console.log('SCREEN:', window.innerWidth + 'x' + window.innerHeight);
                console.log('PLATFORM:', navigator.platform);
              } catch (e) {
                console.error('Error collecting device info:', e);
              }
              
              return false;
            };
            
            // Also catch unhandled promise rejections
            window.addEventListener('unhandledrejection', function(event) {
              console.error('UNHANDLED PROMISE REJECTION:', event.reason);
              
              // Show log automatically on error
              const logContainer = document.getElementById('mobile-error-log');
              if (logContainer) {
                logContainer.style.display = 'block';
              }
            });
            
            // Log initial page load
            window.addEventListener('load', function() {
              console.log('PAGE LOADED: ' + window.location.href);
              createLogElement(); // Create the log element on page load
            });
          `
        }} />
      </head>
      <body className="antialiased overflow-x-hidden">
        <ErrorBoundary>
          <MobileCompatibilityCheck>
            <ThemeProvider attribute="class" defaultTheme="light">
              <CookieConsentProvider>
                <div className="relative flex min-h-screen flex-col">
                  <MainNav />
                  <div className="z-[1] relative pt-16 sm:pt-20">
                    <main className="flex-1 w-full">{children}</main>
                  </div>
                  <SiteFooter />
                  <ChatWidgetWrapper />
                  <CookieConsent />
                </div>
              </CookieConsentProvider>
            </ThemeProvider>
          </MobileCompatibilityCheck>
        </ErrorBoundary>
      </body>
    </html>
  )
}



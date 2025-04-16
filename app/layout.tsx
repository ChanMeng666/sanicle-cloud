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
import { MobileFallback } from "@/components/mobile-fallback"
import { Analytics } from "@vercel/analytics/react"

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
        
        {/* RegExp Polyfill - MUST BE FIRST to run before any other code */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                
                // Create a global flag for other scripts to check
                window.__IS_IOS = isIOS;
                
                // Immediately apply RegExp polyfill for iOS
                if (isIOS || isSafari) {
                  // Store the original RegExp constructor
                  const OriginalRegExp = RegExp;
                  
                  // Replace the RegExp constructor with our safe version
                  window.RegExp = function(pattern, flags) {
                    try {
                      // Try to create the regex normally first
                      return new OriginalRegExp(pattern, flags);
                    } catch (e) {
                      if (e instanceof SyntaxError && (e.message || '').includes('group specifier')) {
                        // If it fails with the named groups error, replace named groups with normal capturing groups
                        // Convert (?<name>pattern) to (pattern)
                        if (typeof pattern === 'string') {
                          const safePattern = pattern.replace(/\\(\\?<[^>]+>/g, '(').replace(/\(\?<[^>]+>/g, '(');
                          return new OriginalRegExp(safePattern, flags);
                        }
                      }
                      throw e;
                    }
                  };
                  
                  // Copy properties from original RegExp
                  for (const prop in OriginalRegExp) {
                    if (OriginalRegExp.hasOwnProperty(prop)) {
                      window.RegExp[prop] = OriginalRegExp[prop];
                    }
                  }
                  
                  // Fix prototype chain
                  window.RegExp.prototype = OriginalRegExp.prototype;
                }
                
                // Prevent errors from breaking the page load
                window.addEventListener('error', function(e) {
                  if (e && e.message && e.message.includes('group specifier')) {
                    console.log("Caught RegExp error:", e.message);
                    e.preventDefault();
                    return true;
                  }
                }, true);
                
              } catch (e) {
                console.error("Error in RegExp polyfill:", e);
              }
            })();
          `
        }} />
        
        <script dangerouslySetInnerHTML={{
          __html: `
            // Immediate iOS check - run this before anything else
            (function() {
              try {
                const isIOS = window.__IS_IOS || /iPad|iPhone|iPod/.test(navigator.userAgent);
                
                if (isIOS) {
                  console.log("Mobile browser detected, checking for compatibility...");
                  console.log("Screen size: " + window.innerWidth + " x " + window.innerHeight);
                  console.log("User agent: " + navigator.userAgent);
                }
              } catch (e) {
                console.error("Error in iOS detection:", e);
              }
            })();
          `
        }} />
        
        <script dangerouslySetInnerHTML={{
          __html: `
            // Store original console methods before doing anything
            const originalConsole = {
              log: console.log,
              error: console.error,
              warn: console.warn,
              info: console.info
            };

            // Simple implementation first - just use the original methods
            // This prevents errors during initial load
            console.log = function() { 
              originalConsole.log.apply(console, arguments);
            };
            
            console.error = function() {
              originalConsole.error.apply(console, arguments);
            };
            
            console.warn = function() {
              originalConsole.warn.apply(console, arguments);
            };
            
            // Global error handler - only basic functionality until DOM is ready
            window.onerror = function(message, source, lineno, colno, error) {
              originalConsole.error('GLOBAL ERROR:', message);
              if (error && error.stack) {
                originalConsole.error('Stack:', error.stack);
              }
              return false;
            };
            
            // Wait for DOM to be fully loaded before setting up visual logging
            document.addEventListener('DOMContentLoaded', function() {
              // Only initialize if we have document.body
              if (typeof document === 'undefined' || !document.body) return;

              try {
                let logContainer;
                let logInitialized = false;
                
                function initLogging() {
                  if (logInitialized) return true;
                  if (!document.body) return false;
                  
                  try {
                    logContainer = document.createElement('div');
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
                    
                    logInitialized = true;
                    
                    /* Temporarily commented out the log toggle button
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
                    */
                    return true;
                  } catch (e) {
                    originalConsole.error('Failed to initialize logging UI:', e);
                    return false;
                  }
                }
                
                function safeLogToScreen(message, type = 'info') {
                  // Don't try to log if initialization failed or isn't complete
                  if (!initLogging() || !logContainer) return;
                  
                  try {
                    const logEntry = document.createElement('div');
                    logEntry.style.marginBottom = '5px';
                    logEntry.style.borderLeft = '4px solid ' + (type === 'error' ? 'red' : type === 'warn' ? 'orange' : 'green');
                    logEntry.style.paddingLeft = '10px';
                    
                    // Make timestamp
                    const timestamp = new Date().toISOString().slice(11, 19);
                    logEntry.innerHTML = '<span style="color:#aaa">[' + timestamp + ']</span> ' + message;
                    
                    logContainer.appendChild(logEntry);
                    logContainer.scrollTop = logContainer.scrollHeight;
                  } catch (e) {
                    originalConsole.error('Error writing to log display:', e);
                  }
                }
                
                // Now override the console methods with safe versions
                console.log = function() {
                  originalConsole.log.apply(console, arguments);
                  try {
                    safeLogToScreen(Array.from(arguments).map(arg => 
                      typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
                    ).join(' '));
                  } catch (e) {
                    originalConsole.error('Error in console.log override:', e);
                  }
                };
                
                console.error = function() {
                  originalConsole.error.apply(console, arguments);
                  try {
                    safeLogToScreen(Array.from(arguments).map(arg => 
                      typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
                    ).join(' '), 'error');
                  } catch (e) {
                    originalConsole.error('Error in console.error override:', e);
                  }
                };
                
                console.warn = function() {
                  originalConsole.warn.apply(console, arguments);
                  try {
                    safeLogToScreen(Array.from(arguments).map(arg => 
                      typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
                    ).join(' '), 'warn');
                  } catch (e) {
                    originalConsole.error('Error in console.warn override:', e);
                  }
                };
                
                // Also update our error handlers
                window.onerror = function(message, source, lineno, colno, error) {
                  originalConsole.error('GLOBAL ERROR:', message);
                  originalConsole.error('Source:', source);
                  originalConsole.error('Line:', lineno, 'Column:', colno);
                  
                  try {
                    safeLogToScreen('GLOBAL ERROR: ' + message, 'error');
                    if (error && error.stack) {
                      safeLogToScreen('Stack: ' + error.stack, 'error');
                    }
                    
                    // Try to collect additional information about the browser/device
                    const deviceInfo = {
                      userAgent: navigator.userAgent,
                      screen: window.innerWidth + 'x' + window.innerHeight,
                      platform: navigator.platform
                    };
                    
                    safeLogToScreen('Device info: ' + JSON.stringify(deviceInfo), 'info');
                    
                    // Show log automatically on error
                    if (logContainer) {
                      logContainer.style.display = 'block';
                    }
                  } catch (e) {
                    originalConsole.error('Error in onerror handler:', e);
                  }
                  
                  return false;
                };
                
                // Catch unhandled promise rejections
                window.addEventListener('unhandledrejection', function(event) {
                  try {
                    originalConsole.error('UNHANDLED PROMISE REJECTION:', event.reason);
                    safeLogToScreen('UNHANDLED PROMISE REJECTION: ' + event.reason, 'error');
                    
                    // Show log automatically on error
                    if (logContainer) {
                      logContainer.style.display = 'block';
                    }
                  } catch (e) {
                    originalConsole.error('Error in unhandledrejection handler:', e);
                  }
                });
                
                // Log initial page load
                console.log('PAGE LOADED: ' + window.location.href);
              } catch (e) {
                originalConsole.error('Failed to set up logging system:', e);
              }
            });
          `
        }} />
        
        <script dangerouslySetInnerHTML={{
          __html: `
            // Disable Cookie Consent and AI Chat Widget on mobile devices
            (function() {
              try {
                const isMobile = /iPhone|iPad|iPod|Android|Mobile|webOS|BlackBerry/i.test(navigator.userAgent);
                
                // Set a global flag that can be checked by components
                window.__DISABLE_WIDGETS_ON_MOBILE = isMobile;
                
                if (isMobile) {
                  console.log("Mobile browser detected - disabling cookie consent and chat widget");
                  
                  // Create style element to hide widgets on mobile
                  document.addEventListener('DOMContentLoaded', function() {
                    const style = document.createElement('style');
                    style.textContent = 
                      "@media (max-width: 768px) {" +
                      "  #cookie-consent-container { display: none !important; }" +
                      "  #chat-widget-container { display: none !important; }" +
                      "}";
                    document.head.appendChild(style);
                  });
                }
              } catch (e) {
                console.error("Error in mobile widget detection:", e);
              }
            })();
          `
        }} />
        
        <script dangerouslySetInnerHTML={{
          __html: `
            // Handle chunk loading errors
            window.__NEXT_CHUNK_LOAD_RETRY = function() {
              const originalNextLoad = window.__NEXT_LOAD_CHUNKS__ || {};
              window.__NEXT_LOAD_CHUNKS__ = function(fn) {
                return originalNextLoad(function() {
                  try {
                    return fn.apply(this, arguments);
                  } catch (error) {
                    if (error && 
                        (error.message || '').includes('ChunkLoadError') || 
                        (error.message || '').includes('Loading chunk')) {
                      console.error("Chunk loading error detected:", error);
                      // Attempt to reload the page on chunk error
                      if (window.location) {
                        console.log("Reloading page to recover from chunk error...");
                        window.location.reload();
                      }
                    }
                    throw error;
                  }
                });
              };
            };
            window.__NEXT_CHUNK_LOAD_RETRY();
          `
        }} />
      </head>
      <body className="antialiased overflow-x-hidden">
        <ErrorBoundary>
          <MobileFallback>
            <ThemeProvider attribute="class" defaultTheme="light">
              <CookieConsentProvider>
                <div className="relative flex min-h-screen flex-col">
                  <MainNav />
                  <div className="z-[1] relative pt-16 sm:pt-20">
                    <main className="flex-1 w-full">{children}</main>
                  </div>
                  <SiteFooter />
                  {/* Only render ChatWidgetWrapper on desktop */}
                  <div id="chat-widget-container">
                    <ChatWidgetWrapper />
                  </div>
                  {/* Only render CookieConsent on desktop */}
                  <div id="cookie-consent-container">
                    <CookieConsent />
                  </div>
                </div>
              </CookieConsentProvider>
            </ThemeProvider>
          </MobileFallback>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}



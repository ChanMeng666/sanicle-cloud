"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  
  // Listen for scroll events to change navbar style and set CSS variables
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      // Set scroll offset as CSS variable
      document.documentElement.style.setProperty('--scroll-offset', `${window.scrollY}px`);
      
      // Update header height
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      }
    }
    
    // Initial header height setup
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    }
  }, [])

  // Navigation items - 简化后的导航结构
  const navItems = [
    {
      title: "Platform",
      href: "/platform/overview",
      children: []
    },
    {
      title: "Solutions",
      href: "/solution",
      children: [
        {
          title: "For Employers",
          href: "/solution/employers",
          description: "Explore our implementation process for businesses."
        },
        {
          title: "For Employees",
          href: "/solution/employees",
          description: "Preview our app for employee benefits."
        },
        {
          title: "For Brokers",
          href: "/solution/brokers",
          description: "Learn about our partnership programs."
        }
      ]
    },
    {
      title: "Pricing",
      href: "/pricing",
      children: []
    },
    {
      title: "Company",
      href: "/company",
      children: [
        {
          title: "About Us",
          href: "/company/about",
          description: "Learn about our story and milestones."
        },
        {
          title: "Careers",
          href: "/company/careers",
          description: "Find job opportunities and employee stories."
        }
      ]
    }
  ]

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  // Toggle dropdown menu
  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  return (
    <header ref={headerRef} className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'}`}>
      <div className="container flex h-16 sm:h-20 items-center px-4 sm:px-6">
        <Link href="/" className="font-bold text-2xl text-gradient bg-gradient-to-r from-primary to-primary-light flex-none">
          Sanicle.cloud
        </Link>
        <div className="hidden lg:flex ml-auto items-center gap-1">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.children.length > 0 ? (
                  <button 
                    className="px-4 py-2 text-sm font-medium text-charcoal hover:text-primary hover:bg-primary-pale rounded-md transition-colors flex items-center"
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
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
                      className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                ) : (
                  <Link 
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-charcoal hover:text-primary hover:bg-primary-pale rounded-md transition-colors flex items-center"
                  >
                    {item.title}
                  </Link>
                )}
                {item.children.length > 0 && (
                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-0 mt-2 w-80 rounded-lg shadow-card-hover bg-white ring-1 ring-black/5 transition-all duration-200 ease-in-out z-10 overflow-hidden">
                    <div className="p-2 divide-y divide-gray-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block px-4 py-3 rounded-md hover:bg-primary-pale transition-colors"
                        >
                          <span className="block text-sm font-medium text-charcoal">{child.title}</span>
                          <span className="block mt-1 text-xs text-slate">{child.description}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="ml-6 flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-charcoal hover:text-primary hover:bg-primary-pale">
              <Link href="/demo">Request Demo</Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="lg:hidden ml-auto p-2 text-charcoal hover:text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu - fixed full-screen display with scroll fix */}
      {isMenuOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-0 z-40 bg-white shadow-lg overflow-y-auto h-[calc(100vh-var(--header-height,64px))]" style={{ top: 'var(--header-height, 64px)' }}>
          <div className="container px-4 py-6 pb-24">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <div key={item.title} className="relative border-b border-gray-100 pb-3">
                  {item.children.length > 0 ? (
                    <>
                      <button 
                        className="w-full flex justify-between items-center py-3 text-base font-medium text-charcoal hover:text-primary rounded-md transition-colors"
                        onClick={() => toggleDropdown(item.title)}
                      >
                        {item.title}
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
                          className={`ml-1 h-5 w-5 transition-transform ${
                            activeDropdown === item.title ? "transform rotate-180 text-primary" : ""
                          }`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      {activeDropdown === item.title && (
                        <div className="mt-2 pl-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="block py-2 text-sm hover:text-primary transition-colors"
                              onClick={toggleMenu}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-base font-medium text-charcoal hover:text-primary rounded-md transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-6">
                <Button asChild className="w-full justify-center" onClick={toggleMenu}>
                  <Link href="/demo">Request Demo</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 
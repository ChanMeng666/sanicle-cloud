"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useRouter } from 'next/navigation'

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const router = useRouter()
  
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

  // Navigation items
  const navItems = [
    {
      title: "Platform",
      href: "/platform",
      children: [
        {
          title: "Overview",
          href: "/platform/overview",
          description: "Gain a comprehensive understanding of the Sanicle.cloud platform."
        },
        {
          title: "Benefits",
          href: "/platform/benefits",
          description: "Explore our comprehensive women's health benefits solutions."
        },
        {
          title: "Features",
          href: "/platform/features",
          description: "Explore the full suite of features available on our platform."
        },
        {
          title: "Security",
          href: "/platform/security",
          description: "Learn about our robust security measures to protect sensitive health data."
        },
        {
          title: "Integration",
          href: "/platform/integration",
          description: "Discover how seamlessly our platform integrates with your existing systems."
        }
      ]
    },
    {
      title: "Solutions",
      href: "/solution",
      children: [
        {
          title: "For Employers",
          href: "/solution/employers",
          description: "Tailored solutions for companies of all sizes to improve workplace health."
        },
        {
          title: "For Employees",
          href: "/solution/employees",
          description: "Connect with employer networks and expand your women's health services."
        },
        {
          title: "For Brokers",
          href: "/solution/brokers",
          description: "Add innovative menstrual health offerings to your benefits portfolio."
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
          description: "Learn about our mission, values, and the team behind Sanicle.cloud."
        },
        {
          title: "Careers",
          href: "/company/careers",
          description: "Join our team and help revolutionize women's workplace health."
        },
        {
          title: "Blog",
          href: "/company/blog",
          description: "Read the latest insights on women's health, workplace wellness, and more."
        },
        {
          title: "Contact",
          href: "/company/contact",
          description: "Get in touch with our team for questions, demos, or partnerships."
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

  // Handle pricing click
  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/pricing')
    if (isMenuOpen) {
      toggleMenu()
    }
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
                {item.title === "Pricing" ? (
                  <a 
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-charcoal hover:text-primary hover:bg-primary-pale rounded-md transition-colors flex items-center pricing-link"
                    onClick={handlePricingClick}
                  >
                    {item.title}
                  </a>
                ) : item.children.length > 0 ? (
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
                    className="px-4 py-2 text-sm font-medium text-charcoal hover:text-primary hover:bg-primary-pale rounded-md transition-colors flex items-center pricing-link"
                    prefetch={true}
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
            <Button variant="ghost" className="text-charcoal hover:text-primary hover:bg-primary-pale">
              Log in
            </Button>
            <Link href="/demo">
              <Button variant="outline" className="text-charcoal border-primary hover:bg-primary-pale">
                Request Demo
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary hover:to-secondary text-white rounded-md shadow-button hover:shadow-button-hover">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
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
                  {item.title === "Pricing" ? (
                    <a 
                      href="#"
                      className="w-full block py-3 text-base font-medium text-charcoal hover:text-primary rounded-md transition-colors pricing-link-mobile"
                      onClick={handlePricingClick}
                    >
                      {item.title}
                    </a>
                  ) : item.children.length > 0 ? (
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
                  ) : (
                    <Link 
                      href={item.href}
                      className="w-full block py-3 text-base font-medium text-charcoal hover:text-primary rounded-md transition-colors pricing-link-mobile"
                      onClick={toggleMenu}
                      prefetch={true}
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.children.length > 0 && activeDropdown === item.title && (
                    <div className="mt-3 ml-4 space-y-3 max-h-60 overflow-y-auto bg-primary-pale/30 p-3 rounded-md">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block py-2 border-l-2 border-primary pl-4 hover:bg-white/80 rounded-r-md transition-all"
                          onClick={toggleMenu}
                        >
                          <span className="block text-sm font-medium text-charcoal">{child.title}</span>
                          <span className="block mt-1 text-xs text-slate">{child.description}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-8 flex flex-col space-y-4 pb-16">
              <Button variant="outline" className="w-full justify-center py-5 text-charcoal border-primary hover:bg-primary-pale">
                Log in
              </Button>
              <Link href="/demo" className="w-full" onClick={toggleMenu}>
                <Button variant="outline" className="w-full justify-center py-5 text-charcoal border-primary hover:bg-primary-pale">
                  Request Demo
                </Button>
              </Link>
              <Button className="w-full justify-center py-5 bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary hover:to-secondary text-white shadow-button">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 
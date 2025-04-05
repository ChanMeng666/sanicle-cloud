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
    <header ref={headerRef} className={`sticky top-0 z-[9999] w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'}`}>
      {/* 添加背景叶片装饰 */}
      <div className="absolute top-0 right-0 -mr-4 -mt-6 opacity-5 hidden lg:block">
        <img src="/logo/leave-green.svg" alt="" className="w-20 h-20 transform rotate-45" />
      </div>
      <div className="absolute bottom-0 left-0 -ml-3 -mb-6 opacity-5 hidden lg:block">
        <img src="/logo/leave-pink.svg" alt="" className="w-16 h-16 transform -rotate-12" />
      </div>
      
      <div className="container flex h-16 sm:h-20 items-center px-4 sm:px-6 relative">
        <Link href="/" className="flex-none relative">
          {/* 为logo添加叶片背景装饰 */}
          <div className="absolute -left-3 -bottom-3 opacity-10">
            <img src="/logo/leave-green.svg" alt="" className="w-12 h-12 transform -rotate-12" />
          </div>
          <img src="/logo/sanicle_logo.svg" alt="Sanicle.cloud Logo" className="h-10 sm:h-12 relative z-10" />
        </Link>
        <div className="hidden lg:flex ml-auto items-center gap-1">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative group" style={{ isolation: 'isolate' }}>
                {item.title === "Pricing" ? (
                  <a 
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-neutral-800 hover:text-primary hover:bg-teal-50 rounded-md transition-colors flex items-center pricing-link"
                    onClick={handlePricingClick}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-neutral-800 hover:text-primary hover:bg-teal-50 rounded-md transition-colors flex items-center"
                  >
                    {item.title}
                    {item.children.length > 0 && (
                      <span className="ml-1">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-200 group-hover:rotate-180">
                          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    )}
                  </Link>
                )}
                {item.children.length > 0 && (
                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-1/2 transform -translate-x-1/2 mt-1 w-80 rounded-lg shadow-card-hover bg-white ring-1 ring-black/5 transition-all duration-200 ease-in-out z-[9990] overflow-hidden">
                    <div className="p-2 divide-y divide-gray-50 relative">
                      {/* 叶片装饰 */}
                      <div className="absolute top-0 right-0 opacity-5">
                        <img src="/logo/leave-green.svg" alt="" className="w-16 h-16 transform rotate-45" />
                      </div>
                      <div className="absolute bottom-0 left-0 opacity-5">
                        <img src="/logo/leave-pink.svg" alt="" className="w-12 h-12 transform -rotate-12" />
                      </div>
                      
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block px-4 py-3 rounded-md hover:bg-teal-50 transition-colors relative z-10 group"
                        >
                          <div className="flex items-center">
                            <div className="w-6 h-6 relative mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-full h-full" />
                            </div>
                            <div>
                              <span className="block text-sm font-medium text-neutral-800">{child.title}</span>
                              <span className="block mt-1 text-xs text-neutral-500">{child.description}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="ml-6 flex items-center space-x-4">
            <Button variant="ghost" className="text-neutral-800 hover:text-primary hover:bg-teal-50 relative group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <img src="/logo/leave-white.svg" alt="" className="w-full h-full" />
              </div>
              <span className="relative z-10">Log in</span>
            </Button>
            <Link href="/demo">
              <Button variant="outline" className="text-neutral-800 border-primary hover:bg-teal-50 relative group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <img src="/logo/leave-green.svg" alt="" className="w-full h-full" />
                </div>
                <span className="relative z-10">Request Demo</span>
              </Button>
            </Link>
            <Link href="/demo">
              <Button className="bg-primary hover:bg-teal-700 text-white group relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <img src="/logo/leave-white.svg" alt="" className="w-full h-full" />
                </div>
                <span className="relative z-10 mr-2">Get Started</span>
                <ArrowRight className="h-4 w-4 relative z-10" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="ml-auto flex items-center lg:hidden">
          <Link href="/demo">
            <Button className="mr-2 bg-primary hover:bg-teal-700 text-white text-sm hidden sm:flex">
              <span className="mr-1">Get Started</span>
              <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
          <Button
            onClick={toggleMenu}
            variant="ghost"
            className="text-neutral-800 p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-full h-screen bg-white lg:hidden pt-6 pb-20 overflow-y-auto z-[9990]">
            <div className="px-4 sm:px-6">
              <nav className="grid gap-y-8 mb-8">
                {navItems.map((item) => (
                  <div key={item.title} className="relative group">
                    <div
                      className="flex items-center justify-between py-2 -mx-3 px-3 rounded-md text-neutral-800 hover:bg-teal-50"
                      onClick={() => toggleDropdown(item.title)}
                    >
                      <div className="flex items-center">
                        <span className="text-base font-medium">{item.title}</span>
                      </div>
                      {item.children.length > 0 && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transform transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`}>
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    
                    {item.children.length > 0 && activeDropdown === item.title && (
                      <div className="mt-2 pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block py-2 text-neutral-600 hover:text-primary"
                            onClick={toggleMenu}
                          >
                            <div className="flex items-center">
                              <div className="w-4 h-4 relative mr-2 opacity-70">
                                <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-full h-full" />
                              </div>
                              <span>{child.title}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              <div className="pt-6 border-t border-gray-200 flex flex-col space-y-4">
                <Button variant="outline" className="w-full justify-center text-neutral-800 border-primary">
                  Log in
                </Button>
                <Link href="/demo" className="w-full">
                  <Button variant="default" className="w-full justify-center bg-primary hover:bg-teal-700 text-white">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 
"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  
  // 监听滚动事件改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 导航项
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

  // 切换菜单
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  // 切换下拉菜单
  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'}`}>
      <div className="container flex h-16 sm:h-20 items-center px-4 sm:px-6">
        <Link href="/" className="font-bold text-2xl text-gradient bg-gradient-to-r from-[#167d83] to-[#22c0c7] flex-none">
          Sanicle.cloud
        </Link>
        <div className="hidden lg:flex ml-auto items-center gap-1">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <button 
                  className="px-4 py-2 text-sm font-medium text-[#2c3e50] hover:text-[#167d83] hover:bg-[#e6f5f6] rounded-md transition-colors flex items-center"
                  onClick={() => toggleDropdown(item.title)}
                >
                  {item.title}
                  {item.children.length > 0 && (
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
                  )}
                </button>
                {item.children.length > 0 && (
                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-0 mt-2 w-80 rounded-lg shadow-xl bg-white ring-1 ring-black/5 transition-all duration-200 ease-in-out z-10 overflow-hidden">
                    <div className="p-2 divide-y divide-gray-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block px-4 py-3 rounded-md hover:bg-[#e6f5f6] transition-colors"
                        >
                          <span className="block text-sm font-medium text-[#2c3e50]">{child.title}</span>
                          <span className="block mt-1 text-xs text-[#7f8c8d]">{child.description}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="ml-6 flex items-center space-x-4">
            <Button variant="ghost" className="text-[#2c3e50] hover:text-[#167d83] hover:bg-[#e6f5f6]">
              Log in
            </Button>
            <Link href="/demo">
              <Button variant="outline" className="text-[#2c3e50] border-[#167d83] hover:bg-[#e6f5f6]">
                Request Demo
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-[#EE4C23] to-[#f07457] hover:from-[#d43d18] hover:to-[#e55a3d] text-white rounded-md">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* 移动端菜单按钮 */}
        <button
          className="lg:hidden ml-auto p-2 text-[#2c3e50] hover:text-[#167d83] focus:outline-none"
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
      
      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-sm overflow-y-auto pb-20">
          <div className="container px-4 py-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.title} className="relative border-b border-gray-100 pb-4">
                  <button 
                    className="w-full flex justify-between items-center py-2 text-base font-medium text-[#2c3e50]"
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    {item.children.length > 0 && (
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
                          activeDropdown === item.title ? "transform rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </button>
                  {item.children.length > 0 && activeDropdown === item.title && (
                    <div className="mt-3 ml-4 space-y-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block py-2 border-l-2 border-[#e6f5f6] pl-4"
                          onClick={toggleMenu}
                        >
                          <span className="block text-sm font-medium text-[#2c3e50]">{child.title}</span>
                          <span className="block mt-1 text-xs text-[#7f8c8d]">{child.description}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-8 flex flex-col space-y-4">
              <Button variant="outline" className="w-full justify-center py-6 text-[#2c3e50] border-[#167d83] hover:bg-[#e6f5f6]">
                Log in
              </Button>
              <Link href="/demo" className="w-full" onClick={toggleMenu}>
                <Button variant="outline" className="w-full justify-center py-6 text-[#2c3e50] border-[#167d83] hover:bg-[#e6f5f6]">
                  Request Demo
                </Button>
              </Link>
              <Button className="w-full justify-center py-6 bg-gradient-to-r from-[#EE4C23] to-[#f07457] hover:from-[#d43d18] hover:to-[#e55a3d] text-white">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 
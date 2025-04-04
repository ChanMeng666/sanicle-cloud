"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

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
          title: "For Healthcare Providers",
          href: "/solution/healthcare-providers",
          description: "Connect with employer networks and expand your women's health services."
        },
        {
          title: "For Benefits Brokers",
          href: "/solution/benefits-brokers",
          description: "Add innovative menstrual health offerings to your benefits portfolio."
        },
        {
          title: "For Government",
          href: "/solution/government",
          description: "Implement comprehensive women's health initiatives for public sector employees."
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
  }

  // 切换下拉菜单
  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="font-bold text-2xl text-[#167d83] flex-none">
          Sanicle.cloud
        </Link>
        <div className="hidden md:flex ml-auto items-center space-x-1">
          <nav className="flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <button 
                  className="px-4 py-2 text-sm font-medium text-[#2c3e50] hover:text-[#167d83] hover:bg-[#e6f5f6] rounded-md transition-colors"
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
                      className="ml-1 h-4 w-4 inline-block"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </button>
                {item.children.length > 0 && (
                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out z-10">
                    <div className="px-2 py-3 divide-y divide-gray-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block px-4 py-2 rounded-md hover:bg-[#e6f5f6] transition-colors"
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
            <Button className="bg-[#EE4C23] hover:bg-[#d43d18] text-white rounded-md">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="md:hidden ml-auto">
          <button
            className="p-2 text-[#2c3e50] hover:text-[#167d83]"
            onClick={toggleMenu}
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
              className={isMenuOpen ? "hidden" : "block"}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
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
              className={isMenuOpen ? "block" : "hidden"}
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 py-4 px-4 sm:px-6">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                <button 
                  className="w-full flex justify-between items-center py-2 text-sm font-medium text-[#2c3e50]"
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
                      className={`ml-1 h-4 w-4 transition-transform ${
                        activeDropdown === item.title ? "transform rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </button>
                {item.children.length > 0 && activeDropdown === item.title && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="block py-2"
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
          <div className="mt-6 flex flex-col space-y-4">
            <Button variant="ghost" className="justify-center text-[#2c3e50]">
              Log in
            </Button>
            <Button className="justify-center bg-[#EE4C23] hover:bg-[#d43d18] text-white">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
} 
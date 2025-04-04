"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function MainNav() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(dropdown)
    }
  }

  const navItems = [
    {
      title: "Solution",
      dropdown: true,
      items: [
        { title: "Employers", href: "/solution/employers" },
        { title: "Employees", href: "/solution/employees" },
        { title: "Brokers", href: "/solution/brokers" },
      ],
    },
    {
      title: "Platform",
      dropdown: true,
      items: [
        { title: "Overview", href: "/platform/overview" },
        { title: "Benefits", href: "/platform/benefits" },
      ],
    },
    {
      title: "Company",
      dropdown: true,
      items: [
        { title: "About", href: "/company/about" },
        { title: "Careers", href: "/company/careers" },
      ],
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center">
          <span className="text-xl font-bold text-[#167d83]">Sanicle.cloud</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-16 z-50 bg-white p-4 overflow-y-auto">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item, i) => (
                    <div key={i} className="border-b pb-2">
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.title)}
                            className="flex w-full items-center justify-between py-2 text-[#2c3e50]"
                          >
                            {item.title}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${openDropdown === item.title ? "rotate-180" : ""}`}
                            />
                          </button>
                          {openDropdown === item.title && (
                            <div className="ml-4 mt-2 flex flex-col space-y-2">
                              {item.items?.map((subItem, j) => (
                                <Link
                                  key={j}
                                  href={subItem.href}
                                  className="py-1 text-[#7f8c8d] hover:text-[#167d83]"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          className="block py-2 text-[#2c3e50] hover:text-[#167d83]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 space-y-2">
                    <Button variant="outline" className="w-full border-[#167d83] text-[#167d83]">
                      Demo
                    </Button>
                    <Button className="w-full bg-[#EE4C23] hover:bg-[#d43d18] text-white">Get Started</Button>
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          <>
            <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item, i) => (
                <div key={i} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="flex items-center text-[#2c3e50] hover:text-[#167d83]"
                    >
                      {item.title}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.title ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link href={item.href || "#"} className="text-[#2c3e50] hover:text-[#167d83]">
                      {item.title}
                    </Link>
                  )}

                  {item.dropdown && openDropdown === item.title && (
                    <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5">
                      {item.items?.map((subItem, j) => (
                        <Link
                          key={j}
                          href={subItem.href}
                          className="block rounded-md px-3 py-2 text-[#2c3e50] hover:bg-[#e6f5f6]"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="ml-auto flex items-center space-x-4">
              <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                Demo
              </Button>
              <Button className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">Get Started</Button>
            </div>
          </>
        )}
      </div>
    </header>
  )
}


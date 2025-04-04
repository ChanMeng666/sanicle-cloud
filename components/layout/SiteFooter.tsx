"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#f8f9fa] py-12 md:py-16 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="font-bold text-2xl text-[#167d83]">
              Sanicle.cloud
            </Link>
            <p className="text-[#7f8c8d] text-sm">
              Revolutionizing workplace wellbeing through comprehensive menstrual health support.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#7f8c8d] hover:text-[#167d83]">
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-[#7f8c8d] hover:text-[#167d83]">
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
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </Link>
              <Link href="#" className="text-[#7f8c8d] hover:text-[#167d83]">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#2c3e50] mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/platform/overview" className="text-[#7f8c8d] hover:text-[#167d83] text-sm">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/platform/features" className="text-[#7f8c8d] hover:text-[#167d83] text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/platform/security" className="text-[#7f8c8d] hover:text-[#167d83] text-sm">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/platform/integration" className="text-[#7f8c8d] hover:text-[#167d83] text-sm">
                  Integration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#2c3e50] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company/about" className="text-[#7f8c8d] hover:text-[#167d83] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-[#7f8c8d] hover:text-[#167d83] text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/blog" className="text-[#7f8c8d] hover:text-[#167d83] text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-[#7f8c8d] hover:text-[#167d83] text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#2c3e50] mb-4">Subscribe</h3>
            <p className="text-[#7f8c8d] text-sm mb-4">
              Stay up to date with the latest news and updates from Sanicle.cloud.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border-gray-200 focus:border-[#167d83] focus:ring-[#167d83]" 
              />
              <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#7f8c8d] text-sm">
            © 2023 Sanicle.cloud. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-[#7f8c8d] hover:text-[#167d83] text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[#7f8c8d] hover:text-[#167d83] text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies-policy" className="text-[#7f8c8d] hover:text-[#167d83] text-sm">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
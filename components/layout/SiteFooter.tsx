"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full bg-gradient-to-b from-[#f8f9fa] to-white py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        {/* 顶部部分 - 品牌和订阅 */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 pb-12 border-b border-gray-200">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <span className="font-bold text-2xl bg-gradient-to-r from-[#167d83] to-[#22c0c7] bg-clip-text text-transparent">Sanicle.cloud</span>
            </Link>
            <p className="text-[#7f8c8d] mt-4 text-sm leading-relaxed">
              Revolutionizing workplace wellbeing through comprehensive menstrual health support for modern organizations.
            </p>
          </div>
          
          <div className="w-full md:w-auto md:min-w-[320px]">
            <h3 className="font-semibold text-[#2c3e50] mb-4 text-lg">Subscribe to our newsletter</h3>
            <p className="text-[#7f8c8d] text-sm mb-4">
              Stay updated with the latest insights and news.
            </p>
            <div className="flex space-x-2">
              <div className="relative flex-grow">
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] pr-10 rounded-lg" 
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Mail className="h-4 w-4 text-[#7f8c8d]" />
                </div>
              </div>
              <Button className="bg-gradient-to-r from-[#167d83] to-[#22c0c7] hover:from-[#0e5a5f] hover:to-[#17a0a6] text-white flex-shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* 中间部分 - 链接 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-[#2c3e50] mb-5 text-lg">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/platform/overview" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/platform/features" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/platform/security" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  Security
                </Link>
              </li>
              <li>
                <Link href="/platform/integration" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  Integration
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#2c3e50] mb-5 text-lg">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solution/employers" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/solution/employees" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  For Employees
                </Link>
              </li>
              <li>
                <Link href="/solution/brokers" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  For Brokers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#2c3e50] mb-5 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company/about" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/blog" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#2c3e50] mb-5 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/help-center" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/resources/testimonials" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-[#7f8c8d] hover:text-[#167d83] text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-[#7f8c8d] rounded-full inline-block mr-2"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 社交媒体和联系信息 */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="mb-6 md:mb-0">
            <p className="text-[#7f8c8d] text-sm">
              © {currentYear} Sanicle.cloud. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-[#7f8c8d] hover:text-[#167d83] transition-colors duration-200">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#7f8c8d] hover:text-[#167d83] transition-colors duration-200">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#7f8c8d] hover:text-[#167d83] transition-colors duration-200">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#7f8c8d] hover:text-[#167d83] transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="/privacy-policy" className="text-[#7f8c8d] hover:text-[#167d83] text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-[#7f8c8d] hover:text-[#167d83] text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies-policy" className="text-[#7f8c8d] hover:text-[#167d83] text-sm transition-colors duration-200">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
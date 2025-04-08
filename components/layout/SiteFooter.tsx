"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react"
import { ManageCookies } from "@/components/cookie/ManageCookies"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full bg-gradient-to-b from-tertiary to-white py-12 lg:py-20 relative overflow-hidden">
      {/* 添加叶片装饰背景 */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-64 h-64 transform rotate-45" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 hidden lg:block">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-80 h-80 transform -rotate-12" />
      </div>
      <div className="absolute bottom-10 right-1/4 opacity-5 hidden lg:block">
        <img src="/logo/leave-coral.svg" alt="Leaf decoration" className="w-32 h-32 transform rotate-90" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Top section - Brand and Subscribe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-200">
          <div className="max-w-sm relative">
            <Link href="/" className="inline-block relative">
              <div className="absolute -left-5 -bottom-5 opacity-20">
                <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-16 h-16 transform -rotate-12" />
              </div>
              <img src="/logo/sanicle_logo.svg" alt="Sanicle.cloud Logo" className="h-20 relative z-10" />
            </Link>
            <p className="text-neutral-600 mt-4 text-sm leading-relaxed">
              Revolutionizing workplace wellbeing through comprehensive menstrual health support for modern organizations.
            </p>
          </div>
          
          <div className="w-full md:max-w-md ml-auto relative">
            <div className="absolute top-0 right-0 opacity-10 hidden md:block">
              <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-20 h-20 transform rotate-45" />
            </div>
            <h3 className="font-semibold text-neutral-800 mb-4 text-lg">Subscribe to our newsletter</h3>
            <p className="text-neutral-600 text-sm mb-4">
              Stay updated with the latest insights and news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <div className="relative flex-grow">
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white border-gray-200 focus:border-primary focus:ring-primary pr-10 rounded-lg w-full" 
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Mail className="h-4 w-4 text-neutral-400" />
                </div>
              </div>
              <Button className="bg-primary hover:bg-teal-700 text-white flex-shrink-0 shadow-button group relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <img src="/logo/leave-white.svg" alt="" className="w-full h-full object-cover" />
                </div>
                <span className="relative z-10">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Middle section - Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="relative">
            <div className="absolute -left-3 -top-3 opacity-10">
              <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-12 h-12 transform -rotate-12" />
            </div>
            <h3 className="font-semibold text-neutral-800 mb-5 text-lg">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/platform/overview" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/platform/features" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/platform/security" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Security
                </Link>
              </li>
              <li>
                <Link href="/platform/integration" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Integration
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -left-3 -top-3 opacity-10">
              <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-12 h-12 transform -rotate-12" />
            </div>
            <h3 className="font-semibold text-neutral-800 mb-5 text-lg">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solution/employers" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/solution/employees" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  For Employees
                </Link>
              </li>
              <li>
                <Link href="/solution/brokers" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  For Brokers
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -left-3 -top-3 opacity-10">
              <img src="/logo/leave-white.svg" alt="Leaf decoration" className="w-12 h-12 transform -rotate-12" />
            </div>
            <h3 className="font-semibold text-neutral-800 mb-5 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company/about" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/blog" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -left-3 -top-3 opacity-10">
              <img src="/logo/leave-black.svg" alt="Leaf decoration" className="w-12 h-12 transform -rotate-12" />
            </div>
            <h3 className="font-semibold text-neutral-800 mb-5 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/help-center" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/resources/testimonials" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-neutral-600 hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-teal-300 rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social media and contact information */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-10">
            <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-16 h-16" />
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Sanicle.cloud. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            <Link href="#" className="text-neutral-500 hover:text-primary transition-colors duration-200">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-primary transition-colors duration-200">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-primary transition-colors duration-200">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-primary transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        
        {/* Legal links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-8 mt-8 text-sm text-neutral-500">
          <Link href="/legal/privacy" className="hover:text-primary transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/legal/terms" className="hover:text-primary transition-colors duration-200">
            Terms of Service
          </Link>
          <Link 
            href="/legal/cookies" 
            className="hover:text-primary transition-colors duration-200 flex items-center gap-1"
          >
            <span>Cookie Policy</span>
          </Link>
          <ManageCookies />
        </div>

        {/* Prominent Cookie Settings Banner */}
        <div className="mt-6 p-4 bg-muted/20 rounded-lg flex flex-wrap gap-4 justify-between items-center">
          <div className="text-sm text-neutral-600">
            <span className="font-medium">Cookie Settings:</span> You can customize which cookies you allow us to use. Essential cookies cannot be disabled.
          </div>
          <Link 
            href="/legal/cookies" 
            className="flex items-center gap-1 text-primary hover:text-primary/90 transition-colors duration-200 text-sm"
          >
            <span>View Cookie Policy</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </Link>
        </div>
      </div>
    </footer>
  )
} 
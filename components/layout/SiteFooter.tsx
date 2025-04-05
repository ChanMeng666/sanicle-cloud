"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full bg-gradient-to-b from-beige-light to-white py-12 lg:py-20 relative overflow-hidden">
      {/* 添加叶片装饰背景 */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-64 h-64 transform rotate-45" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 hidden lg:block">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-80 h-80 transform -rotate-12" />
      </div>
      <div className="absolute bottom-10 right-1/4 opacity-5 hidden lg:block">
        <img src="/logo/leave-black.svg" alt="Leaf decoration" className="w-32 h-32 transform rotate-90" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Top section - Brand and Subscribe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-200">
          <div className="max-w-sm relative">
            <Link href="/" className="inline-block relative">
              <div className="absolute -left-5 -bottom-5 opacity-20">
                <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-16 h-16 transform -rotate-12" />
              </div>
              <img src="/logo/sanicle_logo.svg" alt="Sanicle.cloud Logo" className="h-12 relative z-10" />
            </Link>
            <p className="text-slate mt-4 text-sm leading-relaxed">
              Revolutionizing workplace wellbeing through comprehensive menstrual health support for modern organizations.
            </p>
          </div>
          
          <div className="w-full md:max-w-md ml-auto relative">
            <div className="absolute top-0 right-0 opacity-10 hidden md:block">
              <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-20 h-20 transform rotate-45" />
            </div>
            <h3 className="font-semibold text-charcoal mb-4 text-lg">Subscribe to our newsletter</h3>
            <p className="text-slate text-sm mb-4">
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
                  <Mail className="h-4 w-4 text-slate" />
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-deep hover:to-primary text-white flex-shrink-0 shadow-button group relative">
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
            <h3 className="font-semibold text-charcoal mb-5 text-lg">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/platform/overview" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/platform/features" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/platform/security" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Security
                </Link>
              </li>
              <li>
                <Link href="/platform/integration" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
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
            <h3 className="font-semibold text-charcoal mb-5 text-lg">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solution/employers" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/solution/employees" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  For Employees
                </Link>
              </li>
              <li>
                <Link href="/solution/brokers" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
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
            <h3 className="font-semibold text-charcoal mb-5 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company/about" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/blog" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
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
            <h3 className="font-semibold text-charcoal mb-5 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/help-center" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/resources/testimonials" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-pink.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
                    <img src="/logo/leave-green.svg" alt="" className="absolute inset-0 w-3 h-3 -ml-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200 group">
                  <div className="relative h-1 w-1 mr-2">
                    <div className="h-1 w-1 bg-primary-light rounded-full absolute inset-0 transition-all duration-300 group-hover:opacity-0"></div>
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
            <p className="text-slate text-sm">
              © {currentYear} Sanicle.cloud. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-slate hover:text-primary transition-colors duration-200 relative group">
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <img src="/logo/leave-green.svg" alt="" className="w-full h-full" />
                </div>
                <Facebook className="h-5 w-5 relative z-10" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate hover:text-primary transition-colors duration-200 relative group">
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <img src="/logo/leave-pink.svg" alt="" className="w-full h-full" />
                </div>
                <Twitter className="h-5 w-5 relative z-10" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate hover:text-primary transition-colors duration-200 relative group">
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <img src="/logo/leave-green.svg" alt="" className="w-full h-full" />
                </div>
                <Instagram className="h-5 w-5 relative z-10" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate hover:text-primary transition-colors duration-200 relative group">
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <img src="/logo/leave-pink.svg" alt="" className="w-full h-full" />
                </div>
                <Linkedin className="h-5 w-5 relative z-10" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-0">
              <Link href="/privacy-policy" className="text-slate hover:text-primary text-sm transition-colors duration-200 relative group">
                <span className="relative z-10">Privacy Policy</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/terms-of-service" className="text-slate hover:text-primary text-sm transition-colors duration-200 relative group">
                <span className="relative z-10">Terms of Service</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/cookies-policy" className="text-slate hover:text-primary text-sm transition-colors duration-200 relative group">
                <span className="relative z-10">Cookies Policy</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full bg-gradient-to-b from-beige to-white py-12 lg:py-20">
      <div className="container px-4 md:px-6">
        {/* Top section - Brand and Subscribe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-200">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Sanicle.cloud</span>
            </Link>
            <p className="text-slate mt-4 text-sm leading-relaxed">
              Revolutionizing workplace wellbeing through comprehensive menstrual health support for modern organizations.
            </p>
          </div>
          
          <div className="w-full md:max-w-md ml-auto">
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
              <Button variant="default" className="shadow-button">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Middle section - Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-charcoal mb-5 text-lg">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/platform/overview" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/platform/features" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/platform/security" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  Security
                </Link>
              </li>
              <li>
                <Link href="/platform/integration" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  Integration
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-charcoal mb-5 text-lg">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solution/employers" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/solution/employees" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  For Employees
                </Link>
              </li>
              <li>
                <Link href="/solution/brokers" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  For Brokers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-charcoal mb-5 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company/about" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/blog" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-charcoal mb-5 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/help-center" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/resources/testimonials" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-slate hover:text-primary text-sm flex items-center transition-colors duration-200">
                  <span className="h-1 w-1 bg-primary-light rounded-full inline-block mr-2"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social media and contact information */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="mb-6 md:mb-0">
            <p className="text-slate text-sm">
              © {currentYear} Sanicle.cloud. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-slate hover:text-primary transition-colors duration-200">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate hover:text-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate hover:text-primary transition-colors duration-200">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-0">
              <Link href="/privacy-policy" className="text-slate hover:text-primary text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-slate hover:text-primary text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies-policy" className="text-slate hover:text-primary text-sm transition-colors duration-200">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
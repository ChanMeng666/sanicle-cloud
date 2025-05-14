"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Partners() {
  return (
    <section id="partnerships" className="w-full py-16 md:py-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-96 h-96 opacity-10 blur-xl animate-float-delay" />
      </div>
      <div className="absolute bottom-1/4 left-1/4">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-96 h-96 opacity-10 blur-xl animate-float" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Strategic Partnerships
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Trusted Partners</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to bring you the best solutions and services.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* IBM Partner Badge Display */}
          <div className="w-full lg:w-2/5">
            <div className="aspect-square flex items-center justify-center p-10 rounded-2xl shadow-lg bg-gradient-to-br from-primary to-primary-light">
              <img 
                src="/logo/IBM_Partner_Plus_silver_partner_white.svg"
                alt="IBM Partner Plus Silver Partner Badge"
                className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Partnership description */}
          <div className="w-full lg:w-3/5 space-y-6 mt-8 lg:mt-0">
            <div className="text-xl md:text-2xl font-bold text-primary">
              IBM Partner Plus Silver Tier
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
              Proud IBM Partner Plus Silver Member
            </h3>
            
            <p className="text-slate-600">
              Sanicle.cloud has achieved the Silver tier in IBM Partner Plus™, recognizing our expertise and commitment to delivering exceptional solutions powered by IBM technology. This partnership enables us to provide our clients with cutting-edge AI and cloud capabilities that enhance our menstrual health management platform.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700">Access to advanced IBM AI technology</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700">Enhanced security and data protection</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700">Improved cloud infrastructure scalability</span>
              </li>
            </ul>
            
            <div className="pt-4">
              <Link href="/platform/overview">
                <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">
                  Explore Our Platform <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import { TechnicalSpecsSection } from "@/components/platform/TechnicalSpecsSection"
import { CtaSection } from "@/components/platform/CtaSection"

export default function PlatformSecurityPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
          Platform <span className="text-[#167d83]">Security</span>
        </h1>
        <p className="text-lg text-[#7f8c8d] max-w-3xl">
          Learn how Sanicle.cloud protects your data security, ensuring your health information always receives the highest level of protection.
        </p>
        
        {/* Compliance Badges */}
        {/* <div className="flex flex-wrap items-center gap-4 mt-6 mb-8">
          <img 
            src="/logo/hipaa-compliance.svg" 
            alt="HIPAA Compliant" 
            className="h-20 md:h-16 w-auto"
          />
        </div> */}
      </div>
      
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50] mb-4">
                Security-First Design Philosophy
              </h2>
              <p className="text-[#7f8c8d] mb-6">
                The core principle behind building Sanicle.cloud is ensuring your health data security. From underlying architecture to user interface,
                security permeates every aspect of our platform.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[#2c3e50]">HIPAA compliant, ensuring medical data protection</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[#2c3e50]">SOC 2 Type II certified infrastructure</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[#2c3e50]">End-to-end encryption for all data</span>
                </li>
              </ul>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#167d83] to-[#22c0c7] rounded-lg opacity-10 blur-lg transform rotate-2"></div>
              <img
                src="/images/Security.png"
                alt="Data Security"
                className="relative z-10 rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <TechnicalSpecsSection />
      <CtaSection />
    </main>
  )
} 
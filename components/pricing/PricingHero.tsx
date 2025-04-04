"use client"

import { useState } from "react"

// Custom pricing toggle component
export const PricingToggle = ({
  onToggle,
}: {
  onToggle: (isAnnual: boolean) => void
}) => {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleToggle = () => {
    setIsAnnual(!isAnnual)
    onToggle(!isAnnual)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-4">
      <span className={`text-sm font-medium transition-colors duration-200 ${!isAnnual ? "text-primary font-semibold" : "text-slate-500"}`}>Monthly</span>
      <button
        onClick={handleToggle}
        className="relative w-16 h-8 bg-primary-pale rounded-full p-1 transition-colors duration-300 shadow-inner"
        aria-label={isAnnual ? "Switch to monthly billing" : "Switch to annual billing"}
      >
        <span className="sr-only">{isAnnual ? "Switch to monthly billing" : "Switch to annual billing"}</span>
        <div
          className={`absolute top-1 w-6 h-6 bg-primary rounded-full shadow transition-transform duration-300 ${
            isAnnual ? "translate-x-8" : "translate-x-0"
          }`}
        ></div>
      </button>
      <div className="flex items-center">
        <span className={`text-sm font-medium transition-colors duration-200 ${isAnnual ? "text-primary font-semibold" : "text-slate-500"}`}>Annual</span>
        <span className="ml-2 text-xs font-medium text-white bg-secondary px-2 py-1 rounded-full shadow-sm">Save 20%</span>
      </div>
    </div>
  )
}

export function PricingHero({ onToggle }: { onToggle: (isAnnual: boolean) => void }) {
  return (
    <section className="w-full py-16 md:py-28 relative overflow-hidden">
      {/* Geometric background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-pale/20"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-primary-light/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="inline-block px-4 py-1.5 rounded-full bg-primary-pale text-primary text-sm font-medium mb-6 shadow-sm"
            data-aos="fade-down" 
            data-aos-delay="100"
          >
            Transparent Pricing for Every Business
          </div>

          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light mb-8"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Simple Plans for Your Organization
          </h1>

          <p 
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            Choose the plan that best fits your organization's size and needs. All plans include our core menstrual health benefits platform with top-tier security and support.
          </p>

          <div data-aos="fade-up" data-aos-delay="400">
            <PricingToggle onToggle={onToggle} />
          </div>
        </div>
      </div>
      
      {/* Curved divider at the bottom of Hero Section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
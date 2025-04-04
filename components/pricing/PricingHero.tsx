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
    <div className="flex items-center justify-center space-x-4">
      <span className={`text-sm font-medium ${!isAnnual ? "text-[#167d83]" : "text-[#7f8c8d]"}`}>Monthly</span>
      <button
        onClick={handleToggle}
        className="relative w-14 h-7 bg-[#e6f5f6] rounded-full p-1 transition-colors duration-300"
      >
        <div
          className={`absolute top-1 w-5 h-5 bg-[#167d83] rounded-full transition-transform duration-300 ${
            isAnnual ? "translate-x-7" : "translate-x-0"
          }`}
        ></div>
      </button>
      <div className="flex items-center">
        <span className={`text-sm font-medium ${isAnnual ? "text-[#167d83]" : "text-[#7f8c8d]"}`}>Annual</span>
        <span className="ml-2 text-xs font-medium text-white bg-[#EE4C23] px-2 py-1 rounded-full">Save 20%</span>
      </div>
    </div>
  )
}

export function PricingHero({ onToggle }: { onToggle: (isAnnual: boolean) => void }) {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 bg-[#f8f9fa]"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 100,80 0,100" fill="#e6f5f6" opacity="0.5" />
          <polygon points="0,100 100,80 100,100" fill="#fef6e9" opacity="0.5" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-4">
            灵活的价格选项
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c3e50] mb-6">
            简单透明的价格
          </h1>

          <p className="text-lg md:text-xl text-[#7f8c8d] mb-8 max-w-2xl mx-auto">
            选择最适合您组织规模和需求的计划。所有计划均包含我们的核心月经健康福利平台。
          </p>

          <PricingToggle onToggle={onToggle} />
        </div>
      </div>
      {/* 在Hero Section底部添加波浪形分隔线 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
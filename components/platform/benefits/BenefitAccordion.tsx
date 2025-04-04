"use client"

import React, { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface BenefitAccordionProps {
  title: string
  children: React.ReactNode
  icon: React.ReactNode
  defaultOpen?: boolean
}

export function BenefitAccordion({ title, children, icon, defaultOpen = false }: BenefitAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="mb-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-3 sm:p-4 rounded-t-xl 
        ${isOpen 
          ? "bg-gradient-to-r from-[#167d83] to-[#22c0c7] text-white" 
          : "bg-white text-[#2c3e50] hover:bg-gray-50"
        } transition-all duration-300`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-2 sm:mr-3 
            ${isOpen 
              ? "bg-white text-[#167d83]" 
              : "bg-[#e6f5f6] text-[#167d83]"
            } transition-colors duration-300`}
          >
            {icon}
          </div>
          <span className="text-base sm:text-lg md:text-xl font-semibold truncate">{title}</span>
        </div>
        <div className="flex-shrink-0 ml-2">
          {isOpen ? <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" /> : <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />}
        </div>
      </button>

      {isOpen && (
        <div className="bg-white p-4 sm:p-6 rounded-b-xl border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  )
} 
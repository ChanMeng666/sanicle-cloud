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
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 rounded-t-xl ${isOpen ? "bg-[#167d83] text-white" : "bg-white text-[#2c3e50]"} transition-colors duration-300`}
      >
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${isOpen ? "bg-white text-[#167d83]" : "bg-[#e6f5f6] text-[#167d83]"}`}
          >
            {icon}
          </div>
          <span className="text-xl font-semibold">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>

      {isOpen && <div className="bg-white p-6 rounded-b-xl shadow-md">{children}</div>}
    </div>
  )
} 
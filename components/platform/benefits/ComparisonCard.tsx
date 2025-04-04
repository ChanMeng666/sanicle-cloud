"use client"

import { CheckCircle, Minus } from "lucide-react"

interface ComparisonCardProps {
  title: string
  features: string[]
  included?: boolean
}

export function ComparisonCard({ title, features, included = true }: ComparisonCardProps) {
  return (
    <div className={`rounded-xl overflow-hidden ${included ? "border-2 border-[#167d83]" : "border border-gray-200"}`}>
      <div className={`p-4 ${included ? "bg-[#167d83] text-white" : "bg-gray-100 text-[#2c3e50]"}`}>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="p-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {included ? (
                <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
              ) : (
                <Minus className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
              )}
              <span className={included ? "text-[#2c3e50]" : "text-gray-500"}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 
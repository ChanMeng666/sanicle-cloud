"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, DollarSign } from "lucide-react"
import { ReactNode } from "react"

export interface PricingCardProps {
  title: string
  subtitle: string
  icon: ReactNode
  price: {
    monthly: string
    annual: string
  }
  isAnnual: boolean
  features: string[]
  buttonText: string
  highlight?: boolean
  highlightLabel?: string
  color: string
  saveText?: string
}

export function PricingCard({
  title,
  subtitle,
  icon,
  price,
  isAnnual,
  features,
  buttonText,
  highlight = false,
  highlightLabel = "最受欢迎",
  color,
  saveText,
}: PricingCardProps) {
  return (
    <div className={`flex-1 relative group ${highlight ? "transform scale-105 z-20" : ""}`}>
      <div className="absolute inset-0 bg-black/5 rounded-2xl transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
      <Card className={`border-none ${highlight ? "shadow-2xl" : "shadow-lg"} h-full relative z-10 overflow-hidden transform transition-transform duration-500 group-hover:-translate-y-2`}>
        <div className={`absolute top-0 left-0 right-0 h-2 bg-[${color}]`}></div>
        {highlight && (
          <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[${color}] text-white text-xs font-bold px-4 py-1 rounded-full`}>
            {highlightLabel}
          </div>
        )}
        <CardHeader className={`pb-4 border-b ${highlight ? "pt-6" : ""}`}>
          <CardTitle className="text-2xl font-bold text-[#2c3e50] flex items-center">
            <div className={`w-10 h-10 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3`}>
              {icon}
            </div>
            {title}
          </CardTitle>
          <p className="text-[#7f8c8d]">{subtitle}</p>
          <div className="mt-4 flex items-baseline">
            <DollarSign className={`h-6 w-6 text-[${color}]`} />
            <span className="text-4xl font-bold text-[#2c3e50]">{isAnnual ? price.annual : price.monthly}</span>
            <span className="text-[#7f8c8d] ml-1">每位员工/月</span>
          </div>
          {isAnnual && saveText && <div className="mt-1 text-sm text-[#EE4C23]">{saveText}</div>}
        </CardHeader>
        <CardContent className="py-6">
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className={`h-5 w-5 text-[${color}] mr-2 mt-0.5`} />
                <span className="text-[#2c3e50]">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-2 pb-6">
          <Button className={`w-full bg-[${color}] hover:bg-opacity-90 text-white`}>{buttonText}</Button>
        </CardFooter>
      </Card>
    </div>
  )
} 
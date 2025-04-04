"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, DollarSign } from "lucide-react"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

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
  variant: "primary" | "secondary"
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
  highlightLabel = "Most Popular",
  variant = "primary",
  saveText,
}: PricingCardProps) {
  return (
    <div className={`flex-1 relative group ${highlight ? "transform scale-105 z-20" : ""}`}>
      <div className="absolute inset-0 bg-black/5 rounded-2xl transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
      <Card className={`border-none ${highlight ? "shadow-2xl" : "shadow-lg"} h-full relative z-10 overflow-hidden transform transition-transform duration-500 group-hover:-translate-y-2`}>
        <div className={`absolute top-0 left-0 right-0 h-2 ${variant === "primary" ? "bg-primary" : "bg-secondary"}`}></div>
        {highlight && (
          <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${variant === "primary" ? "bg-primary" : "bg-secondary"} text-white text-xs font-bold px-4 py-1 rounded-full`}>
            {highlightLabel}
          </div>
        )}
        <CardHeader className={`pb-4 border-b ${highlight ? "pt-6" : ""}`}>
          <CardTitle className="text-2xl font-bold text-charcoal flex items-center">
            <div className={`w-10 h-10 rounded-full ${variant === "primary" ? "bg-primary-pale" : "bg-secondary-light/20"} flex items-center justify-center mr-3`}>
              {icon}
            </div>
            {title}
          </CardTitle>
          <p className="text-slate">{subtitle}</p>
          <div className="mt-4 flex items-baseline">
            <DollarSign className={cn("h-6 w-6", variant === "primary" ? "text-primary" : "text-secondary")} />
            <span className="text-4xl font-bold text-charcoal">{isAnnual ? price.annual : price.monthly}</span>
            <span className="text-slate ml-1">per employee/month</span>
          </div>
          {isAnnual && saveText && <div className="mt-1 text-sm text-secondary">{saveText}</div>}
        </CardHeader>
        <CardContent className="py-6">
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className={cn("h-5 w-5 mr-2 mt-0.5", variant === "primary" ? "text-primary" : "text-secondary")} />
                <span className="text-charcoal">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-2 pb-6">
          <Button variant={variant === "primary" ? "default" : "secondary"} className="w-full">{buttonText}</Button>
        </CardFooter>
      </Card>
    </div>
  )
} 
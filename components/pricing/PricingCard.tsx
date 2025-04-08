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
  label?: string
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
  color,
  saveText,
  label,
}: PricingCardProps) {
  // Determine the background and text colors based on the color prop
  const getStyles = () => {
    const styles = {
      borderColor: 'border-slate-200',
      colorAccent: '',
      bgAccent: '',
      buttonClasses: ''
    };
    
    if (color === 'primary') {
      styles.colorAccent = 'text-primary';
      styles.bgAccent = 'bg-primary-pale';
      styles.buttonClasses = highlight
        ? 'bg-primary hover:bg-primary/90 text-white shadow-md' 
        : 'bg-white border-2 border-primary text-primary hover:bg-primary-pale/50';
    } else if (color === 'secondary') {
      styles.colorAccent = 'text-secondary';
      styles.bgAccent = 'bg-secondary-pale';
      styles.buttonClasses = 'bg-secondary hover:bg-secondary/90 text-white shadow-md';
    }
    
    return styles;
  };
  
  const styles = getStyles();
  
  return (
    <div className={`w-full relative ${highlight ? "lg:-mt-4 z-20" : ""}`}>
      {highlight && (
        <div className="absolute -top-5 left-0 right-0 flex justify-center z-30">
          <span className={`px-4 py-1.5 rounded-full text-white text-xs font-semibold ${color === 'primary' ? 'bg-primary' : 'bg-secondary'} shadow-md`}>
            {highlightLabel}
          </span>
        </div>
      )}
      <Card className={`border-2 h-full ${highlight ? `${styles.borderColor} shadow-xl` : `${styles.borderColor} shadow-md`} 
        overflow-hidden rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1`}
      >
        <CardHeader className={`px-6 pt-6 ${highlight ? "pt-8" : ""} pb-4 space-y-1 border-b ${styles.borderColor}`}>
          <div className="flex items-center space-x-3 mb-2">
            <div className={`w-10 h-10 rounded-full ${styles.bgAccent} flex items-center justify-center`}>
              {icon}
            </div>
            <CardTitle className="text-2xl font-bold text-slate-800">{title}</CardTitle>
          </div>
          
          <p className="text-slate-500 text-sm">{subtitle}</p>
          
          <div className="mt-4 flex items-baseline">
            <DollarSign className={`h-5 w-5 ${styles.colorAccent}`} />
            <span className={`${isNaN(Number(isAnnual ? price.annual : price.monthly)) ? 'text-2xl' : 'text-4xl'} font-bold text-slate-800`}>
              {isAnnual ? price.annual : price.monthly}
            </span>
            <span className="text-slate-500 ml-2 text-sm">per employee/month</span>
          </div>
          
          {isAnnual && saveText && (
            <div className="mt-1 text-sm text-secondary font-medium">{saveText}</div>
          )}
        </CardHeader>
        
        <CardContent className="px-6 py-6">
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className={`h-5 w-5 ${styles.colorAccent} mr-3 mt-0.5 flex-shrink-0`} />
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          {label && (
            <div className="mt-6 pt-4 border-t border-slate-200">
              <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-medium ${styles.colorAccent} bg-slate-100`}>
                {label}
              </span>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="px-6 pt-2 pb-6">
          <Button className={`w-full ${styles.buttonClasses}`}>
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
} 
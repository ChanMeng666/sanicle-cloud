"use client"

import { Star, Zap, Shield } from "lucide-react"
import { PricingCard } from "./PricingCard"

interface PricingPlansProps {
  isAnnual: boolean
}

export function PricingPlans({ isAnnual }: PricingPlansProps) {
  const plans = [
    {
      title: "Starter",
      subtitle: "For small businesses",
      icon: <Star className="h-5 w-5 text-primary" />,
      price: {
        monthly: "8",
        annual: "6",
      },
      features: [
        "Up to 50 employees",
        "Basic menstrual health tracking",
        "Educational resources",
        "Standard reporting",
        "Email support",
      ],
      buttonText: "Get Started",
      variant: "primary",
      saveText: "Save $24 per employee per year",
    },
    {
      title: "Professional",
      subtitle: "For medium businesses",
      icon: <Zap className="h-5 w-5 text-secondary" />,
      price: {
        monthly: "12",
        annual: "10",
      },
      features: [
        "Up to 200 employees",
        "Advanced health tracking",
        "Personalized recommendations",
        "Custom reporting",
        "Priority support",
        "Employee analytics insights",
      ],
      buttonText: "Get Professional",
      highlight: true,
      variant: "secondary",
      saveText: "Save $24 per employee per year",
    },
    {
      title: "Enterprise",
      subtitle: "For large organizations",
      icon: <Shield className="h-5 w-5 text-primary" />,
      price: {
        monthly: "Contact Us",
        annual: "Contact Us",
      },
      features: [
        "Unlimited employees",
        "Full feature set",
        "In-depth analytics",
        "Dedicated account manager",
        "API integration",
        "White-label solutions",
        "24/7 technical support",
      ],
      buttonText: "Contact Sales",
      variant: "primary",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white relative -mt-20 z-20">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              subtitle={plan.subtitle}
              icon={plan.icon}
              price={plan.price}
              isAnnual={isAnnual}
              features={plan.features}
              buttonText={plan.buttonText}
              highlight={plan.highlight}
              variant={plan.variant as "primary" | "secondary"}
              saveText={isAnnual ? plan.saveText : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 
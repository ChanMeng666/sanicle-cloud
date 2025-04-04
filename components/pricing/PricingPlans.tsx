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
      color: "primary",
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
      color: "secondary",
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
      color: "primary",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white relative z-20">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer flexible options to meet the needs of any organization size
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="flex"
              data-aos="fade-up" 
              data-aos-delay={100 + (index * 100)}
            >
              <PricingCard
                title={plan.title}
                subtitle={plan.subtitle}
                icon={plan.icon}
                price={plan.price}
                isAnnual={isAnnual}
                features={plan.features}
                buttonText={plan.buttonText}
                highlight={plan.highlight}
                color={plan.color}
                saveText={isAnnual ? plan.saveText : undefined}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-500 text-sm">
            All prices are in USD. See our <a href="#" className="text-primary hover:underline">pricing policy</a> for more information.
          </p>
        </div>
      </div>
    </section>
  )
} 
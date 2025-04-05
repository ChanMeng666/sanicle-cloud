"use client"

import { Star, Zap, Shield } from "lucide-react"
import { PricingCard } from "./PricingCard"

interface PricingPlansProps {
  isAnnual: boolean
}

export function PricingPlans({ isAnnual }: PricingPlansProps) {
  const plans = [
    {
      title: "Basic",
      subtitle: "Per month/user",
      icon: <Star className="h-5 w-5 text-primary" />,
      price: {
        monthly: "10",
        annual: "8",
      },
      features: [
        "Personalized Cycle Management",
        "Basic Menopause Resource Center",
        "Mental Health Self-Assessment Tools",
        "AI Chatbot - Ask Sani",
        "Financial Wellness & Support",
      ],
      buttonText: "Get Started",
      color: "primary",
      saveText: "Save $24 per employee per year",
      label: "B2B"
    },
    {
      title: "Premium",
      subtitle: "Per month/user",
      icon: <Zap className="h-5 w-5 text-secondary" />,
      price: {
        monthly: "15",
        annual: "12",
      },
      features: [
        "Basic plus this:",
        "Advanced Menopause Symptom Tracking",
        "Mental Health Professional Directory",
        "Workplace Accommodation Guides",
        "Educational Resources",
        "Social Impact & Employee Rewards",
        "Health Symptom Identification Support",
      ],
      buttonText: "Get Premium",
      highlight: true,
      color: "secondary",
      saveText: "Save $36 per employee per year",
      label: "B2B"
    },
    {
      title: "Enterprise",
      subtitle: "Contact sales",
      icon: <Shield className="h-5 w-5 text-primary" />,
      price: {
        monthly: "Contact Us",
        annual: "Contact Us",
      },
      features: [
        "Premium plus this:",
        "Personalized Training and Consulting",
        "Custom Mental Health Programs",
        "Menopause Workplace Policy Development",
        "Custom Features",
      ],
      buttonText: "Contact Sales",
      color: "primary",
      label: "B2B/B2G"
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white relative z-20">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Select the Optimal Plan for Your Business Needs
          </h2>
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
                label={plan.label}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-500 text-sm">
            Sanicle.cloud offers flexible, on-demand access to menstrual and menopause health solutions for both corporate and government employers.
          </p>
        </div>
      </div>
    </section>
  )
} 
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
      {/* Top decorative elements for transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-15"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Leaf decorations */}
        <div className="absolute top-12 right-8 hidden lg:block">
          <img src="/logo/leave-green.svg" alt="" className="w-20 h-20 opacity-15 rotate-45" />
        </div>
        <div className="absolute bottom-1/3 left-8 hidden lg:block">
          <img src="/logo/leave-pink.svg" alt="" className="w-24 h-24 opacity-15 -rotate-12" />
        </div>
        
        {/* Colored pencil line decorations */}
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            <span className="relative z-10">Select the Optimal Plan for Your Business Needs</span>
            {/* Small leaf decoration behind the heading */}
            <span className="absolute -bottom-2 -right-6 z-0">
              <img src="/logo/leave-green.svg" alt="" className="w-8 h-8 opacity-20" />
            </span>
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
      
      {/* Wave divider for transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" className="w-full h-auto">
          <path
            fill="#f8fafc" /* Slate-50 color for the next section */
            fillOpacity="1"
            d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,112C672,128,768,160,864,160C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
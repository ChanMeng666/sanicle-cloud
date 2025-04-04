"use client"

import { CheckCircle, X } from "lucide-react"
import { useState } from "react"

interface FeatureComparisonItemProps {
  feature: string
  starter: boolean | string
  professional: boolean | string
  enterprise: boolean | string
}

export function FeatureComparisonItem({
  feature,
  starter,
  professional,
  enterprise,
}: FeatureComparisonItemProps) {
  const renderValue = (value: boolean | string, isHighlighted: boolean = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle className={`h-5 w-5 ${isHighlighted ? "text-secondary" : "text-primary"} mx-auto`} />
      ) : (
        <X className="h-5 w-5 text-slate-300 mx-auto" />
      );
    }
    return <span className={`text-sm ${isHighlighted ? "font-medium text-secondary" : "text-slate-600"}`}>{value}</span>;
  };

  return (
    <div className="grid grid-cols-4 py-4 border-b border-slate-100 items-center text-sm md:text-base">
      <div className="text-slate-700 font-medium">{feature}</div>
      <div className="text-center">{renderValue(starter)}</div>
      <div className="text-center bg-primary-pale/20 py-2 rounded">{renderValue(professional, true)}</div>
      <div className="text-center">{renderValue(enterprise)}</div>
    </div>
  );
}

// Mobile version of feature comparison item
function MobileFeatureItem({ feature, plan, value }: { feature: string; plan: string; value: boolean | string }) {
  const isPro = plan === "Professional";
  
  return (
    <div className="flex justify-between items-center py-3 border-b border-slate-100">
      <span className="text-slate-700 font-medium text-sm">{feature}</span>
      <div className="flex items-center">
        <span className={`text-xs mr-2 ${isPro ? "text-secondary" : "text-primary"}`}>{plan}</span>
        {typeof value === "boolean" ? (
          value ? (
            <CheckCircle className={`h-5 w-5 ${isPro ? "text-secondary" : "text-primary"}`} />
          ) : (
            <X className="h-5 w-5 text-slate-300" />
          )
        ) : (
          <span className={`text-xs font-medium ${isPro ? "text-secondary" : "text-slate-600"}`}>{value}</span>
        )}
      </div>
    </div>
  );
}

export function FeatureComparison() {
  const [activePlan, setActivePlan] = useState<string>("professional");
  
  const features = [
    {
      category: "Platform Features",
      items: [
        {
          feature: "Menstrual Health Tracking",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: "Symptom Recording",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: "Health Education Resources",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: "AI-Assisted Health Predictions",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          feature: "Personalized Health Recommendations",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          feature: "Health Expert Consultation",
          starter: false,
          professional: "Limited",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      category: "Management Features",
      items: [
        {
          feature: "Employee Usage Dashboard",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Enterprise",
        },
        {
          feature: "Data Reports & Analytics",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Custom",
        },
        {
          feature: "Team Management",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          feature: "API Access",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          feature: "White-Label Options",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
    {
      category: "Support & Services",
      items: [
        {
          feature: "Email Support",
          starter: "Business Days",
          professional: "24/5",
          enterprise: "24/7",
        },
        {
          feature: "Phone Support",
          starter: false,
          professional: "Business Days",
          enterprise: "24/7",
        },
        {
          feature: "Training and Onboarding",
          starter: "Self-Service",
          professional: "Remote",
          enterprise: "On-Site",
        },
        {
          feature: "Dedicated Account Manager",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-slate-50" id="feature-comparison">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-aos="fade-up">Feature Comparison</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Compare all features included in each pricing plan to find your perfect fit.
          </p>
        </div>

        {/* Desktop view - hidden on mobile */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-4 bg-slate-50 p-4">
              <div className="text-slate-700 font-semibold">Feature</div>
              <div className="text-center font-semibold text-primary">Starter</div>
              <div className="text-center font-semibold text-secondary bg-primary-pale/20 py-2 rounded">Professional</div>
              <div className="text-center font-semibold text-primary">Enterprise</div>
            </div>

            {features.map((featureGroup, groupIndex) => (
              <div key={groupIndex} className="mb-6">
                <div className="bg-slate-50/50 py-3 px-4">
                  <h3 className="text-lg font-semibold text-slate-700">{featureGroup.category}</h3>
                </div>
                {featureGroup.items.map((item, itemIndex) => (
                  <FeatureComparisonItem
                    key={itemIndex}
                    feature={item.feature}
                    starter={item.starter}
                    professional={item.professional}
                    enterprise={item.enterprise}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile view - hidden on desktop */}
        <div className="md:hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <div className="flex border-b">
              {["starter", "professional", "enterprise"].map((plan) => (
                <button
                  key={plan}
                  className={`flex-1 text-center py-3 px-2 font-medium text-sm ${
                    activePlan === plan 
                      ? "bg-primary-pale/20 text-primary border-b-2 border-primary" 
                      : "text-slate-600"
                  }`}
                  onClick={() => setActivePlan(plan)}
                >
                  {plan.charAt(0).toUpperCase() + plan.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="p-4">
              {features.map((featureGroup, groupIndex) => (
                <div key={groupIndex} className="mb-6">
                  <h3 className="text-md font-semibold text-slate-700 mb-3 pb-2 border-b">
                    {featureGroup.category}
                  </h3>
                  <div className="space-y-1">
                    {featureGroup.items.map((item, itemIndex) => (
                      <MobileFeatureItem
                        key={itemIndex}
                        feature={item.feature}
                        plan={activePlan.charAt(0).toUpperCase() + activePlan.slice(1)}
                        value={item[activePlan as keyof typeof item]}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            Need more details? Check our <a href="#" className="text-primary hover:underline">feature documentation</a> or <a href="#" className="text-primary hover:underline">contact sales</a>.
          </p>
        </div>
      </div>
    </section>
  );
} 
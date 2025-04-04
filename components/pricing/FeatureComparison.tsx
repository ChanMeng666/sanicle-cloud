"use client"

import { CheckCircle, X } from "lucide-react"

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
  return (
    <div className="grid grid-cols-4 py-3 border-b border-gray-100 items-center">
      <div className="text-[#2c3e50] font-medium">{feature}</div>
      <div className="text-center">
        {typeof starter === "boolean" ? (
          starter ? (
            <CheckCircle className="h-5 w-5 text-[#167d83] mx-auto" />
          ) : (
            <X className="h-5 w-5 text-gray-300 mx-auto" />
          )
        ) : (
          <span className="text-[#7f8c8d]">{starter}</span>
        )}
      </div>
      <div className="text-center bg-[#e6f5f6]/30 py-2">
        {typeof professional === "boolean" ? (
          professional ? (
            <CheckCircle className="h-5 w-5 text-[#167d83] mx-auto" />
          ) : (
            <X className="h-5 w-5 text-gray-300 mx-auto" />
          )
        ) : (
          <span className="text-[#7f8c8d]">{professional}</span>
        )}
      </div>
      <div className="text-center">
        {typeof enterprise === "boolean" ? (
          enterprise ? (
            <CheckCircle className="h-5 w-5 text-[#167d83] mx-auto" />
          ) : (
            <X className="h-5 w-5 text-gray-300 mx-auto" />
          )
        ) : (
          <span className="text-[#7f8c8d]">{enterprise}</span>
        )}
      </div>
    </div>
  )
}

export function FeatureComparison() {
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
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Feature Comparison</h2>
          <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
            Compare all features included in each pricing plan to choose the option that best fits your organization.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-4 bg-[#e6f5f6]/30 p-4">
            <div className="text-[#2c3e50] font-semibold">Feature</div>
            <div className="text-center font-semibold text-[#2c3e50]">Starter</div>
            <div className="text-center font-semibold text-[#2c3e50] bg-[#e6f5f6]/50 py-2 rounded">Professional</div>
            <div className="text-center font-semibold text-[#2c3e50]">Enterprise</div>
          </div>

          {features.map((featureGroup, groupIndex) => (
            <div key={groupIndex} className="mb-6">
              <div className="bg-gray-50 py-2 px-4">
                <h3 className="text-lg font-semibold text-[#2c3e50]">{featureGroup.category}</h3>
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
    </section>
  )
} 
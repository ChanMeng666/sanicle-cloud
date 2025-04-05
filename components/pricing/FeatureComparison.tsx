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
    <section className="w-full py-16 md:py-24 bg-slate-50 relative overflow-hidden" id="feature-comparison">
      {/* Top transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50/20 to-slate-50 pointer-events-none"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Leaf decorations */}
        <div className="absolute top-16 left-10 hidden lg:block">
          <img src="/logo/leave-green.svg" alt="" className="w-28 h-28 opacity-10 rotate-12" />
        </div>
        <div className="absolute bottom-24 right-10 hidden lg:block">
          <img src="/logo/leave-pink.svg" alt="" className="w-32 h-32 opacity-10 -rotate-45" />
        </div>
        
        {/* Colored pencil line decorations */}
        <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
        <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/15 to-transparent"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 relative inline-block" data-aos="fade-up">
            <span className="relative z-10">Feature Comparison</span>
            {/* Small leaf decoration */}
            <span className="absolute -top-6 -right-8 z-0 hidden md:block">
              <img src="/logo/leave-green.svg" alt="" className="w-8 h-8 opacity-20 rotate-45" />
            </span>
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Compare all features included in each pricing plan to find your perfect fit.
          </p>
        </div>

        {/* Desktop view - hidden on mobile */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto relative" data-aos="fade-up" data-aos-delay="200">
            {/* Subtle decoration in the table */}
            <div className="absolute -bottom-6 -right-6 opacity-5 z-0">
              <img src="/logo/leave-pink.svg" alt="" className="w-32 h-32" />
            </div>
            
            <div className="grid grid-cols-4 bg-slate-50 p-4 relative z-10">
              <div className="text-slate-700 font-semibold">Feature</div>
              <div className="text-center font-semibold text-primary">Starter</div>
              <div className="text-center font-semibold text-secondary bg-primary-pale/20 py-2 rounded">Professional</div>
              <div className="text-center font-semibold text-primary">Enterprise</div>
            </div>

            {features.map((featureGroup, groupIndex) => (
              <div key={groupIndex} className="mb-6 relative z-10">
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
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 relative">
            {/* Subtle decoration in the mobile view */}
            <div className="absolute -bottom-6 -right-6 opacity-5 z-0">
              <img src="/logo/leave-green.svg" alt="" className="w-32 h-32" />
            </div>
            
            <div className="flex border-b relative z-10">
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
            
            <div className="p-4 relative z-10">
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
      
      {/* Wave divider for transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,149,576,133.3C672,117,768,85,864,74.7C960,64,1056,75,1152,80C1248,85,1344,85,1392,85.3L1440,85L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
} 
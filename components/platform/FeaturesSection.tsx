"use client"

import { CheckCircle, Shield, Smartphone, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Mobile Application",
      description:
        "User-friendly mobile application for employees to track and manage their menstrual health.",
      features: ["Intuitive Cycle Tracking", "Personalized Insights", "Educational Resources"],
      color: "bg-[#167d83]",
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "AI-Driven Insights",
      description:
        "Advanced analytics and machine learning providing personalized health recommendations.",
      features: ["Pattern Recognition", "Personalized Recommendations", "Predictive Analytics"],
      color: "bg-[#EE4C23]",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Privacy Controls",
      description: "Comprehensive privacy settings giving users control over their health data.",
      features: ["Granular Sharing Controls", "Data Export Options", "Anonymous Insights"],
      color: "bg-[#167d83]",
    },
  ]

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#f8f9fa] opacity-50 z-0">
        <img 
          src="/logo/leave-green.svg" 
          alt="Leaf decoration" 
          className="absolute top-10 right-10 w-32 h-32 opacity-10 transform rotate-45"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#f8f9fa] opacity-50 z-0">
        <img 
          src="/logo/leave-green.svg" 
          alt="Leaf decoration" 
          className="absolute bottom-10 left-10 w-32 h-32 opacity-10 transform -rotate-45"
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="hidden md:block absolute top-1/4 right-10">
        <img 
          src="/logo/leave-green.svg" 
          alt="Leaf decoration" 
          className="h-16 w-16 opacity-20 animate-float"
        />
      </div>
      <div className="hidden md:block absolute bottom-1/4 left-10">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Leaf decoration" 
          className="h-20 w-20 opacity-20 animate-float animation-delay-1000"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
            Platform <span className="text-[#167d83]">Features</span>
          </h2>
          <p className="text-[#7f8c8d] text-base sm:text-lg max-w-2xl mx-auto">
            Explore our comprehensive platform features providing all-round health support for female employees.
          </p>
        </div>

        {/* Tab switching */}
        <div className="features-showcase max-w-6xl mx-auto">
          <div className="feature-content">
            <div className="feature-panel active">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-card bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group"
                  >
                    <div className={`${feature.color} h-2 sm:h-3`}></div>
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${feature.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {feature.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#2c3e50] group-hover:text-[#167d83] transition-colors duration-300">{feature.title}</h3>
                      </div>

                      <p className="text-[#7f8c8d] text-sm sm:text-base mb-6">{feature.description}</p>

                      <ul className="space-y-3 border-t border-gray-100 pt-4">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle
                              className={`h-4 w-4 sm:h-5 sm:w-5 ${feature.color === "bg-[#167d83]" ? "text-[#167d83]" : "text-[#EE4C23]"} mr-2 mt-0.5 group-hover:scale-125 transition-transform duration-300`}
                            />
                            <span className="text-[#2c3e50] text-sm sm:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Upcoming features teaser */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f8f9fa] text-[#167d83] text-sm font-medium">
            <span className="mr-2">🚀</span> More features coming soon
          </div>
        </div>
      </div>
    </section>
  )
} 
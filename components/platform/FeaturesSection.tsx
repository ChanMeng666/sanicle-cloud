"use client"

import { CheckCircle, Shield, Smartphone, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Mobile App",
      description:
        "User-friendly mobile application for employees to track and manage their menstrual health.",
      features: ["Intuitive cycle tracking", "Personalized insights", "Educational resources"],
      color: "bg-[#167d83]",
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "AI-Powered Insights",
      description:
        "Advanced analytics and machine learning to provide personalized health recommendations.",
      features: ["Pattern recognition", "Personalized recommendations", "Predictive analytics"],
      color: "bg-[#EE4C23]",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Privacy Controls",
      description: "Comprehensive privacy settings that put users in control of their health data.",
      features: ["Granular sharing controls", "Data export options", "Anonymized insights"],
      color: "bg-[#167d83]",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50] mb-2">Key Platform Features</h2>
          <p className="text-[#7f8c8d] max-w-2xl mx-auto">
            Discover the powerful capabilities that make Sanicle.cloud the leading menstrual health benefits platform.
          </p>
        </div>

        {/* 创新的交互式功能展示 */}
        <div className="feature-showcase max-w-6xl mx-auto">
          <div className="feature-tabs flex justify-center mb-8">
            <div className="inline-flex bg-[#f8f9fa] rounded-full p-1">
              <button className="feature-tab active px-6 py-2 rounded-full bg-[#167d83] text-white font-medium">
                For Users
              </button>
              <button className="feature-tab px-6 py-2 rounded-full text-[#7f8c8d] font-medium hover:bg-gray-100">
                For Admins
              </button>
              <button className="feature-tab px-6 py-2 rounded-full text-[#7f8c8d] font-medium hover:bg-gray-100">
                Technology
              </button>
            </div>
          </div>

          <div className="feature-content">
            <div className="feature-panel active">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-card bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className={`${feature.color} h-3`}></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mr-4`}
                        >
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-[#2c3e50]">{feature.title}</h3>
                      </div>

                      <p className="text-[#7f8c8d] mb-6">{feature.description}</p>

                      <ul className="space-y-3 border-t border-gray-100 pt-4">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle
                              className={`h-5 w-5 ${feature.color === "bg-[#167d83]" ? "text-[#167d83]" : "text-[#EE4C23]"} mr-2 mt-0.5`}
                            />
                            <span className="text-[#2c3e50]">{item}</span>
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
      </div>
    </section>
  )
} 
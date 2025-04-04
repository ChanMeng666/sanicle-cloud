"use client"

import { CheckCircle, Heart, LockIcon, Network, ShieldIcon, Users } from "lucide-react"

export function ValueProposition() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Empowering HR Managers",
      description:
        "We provide HR with tools and resources to address menstrual health, including benefits management and educational materials.",
      color: "bg-[#167d83]",
    },
    {
      icon: <Heart className="h-10 w-10 text-white" />,
      title: "Tackling Hormonal Imbalances",
      description:
        "Sanicle.cloud offers support for conditions like PMS and PCOS, allowing women to manage their health effectively on the job.",
      color: "bg-[#EE4C23]",
    },
    {
      icon: <Network className="h-10 w-10 text-white" />,
      title: "Building A Strong Network",
      description:
        "We connect employers with leading healthcare providers, ensuring access to quality care for female employees.",
      color: "bg-[#167d83]",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Improving Workplace Well-being",
      description:
        "Our platform promotes overall well-being through comprehensive menstrual health support and resources.",
      color: "bg-[#EE4C23]",
    },
    {
      icon: <ShieldIcon className="h-10 w-10 text-white" />,
      title: "Ensuring Data Privacy",
      description:
        "We prioritize the security and privacy of sensitive health data with enterprise-grade protection.",
      color: "bg-[#167d83]",
    },
    {
      icon: <LockIcon className="h-10 w-10 text-white" />,
      title: "Seamless Integration",
      description: "Our platform integrates with existing HR systems for a smooth implementation process.",
      color: "bg-[#EE4C23]",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
            Transforming Women's Workplace Wellbeing
          </h2>
          <p className="text-lg text-[#7f8c8d]">
            We're a B2B-B2G platform dedicated to creating healthier, more inclusive workplaces through comprehensive
            menstrual health support.
          </p>
        </div>

        {/* 六边形网格布局 */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center">
                <div className="hexagon w-64 h-72 relative">
                  <div className={`hexagon-inner ${feature.color} p-6 flex flex-col items-center text-center`}>
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/90 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
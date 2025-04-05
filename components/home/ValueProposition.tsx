"use client"

import { CheckCircle, Heart, LockIcon, Network, ShieldIcon, Users } from "lucide-react"

export function ValueProposition() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Empowering HR Managers",
      description:
        "We provide HR with tools and resources to address menstrual health, including benefits management and educational materials.",
      color: "bg-primary",
    },
    {
      icon: <Heart className="h-10 w-10 text-white" />,
      title: "Tackling Hormonal Imbalances",
      description:
        "Sanicle.cloud offers support for conditions like PMS and PCOS, allowing women to manage their health effectively on the job.",
      color: "bg-secondary",
    },
    {
      icon: <Network className="h-10 w-10 text-white" />,
      title: "Building A Strong Network",
      description:
        "We connect employers with leading healthcare providers, ensuring access to quality care for female employees.",
      color: "bg-primary",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Improving Workplace Well-being",
      description:
        "Our platform promotes overall well-being through comprehensive menstrual health support and resources.",
      color: "bg-secondary",
    },
    {
      icon: <ShieldIcon className="h-10 w-10 text-white" />,
      title: "Ensuring Data Privacy",
      description:
        "We prioritize the security and privacy of sensitive health data with enterprise-grade protection.",
      color: "bg-primary",
    },
    {
      icon: <LockIcon className="h-10 w-10 text-white" />,
      title: "Seamless Integration",
      description: "Our platform integrates with existing HR systems for a smooth implementation process.",
      color: "bg-secondary",
    },
  ]

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-white relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sanicle.cloud is a comprehensive solution.</h2>
          <p className="text-base md:text-lg text-slate">
            We're a B2B-B2G platform dedicated to transforming women's workplace wellbeing. Here's how:
          </p>
        </div>

        {/* Responsive hexagon grid layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center transform transition-transform hover:scale-105 duration-300">
                <div className="feature-hexagon relative w-full max-w-[300px] aspect-[1/1.2] overflow-visible mx-auto">
                  <div className={`${feature.color} h-full w-full p-5 flex flex-col items-center text-center rounded-2xl md:rounded-3xl shadow-card-hover`} 
                       style={{
                         clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                       }}>
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-3 mt-6 md:mt-8">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/90 text-xs md:text-sm px-2 md:px-4 line-clamp-4 md:line-clamp-none">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Extra spacing on mobile devices */}
      <div className="h-8 sm:h-0"></div>
    </section>
  )
} 
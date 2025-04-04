"use client"

import { CheckCircle, Heart, Users } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Partner with us",
      description: "Simple onboarding and plan selection tailored to your organization's needs.",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      number: 2,
      title: "Explore solutions",
      description: "Access our platform and discover the full range of menstrual health benefits.",
      icon: <Heart className="h-6 w-6 text-white" />,
    },
    {
      number: 3,
      title: "Easy implementation",
      description: "Seamless integration with your existing benefits system and employee onboarding.",
      icon: <CheckCircle className="h-6 w-6 text-white" />,
    },
    {
      number: 4,
      title: "Continuous support",
      description: "Ongoing assistance and resources for both employers and employees.",
      icon: <CheckCircle className="h-6 w-6 text-white" />,
    },
  ]

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
            Simple Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2 md:mb-4">How Sanicle.cloud Works</h2>
          <p className="text-base sm:text-lg text-[#7f8c8d]">
            Our streamlined process makes it easy to implement comprehensive menstrual health benefits in your
            workplace.
          </p>
        </div>

        {/* 创新的步骤图 - 适配移动端和桌面端 */}
        <div className="relative max-w-5xl mx-auto">
          {/* 连接线 - 桌面端水平，移动端垂直 */}
          <div className="hidden md:block absolute left-1/2 top-1/2 w-[70%] h-1 bg-[#e6f5f6] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="md:hidden absolute left-1/2 top-[10%] bottom-[10%] w-1 bg-[#e6f5f6] transform -translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-4 md:p-6"
                style={{ zIndex: 10 }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#167d83] flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <span className="text-white text-lg sm:text-xl font-bold">{step.number}</span>
                </div>
                <div className="absolute top-12 right-12 sm:top-14 sm:right-16 w-8 h-8 sm:w-10 sm:h-10 bg-[#167d83]/10 rounded-full animate-pulse"></div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2c3e50] mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-[#7f8c8d] max-w-[200px]">{step.description}</p>

                <div className="hidden md:flex absolute -bottom-10 sm:-bottom-14 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-[#167d83]/20 rounded-full items-center justify-center">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
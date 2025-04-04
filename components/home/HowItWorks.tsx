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
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-beige-light relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pattern-dots"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-pale text-primary text-sm font-medium mb-3">
            Simple Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-2 md:mb-4">How Sanicle.cloud Works</h2>
          <p className="text-base sm:text-lg text-slate">
            Our streamlined process makes it easy to implement comprehensive menstrual health benefits in your
            workplace.
          </p>
        </div>

        {/* 创新的步骤图 - 适配移动端和桌面端 */}
        <div className="relative max-w-5xl mx-auto">
          {/* 连接线 - 桌面端水平，移动端垂直 */}
          <div className="hidden md:block absolute left-1/2 top-1/2 w-[80%] h-1 bg-primary-pale transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          <div className="md:hidden absolute left-1/2 top-[10%] bottom-[10%] w-1 bg-primary-pale transform -translate-x-1/2 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-4 md:p-6 group"
                style={{ zIndex: 10 }}
              >
                <div className="relative">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-primary flex items-center justify-center mb-4 sm:mb-5 shadow-button group-hover:shadow-button-hover transition-shadow duration-300">
                    <span className="text-white text-lg sm:text-xl font-bold">{step.number}</span>
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full animate-pulse-opacity"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-sm sm:text-base text-slate max-w-[220px]">{step.description}</p>

                <div className="hidden md:flex absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary/20 rounded-full items-center justify-center shadow-sm">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 移动端特殊按钮 */}
        <div className="mt-12 text-center md:hidden">
          <a href="/platform/overview" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full shadow-button hover:shadow-button-hover transition-all duration-300">
            Learn more about our platform
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 
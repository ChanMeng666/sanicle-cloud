"use client"

import { Briefcase, Building, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ImplementationProcess() {
  const steps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We'll discuss your specific needs and tailor solutions for your organization.",
      icon: <Briefcase className="h-6 w-6 text-white" />,
    },
    {
      step: 2,
      title: "Plan Selection",
      description: "Choose from our flexible plans to find the perfect option for your budget and employees.",
      icon: <Building className="h-6 w-6 text-white" />,
    },
    {
      step: 3,
      title: "Employee Enrollment",
      description: "We provide all necessary materials to introduce this benefit to your employees.",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Our team provides continuous support and regular usage reports.",
      icon: <Award className="h-6 w-6 text-white" />,
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-neutral-50 relative -mt-10 z-20 overflow-hidden">
      {/* 顶部过渡元素 */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/60 to-transparent"></div>
      
      {/* 添加网格背景和波点背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      {/* 叶片装饰元素 */}
      <div className="absolute top-1/4 right-0 transform translate-x-1/3 -translate-y-1/4">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-80 h-80 opacity-10" />
      </div>
      <div className="absolute bottom-1/4 left-0 transform -translate-x-1/3 translate-y-1/4">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-80 h-80 opacity-10" />
      </div>

      {/* 彩色蜡笔线条装饰 */}
      <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-coral-100 via-primary/20 to-teal-100 opacity-30"></div>
      <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-teal-100 via-primary/20 to-coral-100 opacity-30"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
            Implementation Process
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800">Simple Implementation Process</h2>
          <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">
            Start using Sanicle.cloud with just a few simple steps.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2 bg-primary/20"></div>

          {steps.map((item, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-0 pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2`}
            >
              {/* Timeline dot - 用叶片替换圆形 */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 transform -translate-x-1/2 md:translate-x-1/2 z-10">
                <div className="relative w-full h-full">
                  <img 
                    src={index % 2 === 0 ? "/logo/leave-green.svg" : "/logo/leave-pink.svg"} 
                    alt="Leaf timeline marker" 
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary rounded-full scale-75">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? "md:rounded-r-none" : "md:rounded-l-none"} border border-neutral-100 hover:border-primary/20 transition-colors duration-300`}
              >
                <div className="inline-block w-8 h-8 relative mb-3">
                  <img 
                    src="/logo/leave-white.svg" 
                    alt="Leaf number background" 
                    className="w-full h-full absolute inset-0" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>

              {/* Connector line for mobile */}
              <div className="absolute left-4 top-8 bottom-0 w-1 bg-primary/20 md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 底部波浪分隔线 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
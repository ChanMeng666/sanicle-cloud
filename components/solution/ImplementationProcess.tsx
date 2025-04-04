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
    <section className="w-full py-12 md:py-16 bg-background relative -mt-10 z-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-pale rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-beige rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary-pale text-primary text-sm font-medium rounded-full mb-3">
            Implementation Process
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal">Simple Implementation Process</h2>
          <p className="text-slate mt-2 max-w-2xl mx-auto">
            Start using Sanicle.cloud with just a few simple steps.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2 bg-primary-pale"></div>

          {steps.map((item, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-0 pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 transform -translate-x-1/2 md:translate-x-1/2">
                {item.icon}
              </div>

              {/* Content */}
              <div
                className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? "md:rounded-r-none" : "md:rounded-l-none"}`}
              >
                <div className="inline-block w-8 h-8 rounded-full bg-primary-pale text-primary flex items-center justify-center text-lg font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-slate">{item.description}</p>
              </div>

              {/* Connector line for mobile */}
              <div className="absolute left-4 top-8 bottom-0 w-1 bg-primary-pale md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
      {/* Wave separator at the bottom of Implementation Process */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
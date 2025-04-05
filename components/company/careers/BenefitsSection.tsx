"use client"

import { Button } from "@/components/ui/button"
import { 
  HeartPulse, 
  Laptop, 
  GraduationCap, 
  CalendarDays, 
  PiggyBank, 
  Bike,
  Leaf,
  Baby,
  Globe
} from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <HeartPulse className="h-6 w-6 text-[#EE4C23]" />,
      title: "Comprehensive Health Insurance",
      description: "Includes health, dental, and vision insurance, with specialized reproductive and women's health benefits.",
    },
    {
      icon: <Laptop className="h-6 w-6 text-[#EE4C23]" />,
      title: "Remote Work Flexibility",
      description: "Hybrid work environment supporting a balance of home and office work.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-[#EE4C23]" />,
      title: "Continuous Learning Budget",
      description: "Annual learning budget for courses, workshops, and professional development.",
    },
    {
      icon: <CalendarDays className="h-6 w-6 text-[#EE4C23]" />,
      title: "Unlimited Paid Time Off",
      description: "Flexible vacation policy allowing you to rest and recharge when needed.",
    },
    {
      icon: <PiggyBank className="h-6 w-6 text-[#EE4C23]" />,
      title: "Competitive Compensation",
      description: "Compensation comparable to industry standards, with employee equity incentive plans.",
    },
    {
      icon: <Bike className="h-6 w-6 text-[#EE4C23]" />,
      title: "Health and Wellness",
      description: "Gym membership subsidies and subscriptions to mental wellness applications.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-[#EE4C23]" />,
      title: "Paid Volunteer Time",
      description: "Annual paid volunteer hours to support causes you care about.",
    },
    {
      icon: <Baby className="h-6 w-6 text-[#EE4C23]" />,
      title: "Parental Leave Benefits",
      description: "Generous paid maternity and paternity leave policies supporting new parents.",
    },
    {
      icon: <Globe className="h-6 w-6 text-[#EE4C23]" />,
      title: "Annual Team Retreats",
      description: "Company-sponsored retreats to foster team connections and cultural exchange.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fff0eb] text-[#EE4C23] text-sm font-medium mb-6">
            Employee Benefits
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#2c3e50] tracking-tight mb-6">
            Our Employee
            <span className="relative inline-block mx-2">
              Benefits
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#167d83]/20 -rotate-1 rounded"></span>
            </span>
            Go Beyond Expectations
          </h2>
          
          <p className="text-lg text-[#7f8c8d] max-w-2xl mx-auto leading-relaxed">
            At Sanicle.cloud, we understand the importance of employee health and happiness for both personal and organizational success. We offer comprehensive benefits and allowances supporting your overall wellbeing, personal growth, and career development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#167d83]/20 hover:translate-y-[-4px] group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="/logo/leave-green.svg" 
                  alt="Leaf decoration" 
                  className="w-full h-full opacity-20"
                />
              </div>
              
              <div className="p-3 rounded-xl bg-[#fff6f4] text-[#EE4C23] inline-block mb-5 group-hover:bg-[#EE4C23] group-hover:text-white transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <img 
                    src="/logo/leave-white.svg" 
                    alt="Leaf background" 
                    className="w-full h-full"
                  />
                </div>
                <div className="relative z-10">
                  {benefit.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3 group-hover:text-[#167d83] transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-[#7f8c8d]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-[#167d83] rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#167d83] to-[#0e5a5f]"></div>
            
            <div className="absolute top-0 right-0 w-40 h-40">
              <img 
                src="/logo/leave-white.svg" 
                alt="Leaf decoration" 
                className="w-full h-full opacity-10 transform rotate-45"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32">
              <img 
                src="/logo/leave-white.svg" 
                alt="Leaf decoration" 
                className="w-full h-full opacity-10 transform -rotate-15"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Are You Ready to Join Us?</h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Browse our current job openings to find the ideal position that matches your skills and passion.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-[#167d83] hover:bg-gray-100 shadow-lg">
                  Browse Positions
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More About Benefits
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
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
      icon: <HeartPulse className="h-6 w-6 text-secondary" />,
      title: "Comprehensive Health Insurance",
      description: "Includes health, dental, and vision insurance, with specialized reproductive and women's health benefits.",
    },
    {
      icon: <Laptop className="h-6 w-6 text-secondary" />,
      title: "Remote Work Flexibility",
      description: "Hybrid work environment supporting a balance of home and office work.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-secondary" />,
      title: "Continuous Learning Budget",
      description: "Annual learning budget for courses, workshops, and professional development.",
    },
    {
      icon: <CalendarDays className="h-6 w-6 text-secondary" />,
      title: "Unlimited Paid Time Off",
      description: "Flexible vacation policy allowing you to rest and recharge when needed.",
    },
    {
      icon: <PiggyBank className="h-6 w-6 text-secondary" />,
      title: "Competitive Compensation",
      description: "Compensation comparable to industry standards, with employee equity incentive plans.",
    },
    {
      icon: <Bike className="h-6 w-6 text-secondary" />,
      title: "Health and Wellness",
      description: "Gym membership subsidies and subscriptions to mental wellness applications.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-secondary" />,
      title: "Paid Volunteer Time",
      description: "Annual paid volunteer hours to support causes you care about.",
    },
    {
      icon: <Baby className="h-6 w-6 text-secondary" />,
      title: "Parental Leave Benefits",
      description: "Generous paid maternity and paternity leave policies supporting new parents.",
    },
    {
      icon: <Globe className="h-6 w-6 text-secondary" />,
      title: "Annual Team Retreats",
      description: "Company-sponsored retreats to foster team connections and cultural exchange.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 relative -mt-10 z-20 overflow-hidden">
      {/* Top transition from the previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50/80 to-slate-50 pointer-events-none"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 pattern-dots opacity-15"></div>
      
      {/* Leaf background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-10 hidden lg:block">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-full h-full rotate-45" />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 hidden lg:block">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-full h-full -rotate-12" />
      </div>
      
      {/* Floating glowing shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            Employee Benefits
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight mb-6">
            Our Employee
            <span className="relative inline-block mx-2">
              Benefits
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -rotate-1 rounded"></span>
            </span>
            Go Beyond Expectations
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            At Sanicle.cloud, we understand the importance of employee health and happiness for both personal and organizational success. We offer comprehensive benefits and allowances supporting your overall wellbeing, personal growth, and career development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:translate-y-[-4px] group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="/logo/leave-green.svg" 
                  alt="Leaf decoration" 
                  className="w-full h-full opacity-20"
                />
              </div>
              
              <div className="p-3 rounded-xl bg-secondary/10 text-secondary inline-block mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 relative overflow-hidden">
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
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            
            {/* Leaf decorations */}
            <div className="absolute top-0 right-0 w-40 h-40">
              <img 
                src="/logo/leave-white.svg" 
                alt="Leaf decoration" 
                className="w-full h-full opacity-20 transform rotate-45"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32">
              <img 
                src="/logo/leave-white.svg" 
                alt="Leaf decoration" 
                className="w-full h-full opacity-20 transform -rotate-15"
              />
            </div>
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-24 h-24">
              <img 
                src="/logo/leave-white.svg" 
                alt="Leaf decoration" 
                className="w-full h-full opacity-10 transform rotate-180"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Are You Ready to Join Us?</h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Browse our current job openings to find the ideal position that matches your skills and passion.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
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
      
      {/* Wave divider for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
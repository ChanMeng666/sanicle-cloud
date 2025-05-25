"use client"

import { 
  ArrowRight, 
  Heart, 
  CalendarCheck, 
  Users, 
  Handshake, 
  PuzzleIcon, 
  Coins,
  LineChart, 
  Package, 
  UsersRound, 
  Sparkles, 
  ShieldCheck, 
  Building2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function BenefitsHero() {
  const [selectedBenefit, setSelectedBenefit] = useState("employees")

  return (
    <section className="relative w-full bg-gradient-to-br from-teal-50 via-teal-50/90 to-white py-12 md:py-24 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      {/* Decorative leaf elements */}
      <div className="absolute top-12 right-0 -mr-20 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.08] transform -rotate-12">
        <img 
          src="/logo/leave-green.svg" 
          alt="Decorative leaf" 
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] opacity-[0.06] transform rotate-12">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Decorative leaf" 
          className="w-full h-full"
        />
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-300 rounded-full opacity-[0.08] blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-coral-300 rounded-full opacity-[0.08] blur-[100px]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 pb-8">
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm font-medium text-primary">
            <span className="text-xs font-medium">Comprehensive women&apos;s health benefits</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 max-w-5xl">
            Elevate Your <span className="text-primary">Workplace Wellness</span> with Our Menstrual Health Platform
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our platform offers comprehensive menstrual health benefits for both employers and employees, making your workplace more inclusive and supportive.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="inline-flex p-1 rounded-lg bg-neutral-100">
            <button
              onClick={() => setSelectedBenefit("employers")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedBenefit === "employers"
                  ? "bg-white shadow-sm text-primary"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              For Employers
            </button>
            <button
              onClick={() => setSelectedBenefit("employees")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedBenefit === "employees"
                  ? "bg-white shadow-sm text-primary"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              For Employees
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {selectedBenefit === "employers" && (
              <>
                <BenefitCard
                  title="Improve Workplace Health Equity"
                  description="Support your employees with comprehensive menstrual health benefits that enhance workplace wellness and demonstrate your commitment to health equity."
                  icon={<Heart className="w-6 h-6" />}
                />
                <BenefitCard
                  title="Reduce Absenteeism"
                  description="Help employees manage menstrual symptoms effectively, reducing work days missed due to period-related issues and improving overall productivity."
                  icon={<CalendarCheck className="w-6 h-6" />}
                />
                <BenefitCard
                  title="Attract & Retain Talent"
                  description="Stand out as an employer of choice with innovative health benefits that demonstrate your commitment to supporting women's health needs."
                  icon={<Users className="w-6 h-6" />}
                />
                <BenefitCard
                  title="Enhance Company Culture"
                  description="Create a more inclusive workplace environment by acknowledging and supporting menstrual health as an essential aspect of overall wellbeing."
                  icon={<Handshake className="w-6 h-6" />}
                />
                <BenefitCard
                  title="Easy Implementation"
                  description="Our platform integrates seamlessly with your existing benefits systems with minimal administrative overhead and flexible deployment options."
                  icon={<PuzzleIcon className="w-6 h-6" />}
                />
                <BenefitCard
                  title="Cost-Effective Solution"
                  description="Invest in a comprehensive menstrual health platform that delivers significant ROI through improved productivity and reduced healthcare costs."
                  icon={<Coins className="w-6 h-6" />}
                />
              </>
            )}

            {selectedBenefit === "employees" && (
              <>
                <BenefitCard
                  title="Personalized Cycle Insights"
                  description="Track your menstrual and menopausal cycles and receive predictive insights to better understand patterns, symptoms, and how they affect your work and well-being."
                  icon={<LineChart className="w-6 h-6" />}
                />
                <BenefitCard
                  title="Access to Menstrual Products"
                  description="Receive a monthly allowance for menstrual products delivered to your home or office, ensuring you always have access to necessary supplies."
                  icon={<Package className="w-6 h-6" />}
                />
                <BenefitCard
                  title="Expert Resources & Support"
                  description="Access educational content, connect with Sani AI Assistant for real time support, Connect with healthcare providers, and join community forums for support from people with similar experiences."
                  icon={<UsersRound className="w-6 h-6" />}
                />
                <BenefitCard
                  title="Symptom Management Tools"
                  description="Discover personalized strategies for managing menstrual and menopausal symptoms, including curated exercises, nutrition advice, and self-care practices."
                  icon={<Sparkles className="w-6 h-6" />}
                />
                <BenefitCard
                  title="Private & Secure"
                  description="Your health data remains completely private and secure. We never share individual data with employers or third parties without explicit consent."
                  icon={<ShieldCheck className="w-6 h-6" />}
                />
                <BenefitCard
                  title="Workplace Accommodations"
                  description="Access resources to help communicate needs with managers and request appropriate accommodations for menstrual health concerns."
                  icon={<Building2 className="w-6 h-6" />}
                />
              </>
            )}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-base">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 px-8 py-6 rounded-full text-base"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z">
          </path>
        </svg>
      </div>
    </section>
  )
}

function BenefitCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="group flex flex-col p-6 bg-white rounded-xl shadow-sm border border-neutral-100 hover:border-primary/10 hover:shadow-md transition-all duration-200">
      <div className="w-12 h-12 mb-4 p-2 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-200">{title}</h3>
      <p className="text-neutral-600 text-sm flex-grow">{description}</p>
    </div>
  )
} 
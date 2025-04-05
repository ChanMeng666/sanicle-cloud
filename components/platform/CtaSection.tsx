"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary to-teal-700 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Decorative leaf elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-20 transform -rotate-12"
        />
      </div>
      <div className="absolute top-1/2 right-0 w-80 h-80 -mr-20">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-15 transform rotate-45"
        />
      </div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 -mb-20">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-10 transform rotate-90"
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 animate-float hidden sm:block">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-40"
        />
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 animate-float-delay hidden sm:block">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-30"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Ready to upgrade your <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">employee benefits</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Provide comprehensive menstrual health support for your team. Schedule a demo to learn how our platform delivers significant return on investment.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Left CTA */}
            <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-xl text-left hover:bg-white/15 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Schedule a Demo</h3>
              <p className="text-white/80 text-sm sm:text-base mb-4">
                Our experts will show you platform features and explain how to easily implement it.
              </p>
              <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300">
                Book a Time <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Right quick start form */}
            <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-xl text-left hover:bg-white/15 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Get Started</h3>
              <p className="text-white/80 text-sm sm:text-base mb-4">
                Fill in the information below and our team will contact you within 24 hours.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Company Email"
                  className="w-full px-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:bg-white/25"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white border-none hover:scale-105 transition-all duration-300"
                >
                  Get Information
                </Button>
              </form>
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 sm:mt-16">
            <p className="text-white/60 text-xs sm:text-sm mb-6">Trusted by industry leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300 relative">
                <div className="bg-white h-full w-20 sm:w-24 rounded flex items-center justify-center">
                  <img src="/logo/leave-green.svg" alt="Company logo" className="h-4 sm:h-5 absolute" />
                </div>
              </div>
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300 relative">
                <div className="bg-white h-full w-20 sm:w-24 rounded flex items-center justify-center">
                  <img src="/logo/leave-green.svg" alt="Company logo" className="h-4 sm:h-5 absolute" />
                </div>
              </div>
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300 relative">
                <div className="bg-white h-full w-20 sm:w-24 rounded flex items-center justify-center">
                  <img src="/logo/leave-green.svg" alt="Company logo" className="h-4 sm:h-5 absolute" />
                </div>
              </div>
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300 relative">
                <div className="bg-white h-full w-20 sm:w-24 rounded flex items-center justify-center">
                  <img src="/logo/leave-green.svg" alt="Company logo" className="h-4 sm:h-5 absolute" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-auto">
          <path fill="#ffffff" d="M0,0L48,10.7C96,21,192,43,288,53.3C384,64,480,64,576,69.3C672,75,768,85,864,80C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
} 
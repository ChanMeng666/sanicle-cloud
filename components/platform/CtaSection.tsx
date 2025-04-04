"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#167d83] to-[#0d4c4f] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-12 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-md animate-float"></div>
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
            <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-xl text-left hover:bg-white/15 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Schedule a Demo</h3>
              <p className="text-white/80 text-sm sm:text-base mb-4">
                Our experts will show you platform features and explain how to easily implement it.
              </p>
              <Button size="lg" className="w-full bg-white text-[#167d83] hover:bg-white/90 hover:scale-105 transition-all duration-300">
                Book a Time <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Right quick start form */}
            <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-xl text-left hover:bg-white/15 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg">
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
                  className="w-full bg-[#EE4C23] hover:bg-[#d43d18] text-white border-none hover:scale-105 transition-all duration-300"
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
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white h-full w-20 sm:w-24 rounded"></div>
              </div>
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white h-full w-20 sm:w-24 rounded"></div>
              </div>
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white h-full w-20 sm:w-24 rounded"></div>
              </div>
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white h-full w-20 sm:w-24 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
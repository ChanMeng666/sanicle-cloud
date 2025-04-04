"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#167d83] to-[#0e5a5f] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 xl:col-span-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Ready to become our partner?
            </h2>
            <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-2xl mb-6 md:mb-8 leading-relaxed">
              Join the Sanicle.cloud partner network to provide innovative benefits solutions to your clients while creating new revenue streams and building a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-[#167d83] hover:bg-white/90 shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Apply for Partnership <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                Schedule a Demo
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">Quick Start</h3>
                <p className="text-white/80 text-sm md:text-base">Fill out the form below and our partner team will contact you</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white text-xs md:text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-white text-xs md:text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your company name"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-white text-xs md:text-sm font-medium mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="Enter your business email"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                />
              </div>
              <Button className="w-full bg-white text-[#167d83] hover:bg-white/90 mt-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium">
                Submit Application
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
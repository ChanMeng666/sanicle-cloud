"use client"

import { Button } from "@/components/ui/button"
import { Users, Send, ChevronRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary-pale via-beige-light to-beige relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="25" r="60" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 opacity-10 transform rotate-180">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="25" r="60" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-charcoal">Let's Enhance Women's Health Benefits Together</h2>
            <p className="text-slate max-w-2xl mx-auto text-lg">
              Through Sanicle.cloud, you can access unprecedented health support and resources to improve your work-life balance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white rounded-xl p-6 md:p-8 border border-primary/10 shadow-lg transform transition-transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-pale flex items-center justify-center mr-4">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal">Sign Up Now</h3>
                    <p className="text-slate text-sm">Start your health journey in minutes</p>
                  </div>
                </div>

                <p className="text-slate mb-6">
                  If your employer already offers Sanicle.cloud as a benefit, you can register immediately and start using our comprehensive health services.
                </p>

                <Button variant="default" className="w-full group">
                  Create Account <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl p-6 md:p-8 border border-primary/10 shadow-lg transform transition-transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary-light/20 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal">Recommend to Your Company</h3>
                    <p className="text-slate text-sm">Help all employees get better benefits</p>
                  </div>
                </div>

                <p className="text-slate mb-6">
                  Your employer doesn't offer Sanicle.cloud benefits yet? Help us connect with your HR department to secure this important benefit for you and your colleagues.
                </p>

                <Button variant="secondary" className="w-full group">
                  Send Recommendation <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 md:mt-16">
            <p className="text-slate text-sm md:text-base mb-4">Trusted by companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="h-8 w-20 bg-primary/10 rounded-md"></div>
              <div className="h-8 w-20 bg-primary/10 rounded-md"></div>
              <div className="h-8 w-20 bg-primary/10 rounded-md"></div>
              <div className="h-8 w-20 bg-primary/10 rounded-md"></div>
              <div className="h-8 w-20 bg-primary/10 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
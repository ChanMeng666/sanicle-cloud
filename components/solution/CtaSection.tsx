"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-[#167d83] to-[#0e5a5f] text-white relative -mt-10 z-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 p-1 rounded-full w-fit mx-auto mb-6">
            <div className="bg-white/20 px-4 py-1 rounded-full">
              <span className="text-white text-sm font-medium">Join with over 500 companies</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center">
            Ready to transform your workplace benefits?
          </h2>

          <p className="text-white/80 mb-8 text-center text-lg">
            Join the growing number of forward-thinking companies that prioritize women's health in the workplace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#167d83] hover:bg-white/90">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 px-4 py-2 rounded-full">
              <span className="text-white text-sm">No credit card required</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-full">
              <span className="text-white text-sm">14-day free trial</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-full">
              <span className="text-white text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
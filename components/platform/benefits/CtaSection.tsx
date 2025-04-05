"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-teal-700 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
      
      {/* Decorative leaf elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.1] transform rotate-180">
        <img 
          src="/logo/leave-green.svg" 
          alt="Decorative leaf" 
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.08]">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Decorative leaf" 
          className="w-full h-full"
        />
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-300 rounded-full opacity-[0.15] blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary rounded-full opacity-[0.1] blur-[100px]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white">
              <span className="text-xs font-medium">Transform Your Workplace</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-4xl">
              Ready to Support Your Team's Health & Wellbeing?
            </h2>
            <p className="text-lg text-white/80 max-w-3xl">
              Join forward-thinking companies that prioritize menstrual health as part of their comprehensive wellness programs.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">For Employers</h3>
              <p className="text-white/80 mb-6">
                Discover how our platform can integrate with your existing benefits package to support workplace wellness and productivity.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90 px-6 py-5 rounded-full">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">For Employees</h3>
              <p className="text-white/80 mb-6">
                Ask your HR department about implementing our menstrual health platform as part of your workplace benefits.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90 px-6 py-5 rounded-full">
                Resources for Employees
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center">
            <p className="text-white/80 mb-4 text-center max-w-2xl">
              Join over 500+ progressive companies supporting menstrual health in the workplace
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white/10 h-12 w-24 rounded-md flex items-center justify-center">
                  <div className="text-white/50 text-xs">Company Logo</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
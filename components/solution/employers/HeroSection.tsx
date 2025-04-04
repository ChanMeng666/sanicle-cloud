"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-primary-pale clip-path-slant z-0"></div>

      <div className="container relative z-10 px-4 sm:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="py-4 sm:py-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-pale text-primary text-sm font-medium shadow-sm">
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Tailored for Businesses
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-tight">
                Comprehensive benefits for <span className="text-primary relative">your team
                  <svg className="absolute bottom-0 left-0 w-full h-2 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 9, 50 5 Q 75 1, 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-slate max-w-xl">
                Attract and retain top talent by providing innovative health benefits that meet the unique needs of female employees.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary-pale px-6 py-2.5 rounded-lg transition-all">
                  Schedule a Demo
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center p-3 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm hover:shadow transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary-pale text-primary flex items-center justify-center mr-4 shadow-inner">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate font-medium">Employee Retention Increase</div>
                    <div className="text-xl font-bold text-charcoal">+24%</div>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm hover:shadow transition-all">
                  <div className="w-12 h-12 rounded-full bg-beige text-secondary flex items-center justify-center mr-4 shadow-inner">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate font-medium">Absenteeism Reduction</div>
                    <div className="text-xl font-bold text-charcoal">-32%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center py-8 relative">
            <div className="relative mx-auto">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-75 blur-lg"></div>
              <div className="relative bg-white rounded-xl overflow-hidden border shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
                <div className="h-10 bg-background border-b flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#f87171]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#facc15]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#4ade80]"></div>
                  </div>
                </div>
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Employee Benefits Dashboard"
                  className="w-full object-cover"
                />
              </div>

              <div className="absolute -top-8 -right-8 bg-white rounded-xl p-4 shadow-lg rotate-6 hover:rotate-3 transition-transform duration-300">
                <div className="flex items-center text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary-pale text-primary flex items-center justify-center mr-3 shadow-inner">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Employee Satisfaction</p>
                    <p className="text-secondary font-bold text-lg">↑ 94%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-4 shadow-lg -rotate-6 hover:-rotate-3 transition-transform duration-300">
                <div className="flex items-center text-sm">
                  <div className="w-10 h-10 rounded-full bg-beige text-secondary flex items-center justify-center mr-3 shadow-inner">
                    <BarChart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">ROI</p>
                    <p className="text-primary font-bold text-lg">↑ 320%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-16 md:py-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#f8f9fa] clip-path-slant z-0"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 items-stretch">
          <div className="py-8 md:py-24 pr-4 md:pr-12 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium">
                For Employers
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#2c3e50]">
                Empower Your <span className="text-[#167d83]">Workforce</span> with Comprehensive Benefits
              </h1>
              <p className="text-lg text-[#7f8c8d]">
                Attract and retain top talent by providing innovative health benefits that address the unique needs of
                your female employees.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                  Book a Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[#7f8c8d]">Improved Retention</div>
                    <div className="text-lg font-medium text-[#2c3e50]">+24%</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#fef6e9] text-[#EE4C23] flex items-center justify-center mr-3">
                    <BarChart className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[#7f8c8d]">Reduced Absences</div>
                    <div className="text-lg font-medium text-[#2c3e50]">-32%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center py-8">
            <div className="relative mx-auto">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#167d83] to-[#EE4C23] opacity-75 blur"></div>
              <div className="relative bg-white rounded-xl overflow-hidden border shadow-lg">
                <div className="h-8 bg-[#f8f9fa] border-b flex items-center px-4">
                  <div className="flex space-x-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#facc15]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]"></div>
                  </div>
                </div>
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Employee benefits dashboard"
                  className="w-full object-cover"
                />
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-3 shadow-lg rotate-6">
                <div className="flex items-center text-sm">
                  <div className="w-8 h-8 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-2">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2c3e50]">Employee Satisfaction</p>
                    <p className="text-[#EE4C23] font-bold">↑ 94%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-3 shadow-lg -rotate-6">
                <div className="flex items-center text-sm">
                  <div className="w-8 h-8 rounded-full bg-[#fef6e9] text-[#EE4C23] flex items-center justify-center mr-2">
                    <BarChart className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2c3e50]">ROI</p>
                    <p className="text-[#167d83] font-bold">↑ 320%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
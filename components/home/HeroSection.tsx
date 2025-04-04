"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Play, Star, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e6f5f6] via-white to-[#fef6e9]"></div>

      {/* Animated background shapes */}
      <div className="absolute top-10 md:top-20 left-10 md:left-20 w-32 md:w-64 h-32 md:h-64 rounded-full bg-[#167d83]/5 animate-pulse"></div>
      <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-40 md:w-80 h-40 md:h-80 rounded-full bg-[#EE4C23]/5 animate-pulse delay-1000"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-4 md:space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium">
              Revolutionizing Women's Health
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2c3e50] leading-tight">
              Empower Your <span className="text-[#167d83]">Workplace</span> with Menstrual Health Benefits
            </h1>

            <p className="text-base sm:text-lg text-[#7f8c8d] md:text-xl max-w-2xl">
              Sanicle.cloud offers a modular, end-to-end employee benefits platform with flexible menstrual health
              options, freeing employees from vendor fatigue and creating cost-effective benefits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white rounded-full">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6] rounded-full"
              >
                Watch Demo <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-[#e6f5f6] flex items-center justify-center text-[#167d83] text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-xs sm:text-sm text-[#7f8c8d]">
                  Trusted by <span className="font-semibold text-[#2c3e50]">500+</span> companies worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-[#167d83]/10 rounded-full blur-3xl"></div>

            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 mx-auto max-w-[80%] md:max-w-full">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Women in professional setting"
                  className="w-full"
                  width={500}
                  height={600}
                />
              </div>

              {/* Floating elements - 在移动设备上隐藏或调整位置 */}
              <div className="hidden md:block absolute top-0 -right-10 z-20 bg-white rounded-lg shadow-lg p-3 md:p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-2 md:mr-3">
                    <Star className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50] text-sm md:text-base">97% Satisfaction</p>
                    <p className="text-xs md:text-sm text-[#7f8c8d]">From our users</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -bottom-10 -left-10 z-20 bg-white rounded-lg shadow-lg p-3 md:p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#fef6e9] text-[#EE4C23] flex items-center justify-center mr-2 md:mr-3">
                    <Users className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50] text-sm md:text-base">1,200+ Users</p>
                    <p className="text-xs md:text-sm text-[#7f8c8d]">On waitlist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - 在移动设备上隐藏 */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
        <p className="text-[#7f8c8d] text-sm mb-2">Scroll to explore</p>
        <ChevronDown className="h-5 w-5 text-[#167d83]" />
      </div>

      {/* 使用斜线分隔符替代波浪形分隔线 */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-white transform -skew-y-2"></div>
    </section>
  )
} 
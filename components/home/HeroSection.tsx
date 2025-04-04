"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Play, Star, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e6f5f6] via-white to-[#fef6e9]"></div>

      {/* Animated background shapes */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#167d83]/5 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#EE4C23]/5 animate-pulse delay-1000"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium">
              Revolutionizing Women's Health
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2c3e50] leading-tight">
              Empower Your <span className="text-[#167d83]">Workplace</span> with Menstrual Health Benefits
            </h1>

            <p className="text-lg text-[#7f8c8d] md:text-xl max-w-2xl">
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
                    className="w-10 h-10 rounded-full border-2 border-white bg-[#e6f5f6] flex items-center justify-center text-[#167d83] text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm text-[#7f8c8d]">
                  Trusted by <span className="font-semibold text-[#2c3e50]">500+</span> companies worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-[#167d83]/10 rounded-full blur-3xl"></div>

            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Women in professional setting"
                  className="w-full"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute top-0 -right-10 z-20 bg-white rounded-lg shadow-lg p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-3">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">97% Satisfaction</p>
                    <p className="text-sm text-[#7f8c8d]">From our users</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 z-20 bg-white rounded-lg shadow-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#fef6e9] text-[#EE4C23] flex items-center justify-center mr-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">1,200+ Users</p>
                    <p className="text-sm text-[#7f8c8d]">On waitlist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-[#7f8c8d] text-sm mb-2">Scroll to explore</p>
        <ChevronDown className="h-5 w-5 text-[#167d83]" />
      </div>

      {/* 使用斜线分隔符替代波浪形分隔线 */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2"></div>
    </section>
  )
} 
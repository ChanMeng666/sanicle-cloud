"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#167d83] to-[#0e5a5f] py-16 md:py-24 text-white overflow-hidden relative">
      {/* 创新的背景图案 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,0 L10,0 L10,10 L0,10 Z" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1" fill="white" />
                <circle cx="10" cy="10" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-2">
              Platform Overview
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              A Comprehensive Platform for Menstrual Health Benefits
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Sanicle.cloud offers a modular, end-to-end employee benefits platform with flexible menstrual health
              options, freeing employers from vendor fatigue.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="bg-white text-[#167d83] hover:bg-white/90">
                Explore Features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Request Demo
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="platform-showcase relative w-full max-w-lg">
              {/* 创新的3D展示效果 */}
              <div className="platform-device relative z-20 bg-white rounded-xl shadow-2xl overflow-hidden border-8 border-gray-100">
                <img src="/placeholder.svg?height=500&width=500" alt="Platform dashboard" className="w-full" />
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100 flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
              </div>

              {/* 浮动UI元素 */}
              <div className="absolute top-1/4 -right-12 z-30 bg-white rounded-lg shadow-lg p-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-2">
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-[#2c3e50]">Users</p>
                    <p className="text-[#7f8c8d]">1,234</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1/4 -left-12 z-30 bg-white rounded-lg shadow-lg p-3 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#fef6e9] text-[#EE4C23] flex items-center justify-center mr-2">
                    <BarChart className="h-4 w-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-[#2c3e50]">Analytics</p>
                    <p className="text-[#7f8c8d]">Real-time</p>
                  </div>
                </div>
              </div>

              {/* 背景装饰 */}
              <div className="absolute -left-4 -top-4 h-72 w-72 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -right-4 -bottom-4 h-72 w-72 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 创新的分隔设计 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  )
} 
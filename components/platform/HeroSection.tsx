"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#167d83] to-[#0e5a5f] py-12 sm:py-16 md:py-24 text-white overflow-hidden relative">
      {/* Innovative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-5 gap-10 p-10">
            {[...Array(25)].map((_, index) => {
              const opacityValue = index % 2 === 0 ? '30' : '70';
              const rotateValue = (index * 15) % 360;
              
              return (
                <img 
                  key={index} 
                  src="/logo/leave-white.svg" 
                  alt="Leaf pattern"
                  className={`w-8 h-8 opacity-${opacityValue} transform rotate-${rotateValue}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Dynamic background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf background" 
          className="w-full h-full opacity-30 animate-pulse"
        />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf background" 
          className="w-full h-full opacity-30 animate-pulse delay-1000"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 mb-2">
              <span className="flex h-2 w-2 rounded-full bg-[#EE4C23] mr-2"></span>
              Platform Overview
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              Menstrual Health Benefits<br className="sm:hidden" />
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Complete Platform</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-xl">
              Sanicle.cloud offers a modular, end-to-end employee benefits platform with flexible menstrual health options, helping employers eliminate vendor fatigue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-white text-[#167d83] hover:bg-white/90 hover:scale-105 transition-all duration-300 rounded-lg text-base sm:text-lg py-6 px-8">
                Explore Features <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white bg-white/15 hover:bg-white/25 hover:border-white/80 transition-all duration-300 rounded-lg text-base sm:text-lg py-6 px-8 shadow-glow"
              >
                Request Demo
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center mt-8 lg:mt-0">
            <div className="platform-showcase relative w-full max-w-md sm:max-w-lg md:max-w-xl">
              {/* Innovative 3D showcase effect */}
              <div className="platform-device relative z-20 bg-white rounded-xl shadow-2xl overflow-hidden border-8 border-gray-100 transform hover:rotate-1 transition-transform duration-500">
                <img src="/placeholder.svg?height=500&width=500" alt="Platform dashboard" className="w-full" />
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100 flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
              </div>

              {/* Floating UI elements - responsive to different screen sizes */}
              <div className="hidden sm:block absolute top-1/4 -right-6 md:-right-12 z-30 bg-white rounded-lg shadow-lg p-3 transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer">
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

              <div className="hidden sm:block absolute bottom-1/4 -left-6 md:-left-12 z-30 bg-white rounded-lg shadow-lg p-3 transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer">
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

              {/* Background decoration */}
              <div className="absolute -left-4 -top-4 h-56 w-56 sm:h-72 sm:w-72 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -right-4 -bottom-4 h-56 w-56 sm:h-72 sm:w-72 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovative separator design */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative h-12 sm:h-16 overflow-hidden">
          <div className="absolute bottom-0 w-full flex justify-between">
            {[...Array(12)].map((_, index) => (
              <img 
                key={index} 
                src="/logo/leave-white.svg" 
                alt="Leaf separator" 
                className="w-12 h-12 opacity-30 transform"
                style={{ transform: `translateY(-${index % 2 ? '25%' : '50%'}) rotate(${index * 30}deg)` }}
              />
            ))}
          </div>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12 sm:h-16">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#ffffff"></path>
          </svg>
        </div>
      </div>

      {/* Add global styles */}
      <style jsx global>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  )
} 
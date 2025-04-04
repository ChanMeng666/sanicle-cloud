"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Clock, Globe, ChevronDown, Star, Users } from "lucide-react"

export function AboutHero() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#167d83]/95 via-[#167d83]/85 to-[#126e73]/80 py-16 sm:py-20 lg:py-28">
      {/* Background pattern - improve quality and brightness */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMzFhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yem05LTE0YTEgMSAwIDEgMSAwIDIgMSAxIDAgMCAxIDAtMnptMCAxNGExIDEgMCAxIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bS05IDE0YTEgMSAwIDEgMSAwIDIgMSAxIDAgMCAxIDAtMnptLTkgMGExIDEgMCAxIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTAtMTRhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yem0wLTE0YTEgMSAwIDEgMSAwIDIgMSAxIDAgMCAxIDAtMnoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-10"></div>

      {/* Animated floating shapes - increase quantity and opacity variations */}
      <div className="absolute top-[15%] left-[20%] w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-white/10 animate-float"></div>
      <div className="absolute bottom-[15%] right-[20%] w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-white/15 animate-float-delay"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-[#EE4C23]/10 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-[#EE4C23]/15 animate-pulse delay-700"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Text content area - better responsive typography */}
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md shadow-sm text-white text-sm font-medium mb-6 transform hover:scale-105 transition-transform duration-300">
              <Heart className="h-4 w-4 mr-2 text-[#ff6b6b]" /> Our Story
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Transforming 
              <span className="relative z-10 ml-2">
                <span className="relative z-10">Women's Health</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#EE4C23]/40 -z-10 skew-x-3"></span>
              </span> <br className="hidden sm:block" />
              <span className="text-white/90 mt-2 block">in the Workplace</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Sanicle.cloud is dedicated to revolutionizing how organizations support women's health through innovative menstrual health benefit solutions, creating more inclusive and healthier work environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white font-medium px-6 py-6 rounded-xl transform hover:translate-y-[-2px] transition-all shadow-lg hover:shadow-xl">
                Our Mission <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/15 font-medium px-6 py-6 rounded-xl backdrop-blur-sm transform hover:translate-y-[-2px] transition-all">
                Join Our Team
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/80 bg-[#f8f9fa]/90 flex items-center justify-center text-[#167d83] text-xs font-bold shadow-md"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-xs sm:text-sm text-white/80">
                  Trusted by <span className="font-semibold text-white">500+</span> companies
                </p>
              </div>
            </div>
          </div>

          {/* Image showcase area - responsive adjustments and visual enhancements */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Main image - increased responsive control and visual effects */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/20 backdrop-blur-md mx-auto lg:mx-0 max-w-sm sm:max-w-md">
                <img 
                  src="/placeholder.svg?height=600&width=500" 
                  alt="Diverse team members" 
                  className="w-full object-cover"
                  loading="lazy"
                />
                {/* Image overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#167d83]/40 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Floating info cards - enhanced visual effects and responsiveness */}
              <div className="absolute top-0 -right-4 sm:-right-10 z-20 bg-white rounded-xl shadow-xl p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300 hidden sm:block">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-3 shadow-inner">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">Founded in 2022</p>
                    <p className="text-sm text-[#7f8c8d]">Created by medical experts</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 sm:-bottom-10 -left-4 sm:-left-10 z-20 bg-white rounded-xl shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300 hidden sm:block">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#fef6e9] text-[#EE4C23] flex items-center justify-center mr-3 shadow-inner">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">Global Impact</p>
                    <p className="text-sm text-[#7f8c8d]">Transforming workplaces</p>
                  </div>
                </div>
              </div>
              
              {/* Additional data card */}
              <div className="absolute top-1/2 -right-4 sm:-right-16 z-20 bg-white rounded-xl shadow-xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300 hidden md:block">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#f8e9fe] text-[#9c27b0] flex items-center justify-center mr-3 shadow-inner">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">120k+</p>
                    <p className="text-sm text-[#7f8c8d]">Active users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - visual enhancement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <p className="text-sm mb-2 font-light tracking-wider">Scroll to explore</p>
        <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
      
      {/* Wave divider - smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
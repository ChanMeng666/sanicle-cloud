"use client"

import { Button } from "@/components/ui/button"
import { Star, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full relative flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary-light min-h-[90vh]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 pattern-dots opacity-15"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
      
      {/* Animated floating leaf shapes */}
      <div className="absolute top-[5%] -left-[10%] w-[40%] h-[40%]">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-20 transform rotate-15 filter blur-[80px] animate-float"
        />
      </div>
      <div className="absolute bottom-[5%] -right-[10%] w-[50%] h-[50%]">
        <img 
          src="/logo/leave-green.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-30 transform -rotate-15 filter blur-[100px] animate-float-delay"
        />
      </div>
      
      {/* Smaller decorative leaves */}
      <div className="absolute top-[20%] right-[15%] w-24 h-24 md:w-32 md:h-32 hidden sm:block">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-30 transform rotate-45 animate-float"
        />
      </div>
      <div className="absolute bottom-[30%] left-[10%] w-16 h-16 md:w-24 md:h-24 hidden sm:block">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-20 transform -rotate-12 animate-float-delay"
        />
      </div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>

      <div className="container px-4 md:px-6 py-20 md:py-32 lg:py-40 relative z-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 transform hover:scale-105 transition-transform duration-300">
            <Star className="h-4 w-4 mr-2 text-yellow-300" /> Join Our Team
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Join <span className="relative">Us
              <span className="absolute bottom-2 left-0 w-full h-2 bg-secondary/30 -rotate-1 rounded"></span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            We're continually seeking exceptional individuals eager to help transform how women access comprehensive healthcare support - from menstrual health and menopause management to mental wellbeing. Join us on this mission to support women through every life stage!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-2 border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
              Browse Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Our Culture
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 sm:w-10 sm:h-10 relative border-2 border-white/80 bg-white/90 flex items-center justify-center text-primary text-xs font-bold shadow-md overflow-hidden rounded-full"
                >
                  <img 
                    src="/logo/leave-green.svg" 
                    alt="Leaf background" 
                    className="absolute w-full h-full opacity-20"
                  />
                  <span className="relative z-10">{String.fromCharCode(64 + i)}</span>
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-white animate-bounce hidden md:flex">
        <p className="text-sm mb-2 font-light tracking-wider">Scroll to explore</p>
        <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
      
      {/* Mobile scroll indicator - better for touch screens */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 md:hidden">
        <div className="flex flex-col items-center">
          <p className="text-white/70 text-sm mb-1">Scroll Down</p>
          <div className="flex justify-center items-center h-6 w-16 relative">
            <img 
              src="/logo/leave-white.svg" 
              alt="Leaf indicator" 
              className="w-full h-full absolute opacity-20 top-0 left-0"
            />
            <div className="flex relative z-10">
              <div className="w-1 h-3 bg-white/70 rounded-full mx-0.5 animate-pulse"></div>
              <div className="w-1 h-3 bg-white/70 rounded-full mx-0.5 animate-pulse delay-75"></div>
              <div className="w-1 h-3 bg-white/70 rounded-full mx-0.5 animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full h-auto">
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
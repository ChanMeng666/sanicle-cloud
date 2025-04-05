"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full relative flex items-center overflow-hidden bg-gradient-to-br from-[#167d83] to-[#22c0c7]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-0 -left-[10%] w-[40%] h-[40%] bg-[#EE4C23]/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 -right-[10%] w-[50%] h-[50%] bg-[#167d83]/20 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container px-4 md:px-6 py-20 md:py-32 lg:py-40 relative z-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 transform hover:scale-105 transition-transform duration-300">
            <Star className="h-4 w-4 mr-2 text-yellow-300" /> Join Our Team
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Join <span className="relative">Us
              <span className="absolute bottom-2 left-0 w-full h-2 bg-[#EE4C23]/30 -rotate-1 rounded"></span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            We're continually seeking exceptional individuals eager to help transform how we access and finance healthcare. Join us on this journey!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white border-2 border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-[#EE4C23]/20">
              Browse Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Our Culture
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-10 h-16 rounded-full border-2 border-white/50 flex items-center justify-center">
          <div className="w-2 h-4 bg-white/80 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Mobile scroll indicator - better for touch screens */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 md:hidden">
        <div className="flex flex-col items-center">
          <p className="text-white/70 text-sm mb-1">Scroll Down</p>
          <div className="w-6 h-3 flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mx-0.5 animate-pulse"></div>
            <div className="w-1 h-3 bg-white/70 rounded-full mx-0.5 animate-pulse delay-75"></div>
            <div className="w-1 h-3 bg-white/70 rounded-full mx-0.5 animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 
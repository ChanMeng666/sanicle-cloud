"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, Play, Star, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-primary-light py-16 sm:py-20 lg:py-28 w-full">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[15%] left-[10%] w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-[25%] w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-[20%] right-[20%] w-24 h-24 bg-white/10 rounded-xl rotate-12 animate-float hidden sm:block"></div>
        <div className="absolute bottom-[25%] left-[15%] w-16 h-16 bg-secondary/20 rounded-full animate-float-delay hidden sm:block"></div>
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-sm animate-slide-up">
              Cloud Solutions<br />Empowering Your Business
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 mx-auto lg:mx-0 max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Unlock data potential, simplify operations, and accelerate business innovation. Our cloud platform provides comprehensive, high-performance digital transformation services for enterprises.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" variant="coral-glow" className="rounded-full">
                <Link href="/demo">Try Now</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/solution">Explore Solutions</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative mt-8 lg:mt-0">
            <div className="relative z-10 animate-float">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Real product screenshots or assets can be used here */}
                <div className="absolute inset-0 bg-white/95 rounded-2xl shadow-card-hover overflow-hidden">
                  <div className="w-full h-12 bg-gray-100 flex items-center px-4 border-b">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-error"></div>
                      <div className="w-3 h-3 rounded-full bg-warning"></div>
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-4"></div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="h-24 bg-primary-pale rounded-md flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary/80"></div>
                      </div>
                      <div className="h-24 bg-beige rounded-md flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-secondary/80"></div>
                      </div>
                    </div>
                    <div className="h-8 bg-gray-200 rounded-md w-1/2 mb-4"></div>
                    <div className="h-32 bg-gray-100 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-8 w-16 h-16 bg-secondary rounded-lg rotate-12 animate-float-delay blur-sm"></div>
            <div className="absolute -bottom-6 left-1/4 w-20 h-20 bg-secondary-light rounded-full animate-float blur-sm"></div>
          </div>
          
          {/* Simplified UI interface for mobile display */}
          <div className="lg:hidden relative w-full max-w-[280px] mx-auto mt-8">
            <div className="relative aspect-square bg-white/95 rounded-xl shadow-card-hover overflow-hidden">
              <div className="w-full h-8 bg-gray-100 flex items-center px-3 border-b">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-error"></div>
                  <div className="w-2 h-2 rounded-full bg-warning"></div>
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                </div>
              </div>
              <div className="p-3">
                <div className="h-6 bg-gray-200 rounded w-2/3 mb-3"></div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="aspect-square bg-primary-pale rounded flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary/80"></div>
                  </div>
                  <div className="aspect-square bg-beige rounded flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-secondary/80"></div>
                  </div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div className="h-24 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce-subtle">
        <p className="text-white/70 text-sm mb-2">Scroll to explore</p>
        <ChevronDown className="h-5 w-5 text-white" />
      </div>

      {/* Slanted divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-white transform -skew-y-2"></div>
    </section>
  )
} 
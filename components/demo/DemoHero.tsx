"use client"

import { LucidePlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DemoHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-teal-light via-primary to-primary-deep text-white">
      {/* Leaf background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10">
          <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-80 h-80 opacity-30 blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-1/4">
          <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-60 h-60 opacity-30 blur-2xl" />
        </div>
        
        {/* Leaf shape decorations */}
        <div className="absolute top-16 left-16">
          <img src="/logo/leave-white.svg" alt="Leaf decoration" className="w-20 h-20 opacity-20 rotate-45" />
        </div>
        <div className="absolute top-40 right-[20%]">
          <img src="/logo/leave-black.svg" alt="Leaf decoration" className="w-24 h-24 opacity-20" />
        </div>
        <div className="absolute bottom-32 left-[10%]">
          <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-16 h-16 opacity-20" />
        </div>
        
        {/* Grid background - added opacity layer for better contrast */}
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-6 relative">
            <div className="absolute -left-16 top-0">
              <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-12 h-12 opacity-80 animate-bounce-subtle" />
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 shadow-lg">
                <div className="relative w-5 h-5 mr-3">
                  <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-full h-full absolute inset-0 animate-pulse" />
                </div>
                <span className="font-medium">Demo Requests Now Open</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-md">
                Explore <span className="text-coral-light relative inline-block mx-2 drop-shadow-md">
                  Cloud Services
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,0 Q50,20 100,0" stroke="currentColor" strokeWidth="4" fill="none" className="text-secondary/40" />
                  </svg>
                </span> Unlimited Possibilities
              </h1>
              
              <p className="text-xl md:text-2xl text-white max-w-lg drop-shadow-sm">
                Schedule a personalized demo to learn how our cloud platform can revolutionize your business.
              </p>
              
              <div className="pt-4 flex items-center gap-4">
                <Button asChild variant="secondary" size="lg" rounded="full" className="shadow-xl">
                  <Link href="/form">Book Now</Link>
                </Button>
                
                <Button asChild variant="ghost" size="lg" rounded="full" className="text-white border border-white/20 backdrop-blur-sm">
                  <Link href="/video" className="flex items-center">
                    <LucidePlayCircle className="mr-2 h-5 w-5" />
                    Watch Product Video
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white drop-shadow-sm">15 mins</span>
                  <span className="text-white text-sm">Demo Duration</span>
                </div>
                
                <div className="h-12 w-px bg-white/20"></div>
                
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white drop-shadow-sm">1-on-1</span>
                  <span className="text-white text-sm">Personalized Consultation</span>
                </div>
                
                <div className="h-12 w-px bg-white/20"></div>
                
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white drop-shadow-sm">Free</span>
                  <span className="text-white text-sm">No Cost</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6 relative">
            <div className="absolute -top-10 -right-10">
              <img src="/logo/leave-white.svg" alt="Leaf decoration" className="w-32 h-32 opacity-20 blur-lg" />
            </div>
            
            {/* 3D floating device model */}
            <div className="relative mx-auto max-w-md transform perspective-1000 hover:scale-105 transition-transform duration-500">
              <div className="relative z-20 bg-charcoal rounded-2xl shadow-2xl overflow-hidden border-4 border-white/10">
                {/* Top bar */}
                <div className="bg-black/30 h-8 flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                {/* Main screen content */}
                <div className="p-4 bg-black/20 min-h-[300px]">
                  <div className="h-10 mb-6 w-3/4 rounded bg-white/10 animate-pulse"></div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/30 h-24 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0">
                        <img src="/logo/leave-green.svg" alt="Leaf background" className="w-full h-full opacity-20" />
                      </div>
                      <div className="relative z-10 flex items-center justify-center w-12 h-12">
                        <img src="/logo/leave-green.svg" alt="Leaf icon" className="w-full h-full opacity-80" />
                      </div>
                    </div>
                    <div className="bg-secondary/30 h-24 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0">
                        <img src="/logo/leave-pink.svg" alt="Leaf background" className="w-full h-full opacity-20" />
                      </div>
                      <div className="relative z-10 flex items-center justify-center w-12 h-12">
                        <img src="/logo/leave-pink.svg" alt="Leaf icon" className="w-full h-full opacity-80" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="h-3 bg-white/10 rounded w-full"></div>
                    <div className="h-3 bg-white/10 rounded w-5/6"></div>
                    <div className="h-3 bg-white/10 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
              
              {/* Reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-30 pointer-events-none"></div>
              
              {/* Shadow */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-10 bg-black/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
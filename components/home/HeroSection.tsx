"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, Play, Star, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-44 overflow-hidden relative">
      {/* Decorative leaves */}
      <div className="absolute -right-64 top-0 transform -rotate-12 opacity-5">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-[600px] h-[600px]" />
      </div>
      <div className="absolute -left-64 bottom-40 transform rotate-12 opacity-5">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-[600px] h-[600px]" />
      </div>
      
      {/* Background color gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-5"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-white/80 backdrop-blur px-3 py-1 text-sm text-primary shadow-md border border-primary/10 mb-4">
              <span className="font-semibold">Introducing Sanicle Cloud</span> - The Future of Period Care
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-neutral-800">
              Reimagine <span className="text-primary">Menstrual Health</span> in the Workplace
            </h1>
            <p className="max-w-[600px] text-neutral-600 md:text-xl">
              Experience period dignity with our innovative smart dispensers and comprehensive menstrual health platform.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Request a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative flex items-center">
              <div className="absolute -left-8 -top-8 w-40 h-40 opacity-10 animate-spin-slow">
                <img src="/logo/leave-green.svg" alt="Spinning leaf" className="w-full h-full" />
              </div>
              <img
                src="/promo/dispenser-3d.png"
                width={500}
                height={500}
                alt="Smart Dispenser"
                className="mx-auto aspect-auto object-cover object-center rounded-xl shadow-xl shadow-teal-500/10 border-4 border-white relative z-10"
              />
              <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-20">
                <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-full h-full" />
              </div>
              {/* Floating badge */}
              <div className="absolute -left-4 bottom-4 py-2 px-4 bg-coral/10 backdrop-blur-sm rounded-full shadow-md border border-coral/20 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-coral animate-pulse"></div>
                <span className="text-sm font-medium text-coral">Smart Technology</span>
              </div>
              <div className="absolute -right-4 top-4 py-2 px-4 bg-primary/10 backdrop-blur-sm rounded-full shadow-md border border-primary/20 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-medium text-primary">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave bottom transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#FFFFFF" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
} 
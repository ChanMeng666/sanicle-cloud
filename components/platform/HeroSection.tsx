"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Users } from "lucide-react"

export function HeroSection() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;
    
    // Calculate rotation based on mouse position relative to container center
    const xRotation = ((y - container.height / 2) / container.height) * 8;
    const yRotation = ((x - container.width / 2) / container.width) * -8;
    
    setRotation({ x: xRotation, y: yRotation });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="w-full bg-gradient-to-br from-primary via-primary/90 to-teal-600 py-12 sm:py-16 md:py-24 text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Large decorative leaves */}
      <div className="absolute -top-24 -right-24 w-96 h-96">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-10 transform rotate-12"
        />
      </div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-10 transform -rotate-12"
        />
      </div>

      {/* Floating leaves */}
      <div className="absolute top-1/3 right-1/4 w-20 h-20 animate-float hidden sm:block">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-30"
        />
      </div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 animate-float-delay hidden sm:block">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-20"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              Menstrual Health Benefits<br className="sm:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Complete Platform</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-xl">
              Sanicle.cloud offers a modular, end-to-end employee benefits platform with flexible menstrual health options, helping employers eliminate vendor fatigue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 rounded-lg text-base sm:text-lg py-6 px-8">
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
            <div 
              className="platform-showcase relative w-full max-w-md sm:max-w-lg md:max-w-xl perspective-[1000px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Device showcase with 3D effect */}
              <div 
                className="platform-device relative z-20 bg-white rounded-xl shadow-2xl overflow-hidden border-8 border-gray-100 transition-transform duration-300 ease-out transform-gpu"
                style={{ 
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <img 
                  src="/images/11_31_21.png" 
                  alt="AI-powered health tracking interface" 
                  className="w-full" 
                />
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100 flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Floating UI elements */}
              <div className="hidden sm:block absolute top-1/4 -right-6 md:-right-12 z-30 bg-white rounded-lg shadow-lg p-3 transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-teal-50 text-primary flex items-center justify-center mr-2">
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-neutral-800">Users</p>
                    <p className="text-neutral-500">1,234</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute bottom-1/4 -left-6 md:-left-12 z-30 bg-white rounded-lg shadow-lg p-3 transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-tertiary text-secondary flex items-center justify-center mr-2">
                    <BarChart className="h-4 w-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-neutral-800">Analytics</p>
                    <p className="text-neutral-500">Real-time</p>
                  </div>
                </div>
              </div>

              {/* New floating badge for AI features */}
              <div className="hidden sm:block absolute -bottom-6 right-10 z-30 bg-white rounded-lg shadow-lg p-3 transform rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mr-2">
                    <span className="text-lg">✨</span>
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-neutral-800">AI-Powered</p>
                    <p className="text-neutral-500">Personalized Insights</p>
                  </div>
                </div>
              </div>

              {/* Background glow effects */}
              <div className="absolute -left-4 -top-4 h-56 w-56 sm:h-72 sm:w-72 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -right-4 -bottom-4 h-56 w-56 sm:h-72 sm:w-72 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
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
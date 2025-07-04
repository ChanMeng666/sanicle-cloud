"use client"

import { useState } from "react"
import { LucidePlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DemoHero() {
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
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary-light via-primary to-primary-dark text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 pattern-dots opacity-15"></div>
      
      {/* Leaf background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10">
          <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-80 h-80 opacity-30 blur-3xl animate-float" />
        </div>
        <div className="absolute bottom-0 left-1/4">
          <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-60 h-60 opacity-30 blur-2xl animate-float-delay" />
        </div>
        
        {/* Leaf shape decorations */}
        <div className="absolute top-16 left-16">
          <img src="/logo/leave-white.svg" alt="Leaf decoration" className="w-20 h-20 opacity-20 rotate-45 animate-float" />
        </div>
        <div className="absolute top-40 right-[20%]">
          <img src="/logo/leave-black.svg" alt="Leaf decoration" className="w-24 h-24 opacity-20 animate-float-delay" />
        </div>
        <div className="absolute bottom-32 left-[10%]">
          <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-16 h-16 opacity-20 animate-float" />
        </div>
      </div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute bottom-60 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      
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
                Explore <span className="text-secondary relative inline-block mx-2 drop-shadow-md">
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
                <Button asChild variant="secondary" size="lg" rounded="full" className="shadow-xl hover:translate-y-[-2px] transition-transform">
                  <Link href="/form">Book Now</Link>
                </Button>
                
                <Button asChild variant="ghost" size="lg" rounded="full" className="text-white border border-white/20 backdrop-blur-sm hover:bg-white/10">
                  <Link href="/video" className="flex items-center">
                    <LucidePlayCircle className="mr-2 h-5 w-5" />
                    Watch Product Video
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-8 pt-6">
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
              <img src="/logo/leave-white.svg" alt="Leaf decoration" className="w-32 h-32 opacity-20 blur-lg animate-float-delay" />
            </div>
            
            {/* Virtual meeting image with 3D effect */}
            <div 
              className="relative mx-auto max-w-lg perspective-[1000px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="relative z-20 bg-charcoal rounded-2xl shadow-2xl overflow-hidden border-4 border-white/10 transition-transform duration-300 ease-out transform-gpu"
                style={{ 
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Top bar */}
                <div className="bg-black/30 h-8 flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                {/* Main content - HR professionals in virtual meeting */}
                <div className="bg-black/20">
                  <img 
                    src="/images/11_11_36.png" 
                    alt="HR professionals reviewing platform benefits in virtual meeting" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
              
              {/* Reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-30 pointer-events-none rounded-2xl"></div>
              
              {/* Shadow */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-10 bg-black/20 rounded-full blur-xl"></div>
            </div>
            
            {/* Floating badge - Feature highlight */}
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg z-30 rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center text-sm">
                <div className="w-10 h-10 relative mr-3">
                  <img src="/logo/leave-pink.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-5 w-5 text-secondary">📊</div>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-neutral-800">Real-time collaboration</p>
                  <p className="text-secondary font-bold text-lg">Live Demo</p>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-5 -right-5 w-20 h-20 opacity-60">
              <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-full h-full rotate-45" />
            </div>
            <div className="absolute -top-8 -left-8 w-16 h-16 opacity-60">
              <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-full h-full -rotate-12" />
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
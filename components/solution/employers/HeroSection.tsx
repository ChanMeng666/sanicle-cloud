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
    
    // Calculate position relative to container center
    const xRotation = ((y - container.height / 2) / container.height) * 8;
    const yRotation = ((x - container.width / 2) / container.width) * -8;
    
    setRotation({ x: xRotation, y: yRotation });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-teal-50/90 to-white z-0"></div>
      
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>

      <div className="absolute top-0 right-0 -mr-20 w-[600px] h-[600px] opacity-[0.08] transform -rotate-12 z-0">
        <img 
          src="/logo/leave-green.svg" 
          alt="Decorative leaf" 
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] opacity-[0.06] transform rotate-12 z-0">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Decorative leaf" 
          className="w-full h-full"
        />
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full opacity-[0.05] blur-[100px] z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary rounded-full opacity-[0.05] blur-[100px] z-0"></div>

      <div className="container relative z-10 px-4 sm:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="py-4 sm:py-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium shadow-sm">
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Tailored for Businesses
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-800 leading-tight">
                AI-Driven Employee Wellness <span className="text-primary relative">Platform
                  <svg className="absolute bottom-0 left-0 w-full h-2 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 9, 50 5 Q 75 1, 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-neutral-600 max-w-xl">
                Through advanced AI analytics and data visualization technologies, we help companies provide innovative health benefits that meet the unique needs of female employees, improving overall employee satisfaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-6 py-2.5 rounded-full transition-all">
                  Book a Demo
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow transition-all">
                  <div className="w-12 h-12 relative mr-4">
                    <img src="/logo/leave-green.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500 font-medium">Employee Retention Increased</div>
                    <div className="text-xl font-bold text-neutral-800">+24%</div>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow transition-all">
                  <div className="w-12 h-12 relative mr-4">
                    <img src="/logo/leave-pink.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BarChart className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500 font-medium">Absenteeism Reduced</div>
                    <div className="text-xl font-bold text-neutral-800">-32%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center py-8 relative">
            <div 
              className="relative mx-auto perspective-[1000px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-75 blur-lg z-0"></div>
              <div 
                className="relative bg-white rounded-xl overflow-hidden border shadow-lg transition-transform duration-300 ease-out transform-gpu"
                style={{ 
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="h-10 bg-neutral-50 border-b flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#f87171]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#facc15]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#4ade80]"></div>
                  </div>
                </div>
                <img
                  src="/images/11_01_42.png"
                  alt="AI-driven Employee Wellness Analytics Dashboard"
                  className="w-full object-cover"
                />
              </div>

              <div className="absolute -top-8 -right-8 bg-white rounded-xl p-4 shadow-lg rotate-6 hover:rotate-3 transition-transform duration-300 z-20">
                <div className="flex items-center text-sm">
                  <div className="w-10 h-10 relative mr-3">
                    <img src="/logo/leave-green.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Employee Satisfaction</p>
                    <p className="text-secondary font-bold text-lg">↑ 94%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-4 shadow-lg -rotate-6 hover:-rotate-3 transition-transform duration-300 z-20">
                <div className="flex items-center text-sm">
                  <div className="w-10 h-10 relative mr-3">
                    <img src="/logo/leave-pink.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BarChart className="h-5 w-5 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Return on Investment</p>
                    <p className="text-primary font-bold text-lg">↑ 320%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
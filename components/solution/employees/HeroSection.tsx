"use client"

import { Button } from "@/components/ui/button"
import { Heart, Shield, Smartphone, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* 渐变背景 - 从淡青色过渡到白色 */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-primary-pale to-beige-light z-0"></div>
      
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] z-0"></div>
      
      {/* 波点背景 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.07] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.07] z-0"></div>
      
      {/* 大型装饰叶片元素 */}
      <div className="absolute top-[5%] right-[5%] w-[500px] h-[500px] opacity-[0.08] transform -rotate-12 z-0">
        <img 
          src="/logo/leave-green.svg" 
          alt="Decorative leaf" 
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] opacity-[0.06] transform rotate-12 z-0">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Decorative leaf" 
          className="w-full h-full"
        />
      </div>
      
      {/* 漂浮元素 */}
      <div className="absolute top-[30%] right-[25%] z-0">
        <img 
          src="/logo/leave-black.svg" 
          alt="Leaf decoration" 
          className="w-16 h-16 opacity-10 rotate-12 animate-float"
        />
      </div>
      <div className="absolute bottom-[20%] left-[20%] z-0">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-12 h-12 opacity-20 animate-float-delay"
        />
      </div>
      
      {/* 荧光效果 */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full opacity-[0.05] blur-[100px] z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary rounded-full opacity-[0.05] blur-[100px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 shadow-sm">
              <CheckCircle className="h-5 w-5" />
              Health Benefits for Employees
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-6 tracking-tight leading-tight">
              Take control of your <span className="text-primary relative inline-block ml-2">
                health management
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 max-w-xl mx-auto lg:mx-0 mb-8">
              Access personalized health resources, products, and professional support through your employer-provided benefits plan to improve your work experience and quality of life.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <Link href="/signup" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-6 py-2.5 rounded-full transition-all">
                <Link href="/features">Learn More</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 relative mx-auto mb-2">
                  <img src="/logo/leave-pink.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <p className="text-center text-sm text-neutral-600">Personalized Health Plans</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 relative mx-auto mb-2">
                  <img src="/logo/leave-pink.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <p className="text-center text-sm text-neutral-600">Multi-platform Support</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 relative mx-auto mb-2">
                  <img src="/logo/leave-pink.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <p className="text-center text-sm text-neutral-600">Data Security Guarantee</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 perspective-1000 transform hover:scale-[1.02] transition-all duration-500">
              {/* Health Improvement floating element - moved outside */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-3 shadow-lg rotate-6 hover:rotate-0 transition-transform duration-300 z-30">
                <div className="flex items-center text-sm">
                  <div className="w-8 h-8 relative mr-2">
                    <img src="/logo/leave-green.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <span className="font-medium text-neutral-800">Health Improvement <span className="text-secondary font-bold">90%</span></span>
                </div>
              </div>
              
              {/* Data Protection floating element - moved outside */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-3 shadow-lg -rotate-6 hover:rotate-0 transition-transform duration-300 z-30">
                <div className="flex items-center text-sm">
                  <div className="w-8 h-8 relative mr-2">
                    <img src="/logo/leave-pink.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-secondary" />
                    </div>
                  </div>
                  <span className="font-medium text-neutral-800">Data Protection <span className="text-primary font-bold">100%</span></span>
                </div>
              </div>
              
              <div className="relative bg-white p-4 rounded-2xl shadow-xl border-8 border-white/80 overflow-hidden">
                <div className="absolute -top-8 -right-8">
                  <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-20 h-20 opacity-10 blur-lg" />
                </div>
                
                {/* App interface simulation */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl overflow-hidden">
                  {/* Top status bar */}
                  <div className="bg-primary p-3 text-white flex items-center justify-between">
                    <span className="font-medium">Personal Health Management</span>
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5" />
                      <Shield className="h-5 w-5" />
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="p-4 space-y-4">
                    {/* Progress indicator */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-neutral-800 font-medium">Health Index</span>
                        <span className="text-primary font-bold">92%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[92%] bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Activity cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-primary-pale p-3 rounded-lg text-center">
                        <span className="block text-2xl font-bold text-primary">8.2k</span>
                        <span className="text-xs text-neutral-600">Today's Steps</span>
                      </div>
                      <div className="bg-secondary-light/20 p-3 rounded-lg text-center">
                        <span className="block text-2xl font-bold text-secondary">6.5h</span>
                        <span className="text-xs text-neutral-600">Sleep Duration</span>
                      </div>
                    </div>
                    
                    {/* Calendar card */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-primary/10">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-neutral-800 font-medium">Monthly Schedule</span>
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {[...Array(7)].map((_, i) => (
                          <div key={i} className="w-8 h-8 flex items-center justify-center text-xs">
                            {['M','T','W','T','F','S','S'][i]}
                          </div>
                        ))}
                        {[...Array(31)].map((_, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${i === 15 ? 'bg-primary text-white' : i % 7 === 5 || i % 7 === 6 ? 'text-neutral-500/50' : 'text-neutral-600'}`}>
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Removed floating elements from here */}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
              <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-64 h-64 opacity-10 animate-pulse-opacity" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10" style={{ animationDelay: "1s" }}>
              <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-80 h-80 opacity-10 animate-pulse-opacity" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* 波浪形分隔线 - 向下一部分过渡 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
      
      {/* 彩色蜡笔线条装饰 */}
      <div className="absolute bottom-[25%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,8 400,0 600,4 C800,8 1000,2 1200,4" stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
} 
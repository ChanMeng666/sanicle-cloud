"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, Handshake, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 relative overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-pale/20 to-beige-light/30 z-0"></div>
      
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      
      {/* 波点背景 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.06] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.06] z-0"></div>
      
      {/* 大型装饰叶片元素 */}
      <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 z-0">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-[50vw] h-[50vw] opacity-[0.08] blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 z-0">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-[33vw] h-[33vw] opacity-[0.08] blur-3xl" />
      </div>
      
      {/* 小型装饰叶片元素 */}
      <div className="absolute top-1/4 right-[10%] w-[100px] h-[100px] opacity-[0.15] transform rotate-12 z-0">
        <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      <div className="absolute bottom-1/3 left-[10%] w-[80px] h-[80px] opacity-[0.12] transform -rotate-12 z-0">
        <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      
      {/* 彩色蜡笔线条装饰 */}
      <div className="absolute top-[30%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,8 400,0 600,4 C800,8 1000,2 1200,4" stroke="#f472b6" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7 lg:pr-8">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-2">
                <div className="h-px w-8 bg-primary"></div>
                <span className="text-primary font-medium text-sm md:text-base">Partner Program</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 leading-tight tracking-tight">
                Expand Your <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Benefits Portfolio</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-neutral-600 max-w-xl leading-relaxed">
                Partner with Sanicle.cloud to offer cutting-edge menstrual health benefits to your clients, improving employee satisfaction and retention.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                  Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-6 py-2.5 rounded-full transition-all transform hover:-translate-y-1">
                  Schedule a Call
                </Button>
              </div>

              <div className="flex items-center pt-3">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-secondary fill-secondary" />
                  ))}
                </div>
                <span className="ml-2 text-xs md:text-sm text-neutral-500">Our partners rate us 4.9/5</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            <div className="sm:col-span-2 overflow-hidden rounded-2xl shadow-lg relative">
              {/* 卡片边缘的装饰性发光效果 */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-sm opacity-70 z-0"></div>
              
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Benefits broker meeting with client"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md transform hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center">
                <div className="relative w-10 h-10 mr-3">
                  <img src="/logo/leave-green.svg" alt="Leaf background" className="absolute inset-0 w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 text-sm md:text-base">Commission</h3>
                  <p className="text-xs md:text-sm text-neutral-500">Up to 20% recurring revenue</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md transform hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center">
                <div className="relative w-10 h-10 mr-3">
                  <img src="/logo/leave-pink.svg" alt="Leaf background" className="absolute inset-0 w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Handshake className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 text-sm md:text-base">Partners</h3>
                  <p className="text-xs md:text-sm text-neutral-500">100+ brokers trust us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 波浪形分隔线 - 更现代的版本 */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path 
            fill="#ffffff" 
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,75,1380,80L1440,85L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" 
          />
        </svg>
      </div>
    </section>
  )
} 
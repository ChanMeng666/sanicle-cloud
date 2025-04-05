"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-deep text-white z-0"></div>
      
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] z-0"></div>
      
      {/* 波点背景 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.07] z-0 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.07] z-0 rounded-tr-full"></div>
      
      {/* 顶部过渡元素 */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-0"></div>
      
      {/* 背景装饰元素 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white opacity-[0.05] rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white opacity-[0.05] rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4 z-0"></div>
      
      {/* 装饰叶片元素 */}
      <div className="absolute top-[10%] right-[5%] w-[200px] h-[200px] opacity-[0.07] transform rotate-12 z-0">
        <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      <div className="absolute bottom-[10%] left-[5%] w-[180px] h-[180px] opacity-[0.07] transform -rotate-12 z-0">
        <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      
      {/* 彩色蜡笔线条装饰 */}
      <div className="absolute top-[10%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-[0.15]" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,0 400,8 600,4 C800,0 1000,6 1200,4" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 xl:col-span-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
              <span className="relative inline-block">
                Ready to become our partner?
                <span className="absolute bottom-2 left-0 w-full h-3 bg-white/20 -z-10 rounded-full"></span>
              </span>
            </h2>
            <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-2xl mb-6 md:mb-8 leading-relaxed">
              Join the Sanicle.cloud partner network to provide innovative benefits solutions to your clients while creating new revenue streams and building a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                Apply for Partnership <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-2.5 rounded-full transition-all transform hover:-translate-y-1">
                Schedule a Demo
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">Quick Start</h3>
                <p className="text-white/80 text-sm md:text-base">Fill out the form below and our partner team will contact you</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white text-xs md:text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-white text-xs md:text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your company name"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-white text-xs md:text-sm font-medium mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="Enter your business email"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                />
              </div>
              <Button className="w-full bg-white text-primary hover:bg-white/90 px-6 py-2.5 rounded-full mt-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium">
                Submit Application
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 彩色蜡笔线条装饰 - 底部 */}
      <div className="absolute bottom-[20%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-[0.15]" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,8 400,0 600,4 C800,8 1000,2 1200,4" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
} 
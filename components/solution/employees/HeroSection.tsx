"use client"

import { Button } from "@/components/ui/button"
import { Heart, Shield, Smartphone, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-teal-pale rounded-full opacity-40 transform translate-x-1/3 -translate-y-1/3 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-beige rounded-full opacity-40 transform -translate-x-1/3 translate-y-1/3 animate-float-delay"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-pale text-teal-DEFAULT text-sm font-medium mb-4">
              为员工提供
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4 md:mb-6">
              掌控您的 
              <span className="relative inline-block ml-2">
                <span className="relative z-10">月经健康</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-beige -z-10"></span>
              </span>
            </h1>
            <p className="text-lg text-slate max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8">
              通过您雇主的福利计划，获取个性化的月经健康资源、产品和支持。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-coral-DEFAULT hover:bg-coral-DEFAULT/90 text-white shadow-md hover:shadow-lg transition-all">
                立即开始 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-teal-DEFAULT text-teal-DEFAULT hover:bg-teal-pale/50 transition-all">
                了解更多
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative mt-8 lg:mt-0">
            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-xl border-8 border-teal-pale/20 max-w-md mx-auto transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center text-sm">
                  <div className="w-10 h-10 rounded-full bg-teal-pale text-teal-DEFAULT flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5" />
                  </div>
                  <p className="font-medium text-charcoal">健康提升 <span className="text-coral-DEFAULT font-bold">90%</span></p>
                </div>
              </div>
              
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Sanicle应用界面"
                className="rounded-xl w-full"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center text-sm">
                  <div className="w-10 h-10 rounded-full bg-beige text-coral-DEFAULT flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5" />
                  </div>
                  <p className="font-medium text-charcoal">数据私密 <span className="text-teal-DEFAULT font-bold">100%</span></p>
                </div>
              </div>
            </div>
            
            {/* 装饰元素 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-teal-DEFAULT/10 rounded-full -z-10 animate-pulse-opacity"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-coral-DEFAULT/10 rounded-full -z-10 animate-pulse-opacity" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>

      {/* 底部波浪过渡 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            fill="#e6f5f6"
            fillOpacity="1"
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
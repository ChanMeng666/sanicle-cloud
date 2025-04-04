"use client"

import { Button } from "@/components/ui/button"
import { Heart, Shield, Smartphone, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* 背景圆形 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fef6e9] rounded-full opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e6f5f6] rounded-full opacity-50 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-4">
              为员工提供
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#2c3e50] mb-6">
              掌控您的 <br />
              <span className="relative">
                <span className="relative z-10">月经健康</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#fef6e9] -z-10"></span>
              </span>
            </h1>
            <p className="text-xl text-[#7f8c8d] max-w-2xl mx-auto mb-8">
              通过您雇主的福利计划，获取个性化的月经健康资源、产品和支持。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                立即开始 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                了解更多
              </Button>
            </div>
          </div>

          {/* 功能圆圈 */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: <Heart className="h-6 w-6 text-[#167d83]" />,
                title: "追踪您的周期",
                description: "监测模式并获取个性化洞察",
              },
              {
                icon: <Shield className="h-6 w-6 text-[#167d83]" />,
                title: "私密且安全",
                description: "您的数据保持私密和受保护",
              },
              {
                icon: <Smartphone className="h-6 w-6 text-[#167d83]" />,
                title: "移动端访问",
                description: "随时随地管理您的健康",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-[#2c3e50] text-sm md:text-base">{feature.title}</h3>
                <p className="text-[#7f8c8d] text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 波浪分隔线 */}
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
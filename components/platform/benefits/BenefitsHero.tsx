"use client"

import { Button } from "@/components/ui/button"
import { Heart, Shield, Gift, Users, ArrowRight } from "lucide-react"

export function BenefitsHero() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#f8f9fa] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-[#167d83]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-[#EE4C23]/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#167d83]/10 text-[#167d83] text-sm font-medium mb-4">
              <Gift className="h-4 w-4 mr-2" /> 全面福利套餐
            </div>

            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2c3e50] leading-tight mb-4 md:mb-6">
                改变您的 <br className="md:hidden" />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#167d83]">工作场所健康</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 md:h-4 bg-[#EE4C23]/20 -z-10 transform -rotate-1"></span>
                </span>
              </h1>

              <div className="absolute -top-8 -right-6 md:-top-10 md:-right-10 w-16 h-16 md:w-20 md:h-20 bg-[#fef6e9] rounded-full flex items-center justify-center rotate-12 shadow-lg hidden sm:flex">
                <Heart className="h-8 w-8 md:h-10 md:w-10 text-[#EE4C23]" />
              </div>

              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-12 h-12 md:w-16 md:h-16 bg-[#e6f5f6] rounded-full flex items-center justify-center -rotate-12 shadow-lg hidden sm:flex">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-[#167d83]" />
              </div>
            </div>

            <p className="text-lg md:text-xl text-[#7f8c8d] max-w-2xl mx-auto mb-6 md:mb-8 px-2">
              探索我们革命性的月经健康福利方法，改善员工健康，减少缺勤，创造更具包容性的工作场所。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#EE4C23] to-[#ff6347] hover:from-[#d43d18] hover:to-[#e54c2a] text-white rounded-full px-6 md:px-8 shadow-md">
                立即开始 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6] rounded-full px-6 md:px-8"
              >
                预约演示
              </Button>
            </div>
          </div>

          {/* 3D Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-16">
            {[
              {
                title: "健康追踪",
                description: "先进的周期追踪与AI驱动的洞察",
                icon: <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />,
                color: "bg-gradient-to-r from-[#EE4C23] to-[#ff6347]",
                rotation: "rotate-1 md:rotate-2",
                shadow: "shadow-[#EE4C23]/20"
              },
              {
                title: "产品获取",
                description: "月经产品每月配送",
                icon: <Gift className="h-6 w-6 md:h-8 md:w-8 text-white" />,
                color: "bg-gradient-to-r from-[#167d83] to-[#22c0c7]",
                rotation: "rotate-0",
                shadow: "shadow-[#167d83]/20"
              },
              {
                title: "专家支持",
                description: "获取医疗专业人士帮助",
                icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />,
                color: "bg-gradient-to-r from-[#EE4C23] to-[#ff6347]",
                rotation: "-rotate-1 md:-rotate-2",
                shadow: "shadow-[#EE4C23]/20"
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`relative ${card.rotation} hover:rotate-0 transition-transform duration-500`}
              >
                <div className="absolute inset-0 bg-black/5 rounded-2xl transform translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2"></div>
                <div className={`${card.color} rounded-2xl p-5 md:p-6 shadow-lg ${card.shadow} relative z-10 h-full`}>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center mb-3 md:mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{card.title}</h3>
                  <p className="text-sm md:text-base text-white/80">{card.description}</p>

                  <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
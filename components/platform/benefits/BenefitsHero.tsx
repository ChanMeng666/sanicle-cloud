"use client"

import { Button } from "@/components/ui/button"
import { Heart, Shield, Gift, Users, ArrowRight } from "lucide-react"

export function BenefitsHero() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#167d83]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#EE4C23]/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#167d83]/10 text-[#167d83] text-sm font-medium mb-4">
              <Gift className="h-4 w-4 mr-2" /> 全面福利套餐
            </div>

            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold text-[#2c3e50] leading-tight mb-6">
                改变您的 <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#167d83]">工作场所健康</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-[#EE4C23]/20 -z-10 transform -rotate-1"></span>
                </span>
              </h1>

              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#fef6e9] rounded-full flex items-center justify-center rotate-12 shadow-lg">
                <Heart className="h-10 w-10 text-[#EE4C23]" />
              </div>

              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#e6f5f6] rounded-full flex items-center justify-center -rotate-12 shadow-lg">
                <Shield className="h-8 w-8 text-[#167d83]" />
              </div>
            </div>

            <p className="text-xl text-[#7f8c8d] max-w-2xl mx-auto mb-8">
              探索我们革命性的月经健康福利方法，改善员工健康，减少缺勤，创造更具包容性的工作场所。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white rounded-full px-8">
                立即开始 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6] rounded-full px-8"
              >
                预约演示
              </Button>
            </div>
          </div>

          {/* 3D Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "健康追踪",
                description: "先进的周期追踪与AI驱动的洞察",
                icon: <Heart className="h-8 w-8 text-white" />,
                color: "bg-[#EE4C23]",
                rotation: "rotate-2",
              },
              {
                title: "产品获取",
                description: "月经产品每月配送",
                icon: <Gift className="h-8 w-8 text-white" />,
                color: "bg-[#167d83]",
                rotation: "rotate-0",
              },
              {
                title: "专家支持",
                description: "获取医疗专业人士帮助",
                icon: <Users className="h-8 w-8 text-white" />,
                color: "bg-[#EE4C23]",
                rotation: "-rotate-2",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`relative ${card.rotation} hover:rotate-0 transition-transform duration-500`}
              >
                <div className="absolute inset-0 bg-black/5 rounded-2xl transform translate-x-2 translate-y-2"></div>
                <div className={`${card.color} rounded-2xl p-6 shadow-lg relative z-10`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-white/80">{card.description}</p>

                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full"></div>
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
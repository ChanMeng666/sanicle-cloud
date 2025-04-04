"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, Handshake, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-[#f8f9fa]">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 md:pr-12">
            <div className="flex flex-col md:items-start text-left space-y-6">
              <div className="flex items-center space-x-2">
                <div className="h-px w-8 bg-[#167d83]"></div>
                <span className="text-[#167d83] font-medium">合作伙伴计划</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c3e50] leading-tight">
                扩展您的 <br />
                <span className="text-[#167d83]">福利组合</span>
              </h1>

              <p className="text-lg md:text-xl text-[#7f8c8d] max-w-xl">
                与Sanicle.cloud合作，为您的客户提供前沿的月经健康福利，提高员工满意度和留存率。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                  成为合作伙伴 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                  安排通话
                </Button>
              </div>

              <div className="flex items-center pt-6">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 text-[#EE4C23] fill-[#EE4C23]" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-[#7f8c8d]">我们的合作伙伴评分4.9/5</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4 relative">
            <div className="absolute -z-10 w-full h-full bg-[#e6f5f6] rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

            <div className="col-span-2">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="福利经纪人与客户会面"
                className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-[#167d83] mr-2" />
                <div>
                  <h3 className="font-semibold text-[#2c3e50]">佣金</h3>
                  <p className="text-sm text-[#7f8c8d]">高达20%的循环收入</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md transform translate-y-4">
              <div className="flex items-center">
                <Handshake className="h-8 w-8 text-[#167d83] mr-2" />
                <div>
                  <h3 className="font-semibold text-[#2c3e50]">合作伙伴</h3>
                  <p className="text-sm text-[#7f8c8d]">100+经纪人信任我们</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 波浪形分隔线 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  )
} 
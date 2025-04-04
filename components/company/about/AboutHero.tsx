"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Clock, Globe, ChevronDown } from "lucide-react"

export function AboutHero() {
  return (
    <section className="w-full min-h-[80vh] relative flex items-center overflow-hidden">
      {/* 背景层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#167d83]/90 to-[#167d83]/70"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30"></div>

      {/* 漂浮形状 */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/10 animate-float-delay"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" /> 我们的故事
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              改变 <br />
              <span className="text-[#EE4C23]">女性健康</span> <br />
              在工作场所
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Sanicle.cloud致力于通过创新的月经健康福利方案，彻底改变组织机构为女性健康提供支持的方式。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                我们的使命 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                加入我们团队
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative">
              {/* 主图 */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="/placeholder.svg?height=600&width=500" alt="多元化团队成员" className="w-full" />
              </div>

              {/* 悬浮元素 */}
              <div className="absolute top-0 -right-10 z-20 bg-white rounded-lg shadow-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">成立于2022年</p>
                    <p className="text-sm text-[#7f8c8d]">由医疗专家创立</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 z-20 bg-white rounded-lg shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#fef6e9] text-[#EE4C23] flex items-center justify-center mr-3">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">全球影响力</p>
                    <p className="text-sm text-[#7f8c8d]">改变工作环境</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 滚动指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <p className="text-sm mb-2">向下滚动探索</p>
        <ChevronDown className="h-5 w-5" />
      </div>
      
      {/* 波浪形分隔线 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
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
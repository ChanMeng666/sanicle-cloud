"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, Play, Star, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-primary-light py-20 lg:py-28">
      {/* 装饰元素 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[15%] left-[10%] w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-[25%] w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
        
        {/* 网格背景 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* 漂浮元素 */}
        <div className="absolute top-[20%] right-[20%] w-24 h-24 bg-white/10 rounded-xl rotate-12 animate-float"></div>
        <div className="absolute bottom-[25%] left-[15%] w-16 h-16 bg-secondary/20 rounded-full animate-float-delay"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-sm animate-slide-up">
              云端解决方案<br />为您的业务赋能
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
              释放数据潜力，简化运维管理，加速业务创新。我们的云平台为企业提供全方位、高效能的数字化转型服务。
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" rounded="full" variant="secondary">
                <Link href="/demo">立即体验</Link>
              </Button>
              <Button asChild size="lg" rounded="full" variant="outline-secondary" className="border-white text-white hover:bg-white hover:text-primary">
                <Link href="/solution">了解解决方案</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative z-10 animate-float">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* 这里可以使用真实的产品截图或资产替换 */}
                <div className="absolute inset-0 bg-white/90 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="w-full h-12 bg-gray-100 flex items-center px-4 border-b">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-4"></div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="h-24 bg-primary-pale rounded-md flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary/80"></div>
                      </div>
                      <div className="h-24 bg-beige rounded-md flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-secondary/80"></div>
                      </div>
                    </div>
                    <div className="h-8 bg-gray-200 rounded-md w-1/2 mb-4"></div>
                    <div className="h-32 bg-gray-100 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 装饰元素 */}
            <div className="absolute top-1/4 -right-8 w-16 h-16 bg-secondary rounded-lg rotate-12 animate-float-delay blur-sm"></div>
            <div className="absolute -bottom-6 left-1/4 w-20 h-20 bg-coral-light rounded-full animate-float blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - 在移动设备上隐藏 */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
        <p className="text-[#7f8c8d] text-sm mb-2">Scroll to explore</p>
        <ChevronDown className="h-5 w-5 text-[#167d83]" />
      </div>

      {/* 使用斜线分隔符替代波浪形分隔线 */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-white transform -skew-y-2"></div>
    </section>
  )
} 
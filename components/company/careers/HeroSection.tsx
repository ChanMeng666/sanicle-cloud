"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full min-h-[80vh] relative flex items-center overflow-hidden">
      {/* Video background would go here in a real implementation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#167d83]/90 to-[#167d83]/70 z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-50"></div>

      <div className="container px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" /> 加入我们的团队
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            构建你的职业生涯，<br />
            <span className="text-[#EE4C23]">改变生活</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            在Sanicle.cloud，我们正在革新工作场所中的女性健康。加入我们使命驱动的团队，对人们的生活产生真正的影响。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
              浏览开放职位
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              我们的文化
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-10 h-16 rounded-full border-2 border-white/50 flex items-center justify-center">
          <div className="w-2 h-4 bg-white/80 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-[#167d83] to-[#0e5a5f] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5"></div>

      {/* 漂浮图标 */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
        <Heart className="h-8 w-8 text-white/30" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
        <Shield className="h-10 w-10 text-white/30" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">今天就改变您的工作场所健康</h2>

          <p className="text-white/80 mb-8 text-xl">
            加入越来越多重视工作场所女性健康的前瞻性公司行列。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#167d83] hover:bg-white/90 rounded-full px-8">
              立即开始 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8"
            >
              预约演示
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 px-4 py-2 rounded-full">
              <span className="text-white text-sm">无需信用卡</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-full">
              <span className="text-white text-sm">14天免费试用</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-full">
              <span className="text-white text-sm">随时取消</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
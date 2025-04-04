"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-[#167d83] to-[#0e5a5f] text-white relative -mt-10 z-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 p-1 rounded-full w-fit mx-auto mb-6">
            <div className="bg-white/20 px-4 py-1 rounded-full">
              <span className="text-white text-sm font-medium">与500多家公司一起加入</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center">
            准备好改变您的工作场所福利了吗？
          </h2>

          <p className="text-white/80 mb-8 text-center text-lg">
            加入越来越多重视女性在工作场所健康的具有前瞻性思维的公司。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#167d83] hover:bg-white/90">
              立即开始 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
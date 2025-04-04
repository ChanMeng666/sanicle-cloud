"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Heart, Users } from "lucide-react"

export function CareerCtaSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-[#167d83] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

      {/* 浮动元素 */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            加入我们，变革女性健康
          </h2>

          <p className="text-white/80 mb-8 text-xl">
            成为真正在工作场所产生影响的团队一员。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#167d83] hover:bg-white/90">
              查看开放职位 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              了解我们的文化
            </Button>
          </div>

          <div className="mt-12 flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-white" />
              </div>
              <p className="text-white font-bold text-2xl">50+</p>
              <p className="text-white/80">团队成员</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <p className="text-white font-bold text-2xl">12</p>
              <p className="text-white/80">国家</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <p className="text-white font-bold text-2xl">100%</p>
              <p className="text-white/80">使命驱动</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
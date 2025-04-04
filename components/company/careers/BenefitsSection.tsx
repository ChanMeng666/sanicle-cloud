"use client"

import { Button } from "@/components/ui/button"
import { Award, Building, ChevronRight, Coffee, Globe, Heart, Leaf, Sparkles, Star, Users, Zap } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
                员工福利
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50] mb-4">我们关心我们的团队</h2>
              <p className="text-[#7f8c8d] mb-6">
                在Sanicle.cloud，我们相信通过全面的福利支持员工的健康、成长和工作生活平衡。
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f8f9fa] rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-[#EE4C23] mb-2" />
                  <h3 className="font-semibold text-[#2c3e50] text-lg">健康与保健</h3>
                  <p className="text-[#7f8c8d] text-sm">全面的医疗、牙科和视力保障。</p>
                </div>

                <div className="bg-[#f8f9fa] rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-[#167d83] mb-2" />
                  <h3 className="font-semibold text-[#2c3e50] text-lg">灵活工作</h3>
                  <p className="text-[#7f8c8d] text-sm">
                    远程优先，灵活工作时间，支持工作生活平衡。
                  </p>
                </div>

                <div className="bg-[#f8f9fa] rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-[#EE4C23] mb-2" />
                  <h3 className="font-semibold text-[#2c3e50] text-lg">学习预算</h3>
                  <p className="text-[#7f8c8d] text-sm">用于课程、会议和书籍的年度预算。</p>
                </div>

                <div className="bg-[#f8f9fa] rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                  <Award className="h-8 w-8 text-[#167d83] mb-2" />
                  <h3 className="font-semibold text-[#2c3e50] text-lg">股权</h3>
                  <p className="text-[#7f8c8d] text-sm">每位员工都获得公司股权。</p>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                  查看所有福利 <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#167d83]/5 rounded-full blur-3xl"></div>

              {/* 六边形网格 */}
              <div className="relative grid grid-cols-3 gap-4">
                {[
                  { icon: <Coffee className="h-6 w-6 text-[#167d83]" />, label: "免费午餐" },
                  { icon: <Globe className="h-6 w-6 text-[#EE4C23]" />, label: "远程工作" },
                  { icon: <Leaf className="h-6 w-6 text-[#167d83]" />, label: "健康日" },
                  { icon: <Users className="h-6 w-6 text-[#EE4C23]" />, label: "团队活动" },
                  { icon: <Star className="h-6 w-6 text-[#167d83]" />, label: "员工认可" },
                  { icon: <Building className="h-6 w-6 text-[#EE4C23]" />, label: "401(k)匹配" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="hexagon bg-white shadow-lg p-4 flex flex-col items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-2">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-[#2c3e50]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
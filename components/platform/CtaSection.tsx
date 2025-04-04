"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#167d83] to-[#0d4c4f] text-white relative overflow-hidden">
      {/* 装饰图形 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-lg"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            准备好升级您的员工福利了吗？
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            为您的团队提供全面的月经健康支持。预约演示，了解我们的平台如何带来显著的投资回报。
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* 左侧CTA */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold mb-2">立即安排演示</h3>
              <p className="text-white/80 mb-4">
                我们的专家将向您展示平台功能，并说明如何轻松实施。
              </p>
              <Button size="lg" className="w-full bg-white text-[#167d83] hover:bg-white/90">
                预约时间 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* 右侧快速开始表单 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold mb-2">开始使用</h3>
              <p className="text-white/80 mb-4">
                填写以下信息，我们的团队将在24小时内与您联系。
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="公司邮箱"
                  className="w-full px-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#EE4C23] hover:bg-[#d43d18] text-white border-none"
                >
                  获取信息
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
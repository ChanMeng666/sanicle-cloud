"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#167d83] to-[#0d4c4f] text-white relative overflow-hidden">
      {/* 装饰图形 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-12 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-md animate-float"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            准备好升级您的<span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">员工福利</span>了吗？
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            为您的团队提供全面的月经健康支持。预约演示，了解我们的平台如何带来显著的投资回报。
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* 左侧CTA */}
            <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-xl text-left hover:bg-white/15 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">立即安排演示</h3>
              <p className="text-white/80 text-sm sm:text-base mb-4">
                我们的专家将向您展示平台功能，并说明如何轻松实施。
              </p>
              <Button size="lg" className="w-full bg-white text-[#167d83] hover:bg-white/90 hover:scale-105 transition-all duration-300">
                预约时间 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* 右侧快速开始表单 */}
            <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-xl text-left hover:bg-white/15 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">开始使用</h3>
              <p className="text-white/80 text-sm sm:text-base mb-4">
                填写以下信息，我们的团队将在24小时内与您联系。
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="公司邮箱"
                  className="w-full px-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:bg-white/25"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#EE4C23] hover:bg-[#d43d18] text-white border-none hover:scale-105 transition-all duration-300"
                >
                  获取信息
                </Button>
              </form>
            </div>
          </div>
          
          {/* 信任标志 */}
          <div className="mt-12 sm:mt-16">
            <p className="text-white/60 text-xs sm:text-sm mb-6">受到行业领先公司的信任</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white h-full w-20 sm:w-24 rounded"></div>
              </div>
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white h-full w-20 sm:w-24 rounded"></div>
              </div>
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white h-full w-20 sm:w-24 rounded"></div>
              </div>
              <div className="h-6 sm:h-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white h-full w-20 sm:w-24 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Shield, Calendar, ChevronRight } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#e6f5f6]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">员工福利</h2>
            <p className="text-[#7f8c8d] mt-2 max-w-xl">
              探索Sanicle.cloud如何帮助您管理月经健康并改善工作场所体验。
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
            查看所有福利 <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* 交替内容块 */}
        <div className="space-y-16">
          {/* 块1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#fef6e9] flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-[#EE4C23]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-3">个性化健康管理</h3>
                <p className="text-[#7f8c8d] mb-5">
                  获取针对您独特月经健康需求的定制资源和支持。
                </p>
                <div className="space-y-3">
                  {[
                    "通过智能洞察追踪您的周期",
                    "接收个性化建议",
                    "获取教育资源",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                      <span className="text-[#2c3e50]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="个性化健康追踪"
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* 块2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#EE4C23] rounded-lg opacity-10 blur-lg transform -rotate-3"></div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="数据隐私与安全"
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#e6f5f6] flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#167d83]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-3">隐私与安全</h3>
                <p className="text-[#7f8c8d] mb-5">
                  您的健康数据在我们符合HIPAA标准的平台上保持私密和安全。
                </p>
                <div className="space-y-3">
                  {[
                    "完全控制您的数据",
                    "未经同意不与雇主共享数据",
                    "安全加密和存储",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                      <span className="text-[#2c3e50]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 块3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#fef6e9] flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#EE4C23]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-3">工作场所支持</h3>
                <p className="text-[#7f8c8d] mb-5">
                  获取您在职业生活中管理月经健康所需的支持。
                </p>
                <div className="space-y-3">
                  {[
                    "获取月经健康产品",
                    "对PMS和PCOS的支持",
                    "工作场所调适资源",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                      <span className="text-[#2c3e50]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="工作场所支持"
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
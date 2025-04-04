"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Shield, Calendar, ChevronRight } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-teal-pale relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-pale to-teal-pale/70"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-white rounded-full opacity-20"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white rounded-full opacity-20"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
              <span className="relative inline-block">
                员工福利
                <span className="absolute bottom-1 left-0 w-full h-2 bg-coral-light/30 -z-10"></span>
              </span>
            </h2>
            <p className="text-slate mt-3 max-w-xl">
              探索Sanicle.cloud如何帮助您管理月经健康并改善工作场所体验。
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 border-teal-DEFAULT text-teal-DEFAULT hover:bg-teal-pale/80 group">
            查看所有福利 <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* 福利内容块 */}
        <div className="space-y-16 md:space-y-24">
          {/* 块1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center mb-5">
                  <Calendar className="h-6 w-6 text-coral-DEFAULT" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">个性化周期追踪</h3>
                <p className="text-slate mb-6">
                  使用我们的AI驱动平台追踪和预测您的月经周期，获取个性化提醒和建议。
                </p>
                <div className="space-y-3">
                  {[
                    "精确的周期预测",
                    "个性化的健康见解",
                    "随时随地的移动端访问",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start group">
                      <CheckCircle className="h-5 w-5 text-teal-DEFAULT mr-3 mt-0.5 flex-shrink-0 group-hover:text-teal-deep transition-colors" />
                      <span className="text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-DEFAULT rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="周期追踪"
                  className="relative z-10 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                />
                {/* 装饰元素 */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-md p-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-coral-DEFAULT mr-2" />
                    <span className="font-medium text-charcoal">智能提醒</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 块2 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-coral-DEFAULT rounded-lg opacity-10 blur-lg transform -rotate-3"></div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="专家资源"
                  className="relative z-10 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                />
                {/* 装饰元素 */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-md p-3 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center text-sm">
                    <Heart className="h-4 w-4 text-teal-DEFAULT mr-2" />
                    <span className="font-medium text-charcoal">健康资讯</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-teal-pale flex items-center justify-center mb-5">
                  <Heart className="h-6 w-6 text-teal-DEFAULT" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">专家资源与支持</h3>
                <p className="text-slate mb-6">
                  获取由专业医疗人员审核的教育内容和资源，帮助您了解并管理月经健康。
                </p>
                <div className="space-y-3">
                  {[
                    "经过专业验证的健康内容",
                    "个性化推荐的文章和视频",
                    "在线专家咨询服务",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start group">
                      <CheckCircle className="h-5 w-5 text-coral-DEFAULT mr-3 mt-0.5 flex-shrink-0 group-hover:text-coral-DEFAULT/80 transition-colors" />
                      <span className="text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 块3 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center mb-5">
                  <Shield className="h-6 w-6 text-teal-DEFAULT" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">隐私与安全</h3>
                <p className="text-slate mb-6">
                  您的健康数据在我们符合HIPAA标准的平台上保持私密和安全。
                </p>
                <div className="space-y-3">
                  {[
                    "完全控制您的数据",
                    "未经同意不与雇主共享数据",
                    "安全加密和存储",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start group">
                      <CheckCircle className="h-5 w-5 text-teal-DEFAULT mr-3 mt-0.5 flex-shrink-0 group-hover:text-teal-deep transition-colors" />
                      <span className="text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-coral-DEFAULT rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="数据隐私与安全"
                  className="relative z-10 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                />
                {/* 装饰元素 */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-md p-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center text-sm">
                    <Shield className="h-4 w-4 text-coral-DEFAULT mr-2" />
                    <span className="font-medium text-charcoal">数据保护</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
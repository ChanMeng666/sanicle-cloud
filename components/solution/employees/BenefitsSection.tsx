"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Shield, Calendar, ChevronRight, BarChart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function BenefitsSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-beige/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
              <span className="relative inline-block">
                健康福利
                <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/20 -z-10"></span>
              </span>
            </h2>
            <p className="text-slate text-lg max-w-xl">
              探索我们的健康管理平台如何帮助您管理健康并改善工作场所体验。
            </p>
          </div>
          <Button asChild variant="soft-secondary" size="lg" rounded="lg" className="mt-6 md:mt-0 group">
            <Link href="/all-benefits" className="flex items-center">
              查看所有福利 <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* 福利内容块 */}
        <div className="space-y-20 md:space-y-32">
          {/* 福利1: 健康追踪 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="border-primary/10 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary-pale flex items-center justify-center mb-6">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-charcoal mb-4">个性化健康追踪</h3>
                  <p className="text-lg text-slate mb-8">
                    使用我们的AI驱动平台追踪和预测您的健康状况，获取个性化提醒和建议，帮助您更好地管理日常健康。
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "精确的健康数据分析",
                      "个性化的健康见解",
                      "随时随地的移动端访问"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start group">
                        <CheckCircle className="h-6 w-6 text-secondary mr-4 mt-0.5 flex-shrink-0 group-hover:text-secondary/80 transition-colors" />
                        <span className="text-charcoal text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="secondary" size="lg" rounded="lg" className="mt-8">
                    了解更多功能
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-2xl opacity-30 blur-xl transform rotate-3"></div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="健康追踪"
                  className="relative z-10 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* 装饰元素 */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <div className="flex items-center text-sm">
                    <BarChart className="h-6 w-6 text-secondary mr-3" />
                    <div>
                      <p className="font-bold text-charcoal">数据洞察</p>
                      <p className="text-slate text-xs">智能分析改善健康状况</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 福利2: 专家资源 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-30 blur-xl transform -rotate-3"></div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="专家资源"
                  className="relative z-10 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* 装饰元素 */}
                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <div className="flex items-center text-sm">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <p className="font-bold text-charcoal">专家支持</p>
                      <p className="text-slate text-xs">专业团队提供咨询服务</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="border-primary/10 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-beige flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-charcoal mb-4">专家资源与支持</h3>
                  <p className="text-lg text-slate mb-8">
                    获取由专业医疗人员审核的教育内容和资源，帮助您了解并管理健康，提供全方位的健康支持。
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "经过专业验证的健康内容",
                      "个性化推荐的文章和视频",
                      "在线专家咨询服务"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start group">
                        <CheckCircle className="h-6 w-6 text-primary mr-4 mt-0.5 flex-shrink-0 group-hover:text-primary/80 transition-colors" />
                        <span className="text-charcoal text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="default" size="lg" rounded="lg" className="mt-8">
                    浏览专家资源
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 福利3: 隐私与安全 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card variant="gradient" className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">隐私与安全</h3>
                  <p className="text-lg text-white/80 mb-8">
                    您的健康数据在我们符合行业标准的平台上保持私密和安全，确保个人隐私得到充分保护。
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "完全控制您的数据",
                      "未经同意不与雇主共享数据",
                      "安全加密和存储"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start group">
                        <CheckCircle className="h-6 w-6 text-white/90 mr-4 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                        <span className="text-white text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="lg" rounded="lg" className="mt-8 border-white text-white hover:bg-white/20">
                    了解隐私政策
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-2xl opacity-40 blur-xl transform rotate-3"></div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="数据隐私与安全"
                  className="relative z-10 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* 装饰元素 */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <div className="flex items-center text-sm">
                    <Shield className="h-6 w-6 text-secondary mr-3" />
                    <div>
                      <p className="font-bold text-charcoal">数据保护</p>
                      <p className="text-slate text-xs">100% 安全加密</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 底部CTA */}
        <div className="mt-24 text-center">
          <Button asChild size="xl" variant="secondary" rounded="full" className="shadow-xl">
            <Link href="/signup">立即体验所有福利</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 
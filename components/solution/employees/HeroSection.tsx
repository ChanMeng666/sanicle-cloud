"use client"

import { Button } from "@/components/ui/button"
import { Heart, Shield, Smartphone, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary-pale via-beige-light to-beige relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pattern-dots opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pattern-dots opacity-20"></div>
        
        <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-[15%] left-[10%] w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
        
        {/* 漂浮元素 */}
        <div className="absolute top-[30%] right-[25%] w-16 h-16 bg-primary/10 rounded-xl rotate-12 animate-float"></div>
        <div className="absolute bottom-[20%] left-[20%] w-12 h-12 bg-secondary/10 rounded-full animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <CheckCircle className="h-5 w-5" />
              为员工提供健康福利
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 tracking-tight leading-tight">
              掌控您的<span className="text-primary relative inline-block ml-2">
                健康管理
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"></span>
              </span>
            </h1>
            
            <p className="text-slate text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8">
              通过您雇主提供的福利计划，获取个性化的健康资源、产品和专业支持，改善您的工作体验和生活质量。
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" variant="secondary" rounded="lg" className="shadow-lg">
                <Link href="/signup" className="flex items-center">
                  立即开始 <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-secondary" rounded="lg">
                <Link href="/features">了解更多</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary-pale flex items-center justify-center mb-2 mx-auto">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <p className="text-center text-sm text-slate">个性化健康方案</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center mb-2 mx-auto">
                  <Smartphone className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-center text-sm text-slate">多平台支持</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-secondary-light/20 flex items-center justify-center mb-2 mx-auto">
                  <Shield className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-center text-sm text-slate">数据安全保障</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 perspective-1000 transform hover:scale-[1.02] transition-all duration-500">
              <div className="relative bg-white p-4 rounded-2xl shadow-xl border-8 border-white/80 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-secondary rounded-full opacity-10 blur-lg"></div>
                
                {/* App界面模拟 */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl overflow-hidden">
                  {/* 顶部状态栏 */}
                  <div className="bg-primary p-3 text-white flex items-center justify-between">
                    <span className="font-medium">个人健康管理</span>
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5" />
                      <Shield className="h-5 w-5" />
                    </div>
                  </div>
                  
                  {/* 主体内容 */}
                  <div className="p-4 space-y-4">
                    {/* 进度指示器 */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-charcoal font-medium">健康指数</span>
                        <span className="text-primary font-bold">92%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-full w-[92%] bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* 活动卡片 */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-primary-pale p-3 rounded-lg text-center">
                        <span className="block text-2xl font-bold text-primary">8.2k</span>
                        <span className="text-xs text-slate">今日步数</span>
                      </div>
                      <div className="bg-secondary-light/20 p-3 rounded-lg text-center">
                        <span className="block text-2xl font-bold text-secondary">6.5h</span>
                        <span className="text-xs text-slate">睡眠时间</span>
                      </div>
                    </div>
                    
                    {/* 日历卡片 */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-primary/10">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-charcoal font-medium">本月日程</span>
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {[...Array(7)].map((_, i) => (
                          <div key={i} className="w-8 h-8 flex items-center justify-center text-xs">
                            {['一','二','三','四','五','六','日'][i]}
                          </div>
                        ))}
                        {[...Array(31)].map((_, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${i === 15 ? 'bg-primary text-white' : i % 7 === 5 || i % 7 === 6 ? 'text-slate/50' : 'text-slate'}`}>
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 浮动元素 */}
                <div className="absolute -top-6 -right-6 bg-white rounded-lg p-3 shadow-lg rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary-pale text-primary flex items-center justify-center mr-2">
                      <Heart className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-charcoal">健康提升 <span className="text-secondary font-bold">90%</span></span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-3 shadow-lg -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-secondary-light/30 text-secondary flex items-center justify-center mr-2">
                      <Shield className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-charcoal">数据保护 <span className="text-primary font-bold">100%</span></span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 装饰元素 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-primary/10 rounded-full -z-10 animate-pulse-opacity"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-secondary/10 rounded-full -z-10 animate-pulse-opacity" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>

      {/* 底部波浪过渡 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
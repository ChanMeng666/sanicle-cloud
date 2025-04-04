"use client"

import { ArrowDown, Heart, Smartphone, Sparkles, Bell, Zap } from "lucide-react"

export function AppPreview() {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#fef6e9] text-[#EE4C23] text-sm font-medium rounded-full mb-3">
            移动应用
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">您的个人健康助手</h2>
          <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
            Sanicle.cloud应用为管理您的月经健康提供了无缝体验。
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 md:col-start-2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-72 w-72 bg-[#7ac8cd]/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 bg-[#f8f9fa] p-2 rounded-[2.5rem] shadow-xl border-8 border-[#2c3e50]/10 max-w-xs mx-auto">
                <img
                  src="/placeholder.svg?height=600&width=300"
                  alt="移动应用界面"
                  className="rounded-[2rem] w-full"
                />

                {/* 交互元素 */}
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                  <Bell className="h-5 w-5 text-[#EE4C23]" />
                </div>

                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                  <Sparkles className="h-5 w-5 text-[#167d83]" />
                </div>

                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                  <Zap className="h-5 w-5 text-[#EE4C23]" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="space-y-8">
              {[
                {
                  title: "智能周期追踪",
                  description: "通过AI驱动的洞察和预测追踪您的周期。",
                  icon: <ArrowDown className="h-5 w-5 text-white" />,
                },
                {
                  title: "个性化资源",
                  description: "获取为您量身定制的文章、视频和资源。",
                  icon: <Heart className="h-5 w-5 text-white" />,
                },
                {
                  title: "产品获取",
                  description: "直接通过应用订购月经产品。",
                  icon: <Smartphone className="h-5 w-5 text-white" />,
                },
                {
                  title: "健康洞察",
                  description: "了解模式并获取改善健康的建议。",
                  icon: <Sparkles className="h-5 w-5 text-white" />,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="mr-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#167d83] to-[#0e5a5f] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2c3e50] text-lg mb-1">{item.title}</h3>
                    <p className="text-[#7f8c8d]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
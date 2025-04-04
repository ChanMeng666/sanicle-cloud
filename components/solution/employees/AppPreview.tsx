"use client"

import { ArrowDown, Heart, Smartphone, Sparkles, Bell, Zap } from "lucide-react"

export function AppPreview() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute -left-32 top-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-beige opacity-30 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-teal-pale opacity-30 blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-beige text-coral-DEFAULT text-sm font-medium rounded-full mb-3">
            移动应用
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-charcoal leading-tight">
            <span className="relative inline-block">
              您的个人健康助手
              <span className="absolute bottom-2 left-0 w-full h-3 bg-teal-pale/60 -z-10"></span>
            </span>
          </h2>
          <p className="text-slate mt-3 max-w-2xl mx-auto">
            Sanicle.cloud应用为管理您的月经健康提供了无缝体验。
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="md:col-span-5 mx-auto md:mx-0">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-48 w-48 md:h-72 md:w-72 bg-teal-light/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 bg-gradient-to-b from-slate-100 to-slate-200 p-2 rounded-[2.5rem] shadow-xl border-8 border-white/90 max-w-xs mx-auto transform hover:rotate-0 hover:scale-[1.02] transition-all duration-500" style={{ transform: "rotate(-3deg)" }}>
                <img
                  src="/placeholder.svg?height=600&width=300"
                  alt="移动应用界面"
                  className="rounded-[2rem] w-full"
                />

                {/* 交互元素 */}
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-pulse-opacity">
                  <Bell className="h-5 w-5 text-coral-DEFAULT" />
                </div>

                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-pulse-opacity" style={{ animationDelay: "1s" }}>
                  <Sparkles className="h-5 w-5 text-teal-DEFAULT" />
                </div>

                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-pulse-opacity" style={{ animationDelay: "2s" }}>
                  <Zap className="h-5 w-5 text-coral-DEFAULT" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-8">
              {[
                {
                  title: "智能周期追踪",
                  description: "通过AI驱动的洞察和预测追踪您的周期，提前了解您的身体变化。",
                  icon: <ArrowDown className="h-5 w-5 text-white" />,
                  color: "from-teal-DEFAULT to-teal-deep",
                },
                {
                  title: "个性化资源",
                  description: "获取为您量身定制的文章、视频和资源，帮助您更好地了解自己的健康。",
                  icon: <Heart className="h-5 w-5 text-white" />,
                  color: "from-coral-DEFAULT to-coral-DEFAULT/80",
                },
                {
                  title: "产品获取",
                  description: "直接通过应用订购月经产品，无缝配送到您的办公室或家中。",
                  icon: <Smartphone className="h-5 w-5 text-white" />,
                  color: "from-teal-DEFAULT to-teal-deep",
                },
                {
                  title: "健康洞察",
                  description: "了解模式并获取改善健康的建议，实时掌握您的身体状况。",
                  icon: <Sparkles className="h-5 w-5 text-white" />,
                  color: "from-coral-DEFAULT to-coral-DEFAULT/80",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start group">
                  <div 
                    className={`mr-4 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg mb-2 group-hover:text-teal-DEFAULT transition-colors">{item.title}</h3>
                    <p className="text-slate">{item.description}</p>
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
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Users, Smile, Clock, Zap, BarChart } from "lucide-react"

export function CompanyCultureSection() {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      title: "关怀至上",
      description:
        "我们将关爱放在一切的核心，始终致力于改善每位女性的工作生活质量。",
      color: "bg-pink-50 border-pink-100 text-pink-700",
      iconBg: "bg-pink-100",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "团队合作",
      description:
        "我们相信通过协作和共同努力，我们能够创造出比任何个人更伟大的成果。",
      color: "bg-blue-50 border-blue-100 text-blue-700",
      iconBg: "bg-blue-100",
    },
    {
      icon: <Smile className="h-6 w-6 text-yellow-500" />,
      title: "乐观进取",
      description:
        "面对挑战，我们保持积极的态度，视每个困难为成长和创新的机会。",
      color: "bg-yellow-50 border-yellow-100 text-yellow-700",
      iconBg: "bg-yellow-100",
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-500" />,
      title: "工作生活平衡",
      description:
        "我们尊重每个人的个人时间，支持团队成员在工作与生活间找到健康的平衡。",
      color: "bg-emerald-50 border-emerald-100 text-emerald-700",
      iconBg: "bg-emerald-100",
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-500" />,
      title: "创新精神",
      description:
        "我们鼓励创新思维和大胆尝试，不断寻求解决问题的新方法。",
      color: "bg-indigo-50 border-indigo-100 text-indigo-700",
      iconBg: "bg-indigo-100",
    },
    {
      icon: <BarChart className="h-6 w-6 text-purple-500" />,
      title: "持续成长",
      description:
        "我们致力于个人和团队的持续发展，提供学习和提升的机会。",
      color: "bg-purple-50 border-purple-100 text-purple-700",
      iconBg: "bg-purple-100",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        {/* 装饰元素 */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#167d83]/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-[#EE4C23]/10 rounded-full blur-3xl opacity-70"></div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* 左侧内容区域 */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-6">
              公司文化
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c3e50] mb-6 tracking-tight">
              加入一个重视 
              <span className="relative inline-block">
                价值观驱动
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#EE4C23]/20 -rotate-1"></span>
              </span>
              的团队
            </h2>

            <p className="text-lg text-[#7f8c8d] mb-8 leading-relaxed">
              在Sanicle.cloud，我们的文化建立在共同的价值观和使命感之上。我们相信通过打造一个多元、包容且充满活力的工作环境，可以激发每个人的最大潜能，共同推动女性工作场所健康的变革。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`p-5 rounded-xl border ${value.color} flex items-start hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]`}
                >
                  <div className={`${value.iconBg} p-2.5 rounded-lg mr-4 flex-shrink-0`}>
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2c3e50] text-lg mb-1.5">{value.title}</h3>
                    <p className="text-[#7f8c8d] text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white shadow-md hover:shadow-lg transition-all duration-300 px-6">
              了解我们的文化
            </Button>
          </div>

          {/* 右侧图片区域 */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#167d83]/10 to-transparent mix-blend-overlay"></div>
              
              {/* 装饰叠加图片 */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg overflow-hidden shadow-xl transform rotate-6 border-4 border-white">
                <div className="w-full h-full bg-[url('/placeholder.svg?height=200&width=200')] bg-cover bg-center"></div>
              </div>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg overflow-hidden shadow-xl transform -rotate-6 border-4 border-white">
                <div className="w-full h-full bg-[url('/placeholder.svg?height=150&width=150')] bg-cover bg-center"></div>
              </div>
              
              {/* 悬浮卡片 */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="flex -space-x-2 mr-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex-shrink-0"></div>
                    ))}
                  </div>
                  <span className="text-xs text-[#2c3e50] font-medium">及其他12人</span>
                </div>
                <p className="text-xs text-[#7f8c8d]">"这是一个让每位成员都能感到归属和成长的地方"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
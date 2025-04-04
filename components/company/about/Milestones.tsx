"use client"

import { Globe, Users, Award, Star, Heart, Sparkles } from "lucide-react"

export function Milestones() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative -mt-10 z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
            我们的影响力
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">里程碑与成就</h2>
          <p className="text-lg text-[#7f8c8d]">
            塑造Sanicle.cloud成长与影响的关键时刻。
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* 中心圆 */}
          <div className="relative z-20 w-64 h-64 bg-[#167d83] rounded-full shadow-xl mx-auto flex flex-col items-center justify-center p-6 text-white">
            <Globe className="h-12 w-12 mb-3" />
            <h3 className="text-xl font-bold text-center">全球影响力</h3>
            <p className="text-sm text-center text-white/80 mt-1">改变全球工作场所</p>
          </div>

          {/* 外部圆圈 */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-2 border-[#167d83]/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-[#167d83]/10 rounded-full"></div>
          </div>

          {/* 成就项目 */}
          {[
            {
              icon: <Users className="h-6 w-6 text-[#167d83]" />,
              title: "500+家公司",
              position: "top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            },
            {
              icon: <Globe className="h-6 w-6 text-[#167d83]" />,
              title: "12个国家",
              position: "top-1/4 right-0 transform translate-x-1/2",
            },
            {
              icon: <Award className="h-6 w-6 text-[#167d83]" />,
              title: "3项行业奖项",
              position: "bottom-1/4 right-0 transform translate-x-1/2",
            },
            {
              icon: <Star className="h-6 w-6 text-[#167d83]" />,
              title: "4.9/5评分",
              position: "bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2",
            },
            {
              icon: <Heart className="h-6 w-6 text-[#167d83]" />,
              title: "10,000+用户",
              position: "bottom-1/4 left-0 transform -translate-x-1/2",
            },
            {
              icon: <Sparkles className="h-6 w-6 text-[#167d83]" />,
              title: "500万美元融资",
              position: "top-1/4 left-0 transform -translate-x-1/2",
            },
          ].map((achievement, index) => (
            <div
              key={index}
              className={`hidden md:flex absolute ${achievement.position} items-center justify-center`}
            >
              <div className="bg-white rounded-lg shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110">
                <div className="w-10 h-10 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3">
                  {achievement.icon}
                </div>
                <span className="text-[#2c3e50] font-bold">{achievement.title}</span>
              </div>
            </div>
          ))}

          {/* 移动端显示 */}
          <div className="grid grid-cols-2 gap-4 mt-12 md:hidden">
            {[
              {
                icon: <Users className="h-6 w-6 text-[#167d83]" />,
                title: "500+家公司",
              },
              {
                icon: <Globe className="h-6 w-6 text-[#167d83]" />,
                title: "12个国家",
              },
              {
                icon: <Award className="h-6 w-6 text-[#167d83]" />,
                title: "3项行业奖项",
              },
              {
                icon: <Star className="h-6 w-6 text-[#167d83]" />,
                title: "4.9/5评分",
              },
              {
                icon: <Heart className="h-6 w-6 text-[#167d83]" />,
                title: "10,000+用户",
              },
              {
                icon: <Sparkles className="h-6 w-6 text-[#167d83]" />,
                title: "500万美元融资",
              },
            ].map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3 flex-shrink-0">
                  {achievement.icon}
                </div>
                <span className="text-[#2c3e50] font-bold text-sm">{achievement.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
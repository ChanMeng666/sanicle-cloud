"use client"

import { Globe, Users, Award, Star, Heart, Sparkles } from "lucide-react"

export function Milestones() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[#f8f9fa] relative -mt-10 z-20 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#e6f5f6]/50 filter blur-3xl animate-float-delay opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#fef6e9]/50 filter blur-3xl animate-float opacity-40"></div>

      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
            我们的影响力
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c3e50] mb-4">里程碑与成就</h2>
          <p className="text-lg text-[#7f8c8d] max-w-2xl mx-auto">
            塑造Sanicle.cloud成长与影响的关键时刻。
          </p>
        </div>

        {/* 桌面版影响力展示 */}
        <div className="relative max-w-4xl mx-auto hidden md:block h-[700px]">
          {/* 中心圆 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-64 h-64 bg-gradient-to-br from-[#167d83] to-[#126e73] rounded-full shadow-xl flex flex-col items-center justify-center p-6 text-white animate-pulse-opacity">
            <div className="absolute inset-0 rounded-full shadow-glow opacity-40"></div>
            <Globe className="h-12 w-12 mb-3" />
            <h3 className="text-xl font-bold text-center">全球影响力</h3>
            <p className="text-sm text-center text-white/80 mt-1">改变全球工作场所</p>
          </div>

          {/* 外部圆圈 - 增加尺寸以容纳标签 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border-2 border-dashed border-[#167d83]/30 rounded-full animate-scale-up-down"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border-2 border-[#167d83]/20 rounded-full"></div>

          {/* 成就项目 - 使用径向布局 */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3">
                <Users className="h-6 w-6 text-[#167d83]" />
              </div>
              <span className="text-[#2c3e50] font-bold whitespace-nowrap">500+家公司</span>
            </div>
          </div>

          <div className="absolute top-[25%] right-12 transform translate-x-0 -translate-y-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3">
                <Globe className="h-6 w-6 text-[#167d83]" />
              </div>
              <span className="text-[#2c3e50] font-bold whitespace-nowrap">12个国家</span>
            </div>
          </div>

          <div className="absolute top-[75%] right-12 transform translate-x-0 translate-y-0">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3">
                <Award className="h-6 w-6 text-[#167d83]" />
              </div>
              <span className="text-[#2c3e50] font-bold whitespace-nowrap">3项行业奖项</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3">
                <Star className="h-6 w-6 text-[#167d83]" />
              </div>
              <span className="text-[#2c3e50] font-bold whitespace-nowrap">4.8/5分</span>
            </div>
          </div>

          <div className="absolute top-[75%] left-12 transform -translate-x-0 translate-y-0">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3">
                <Heart className="h-6 w-6 text-[#167d83]" />
              </div>
              <span className="text-[#2c3e50] font-bold whitespace-nowrap">10,000+用户</span>
            </div>
          </div>

          <div className="absolute top-[25%] left-12 transform -translate-x-0 -translate-y-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3">
                <Sparkles className="h-6 w-6 text-[#167d83]" />
              </div>
              <span className="text-[#2c3e50] font-bold whitespace-nowrap">500万美元融资</span>
            </div>
          </div>

          {/* 连接线 */}
          <div className="absolute inset-0 top-1/2 left-1/2 w-[550px] h-[550px] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <svg className="w-full h-full" viewBox="0 0 550 550">
              <g stroke="#167d83" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.3">
                <line x1="275" y1="0" x2="275" y2="275" />
                <line x1="550" y1="137.5" x2="275" y2="275" />
                <line x1="550" y1="412.5" x2="275" y2="275" />
                <line x1="275" y1="550" x2="275" y2="275" />
                <line x1="0" y1="412.5" x2="275" y2="275" />
                <line x1="0" y1="137.5" x2="275" y2="275" />
              </g>
            </svg>
          </div>
        </div>

        {/* 平板和移动端显示 - 更加紧凑的网格布局 */}
        <div className="md:hidden relative">
          <div className="w-48 h-48 bg-gradient-to-br from-[#167d83] to-[#126e73] rounded-full shadow-xl mx-auto flex flex-col items-center justify-center p-6 text-white mb-10">
            <Globe className="h-10 w-10 mb-2" />
            <h3 className="text-lg font-bold text-center">全球影响力</h3>
            <p className="text-xs text-center text-white/80 mt-1">改变全球工作场所</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
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
                title: "4.8/5分",
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
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
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
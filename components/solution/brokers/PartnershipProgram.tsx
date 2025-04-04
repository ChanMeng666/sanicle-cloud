"use client"

import { Handshake } from "lucide-react"

export function PartnershipProgram() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[#e6f5f6] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#167d83] rounded-full opacity-5 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#167d83] rounded-full opacity-5 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-[#167d83] text-xs md:text-sm font-medium rounded-full mb-3 shadow-sm">
            合作选项
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c3e50] mb-3">我们的合作计划</h2>
          <p className="text-[#7f8c8d] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            加入我们的福利经纪人和顾问网络，为您的客户带来创新的月经健康解决方案。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
            <div className="bg-[#fef6e9] p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50]">推荐合作伙伴</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#fef6e9] flex items-center justify-center transform transition-transform duration-500 hover:rotate-12">
                  <Handshake className="h-8 w-8 md:h-10 md:w-10 text-[#EE4C23]" />
                </div>
              </div>

              <p className="text-[#7f8c8d] mb-6 text-center text-sm md:text-base">
                适合希望向Sanicle.cloud推荐客户的经纪人，而我们负责实施和管理。
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "有竞争力的推荐费",
                  "最少的时间投入",
                  "联合品牌的营销材料",
                  "客户状态的定期更新",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#EE4C23] mr-3"></div>
                    <span className="text-[#2c3e50] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-[#EE4C23] to-[#f06845] hover:from-[#d43d18] hover:to-[#e05835] text-white rounded-lg font-medium text-sm md:text-base shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  申请成为推荐合作伙伴
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
            <div className="bg-[#e6f5f6] p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50]">渠道合作伙伴</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#e6f5f6] flex items-center justify-center transform transition-transform duration-500 hover:rotate-12">
                  <Handshake className="h-8 w-8 md:h-10 md:w-10 text-[#167d83]" />
                </div>
              </div>

              <p className="text-[#7f8c8d] mb-6 text-center text-sm md:text-base">
                适合希望将Sanicle.cloud完全整合到其产品组合中并积极参与销售过程的经纪人。
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "更高的佣金率",
                  "定制化销售支持",
                  "联合营销活动",
                  "专属客户成功经理",
                  "优先级产品路线图访问",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#167d83] mr-3"></div>
                    <span className="text-[#2c3e50] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-[#167d83] to-[#22c0c7] hover:from-[#0e5a5f] hover:to-[#17a0a6] text-white rounded-lg font-medium text-sm md:text-base shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  申请成为渠道合作伙伴
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
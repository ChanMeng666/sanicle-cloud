"use client"

import { Handshake } from "lucide-react"

export function PartnershipProgram() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#e6f5f6] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#167d83] rounded-full opacity-5 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#167d83] rounded-full opacity-5 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-white text-[#167d83] text-sm font-medium rounded-full mb-3">
            合作选项
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">我们的合作计划</h2>
          <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
            加入我们的福利经纪人和顾问网络，为您的客户带来创新的月经健康解决方案。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-[#fef6e9] p-4 text-center">
              <h3 className="text-xl font-semibold text-[#2c3e50]">推荐合作伙伴</h3>
            </div>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[#fef6e9] flex items-center justify-center">
                  <Handshake className="h-10 w-10 text-[#EE4C23]" />
                </div>
              </div>

              <p className="text-[#7f8c8d] mb-6 text-center">
                适合希望向Sanicle.cloud推荐客户的经纪人，而我们负责实施和管理。
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "有竞争力的推荐费",
                  "最少的时间投入",
                  "联合品牌的营销材料",
                  "客户状态的定期更新",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#EE4C23] mr-3"></div>
                    <span className="text-[#2c3e50]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="px-6 py-3 bg-[#EE4C23] hover:bg-[#d43d18] text-white rounded-lg font-medium">
                  申请成为推荐合作伙伴
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-[#e6f5f6] p-4 text-center">
              <h3 className="text-xl font-semibold text-[#2c3e50]">渠道合作伙伴</h3>
            </div>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[#e6f5f6] flex items-center justify-center">
                  <Handshake className="h-10 w-10 text-[#167d83]" />
                </div>
              </div>

              <p className="text-[#7f8c8d] mb-6 text-center">
                适合希望将Sanicle.cloud完全整合到其产品组合中并积极参与销售过程的经纪人。
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "更高的佣金率",
                  "定制化销售支持",
                  "联合营销活动",
                  "专属客户成功经理",
                  "优先级产品路线图访问",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#167d83] mr-3"></div>
                    <span className="text-[#2c3e50]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="px-6 py-3 bg-[#167d83] hover:bg-[#0e5a5f] text-white rounded-lg font-medium">
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
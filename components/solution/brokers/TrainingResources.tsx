"use client"

import { FileText, BookOpen, Briefcase } from "lucide-react"

export function TrainingResources() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#fef6e9] text-[#EE4C23] text-xs md:text-sm font-medium rounded-full mb-3 shadow-sm">
            合作伙伴资源
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c3e50] mb-3">培训和支持</h2>
          <p className="text-[#7f8c8d] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            我们提供全面的资源和培训，确保您拥有成功所需的一切。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-[#167d83] to-[#22c0c7]"></div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <FileText className="h-8 w-8 text-[#167d83]" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50] text-center mb-4">销售工具包</h3>
              <p className="text-[#7f8c8d] text-center mb-6 text-sm md:text-base leading-relaxed">
                获取您需要的所有资源，向您的客户有效地展示和销售Sanicle.cloud。
              </p>
              <div className="space-y-3">
                {[
                  "销售演示和脚本",
                  "客户提案模板",
                  "常见问题解答和反对意见处理",
                  "竞争性定位指南",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#167d83] mr-3"></div>
                    <span className="text-[#2c3e50] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-[#EE4C23] to-[#f06845]"></div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#fef6e9] flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <BookOpen className="h-8 w-8 text-[#EE4C23]" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50] text-center mb-4">学习中心</h3>
              <p className="text-[#7f8c8d] text-center mb-6 text-sm md:text-base leading-relaxed">
                通过我们丰富的培训资源和认证计划提升您的专业知识。
              </p>
              <div className="space-y-3">
                {[
                  "在线课程和网络研讨会",
                  "合作伙伴认证计划",
                  "产品知识培训",
                  "行业趋势和洞察",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#EE4C23] mr-3"></div>
                    <span className="text-[#2c3e50] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group sm:col-span-2 lg:col-span-1">
            <div className="h-2 bg-gradient-to-r from-[#167d83] to-[#22c0c7]"></div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <Briefcase className="h-8 w-8 text-[#167d83]" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50] text-center mb-4">业务支持</h3>
              <p className="text-[#7f8c8d] text-center mb-6 text-sm md:text-base leading-relaxed">
                获得专业的业务和技术支持，以确保您和您的客户的成功。
              </p>
              <div className="space-y-3">
                {[
                  "专属合作伙伴经理",
                  "客户实施协助",
                  "营销和共同品牌支持",
                  "自动化报告和佣金跟踪",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#167d83] mr-3"></div>
                    <span className="text-[#2c3e50] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
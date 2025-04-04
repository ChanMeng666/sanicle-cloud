"use client"

import { Calendar, Gift, BookOpen, Users, Shield, CheckCircle } from "lucide-react"
import { BenefitAccordion } from "./BenefitAccordion"

export function BenefitFeatures() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
              全面覆盖
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">探索我们的福利</h2>
            <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
              点击每项福利，了解更多关于我们平台如何在工作场所支持月经健康的信息。
            </p>
          </div>

          <div className="space-y-6">
            <BenefitAccordion
              title="高级周期追踪"
              icon={<Calendar className="h-5 w-5" />}
              defaultOpen={true}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[#7f8c8d] mb-4">
                    我们的平台提供先进的周期追踪功能，配合AI驱动的洞察，帮助员工了解自己的月经模式并预测即将到来的周期。
                  </p>
                  <ul className="space-y-3">
                    {[
                      "个性化周期预测",
                      "症状追踪和分析",
                      "模式识别以获取健康洞察",
                      "私密和安全的数据存储",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="周期追踪界面"
                    className="relative z-10 rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="月经产品获取" icon={<Gift className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="order-2 md:order-1 relative">
                  <div className="absolute inset-0 bg-[#EE4C23] rounded-lg opacity-10 blur-lg transform -rotate-3"></div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="月经产品"
                    className="relative z-10 rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-[#7f8c8d] mb-4">
                    员工可以通过我们的平台获取各种月经产品，提供灵活的津贴和配送选项。
                  </p>
                  <ul className="space-y-3">
                    {[
                      "每月产品津贴",
                      "多种产品选择",
                      "环保替代品",
                      "便捷的家庭或办公室配送",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="教育资源" icon={<BookOpen className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[#7f8c8d] mb-4">
                    我们的平台提供全面的月经健康、荷尔蒙疾病和工作场所调适的教育资源。
                  </p>
                  <ul className="space-y-3">
                    {[
                      "专家审核的文章和指南",
                      "视频教程和网络研讨会",
                      "特定疾病信息（PCOS、子宫内膜异位症等）",
                      "工作场所调适资源",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="教育资源"
                    className="relative z-10 rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="专家支持" icon={<Users className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="order-2 md:order-1 relative">
                  <div className="absolute inset-0 bg-[#EE4C23] rounded-lg opacity-10 blur-lg transform -rotate-3"></div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="专家支持"
                    className="relative z-10 rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-[#7f8c8d] mb-4">
                    员工可以获取月经健康问题的专家支持，包括与医疗专业人士的咨询。
                  </p>
                  <ul className="space-y-3">
                    {[
                      "与医疗提供者的虚拟咨询",
                      "快速问题的聊天支持",
                      "个性化建议",
                      "需要时转介给专科医生",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="隐私与安全" icon={<Shield className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[#7f8c8d] mb-4">
                    您的健康数据在我们符合HIPAA标准的平台上保持私密和安全。
                  </p>
                  <ul className="space-y-3">
                    {[
                      "符合HIPAA标准，提供最大保护",
                      "未经同意不共享雇主数据",
                      "带加密的安全云存储",
                      "在征得同意的情况下匿名数据用于洞察",
                      "多因素身份验证以确保安全访问",
                      "用户可控制数据访问、编辑和删除",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="隐私和安全"
                    className="relative z-10 rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </BenefitAccordion>
          </div>
        </div>
      </div>
    </section>
  )
} 
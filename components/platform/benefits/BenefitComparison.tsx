"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ComparisonCard } from "./ComparisonCard"

export function BenefitComparison() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
              福利比较
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">对比分析</h2>
            <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
              看看Sanicle.cloud的全面福利套餐与传统工作场所福利的对比。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ComparisonCard
              title="传统福利"
              features={[
                "基本医疗保险",
                "有限的女性健康覆盖",
                "通用健康资源",
                "无月经产品覆盖",
                "有限的隐私控制",
                "一刀切的方法",
              ]}
              included={false}
            />

            <ComparisonCard
              title="Sanicle.cloud 福利"
              features={[
                "全面的月经健康跟踪",
                "个性化健康洞察",
                "每月月经产品津贴",
                "专家医疗咨询",
                "符合HIPAA标准的隐私保护",
                "根据个人需求定制",
              ]}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#7f8c8d] mb-6">准备好升级您的工作场所福利套餐了吗？</p>
            <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white rounded-full px-8">
              安排咨询 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 
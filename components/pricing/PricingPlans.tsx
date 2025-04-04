"use client"

import { Star, Zap, Shield } from "lucide-react"
import { PricingCard } from "./PricingCard"

interface PricingPlansProps {
  isAnnual: boolean
}

export function PricingPlans({ isAnnual }: PricingPlansProps) {
  const plans = [
    {
      title: "入门版",
      subtitle: "适合小型企业",
      icon: <Star className="h-5 w-5 text-[#167d83]" />,
      price: {
        monthly: "8",
        annual: "6",
      },
      features: [
        "最多50名员工",
        "基础月经健康跟踪",
        "教育资源",
        "标准报告",
        "电子邮件支持",
      ],
      buttonText: "开始使用",
      color: "#167d83",
      saveText: "每位员工每年节省24元",
    },
    {
      title: "专业版",
      subtitle: "适合中型企业",
      icon: <Zap className="h-5 w-5 text-[#EE4C23]" />,
      price: {
        monthly: "12",
        annual: "10",
      },
      features: [
        "最多200名员工",
        "高级健康跟踪",
        "个性化推荐",
        "自定义报告",
        "优先支持",
        "员工分析洞察",
      ],
      buttonText: "获取专业版",
      highlight: true,
      color: "#EE4C23",
      saveText: "每位员工每年节省24元",
    },
    {
      title: "企业版",
      subtitle: "适合大型组织",
      icon: <Shield className="h-5 w-5 text-[#167d83]" />,
      price: {
        monthly: "联系我们",
        annual: "联系我们",
      },
      features: [
        "无限员工",
        "全套功能",
        "深度分析",
        "专属客户经理",
        "API集成",
        "白标解决方案",
        "24/7技术支持",
      ],
      buttonText: "联系销售",
      color: "#167d83",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white relative -mt-20 z-20">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              subtitle={plan.subtitle}
              icon={plan.icon}
              price={plan.price}
              isAnnual={isAnnual}
              features={plan.features}
              buttonText={plan.buttonText}
              highlight={plan.highlight}
              color={plan.color}
              saveText={isAnnual ? plan.saveText : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 
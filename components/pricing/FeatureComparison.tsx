"use client"

import { CheckCircle, X } from "lucide-react"

interface FeatureComparisonItemProps {
  feature: string
  starter: boolean | string
  professional: boolean | string
  enterprise: boolean | string
}

export function FeatureComparisonItem({
  feature,
  starter,
  professional,
  enterprise,
}: FeatureComparisonItemProps) {
  return (
    <div className="grid grid-cols-4 py-3 border-b border-gray-100 items-center">
      <div className="text-[#2c3e50] font-medium">{feature}</div>
      <div className="text-center">
        {typeof starter === "boolean" ? (
          starter ? (
            <CheckCircle className="h-5 w-5 text-[#167d83] mx-auto" />
          ) : (
            <X className="h-5 w-5 text-gray-300 mx-auto" />
          )
        ) : (
          <span className="text-[#7f8c8d]">{starter}</span>
        )}
      </div>
      <div className="text-center bg-[#e6f5f6]/30 py-2">
        {typeof professional === "boolean" ? (
          professional ? (
            <CheckCircle className="h-5 w-5 text-[#167d83] mx-auto" />
          ) : (
            <X className="h-5 w-5 text-gray-300 mx-auto" />
          )
        ) : (
          <span className="text-[#7f8c8d]">{professional}</span>
        )}
      </div>
      <div className="text-center">
        {typeof enterprise === "boolean" ? (
          enterprise ? (
            <CheckCircle className="h-5 w-5 text-[#167d83] mx-auto" />
          ) : (
            <X className="h-5 w-5 text-gray-300 mx-auto" />
          )
        ) : (
          <span className="text-[#7f8c8d]">{enterprise}</span>
        )}
      </div>
    </div>
  )
}

export function FeatureComparison() {
  const features = [
    {
      category: "平台功能",
      items: [
        {
          feature: "月经健康跟踪",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: "症状记录",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: "健康教育资源",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: "AI辅助健康预测",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          feature: "个性化健康建议",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          feature: "健康专家咨询",
          starter: false,
          professional: "限量",
          enterprise: "无限",
        },
      ],
    },
    {
      category: "管理功能",
      items: [
        {
          feature: "员工使用仪表板",
          starter: "基础",
          professional: "高级",
          enterprise: "企业级",
        },
        {
          feature: "数据报告与分析",
          starter: "基础",
          professional: "高级",
          enterprise: "自定义",
        },
        {
          feature: "团队管理",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          feature: "API访问",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          feature: "白标选项",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
    {
      category: "支持与服务",
      items: [
        {
          feature: "电子邮件支持",
          starter: "工作日",
          professional: "24/5",
          enterprise: "24/7",
        },
        {
          feature: "电话支持",
          starter: false,
          professional: "工作日",
          enterprise: "24/7",
        },
        {
          feature: "培训和入职指导",
          starter: "自助",
          professional: "远程",
          enterprise: "现场",
        },
        {
          feature: "专属客户经理",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">特性比较</h2>
          <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
            详细比较各个价格计划所包含的功能，选择最适合您组织的选项。
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-4 bg-[#e6f5f6]/30 p-4">
            <div className="text-[#2c3e50] font-semibold">特性</div>
            <div className="text-center font-semibold text-[#2c3e50]">入门版</div>
            <div className="text-center font-semibold text-[#2c3e50] bg-[#e6f5f6]/50 py-2 rounded">专业版</div>
            <div className="text-center font-semibold text-[#2c3e50]">企业版</div>
          </div>

          {features.map((featureGroup, groupIndex) => (
            <div key={groupIndex} className="mb-6">
              <div className="bg-gray-50 py-2 px-4">
                <h3 className="text-lg font-semibold text-[#2c3e50]">{featureGroup.category}</h3>
              </div>
              {featureGroup.items.map((item, itemIndex) => (
                <FeatureComparisonItem
                  key={itemIndex}
                  feature={item.feature}
                  starter={item.starter}
                  professional={item.professional}
                  enterprise={item.enterprise}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
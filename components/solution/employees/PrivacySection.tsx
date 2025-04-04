"use client"

import { Shield } from "lucide-react"

export function PrivacySection() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#fef6e9]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">完全控制您的经期数据</h2>
          <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
            您的隐私是我们的首要任务。我们确保您的数据保持安全并在您的控制之下。
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* 中心圆 */}
          <div className="relative z-20 w-48 h-48 bg-white rounded-full shadow-lg mx-auto mb-8 flex flex-col items-center justify-center p-4">
            <Shield className="h-12 w-12 text-[#167d83] mb-2" />
            <h3 className="text-lg font-semibold text-[#2c3e50] text-center">您的数据</h3>
            <p className="text-sm text-[#7f8c8d] text-center">100%由您控制</p>
          </div>

          {/* 外部圆圈 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: "符合HIPAA标准",
                description: "我们的平台满足医疗数据保护的最高标准。",
              },
              {
                title: "安全加密",
                description: "您的所有数据都经过加密并安全存储在云端。",
              },
              {
                title: "用户控制",
                description: "您决定谁可以访问您的数据以及何时可以删除数据。",
              },
              {
                title: "不与雇主共享",
                description: "未经您明确同意，您的数据绝不会与您的雇主共享。",
              },
              {
                title: "多因素认证",
                description: "额外的安全措施确保只有您可以访问您的帐户。",
              },
              {
                title: "匿名洞察",
                description: "用于研究的任何数据都是完全匿名的，且仅在征得同意的情况下使用。",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-5 transform hover:-translate-y-1 transition-transform duration-300"
              >
                <Shield className="h-8 w-8 text-[#167d83] mb-3" />
                <h3 className="text-lg font-semibold text-[#2c3e50] mb-2">{item.title}</h3>
                <p className="text-[#7f8c8d] text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* 背景装饰元素 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#e6f5f6] rounded-full opacity-20 -z-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-[#167d83]/20 rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  )
} 
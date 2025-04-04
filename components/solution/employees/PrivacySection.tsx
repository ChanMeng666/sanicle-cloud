"use client"

import { Shield } from "lucide-react"

export function PrivacySection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-teal-pale/20"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-beige rounded-full opacity-20"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-coral-light/20 rounded-full opacity-30"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-pale text-teal-DEFAULT text-sm font-medium mb-4">
              HIPAA合规
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-charcoal mb-4">隐私是我们的承诺</h2>
            <p className="text-slate max-w-2xl mx-auto">
              您的健康数据保持私密和安全。我们使用最先进的加密技术和严格的访问控制来保护您的信息。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 relative">
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
                className="bg-white rounded-xl shadow-md p-5 md:p-6 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-pale to-teal-light flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-teal-DEFAULT" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
            
            {/* 装饰圆形 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-teal-DEFAULT/10 rounded-full -z-10 animate-pulse-opacity"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-coral-DEFAULT/10 rounded-full -z-10 animate-pulse-opacity" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-teal-DEFAULT/5 rounded-full -z-10 animate-pulse-opacity" style={{ animationDelay: "2s" }}></div>
          </div>
          
          {/* 底部信息 */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-sm text-slate/80 max-w-xl mx-auto">
              我们遵守严格的数据保护法规，包括HIPAA、GDPR和CCPA。查看我们的
              <a href="#" className="text-teal-DEFAULT hover:text-teal-deep underline mx-1">隐私政策</a>
              了解更多。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 
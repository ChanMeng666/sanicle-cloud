"use client"

import { CtaSection } from "@/components/platform/CtaSection"

export default function PlatformIntegrationPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
          平台<span className="text-[#167d83]">集成</span>
        </h1>
        <p className="text-lg text-[#7f8c8d] max-w-3xl">
          了解Sanicle.cloud如何与您现有的系统无缝集成，为您的企业提供全面的健康管理解决方案。
        </p>
      </div>

      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50] mb-4">
              与您的生态系统无缝连接
            </h2>
            <p className="text-[#7f8c8d]">
              Sanicle.cloud设计用于与您现有的企业系统和工具无缝集成，
              确保数据流动顺畅，无需复杂的IT设置。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e6f5f6] rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#167d83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#2c3e50] mb-2">HRIS系统集成</h3>
              <p className="text-[#7f8c8d] text-sm">
                与主流HRIS系统集成，包括Workday、ADP和BambooHR，实现员工数据同步。
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e6f5f6] rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#167d83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#2c3e50] mb-2">SSO认证</h3>
              <p className="text-[#7f8c8d] text-sm">
                支持通过SAML、OAuth和OIDC等标准协议进行单点登录，简化用户访问。
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e6f5f6] rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#167d83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#2c3e50] mb-2">API接口</h3>
              <p className="text-[#7f8c8d] text-sm">
                提供RESTful API和WebHooks，方便与自定义系统和应用程序集成。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50] mb-4">
                集成合作伙伴
              </h2>
              <p className="text-[#7f8c8d] mb-6">
                我们与领先的健康福利管理平台和人力资源系统提供商合作，
                确保Sanicle.cloud能够无缝融入您的现有技术栈。
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white p-3 rounded-md shadow-sm flex items-center justify-center h-20">
                    <span className="text-[#7f8c8d] text-sm">合作伙伴 {i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#167d83] to-[#22c0c7] rounded-lg opacity-10 blur-lg transform rotate-2"></div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="系统集成"
                className="relative z-10 rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
} 
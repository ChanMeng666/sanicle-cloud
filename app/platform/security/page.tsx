"use client"

import { TechnicalSpecsSection } from "@/components/platform/TechnicalSpecsSection"
import { CtaSection } from "@/components/platform/CtaSection"

export default function PlatformSecurityPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
          平台<span className="text-[#167d83]">安全</span>
        </h1>
        <p className="text-lg text-[#7f8c8d] max-w-3xl">
          了解Sanicle.cloud如何保护您的数据安全，确保您的健康信息始终得到最高级别的保护。
        </p>
      </div>
      
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50] mb-4">
                安全至上的设计理念
              </h2>
              <p className="text-[#7f8c8d] mb-6">
                我们构建Sanicle.cloud的核心原则是确保您的健康数据安全。从底层架构到用户界面，
                安全性贯穿我们平台的每一个方面。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[#2c3e50]">符合HIPAA标准，确保医疗数据保护</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[#2c3e50]">SOC 2 Type II认证的基础设施</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[#2c3e50]">所有数据的端到端加密</span>
                </li>
              </ul>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#167d83] to-[#22c0c7] rounded-lg opacity-10 blur-lg transform rotate-2"></div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="数据安全"
                className="relative z-10 rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <TechnicalSpecsSection />
      <CtaSection />
    </main>
  )
} 
"use client"

import { FeaturesSection } from "@/components/platform/FeaturesSection"
import { TechnicalSpecsSection } from "@/components/platform/TechnicalSpecsSection"
import { CtaSection } from "@/components/platform/CtaSection"

export default function PlatformFeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
          平台<span className="text-[#167d83]">功能</span>
        </h1>
        <p className="text-lg text-[#7f8c8d] max-w-3xl">
          探索Sanicle.cloud平台提供的全面功能，为您的企业和员工提供最佳的健康管理体验。
        </p>
      </div>
      
      <FeaturesSection />
      <TechnicalSpecsSection />
      <CtaSection />
    </main>
  )
} 
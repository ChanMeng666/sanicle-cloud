"use client"

import { FeaturesSection } from "@/components/platform/FeaturesSection"
import { TechnicalSpecsSection } from "@/components/platform/TechnicalSpecsSection"
import { CtaSection } from "@/components/platform/CtaSection"

export default function PlatformFeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
          Platform <span className="text-[#167d83]">Features</span>
        </h1>
        <p className="text-lg text-[#7f8c8d] max-w-3xl">
          Explore the comprehensive features provided by Sanicle.cloud platform, offering the best health management experience for your business and employees.
        </p>
      </div>
      
      <FeaturesSection />
      <TechnicalSpecsSection />
      <CtaSection />
    </main>
  )
} 
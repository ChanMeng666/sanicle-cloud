"use client"

import { HeroSection } from "@/components/platform/HeroSection"
import { FeaturesSection } from "@/components/platform/FeaturesSection"
import { TechnicalSpecsSection } from "@/components/platform/TechnicalSpecsSection"

export default function PlatformOverviewPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturesSection />
      <TechnicalSpecsSection />
    </main>
  )
}


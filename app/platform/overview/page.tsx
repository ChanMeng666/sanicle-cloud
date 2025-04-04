"use client"

import { HeroSection } from "@/components/platform/HeroSection"
import { FeaturesSection } from "@/components/platform/FeaturesSection"
import { TechnicalSpecsSection } from "@/components/platform/TechnicalSpecsSection"
import { CtaSection } from "@/components/platform/CtaSection"
import { SiteFooter } from "@/components/layout/SiteFooter"

export default function PlatformOverviewPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturesSection />
      <TechnicalSpecsSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}


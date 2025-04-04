"use client"

import { BenefitsHero } from "@/components/platform/benefits/BenefitsHero"
import { BenefitFeatures } from "@/components/platform/benefits/BenefitFeatures"
import { BenefitComparison } from "@/components/platform/benefits/BenefitComparison"
import { Testimonials } from "@/components/platform/benefits/Testimonials"
import { CtaSection } from "@/components/platform/benefits/CtaSection"
import { SiteFooter } from "@/components/layout/SiteFooter"

export default function BenefitsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <BenefitsHero />
      <BenefitFeatures />
      <BenefitComparison />
      <Testimonials />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}


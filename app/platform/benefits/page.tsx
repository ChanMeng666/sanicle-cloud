"use client"

import { BenefitsHero } from "@/components/platform/benefits/BenefitsHero"
import { BenefitFeatures } from "@/components/platform/benefits/BenefitFeatures"
import { BenefitComparison } from "@/components/platform/benefits/BenefitComparison"
import { Testimonials } from "@/components/platform/benefits/Testimonials"

export default function BenefitsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <BenefitsHero />
      <BenefitFeatures />
      <BenefitComparison />
      <Testimonials />
    </main>
  )
}


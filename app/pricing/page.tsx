"use client"

import { useState } from "react"
import { PricingHero } from "@/components/pricing/PricingHero"
import { PricingPlans } from "@/components/pricing/PricingPlans"
import { FeatureComparison } from "@/components/pricing/FeatureComparison"
import { FaqSection } from "@/components/pricing/FaqSection"
import { SiteFooter } from "@/components/layout/SiteFooter"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const handlePricingToggle = (annual: boolean) => {
    setIsAnnual(annual)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <PricingHero onToggle={handlePricingToggle} />
      <PricingPlans isAnnual={isAnnual} />
      <FeatureComparison />
      <FaqSection />
      <SiteFooter />
    </main>
  )
}


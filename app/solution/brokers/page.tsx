"use client"

import { HeroSection } from "@/components/solution/brokers/HeroSection"
import { PartnershipAdvantages } from "@/components/solution/brokers/PartnershipAdvantages"
import { PartnershipProgram } from "@/components/solution/brokers/PartnershipProgram"
import { TrainingResources } from "@/components/solution/brokers/TrainingResources"
import { CtaSection } from "@/components/solution/brokers/CtaSection"

export default function BrokersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <PartnershipAdvantages />
      <PartnershipProgram />
      <TrainingResources />
      <CtaSection />
    </main>
  )
}


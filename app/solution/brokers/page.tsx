"use client"

import { HeroSection } from "@/components/solution/brokers/HeroSection"
import { PartnershipProgram } from "@/components/solution/brokers/PartnershipProgram"
import { TrainingResources } from "@/components/solution/brokers/TrainingResources"

export default function BrokersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <PartnershipProgram />
      <TrainingResources />
    </main>
  )
}


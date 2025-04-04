"use client"

import { HeroSection } from "@/components/solution/employers/HeroSection"
import { BenefitsSection } from "@/components/solution/BenefitsSection"
import { ImplementationProcess } from "@/components/solution/ImplementationProcess"

export default function EmployersPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <HeroSection />
      <BenefitsSection />
      <ImplementationProcess />
    </main>
  )
}


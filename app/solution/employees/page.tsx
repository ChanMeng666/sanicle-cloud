"use client"

import { HeroSection } from "@/components/solution/employees/HeroSection"
import { BenefitsSection } from "@/components/solution/employees/BenefitsSection"
import { AppPreview } from "@/components/solution/employees/AppPreview"
import { PrivacySection } from "@/components/solution/employees/PrivacySection"
import { CtaSection } from "@/components/solution/employees/CtaSection"

export default function EmployeesPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <HeroSection />
      <BenefitsSection />
      <AppPreview />
      <PrivacySection />
      <CtaSection />
    </main>
  )
}


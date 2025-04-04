"use client"

import { HeroSection } from "@/components/company/careers/HeroSection"
import { JobSearchSection } from "@/components/company/careers/JobSearchSection"
import { CompanyCultureSection } from "@/components/company/careers/CompanyCultureSection"
import { BenefitsSection } from "@/components/company/careers/BenefitsSection"
import { CareerGrowthSection } from "@/components/company/careers/CareerGrowthSection"
import { EmployeeStoriesSection } from "@/components/company/careers/EmployeeStoriesSection"
import { HiringProcessSection } from "@/components/company/careers/HiringProcessSection"
import { CareerCtaSection } from "@/components/company/careers/CareerCtaSection"
import { SiteFooter } from "@/components/layout/SiteFooter"

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <JobSearchSection />
      <CompanyCultureSection />
      <BenefitsSection />
      <CareerGrowthSection />
      <EmployeeStoriesSection />
      <HiringProcessSection />
      <CareerCtaSection />
      <SiteFooter />
    </main>
  )
}


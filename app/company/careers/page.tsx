"use client"

import { HeroSection } from "@/components/company/careers/HeroSection"
import { JobSearchSection } from "@/components/company/careers/JobSearchSection"
import { CareerGrowthSection } from "@/components/company/careers/CareerGrowthSection"
import { EmployeeStoriesSection } from "@/components/company/careers/EmployeeStoriesSection"

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <JobSearchSection />
      <CareerGrowthSection />
      <EmployeeStoriesSection />
    </main>
  )
}


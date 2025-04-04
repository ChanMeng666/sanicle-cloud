"use client"

import { JobSearchSection } from "@/components/company/careers/JobSearchSection"
import { EmployeeStoriesSection } from "@/components/company/careers/EmployeeStoriesSection"

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <JobSearchSection />
      <EmployeeStoriesSection />
    </main>
  )
}


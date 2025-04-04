"use client"

import { OurStory } from "@/components/company/about/OurStory"
import { Milestones } from "@/components/company/about/Milestones"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-x-hidden">
      <OurStory />
      <Milestones />
    </main>
  )
}


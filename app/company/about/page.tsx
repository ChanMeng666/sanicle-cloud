"use client"

import { AboutHero } from "@/components/company/about/AboutHero"
import { FounderQuote } from "@/components/company/about/FounderQuote"
import { OurStory } from "@/components/company/about/OurStory"
import { OurValues } from "@/components/company/about/OurValues"
import { Milestones } from "@/components/company/about/Milestones"
import { Partners } from "@/components/company/about/Partners"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-x-hidden">
      <div className="w-full">
        <AboutHero />
      </div>
      {/* <FounderQuote /> */}
      {/* <OurStory /> */}
      <TeamSection />
      <Partners />
      <OurValues />
      {/* <Milestones /> */}
    </main>
  )
}


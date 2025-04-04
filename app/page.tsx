"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { ValueProposition } from "@/components/home/ValueProposition"
import { HowItWorks } from "@/components/home/HowItWorks"
import { TeamSection } from "@/components/team-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { StatisticsSection } from "@/components/statistics-section"

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <StatisticsSection />
      <TestimonialSection />
      <TeamSection />
    </main>
  )
}


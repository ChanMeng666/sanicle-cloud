"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { ValueProposition } from "@/components/home/ValueProposition"
import { HowItWorks } from "@/components/home/HowItWorks"
import { TeamSection } from "@/components/team-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { StatisticsSection } from "@/components/statistics-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <StatisticsSection />
      <TestimonialSection />
      <TeamSection />
      <SiteFooter />
    </main>
  )
}


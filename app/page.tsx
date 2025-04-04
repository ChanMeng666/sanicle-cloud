"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { ValueProposition } from "@/components/home/ValueProposition"
import { HowItWorks } from "@/components/home/HowItWorks"

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <div className="w-full">
        <HeroSection />
      </div>
      <ValueProposition />
      <HowItWorks />
    </main>
  )
}


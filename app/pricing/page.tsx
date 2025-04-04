"use client"

import { useState } from "react"
import { PricingPlans } from "@/components/pricing/PricingPlans"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <main className="flex min-h-screen flex-col">
      <PricingPlans isAnnual={isAnnual} />
    </main>
  )
}


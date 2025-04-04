"use client"

import { DemoHero } from "@/components/demo/DemoHero"
import { DemoRequestForm } from "@/components/demo/DemoRequestForm"

export default function DemoRequestPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <DemoHero />
      <DemoRequestForm />
    </main>
  )
}


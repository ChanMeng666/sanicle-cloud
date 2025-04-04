"use client"

import { DemoHero } from "@/components/demo/DemoHero"
import { DemoRequestForm } from "@/components/demo/DemoRequestForm"
import { SiteFooter } from "@/components/layout/SiteFooter"

export default function DemoRequestPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <DemoHero />
      <DemoRequestForm />
      <SiteFooter />
    </main>
  )
}


"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-24 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Page Coming Soon</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        We're currently working on our contact page. In the meantime, you can email us at hello@sanicle.cloud
      </p>
      <Link href="/">
        <Button className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Homepage
        </Button>
      </Link>
    </div>
  )
} 
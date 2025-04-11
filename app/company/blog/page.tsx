"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-24 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-6">Blog Coming Soon</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        Our blog is currently under development. Please check back soon for insights on women's health, workplace wellness, and more.
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
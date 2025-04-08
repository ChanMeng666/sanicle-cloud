"use client"

import { NewsHero } from "@/components/company/news/NewsHero"
import { LatestNews } from "@/components/company/news/LatestNews"
import { FeaturedNews } from "@/components/company/news/FeaturedNews"
import { NewsCategories } from "@/components/company/news/NewsCategories"

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-x-hidden">
      <div className="w-full">
        <NewsHero />
      </div>
      <LatestNews />
      <FeaturedNews />
      <NewsCategories />
    </main>
  )
} 
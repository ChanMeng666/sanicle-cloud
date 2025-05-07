import { Metadata } from 'next'
import { NewsHero } from "@/components/company/news/NewsHero"
import { LatestNews } from "@/components/company/news/LatestNews"
import { FeaturedNews } from "@/components/company/news/FeaturedNews"
import { NewsCategories } from "@/components/company/news/NewsCategories"
import { NewsVideos } from "@/components/company/news/NewsVideos"

export const metadata: Metadata = {
  title: 'News & Updates | Sanicle.cloud',
  description: 'Stay informed with the latest news about Sanicle.cloud, including announcements, updates, and insights about our AI-powered menstrual and menopause health solutions for workplaces.',
}

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-x-hidden">
      <div className="w-full">
        <NewsHero />
      </div>
      <LatestNews />
      <FeaturedNews />
      <NewsVideos />
      <NewsCategories />
    </main>
  )
} 
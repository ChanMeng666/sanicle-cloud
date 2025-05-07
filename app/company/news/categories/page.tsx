import { Metadata } from 'next'
import { CategoryGrid } from '@/components/company/news/CategoryGrid'
import { categoryInfo } from '../category/[id]/page'

export const metadata: Metadata = {
  title: 'News Categories | Sanicle.cloud',
  description: 'Browse all news categories from Sanicle.cloud, covering menstrual and menopause health in the workplace.'
}

export default function CategoriesPage() {
  const categories = Object.entries(categoryInfo).map(([id, info]) => ({
    id,
    title: info.title,
    description: info.description,
    articleCount: 0 // We'll calculate this in the client component
  }))
  
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-x-hidden bg-slate-50">
      <div className="w-full bg-white pt-10 pb-12 border-b">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              News Categories
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse all news and articles from Sanicle.cloud by category, covering the latest updates in menstrual and menopause health in workplace environments.
            </p>
          </div>
        </div>
      </div>
      
      <CategoryGrid categories={categories} />
    </main>
  )
} 
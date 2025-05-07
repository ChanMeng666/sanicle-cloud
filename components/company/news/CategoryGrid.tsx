"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { newsArticles } from '@/data/news'
import { Button } from '@/components/ui/common/Button'
import { useRouter } from 'next/navigation'

interface Category {
  id: string
  title: string
  description: string
  articleCount: number
}

interface CategoryGridProps {
  categories: Category[]
}

export function CategoryGrid({ categories: initialCategories }: CategoryGridProps) {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>(initialCategories)
  
  // Calculate article counts on the client side
  useEffect(() => {
    // Create a mapping of category titles to IDs
    const categoryTitleToId: Record<string, string> = {}
    initialCategories.forEach(category => {
      categoryTitleToId[category.title] = category.id
    })
    
    // Count articles per category
    const categoryCounts: Record<string, number> = {}
    
    newsArticles.forEach(article => {
      const categoryId = categoryTitleToId[article.category] || article.category.toLowerCase().replace(/[^\w]+/g, '-')
      if (categoryCounts[categoryId]) {
        categoryCounts[categoryId]++
      } else {
        categoryCounts[categoryId] = 1
      }
    })
    
    // Update categories with counts
    const updatedCategories = initialCategories.map(category => ({
      ...category,
      articleCount: categoryCounts[category.id] || 0
    }))
    
    setCategories(updatedCategories)
  }, [initialCategories])
  
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex justify-start mb-6">
            <Button 
              variant="ghost" 
              className="text-gray-500 hover:text-teal-600"
              onClick={() => router.push('/company/news')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/company/news/category/${category.id}`}
                className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-sm text-gray-500">{category.articleCount} articles</span>
                </div>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Subscribe to our Newsletter</h3>
              <p className="text-gray-600">Stay updated on the latest innovations in workplace menstrual health solutions</p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                  required 
                />
                <button 
                  type="submit" 
                  className="px-5 py-2.5 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
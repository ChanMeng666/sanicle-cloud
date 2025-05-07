"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { NewsArticle } from '@/data/news'
import { Button } from '@/components/ui/common/Button'

interface NewsCategoryPageProps {
  categoryId: string
  categoryTitle: string
  categoryDescription: string
  articles: NewsArticle[]
}

export function NewsCategoryPage({ 
  categoryId,
  categoryTitle, 
  categoryDescription,
  articles 
}: NewsCategoryPageProps) {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-x-hidden bg-slate-50">
      {/* Hero Section */}
      <div className="w-full bg-white pt-10 pb-12 border-b">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="mb-6 text-gray-500 hover:text-teal-600"
              onClick={() => router.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
            
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800">
                {categoryTitle}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {categoryTitle}
            </h1>
            
            <p className="text-lg text-gray-600">
              {categoryDescription}
            </p>
          </div>
        </div>
      </div>
      
      {/* Articles Section */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">            
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 gap-12">
                {articles.map((article) => (
                  <div key={article.id} className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <Link href={`/company/news/${article.id}`} className="group">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{article.date}</span>
                          <span className="mx-1">·</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <Link href={`/company/news/${article.id}`} className="block h-48 md:h-full relative rounded-lg overflow-hidden">
                        <Image 
                          src={article.image} 
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 400px"
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found in this category</h3>
                <p className="text-gray-600 mb-8">Check back soon for new content in this category.</p>
                <Button 
                  variant="default"
                  onClick={() => router.push('/company/news')}
                >
                  Return to News
                </Button>
              </div>
            )}
            
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
              <Button 
                variant="secondary"
                onClick={() => router.push('/company/news')}
              >
                View All News
              </Button>
              <div className="flex gap-3">
                <Button 
                  variant="ghost" 
                  onClick={() => router.push('/company/news/categories')}
                >
                  Browse Categories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 
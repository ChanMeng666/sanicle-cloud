import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { newsArticles } from '@/data/news'

export function FeaturedNews() {
  // 从newsArticles中筛选精选文章（取最新的3篇）
  const featuredArticles = newsArticles
    .slice(0, 3) // 使用前3篇作为featured

  return (
    <section id="featured-stories" className="w-full bg-gray-50 py-12 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link href={`/company/news/${article.id}`} className="block">
                  <div className="h-48 relative">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="text-sm text-teal-600 font-medium mb-2">{article.category}</div>
                  <Link href={`/company/news/${article.id}`} className="group">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span className="mx-1">·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
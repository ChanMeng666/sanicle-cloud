import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { newsArticles } from '@/data/news'

export function LatestNews() {
  // 获取最新的3篇文章
  const latestArticles = newsArticles
    .slice(0, 3)

  return (
    <section id="latest-news" className="w-full bg-white py-12 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {latestArticles.map((article) => (
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
          
          <div className="mt-10 text-center">
            <Link 
              href="/company/news/categories" 
              className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Browse All Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 
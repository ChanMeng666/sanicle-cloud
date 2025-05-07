"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { NewsArticle } from '@/data/news'
import { Button } from '@/components/ui/common/Button'
import ReactMarkdown from 'react-markdown'

interface ClientNewsArticleProps {
  article: NewsArticle
  relatedArticles: NewsArticle[]
}

export function ClientNewsArticle({ article, relatedArticles }: ClientNewsArticleProps) {
  const router = useRouter()

  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-white pt-10 pb-6 border-b">
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
                {article.category}
              </span>
              {article.tags.map(tag => (
                <span key={tag} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <div className="flex items-center mr-4">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="w-full bg-white">
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
            
            {/* Tags Section */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="w-full bg-slate-50 py-12">
          <div className="container max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <div key={relatedArticle.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Link href={`/company/news/${relatedArticle.id}`} className="block">
                    <div className="h-48 relative">
                      <Image 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 400px"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="text-sm text-teal-600 font-medium mb-2">{relatedArticle.category}</div>
                    <Link href={`/company/news/${relatedArticle.id}`} className="group">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {relatedArticle.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{relatedArticle.date}</span>
                      <span className="mx-1">·</span>
                      <span>{relatedArticle.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                variant="secondary"
                onClick={() => router.push('/company/news')}
                className="mx-auto"
              >
                View All News
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 
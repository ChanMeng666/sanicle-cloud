import React from 'react'
import Link from 'next/link'

export function NewsHero() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Updates</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Stay informed with the latest news about how Sanicle.cloud is revolutionizing workplace health equity through AI-powered solutions for menstrual and menopause health.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/company/news/featured" 
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-md font-medium text-white bg-teal-600 hover:bg-teal-700"
            >
              Featured Stories
            </Link>
            <Link 
              href="/company/news/categories" 
              className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 
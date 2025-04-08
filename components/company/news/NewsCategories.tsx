import React from 'react'
import Link from 'next/link'

// Mock data for news categories
const newsCategoriesData = [
  {
    id: 'company-news',
    title: 'Company News',
    description: 'Updates about Sanicle.cloud, including product launches, partnerships, and corporate announcements.',
    articleCount: 18
  },
  {
    id: 'industry-insights',
    title: 'Industry Insights',
    description: 'Expert analysis on trends, research, and developments in women\'s health and workplace wellness.',
    articleCount: 23
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    description: 'Practical guides and recommendations for implementing effective workplace health programs.',
    articleCount: 15
  },
  {
    id: 'research',
    title: 'Research & Reports',
    description: 'In-depth research findings, surveys, and data analysis on women\'s health in the workplace.',
    articleCount: 9
  },
  {
    id: 'events',
    title: 'Events & Webinars',
    description: 'Information about upcoming and past events, conferences, and online presentations.',
    articleCount: 12
  },
  {
    id: 'customer-stories',
    title: 'Customer Stories',
    description: 'Success stories and testimonials from organizations using Sanicle.cloud\'s solutions.',
    articleCount: 7
  }
]

export function NewsCategories() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsCategoriesData.map((category) => (
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
          
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Subscribe to our Newsletter</h3>
                <p className="text-gray-600">Get the latest news and updates delivered directly to your inbox</p>
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
      </div>
    </section>
  )
} 
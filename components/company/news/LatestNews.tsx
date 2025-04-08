import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Mock data for latest news
const latestNewsData = [
  {
    id: 1,
    title: 'Sanicle.cloud Partners with Major Healthcare Providers',
    excerpt: 'Exciting new partnerships to expand women\'s health services across the country, bringing innovative solutions to more workplaces.',
    date: 'Apr 5, 2024',
    readTime: '3 min read',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/team/avatar-placeholder.png'
    },
    image: '/images/news/partnership.jpg'
  },
  {
    id: 2,
    title: 'New Features for Workplace Wellness Programs',
    excerpt: 'Our latest platform update introduces advanced analytics and improved integration capabilities for better workplace wellness management.',
    date: 'Mar 28, 2024',
    readTime: '5 min read',
    author: {
      name: 'Michael Chen',
      avatar: '/images/team/avatar-placeholder.png'
    },
    image: '/images/news/wellness.jpg'
  },
  {
    id: 3,
    title: 'Women\'s Health in the Modern Workplace: A Study',
    excerpt: 'Our research team shares insights from a comprehensive study on women\'s health needs in contemporary workplace environments.',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    author: {
      name: 'Dr. Amanda Rodriguez',
      avatar: '/images/team/avatar-placeholder.png'
    },
    image: '/images/news/research.jpg'
  }
]

export function LatestNews() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {latestNewsData.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <Link href={`/company/news/${item.id}`} className="group">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 mr-3">
                      <Image 
                        src={item.author.avatar} 
                        alt={item.author.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-900 block">{item.author.name}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{item.date}</span>
                        <span className="mx-1">·</span>
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <Link href={`/company/news/${item.id}`} className="block h-48 md:h-full relative rounded-lg overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/company/news/all" 
              className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              View All News
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 
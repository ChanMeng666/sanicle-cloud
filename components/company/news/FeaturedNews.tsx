import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Mock data for featured news
const featuredNewsData = [
  {
    id: 4,
    title: 'Sanicle.cloud Recognized as Top FemTech Innovator',
    excerpt: 'Our platform has been recognized for its groundbreaking approach to women\'s health in the workplace.',
    date: 'Apr 1, 2024',
    readTime: '4 min read',
    author: {
      name: 'Emma Watson',
      avatar: '/images/team/avatar-placeholder.png'
    },
    image: '/images/news/award.jpg',
    category: 'Company News'
  },
  {
    id: 5,
    title: 'The Future of Women\'s Health Technology',
    excerpt: 'How emerging technologies are shaping the future of women\'s health management in corporate environments.',
    date: 'Mar 22, 2024',
    readTime: '6 min read',
    author: {
      name: 'David Park',
      avatar: '/images/team/avatar-placeholder.png'
    },
    image: '/images/news/technology.jpg',
    category: 'Industry Insights'
  },
  {
    id: 6,
    title: 'Supporting Employee Wellness: A Guide for HR Leaders',
    excerpt: 'Practical strategies for human resources professionals to better support women\'s health in the workplace.',
    date: 'Mar 10, 2024',
    readTime: '7 min read',
    author: {
      name: 'Jessica Miller',
      avatar: '/images/team/avatar-placeholder.png'
    },
    image: '/images/news/hr-guide.jpg',
    category: 'Best Practices'
  }
]

export function FeaturedNews() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredNewsData.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link href={`/company/news/${item.id}`} className="block">
                  <div className="h-48 relative">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="text-sm text-teal-600 font-medium mb-2">{item.category}</div>
                  <Link href={`/company/news/${item.id}`} className="group">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
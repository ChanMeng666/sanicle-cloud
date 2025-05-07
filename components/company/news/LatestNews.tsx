import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Updated mock data for latest news
const latestNewsData = [
  {
    id: 1,
    title: 'Sanicle.cloud Secures Partnerships with Leading Healthcare Providers',
    excerpt: 'Sanicle expands workplace menstrual health services through strategic partnerships with major healthcare providers, bringing innovative AI-powered solutions to more organizations.',
    date: 'Apr 5, 2024',
    readTime: '3 min read',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 2,
    title: 'New AI-Powered Features Enhance Workplace Wellness Programs',
    excerpt: 'Our latest platform update introduces advanced analytics utilizing Vertex AI to provide customized menstrual health support and improved integration capabilities for HR professionals.',
    date: 'Mar 28, 2024',
    readTime: '5 min read',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 3,
    title: 'Menstrual and Menopause Health in Modern Workplaces: New Research',
    excerpt: 'Sanicle research team shares insights from a comprehensive study on menstrual and menopause health needs in contemporary workplace environments, revealing significant productivity impacts.',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    image: 'https://picsum.photos/800/600?random=3'
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
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{item.date}</span>
                      <span className="mx-1">·</span>
                      <span>{item.readTime}</span>
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
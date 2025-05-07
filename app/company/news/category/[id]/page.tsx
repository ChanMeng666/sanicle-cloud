import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { newsArticles } from '@/data/news' 
import { NewsCategoryPage } from '@/components/company/news/NewsCategoryPage'

// Define common categories and their display names
export const categoryInfo = {
  'company-news': {
    title: 'Company News',
    description: 'Updates about Sanicle.cloud, including AI-powered product launches, healthcare partnerships, and corporate announcements.'
  },
  'industry-insights': {
    title: 'Industry Insights',
    description: 'Expert analysis on trends, research, and developments in menstrual health technology and workplace wellness innovations.'
  },
  'best-practices': {
    title: 'Best Practices',
    description: 'Practical guides for HR professionals on implementing effective menstrual and menopause health programs in the workplace.'
  },
  'research': {
    title: 'Research & Reports',
    description: 'In-depth research findings on menstrual and menopause health impacts on workplace productivity and employee well-being.'
  },
  'events': {
    title: 'Events & Webinars',
    description: 'Information about upcoming and past events focused on advancing workplace health equity and menstrual wellness.'
  },
  'customer-stories': {
    title: 'Customer Stories',
    description: 'Success stories from organizations implementing Sanicle.cloud\'s AI-powered menstrual health solutions in their workplace.'
  },
  'product-updates': {
    title: 'Product Updates',
    description: 'Learn about the latest features and improvements to the Sanicle.cloud platform.'
  }
}

// Generate the possible category paths for static generation
export async function generateStaticParams() {
  return Object.keys(categoryInfo).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  // Properly wait for params to resolve
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const category = categoryInfo[id as keyof typeof categoryInfo]
  
  if (!category) {
    return {
      title: 'Category Not Found | Sanicle.cloud'
    }
  }
  
  return {
    title: `${category.title} | Sanicle.cloud News`,
    description: category.description,
  }
}

export default async function CategoryPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  // Properly wait for params to resolve
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const category = categoryInfo[id as keyof typeof categoryInfo]
  
  if (!category) {
    notFound()
  }
  
  // Find all articles in this category
  // Map from display name to slug for category matching
  const categoryNameToSlug: Record<string, string> = {}
  Object.entries(categoryInfo).forEach(([slug, info]) => {
    categoryNameToSlug[info.title] = slug
  })

  const articlesInCategory = newsArticles.filter(article => {
    // Match by either the slug ID or the category display name
    return (
      id === categoryNameToSlug[article.category] || 
      category.title === article.category
    )
  })
  
  return (
    <NewsCategoryPage 
      categoryId={id}
      categoryTitle={category.title} 
      categoryDescription={category.description}
      articles={articlesInCategory}
    />
  )
} 
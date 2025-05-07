import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { newsArticles } from '@/data/news'
import { ClientNewsArticle } from '@/components/company/news/ClientNewsArticle'
import ReactMarkdown from 'react-markdown'

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id)
  const article = newsArticles.find(article => article.id === id)
  
  if (!article) {
    return {
      title: 'Article Not Found | Sanicle.cloud'
    }
  }
  
  return {
    title: `${article.title} | Sanicle.cloud News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      images: [{ url: article.image }]
    }
  }
}

export default async function NewsArticlePage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id)
  const article = newsArticles.find(article => article.id === id)
  
  if (!article) {
    notFound()
  }
  
  // Get 3 related articles from the same category, excluding current article
  const relatedArticles = newsArticles
    .filter(a => a.id !== id && a.category === article.category)
    .slice(0, 3)
  
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-x-hidden bg-slate-50">
      <ClientNewsArticle article={article} relatedArticles={relatedArticles} />
    </main>
  )
} 
import { notFound } from "next/navigation"
import { teamMembers } from "@/data/team"
import { PageLayout } from "@/components/team/PageLayout"
import { ProfileHeader } from "@/components/team/ProfileHeader"
import { Sidebar } from "@/components/team/Sidebar"
import { MainContent } from "@/components/team/MainContent"
import Image from "next/image"

// 使用generateStaticParams预生成所有可能的路径
export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
  // 正确处理异步参数
  const { slug } = await params
  
  // 在异步函数中查找成员数据
  const member = teamMembers.find((m) => m.slug === slug)
  
  if (!member) {
    notFound()
  }

  return (
    <PageLayout leafColor={member.leafColor} memberName={member.name}>
      {/* Hero Section with Large Profile Image */}
      <div className="relative mb-16 overflow-hidden rounded-xl bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="absolute top-12 right-12 opacity-10">
          <img 
            src={`/logo/leave-${member.leafColor}.svg`} 
            alt="Leaf decoration" 
            className="w-64 h-64 rotate-45"
          />
        </div>
        
        <div className="container max-w-screen-xl mx-auto py-10 px-6 md:py-16 md:px-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            {/* Large Profile Image */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 shrink-0 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              {member.images && member.images.length > 0 ? (
                <Image 
                  src={member.images[0]} 
                  alt={member.name} 
                  fill
                  className="object-cover" 
                  priority
                  sizes="(max-width: 768px) 12rem, (max-width: 1024px) 16rem, 20rem"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary/20 text-primary text-4xl font-semibold">
                  {member.avatar}
                </div>
              )}
            </div>
            
            {/* Profile Header */}
            <div className="w-full text-center md:text-left">
              <ProfileHeader member={member} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <Sidebar member={member} />
          <MainContent member={member} />
        </div>
      </div>
    </PageLayout>
  )
} 
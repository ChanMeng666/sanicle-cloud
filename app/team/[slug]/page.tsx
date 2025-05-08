import { notFound } from "next/navigation"
import { teamMembers } from "@/data/team"
import { PageLayout } from "@/components/team/PageLayout"
import { ImageModal } from "@/components/ui/common/ImageModal"
import Link from "next/link"

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

  // Extract relevant education credentials if available
  const relevantCredentials = member.education
    ? member.education.map(edu => edu.degree).join(", ")
    : "";
    
  // Get most important contact info
  const contactInfo = member.contact?.linkedin || member.contact?.email || "";

  return (
    <PageLayout leafColor={member.leafColor} memberName={member.name}>
      <div className="container max-w-screen-xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Back to team link */}
          <Link 
            href="/company/about#team" 
            className="flex items-center text-primary mb-8 hover:text-primary/80 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"></path></svg>
            Back to Team
          </Link>
          
          {/* Profile Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
            {/* Header with leaf decoration */}
            <div className="relative overflow-hidden">
              <div className="absolute -right-12 -top-12 opacity-10">
                <img 
                  src={`/logo/leave-${member.leafColor}.svg`} 
                  alt="Leaf decoration" 
                  className="w-64 h-64 rotate-45"
                />
              </div>
              
              <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                {/* Profile Image */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-xl overflow-hidden border-4 border-white shadow-md">
                  {member.images && member.images.length > 0 ? (
                    <ImageModal 
                      src={member.images[0]} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/20 text-primary text-4xl font-semibold">
                      {member.avatar}
                    </div>
                  )}
                </div>
                
                {/* Name and Role */}
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{member.name}</h1>
                  <p className="text-xl text-primary/80 font-medium mb-2">{member.role}</p>
                  
                  {relevantCredentials && (
                    <p className="text-gray-600 mb-6">{relevantCredentials}</p>
                  )}
                  
                  {/* Contact Link */}
                  {contactInfo && (
                    <a 
                      href={contactInfo.includes('@') ? `mailto:${contactInfo}` : contactInfo} 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      target={contactInfo.includes('@') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        {contactInfo.includes('@') ? (
                          <>
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </>
                        ) : (
                          <>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </>
                        )}
                      </svg>
                      Connect with {member.name.split(' ')[0]}
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="p-8 md:p-10 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Biography</h2>
              
              <div className="prose prose-lg prose-teal max-w-none">
                {member.longBio && member.longBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={`
                    text-gray-700 leading-relaxed mb-6
                    ${index === 0 ? 'text-xl first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-none' : ''}
                  `}>
                    {paragraph.trim()}
                  </p>
                ))}

                {!member.longBio && member.bio && (
                  <p className="text-gray-700 leading-relaxed text-xl first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-none">
                    {member.bio}
                  </p>
                )}
              </div>
              
              {member.quote && (
                <blockquote className="relative mt-10 mb-4 bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <div className="absolute -top-3 -left-3 text-5xl text-primary/20">"</div>
                  <p className="italic text-gray-700 text-lg relative z-10">{member.quote}</p>
                  <div className="absolute -bottom-3 -right-3 text-5xl text-primary/20">"</div>
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 
import { TeamMember } from "@/data/team"

interface BioSectionProps {
  member: TeamMember
}

export function BioSection({ member }: BioSectionProps) {
  if (!member.longBio) return null
  
  return (
    <section className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Biography</h2>
          <div className="h-1 w-12 bg-primary/20 rounded-full mt-1"></div>
        </div>
      </div>

      <div className="relative">
        {/* Decorative leaf element */}
        <div className="absolute -right-6 bottom-1/3 opacity-5 hidden lg:block">
          <img 
            src="/logo/leave-coral.svg" 
            alt="Decorative leaf" 
            className="w-32 h-32 transform rotate-45" 
          />
        </div>
        
        <div className="prose prose-lg prose-teal max-w-none lg:pr-10">
          {member.longBio.split('\n\n').map((paragraph, index) => (
            <p key={index} className={`
              text-gray-700 leading-relaxed mb-6
              ${index === 0 ? 'text-xl first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-none' : ''}
            `}>
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
} 
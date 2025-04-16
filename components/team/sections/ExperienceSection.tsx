import { TeamMember } from "@/data/team"

interface ExperienceSectionProps {
  experience: TeamMember['experience']
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Experience at Sanicle</h2>
          <div className="h-1 w-12 bg-primary/20 rounded-full mt-1"></div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="relative pl-10 border-l-2 border-primary/20 pb-4">
          <div className="absolute left-[-8px] top-0">
            <div className="w-4 h-4 rounded-full bg-primary"></div>
          </div>
          <div className="mb-6">
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <h3 className="font-bold text-xl text-gray-900">{experience.title}</h3>
              <span className="text-primary bg-primary/5 px-2 py-0.5 rounded-full text-sm">Current Role</span>
            </div>
            <p className="text-gray-500 text-sm flex flex-wrap gap-x-6 gap-y-1 items-center">
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                {experience.period}
              </span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                {experience.location}
              </span>
            </p>
          </div>
          
          {experience.previousRole && (
            <div className="relative pl-8 border-l-2 border-primary/10 mb-8">
              <div className="absolute left-[-5px] top-0">
                <div className="w-3 h-3 rounded-full bg-primary/60"></div>
              </div>
              <div className="mb-2">
                <h4 className="font-semibold text-gray-800">{experience.previousRole.title}</h4>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {experience.previousRole.period}
                </p>
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            {experience.description.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
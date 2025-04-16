import { TeamMember } from "@/data/team"

interface CertificationsSectionProps {
  certifications: TeamMember['certifications']
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  if (!certifications) return null
  
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-neutral-800 mb-6 flex items-center">
        <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-primary/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
        </span>
        Certifications
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-neutral-100 flex items-center">
            <span className="w-8 h-8 mr-3 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </span>
            <span className="text-neutral-700">{cert}</span>
          </div>
        ))}
      </div>
    </section>
  )
} 
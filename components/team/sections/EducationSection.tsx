import { TeamMember } from "@/data/team"

interface EducationSectionProps {
  education: TeamMember['education']
}

export function EducationSection({ education }: EducationSectionProps) {
  if (!education) return null
  
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-neutral-800 mb-6 flex items-center">
        <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-primary/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
        </span>
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-neutral-100 shadow-sm">
            <h3 className="font-semibold text-neutral-800">{edu.institution}</h3>
            <p className="text-neutral-600 mt-1">{edu.degree}</p>
            {edu.period && <p className="text-neutral-500 text-sm mt-1">{edu.period}</p>}
          </div>
        ))}
      </div>
    </section>
  )
} 
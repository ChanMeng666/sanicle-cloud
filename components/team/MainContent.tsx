import Image from "next/image"
import { TeamMember } from "@/data/team"
import { BioSection } from "./sections/BioSection"
import { ExperienceSection } from "./sections/ExperienceSection"
import { EducationSection } from "./sections/EducationSection"
import { CertificationsSection } from "./sections/CertificationsSection"
import { GallerySection } from "./sections/GallerySection"

interface MainContentProps {
  member: TeamMember
}

export function MainContent({ member }: MainContentProps) {
  return (
    <div className="md:col-span-8 lg:col-span-9">
      <BioSection member={member} />
      
      {member.experience && (
        <ExperienceSection experience={member.experience} />
      )}
      
      {member.education && member.education.length > 0 && (
        <EducationSection education={member.education} />
      )}
      
      {member.certifications && member.certifications.length > 0 && (
        <CertificationsSection certifications={member.certifications} />
      )}
      
      <GallerySection member={member} />
    </div>
  )
} 
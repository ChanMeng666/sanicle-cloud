'use client'

import { Badge } from "@/components/ui/badge"
import { 
  LinkedinIcon, 
  TwitterIcon, 
  InstagramIcon, 
  GithubIcon, 
  GlobeIcon, 
  AtSign, 
  Phone,
  BookOpen,
  Award
} from "lucide-react"
import Link from "next/link"

type ProfileHeaderProps = {
  member: any
}

export function ProfileHeader({ member }: ProfileHeaderProps) {
  if (!member) return null
  
  return (
    <div className="flex flex-col gap-6">
      {/* Name and Role with underline decoration */}
      <div className="relative pb-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{member.name}</h1>
        <div className="mt-1 inline-block">
          <p className="text-xl md:text-2xl text-primary/80 font-medium">{member.role}</p>
          <div className="h-1 w-1/3 bg-primary/20 rounded-full mt-1"></div>
        </div>
      </div>
      
      {/* Quote - highlighted with fancy styling */}
      {member.quote && (
        <div className="relative mt-2 md:mt-4 bg-white p-6 rounded-xl shadow-sm border border-primary/10">
          <div className="absolute -top-3 -left-3 text-5xl text-primary/20">"</div>
          <p className="italic text-gray-700 md:text-lg relative z-10">{member.quote}</p>
          <div className="absolute -bottom-3 -right-3 text-5xl text-primary/20">"</div>
        </div>
      )}
      
      {/* Social and Contact Links */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8 mt-2">
        {/* Social Media Links */}
        <div className="flex flex-wrap gap-2">
          {member.contact && (
            <>
              {member.contact.linkedin && (
                <Link href={member.contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <Badge variant="outline" className="flex gap-1.5 items-center hover:bg-primary/5 transition-colors px-3 py-1.5 border-primary/20">
                    <LinkedinIcon className="h-3.5 w-3.5 text-primary" />
                    <span className="font-medium">LinkedIn</span>
                  </Badge>
                </Link>
              )}
              {member.contact.twitter && (
                <Link href={member.contact.twitter} target="_blank" rel="noopener noreferrer">
                  <Badge variant="outline" className="flex gap-1.5 items-center hover:bg-primary/5 transition-colors px-3 py-1.5 border-primary/20">
                    <TwitterIcon className="h-3.5 w-3.5 text-primary" />
                    <span className="font-medium">Twitter</span>
                  </Badge>
                </Link>
              )}
              {member.contact.instagram && (
                <Link href={member.contact.instagram} target="_blank" rel="noopener noreferrer">
                  <Badge variant="outline" className="flex gap-1.5 items-center hover:bg-primary/5 transition-colors px-3 py-1.5 border-primary/20">
                    <InstagramIcon className="h-3.5 w-3.5 text-primary" />
                    <span className="font-medium">Instagram</span>
                  </Badge>
                </Link>
              )}
              {member.contact.github && (
                <Link href={member.contact.github} target="_blank" rel="noopener noreferrer">
                  <Badge variant="outline" className="flex gap-1.5 items-center hover:bg-primary/5 transition-colors px-3 py-1.5 border-primary/20">
                    <GithubIcon className="h-3.5 w-3.5 text-primary" />
                    <span className="font-medium">GitHub</span>
                  </Badge>
                </Link>
              )}
              {member.contact.portfolio || member.contact.personal && (
                <Link href={member.contact.portfolio || member.contact.personal} target="_blank" rel="noopener noreferrer">
                  <Badge variant="outline" className="flex gap-1.5 items-center hover:bg-primary/5 transition-colors px-3 py-1.5 border-primary/20">
                    <GlobeIcon className="h-3.5 w-3.5 text-primary" />
                    <span className="font-medium">Portfolio</span>
                  </Badge>
                </Link>
              )}
            </>
          )}
        </div>
        
        {/* Contact Information */}
        <div className="space-y-1.5 md:space-y-2">
          {member.contact?.email && (
            <a href={`mailto:${member.contact.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
              <AtSign className="h-4 w-4 text-primary/70" />
              <span>{member.contact.email}</span>
            </a>
          )}
          {member.contact?.phone && (
            <a href={`tel:${member.contact.phone}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary/70" />
              <span>{member.contact.phone}</span>
            </a>
          )}
        </div>
      </div>

      {/* Key Profile Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {member.achievements && member.achievements.length > 0 && (
          <div className="flex items-start gap-2">
            <Award className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-700">Key Achievement</p>
              <p className="text-gray-600">{member.achievements[0]}</p>
            </div>
          </div>
        )}
        {member.bio && (
          <div className="flex items-start gap-2">
            <BookOpen className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-700">Summary</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 
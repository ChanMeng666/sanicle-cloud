import Image from "next/image"
import { TeamMember } from "@/data/team"

interface GallerySectionProps {
  member: TeamMember
}

export function GallerySection({ member }: GallerySectionProps) {
  const galleryImages = member.images.slice(1)
  if (galleryImages.length === 0) return null
  
  return (
    <section>
      <h2 className="text-2xl font-semibold text-neutral-800 mb-6 flex items-center">
        <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-primary/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        </span>
        Photo Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative rounded-xl overflow-hidden shadow-md border border-neutral-100 transition-transform hover:scale-[1.01] duration-300">
            <div className="aspect-[4/3] relative">
              <Image 
                src={image} 
                alt={`${member.name} - Photo ${index + 2}`} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-medium">Photo {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 
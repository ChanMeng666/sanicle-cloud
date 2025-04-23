import Image from "next/image"
import { TeamMember } from "@/data/team"
import { ImageModal } from "@/components/ui/common/ImageModal"

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
          <div key={index} className="group relative rounded-xl overflow-hidden shadow-md border border-neutral-100 transition-transform hover:scale-[1.02] duration-300">
            <div className="aspect-[4/3] relative">
              <ImageModal 
                src={image} 
                alt={`${member.name} - Photo ${index + 2}`} 
                className="w-full h-full z-10 relative"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              
              {/* Expand indicator overlay - with pointer-events: none so clicks pass through */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <div className="bg-white/30 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Photo label - with pointer-events: none so clicks pass through */}
            <div className="absolute bottom-3 left-3 bg-black/60 text-white text-sm font-medium px-3 py-1 rounded-full pointer-events-none">
              Photo {index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 
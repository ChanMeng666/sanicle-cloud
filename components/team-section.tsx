import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Omopeju Afanu",
      role: "Chief Executive Officer - CEO",
      bio: "A passionate advocate for women's health, leads with a user-first, insight-driven approach to product innovation.",
      avatar: "OA",
      image: "/images/team/OmopejuAfanu-white-background.svg",
      leafColor: "green",
      slug: "omopeju-afanu"
    },
    {
      name: "Chaste Inegbedion",
      role: "Chief Product Officer",
      bio: "Known as 'Mr. Padman,' a global leader in femtech, using expertise in product management to build inclusive solutions.",
      avatar: "CI",
      image: "/images/team/ChasteInegbedion-white-background.svg",
      leafColor: "white",
      slug: "chaste-inegbedion"
    },
    {
      name: "Daryll Hall",
      role: "AI Creative Project Manager",
      bio: "AI and tech background, paired with experience in successful exits, fuels Sanicle's innovation.",
      avatar: "DH",
      image: "/images/team/DaryllHall-white-background.svg",
      leafColor: "white",
      slug: "daryll-hall"
    },
    {
      name: "Gabby Hurst",
      role: "Chief Experience Officer - CXO",
      bio: "Excels in product management, creating innovative, customer-centric solutions with technical insight and emotional intelligence.",
      avatar: "GH",
      image: "/images/team/GabbyHurst-white-background.svg",
      leafColor: "white",
      slug: "gabby-hurst"
    },
    {
      name: "Chan Meng",
      role: "Senior AI/ML Infrastructure Engineer",
      bio: "Full-stack developer leading AI-powered solutions for women's workplace health, with expertise in cloud-native architecture and mentorship for women in STEM.",
      avatar: "CM",
      image: "/images/team/ChanMeng-white-background.svg",
      leafColor: "pink",
      slug: "chan-meng"
    },
  ]

  return (
    <section id="team" className="w-full py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Top wave transition */}
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-teal-50">
          <path d="M0,96L48,101.3C96,107,192,117,288,117.3C384,117,480,107,576,90.7C672,75,768,53,864,58.7C960,64,1056,96,1152,106.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      {/* Colored pencil line decoration */}
      <div className="absolute top-40 left-0 right-0 h-1 bg-gradient-to-r from-coral-100 via-primary/20 to-teal-100 opacity-30"></div>
      
      {/* Leaf decorations */}
      <div className="absolute right-0 top-1/4 transform rotate-45">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="opacity-5 w-96 h-96 blur-md" />
      </div>
      <div className="absolute left-0 bottom-1/4 transform -rotate-45">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="opacity-5 w-96 h-96 blur-md" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10 pt-32">
        <div className="text-center mb-10 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-20">
            <img src="/logo/leave-coral.svg" alt="Leaf decoration" className="w-24 h-24" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800">Our Team</h2>
          <p className="text-neutral-600 mt-2">
            Sanicle boasts a powerful team with diverse backgrounds and a shared passion for revolutionizing menstrual
            health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative group bg-white/90">
              <div className="absolute -right-8 -top-8 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <img 
                  src={`/logo/leave-${member.leafColor}.svg`} 
                  alt="Leaf background" 
                  className="w-32 h-32 transform rotate-45 group-hover:rotate-12 transition-transform duration-500" 
                />
              </div>
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                <div className="relative">
                  <Avatar className="h-24 w-24 mb-4 border-2 border-white ring-2 ring-primary/20 relative z-10">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-primary text-white text-xl">{member.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 opacity-70">
                    <img src={`/logo/leave-${member.leafColor}.svg`} alt="Leaf decoration" className="w-full h-full" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-neutral-800">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <Link 
                  href={`/team/${member.slug}`} 
                  className="text-primary hover:text-teal-700 transition-colors duration-300 font-medium mt-2 inline-flex items-center"
                >
                  Read Bio
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Bottom wave transition for footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#F9ECE8" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,85.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}


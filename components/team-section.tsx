import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Omopeju Afanu",
      role: "Chief Executive Officer - CEO",
      bio: "A passionate advocate for women's health, leads with a user-first, insight-driven approach to product innovation.",
      avatar: "OA",
      leafColor: "green"
    },
    {
      name: "Eliana Franco Taveras",
      role: "Chief Medical Officer",
      bio: "Scientific expertise supports Sanicle's quality and commitment to health, grounding our products in evidence-based practices.",
      avatar: "EF",
      leafColor: "pink"
    },
    {
      name: "Chaste Inegbedion",
      role: "Chief Product Officer",
      bio: "Known as 'Mr. Padman,' a global leader in femtech, using expertise in product management to build inclusive solutions.",
      avatar: "CI",
      leafColor: "white"
    },
    {
      name: "Tosin Oni",
      role: "Chief Operating Officer",
      bio: "A multifaceted entrepreneur who brings strategy, creativity, and a community-driven approach to Sanicle's operations.",
      avatar: "TO",
      leafColor: "green"
    },
    {
      name: "Olive Kabeya",
      role: "Head of Revenue and Communications",
      bio: "Commitment to social justice guides her leadership in revenue generation and communication strategies.",
      avatar: "OK",
      leafColor: "pink"
    },
    {
      name: "Daryll Hall",
      role: "AI Creative Project Manager",
      bio: "AI and tech background, paired with experience in successful exits, fuels Sanicle's innovation.",
      avatar: "DH",
      leafColor: "white"
    },
    {
      name: "Roxanne Stewart",
      role: "Chief Sales and Marketing",
      bio: "Combines psychology with expertise in sales and finance to lead Sanicle's marketing and growth strategies.",
      avatar: "RS",
      leafColor: "green"
    },
    {
      name: "Chime Ifediniru",
      role: "Chief Technology Officer",
      bio: "With over a decade as a Senior Solutions Architect, leads Sanicle's tech initiatives, designing scalable systems.",
      avatar: "CI",
      leafColor: "pink"
    },
    {
      name: "Gabby Hurst",
      role: "Chief Experience Officer - CXO",
      bio: "Excels in product management, creating innovative, customer-centric solutions with technical insight and emotional intelligence.",
      avatar: "GH",
      leafColor: "white"
    },
    {
      name: "Wesley Eugene",
      role: "Chief Information Officer - CIO",
      bio: "Expertise in Technology Business Management and a human-centered approach to driving digital transformation.",
      avatar: "WE",
      leafColor: "green"
    },
    {
      name: "Chan Meng",
      role: "Senior AI/ML Infrastructure Engineer",
      bio: "Full-stack developer leading AI-powered solutions for women's workplace health, with expertise in cloud-native architecture and mentorship for women in STEM.",
      avatar: "CM",
      leafColor: "pink"
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="absolute right-0 top-1/4 transform rotate-45">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="opacity-10 w-96 h-96 blur-md" />
      </div>
      <div className="absolute left-0 bottom-1/4 transform -rotate-45">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="opacity-10 w-96 h-96 blur-md" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-20">
            <img src="/logo/leave-black.svg" alt="Leaf decoration" className="w-24 h-24" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Our Team</h2>
          <p className="text-[#7f8c8d] mt-2">
            Sanicle boasts a powerful team with diverse backgrounds and a shared passion for revolutionizing menstrual
            health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative group">
              <div className="absolute -right-8 -top-8 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <img 
                  src={`/logo/leave-${member.leafColor}.svg`} 
                  alt="Leaf background" 
                  className="w-32 h-32 transform rotate-45 group-hover:rotate-12 transition-transform duration-500" 
                />
              </div>
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                <div className="relative">
                  <Avatar className="h-24 w-24 mb-4 border-2 border-white ring-2 ring-[#167d83]/20 relative z-10">
                    <AvatarImage src="" alt={member.name} />
                    <AvatarFallback className="bg-[#167d83] text-white text-xl">{member.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 opacity-70">
                    <img src={`/logo/leave-${member.leafColor}.svg`} alt="Leaf decoration" className="w-full h-full" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-[#2c3e50]">{member.name}</h3>
                <p className="text-[#167d83] mb-2">{member.role}</p>
                <p className="text-[#7f8c8d] text-sm mb-4">{member.bio}</p>
                <Button variant="link" className="text-[#167d83] p-0 group-hover:text-[#126e73] transition-colors duration-300">
                  Read Bio
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


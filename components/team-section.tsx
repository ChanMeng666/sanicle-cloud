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
    },
    {
      name: "Eliana Franco Taveras",
      role: "Chief Medical Officer",
      bio: "Scientific expertise supports Sanicle's quality and commitment to health, grounding our products in evidence-based practices.",
      avatar: "EF",
    },
    {
      name: "Chaste Inegbedion",
      role: "Chief Product Officer",
      bio: "Known as 'Mr. Padman,' a global leader in femtech, using expertise in product management to build inclusive solutions.",
      avatar: "CI",
    },
    {
      name: "Tosin Oni",
      role: "Chief Operating Officer",
      bio: "A multifaceted entrepreneur who brings strategy, creativity, and a community-driven approach to Sanicle's operations.",
      avatar: "TO",
    },
    {
      name: "Olive Kabeya",
      role: "Head of Revenue and Communications",
      bio: "Commitment to social justice guides her leadership in revenue generation and communication strategies.",
      avatar: "OK",
    },
    {
      name: "Daryll Hall",
      role: "AI Creative Project Manager",
      bio: "AI and tech background, paired with experience in successful exits, fuels Sanicle's innovation.",
      avatar: "DH",
    },
    {
      name: "Roxanne Stewart",
      role: "Chief Sales and Marketing",
      bio: "Combines psychology with expertise in sales and finance to lead Sanicle's marketing and growth strategies.",
      avatar: "RS",
    },
    {
      name: "Chime Ifediniru",
      role: "Chief Technology Officer",
      bio: "With over a decade as a Senior Solutions Architect, leads Sanicle's tech initiatives, designing scalable systems.",
      avatar: "CI",
    },
    {
      name: "Gabby Hurst",
      role: "Chief Experience Officer - CXO",
      bio: "Excels in product management, creating innovative, customer-centric solutions with technical insight and emotional intelligence.",
      avatar: "GH",
    },
    {
      name: "Wesley Eugene",
      role: "Chief Information Officer - CIO",
      bio: "Expertise in Technology Business Management and a human-centered approach to driving digital transformation.",
      avatar: "WE",
    },
    {
      name: "Chan Meng",
      role: "Senior AI/ML Infrastructure Engineer",
      bio: "Full-stack developer leading AI-powered solutions for women's workplace health, with expertise in cloud-native architecture and mentorship for women in STEM.",
      avatar: "CM",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Our Team</h2>
          <p className="text-[#7f8c8d] mt-2">
            Sanicle boasts a powerful team with diverse backgrounds and a shared passion for revolutionizing menstrual
            health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="" alt={member.name} />
                  <AvatarFallback className="bg-[#167d83] text-white text-xl">{member.avatar}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-[#2c3e50]">{member.name}</h3>
                <p className="text-[#167d83] mb-2">{member.role}</p>
                <p className="text-[#7f8c8d] text-sm mb-4">{member.bio}</p>
                <Button variant="link" className="text-[#167d83] p-0">
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


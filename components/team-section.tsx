import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Omopeju Afanu",
      role: "CEO",
      bio: "Experienced healthcare professional with a passion for women's health.",
      avatar: "OA",
    },
    {
      name: "Eliana Franco Taveras",
      role: "CMO",
      bio: "Marketing expert with extensive experience in healthcare technology.",
      avatar: "EF",
    },
    {
      name: "Chaste Inegbedion",
      role: "CPO",
      bio: "Product visionary focused on creating intuitive healthcare solutions.",
      avatar: "CI",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Technology leader with expertise in secure healthcare platforms.",
      avatar: "JS",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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


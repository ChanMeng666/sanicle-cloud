import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Sanicle.cloud has transformed how we approach women's health benefits in our company. The platform is intuitive and our employees love it.",
      author: "Sarah Johnson",
      role: "HR Director, Tech Solutions Inc.",
      avatar: "SJ",
    },
    {
      quote:
        "The comprehensive approach to menstrual health has significantly improved workplace wellbeing and reduced absenteeism among our female staff.",
      author: "Michael Chen",
      role: "Benefits Manager, Global Enterprises",
      avatar: "MC",
    },
    {
      quote:
        "As a benefits broker, Sanicle.cloud has been a game-changer for my clients looking for innovative health solutions that truly make a difference.",
      author: "Priya Patel",
      role: "Senior Benefits Consultant, Health Partners",
      avatar: "PP",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">What Our Clients Say</h2>
          <p className="text-[#7f8c8d] mt-2">Hear from the companies transforming workplace health</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-[#7ac8cd] mb-4" />
                <p className="text-[#2c3e50] mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="" alt={testimonial.author} />
                    <AvatarFallback className="bg-[#167d83] text-white">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">{testimonial.author}</p>
                    <p className="text-sm text-[#7f8c8d]">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


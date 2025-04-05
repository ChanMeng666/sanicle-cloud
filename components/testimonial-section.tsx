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
      leafColor: "green"
    },
    {
      quote:
        "The comprehensive approach to menstrual health has significantly improved workplace wellbeing and reduced absenteeism among our female staff.",
      author: "Michael Chen",
      role: "Benefits Manager, Global Enterprises",
      avatar: "MC",
      leafColor: "pink"
    },
    {
      quote:
        "As a benefits broker, Sanicle.cloud has been a game-changer for my clients looking for innovative health solutions that truly make a difference.",
      author: "Priya Patel",
      role: "Senior Benefits Consultant, Health Partners",
      avatar: "PP",
      leafColor: "white"
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 relative overflow-hidden">
      {/* Gradient background with dot pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-coral-50"></div>
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      
      {/* Top transition decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      {/* Leaf brand decorations */}
      <div className="absolute right-0 top-0 transform rotate-45 -translate-y-1/3 translate-x-1/4">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="opacity-10 w-96 h-96 blur-md" />
      </div>
      <div className="absolute left-0 bottom-0 transform -rotate-45 translate-y-1/3 -translate-x-1/4">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="opacity-10 w-96 h-96 blur-md" />
      </div>
      
      {/* Overlapping element for next section */}
      <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 opacity-10 z-20">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-80 h-80" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-20">
            <img src="/logo/leave-black.svg" alt="Leaf decoration" className="w-24 h-24" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800">What Our Clients Say</h2>
          <p className="text-neutral-600 mt-2">Hear from the companies transforming workplace health</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <div className="absolute right-0 bottom-0 opacity-10">
                <img 
                  src={`/logo/leave-${testimonial.leafColor}.svg`} 
                  alt="Leaf background" 
                  className="w-48 h-48 transform rotate-12 translate-x-1/4 translate-y-1/4 group-hover:rotate-6 transition-transform duration-500" 
                />
              </div>
              <CardContent className="p-6 relative z-10">
                <div className="relative">
                  <div className="absolute -left-2 -top-2 w-10 h-10">
                    <img src={`/logo/leave-${testimonial.leafColor}.svg`} alt="Quote background" className="w-full h-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Quote className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="pt-1 pl-8">
                    <p className="text-neutral-700 mb-6">{testimonial.quote}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 border-2 border-white ring-2 ring-primary/20">
                    <AvatarImage src="" alt={testimonial.author} />
                    <AvatarFallback className="bg-primary text-white">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-neutral-800">{testimonial.author}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
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


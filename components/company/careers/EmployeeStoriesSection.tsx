"use client"

import { Button } from "@/components/ui/button"

export function EmployeeStoriesSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-pale text-primary text-sm font-medium mb-3">
              Employee Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-charcoal">Meet Our Team</h2>
            <p className="text-slate mt-3 max-w-2xl mx-auto">
              Hear from the people who make Sanicle.cloud an exceptional place to work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Senior Product Manager",
                story:
                  "I joined Sanicle.cloud because I wanted to work on a product that truly changes people's lives. Every day, I collaborate with talented people who are passionate about improving women's health in the workplace.",
                image: "/placeholder.svg?height=400&width=300",
                color: "from-primary",
              },
              {
                name: "Michael Li",
                role: "Frontend Engineer",
                story:
                  "The engineering culture here is amazing. We're encouraged to innovate and solve meaningful problems while maintaining a healthy work-life balance. I've grown tremendously as an engineer since joining the team.",
                image: "/placeholder.svg?height=400&width=300",
                color: "from-secondary",
              },
              {
                name: "Emily Wang",
                role: "Client Success Lead",
                story:
                  "I've never worked at a company that cares so deeply about its customers and employees. The mission-driven culture makes every day meaningful, and I'm proud of the impact we're making.",
                image: "/placeholder.svg?height=400&width=300",
                color: "from-primary",
              },
            ].map((person, index) => (
              <div key={index} className="relative group h-[500px] rounded-xl overflow-hidden">
                <img
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className={`absolute inset-0 bg-gradient-to-t ${person.color} to-transparent opacity-90`}></div>

                <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-500 group-hover:-translate-y-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{person.name}</h3>
                  <p className="text-white/80 mb-4">{person.role}</p>
                  <p className="text-white/90">{person.story}</p>

                  <Button className="mt-4 bg-white text-primary hover:bg-white/90">Read Full Story</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
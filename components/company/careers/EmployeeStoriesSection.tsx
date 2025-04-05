"use client"

import { Button } from "@/components/ui/button"

export function EmployeeStoriesSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white relative -mt-10 z-20 overflow-hidden">
      {/* Top transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-white pointer-events-none"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      
      {/* Background leaf decorations */}
      <div className="absolute top-20 right-10 hidden lg:block">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-40 h-40 opacity-10 rotate-45" />
      </div>
      <div className="absolute bottom-20 left-10 hidden lg:block">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-40 h-40 opacity-10 -rotate-12" />
      </div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
      <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/15 to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Employee Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-800">Meet Our Team</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
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
                leaf: "green"
              },
              {
                name: "Michael Li",
                role: "Frontend Engineer",
                story:
                  "The engineering culture here is amazing. We're encouraged to innovate and solve meaningful problems while maintaining a healthy work-life balance. I've grown tremendously as an engineer since joining the team.",
                image: "/placeholder.svg?height=400&width=300",
                color: "from-secondary",
                leaf: "pink"
              },
              {
                name: "Emily Wang",
                role: "Client Success Lead",
                story:
                  "I've never worked at a company that cares so deeply about its customers and employees. The mission-driven culture makes every day meaningful, and I'm proud of the impact we're making.",
                image: "/placeholder.svg?height=400&width=300",
                color: "from-primary",
                leaf: "green"
              },
            ].map((person, index) => (
              <div key={index} className="relative group h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className={`absolute inset-0 bg-gradient-to-t ${person.color} to-transparent opacity-90`}></div>
                
                {/* Leaf decorations */}
                <div className="absolute top-4 right-4 w-20 h-20 opacity-20 rotate-45">
                  <img src={`/logo/leave-${person.leaf}.svg`} alt="Leaf decoration" className="w-full h-full" />
                </div>
                <div className="absolute bottom-1/3 left-4 w-12 h-12 opacity-20 -rotate-12">
                  <img src="/logo/leave-white.svg" alt="Leaf decoration" className="w-full h-full" />
                </div>

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
      
      {/* Wave divider for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full h-auto">
          <path
            fill="#f8fafc"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,186.7C672,192,768,160,864,144C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
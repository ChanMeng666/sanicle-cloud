"use client"

import { Award, Sparkles, Star, Users, Zap } from "lucide-react"

export function CareerGrowthSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white relative -mt-10 z-20 overflow-hidden">
      {/* Top transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-white pointer-events-none"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      
      {/* Leaf decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 opacity-10 hidden lg:block">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-full h-full rotate-45" />
      </div>
      <div className="absolute bottom-20 left-10 w-40 h-40 opacity-10 hidden lg:block">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-full h-full -rotate-12" />
      </div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
      <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/15 to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-3">
              Career Development
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-800">Your Journey With Us</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              We're dedicated to helping you grow both professionally and personally.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/15 transform -translate-x-1/2"></div>

            {[
              {
                title: "Onboarding",
                description: "Comprehensive onboarding program to help you start successfully.",
                icon: <Users className="h-6 w-6 text-white" />,
                color: "bg-primary",
                position: "left",
                leaf: "green",
              },
              {
                title: "Mentorship",
                description: "One-on-one guidance with experienced team members.",
                icon: <Star className="h-6 w-6 text-white" />,
                color: "bg-secondary",
                position: "right",
                leaf: "pink",
              },
              {
                title: "Skill Development",
                description: "Regular workshops and learning opportunities to build new skills.",
                icon: <Zap className="h-6 w-6 text-white" />,
                color: "bg-primary",
                position: "left",
                leaf: "green",
              },
              {
                title: "Leadership Training",
                description: "Preparation for leadership roles through specialized training programs.",
                icon: <Award className="h-6 w-6 text-white" />,
                color: "bg-secondary",
                position: "right",
                leaf: "pink",
              },
              {
                title: "Career Advancement",
                description: "Clear promotion paths and regular performance evaluations.",
                icon: <Sparkles className="h-6 w-6 text-white" />,
                color: "bg-primary",
                position: "left",
                leaf: "green",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  item.position === "left" ? "pr-12 text-right ml-0 mr-auto" : "pl-12 ml-auto mr-0"
                } w-1/2`}
              >
                {/* Timeline dot with leaf shape */}
                <div
                  className={`absolute ${
                    item.position === "left" ? "right-0" : "left-0"
                  } top-0 w-10 h-10 ${item.color} flex items-center justify-center z-10 transform ${
                    item.position === "left" ? "translate-x-1/2" : "-translate-x-1/2"
                  } rounded-full overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={`/logo/leave-${item.leaf}.svg`} 
                      alt="Leaf background"
                      className="w-full h-full absolute inset-0"
                    />
                  </div>
                  <div className="relative z-10">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`bg-white p-6 rounded-xl shadow-lg ${
                    item.position === "left" ? "rounded-r-none" : "rounded-l-none"
                  } relative overflow-hidden border border-slate-100 hover:border-primary/10 hover:shadow-md transition-all duration-300`}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                    <img 
                      src={`/logo/leave-${item.leaf}.svg`}
                      alt="Leaf decoration" 
                      className="w-full h-full" 
                    />
                  </div>
                
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
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
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L48,32C96,32,192,32,288,48C384,64,480,96,576,106.7C672,117,768,107,864,96C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
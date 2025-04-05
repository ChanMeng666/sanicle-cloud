"use client"

import { Heart, Users, Award } from "lucide-react"

export function OurValues() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative -mt-10 z-20">
      {/* Top transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-white pointer-events-none"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Leaf background decorations */}
      <div className="absolute top-20 right-10 hidden lg:block">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-40 h-40 opacity-10 rotate-45" />
      </div>
      <div className="absolute bottom-40 left-10 hidden lg:block">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-40 h-40 opacity-10 -rotate-12" />
      </div>
      <div className="absolute top-1/3 left-1/4 hidden lg:block">
        <img src="/logo/leave-white.svg" alt="Leaf decoration" className="w-32 h-32 opacity-10 rotate-180" />
      </div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-3">
            Our Values
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What We Stand For</h2>
          <p className="text-lg text-slate-600">The principles that guide everything we do at Sanicle.cloud.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Heart className="h-10 w-10 text-white" />,
              title: "Empathy and Understanding",
              description:
                "We approach women's health issues with compassion and a deep understanding of the unique challenges in the workplace.",
              color: "from-secondary to-secondary-light",
              leafColor: "pink"
            },
            {
              icon: <Users className="h-10 w-10 text-white" />,
              title: "Inclusivity and Diversity",
              description:
                "We believe in creating solutions that support all women, recognizing the diversity of experiences and needs.",
              color: "from-primary to-primary-light",
              leafColor: "green"
            },
            {
              icon: <Award className="h-10 w-10 text-white" />,
              title: "Innovation and Excellence",
              description:
                "We constantly push the boundaries of what's possible in healthcare technology, delivering solutions of excellence.",
              color: "from-secondary to-secondary-light",
              leafColor: "white"
            },
          ].map((value, index) => (
            <div key={index} className="perspective-1000">
              <div className="relative h-[400px] w-full transform-style-3d transition-transform duration-1000 hover:rotate-y-180">
                {/* Card front */}
                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl">
                  <div
                    className={`bg-gradient-to-br ${value.color} h-full w-full p-8 flex flex-col items-center justify-center text-center relative`}
                  >
                    {/* Background leaf decorations */}
                    <div className="absolute top-5 right-5 w-20 h-20 opacity-20">
                      <img src={`/logo/leave-${value.leafColor}.svg`} alt="Leaf decoration" className="w-full h-full" />
                    </div>
                    <div className="absolute bottom-5 left-5 w-20 h-20 opacity-20 rotate-180">
                      <img src={`/logo/leave-${value.leafColor}.svg`} alt="Leaf decoration" className="w-full h-full" />
                    </div>

                    {/* Leaf shape icon background */}
                    <div className="w-20 h-20 relative mb-6">
                      <img src={`/logo/leave-${value.leafColor}.svg`} alt="Leaf background" className="absolute inset-0 w-full h-full opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-white/90">{value.description}</p>
                  </div>
                </div>

                {/* Card back */}
                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl rotate-y-180">
                  <div className="bg-white h-full w-full p-8 flex flex-col items-center justify-center text-center relative">
                    {/* Background leaf decorations */}
                    <div className="absolute top-5 right-5 w-16 h-16 opacity-10">
                      <img src={`/logo/leave-${index === 1 ? "green" : "pink"}.svg`} alt="Leaf decoration" className="w-full h-full" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                    <p className="text-slate-600 mb-6">{value.description}</p>
                    <p className="text-slate-500 italic">
                      "This value guides our approach to product development, customer service, and team culture."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave divider for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full h-auto">
          <path
            fill="#f8fafc"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
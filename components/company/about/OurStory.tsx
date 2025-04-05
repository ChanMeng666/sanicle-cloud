"use client"

import { Sparkles, Star, Globe, Users, Award } from "lucide-react"

export function OurStory() {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-50 relative -mt-10 z-20 overflow-hidden">
      {/* Top transition from the previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50/80 to-slate-50 pointer-events-none"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-dots opacity-15"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Leaf background decorations */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-32 h-32 opacity-10 rotate-45" />
      </div>
      <div className="absolute bottom-40 left-10 hidden lg:block">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-24 h-24 opacity-10 -rotate-12" />
      </div>
      <div className="absolute top-1/2 right-1/3 hidden lg:block">
        <img src="/logo/leave-white.svg" alt="Leaf decoration" className="w-40 h-40 opacity-10 rotate-90" />
      </div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
      <div className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/15 to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Our Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">The Story of Sanicle.cloud</h2>
          <p className="text-lg text-slate-600">From Concept to Innovation: How We're Transforming Workplace Health.</p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-primary/15 md:transform md:-translate-x-1/2"></div>

          {[
            {
              year: "2022",
              title: "Beginning",
              description:
                "Sanicle.cloud was founded by Dr. Chen and a team of healthcare professionals and technology experts who recognized a critical gap in workplace benefits: comprehensive support for women's menstrual health.",
              icon: <Sparkles className="h-6 w-6 text-white" />,
              position: "left",
              leafColor: "green",
            },
            {
              year: "2022",
              title: "Seed Funding",
              description:
                "Secured initial investment to develop the platform and build our core team, enabling us to turn our vision into reality.",
              icon: <Star className="h-6 w-6 text-white" />,
              position: "right",
              leafColor: "pink",
            },
            {
              year: "2023",
              title: "Platform Launch",
              description:
                "Officially launched the Sanicle.cloud platform, partnering with our first corporate clients, marking a significant milestone in our journey.",
              icon: <Globe className="h-6 w-6 text-white" />,
              position: "left",
              leafColor: "white",
            },
            {
              year: "2023",
              title: "Expansion",
              description:
                "Grew to serve over 50 companies, expanded our team to 25 members, and extended our impact across multiple industries.",
              icon: <Users className="h-6 w-6 text-white" />,
              position: "right",
              leafColor: "black",
            },
            {
              year: "2024",
              title: "Series A Funding",
              description:
                "Raised substantial funding to accelerate growth and enhance platform capabilities, setting the foundation for our next phase of development.",
              icon: <Award className="h-6 w-6 text-white" />,
              position: "left",
              leafColor: "green",
            },
          ].map((milestone, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-24 pl-10 md:pl-0 ${
                milestone.position === "left"
                  ? "md:pr-12 md:text-right md:ml-0 md:mr-auto"
                  : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2`}
            >
              {/* Timeline dot - leaf shape instead of circle */}
              <div
                className={`absolute left-0 md:left-auto ${
                  milestone.position === "left" ? "md:right-0" : "md:left-0"
                } top-0 w-10 h-10 z-10 transform ${
                  milestone.position === "left" ? "md:translate-x-1/2" : "md:-translate-x-1/2"
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={`/logo/leave-${milestone.leafColor}.svg`}
                    alt="Leaf timeline marker"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {milestone.icon}
                  </div>
                </div>
              </div>

              {/* Content - Add leaf decorations */}
              <div
                className={`bg-white p-6 rounded-xl shadow-lg ${
                  milestone.position === "left" ? "md:rounded-r-none" : "md:rounded-l-none"
                } transform transition-transform duration-500 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm border border-primary/5`}
              >
                <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                  <img 
                    src={`/logo/leave-${milestone.leafColor}.svg`}
                    alt="Leaf decoration" 
                    className="w-full h-full" 
                  />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3 relative">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{milestone.title}</h3>
                <p className="text-slate-600">{milestone.description}</p>
              </div>

              {/* Mobile connection line */}
              <div className="absolute left-5 top-10 bottom-0 w-1 bg-primary/15 md:hidden"></div>
            </div>
          ))}
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
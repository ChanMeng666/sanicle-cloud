"use client"

import { Sparkles, Star, Globe, Users, Award } from "lucide-react"

export function OurStory() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative -mt-10 z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
            Our Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">The Story of Sanicle.cloud</h2>
          <p className="text-lg text-[#7f8c8d]">From Concept to Innovation: How We're Transforming Workplace Health.</p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-[#e6f5f6] md:transform md:-translate-x-1/2"></div>

          {[
            {
              year: "2022",
              title: "Beginning",
              description:
                "Sanicle.cloud was founded by Dr. Chen and a team of healthcare professionals and technology experts who recognized a critical gap in workplace benefits: comprehensive support for women's menstrual health.",
              icon: <Sparkles className="h-6 w-6 text-white" />,
              position: "left",
            },
            {
              year: "2022",
              title: "Seed Funding",
              description:
                "Secured initial investment to develop the platform and build our core team, enabling us to turn our vision into reality.",
              icon: <Star className="h-6 w-6 text-white" />,
              position: "right",
            },
            {
              year: "2023",
              title: "Platform Launch",
              description:
                "Officially launched the Sanicle.cloud platform, partnering with our first corporate clients, marking a significant milestone in our journey.",
              icon: <Globe className="h-6 w-6 text-white" />,
              position: "left",
            },
            {
              year: "2023",
              title: "Expansion",
              description:
                "Grew to serve over 50 companies, expanded our team to 25 members, and extended our impact across multiple industries.",
              icon: <Users className="h-6 w-6 text-white" />,
              position: "right",
            },
            {
              year: "2024",
              title: "Series A Funding",
              description:
                "Raised substantial funding to accelerate growth and enhance platform capabilities, setting the foundation for our next phase of development.",
              icon: <Award className="h-6 w-6 text-white" />,
              position: "left",
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
              {/* Timeline dot */}
              <div
                className={`absolute left-0 md:left-auto ${
                  milestone.position === "left" ? "md:right-0" : "md:left-0"
                } top-0 w-10 h-10 rounded-full bg-[#167d83] flex items-center justify-center z-10 transform ${
                  milestone.position === "left" ? "md:translate-x-1/2" : "md:-translate-x-1/2"
                }`}
              >
                {milestone.icon}
              </div>

              {/* Content */}
              <div
                className={`bg-white p-6 rounded-xl shadow-lg ${
                  milestone.position === "left" ? "md:rounded-r-none" : "md:rounded-l-none"
                } transform transition-transform duration-500 hover:-translate-y-2`}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-2">{milestone.title}</h3>
                <p className="text-[#7f8c8d]">{milestone.description}</p>
              </div>

              {/* Mobile connection line */}
              <div className="absolute left-5 top-10 bottom-0 w-1 bg-[#e6f5f6] md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
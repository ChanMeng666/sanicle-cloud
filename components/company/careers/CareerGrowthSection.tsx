"use client"

import { Award, Sparkles, Star, Users, Zap } from "lucide-react"

export function CareerGrowthSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
              Career Development
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">Your Journey With Us</h2>
            <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
              We're dedicated to helping you grow both professionally and personally.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#e6f5f6] transform -translate-x-1/2"></div>

            {[
              {
                title: "Onboarding",
                description: "Comprehensive onboarding program to help you start successfully.",
                icon: <Users className="h-6 w-6 text-white" />,
                color: "bg-[#167d83]",
                position: "left",
              },
              {
                title: "Mentorship",
                description: "One-on-one guidance with experienced team members.",
                icon: <Star className="h-6 w-6 text-white" />,
                color: "bg-[#EE4C23]",
                position: "right",
              },
              {
                title: "Skill Development",
                description: "Regular workshops and learning opportunities to build new skills.",
                icon: <Zap className="h-6 w-6 text-white" />,
                color: "bg-[#167d83]",
                position: "left",
              },
              {
                title: "Leadership Training",
                description: "Preparation for leadership roles through specialized training programs.",
                icon: <Award className="h-6 w-6 text-white" />,
                color: "bg-[#EE4C23]",
                position: "right",
              },
              {
                title: "Career Advancement",
                description: "Clear promotion paths and regular performance evaluations.",
                icon: <Sparkles className="h-6 w-6 text-white" />,
                color: "bg-[#167d83]",
                position: "left",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  item.position === "left" ? "pr-12 text-right ml-0 mr-auto" : "pl-12 ml-auto mr-0"
                } w-1/2`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute ${
                    item.position === "left" ? "right-0" : "left-0"
                  } top-0 w-10 h-10 rounded-full ${item.color} flex items-center justify-center z-10 transform ${
                    item.position === "left" ? "translate-x-1/2" : "-translate-x-1/2"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div
                  className={`bg-white p-6 rounded-xl shadow-lg ${
                    item.position === "left" ? "rounded-r-none" : "rounded-l-none"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">{item.title}</h3>
                  <p className="text-[#7f8c8d]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import { FileText, BookOpen, Briefcase } from "lucide-react"

export function TrainingResources() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#fef6e9] text-[#EE4C23] text-xs md:text-sm font-medium rounded-full mb-3 shadow-sm">
            Partner Resources
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c3e50] mb-3">Training and Support</h2>
          <p className="text-[#7f8c8d] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive resources and training to ensure you have everything needed for success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-[#167d83] to-[#22c0c7]"></div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <FileText className="h-8 w-8 text-[#167d83]" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50] text-center mb-4">Sales Toolkit</h3>
              <p className="text-[#7f8c8d] text-center mb-6 text-sm md:text-base leading-relaxed">
                Get all the resources you need to effectively present and sell Sanicle.cloud to your clients.
              </p>
              <div className="space-y-3">
                {[
                  "Sales presentations and scripts",
                  "Client proposal templates",
                  "FAQs and objection handling",
                  "Competitive positioning guide",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#167d83] mr-3"></div>
                    <span className="text-[#2c3e50] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-[#EE4C23] to-[#f06845]"></div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#fef6e9] flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <BookOpen className="h-8 w-8 text-[#EE4C23]" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50] text-center mb-4">Learning Center</h3>
              <p className="text-[#7f8c8d] text-center mb-6 text-sm md:text-base leading-relaxed">
                Enhance your expertise through our rich training resources and certification programs.
              </p>
              <div className="space-y-3">
                {[
                  "Online courses and webinars",
                  "Partner certification program",
                  "Product knowledge training",
                  "Industry trends and insights",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#EE4C23] mr-3"></div>
                    <span className="text-[#2c3e50] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group sm:col-span-2 lg:col-span-1">
            <div className="h-2 bg-gradient-to-r from-[#167d83] to-[#22c0c7]"></div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <Briefcase className="h-8 w-8 text-[#167d83]" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50] text-center mb-4">Business Support</h3>
              <p className="text-[#7f8c8d] text-center mb-6 text-sm md:text-base leading-relaxed">
                Get professional business and technical support to ensure success for you and your clients.
              </p>
              <div className="space-y-3">
                {[
                  "Dedicated partner manager",
                  "Client implementation assistance",
                  "Marketing and co-branding support",
                  "Automated reporting and commission tracking",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#167d83] mr-3"></div>
                    <span className="text-[#2c3e50] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
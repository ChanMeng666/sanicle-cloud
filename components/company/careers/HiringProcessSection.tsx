"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function HiringProcessSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
              Application Process
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">Our Hiring Process</h2>
            <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
              We've designed a thoughtful process to find the right candidates while respecting your time.
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              {[
                { step: 1, label: "Apply" },
                { step: 2, label: "Initial Interview" },
                { step: 3, label: "Skills Assessment" },
                { step: 4, label: "Team Interview" },
                { step: 5, label: "Offer" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-[#167d83] text-white flex items-center justify-center text-lg font-bold mb-2">
                    {item.step}
                  </div>
                  <span className="text-[#2c3e50] font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-[#2c3e50] mb-4">1. Apply</h3>
                  <p className="text-[#7f8c8d] mb-6">
                    Submit your application through our careers page. We review every application and strive to respond within 5 business days.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Read the job description carefully",
                      "Submit your resume and cover letter",
                      "Answer a few short questions about your experience",
                      "We'll confirm receipt of your application",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex space-x-4">
                    <Button disabled className="bg-gray-200 text-gray-500 cursor-not-allowed">
                      Previous
                    </Button>
                    <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white">Next</Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Application Process"
                    className="relative z-10 rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
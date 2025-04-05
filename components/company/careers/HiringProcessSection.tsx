"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function HiringProcessSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-slate-50 relative -mt-10 z-20 overflow-hidden">
      {/* Top transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50/80 to-slate-50 pointer-events-none"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 pattern-dots opacity-15"></div>
      
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-3">
              Application Process
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-800">Our Hiring Process</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
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
                <div key={index} className="flex flex-col items-center mb-4 md:mb-0 relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mb-2 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <img src="/logo/leave-green.svg" alt="Leaf background" className="w-full h-full" />
                    </div>
                    <span className="relative z-10">{item.step}</span>
                  </div>
                  <span className="text-slate-700 font-medium">{item.label}</span>
                  
                  {/* Connector line for desktop */}
                  {index < 4 && (
                    <div className="hidden md:block absolute h-[2px] bg-gradient-to-r from-primary/40 to-primary/20 top-6 left-[calc(50%+12px)] right-0 w-[calc(100%-24px)]"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden border border-slate-100">
              {/* Background leaf decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 opacity-5">
                <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-full h-full" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-5 rotate-180">
                <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-full h-full" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">1. Apply</h3>
                  <p className="text-slate-600 mb-6">
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
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex space-x-4">
                    <Button disabled className="bg-gray-200 text-gray-500 cursor-not-allowed">
                      Previous
                    </Button>
                    <Button className="bg-primary hover:bg-primary-dark text-white">Next</Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                  <div className="relative z-10 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Application Process"
                      className="w-full shadow-lg rounded-lg"
                    />
                    {/* Image overlay with leaf pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/20 mix-blend-overlay"></div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 opacity-30">
                      <img src="/logo/leave-white.svg" alt="Leaf decoration" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full h-auto">
          <path
            fill="#167d83"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
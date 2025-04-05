"use client"

import { CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BenefitComparison() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-neutral-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      {/* Decorative leaf elements */}
      <div className="absolute top-1/4 right-0 -mr-20 w-48 h-48 opacity-[0.08]">
        <img 
          src="/logo/leave-green.svg" 
          alt="Decorative leaf" 
          className="w-full h-full transform rotate-45"
        />
      </div>
      <div className="absolute bottom-1/4 left-0 -ml-12 w-32 h-32 opacity-[0.06]">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Decorative leaf" 
          className="w-full h-full transform -rotate-45"
        />
      </div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-40 left-0 right-0 h-px bg-gradient-to-r from-teal-100 via-primary/30 to-coral-100 opacity-40"></div>
      <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-coral-100 via-primary/30 to-teal-100 opacity-40"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-primary text-sm font-medium mb-3">
              Compare Benefits
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-800 mb-3">Why Choose Our Platform</h2>
            <p className="text-neutral-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
              See how our comprehensive menstrual health platform compares to traditional benefit offerings
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-white rounded-tl-lg border-b border-neutral-200"></th>
                  <th className="p-4 bg-white border-b border-neutral-200 text-center">
                    <div className="mb-1 text-lg font-semibold text-neutral-800">Traditional Benefits</div>
                    <div className="text-xs text-neutral-500">Limited coverage</div>
                  </th>
                  <th className="p-4 bg-gradient-to-br from-primary/80 to-teal-500/90 text-white rounded-tr-lg border-b border-primary/20 text-center relative">
                    <div className="absolute top-0 right-0 w-12 h-12 opacity-10">
                      <img 
                        src="/logo/leave-green.svg" 
                        alt="" 
                        className="w-full h-full transform rotate-45"
                      />
                    </div>
                    <div className="mb-1 text-lg font-semibold">Our Platform</div>
                    <div className="text-xs text-white/80">Comprehensive solution</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Cycle Tracking",
                    traditional: false,
                    ours: true,
                  },
                  {
                    feature: "Menstrual Product Access",
                    traditional: false,
                    ours: true,
                  },
                  {
                    feature: "Educational Resources",
                    traditional: true,
                    ours: true,
                  },
                  {
                    feature: "Expert Support",
                    traditional: false,
                    ours: true,
                  },
                  {
                    feature: "Workplace Accommodations",
                    traditional: false,
                    ours: true,
                  },
                  {
                    feature: "Community Support",
                    traditional: false,
                    ours: true,
                  },
                  {
                    feature: "Private & Secure",
                    traditional: true,
                    ours: true,
                  },
                ].map((item, i, arr) => (
                  <tr key={i} className={i === arr.length - 1 ? "" : "border-b border-neutral-200"}>
                    <td className="p-4 text-sm md:text-base text-neutral-700 font-medium bg-white">{item.feature}</td>
                    <td className="p-4 text-center bg-white">
                      {item.traditional ? (
                        <CheckCircle className="h-5 w-5 mx-auto text-emerald-500" />
                      ) : (
                        <XCircle className="h-5 w-5 mx-auto text-neutral-300" />
                      )}
                    </td>
                    <td className="p-4 text-center bg-teal-50">
                      {item.ours ? (
                        <CheckCircle className="h-5 w-5 mx-auto text-primary" />
                      ) : (
                        <XCircle className="h-5 w-5 mx-auto text-neutral-300" />
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="p-4 rounded-bl-lg bg-white"></td>
                  <td className="p-4 text-center bg-white">
                    <Button variant="outline" className="w-full border-neutral-300 text-neutral-700 hover:bg-neutral-50">
                      Basic Plan
                    </Button>
                  </td>
                  <td className="p-4 text-center bg-teal-50 rounded-br-lg">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Get Started
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-600 text-sm italic">
              * Additional features and customizations available for enterprise plans.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  )
} 
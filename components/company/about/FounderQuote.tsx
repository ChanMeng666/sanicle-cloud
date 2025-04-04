"use client"

import { QuoteIcon } from "lucide-react"

export function FounderQuote() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-28 bg-white relative -mt-20 z-20">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-beige/50 filter blur-3xl animate-float-delay"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-pale/50 filter blur-3xl animate-float"></div>
      
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto relative">
          {/* Quote decoration */}
          <div className="absolute -top-10 -left-10 text-8xl sm:text-9xl text-primary/10 font-serif hidden sm:block">
            <QuoteIcon className="h-24 w-24 text-primary/20" />
          </div>
          <div className="absolute -bottom-10 -right-10 text-8xl sm:text-9xl text-primary/10 font-serif rotate-180 hidden sm:block">
            <QuoteIcon className="h-24 w-24 text-primary/20" />
          </div>

          <div className="bg-gradient-to-br from-beige to-beige/80 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl relative z-10 border border-secondary/10 animate-zoom-in">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 relative">
                <div className="mb-6 md:mb-0">
                  {/* Glow effect background */}
                  <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform animate-pulse-opacity"></div>
                  
                  {/* Founder image */}
                  <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-xl w-40 h-40 sm:w-48 sm:h-48 mx-auto transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Dr. Chen"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-charcoal">Dr. Chen</h3>
                    <p className="text-secondary font-medium">Founder & CEO</p>
                    <div className="flex justify-center mt-3 space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-8">
                <div className="relative">
                  {/* Small decorative line */}
                  <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                
                  <p className="text-xl md:text-2xl lg:text-3xl text-charcoal italic font-light mb-6 mt-4 leading-relaxed">
                    "After years working in healthcare, witnessing firsthand how menstrual health issues affect women's professional lives, we set out to create a solution that addresses these challenges while offering employers innovative benefit options."
                  </p>

                  <p className="text-slate text-base md:text-lg leading-relaxed">
                    Our mission is to transform workplace health environments by making menstrual health benefits accessible, comprehensive, and non-discriminatory. We believe that when women receive the support they need to manage menstrual health, everyone benefits — not just individual employees, but entire organizations.
                  </p>
                  
                  {/* Signature effect */}
                  <div className="mt-6 flex justify-end">
                    <img 
                      src="/placeholder.svg?height=60&width=150" 
                      alt="Dr. Chen's signature" 
                      className="h-12 opacity-80"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave divider - smoother transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#f8f9fa"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
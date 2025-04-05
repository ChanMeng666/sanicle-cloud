"use client"

import { QuoteIcon } from "lucide-react"

export function FounderQuote() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-28 bg-white relative -mt-20 z-20">
      {/* Top transition from the previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-64 h-64 opacity-30 blur-3xl animate-float-delay" />
      </div>
      <div className="absolute bottom-1/4 left-1/4">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-96 h-96 opacity-30 blur-3xl animate-float" />
      </div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      
      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto relative">
          {/* Quote decoration */}
          <div className="absolute -top-10 -left-10 text-8xl sm:text-9xl text-primary/10 font-serif hidden sm:block">
            <QuoteIcon className="h-24 w-24 text-primary/20" />
          </div>
          <div className="absolute -bottom-10 -right-10 text-8xl sm:text-9xl text-primary/10 font-serif rotate-180 hidden sm:block">
            <QuoteIcon className="h-24 w-24 text-primary/20" />
          </div>

          <div className="bg-gradient-to-br from-primary-pale/50 to-primary-pale/20 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl relative z-10 border border-secondary/10 animate-zoom-in overflow-hidden">
            {/* Leaf background decorations */}
            <div className="absolute top-0 left-0 -rotate-12">
              <img src="/logo/leave-white.svg" alt="Leaf decoration" className="w-24 h-24 opacity-20" />
            </div>
            <div className="absolute bottom-0 right-0 rotate-45">
              <img src="/logo/leave-white.svg" alt="Leaf decoration" className="w-24 h-24 opacity-20" />
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 opacity-10">
              <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-32 h-32" />
            </div>
            <div className="absolute top-1/4 right-0 transform translate-x-1/2 opacity-10">
              <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-40 h-40" />
            </div>
            
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 relative">
                <div className="mb-6 md:mb-0">
                  {/* Leaf shape background effect */}
                  <div className="absolute inset-0 transform animate-pulse-opacity">
                    <img src="/logo/leave-pink.svg" alt="Leaf glow effect" className="w-full h-full opacity-30 blur-3xl" />
                  </div>
                  
                  {/* Founder image with leaf frame */}
                  <div className="relative z-10 overflow-hidden w-40 h-40 sm:w-48 sm:h-48 mx-auto transform hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 z-20 pointer-events-none">
                      <img src="/logo/leave-white.svg" alt="Leaf frame" className="w-full h-full absolute inset-0" />
                    </div>
                    <div className="absolute inset-[12%] rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="Dr. Chen"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-[#2c3e50]">Dr. Chen</h3>
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
                
                  <p className="text-xl md:text-2xl lg:text-3xl text-[#2c3e50] italic font-light mb-6 mt-4 leading-relaxed">
                    "After years working in healthcare, witnessing firsthand how menstrual health issues affect women's professional lives, we set out to create a solution that addresses these challenges while offering employers innovative benefit options."
                  </p>

                  <p className="text-[#7f8c8d] text-base md:text-lg leading-relaxed">
                    Our mission is to transform workplace health environments by making menstrual health benefits accessible, comprehensive, and non-discriminatory. We believe that when women receive the support they need to manage menstrual health, everyone benefits — not just individual employees, but entire organizations.
                  </p>
                  
                  {/* Signature with leaf decoration */}
                  <div className="mt-6 flex justify-end items-center">
                    <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-8 h-8 opacity-30 mr-2" />
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
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full h-auto">
          <path
            fill="#f8fafc"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,186.7C672,192,768,160,864,144C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
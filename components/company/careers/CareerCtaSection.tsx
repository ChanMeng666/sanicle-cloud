"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Heart, Users } from "lucide-react"

export function CareerCtaSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-primary text-white relative overflow-hidden -mt-10 z-20">
      {/* Top transition from previous section - already handled by the wave in HiringProcessSection */}
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full"></div>
      
      {/* Leaf decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-20 transform rotate-45"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-20">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-20 transform -rotate-15"
        />
      </div>
      <div className="absolute top-1/2 right-1/3 transform -translate-y-1/2 w-40 h-40 opacity-10">
        <img 
          src="/logo/leave-white.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-20 transform rotate-90"
        />
      </div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Join Us and Transform Women's Health
          </h2>

          <p className="text-white/80 mb-8 text-xl">
            Become part of a team that's making a real impact in the workplace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn About Our Culture
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img src="/logo/leave-white.svg" alt="Leaf background" className="w-full h-full" />
                </div>
                <Users className="h-8 w-8 text-white relative z-10" />
              </div>
              <p className="text-white font-bold text-2xl">50+</p>
              <p className="text-white/80">Team Members</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img src="/logo/leave-white.svg" alt="Leaf background" className="w-full h-full" />
                </div>
                <Globe className="h-8 w-8 text-white relative z-10" />
              </div>
              <p className="text-white font-bold text-2xl">12</p>
              <p className="text-white/80">Countries</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img src="/logo/leave-white.svg" alt="Leaf background" className="w-full h-full" />
                </div>
                <Heart className="h-8 w-8 text-white relative z-10" />
              </div>
              <p className="text-white font-bold text-2xl">100%</p>
              <p className="text-white/80">Mission Driven</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider for smooth transition to footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full h-auto">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, Handshake, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-br from-white to-[#f8f9fa] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#e6f5f6] rounded-full opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#fef6e9] rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7 lg:pr-8">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-2">
                <div className="h-px w-8 bg-[#167d83]"></div>
                <span className="text-[#167d83] font-medium text-sm md:text-base">Partner Program</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c3e50] leading-tight tracking-tight">
                Expand Your <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#167d83] to-[#22c0c7] bg-clip-text text-transparent">Benefits Portfolio</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-[#7f8c8d] max-w-xl leading-relaxed">
                Partner with Sanicle.cloud to offer cutting-edge menstrual health benefits to your clients, improving employee satisfaction and retention.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="bg-gradient-to-r from-[#EE4C23] to-[#f06845] hover:from-[#d43d18] hover:to-[#e05835] text-white shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6] transition-all duration-300 transform hover:-translate-y-1">
                  Schedule a Call
                </Button>
              </div>

              <div className="flex items-center pt-3">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-[#EE4C23] fill-[#EE4C23]" />
                  ))}
                </div>
                <span className="ml-2 text-xs md:text-sm text-[#7f8c8d]">Our partners rate us 4.9/5</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            <div className="sm:col-span-2 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Benefits broker meeting with client"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md transform hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center">
                <div className="bg-[#e6f5f6] p-2 rounded-full mr-3">
                  <DollarSign className="h-6 w-6 text-[#167d83]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2c3e50] text-sm md:text-base">Commission</h3>
                  <p className="text-xs md:text-sm text-[#7f8c8d]">Up to 20% recurring revenue</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md transform hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center">
                <div className="bg-[#fef6e9] p-2 rounded-full mr-3">
                  <Handshake className="h-6 w-6 text-[#EE4C23]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2c3e50] text-sm md:text-base">Partners</h3>
                  <p className="text-xs md:text-sm text-[#7f8c8d]">100+ brokers trust us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path 
            fill="#ffffff" 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path 
            fill="#ffffff" 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path 
            fill="#ffffff" 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          />
        </svg>
      </div>
    </section>
  )
} 
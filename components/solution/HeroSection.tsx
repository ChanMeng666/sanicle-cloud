"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, ChevronDown, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-16 md:py-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#f8f9fa] clip-path-slant z-0"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 items-stretch">
          <div className="py-8 md:py-24 pr-4 md:pr-12 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium">
                For Employers
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#2c3e50]">
                Empower Your <span className="text-[#167d83]">Workforce</span> with Comprehensive Benefits
              </h1>
              <p className="text-lg text-[#7f8c8d]">
                Attract and retain top talent by providing innovative health benefits that address the unique needs of
                your female employees.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                  Book a Demo
                </Button>
              </div>

              <div className="pt-6 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#e6f5f6] border-2 border-white flex items-center justify-center text-[#167d83] text-xs font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="ml-3">
                  <p className="text-sm text-[#7f8c8d]">
                    <span className="font-semibold text-[#2c3e50]">500+</span> companies already trust us
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center relative min-h-[600px]">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e6f5f6] rounded-full opacity-20"></div>
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Diverse workplace team"
              className="relative z-10 rounded-lg shadow-xl w-4/5 transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute bottom-24 -left-12 bg-white rounded-lg shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#167d83] text-white flex items-center justify-center mr-3">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-[#2c3e50]">Improved Retention</p>
                  <p className="text-sm text-[#7f8c8d]">+27% employee satisfaction</p>
                </div>
              </div>
            </div>
            <div className="absolute top-24 -right-12 bg-white rounded-lg shadow-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#EE4C23] text-white flex items-center justify-center mr-3">
                  <BarChart className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-[#2c3e50]">Reduced Absences</p>
                  <p className="text-sm text-[#7f8c8d]">-18% menstrual-related time off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 text-center pb-6 hidden md:block">
        <Button variant="ghost" className="text-[#7f8c8d] hover:text-[#2c3e50] animate-bounce">
          Explore Benefits <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      {/* 在Hero Section底部添加波浪形分隔线 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
"use client"

import { Button } from "@/components/ui/button"
import { BarChart, CheckCircle, Clock, Users } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white relative -mt-10 z-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <div className="w-16 h-1 bg-[#167d83] mb-4"></div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Benefits for Employers</h2>
            <p className="text-[#7f8c8d] mt-2">
              Discover how Sanicle.cloud can transform your workplace and provide tangible benefits for your
              organization.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
              Download Benefits Guide
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#e6f5f6] rounded-lg transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-10"></div>
            <div className="relative z-10 p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-[#167d83]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Attract & Retain Talent</h3>
              <p className="text-[#7f8c8d] mb-6">
                Stand out in the job market with innovative benefits that demonstrate your commitment to women's
                health.
              </p>
              <div className="space-y-3 border-t border-gray-100 pt-4">
                {["Reduce turnover costs", "Attract diverse candidates", "Improve employee satisfaction"].map(
                  (item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-[#2c3e50]">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="relative group md:mt-12">
            <div className="absolute inset-0 bg-[#e6f5f6] rounded-lg transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-10"></div>
            <div className="relative z-10 p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center mb-6">
                <BarChart className="h-8 w-8 text-[#167d83]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Increase Productivity</h3>
              <p className="text-[#7f8c8d] mb-6">
                Support employees through menstrual health challenges to reduce absenteeism and improve focus.
              </p>
              <div className="space-y-3 border-t border-gray-100 pt-4">
                {[
                  "Reduce menstrual-related absences",
                  "Improve workplace performance",
                  "Support employee wellbeing",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#2c3e50]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group md:mt-24">
            <div className="absolute inset-0 bg-[#e6f5f6] rounded-lg transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-10"></div>
            <div className="relative z-10 p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-[#167d83]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Easy Implementation</h3>
              <p className="text-[#7f8c8d] mb-6">
                Seamlessly integrate our platform with your existing benefits system with minimal administrative
                burden.
              </p>
              <div className="space-y-3 border-t border-gray-100 pt-4">
                {["Quick setup process", "Dedicated implementation support", "Minimal HR resources required"].map(
                  (item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-[#2c3e50]">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 在Benefits Section底部添加波浪形分隔线 */}
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
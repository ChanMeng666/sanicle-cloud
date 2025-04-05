"use client"

import { Button } from "@/components/ui/button"
import { BarChart, CheckCircle, Clock, Download, Users } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative z-20">
      {/* 添加网格背景和波点背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      {/* 顶部过渡色块 */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-teal-50/20 to-transparent"></div>
      
      {/* 装饰性叶片元素 */}
      <div className="absolute top-20 right-5 hidden lg:block">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-36 h-36 opacity-10 rotate-12" />
      </div>
      <div className="absolute bottom-40 left-5 hidden lg:block">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-36 h-36 opacity-10 -rotate-12" />
      </div>

      {/* 彩色蜡笔线条装饰 */}
      <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-teal-100 via-primary/20 to-coral-100 opacity-30"></div>
      <div className="absolute bottom-24 left-0 right-0 h-px bg-gradient-to-r from-coral-100 via-primary/20 to-teal-100 opacity-30"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="w-16 h-1.5 bg-primary mb-6 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight">Enterprise Benefits Solutions</h2>
            <p className="text-neutral-600 mt-4 text-lg max-w-xl">
              Learn how Sanicle.cloud transforms your workplace, providing tangible practical benefits for your organization.
            </p>
          </div>
          <div className="mt-2">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-5 py-2.5 rounded-full transition-all group flex items-center">
              <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              Download Benefits Guide
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl transform group-hover:scale-[1.03] transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative z-10 p-6 sm:p-8 border border-neutral-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 relative mb-6">
                <img src="/logo/leave-green.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Attract and Retain Talent</h3>
              <p className="text-neutral-600 mb-6">
                Stand out with innovative benefits, demonstrating your commitment to women's health.
              </p>
              <div className="space-y-3 border-t border-neutral-100 pt-4">
                {["Reduce turnover costs", "Attract diverse talent", "Increase employee satisfaction"].map(
                  (item, i) => (
                    <div key={i} className="flex items-start group/item">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0 group-hover/item:text-secondary transition-colors" />
                      <span className="text-neutral-700 group-hover/item:text-secondary transition-colors">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="relative group md:mt-8 lg:mt-12">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl transform group-hover:scale-[1.03] transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative z-10 p-6 sm:p-8 border border-neutral-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 relative mb-6">
                <img src="/logo/leave-pink.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Improve Productivity</h3>
              <p className="text-neutral-600 mb-6">
                Reduce absenteeism and improve work focus through menstrual health support.
              </p>
              <div className="space-y-3 border-t border-neutral-100 pt-4">
                {[
                  "Reduce menstrual-related absences",
                  "Enhance work performance",
                  "Support employee health",
                ].map((item, i) => (
                  <div key={i} className="flex items-start group/item">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0 group-hover/item:text-secondary transition-colors" />
                    <span className="text-neutral-700 group-hover/item:text-secondary transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group md:mt-16 lg:mt-24">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl transform group-hover:scale-[1.03] transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative z-10 p-6 sm:p-8 border border-neutral-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 relative mb-6">
                <img src="/logo/leave-white.svg" alt="Leaf background" className="w-full h-full absolute inset-0" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Easy Implementation</h3>
              <p className="text-neutral-600 mb-6">
                Seamlessly integrate into existing benefits systems with minimal administrative burden.
              </p>
              <div className="space-y-3 border-t border-neutral-100 pt-4">
                {["Quick setup process", "Dedicated implementation support", "Minimal HR resource requirements"].map(
                  (item, i) => (
                    <div key={i} className="flex items-start group/item">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0 group-hover/item:text-secondary transition-colors" />
                      <span className="text-neutral-700 group-hover/item:text-secondary transition-colors">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部波浪分隔线 */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#f8f9fa"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,53.3C672,53,768,75,864,90.7C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
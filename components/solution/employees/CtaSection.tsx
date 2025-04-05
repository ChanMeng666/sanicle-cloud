"use client"

import { Button } from "@/components/ui/button"
import { Users, Send, ChevronRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-pale via-beige-light to-primary-pale/40 z-0"></div>
      
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      
      {/* 波点背景 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.05] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.05] z-0"></div>
      
      {/* 顶部过渡元素 */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-0"></div>
      
      {/* 装饰性圆形 */}
      <div className="absolute top-0 right-0 opacity-[0.07] z-0">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="25" r="60" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 opacity-[0.07] transform rotate-180 z-0">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="25" r="60" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* 装饰叶片元素 */}
      <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] opacity-[0.07] transform rotate-12 z-0">
        <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] opacity-[0.06] transform -rotate-12 z-0">
        <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      
      {/* 彩色蜡笔线条装饰 */}
      <div className="absolute top-[10%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,0 400,8 600,4 C800,0 1000,6 1200,4" stroke="#0ea5e9" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-neutral-800">
              <span className="relative inline-block">
                Let's Enhance Women's Health Benefits Together
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 rounded-full"></span>
              </span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Through Sanicle.cloud, you can access unprecedented health support and resources to improve your work-life balance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary/10 shadow-lg transform transition-transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-pale flex items-center justify-center mr-4 shadow-sm">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800">Sign Up Now</h3>
                    <p className="text-neutral-500 text-sm">Start your health journey in minutes</p>
                  </div>
                </div>

                <p className="text-neutral-600 mb-6">
                  If your employer already offers Sanicle.cloud as a benefit, you can register immediately and start using our comprehensive health services.
                </p>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all group">
                  Create Account <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary/10 shadow-lg transform transition-transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary-light/20 flex items-center justify-center mr-4 shadow-sm">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800">Recommend to Your Company</h3>
                    <p className="text-neutral-500 text-sm">Help all employees get better benefits</p>
                  </div>
                </div>

                <p className="text-neutral-600 mb-6">
                  Your employer doesn't offer Sanicle.cloud benefits yet? Help us connect with your HR department to secure this important benefit for you and your colleagues.
                </p>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all group">
                  Send Recommendation <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 md:mt-16">
            <p className="text-neutral-600 text-sm md:text-base mb-4">Trusted by companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="h-8 w-20 bg-primary/10 rounded-md"></div>
              <div className="h-8 w-20 bg-primary/10 rounded-md"></div>
              <div className="h-8 w-20 bg-primary/10 rounded-md"></div>
              <div className="h-8 w-20 bg-primary/10 rounded-md"></div>
              <div className="h-8 w-20 bg-primary/10 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部装饰线条 */}
      <div className="absolute bottom-[15%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,8 400,0 600,4 C800,8 1000,2 1200,4" stroke="#f472b6" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
} 
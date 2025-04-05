"use client"

import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Sanicle.cloud has transformed how our company handles women's health benefits. The platform is intuitive and user-friendly, and our employees love it. Since implementing this program, we have seen significant improvements in employee satisfaction and retention rates.",
      name: "Sarah Johnson",
      title: "HR Director, Tech Solutions Inc.",
      initials: "SJ",
      bgColor: "bg-secondary/10",
      accentColor: "text-secondary",
      avatarBg: "bg-primary",
    },
    {
      quote: "The comprehensive approach to menstrual health has significantly improved workplace wellness for our female employees, reducing absenteeism.",
      name: "Michael Chen",
      title: "Benefits Manager, Global Enterprises",
      initials: "MC",
      bgColor: "bg-primary/10",
      accentColor: "text-primary",
      avatarBg: "bg-secondary",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white relative -mt-10 z-20 overflow-hidden">
      {/* 顶部过渡色块 */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-neutral-50/80 to-transparent"></div>
      
      {/* 背景元素 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      {/* 大型引号装饰 */}
      <div className="absolute top-40 left-20 text-primary/5 hidden md:block">
        <Quote className="h-40 w-40 -scale-x-100" />
      </div>
      <div className="absolute bottom-40 right-20 text-secondary/5 hidden md:block">
        <Quote className="h-40 w-40" />
      </div>
      
      {/* 装饰性叶片元素 */}
      <div className="absolute top-1/4 right-0 -mr-20 opacity-10">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-80 h-80 transform rotate-45" />
      </div>
      <div className="absolute bottom-1/4 left-0 -ml-20 opacity-10">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-64 h-64 transform -rotate-45" />
      </div>
      
      {/* 彩色蜡笔线条装饰 */}
      <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-teal-100 via-secondary/20 to-teal-100 opacity-30"></div>
      <div className="absolute bottom-12 left-0 right-0 h-px bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 opacity-30"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800">Customer Testimonials</h2>
            <p className="text-neutral-600 mt-2">
              Hear from organizations that have transformed their workplace through Sanicle.cloud.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 border-primary text-primary hover:bg-primary/5 rounded-full">
            View All Testimonials
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <div className={`${testimonials[0].bgColor} p-8 rounded-lg relative shadow-sm border border-neutral-100`}>
              <div className={`absolute -top-4 -left-4 ${testimonials[0].accentColor} text-6xl opacity-20`}>"</div>
              <div className="relative z-10">
                <p className="text-lg text-neutral-800 italic mb-6">
                  "{testimonials[0].quote}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 relative ${testimonials[0].avatarBg} text-white flex items-center justify-center mr-4 overflow-hidden rounded-full shadow-sm`}>
                    <img 
                      src="/logo/leave-white.svg" 
                      alt="Leaf background" 
                      className="absolute w-full h-full opacity-30"
                    />
                    <span className="relative z-10">{testimonials[0].initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">{testimonials[0].name}</p>
                    <p className="text-sm text-neutral-500">{testimonials[0].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:mt-16">
            <div className={`${testimonials[1].bgColor} p-8 rounded-lg relative shadow-sm border border-neutral-100`}>
              <div className={`absolute -top-4 -left-4 ${testimonials[1].accentColor} text-6xl opacity-20`}>"</div>
              <div className="relative z-10">
                <p className="text-lg text-neutral-800 italic mb-6">
                  "{testimonials[1].quote}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 relative ${testimonials[1].avatarBg} text-white flex items-center justify-center mr-4 overflow-hidden rounded-full shadow-sm`}>
                    <img 
                      src="/logo/leave-white.svg" 
                      alt="Leaf background" 
                      className="absolute w-full h-full opacity-30"
                    />
                    <span className="relative z-10">{testimonials[1].initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">{testimonials[1].name}</p>
                    <p className="text-sm text-neutral-500">{testimonials[1].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部波浪分隔线 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="rgba(22, 125, 131, 0.1)"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
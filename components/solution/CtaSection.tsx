"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-teal-700 text-white relative -mt-10 z-20 overflow-hidden">
      {/* 背景网格图案 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
      
      {/* 装饰叶片元素 */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 transform rotate-180">
        <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
        <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      
      {/* 荧光效果 */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-teal-300 rounded-full opacity-10 blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary rounded-full opacity-10 blur-[100px]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 p-1 rounded-full w-fit mx-auto mb-6">
            <div className="bg-white/20 px-4 py-1 rounded-full">
              <span className="text-white text-sm font-medium">Join with over 500 companies</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center">
            Ready to transform your workplace benefits?
          </h2>

          <p className="text-white/80 mb-8 text-center text-lg">
            Join the growing number of forward-thinking companies that prioritize women's health in the workplace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
              Schedule a Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-white text-sm">No credit card required</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-white text-sm">14-day free trial</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-white text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部波浪装饰 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,26.7C960,32,1056,64,1152,80C1248,96,1344,96,1392,96L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
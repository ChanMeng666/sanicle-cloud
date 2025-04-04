"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, Calendar } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#167d83] to-[#0e5a5f] text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white rounded-full opacity-5 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-white rounded-full opacity-5 blur-xl"></div>

      {/* 漂浮图标 */}
      <div className="absolute top-1/4 left-1/5 w-10 h-10 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center animate-float">
        <Heart className="h-5 w-5 sm:h-8 sm:w-8 text-white/30" />
      </div>
      <div className="absolute bottom-1/3 right-1/5 w-12 h-12 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center animate-float-slow">
        <Shield className="h-6 w-6 sm:h-10 sm:w-10 text-white/30" />
      </div>
      <div className="absolute top-2/3 left-1/3 w-8 h-8 sm:w-14 sm:h-14 bg-white/10 rounded-full flex items-center justify-center animate-float-reverse">
        <Calendar className="h-4 w-4 sm:h-7 sm:w-7 text-white/30" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            <span className="mr-2">🚀</span> 轻松开始使用
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            今天就改变您的<span className="text-[#7ac8cd]">工作场所健康</span>
          </h2>

          <p className="text-white/80 mb-6 md:mb-8 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            加入越来越多重视工作场所女性健康的前瞻性公司行列。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
            <Button size="lg" className="w-full sm:w-auto bg-white text-[#167d83] hover:bg-white/90 rounded-full px-6 sm:px-8 shadow-lg">
              立即开始 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white/10 rounded-full px-6 sm:px-8"
            >
              预约演示
            </Button>
          </div>

          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-white text-xs sm:text-sm">无需信用卡</span>
            </div>
            <div className="bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-white text-xs sm:text-sm">14天免费试用</span>
            </div>
            <div className="bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-white text-xs sm:text-sm">随时取消</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部波浪 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,26.7C960,32,1056,64,1152,80C1248,96,1344,96,1392,96L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
      
      {/* CSS动画 */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
} 
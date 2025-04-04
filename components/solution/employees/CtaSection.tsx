"use client"

import { Button } from "@/components/ui/button"
import { Users, Send, ChevronRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-teal-DEFAULT to-teal-deep text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="25" r="60" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 opacity-10 transform rotate-180">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="25" r="60" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="75" cy="25" r="20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">让我们一起提升女性健康福利</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              通过Sanicle.cloud，您可以获得前所未有的健康支持和资源，改善您的工作生活平衡。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 shadow-lg transform transition-transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">立即注册</h3>
                    <p className="text-white/70 text-sm">在几分钟内开始您的健康之旅</p>
                  </div>
                </div>

                <p className="text-white/80 mb-6">
                  如果您的雇主已经提供Sanicle.cloud作为福利，您可以立即注册并开始使用我们全面的健康服务。
                </p>

                <Button className="w-full bg-white text-teal-DEFAULT hover:bg-white/90 group">
                  创建账户 <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 shadow-lg transform transition-transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">向您的公司推荐</h3>
                    <p className="text-white/70 text-sm">帮助所有员工获得更好的福利</p>
                  </div>
                </div>

                <p className="text-white/80 mb-6">
                  您的雇主尚未提供Sanicle.cloud福利？帮助我们联系您的人力资源部门，为您和您的同事争取这项重要的福利。
                </p>

                <Button className="w-full bg-coral-DEFAULT hover:bg-coral-DEFAULT/90 text-white group">
                  发送推荐 <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 md:mt-16">
            <p className="text-white/70 text-sm md:text-base mb-4">已受到全球众多企业的信任</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="h-8 w-20 bg-white/20 rounded-md"></div>
              <div className="h-8 w-20 bg-white/20 rounded-md"></div>
              <div className="h-8 w-20 bg-white/20 rounded-md"></div>
              <div className="h-8 w-20 bg-white/20 rounded-md"></div>
              <div className="h-8 w-20 bg-white/20 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
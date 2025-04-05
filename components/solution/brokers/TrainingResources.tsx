"use client"

import { FileText, BookOpen, Briefcase } from "lucide-react"

export function TrainingResources() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white z-0"></div>
      
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      
      {/* 波点背景 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.05] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.05] z-0"></div>
      
      {/* 顶部过渡元素 */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary-pale/10 to-transparent z-0"></div>
      
      {/* 装饰叶片元素 */}
      <div className="absolute top-[10%] right-[5%] w-[180px] h-[180px] opacity-[0.07] transform rotate-12 z-0">
        <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      <div className="absolute bottom-[10%] left-[5%] w-[160px] h-[160px] opacity-[0.06] transform -rotate-12 z-0">
        <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      
      {/* 彩色蜡笔线条装饰 */}
      <div className="absolute top-[10%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,0 400,8 600,4 C800,0 1000,6 1200,4" stroke="#06b6d4" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-xs md:text-sm font-medium rounded-full mb-3 shadow-sm">
            Partner Resources
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 mb-3">
            <span className="relative inline-block">
              Training and Support
              <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/20 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive resources and training to ensure you have everything needed for success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-primary/5 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-primary to-primary-light"></div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary-pale flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 shadow-md">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-neutral-800 text-center mb-4">Sales Toolkit</h3>
              <p className="text-neutral-600 text-center mb-6 text-sm md:text-base leading-relaxed">
                Get all the resources you need to effectively present and sell Sanicle.cloud to your clients.
              </p>
              <div className="space-y-3">
                {[
                  "Sales presentations and scripts",
                  "Client proposal templates",
                  "FAQs and objection handling",
                  "Competitive positioning guide",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-neutral-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-secondary/5 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-secondary to-secondary/80"></div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 shadow-md">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-neutral-800 text-center mb-4">Learning Center</h3>
              <p className="text-neutral-600 text-center mb-6 text-sm md:text-base leading-relaxed">
                Enhance your expertise through our rich training resources and certification programs.
              </p>
              <div className="space-y-3">
                {[
                  "Online courses and webinars",
                  "Partner certification program",
                  "Product knowledge training",
                  "Industry trends and insights",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                    <span className="text-neutral-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-primary/5 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group sm:col-span-2 lg:col-span-1">
            <div className="h-2 bg-gradient-to-r from-primary to-primary-light"></div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary-pale flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 shadow-md">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-neutral-800 text-center mb-4">Business Support</h3>
              <p className="text-neutral-600 text-center mb-6 text-sm md:text-base leading-relaxed">
                Get professional business and technical support to ensure success for you and your clients.
              </p>
              <div className="space-y-3">
                {[
                  "Dedicated partner manager",
                  "Client implementation assistance",
                  "Marketing and co-branding support",
                  "Automated reporting and commission tracking",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-neutral-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 波浪形分隔线 - 向下一部分过渡 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L60,64C120,64,240,64,360,69.3C480,75,600,85,720,80C840,75,960,53,1080,53.3C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
      
      {/* 彩色蜡笔线条装饰 - 底部 */}
      <div className="absolute bottom-[10%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,8 400,0 600,4 C800,8 1000,2 1200,4" stroke="#f472b6" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
} 
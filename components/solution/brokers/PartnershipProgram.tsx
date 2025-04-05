"use client"

import { Handshake } from "lucide-react"

export function PartnershipProgram() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-pale/20 to-primary-pale/30 z-0"></div>
      
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      
      {/* 波点背景 */}
      <div className="absolute top-1/3 right-1/6 w-72 h-72 bg-pattern-dots opacity-[0.06] rounded-full z-0"></div>
      <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-pattern-dots opacity-[0.06] rounded-full z-0"></div>
      
      {/* 顶部过渡元素 */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-0"></div>
      
      {/* 装饰性圆形 */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary rounded-full opacity-[0.03] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary rounded-full opacity-[0.03] transform -translate-x-1/3 translate-y-1/3 z-0"></div>
      
      {/* 装饰叶片元素 */}
      <div className="absolute top-1/4 right-[10%] w-[150px] h-[150px] opacity-[0.08] transform rotate-12 z-0">
        <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      <div className="absolute bottom-1/4 left-[10%] w-[120px] h-[120px] opacity-[0.08] transform -rotate-12 z-0">
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
          <span className="inline-block px-4 py-1.5 bg-white text-primary text-xs md:text-sm font-medium rounded-full mb-3 shadow-sm">
            Partnership Options
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 mb-3">
            <span className="relative inline-block">
              Our Partnership Programs
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Join our network of benefits brokers and consultants to bring innovative menstrual health solutions to your clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
            <div className="bg-secondary/10 p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-neutral-800">Referral Partner</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/10 flex items-center justify-center transform transition-transform duration-500 hover:rotate-12 shadow-md">
                  <Handshake className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
                </div>
              </div>

              <p className="text-neutral-600 mb-6 text-center text-sm md:text-base">
                Ideal for brokers who want to refer clients to Sanicle.cloud, while we handle implementation and management.
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Competitive referral fees",
                  "Minimal time investment",
                  "Co-branded marketing materials",
                  "Regular updates on client status",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                    <span className="text-neutral-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-medium text-sm md:text-base shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Apply to Become a Referral Partner
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
            <div className="bg-primary/10 p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-neutral-800">Channel Partner</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center transform transition-transform duration-500 hover:rotate-12 shadow-md">
                  <Handshake className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                </div>
              </div>

              <p className="text-neutral-600 mb-6 text-center text-sm md:text-base">
                Ideal for brokers who want to fully integrate Sanicle.cloud into their product portfolio and actively participate in the sales process.
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Higher commission rates",
                  "Customized sales support",
                  "Joint marketing campaigns",
                  "Dedicated client success manager",
                  "Priority product roadmap access",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-neutral-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white rounded-full font-medium text-sm md:text-base shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Apply to Become a Channel Partner
                </button>
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
            d="M0,96L60,85.3C120,75,240,53,360,64C480,75,600,117,720,128C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
      
      {/* 彩色蜡笔线条装饰 - 底部 */}
      <div className="absolute bottom-[15%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,8 400,0 600,4 C800,8 1000,2 1200,4" stroke="#f472b6" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
} 
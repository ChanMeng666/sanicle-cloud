"use client"

import { Shield } from "lucide-react"

export function PrivacySection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* 顶部过渡元素 */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/70 to-transparent z-0"></div>
      
      {/* 背景图案 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.05] z-0 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pattern-dots opacity-[0.05] z-0 rounded-tr-full"></div>
      
      {/* 背景装饰元素 */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-pale/20 rounded-full z-0"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary/10 rounded-full z-0"></div>
      
      {/* 装饰叶片元素 */}
      <div className="absolute top-1/4 right-10 w-[180px] h-[180px] opacity-[0.06] transform rotate-12 z-0">
        <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      <div className="absolute bottom-1/4 left-10 w-[160px] h-[160px] opacity-[0.05] transform -rotate-12 z-0">
        <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      
      {/* 彩色蜡笔线条装饰 */}
      <div className="absolute top-[5%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,0 400,8 600,4 C800,0 1000,6 1200,4" stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-pale text-primary text-sm font-medium mb-4 shadow-sm">
              HIPAA Compliant
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 mb-4">
              <span className="relative inline-block">
                Privacy is Our Commitment
                <span className="absolute bottom-2 left-0 w-full h-3 bg-teal-pale/60 -z-10 rounded-full"></span>
              </span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Your health data remains private and secure. We use state-of-the-art encryption technology and strict access controls to protect your information.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 relative">
            {[
              {
                title: "HIPAA Compliant",
                description: "Our platform meets the highest standards for medical data protection.",
              },
              {
                title: "Secure Encryption",
                description: "All your data is encrypted and securely stored in the cloud.",
              },
              {
                title: "User Control",
                description: "You decide who can access your data and when it can be deleted.",
              },
              {
                title: "Not Shared with Employers",
                description: "Your data is never shared with your employer without your explicit consent.",
              },
              {
                title: "Multi-factor Authentication",
                description: "Additional security measures ensure only you can access your account.",
              },
              {
                title: "Anonymous Insights",
                description: "Any data used for research is completely anonymous and only used with consent.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-5 md:p-6 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-pale to-primary-light flex items-center justify-center mb-4 shadow-sm">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
            
            {/* 装饰圆环 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-primary/10 rounded-full -z-10 animate-pulse-opacity"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-secondary/10 rounded-full -z-10 animate-pulse-opacity" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary/5 rounded-full -z-10 animate-pulse-opacity" style={{ animationDelay: "2s" }}></div>
          </div>
          
          {/* 底部信息 */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-sm text-neutral-500 max-w-xl mx-auto">
              We comply with strict data protection regulations, including HIPAA, GDPR, and CCPA. View our
              <a href="#" className="text-primary hover:text-primary-deep underline mx-1">Privacy Policy</a>
              to learn more.
            </p>
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
      <div className="absolute bottom-[15%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,8 400,0 600,4 C800,8 1000,2 1200,4" stroke="#f472b6" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
} 
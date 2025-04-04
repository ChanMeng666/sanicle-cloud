"use client"

export function DemoHero() {
  return (
    <section className="w-full bg-gradient-to-r from-[#167d83] to-[#22c0c7] py-16 md:py-24 lg:py-32 text-white relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="md:flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              预约专属演示
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 leading-tight">
              亲身体验<span className="text-[#fef6e9]">Sanicle.cloud</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
              预约个性化演示，了解我们的平台如何改变您的工作场所福利并支持女性健康。
            </p>
          </div>
          
          <div className="hidden md:block md:flex-1 md:ml-10 lg:ml-16">
            <div className="relative w-full aspect-[4/3] bg-white/10 rounded-lg backdrop-blur-sm overflow-hidden shadow-xl border border-white/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                  <path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9z"></path>
                  <path d="M9 8a1 1 0 0 1 1.5-.7l5 3a1 1 0 0 1 0 1.8l-5 3.5a1 1 0 0 1-1.5-.7V8z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

export function FounderQuote() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative -mt-20 z-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-10 -left-10 text-9xl text-[#167d83]/10 font-serif">"</div>
          <div className="absolute -bottom-10 -right-10 text-9xl text-[#167d83]/10 font-serif">"</div>

          <div className="bg-[#fef6e9] rounded-2xl p-8 md:p-12 shadow-xl relative z-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#EE4C23]/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-xl w-48 h-48 mx-auto">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="陈博士"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-[#2c3e50]">陈博士</h3>
                    <p className="text-[#EE4C23]">创始人 & CEO</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-8">
                <p className="text-xl md:text-2xl text-[#2c3e50] italic mb-6">
                  "在医疗领域工作多年后，亲眼目睹了月经健康问题如何影响女性的职业生活，我们着手创建一个解决方案，既能解决这些挑战，同时又能为雇主提供创新的福利选择。"
                </p>

                <p className="text-[#7f8c8d]">
                  我们的使命是通过使月经健康福利变得可及、全面且无歧视，从而改变工作场所的健康环境。我们相信，当女性获得所需的支持来管理月经健康时，每个人都会受益。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 底部波浪形分隔线 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#f8f9fa"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
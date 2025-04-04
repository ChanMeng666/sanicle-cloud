"use client"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#167d83]/5 pattern-dots"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
              成功案例
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">用户评价</h2>
            <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
              听听已经体验过Sanicle.cloud福利的员工怎么说。
            </p>
          </div>

          <div className="relative">
            {/* 大引号标记 */}
            <div className="absolute -top-10 -left-10 text-9xl text-[#167d83]/10 font-serif">"</div>
            <div className="absolute -bottom-10 -right-10 text-9xl text-[#167d83]/10 font-serif">"</div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 md:row-span-1 bg-white rounded-2xl shadow-lg p-8 transform md:translate-y-12 z-20">
                <p className="text-lg text-[#2c3e50] italic mb-6">
                  "周期追踪和个性化洞察非常有帮助。我可以更好地围绕我的周期安排工作日程，产品配送也非常方便。"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-4 font-bold">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">张晓丽</p>
                    <p className="text-sm text-[#7f8c8d]">市场经理</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 md:col-start-8 md:row-start-1 bg-[#e6f5f6] rounded-2xl shadow-lg p-8 z-10">
                <p className="text-lg text-[#2c3e50] italic mb-6">
                  "获取关于多囊卵巢综合症的教育资源改变了我的生活。我终于更好地了解了自己的情况。"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#167d83] flex items-center justify-center mr-4 font-bold">
                    AT
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">李梅</p>
                    <p className="text-sm text-[#7f8c8d]">软件工程师</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 md:col-start-2 md:row-start-2 bg-[#fef6e9] rounded-2xl shadow-lg p-8 transform md:-translate-y-12 z-10">
                <p className="text-lg text-[#2c3e50] italic mb-6">
                  "专家咨询非常宝贵。我能够在不请假的情况下与医疗服务提供者讨论我的问题。"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#EE4C23] flex items-center justify-center mr-4 font-bold">
                    SL
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">王慧</p>
                    <p className="text-sm text-[#7f8c8d]">人力资源专员</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
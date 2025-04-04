"use client"

import { Button } from "@/components/ui/button"

export function CompanyCultureSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
              我们的文化
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">在Sanicle.cloud的生活</h2>
            <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
              体验重视创新、包容性和工作生活平衡的工作环境。
            </p>
          </div>

          <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[600px]">
            <div className="col-span-8 row-span-1 relative rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=800"
                alt="团队协作"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">协作环境</h3>
                  <p className="text-white/80">我们共同解决复杂问题。</p>
                </div>
              </div>
            </div>

            <div className="col-span-4 row-span-1 relative rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="远程工作"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">远程优先</h3>
                  <p className="text-white/80">随时随地工作。</p>
                </div>
              </div>
            </div>

            <div className="col-span-4 row-span-1 relative rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="学习课程"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">持续学习</h3>
                  <p className="text-white/80">成长机会。</p>
                </div>
              </div>
            </div>

            <div className="col-span-8 row-span-1 relative rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=800"
                alt="团队活动"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">团队聚会</h3>
                  <p className="text-white/80">我们亲自联系以建立关系并庆祝成功。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">了解更多关于我们的文化</Button>
          </div>
        </div>
      </div>
    </section>
  )
} 
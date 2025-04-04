"use client"

import { Button } from "@/components/ui/button"

export function EmployeeStoriesSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
              员工故事
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">认识我们的团队</h2>
            <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
              听听那些让Sanicle.cloud成为绝佳工作场所的人们的故事。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "张思琪",
                role: "高级产品经理",
                story:
                  "我加入Sanicle.cloud是因为我想从事能真正改变人们生活的产品。每天，我都能与才华横溢的人一起协作，他们热衷于改善工作场所中的女性健康。",
                image: "/placeholder.svg?height=400&width=300",
                color: "from-[#167d83]",
              },
              {
                name: "李明",
                role: "前端工程师",
                story:
                  "这里的工程文化令人惊叹。我们被鼓励创新并解决有意义的问题，同时保持健康的工作生活平衡。自从加入团队以来，我作为工程师的成长非常快。",
                image: "/placeholder.svg?height=400&width=300",
                color: "from-[#EE4C23]",
              },
              {
                name: "王晓燕",
                role: "客户成功负责人",
                story:
                  "我从未在一家公司工作过，他们如此深切地关心客户和员工。使命驱动的文化使每一天都变得有意义，我为我们所产生的影响感到自豪。",
                image: "/placeholder.svg?height=400&width=300",
                color: "from-[#167d83]",
              },
            ].map((person, index) => (
              <div key={index} className="relative group h-[500px] rounded-xl overflow-hidden">
                <img
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className={`absolute inset-0 bg-gradient-to-t ${person.color} to-transparent opacity-90`}></div>

                <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-500 group-hover:-translate-y-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{person.name}</h3>
                  <p className="text-white/80 mb-4">{person.role}</p>
                  <p className="text-white/90">{person.story}</p>

                  <Button className="mt-4 bg-white text-[#167d83] hover:bg-white/90">阅读完整故事</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
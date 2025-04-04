"use client"

import { Button } from "@/components/ui/button"
import { 
  HeartPulse, 
  Laptop, 
  GraduationCap, 
  CalendarDays, 
  PiggyBank, 
  Bike,
  Leaf,
  Baby,
  Globe
} from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <HeartPulse className="h-6 w-6 text-[#EE4C23]" />,
      title: "全面医疗保险",
      description: "包括健康、牙科和视力保险，以及专门的生殖和女性健康福利。",
    },
    {
      icon: <Laptop className="h-6 w-6 text-[#EE4C23]" />,
      title: "远程工作灵活性",
      description: "混合工作环境，支持在家和办公室工作的平衡。",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-[#EE4C23]" />,
      title: "持续学习预算",
      description: "年度学习预算，用于课程、研讨会和专业发展。",
    },
    {
      icon: <CalendarDays className="h-6 w-6 text-[#EE4C23]" />,
      title: "无限带薪休假",
      description: "灵活的休假政策，让你可以在需要时休息和恢复活力。",
    },
    {
      icon: <PiggyBank className="h-6 w-6 text-[#EE4C23]" />,
      title: "有竞争力的薪酬",
      description: "与行业标准相当的薪酬，以及员工股权激励计划。",
    },
    {
      icon: <Bike className="h-6 w-6 text-[#EE4C23]" />,
      title: "健康与福利",
      description: "健身房会员资格补贴，以及身心健康应用程序订阅。",
    },
    {
      icon: <Leaf className="h-6 w-6 text-[#EE4C23]" />,
      title: "带薪志愿服务",
      description: "每年有带薪志愿服务时间，用于支持你关心的事业。",
    },
    {
      icon: <Baby className="h-6 w-6 text-[#EE4C23]" />,
      title: "育儿假福利",
      description: "慷慨的带薪产假和陪产假政策，支持新父母。",
    },
    {
      icon: <Globe className="h-6 w-6 text-[#EE4C23]" />,
      title: "年度团队旅行",
      description: "公司资助的旅行，促进团队联系和文化交流。",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fff0eb] text-[#EE4C23] text-sm font-medium mb-6">
            员工福利
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#2c3e50] tracking-tight mb-6">
            我们为员工提供的
            <span className="relative inline-block mx-2">
              福利
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#167d83]/20 -rotate-1 rounded"></span>
            </span>
            超乎想象
          </h2>
          
          <p className="text-lg text-[#7f8c8d] max-w-2xl mx-auto leading-relaxed">
            在Sanicle.cloud，我们理解员工的健康和幸福对于个人和组织成功的重要性。我们提供全面的福利和津贴，支持您的整体健康、个人成长和职业发展。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#167d83]/20 hover:translate-y-[-4px] group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#167d83]/5 to-[#EE4C23]/5 rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-3 rounded-xl bg-[#fff6f4] text-[#EE4C23] inline-block mb-5 group-hover:bg-[#EE4C23] group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3 group-hover:text-[#167d83] transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-[#7f8c8d]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-[#167d83] rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#167d83] to-[#0e5a5f]"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">您准备好加入我们了吗？</h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                浏览当前的职位空缺，找到适合您技能和激情的理想工作。
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-[#167d83] hover:bg-gray-100 shadow-lg">
                  浏览职位
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  了解更多福利
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
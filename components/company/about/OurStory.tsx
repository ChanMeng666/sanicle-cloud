"use client"

import { Sparkles, Star, Globe, Users, Award } from "lucide-react"

export function OurStory() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative -mt-10 z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
            我们的旅程
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">Sanicle.cloud的故事</h2>
          <p className="text-lg text-[#7f8c8d]">从理念到创新：我们如何改变工作场所健康。</p>
        </div>

        <div className="relative">
          {/* 时间线 */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-[#e6f5f6] md:transform md:-translate-x-1/2"></div>

          {[
            {
              year: "2022",
              title: "起步",
              description:
                "Sanicle.cloud由陈博士和一支医疗专业人士及技术专家团队创立，他们认识到工作场所福利中一个关键的空白：全面支持女性月经健康。",
              icon: <Sparkles className="h-6 w-6 text-white" />,
              position: "left",
            },
            {
              year: "2022",
              title: "种子轮融资",
              description:
                "获得了初始投资，用于开发平台和建立核心团队，使我们能够将愿景变为现实。",
              icon: <Star className="h-6 w-6 text-white" />,
              position: "right",
            },
            {
              year: "2023",
              title: "平台发布",
              description:
                "Sanicle.cloud平台正式发布，与我们的首批企业客户合作，标志着我们旅程中的一个重要里程碑。",
              icon: <Globe className="h-6 w-6 text-white" />,
              position: "left",
            },
            {
              year: "2023",
              title: "扩张",
              description:
                "发展到服务超过50家公司，团队扩大到25名成员，拓展我们在多个行业的影响力。",
              icon: <Users className="h-6 w-6 text-white" />,
              position: "right",
            },
            {
              year: "2024",
              title: "A轮融资",
              description:
                "筹集了大量资金，用于加速增长和增强平台功能，为我们的下一阶段发展奠定基础。",
              icon: <Award className="h-6 w-6 text-white" />,
              position: "left",
            },
          ].map((milestone, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-24 pl-10 md:pl-0 ${
                milestone.position === "left"
                  ? "md:pr-12 md:text-right md:ml-0 md:mr-auto"
                  : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2`}
            >
              {/* 时间线点 */}
              <div
                className={`absolute left-0 md:left-auto ${
                  milestone.position === "left" ? "md:right-0" : "md:left-0"
                } top-0 w-10 h-10 rounded-full bg-[#167d83] flex items-center justify-center z-10 transform ${
                  milestone.position === "left" ? "md:translate-x-1/2" : "md:-translate-x-1/2"
                }`}
              >
                {milestone.icon}
              </div>

              {/* 内容 */}
              <div
                className={`bg-white p-6 rounded-xl shadow-lg ${
                  milestone.position === "left" ? "md:rounded-r-none" : "md:rounded-l-none"
                } transform transition-transform duration-500 hover:-translate-y-2`}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-2">{milestone.title}</h3>
                <p className="text-[#7f8c8d]">{milestone.description}</p>
              </div>

              {/* 移动端连接线 */}
              <div className="absolute left-5 top-10 bottom-0 w-1 bg-[#e6f5f6] md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 波浪形分隔线 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
"use client"

import { Heart, Users, Award } from "lucide-react"

export function OurValues() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative -mt-10 z-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
            我们的价值观
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">我们所坚持的</h2>
          <p className="text-lg text-[#7f8c8d]">指导Sanicle.cloud一切行动的原则。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Heart className="h-10 w-10 text-white" />,
              title: "同理心与理解",
              description:
                "我们以同情心和对工作场所独特挑战的深刻理解来处理女性健康问题。",
              color: "from-[#EE4C23] to-[#d43d18]",
            },
            {
              icon: <Users className="h-10 w-10 text-white" />,
              title: "包容性与多样性",
              description:
                "我们相信创造支持所有女性的解决方案，认可经验和需求的多样性。",
              color: "from-[#167d83] to-[#0e5a5f]",
            },
            {
              icon: <Award className="h-10 w-10 text-white" />,
              title: "创新与卓越",
              description:
                "我们不断突破医疗技术的可能性边界，提供卓越的解决方案。",
              color: "from-[#EE4C23] to-[#d43d18]",
            },
          ].map((value, index) => (
            <div key={index} className="perspective-1000">
              <div className="relative h-[400px] w-full transform-style-3d transition-transform duration-1000 hover:rotate-y-180">
                {/* 卡片正面 */}
                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl">
                  <div
                    className={`bg-gradient-to-br ${value.color} h-full w-full p-8 flex flex-col items-center justify-center text-center`}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-white/90">{value.description}</p>
                  </div>
                </div>

                {/* 卡片背面 */}
                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl rotate-y-180">
                  <div className="bg-white h-full w-full p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-bold text-[#2c3e50] mb-4">{value.title}</h3>
                    <p className="text-[#7f8c8d] mb-6">{value.description}</p>
                    <p className="text-[#7f8c8d] italic">
                      "这一价值观指导我们的产品开发、客户服务和团队文化方法。"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 波浪形分隔线 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#f8f9fa"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
"use client"

import { Button } from "@/components/ui/button"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Sanicle.cloud已经改变了我们公司对女性健康福利的处理方式。该平台直观易用，我们的员工都很喜欢。自从实施该计划以来，我们的员工满意度和留任率都有了显著提高。",
      name: "Sarah Johnson",
      title: "人力资源总监，Tech Solutions Inc.",
      initials: "SJ",
      bgColor: "bg-[#fef6e9]",
      accentColor: "text-[#EE4C23]",
      avatarBg: "bg-[#167d83]",
    },
    {
      quote: "对月经健康的全面处理方法显著改善了我们女性员工的工作场所健康状况，减少了缺勤率。",
      name: "Michael Chen",
      title: "福利经理，Global Enterprises",
      initials: "MC",
      bgColor: "bg-[#e6f5f6]",
      accentColor: "text-[#167d83]",
      avatarBg: "bg-[#EE4C23]",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white relative -mt-10 z-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">客户评价</h2>
            <p className="text-[#7f8c8d] mt-2">
              听听那些通过Sanicle.cloud改变了工作场所的组织的声音。
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
            查看所有评价
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <div className={`${testimonials[0].bgColor} p-8 rounded-lg relative`}>
              <div className={`absolute -top-4 -left-4 ${testimonials[0].accentColor} text-6xl opacity-20`}>"</div>
              <div className="relative z-10">
                <p className="text-lg text-[#2c3e50] italic mb-6">
                  "{testimonials[0].quote}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full ${testimonials[0].avatarBg} text-white flex items-center justify-center mr-4`}>
                    {testimonials[0].initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">{testimonials[0].name}</p>
                    <p className="text-sm text-[#7f8c8d]">{testimonials[0].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:mt-16">
            <div className={`${testimonials[1].bgColor} p-8 rounded-lg relative`}>
              <div className={`absolute -top-4 -left-4 ${testimonials[1].accentColor} text-6xl opacity-20`}>"</div>
              <div className="relative z-10">
                <p className="text-lg text-[#2c3e50] italic mb-6">
                  "{testimonials[1].quote}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full ${testimonials[1].avatarBg} text-white flex items-center justify-center mr-4`}>
                    {testimonials[1].initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">{testimonials[1].name}</p>
                    <p className="text-sm text-[#7f8c8d]">{testimonials[1].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 在Testimonials底部添加波浪形分隔线 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#167d83"
            fillOpacity="0.3"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
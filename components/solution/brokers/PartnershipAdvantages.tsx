"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, DollarSign, BarChart, Handshake, ChevronRight } from "lucide-react"

export function PartnershipAdvantages() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* 顶部过渡渐变 */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-beige-light/10 to-transparent z-0"></div>
      
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      
      {/* 波点背景 */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-pattern-dots opacity-[0.06] rounded-full z-0"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-pattern-dots opacity-[0.06] rounded-full z-0"></div>
      
      {/* 装饰叶片元素 */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] opacity-[0.08] transform rotate-45 z-0">
        <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] opacity-[0.06] transform -rotate-45 z-0">
        <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      
      {/* 彩色蜡笔线条装饰 */}
      <div className="absolute top-[10%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,0 400,8 600,4 C800,0 1000,6 1200,4" stroke="#0ea5e9" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center mb-2">
              <div className="h-px w-6 bg-primary mr-2"></div>
              <span className="text-primary text-sm font-medium">Partnership Benefits</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 mb-3">
              <span className="relative inline-block">
                Partner Advantages
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 rounded-full"></span>
              </span>
            </h2>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              Learn how partnering with Sanicle.cloud enhances your benefits portfolio and grows your business.
            </p>
          </div>
          <Button variant="link" className="text-primary p-0 mt-4 md:mt-0 font-medium hover:text-primary-deep transition-colors duration-200 flex items-center">
            View All Benefits <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="revenue" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-xs sm:max-w-sm mx-auto mb-8 bg-neutral-100 p-1 rounded-lg">
            <TabsTrigger value="revenue" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow transition-all duration-200">Revenue</TabsTrigger>
            <TabsTrigger value="offerings" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow transition-all duration-200">Portfolio</TabsTrigger>
            <TabsTrigger value="support" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow transition-all duration-200">Support</TabsTrigger>
          </TabsList>

          <div className="overflow-hidden rounded-2xl">
            <TabsContent value="revenue" className="mt-0">
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/3 flex justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-pale flex items-center justify-center transform transition-transform duration-500 hover:scale-105 shadow-md">
                      <DollarSign className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-4 text-center lg:text-left">Revenue Opportunities</h3>
                    <p className="text-neutral-600 mb-6 text-center lg:text-left">
                      Expand your revenue streams with competitive commission structures and referral bonuses.
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {["Competitive commission rates", "Recurring revenue model", "Performance-based incentives"].map(
                        (item, i) => (
                          <div key={i} className="flex items-start bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-neutral-700 text-sm">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="offerings" className="mt-0">
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/3 flex justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-pale flex items-center justify-center transform transition-transform duration-500 hover:scale-105 shadow-md">
                      <BarChart className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-4 text-center lg:text-left">Differentiated Products</h3>
                    <p className="text-neutral-600 mb-6 text-center lg:text-left">
                      Stand out in the market with innovative benefits that address key but underserved needs.
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {["Unique value proposition", "Growing market demand", "Comprehensive solution"].map(
                        (item, i) => (
                          <div key={i} className="flex items-start bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-neutral-700 text-sm">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="mt-0">
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/3 flex justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-pale flex items-center justify-center transform transition-transform duration-500 hover:scale-105 shadow-md">
                      <Handshake className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-800 mb-4 text-center lg:text-left">Dedicated Support</h3>
                    <p className="text-neutral-600 mb-6 text-center lg:text-left">
                      Get comprehensive support to help you effectively sell and implement our solutions.
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {["Dedicated partner manager", "Sales and marketing resources", "Implementation assistance"].map(
                        (item, i) => (
                          <div key={i} className="flex items-start bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-neutral-700 text-sm">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
      {/* 波浪形分隔线 - 向下一部分过渡 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L60,53.3C120,75,240,117,360,122.7C480,128,600,96,720,85.3C840,75,960,85,1080,90.7C1200,96,1320,96,1380,96L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
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
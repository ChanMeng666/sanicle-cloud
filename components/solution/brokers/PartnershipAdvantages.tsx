"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, DollarSign, BarChart, Handshake, ChevronRight } from "lucide-react"

export function PartnershipAdvantages() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">合作伙伴优势</h2>
            <p className="text-[#7f8c8d] mt-2 max-w-2xl">
              了解与Sanicle.cloud合作如何增强您的福利产品组合并发展您的业务。
            </p>
          </div>
          <Button variant="link" className="text-[#167d83] p-0 mt-2 md:mt-0">
            查看所有优势 <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="revenue" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="revenue">收入</TabsTrigger>
            <TabsTrigger value="offerings">产品组合</TabsTrigger>
            <TabsTrigger value="support">支持</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="space-y-4">
            <div className="bg-[#f8f9fa] rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-20 h-20 rounded-full bg-[#e6f5f6] flex items-center justify-center mx-auto md:mx-0">
                    <DollarSign className="h-10 w-10 text-[#167d83]" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">收入机会</h3>
                  <p className="text-[#7f8c8d] mb-6">
                    通过有竞争力的佣金结构和推荐奖金扩大您的收入来源。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {["有竞争力的佣金率", "循环收入模式", "基于绩效的奖励"].map(
                      (item, i) => (
                        <div key={i} className="flex items-start bg-white p-3 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-[#2c3e50]">{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="offerings" className="space-y-4">
            <div className="bg-[#f8f9fa] rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-20 h-20 rounded-full bg-[#e6f5f6] flex items-center justify-center mx-auto md:mx-0">
                    <BarChart className="h-10 w-10 text-[#167d83]" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">差异化产品</h3>
                  <p className="text-[#7f8c8d] mb-6">
                    通过解决关键但服务不足的需求的创新福利，在市场中脱颖而出。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {["独特的价值主张", "不断增长的市场需求", "全面的解决方案"].map(
                      (item, i) => (
                        <div key={i} className="flex items-start bg-white p-3 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-[#2c3e50]">{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="support" className="space-y-4">
            <div className="bg-[#f8f9fa] rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-20 h-20 rounded-full bg-[#e6f5f6] flex items-center justify-center mx-auto md:mx-0">
                    <Handshake className="h-10 w-10 text-[#167d83]" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">专属支持</h3>
                  <p className="text-[#7f8c8d] mb-6">
                    获得全面支持，帮助您有效销售和实施我们的解决方案。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {["专属合作伙伴经理", "销售和营销资源", "实施协助"].map(
                      (item, i) => (
                        <div key={i} className="flex items-start bg-white p-3 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-[#2c3e50]">{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
} 
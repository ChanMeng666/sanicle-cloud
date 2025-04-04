"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-[#167d83] to-[#0e5a5f] text-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 lg:col-span-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              准备好成为我们的合作伙伴了吗？
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mb-8">
              加入Sanicle.cloud合作伙伴网络，为您的客户提供创新的福利解决方案，同时开拓新的收入来源并建立差异化的竞争优势。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-[#167d83] hover:bg-white/90">
                申请合作计划 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                安排演示
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-6 bg-white/10 rounded-lg p-6 md:p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">快速开始</h3>
              <p className="text-white/80">填写下面的表格，我们的合作伙伴团队将与您联系</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-1">
                  您的姓名
                </label>
                <input 
                  type="text" 
                  placeholder="输入您的全名"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-1">
                  公司名称
                </label>
                <input 
                  type="text" 
                  placeholder="输入您的公司名称"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-1">
                  电子邮件
                </label>
                <input 
                  type="email" 
                  placeholder="输入您的商务邮箱"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <Button className="w-full bg-white text-[#167d83] hover:bg-white/90 mt-2">
                提交申请
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
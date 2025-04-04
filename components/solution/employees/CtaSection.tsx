"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#167d83] text-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              准备好掌控您的月经健康了吗？
            </h2>
            <p className="text-white/80 mb-6">
              询问您的雇主有关Sanicle.cloud福利的信息，或者如果您的公司已经注册，请直接登录。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-white text-[#167d83] hover:bg-white/90">
                立即注册 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                请求信息
              </Button>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">向您的公司推荐我们</h3>
                <p className="text-white/70 text-sm">帮助您的雇主为所有员工提供更好的福利</p>
              </div>
            </div>

            <p className="text-white/80 mb-4">
              您的雇主尚未提供Sanicle.cloud福利？帮助我们联系您的人力资源部门，为您和您的同事争取这项重要的福利。
            </p>

            <Button className="w-full bg-white text-[#167d83] hover:bg-white/90">
              发送推荐
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 
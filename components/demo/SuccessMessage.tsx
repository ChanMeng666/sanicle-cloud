"use client"

import { CheckCircle, Calendar, Home, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SuccessMessage() {
  return (
    <div className="p-8 md:p-12 text-center">
      <div className="relative mx-auto mb-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#e6f5f6] to-[#f8f9fa] flex items-center justify-center mx-auto border-4 border-white shadow-lg">
          <CheckCircle className="h-10 w-10 text-[#22c0c7]" />
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-32 h-4 bg-[#fef6e9] opacity-50 blur-xl rounded-full"></div>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-[#2c3e50] mb-4">感谢您的请求！</h3>
      <p className="text-[#7f8c8d] mb-8 max-w-md mx-auto">
        我们已收到您的演示请求。我们的客户成功团队将在<span className="font-medium text-[#167d83]">24小时内</span>与您联系安排详细的演示。
      </p>

      <div className="bg-gradient-to-r from-[#fef6e9]/20 to-white p-6 rounded-xl mb-8 border border-[#fef6e9]/40 shadow-sm">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-[#fef6e9] h-10 w-10 rounded-lg flex items-center justify-center text-[#EE4C23] mr-3">
            <Calendar className="h-5 w-5" />
          </div>
          <span className="text-[#2c3e50] font-semibold">您的下一步</span>
        </div>
        <p className="text-[#7f8c8d] leading-relaxed">
          请查看您的邮箱，您将收到一封确认邮件，其中包含一个日历邀请链接，您可以选择适合您的时间。
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/">
          <Button className="bg-gradient-to-r from-[#167d83] to-[#22c0c7] hover:from-[#0e5a5f] hover:to-[#17a0a6] text-white w-full sm:w-auto px-8 py-6 h-auto rounded-lg flex items-center justify-center">
            <Home className="h-5 w-5 mr-2" />
            返回首页
          </Button>
        </Link>
        <Link href="/resources">
          <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6] w-full sm:w-auto px-8 py-6 h-auto rounded-lg flex items-center justify-center">
            <Book className="h-5 w-5 mr-2" />
            探索资源
          </Button>
        </Link>
      </div>
    </div>
  )
} 
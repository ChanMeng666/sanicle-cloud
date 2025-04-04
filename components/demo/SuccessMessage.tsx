"use client"

import { CheckCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SuccessMessage() {
  return (
    <div className="p-10 text-center">
      <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="h-8 w-8 text-[#167d83]" />
      </div>
      <h3 className="text-2xl font-bold text-[#2c3e50] mb-4">感谢您的请求！</h3>
      <p className="text-[#7f8c8d] mb-6 max-w-md mx-auto">
        我们已收到您的演示请求。我们的客户成功团队将在24小时内与您联系安排详细的演示。
      </p>

      <div className="bg-[#fef6e9]/30 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="h-5 w-5 text-[#EE4C23] mr-2" />
          <span className="text-[#2c3e50] font-medium">您的下一步</span>
        </div>
        <p className="text-[#7f8c8d] text-sm">
          请查看您的邮箱，您将收到一封确认邮件，其中包含一个日历邀请链接，您可以选择适合您的时间。
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white">
          返回首页
        </Button>
        <Button variant="outline" className="border-[#167d83] text-[#167d83]">
          探索资源
        </Button>
      </div>
    </div>
  )
} 
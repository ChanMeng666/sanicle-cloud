"use client"

import { CheckCircle, Calendar, Home, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export function SuccessMessage() {
  return (
    <div className="p-8 md:p-12 text-center">
      <div className="relative mx-auto mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-pale to-beige flex items-center justify-center mx-auto border-4 border-white shadow-lg">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/10 rounded-full animate-pulse-opacity"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/10 rounded-full animate-pulse-opacity" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">感谢您的请求！</h3>
      <p className="text-slate text-lg mb-8 max-w-md mx-auto">
        我们已收到您的演示请求。我们的客户成功团队将在<span className="font-medium text-primary">24小时内</span>与您联系安排详细的演示。
      </p>

      <Card variant="beige" className="mb-8 max-w-lg mx-auto">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-center">
            <div className="bg-secondary/20 h-10 w-10 rounded-lg flex items-center justify-center text-secondary mr-3">
              <Calendar className="h-5 w-5" />
            </div>
            <span className="text-charcoal font-semibold">您的下一步</span>
          </div>
          <p className="text-slate leading-relaxed">
            请查看您的邮箱，您将收到一封确认邮件，其中包含一个日历邀请链接，您可以选择适合您的时间。
          </p>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" variant="default" rounded="lg" className="shadow-lg">
          <Link href="/" className="flex items-center">
            <Home className="h-5 w-5 mr-2" />
            返回首页
          </Link>
        </Button>
        <Button asChild size="lg" variant="soft" rounded="lg">
          <Link href="/resources" className="flex items-center">
            <Book className="h-5 w-5 mr-2" />
            探索资源
          </Link>
        </Button>
      </div>
      
      <div className="mt-8 text-sm text-slate/80 max-w-md mx-auto">
        <p>如有任何问题，请联系我们的客户服务团队：<span className="text-primary">support@sanicle.cloud</span></p>
      </div>
    </div>
  )
} 
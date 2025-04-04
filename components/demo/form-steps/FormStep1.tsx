"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

interface FormStep1Props {
  onNext: () => void
}

export function FormStep1({ onNext }: FormStep1Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#2c3e50] mb-4">您的信息</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">名字</Label>
          <Input id="firstName" placeholder="输入您的名字" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">姓氏</Label>
          <Input id="lastName" placeholder="输入您的姓氏" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">工作邮箱</Label>
        <Input id="email" type="email" placeholder="you@company.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">电话号码</Label>
        <Input id="phone" placeholder="您的电话号码" />
      </div>

      <div className="pt-4 flex justify-end">
        <Button
          type="button"
          onClick={onNext}
          className="bg-[#167d83] hover:bg-[#0e5a5f] text-white"
        >
          下一步 <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 
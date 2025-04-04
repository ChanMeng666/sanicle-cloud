"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, User, Mail, Phone } from "lucide-react"

interface FormStep1Props {
  onNext: () => void
}

export function FormStep1({ onNext }: FormStep1Props) {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-[#2c3e50] mb-6 flex items-center">
        <span className="w-8 h-8 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3 text-[#167d83]">
          <User className="h-4 w-4" />
        </span>
        您的信息
      </h2>
      
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-[#5d6b78] font-medium">名字</Label>
          <div className="relative">
            <Input 
              id="firstName" 
              placeholder="输入您的名字" 
              required 
              className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg" 
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="h-4 w-4 text-[#7f8c8d]" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[#5d6b78] font-medium">姓氏</Label>
          <div className="relative">
            <Input 
              id="lastName" 
              placeholder="输入您的姓氏" 
              required 
              className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg" 
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="h-4 w-4 text-[#7f8c8d]" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#5d6b78] font-medium">工作邮箱</Label>
        <div className="relative">
          <Input 
            id="email" 
            type="email" 
            placeholder="you@company.com" 
            required 
            className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg" 
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-[#5d6b78] font-medium">电话号码</Label>
        <div className="relative">
          <Input 
            id="phone" 
            placeholder="您的电话号码" 
            className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg" 
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="pt-6 flex justify-end">
        <Button
          type="button"
          onClick={onNext}
          className="bg-gradient-to-r from-[#167d83] to-[#22c0c7] hover:from-[#0e5a5f] hover:to-[#17a0a6] text-white px-6 py-2.5 h-auto rounded-lg"
        >
          下一步 <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 
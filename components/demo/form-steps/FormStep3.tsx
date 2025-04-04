"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ListChecks, Clock, Calendar, Globe } from "lucide-react"

interface FormStep3Props {
  onSubmit: (e: React.FormEvent) => void
  onPrev: () => void
}

export function FormStep3({ onSubmit, onPrev }: FormStep3Props) {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-[#2c3e50] mb-6 flex items-center">
        <span className="w-8 h-8 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3 text-[#167d83]">
          <ListChecks className="h-4 w-4" />
        </span>
        您的偏好
      </h2>

      <div className="space-y-3">
        <Label htmlFor="interests" className="text-[#5d6b78] font-medium">您最感兴趣了解的是什么？</Label>
        <div className="relative">
          <Textarea
            id="interests"
            placeholder="请告诉我们您希望在演示中重点介绍的功能或方面"
            rows={4}
            className="border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] resize-none rounded-lg pt-4 pl-10"
          />
          <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none">
            <ListChecks className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="timeline" className="text-[#5d6b78] font-medium">您的实施时间表是什么？</Label>
        <div className="relative">
          <Select>
            <SelectTrigger id="timeline" className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg">
              <SelectValue placeholder="选择实施时间表" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 shadow-md">
              <SelectItem value="immediately">立即</SelectItem>
              <SelectItem value="1-3months">1-3个月内</SelectItem>
              <SelectItem value="3-6months">3-6个月内</SelectItem>
              <SelectItem value="6-12months">6-12个月内</SelectItem>
              <SelectItem value="exploring">仅探索中</SelectItem>
            </SelectContent>
          </Select>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Clock className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="demoTime" className="text-[#5d6b78] font-medium">您希望何时安排演示？</Label>
        <div className="relative">
          <Select>
            <SelectTrigger id="demoTime" className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg">
              <SelectValue placeholder="首选演示时间" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 shadow-md">
              <SelectItem value="morning">上午 (9-12点)</SelectItem>
              <SelectItem value="afternoon">下午 (1-5点)</SelectItem>
              <SelectItem value="flexible">灵活</SelectItem>
            </SelectContent>
          </Select>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Calendar className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="hearAbout" className="text-[#5d6b78] font-medium">您是如何了解到我们的？</Label>
        <div className="relative">
          <Select>
            <SelectTrigger id="hearAbout" className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg">
              <SelectValue placeholder="选择来源" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 shadow-md">
              <SelectItem value="search">搜索引擎</SelectItem>
              <SelectItem value="social">社交媒体</SelectItem>
              <SelectItem value="referral">同事/朋友推荐</SelectItem>
              <SelectItem value="event">活动或会议</SelectItem>
              <SelectItem value="ad">广告</SelectItem>
              <SelectItem value="other">其他</SelectItem>
            </SelectContent>
          </Select>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Globe className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="pt-6 flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onPrev}
          className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6] px-6 py-2.5 h-auto rounded-lg"
        >
          返回
        </Button>
        <Button
          type="submit"
          onClick={onSubmit}
          className="bg-gradient-to-r from-[#167d83] to-[#22c0c7] hover:from-[#0e5a5f] hover:to-[#17a0a6] text-white px-6 py-2.5 h-auto rounded-lg"
        >
          提交请求 <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 
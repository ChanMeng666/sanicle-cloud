"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

interface FormStep3Props {
  onSubmit: (e: React.FormEvent) => void
  onPrev: () => void
}

export function FormStep3({ onSubmit, onPrev }: FormStep3Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#2c3e50] mb-4">您的偏好</h2>

      <div className="space-y-2">
        <Label htmlFor="interests">您最感兴趣了解的是什么？</Label>
        <Textarea
          id="interests"
          placeholder="请告诉我们您希望在演示中重点介绍的功能或方面"
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">您的实施时间表是什么？</Label>
        <Select>
          <SelectTrigger id="timeline">
            <SelectValue placeholder="选择实施时间表" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="immediately">立即</SelectItem>
            <SelectItem value="1-3months">1-3个月内</SelectItem>
            <SelectItem value="3-6months">3-6个月内</SelectItem>
            <SelectItem value="6-12months">6-12个月内</SelectItem>
            <SelectItem value="exploring">仅探索中</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="demoTime">您希望何时安排演示？</Label>
        <Select>
          <SelectTrigger id="demoTime">
            <SelectValue placeholder="首选演示时间" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">上午 (9-12点)</SelectItem>
            <SelectItem value="afternoon">下午 (1-5点)</SelectItem>
            <SelectItem value="flexible">灵活</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hearAbout">您是如何了解到我们的？</Label>
        <Select>
          <SelectTrigger id="hearAbout">
            <SelectValue placeholder="选择来源" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="search">搜索引擎</SelectItem>
            <SelectItem value="social">社交媒体</SelectItem>
            <SelectItem value="referral">同事/朋友推荐</SelectItem>
            <SelectItem value="event">活动或会议</SelectItem>
            <SelectItem value="ad">广告</SelectItem>
            <SelectItem value="other">其他</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="pt-4 flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onPrev}
          className="border-[#167d83] text-[#167d83]"
        >
          返回
        </Button>
        <Button
          type="submit"
          onClick={onSubmit}
          className="bg-[#167d83] hover:bg-[#0e5a5f] text-white"
        >
          提交请求 <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 
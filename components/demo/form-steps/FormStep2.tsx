"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

interface FormStep2Props {
  onNext: () => void
  onPrev: () => void
}

export function FormStep2({ onNext, onPrev }: FormStep2Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#2c3e50] mb-4">公司详情</h2>

      <div className="space-y-2">
        <Label htmlFor="company">公司名称</Label>
        <Input id="company" placeholder="您的公司名称" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobTitle">职位</Label>
        <Input id="jobTitle" placeholder="您的职位" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="companySize">公司规模</Label>
        <Select>
          <SelectTrigger id="companySize">
            <SelectValue placeholder="选择公司规模" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-50">1-50名员工</SelectItem>
            <SelectItem value="51-200">51-200名员工</SelectItem>
            <SelectItem value="201-500">201-500名员工</SelectItem>
            <SelectItem value="501-1000">501-1000名员工</SelectItem>
            <SelectItem value="1000+">1000+名员工</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">行业</Label>
        <Select>
          <SelectTrigger id="industry">
            <SelectValue placeholder="选择您的行业" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technology">科技</SelectItem>
            <SelectItem value="healthcare">医疗保健</SelectItem>
            <SelectItem value="finance">金融</SelectItem>
            <SelectItem value="education">教育</SelectItem>
            <SelectItem value="retail">零售</SelectItem>
            <SelectItem value="manufacturing">制造业</SelectItem>
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
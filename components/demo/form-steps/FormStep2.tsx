"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Building, Briefcase, Users, PieChart } from "lucide-react"

interface FormStep2Props {
  onNext: () => void
  onPrev: () => void
}

export function FormStep2({ onNext, onPrev }: FormStep2Props) {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-[#2c3e50] mb-6 flex items-center">
        <span className="w-8 h-8 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3 text-[#167d83]">
          <Building className="h-4 w-4" />
        </span>
        Company Details
      </h2>

      <div className="space-y-3">
        <Label htmlFor="company" className="text-[#5d6b78] font-medium">Company Name</Label>
        <div className="relative">
          <Input 
            id="company" 
            placeholder="Your company name" 
            required 
            className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg" 
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Building className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="jobTitle" className="text-[#5d6b78] font-medium">Job Title</Label>
        <div className="relative">
          <Input 
            id="jobTitle" 
            placeholder="Your job title" 
            required 
            className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg" 
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Briefcase className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="companySize" className="text-[#5d6b78] font-medium">Company Size</Label>
        <div className="relative">
          <Select>
            <SelectTrigger id="companySize" className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg">
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 shadow-md">
              <SelectItem value="1-50">1-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-500">201-500 employees</SelectItem>
              <SelectItem value="501-1000">501-1000 employees</SelectItem>
              <SelectItem value="1000+">1000+ employees</SelectItem>
            </SelectContent>
          </Select>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Users className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="industry" className="text-[#5d6b78] font-medium">Industry</Label>
        <div className="relative">
          <Select>
            <SelectTrigger id="industry" className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 shadow-md">
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <PieChart className="h-4 w-4 text-[#7f8c8d]" />
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
          Back
        </Button>
        <Button
          type="button"
          onClick={onNext}
          className="bg-gradient-to-r from-[#167d83] to-[#22c0c7] hover:from-[#0e5a5f] hover:to-[#17a0a6] text-white px-6 py-2.5 h-auto rounded-lg"
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 
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
        Your Preferences
      </h2>

      <div className="space-y-3">
        <Label htmlFor="interests" className="text-[#5d6b78] font-medium">What are you most interested in learning about?</Label>
        <div className="relative">
          <Textarea
            id="interests"
            placeholder="Please tell us which features or aspects you'd like to highlight in the demonstration"
            rows={4}
            className="border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] resize-none rounded-lg pt-4 pl-10"
          />
          <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none">
            <ListChecks className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="timeline" className="text-[#5d6b78] font-medium">What is your implementation timeline?</Label>
        <div className="relative">
          <Select>
            <SelectTrigger id="timeline" className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg">
              <SelectValue placeholder="Select implementation timeline" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 shadow-md">
              <SelectItem value="immediately">Immediately</SelectItem>
              <SelectItem value="1-3months">Within 1-3 months</SelectItem>
              <SelectItem value="3-6months">Within 3-6 months</SelectItem>
              <SelectItem value="6-12months">Within 6-12 months</SelectItem>
              <SelectItem value="exploring">Just exploring</SelectItem>
            </SelectContent>
          </Select>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Clock className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="demoTime" className="text-[#5d6b78] font-medium">When would you like to schedule the demo?</Label>
        <div className="relative">
          <Select>
            <SelectTrigger id="demoTime" className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg">
              <SelectValue placeholder="Preferred demo time" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 shadow-md">
              <SelectItem value="morning">Morning (9am-12pm)</SelectItem>
              <SelectItem value="afternoon">Afternoon (1pm-5pm)</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Calendar className="h-4 w-4 text-[#7f8c8d]" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="hearAbout" className="text-[#5d6b78] font-medium">How did you hear about us?</Label>
        <div className="relative">
          <Select>
            <SelectTrigger id="hearAbout" className="pl-10 border-gray-200 focus:border-[#167d83] focus:ring-[#167d83] rounded-lg">
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 shadow-md">
              <SelectItem value="search">Search Engine</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
              <SelectItem value="referral">Colleague/Friend Referral</SelectItem>
              <SelectItem value="event">Event or Conference</SelectItem>
              <SelectItem value="ad">Advertisement</SelectItem>
              <SelectItem value="other">Other</SelectItem>
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
          Back
        </Button>
        <Button
          type="submit"
          onClick={onSubmit}
          className="bg-gradient-to-r from-[#167d83] to-[#22c0c7] hover:from-[#0e5a5f] hover:to-[#17a0a6] text-white px-6 py-2.5 h-auto rounded-lg"
        >
          Submit Request <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 
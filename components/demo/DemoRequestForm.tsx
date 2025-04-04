"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle, Calendar, Users, Building, Clock } from "lucide-react"
import { FormStep1 } from "./form-steps/FormStep1"
import { FormStep2 } from "./form-steps/FormStep2"
import { FormStep3 } from "./form-steps/FormStep3"
import { SuccessMessage } from "./SuccessMessage"

export function DemoRequestForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa] relative">
      {/* 装饰性背景元素 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#fef6e9] opacity-30 rounded-bl-[100px] md:rounded-bl-[200px]"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#e6f5f6] opacity-40 rounded-tr-[80px] md:rounded-tr-[150px]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
                {!formSubmitted ? (
                  <>
                    {/* Progress Steps */}
                    <div className="bg-gradient-to-r from-[#f8f9fa] to-white p-5 border-b">
                      <div className="flex justify-between">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mb-2 transition-all duration-300 ${
                                step >= i ? "bg-gradient-to-r from-[#167d83] to-[#22c0c7] text-white shadow-md" : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              {i}
                            </div>
                            <span className={`text-xs ${step >= i ? "text-[#167d83] font-medium" : "text-gray-500"}`}>
                              {i === 1 ? "个人信息" : i === 2 ? "公司详情" : "您的偏好"}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 h-1.5 bg-gray-100 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-[#167d83] to-[#22c0c7] rounded-full transition-all duration-500"
                          style={{ width: `${(step / 3) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Form Steps */}
                    <form onSubmit={handleSubmit} className="p-6 md:p-8">
                      {step === 1 && <FormStep1 onNext={nextStep} />}
                      {step === 2 && <FormStep2 onNext={nextStep} onPrev={prevStep} />}
                      {step === 3 && <FormStep3 onSubmit={handleSubmit} onPrev={prevStep} />}
                    </form>
                  </>
                ) : (
                  <SuccessMessage />
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-gradient-to-b from-white to-[#f8f9fa] rounded-xl p-6 md:p-8 sticky top-4 border border-gray-100 shadow-md">
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#fef6e9] flex items-center justify-center mr-3 text-[#EE4C23]">
                    <Calendar className="h-4 w-4" />
                  </span>
                  为什么选择演示？
                </h3>
                <ul className="space-y-5">
                  {[
                    {
                      icon: <Users className="h-5 w-5" />,
                      text: "了解我们平台如何满足您的特定需求",
                    },
                    {
                      icon: <ArrowRight className="h-5 w-5" />,
                      text: "看到我们的月经健康追踪和健康建议工具的实际操作",
                    },
                    {
                      icon: <Building className="h-5 w-5" />,
                      text: "了解实施过程和所需资源",
                    },
                    {
                      icon: <CheckCircle className="h-5 w-5" />,
                      text: "提问并获得实时回答",
                    },
                    {
                      icon: <Clock className="h-5 w-5" />,
                      text: "讨论价格和ROI分析",
                    },
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-[#e6f5f6] h-8 w-8 rounded-lg flex items-center justify-center text-[#167d83] mr-3 flex-shrink-0">
                        {point.icon}
                      </div>
                      <span className="text-[#7f8c8d] pt-1">{point.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e6f5f6] to-[#f8f9fa] flex items-center justify-center mr-3 border border-[#22c0c7]/20">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Jane Smith"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">Jane Smith</p>
                      <p className="text-sm text-[#7f8c8d]">客户成功经理</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                    <p className="text-sm text-[#7f8c8d] italic">
                      "我将亲自引导您了解我们的平台，并确保您获得所有必要的信息，以便评估Sanicle.cloud是否适合您的组织。"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
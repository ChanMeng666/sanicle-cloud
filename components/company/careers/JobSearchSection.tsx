"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, MapPin, Search } from "lucide-react"

export function JobSearchSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">寻找你的理想职位</h2>
            <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
              探索我们各部门和地点的开放职位。
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Search sidebar */}
              <div className="md:col-span-2 bg-[#f8f9fa] p-6 border-r border-gray-200">
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7f8c8d]" />
                    <input
                      type="text"
                      placeholder="搜索职位..."
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#167d83] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#2c3e50] mb-3">部门</h3>
                  <div className="space-y-2">
                    {["所有部门", "工程", "产品", "市场营销", "运营", "人力资源", "设计"].map(
                      (dept, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`dept-${index}`}
                            className="h-4 w-4 text-[#167d83] focus:ring-[#167d83] rounded"
                            defaultChecked={index === 0}
                          />
                          <label htmlFor={`dept-${index}`} className="ml-2 text-[#2c3e50]">
                            {dept}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#2c3e50] mb-3">地点</h3>
                  <div className="space-y-2">
                    {["所有地点", "远程", "纽约市", "旧金山", "伦敦"].map(
                      (loc, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`loc-${index}`}
                            className="h-4 w-4 text-[#167d83] focus:ring-[#167d83] rounded"
                            defaultChecked={index === 0}
                          />
                          <label htmlFor={`loc-${index}`} className="ml-2 text-[#2c3e50]">
                            {loc}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2c3e50] mb-3">工作类型</h3>
                  <div className="space-y-2">
                    {["所有类型", "全职", "兼职", "合同", "实习"].map((type, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`type-${index}`}
                          className="h-4 w-4 text-[#167d83] focus:ring-[#167d83] rounded"
                          defaultChecked={index === 0}
                        />
                        <label htmlFor={`type-${index}`} className="ml-2 text-[#2c3e50]">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map and job listings */}
              <div className="md:col-span-3 p-6">
                <div className="mb-6 relative h-64 bg-[#e6f5f6] rounded-xl overflow-hidden">
                  {/* This would be a real map in production */}
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center"></div>

                  {/* Location markers */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-[#167d83] rounded-full flex items-center justify-center text-white text-xs">
                        3
                      </div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-[#167d83] rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>

                  <div className="absolute top-2/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-[#EE4C23] rounded-full flex items-center justify-center text-white text-xs">
                        2
                      </div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-[#EE4C23] rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>

                  <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-[#167d83] rounded-full flex items-center justify-center text-white text-xs">
                        5
                      </div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-[#167d83] rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">10个开放职位</h3>

                <div className="space-y-4">
                  {[
                    {
                      title: "高级前端工程师",
                      department: "工程",
                      location: "远程",
                      type: "全职",
                      posted: "2天前",
                      color: "border-l-[#167d83]",
                    },
                    {
                      title: "产品经理",
                      department: "产品",
                      location: "纽约市",
                      type: "全职",
                      posted: "1周前",
                      color: "border-l-[#EE4C23]",
                    },
                    {
                      title: "内容营销专员",
                      department: "市场营销",
                      location: "远程",
                      type: "全职",
                      posted: "3天前",
                      color: "border-l-[#167d83]",
                    },
                    {
                      title: "用户体验/界面设计师",
                      department: "设计",
                      location: "旧金山",
                      type: "全职",
                      posted: "刚刚",
                      color: "border-l-[#EE4C23]",
                    },
                  ].map((job, index) => (
                    <div
                      key={index}
                      className={`border-l-4 ${job.color} bg-white rounded-r-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="font-semibold text-[#2c3e50] text-lg">{job.title}</h4>
                          <p className="text-[#7f8c8d]">{job.department}</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mt-2 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-[#167d83] mr-1" />
                            <span className="text-sm text-[#7f8c8d]">{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-[#167d83] mr-1" />
                            <span className="text-sm text-[#7f8c8d]">{job.type}</span>
                          </div>
                          <div className="flex items-center md:ml-4">
                            <span className="text-xs bg-[#e6f5f6] text-[#167d83] px-2 py-1 rounded-full">
                              {job.posted}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                          查看详情 <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white">查看所有职位</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
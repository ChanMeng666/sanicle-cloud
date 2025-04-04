"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, MapPin, Search, Filter, X } from "lucide-react"
import { useState } from "react"

export function JobSearchSection() {
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight mb-4">
              Find Your Ideal Position
            </h2>
            <p className="text-slate mt-3 max-w-2xl mx-auto text-lg">
              Explore open positions across our departments and locations
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="md:hidden p-4 border-b border-gray-100 flex justify-between items-center">
              <div className="relative flex-1 mr-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-200 text-charcoal flex items-center gap-1.5"
                onClick={() => setFiltersVisible(!filtersVisible)}
              >
                {filtersVisible ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
                {filtersVisible ? "Close" : "Filter"}
              </Button>
            </div>

            <div className="grid md:grid-cols-5">
              {/* Filter sidebar - toggleable on mobile */}
              <div className={`${filtersVisible ? 'block' : 'hidden'} md:block md:col-span-2 bg-background p-6 border-r border-gray-200`}>
                <div className="hidden md:block mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search positions..."
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-charcoal mb-4">Department</h3>
                  <div className="space-y-3">
                    {["All Departments", "Engineering", "Product", "Marketing", "Operations", "HR", "Design"].map(
                      (dept, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`dept-${index}`}
                            className="h-4 w-4 text-primary focus:ring-primary rounded"
                            defaultChecked={index === 0}
                          />
                          <label htmlFor={`dept-${index}`} className="ml-3 text-charcoal text-base">
                            {dept}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-charcoal mb-4">Location</h3>
                  <div className="space-y-3">
                    {["All Locations", "Remote", "New York", "San Francisco", "London"].map(
                      (loc, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`loc-${index}`}
                            className="h-4 w-4 text-primary focus:ring-primary rounded"
                            defaultChecked={index === 0}
                          />
                          <label htmlFor={`loc-${index}`} className="ml-3 text-charcoal text-base">
                            {loc}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-4">Job Type</h3>
                  <div className="space-y-3">
                    {["All Types", "Full-time", "Part-time", "Contract", "Internship"].map((type, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`type-${index}`}
                          className="h-4 w-4 text-primary focus:ring-primary rounded"
                          defaultChecked={index === 0}
                        />
                        <label htmlFor={`type-${index}`} className="ml-3 text-charcoal text-base">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 md:hidden">
                  <Button
                    className="w-full bg-primary hover:bg-primary-dark text-white"
                    onClick={() => setFiltersVisible(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>

              {/* Map and job listings */}
              <div className={`${filtersVisible ? 'hidden' : 'block'} md:block md:col-span-3 p-6`}>
                <div className="mb-8 relative h-48 md:h-64 lg:h-80 bg-primary-pale rounded-xl overflow-hidden shadow-inner">
                  {/* This would be a real map in actual application */}
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>

                  {/* Location markers */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-medium shadow-lg">
                        3
                      </div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-primary rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>

                  <div className="absolute top-2/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-xs font-medium shadow-lg">
                        2
                      </div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-secondary rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>

                  <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-medium shadow-lg">
                        5
                      </div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-primary rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-charcoal">10 Open Positions</h3>
                  <div className="hidden md:block">
                    <select className="text-sm border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                      <option>Newest First</option>
                      <option>By Department</option>
                      <option>By Location</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Senior Frontend Engineer",
                      department: "Engineering",
                      location: "Remote",
                      type: "Full-time",
                      posted: "2 days ago",
                      color: "border-l-primary",
                      bgHover: "hover:bg-primary/5",
                    },
                    {
                      title: "Product Manager",
                      department: "Product",
                      location: "New York",
                      type: "Full-time",
                      posted: "1 week ago",
                      color: "border-l-secondary",
                      bgHover: "hover:bg-secondary/5",
                    },
                    {
                      title: "Content Marketing Specialist",
                      department: "Marketing",
                      location: "Remote",
                      type: "Full-time",
                      posted: "3 days ago",
                      color: "border-l-primary",
                      bgHover: "hover:bg-primary/5",
                    },
                    {
                      title: "UX/UI Designer",
                      department: "Design",
                      location: "San Francisco",
                      type: "Full-time",
                      posted: "Just now",
                      color: "border-l-secondary",
                      bgHover: "hover:bg-secondary/5",
                      new: true,
                    },
                  ].map((job, index) => (
                    <div
                      key={index}
                      className={`border-l-4 ${job.color} bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 ${job.bgHover}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-charcoal text-lg">{job.title}</h4>
                            {job.new && (
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-slate mt-1">{job.department}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-primary mr-1.5" />
                            <span className="text-sm text-slate">{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-primary mr-1.5" />
                            <span className="text-sm text-slate">{job.type}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-xs bg-primary-pale text-primary px-2.5 py-1 rounded-full font-medium">
                              {job.posted}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 transition-all duration-300">
                          View Details <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <Button className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-darker text-white shadow-md hover:shadow-lg transition-all duration-300 px-6 py-2.5">
                    View All Positions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
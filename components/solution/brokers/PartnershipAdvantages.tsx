"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, DollarSign, BarChart, Handshake, ChevronRight } from "lucide-react"

export function PartnershipAdvantages() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center mb-2">
              <div className="h-px w-6 bg-[#167d83] mr-2"></div>
              <span className="text-[#167d83] text-sm font-medium">Partnership Benefits</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c3e50] mb-3">Partner Advantages</h2>
            <p className="text-[#7f8c8d] text-sm md:text-base leading-relaxed">
              Learn how partnering with Sanicle.cloud enhances your benefits portfolio and grows your business.
            </p>
          </div>
          <Button variant="link" className="text-[#167d83] p-0 mt-4 md:mt-0 font-medium hover:text-[#0e5a5f] transition-colors duration-200 flex items-center">
            View All Benefits <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="revenue" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-xs sm:max-w-sm mx-auto mb-8 bg-[#f8f9fa] p-1 rounded-lg">
            <TabsTrigger value="revenue" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-[#167d83] data-[state=active]:shadow transition-all duration-200">Revenue</TabsTrigger>
            <TabsTrigger value="offerings" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-[#167d83] data-[state=active]:shadow transition-all duration-200">Portfolio</TabsTrigger>
            <TabsTrigger value="support" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-[#167d83] data-[state=active]:shadow transition-all duration-200">Support</TabsTrigger>
          </TabsList>

          <div className="overflow-hidden rounded-2xl">
            <TabsContent value="revenue" className="mt-0">
              <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/3 flex justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#e6f5f6] flex items-center justify-center transform transition-transform duration-500 hover:scale-105">
                      <DollarSign className="h-10 w-10 md:h-12 md:w-12 text-[#167d83]" />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#2c3e50] mb-4 text-center lg:text-left">Revenue Opportunities</h3>
                    <p className="text-[#7f8c8d] mb-6 text-center lg:text-left">
                      Expand your revenue streams with competitive commission structures and referral bonuses.
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {["Competitive commission rates", "Recurring revenue model", "Performance-based incentives"].map(
                        (item, i) => (
                          <div key={i} className="flex items-start bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                            <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-[#2c3e50] text-sm">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="offerings" className="mt-0">
              <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/3 flex justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#e6f5f6] flex items-center justify-center transform transition-transform duration-500 hover:scale-105">
                      <BarChart className="h-10 w-10 md:h-12 md:w-12 text-[#167d83]" />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#2c3e50] mb-4 text-center lg:text-left">Differentiated Products</h3>
                    <p className="text-[#7f8c8d] mb-6 text-center lg:text-left">
                      Stand out in the market with innovative benefits that address key but underserved needs.
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {["Unique value proposition", "Growing market demand", "Comprehensive solution"].map(
                        (item, i) => (
                          <div key={i} className="flex items-start bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                            <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-[#2c3e50] text-sm">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="mt-0">
              <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/3 flex justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#e6f5f6] flex items-center justify-center transform transition-transform duration-500 hover:scale-105">
                      <Handshake className="h-10 w-10 md:h-12 md:w-12 text-[#167d83]" />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#2c3e50] mb-4 text-center lg:text-left">Dedicated Support</h3>
                    <p className="text-[#7f8c8d] mb-6 text-center lg:text-left">
                      Get comprehensive support to help you effectively sell and implement our solutions.
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {["Dedicated partner manager", "Sales and marketing resources", "Implementation assistance"].map(
                        (item, i) => (
                          <div key={i} className="flex items-start bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                            <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-[#2c3e50] text-sm">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  )
} 
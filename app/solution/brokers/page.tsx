import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  DollarSign,
  BarChart,
  Handshake,
  Star,
  ChevronRight,
  Award,
  FileText,
  BookOpen,
  Briefcase,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BrokersPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section - Asymmetrical Grid with Offset Elements */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 md:pr-12">
              <div className="flex flex-col md:items-start text-left space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="h-px w-8 bg-[#167d83]"></div>
                  <span className="text-[#167d83] font-medium">Partner Program</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c3e50] leading-tight">
                  Expand Your <br />
                  <span className="text-[#167d83]">Benefits Portfolio</span>
                </h1>

                <p className="text-lg md:text-xl text-[#7f8c8d] max-w-xl">
                  Partner with Sanicle.cloud to offer your clients cutting-edge menstrual health benefits that drive
                  employee satisfaction and retention.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                    Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                    Schedule a Call
                  </Button>
                </div>

                <div className="flex items-center pt-6">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-[#EE4C23] fill-[#EE4C23]" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-[#7f8c8d]">Rated 4.9/5 by our partners</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-4 relative">
              <div className="absolute -z-10 w-full h-full bg-[#e6f5f6] rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

              <div className="col-span-2">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Benefits broker meeting with client"
                  className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-[#167d83] mr-2" />
                  <div>
                    <h3 className="font-semibold text-[#2c3e50]">Commission</h3>
                    <p className="text-sm text-[#7f8c8d]">Up to 20% recurring</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md transform translate-y-4">
                <div className="flex items-center">
                  <Handshake className="h-8 w-8 text-[#167d83] mr-2" />
                  <div>
                    <h3 className="font-semibold text-[#2c3e50]">Partners</h3>
                    <p className="text-sm text-[#7f8c8d]">100+ brokers trust us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 在Hero Section底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480" />
          </svg>
        </div>
      </section>

      {/* Partnership Benefits Section - Tabbed Interface */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Partnership Advantages</h2>
              <p className="text-[#7f8c8d] mt-2 max-w-2xl">
                Discover how partnering with Sanicle.cloud can enhance your benefits offerings and grow your business.
              </p>
            </div>
            <Button variant="link" className="text-[#167d83] p-0 mt-2 md:mt-0">
              View all advantages <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="revenue" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="offerings">Offerings</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="revenue" className="space-y-4">
              <div className="bg-[#f8f9fa] rounded-lg p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="w-20 h-20 rounded-full bg-[#e6f5f6] flex items-center justify-center mx-auto md:mx-0">
                      <DollarSign className="h-10 w-10 text-[#167d83]" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Revenue Opportunities</h3>
                    <p className="text-[#7f8c8d] mb-6">
                      Expand your revenue streams with competitive commission structures and referral bonuses.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {["Competitive commission rates", "Recurring revenue model", "Performance-based incentives"].map(
                        (item, i) => (
                          <div key={i} className="flex items-start bg-white p-3 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-[#2c3e50]">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="offerings" className="space-y-4">
              <div className="bg-[#f8f9fa] rounded-lg p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="w-20 h-20 rounded-full bg-[#e6f5f6] flex items-center justify-center mx-auto md:mx-0">
                      <BarChart className="h-10 w-10 text-[#167d83]" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Differentiated Offerings</h3>
                    <p className="text-[#7f8c8d] mb-6">
                      Stand out in the market with innovative benefits that address a critical but underserved need.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {["Unique value proposition", "Growing market demand", "Comprehensive solution"].map(
                        (item, i) => (
                          <div key={i} className="flex items-start bg-white p-3 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-[#2c3e50]">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-4">
              <div className="bg-[#f8f9fa] rounded-lg p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="w-20 h-20 rounded-full bg-[#e6f5f6] flex items-center justify-center mx-auto md:mx-0">
                      <Handshake className="h-10 w-10 text-[#167d83]" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Dedicated Support</h3>
                    <p className="text-[#7f8c8d] mb-6">
                      Receive comprehensive support to help you effectively sell and implement our solutions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {["Dedicated partner manager", "Sales and marketing resources", "Implementation assistance"].map(
                        (item, i) => (
                          <div key={i} className="flex items-start bg-white p-3 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-[#2c3e50]">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Partnership Program - Comparison Cards */}
      <section className="w-full py-12 md:py-16 bg-[#e6f5f6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#167d83] rounded-full opacity-5 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#167d83] rounded-full opacity-5 transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-white text-[#167d83] text-sm font-medium rounded-full mb-3">
              Partnership Options
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Our Partnership Program</h2>
            <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
              Join our network of benefits brokers and consultants to bring innovative menstrual health solutions to
              your clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#fef6e9] p-4 text-center">
                <h3 className="text-xl font-semibold text-[#2c3e50]">Referral Partners</h3>
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#fef6e9] flex items-center justify-center">
                    <Handshake className="h-10 w-10 text-[#EE4C23]" />
                  </div>
                </div>

                <p className="text-[#7f8c8d] mb-6 text-center">
                  Ideal for brokers who want to refer clients to Sanicle.cloud while we handle the implementation and
                  management.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Competitive referral fees",
                    "Minimal time investment",
                    "Co-branded marketing materials",
                    "Regular updates on client status",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                      <span className="text-[#2c3e50]">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-[#EE4C23] hover:bg-[#d43d18] text-white">Become a Referral Partner</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#e6f5f6] p-4 text-center">
                <h3 className="text-xl font-semibold text-[#2c3e50]">Strategic Partners</h3>
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#e6f5f6] flex items-center justify-center">
                    <Award className="h-10 w-10 text-[#167d83]" />
                  </div>
                </div>

                <p className="text-[#7f8c8d] mb-6 text-center">
                  For brokers looking to deeply integrate Sanicle.cloud into their benefits portfolio with higher
                  commission rates.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Higher commission structure",
                    "Dedicated account manager",
                    "Advanced training and certification",
                    "Priority implementation support",
                    "Custom reporting and analytics",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                      <span className="text-[#2c3e50]">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-[#167d83] hover:bg-[#0e5a5f] text-white">
                  Apply for Strategic Partnership
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section - Carousel Style */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Partner Resources</h2>
            <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
              Access everything you need to successfully present Sanicle.cloud to your clients.
            </p>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-8 space-x-6 snap-x">
              {[
                {
                  title: "Sales Toolkit",
                  description: "Presentation decks, one-pagers, and ROI calculators.",
                  icon: <Briefcase className="h-8 w-8 text-[#167d83]" />,
                  color: "bg-[#e6f5f6]",
                },
                {
                  title: "Training Materials",
                  description: "Comprehensive guides and video tutorials.",
                  icon: <BookOpen className="h-8 w-8 text-[#EE4C23]" />,
                  color: "bg-[#fef6e9]",
                },
                {
                  title: "Marketing Assets",
                  description: "Co-branded materials and email templates.",
                  icon: <FileText className="h-8 w-8 text-[#167d83]" />,
                  color: "bg-[#e6f5f6]",
                },
                {
                  title: "Implementation Guides",
                  description: "Step-by-step process for client onboarding.",
                  icon: <Award className="h-8 w-8 text-[#EE4C23]" />,
                  color: "bg-[#fef6e9]",
                },
              ].map((item, index) => (
                <div key={index} className="min-w-[280px] snap-start">
                  <div className={`${item.color} p-8 rounded-lg h-full flex flex-col`}>
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">{item.title}</h3>
                    <p className="text-[#7f8c8d] mb-6">{item.description}</p>
                    <Button variant="outline" className="mt-auto border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                      Access Resources
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i === 0 ? "bg-[#167d83]" : "bg-[#e6f5f6]"}`}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Overlapping Elements */}
      <section className="w-full py-16 md:py-20 bg-[#167d83] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0e5a5f] rounded-full opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0e5a5f] rounded-full opacity-50 transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 md:col-start-1">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to expand your benefits portfolio?</h2>
                <p className="text-white/80 mb-8">
                  Join our partner network today and start offering innovative menstrual health benefits to your
                  clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-white text-[#167d83] hover:bg-white/90">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7 md:absolute md:right-6 md:top-1/2 md:transform md:-translate-y-1/2">
              <div className="bg-[#0e5a5f] p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-[#EE4C23] fill-[#EE4C23] mr-2" />
                  <h3 className="text-xl font-semibold">Partner Success Story</h3>
                </div>
                <p className="italic mb-4">
                  "Since partnering with Sanicle.cloud, we've been able to offer our clients a truly unique benefit that
                  addresses a critical need. Our clients love it, and we've seen a significant increase in our recurring
                  revenue."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center mr-3">
                    JP
                  </div>
                  <div>
                    <p className="font-semibold">James Peterson</p>
                    <p className="text-sm text-white/80">Senior Benefits Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


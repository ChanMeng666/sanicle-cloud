import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, BarChart, Users, Clock, ChevronDown, Briefcase, Building, Award } from "lucide-react"

export default function EmployersPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section - Split Screen with Angled Divider */}
      <section className="w-full py-16 md:py-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f8f9fa] clip-path-slant z-0"></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="py-8 md:py-24 pr-4 md:pr-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium">
                  For Employers
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#2c3e50]">
                  Empower Your <span className="text-[#167d83]">Workforce</span> with Comprehensive Benefits
                </h1>
                <p className="text-lg text-[#7f8c8d]">
                  Attract and retain top talent by providing innovative health benefits that address the unique needs of
                  your female employees.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                    Book a Demo
                  </Button>
                </div>

                <div className="pt-6 flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-[#e6f5f6] border-2 border-white flex items-center justify-center text-[#167d83] text-xs font-bold"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-[#7f8c8d]">
                      <span className="font-semibold text-[#2c3e50]">500+</span> companies already trust us
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center relative min-h-[600px]">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e6f5f6] rounded-full opacity-20"></div>
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Diverse workplace team"
                className="relative z-10 rounded-lg shadow-xl w-4/5 transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute bottom-24 -left-12 bg-white rounded-lg shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#167d83] text-white flex items-center justify-center mr-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">Improved Retention</p>
                    <p className="text-sm text-[#7f8c8d]">+27% employee satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-24 -right-12 bg-white rounded-lg shadow-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#EE4C23] text-white flex items-center justify-center mr-3">
                    <BarChart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">Reduced Absences</p>
                    <p className="text-sm text-[#7f8c8d]">-18% menstrual-related time off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 text-center pb-6 hidden md:block">
          <Button variant="ghost" className="text-[#7f8c8d] hover:text-[#2c3e50] animate-bounce">
            Explore Benefits <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
        {/* 在Hero Section底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Benefits Section - Hexagonal Grid Layout */}
      <section className="w-full py-12 md:py-16 bg-white relative -mt-10 z-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <div className="w-16 h-1 bg-[#167d83] mb-4"></div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Benefits for Employers</h2>
              <p className="text-[#7f8c8d] mt-2">
                Discover how Sanicle.cloud can transform your workplace and provide tangible benefits for your
                organization.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                Download Benefits Guide
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#e6f5f6] rounded-lg transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-10"></div>
              <div className="relative z-10 p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-[#167d83]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Attract & Retain Talent</h3>
                <p className="text-[#7f8c8d] mb-6">
                  Stand out in the job market with innovative benefits that demonstrate your commitment to women's
                  health.
                </p>
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  {["Reduce turnover costs", "Attract diverse candidates", "Improve employee satisfaction"].map(
                    (item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="relative group md:mt-12">
              <div className="absolute inset-0 bg-[#e6f5f6] rounded-lg transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-10"></div>
              <div className="relative z-10 p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center mb-6">
                  <BarChart className="h-8 w-8 text-[#167d83]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Increase Productivity</h3>
                <p className="text-[#7f8c8d] mb-6">
                  Support employees through menstrual health challenges to reduce absenteeism and improve focus.
                </p>
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  {[
                    "Reduce menstrual-related absences",
                    "Improve workplace performance",
                    "Support employee wellbeing",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-[#2c3e50]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group md:mt-24">
              <div className="absolute inset-0 bg-[#e6f5f6] rounded-lg transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-10"></div>
              <div className="relative z-10 p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-[#167d83]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Easy Implementation</h3>
                <p className="text-[#7f8c8d] mb-6">
                  Seamlessly integrate our platform with your existing benefits system with minimal administrative
                  burden.
                </p>
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  {["Quick setup process", "Dedicated implementation support", "Minimal HR resources required"].map(
                    (item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 在Benefits Section底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f8f9fa"
              fillOpacity="1"
              d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Implementation Process - Timeline Style */}
      <section className="w-full py-12 md:py-16 bg-[#f8f9fa] relative -mt-10 z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#e6f5f6] rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fef6e9] rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#e6f5f6] text-[#167d83] text-sm font-medium rounded-full mb-3">
              Implementation
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Simple Implementation Process</h2>
            <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
              Get up and running with Sanicle.cloud in just a few simple steps.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2 bg-[#e6f5f6]"></div>

            {[
              {
                step: 1,
                title: "Initial Consultation",
                description: "We'll discuss your specific needs and tailor a solution for your organization.",
                icon: <Briefcase className="h-6 w-6 text-white" />,
              },
              {
                step: 2,
                title: "Plan Selection",
                description: "Choose from our flexible plans to find the perfect fit for your budget and workforce.",
                icon: <Building className="h-6 w-6 text-white" />,
              },
              {
                step: 3,
                title: "Employee Enrollment",
                description: "We provide all the materials needed to introduce the benefit to your employees.",
                icon: <Users className="h-6 w-6 text-white" />,
              },
              {
                step: 4,
                title: "Ongoing Support",
                description: "Our team provides continuous support and regular usage reports.",
                icon: <Award className="h-6 w-6 text-white" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-0 pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-[#167d83] flex items-center justify-center z-10 transform -translate-x-1/2 md:translate-x-1/2">
                  {item.icon}
                </div>

                {/* Content */}
                <div
                  className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? "md:rounded-r-none" : "md:rounded-l-none"}`}
                >
                  <div className="inline-block w-8 h-8 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center text-lg font-bold mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2c3e50] mb-2">{item.title}</h3>
                  <p className="text-[#7f8c8d]">{item.description}</p>
                </div>

                {/* Connector line for mobile */}
                <div className="absolute left-4 top-8 bottom-0 w-1 bg-[#e6f5f6] md:hidden"></div>
              </div>
            ))}
          </div>
        </div>
        {/* 在Implementation Process底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Testimonials - Staggered Cards */}
      <section className="w-full py-12 md:py-16 bg-white relative -mt-10 z-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">What Our Clients Say</h2>
              <p className="text-[#7f8c8d] mt-2">
                Hear from organizations that have transformed their workplace with Sanicle.cloud.
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
              View All Testimonials
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <div className="bg-[#fef6e9] p-8 rounded-lg relative">
                <div className="absolute -top-4 -left-4 text-[#EE4C23] text-6xl opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-lg text-[#2c3e50] italic mb-6">
                    "Sanicle.cloud has transformed how we approach women's health benefits in our company. The platform
                    is intuitive and our employees love it. We've seen a significant improvement in employee
                    satisfaction and retention since implementing the program."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#167d83] text-white flex items-center justify-center mr-4">
                      SJ
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">Sarah Johnson</p>
                      <p className="text-sm text-[#7f8c8d]">HR Director, Tech Solutions Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 md:mt-16">
              <div className="bg-[#e6f5f6] p-8 rounded-lg relative">
                <div className="absolute -top-4 -left-4 text-[#167d83] text-6xl opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-lg text-[#2c3e50] italic mb-6">
                    "The comprehensive approach to menstrual health has significantly improved workplace wellbeing and
                    reduced absenteeism among our female staff."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#EE4C23] text-white flex items-center justify-center mr-4">
                      MC
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">Michael Chen</p>
                      <p className="text-sm text-[#7f8c8d]">Benefits Manager, Global Enterprises</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 在Testimonials底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#167d83"
              fillOpacity="0.3"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* CTA Section - Gradient with Floating Elements */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-[#167d83] to-[#0e5a5f] text-white relative -mt-10 z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 p-1 rounded-full w-fit mx-auto mb-6">
              <div className="bg-white/20 px-4 py-1 rounded-full">
                <span className="text-white text-sm font-medium">Join 500+ Companies</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center">
              Ready to transform your workplace benefits?
            </h2>

            <p className="text-white/80 mb-8 text-center text-lg">
              Join the growing number of forward-thinking companies prioritizing women's health in the workplace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#167d83] hover:bg-white/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Book a Demo
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white text-sm">No credit card required</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white text-sm">14-day free trial</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white text-sm">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


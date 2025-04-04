"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Calendar,
  Shield,
  Gift,
  Clock,
  Zap,
  Users,
  BookOpen,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Minus,
} from "lucide-react"
import { useState } from "react"

// Custom accordion component for benefits page
const BenefitAccordion = ({
  title,
  children,
  icon,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  icon: React.ReactNode
  defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 rounded-t-xl ${isOpen ? "bg-[#167d83] text-white" : "bg-white text-[#2c3e50]"} transition-colors duration-300`}
      >
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${isOpen ? "bg-white text-[#167d83]" : "bg-[#e6f5f6] text-[#167d83]"}`}
          >
            {icon}
          </div>
          <span className="text-xl font-semibold">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>

      {isOpen && <div className="bg-white p-6 rounded-b-xl shadow-md">{children}</div>}
    </div>
  )
}

// Custom comparison card component
const ComparisonCard = ({
  title,
  features,
  included = true,
}: {
  title: string
  features: string[]
  included?: boolean
}) => {
  return (
    <div className={`rounded-xl overflow-hidden ${included ? "border-2 border-[#167d83]" : "border border-gray-200"}`}>
      <div className={`p-4 ${included ? "bg-[#167d83] text-white" : "bg-gray-100 text-[#2c3e50]"}`}>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="p-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {included ? (
                <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
              ) : (
                <Minus className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
              )}
              <span className={included ? "text-[#2c3e50]" : "text-gray-500"}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function BenefitsPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section - 3D Layered Design */}
      <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#167d83]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#EE4C23]/10 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#167d83]/10 text-[#167d83] text-sm font-medium mb-4">
                <Gift className="h-4 w-4 mr-2" /> Comprehensive Benefits Package
              </div>

              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold text-[#2c3e50] leading-tight mb-6">
                  Transform Your <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#167d83]">Workplace Health</span>
                    <span className="absolute bottom-2 left-0 w-full h-4 bg-[#EE4C23]/20 -z-10 transform -rotate-1"></span>
                  </span>
                </h1>

                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#fef6e9] rounded-full flex items-center justify-center rotate-12 shadow-lg">
                  <Heart className="h-10 w-10 text-[#EE4C23]" />
                </div>

                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#e6f5f6] rounded-full flex items-center justify-center -rotate-12 shadow-lg">
                  <Shield className="h-8 w-8 text-[#167d83]" />
                </div>
              </div>

              <p className="text-xl text-[#7f8c8d] max-w-2xl mx-auto mb-8">
                Discover our revolutionary approach to menstrual health benefits that improves employee wellbeing,
                reduces absenteeism, and creates a more inclusive workplace.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white rounded-full px-8">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6] rounded-full px-8"
                >
                  Book a Demo
                </Button>
              </div>
            </div>

            {/* 3D Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  title: "Health Tracking",
                  description: "Advanced cycle tracking with AI-powered insights",
                  icon: <Heart className="h-8 w-8 text-white" />,
                  color: "bg-[#EE4C23]",
                  rotation: "rotate-2",
                },
                {
                  title: "Product Access",
                  description: "Monthly delivery of menstrual products",
                  icon: <Gift className="h-8 w-8 text-white" />,
                  color: "bg-[#167d83]",
                  rotation: "rotate-0",
                },
                {
                  title: "Expert Support",
                  description: "Access to healthcare professionals",
                  icon: <Users className="h-8 w-8 text-white" />,
                  color: "bg-[#EE4C23]",
                  rotation: "-rotate-2",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className={`relative ${card.rotation} hover:rotate-0 transition-transform duration-500`}
                >
                  <div className="absolute inset-0 bg-black/5 rounded-2xl transform translate-x-2 translate-y-2"></div>
                  <div className={`${card.color} rounded-2xl p-6 shadow-lg relative z-10`}>
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-white/80">{card.description}</p>

                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Benefits Accordion Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
                Comprehensive Coverage
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">Explore Our Benefits</h2>
              <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
                Tap each benefit to learn more about how our platform supports menstrual health in the workplace.
              </p>
            </div>

            <div className="space-y-6">
              <BenefitAccordion
                title="Advanced Cycle Tracking"
                icon={<Calendar className="h-5 w-5" />}
                defaultOpen={true}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[#7f8c8d] mb-4">
                      Our platform provides sophisticated cycle tracking with AI-powered insights to help employees
                      understand their menstrual patterns and predict upcoming cycles.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Personalized cycle predictions",
                        "Symptom tracking and analysis",
                        "Pattern recognition for health insights",
                        "Private and secure data storage",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                          <span className="text-[#2c3e50]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Cycle tracking interface"
                      className="relative z-10 rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>
              </BenefitAccordion>

              <BenefitAccordion title="Menstrual Product Access" icon={<Gift className="h-5 w-5" />}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="order-2 md:order-1 relative">
                    <div className="absolute inset-0 bg-[#EE4C23] rounded-lg opacity-10 blur-lg transform -rotate-3"></div>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Menstrual products"
                      className="relative z-10 rounded-lg shadow-lg w-full"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <p className="text-[#7f8c8d] mb-4">
                      Employees can access a wide range of menstrual products through our platform, with flexible
                      allowances and delivery options.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Monthly product allowance",
                        "Wide range of product options",
                        "Eco-friendly alternatives",
                        "Convenient delivery to home or office",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                          <span className="text-[#2c3e50]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </BenefitAccordion>

              <BenefitAccordion title="Educational Resources" icon={<BookOpen className="h-5 w-5" />}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[#7f8c8d] mb-4">
                      Our platform provides comprehensive educational resources about menstrual health, hormonal
                      conditions, and workplace accommodations.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Expert-reviewed articles and guides",
                        "Video tutorials and webinars",
                        "Condition-specific information (PCOS, endometriosis, etc.)",
                        "Workplace accommodation resources",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                          <span className="text-[#2c3e50]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Educational resources"
                      className="relative z-10 rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>
              </BenefitAccordion>

              <BenefitAccordion title="Expert Support" icon={<Users className="h-5 w-5" />}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="order-2 md:order-1 relative">
                    <div className="absolute inset-0 bg-[#EE4C23] rounded-lg opacity-10 blur-lg transform -rotate-3"></div>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Expert support"
                      className="relative z-10 rounded-lg shadow-lg w-full"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <p className="text-[#7f8c8d] mb-4">
                      Employees can access expert support for menstrual health concerns, including consultations with
                      healthcare professionals.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Virtual consultations with healthcare providers",
                        "Chat support for quick questions",
                        "Personalized recommendations",
                        "Referrals to specialists when needed",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                          <span className="text-[#2c3e50]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </BenefitAccordion>

              <BenefitAccordion title="Privacy & Security" icon={<Shield className="h-5 w-5" />}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[#7f8c8d] mb-4">
                      Your health data remains private and secure with our HIPAA-compliant platform.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "HIPAA compliance for maximum protection",
                        "No employer data sharing without consent",
                        "Secure cloud storage with encryption",
                        "Anonymized data for insights, with consent",
                        "Multi-factor authentication for secure access",
                        "User control over data access, edits, and deletions",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                          <span className="text-[#2c3e50]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Privacy and security"
                      className="relative z-10 rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>
              </BenefitAccordion>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - Side-by-Side */}
      <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
                Benefit Comparison
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">How We Compare</h2>
              <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
                See how Sanicle.cloud's comprehensive benefits package compares to traditional workplace benefits.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ComparisonCard
                title="Traditional Benefits"
                features={[
                  "Basic health insurance",
                  "Limited women's health coverage",
                  "Generic health resources",
                  "No menstrual product coverage",
                  "Limited privacy controls",
                  "One-size-fits-all approach",
                ]}
                included={false}
              />

              <ComparisonCard
                title="Sanicle.cloud Benefits"
                features={[
                  "Comprehensive menstrual health tracking",
                  "Personalized health insights",
                  "Monthly menstrual product allowance",
                  "Expert healthcare consultations",
                  "HIPAA-compliant privacy protection",
                  "Customizable to individual needs",
                ]}
              />
            </div>

            <div className="mt-12 text-center">
              <p className="text-[#7f8c8d] mb-6">Ready to upgrade your workplace benefits package?</p>
              <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white rounded-full px-8">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator - Interactive Visualization */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
                ROI Calculator
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">Calculate Your Benefits ROI</h2>
              <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
                See the potential return on investment from implementing Sanicle.cloud's menstrual health benefits.
              </p>
            </div>

            <div className="bg-[#f8f9fa] rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-6">Input Your Company Details</h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-[#2c3e50] font-medium mb-2">Number of Employees</label>
                      <div className="relative">
                        <input
                          type="range"
                          min="10"
                          max="1000"
                          step="10"
                          defaultValue="100"
                          className="w-full h-2 bg-[#e6f5f6] rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-[#7f8c8d] mt-1">
                          <span>10</span>
                          <span>500</span>
                          <span>1000</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#2c3e50] font-medium mb-2">Female Employees (%)</label>
                      <div className="relative">
                        <input
                          type="range"
                          min="10"
                          max="100"
                          step="5"
                          defaultValue="50"
                          className="w-full h-2 bg-[#e6f5f6] rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-[#7f8c8d] mt-1">
                          <span>10%</span>
                          <span>50%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#2c3e50] font-medium mb-2">
                        Average Monthly Menstrual-Related Absences
                      </label>
                      <div className="relative">
                        <input
                          type="range"
                          min="0"
                          max="3"
                          step="0.1"
                          defaultValue="1"
                          className="w-full h-2 bg-[#e6f5f6] rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-[#7f8c8d] mt-1">
                          <span>0 days</span>
                          <span>1.5 days</span>
                          <span>3 days</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#2c3e50] font-medium mb-2">Average Employee Salary (Annual)</label>
                      <div className="relative">
                        <input
                          type="range"
                          min="30000"
                          max="150000"
                          step="5000"
                          defaultValue="75000"
                          className="w-full h-2 bg-[#e6f5f6] rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-[#7f8c8d] mt-1">
                          <span>$30k</span>
                          <span>$75k</span>
                          <span>$150k</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-[#167d83] hover:bg-[#0e5a5f] text-white">Calculate ROI</Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-6">Estimated Annual ROI</h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#7f8c8d]">Reduced Absenteeism</p>
                        <p className="text-2xl font-bold text-[#2c3e50]">$24,000</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center">
                        <Clock className="h-8 w-8 text-[#167d83]" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#7f8c8d]">Increased Productivity</p>
                        <p className="text-2xl font-bold text-[#2c3e50]">$36,500</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-[#fef6e9] flex items-center justify-center">
                        <Zap className="h-8 w-8 text-[#EE4C23]" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#7f8c8d]">Improved Retention</p>
                        <p className="text-2xl font-bold text-[#2c3e50]">$42,000</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center">
                        <Users className="h-8 w-8 text-[#167d83]" />
                      </div>
                    </div>

                    <div className="relative pt-6">
                      <div className="absolute inset-0 bg-[#167d83]/5 rounded-xl"></div>
                      <div className="relative z-10 flex items-center justify-between p-4 bg-gradient-to-r from-[#167d83] to-[#0e5a5f] rounded-xl">
                        <div>
                          <p className="text-sm text-white/80">Total Annual ROI</p>
                          <p className="text-3xl font-bold text-white">$102,500</p>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                          <DollarSign className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <p className="text-[#7f8c8d] text-sm">
                        Based on industry averages and your inputs. Results may vary.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Staggered Quotes */}
      <section className="w-full py-12 md:py-16 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#167d83]/5 pattern-dots"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
                Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">What Our Users Say</h2>
              <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
                Hear from employees who have experienced the benefits of Sanicle.cloud.
              </p>
            </div>

            <div className="relative">
              {/* Large quote marks */}
              <div className="absolute -top-10 -left-10 text-9xl text-[#167d83]/10 font-serif">"</div>
              <div className="absolute -bottom-10 -right-10 text-9xl text-[#167d83]/10 font-serif">"</div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-7 md:row-span-1 bg-white rounded-2xl shadow-lg p-8 transform md:translate-y-12 z-20">
                  <p className="text-lg text-[#2c3e50] italic mb-6">
                    "The cycle tracking and personalized insights have been incredibly helpful. I can better plan my
                    work schedule around my cycle, and the product delivery is so convenient."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-4 font-bold">
                      JD
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">Jessica Davis</p>
                      <p className="text-sm text-[#7f8c8d]">Marketing Manager</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 md:col-start-8 md:row-start-1 bg-[#e6f5f6] rounded-2xl shadow-lg p-8 z-10">
                  <p className="text-lg text-[#2c3e50] italic mb-6">
                    "Having access to educational resources about PCOS has been life-changing. I finally understand my
                    condition better."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white text-[#167d83] flex items-center justify-center mr-4 font-bold">
                      AT
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">Amelia Thompson</p>
                      <p className="text-sm text-[#7f8c8d]">Software Engineer</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6 md:col-start-2 md:row-start-2 bg-[#fef6e9] rounded-2xl shadow-lg p-8 transform md:-translate-y-12 z-10">
                  <p className="text-lg text-[#2c3e50] italic mb-6">
                    "The expert consultations have been invaluable. I was able to discuss my concerns with a healthcare
                    provider without taking time off work."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white text-[#EE4C23] flex items-center justify-center mr-4 font-bold">
                      SL
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">Sarah Lee</p>
                      <p className="text-sm text-[#7f8c8d]">HR Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient with Floating Elements */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-[#167d83] to-[#0e5a5f] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5"></div>

        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
          <Heart className="h-8 w-8 text-white/30" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
          <Shield className="h-10 w-10 text-white/30" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Transform Your Workplace Health Today</h2>

            <p className="text-white/80 mb-8 text-xl">
              Join the growing number of forward-thinking companies prioritizing women's health in the workplace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#167d83] hover:bg-white/90 rounded-full px-8">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8"
              >
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


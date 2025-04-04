"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, X, DollarSign, Shield, Zap, Users, Star } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

// Custom pricing toggle component
const PricingToggle = ({
  onToggle,
}: {
  onToggle: (isAnnual: boolean) => void
}) => {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleToggle = () => {
    setIsAnnual(!isAnnual)
    onToggle(!isAnnual)
  }

  return (
    <div className="flex items-center justify-center space-x-4">
      <span className={`text-sm font-medium ${!isAnnual ? "text-[#167d83]" : "text-[#7f8c8d]"}`}>Monthly</span>
      <button
        onClick={handleToggle}
        className="relative w-14 h-7 bg-[#e6f5f6] rounded-full p-1 transition-colors duration-300"
      >
        <div
          className={`absolute top-1 w-5 h-5 bg-[#167d83] rounded-full transition-transform duration-300 ${
            isAnnual ? "translate-x-7" : "translate-x-0"
          }`}
        ></div>
      </button>
      <div className="flex items-center">
        <span className={`text-sm font-medium ${isAnnual ? "text-[#167d83]" : "text-[#7f8c8d]"}`}>Annual</span>
        <span className="ml-2 text-xs font-medium text-white bg-[#EE4C23] px-2 py-1 rounded-full">Save 20%</span>
      </div>
    </div>
  )
}

// Custom feature comparison component
const FeatureComparison = ({
  feature,
  starter,
  professional,
  enterprise,
}: {
  feature: string
  starter: boolean | string
  professional: boolean | string
  enterprise: boolean | string
}) => {
  return (
    <div className="grid grid-cols-4 py-3 border-b border-gray-100 items-center">
      <div className="text-[#2c3e50] font-medium">{feature}</div>
      <div className="text-center">
        {typeof starter === "boolean" ? (
          starter ? (
            <CheckCircle className="h-5 w-5 text-[#167d83] mx-auto" />
          ) : (
            <X className="h-5 w-5 text-gray-300 mx-auto" />
          )
        ) : (
          <span className="text-[#7f8c8d]">{starter}</span>
        )}
      </div>
      <div className="text-center bg-[#e6f5f6]/30 py-2">
        {typeof professional === "boolean" ? (
          professional ? (
            <CheckCircle className="h-5 w-5 text-[#167d83] mx-auto" />
          ) : (
            <X className="h-5 w-5 text-gray-300 mx-auto" />
          )
        ) : (
          <span className="text-[#7f8c8d]">{professional}</span>
        )}
      </div>
      <div className="text-center">
        {typeof enterprise === "boolean" ? (
          enterprise ? (
            <CheckCircle className="h-5 w-5 text-[#167d83] mx-auto" />
          ) : (
            <X className="h-5 w-5 text-gray-300 mx-auto" />
          )
        ) : (
          <span className="text-[#7f8c8d]">{enterprise}</span>
        )}
      </div>
    </div>
  )
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const handlePricingToggle = (annual: boolean) => {
    setIsAnnual(annual)
  }

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section - Geometric Background */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        {/* Geometric background */}
        <div className="absolute inset-0 bg-[#f8f9fa]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 100,80 0,100" fill="#e6f5f6" opacity="0.5" />
            <polygon points="0,100 100,80 100,100" fill="#fef6e9" opacity="0.5" />
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-4">
              Flexible Pricing Options
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c3e50] mb-6">
              Simple, Transparent Pricing
            </h1>

            <p className="text-lg md:text-xl text-[#7f8c8d] mb-8 max-w-2xl mx-auto">
              Choose the plan that best fits your organization's size and needs. All plans include our core menstrual
              health benefits platform.
            </p>

            <PricingToggle onToggle={handlePricingToggle} />
          </div>
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

      {/* Pricing Plans - 3D Cards */}
      <section className="w-full py-12 md:py-16 bg-white relative -mt-20 z-20">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-black/5 rounded-2xl transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <Card className="border-none shadow-lg h-full relative z-10 overflow-hidden transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#167d83]"></div>
                <CardHeader className="pb-4 border-b">
                  <CardTitle className="text-2xl font-bold text-[#2c3e50] flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3">
                      <Star className="h-5 w-5 text-[#167d83]" />
                    </div>
                    Starter
                  </CardTitle>
                  <p className="text-[#7f8c8d]">For small businesses</p>
                  <div className="mt-4 flex items-baseline">
                    <DollarSign className="h-6 w-6 text-[#167d83]" />
                    <span className="text-4xl font-bold text-[#2c3e50]">{isAnnual ? "6" : "8"}</span>
                    <span className="text-[#7f8c8d] ml-1">per employee / month</span>
                  </div>
                  {isAnnual && <div className="mt-1 text-sm text-[#EE4C23]">Save $24 per employee annually</div>}
                </CardHeader>
                <CardContent className="py-6">
                  <ul className="space-y-3">
                    {[
                      "Up to 50 employees",
                      "Basic menstrual health tracking",
                      "Educational resources",
                      "Standard reporting",
                      "Email support",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2 pb-6">
                  <Button className="w-full bg-[#167d83] hover:bg-[#0e5a5f] text-white">Get Started</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Professional Plan */}
            <div className="flex-1 relative group transform scale-105 z-20">
              <div className="absolute inset-0 bg-black/5 rounded-2xl transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <Card className="border-none shadow-2xl h-full relative z-10 overflow-hidden transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#EE4C23]"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#EE4C23] text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <CardHeader className="pb-4 border-b pt-6">
                  <CardTitle className="text-2xl font-bold text-[#2c3e50] flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#fef6e9] flex items-center justify-center mr-3">
                      <Zap className="h-5 w-5 text-[#EE4C23]" />
                    </div>
                    Professional
                  </CardTitle>
                  <p className="text-[#7f8c8d]">For mid-sized companies</p>
                  <div className="mt-4 flex items-baseline">
                    <DollarSign className="h-6 w-6 text-[#EE4C23]" />
                    <span className="text-4xl font-bold text-[#2c3e50]">{isAnnual ? "10" : "12"}</span>
                    <span className="text-[#7f8c8d] ml-1">per employee / month</span>
                  </div>
                  {isAnnual && <div className="mt-1 text-sm text-[#EE4C23]">Save $24 per employee annually</div>}
                </CardHeader>
                <CardContent className="py-6">
                  <ul className="space-y-3">
                    {[
                      "Up to 250 employees",
                      "Advanced health tracking",
                      "Personalized recommendations",
                      "Product allowances",
                      "Advanced analytics",
                      "Priority support",
                      "HR admin dashboard",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#EE4C23] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2 pb-6">
                  <Button className="w-full bg-[#EE4C23] hover:bg-[#d43d18] text-white">Get Started</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Enterprise Plan */}
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-black/5 rounded-2xl transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <Card className="border-none shadow-lg h-full relative z-10 overflow-hidden transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#167d83]"></div>
                <CardHeader className="pb-4 border-b">
                  <CardTitle className="text-2xl font-bold text-[#2c3e50] flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-[#167d83]" />
                    </div>
                    Enterprise
                  </CardTitle>
                  <p className="text-[#7f8c8d]">For large organizations</p>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold text-[#2c3e50]">Custom</span>
                    <span className="text-[#7f8c8d] ml-1">pricing</span>
                  </div>
                </CardHeader>
                <CardContent className="py-6">
                  <ul className="space-y-3">
                    {[
                      "Unlimited employees",
                      "All Professional features",
                      "Custom integration",
                      "Dedicated account manager",
                      "Custom reporting",
                      "SSO authentication",
                      "On-site training",
                      "SLA guarantees",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2 pb-6">
                  <Button className="w-full bg-[#167d83] hover:bg-[#0e5a5f] text-white">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison - Interactive Table */}
      <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
                Feature Comparison
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">Compare Features</h2>
              <p className="text-[#7f8c8d]">
                Find the plan that includes all the features you need for your organization.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-[#167d83] text-white p-4">
                <div className="font-semibold">Feature</div>
                <div className="text-center font-semibold">Starter</div>
                <div className="text-center font-semibold bg-[#0e5a5f] py-2 rounded-t-lg">Professional</div>
                <div className="text-center font-semibold">Enterprise</div>
              </div>

              <div className="p-4">
                <FeatureComparison feature="Mobile App" starter={true} professional={true} enterprise={true} />
                <FeatureComparison feature="Cycle Tracking" starter={true} professional={true} enterprise={true} />
                <FeatureComparison
                  feature="Educational Resources"
                  starter={true}
                  professional={true}
                  enterprise={true}
                />
                <FeatureComparison
                  feature="Personalized Recommendations"
                  starter={false}
                  professional={true}
                  enterprise={true}
                />
                <FeatureComparison feature="Product Allowances" starter={false} professional={true} enterprise={true} />
                <FeatureComparison
                  feature="Admin Dashboard"
                  starter="Basic"
                  professional="Advanced"
                  enterprise="Custom"
                />
                <FeatureComparison
                  feature="Analytics & Reporting"
                  starter="Basic"
                  professional="Advanced"
                  enterprise="Custom"
                />
                <FeatureComparison feature="Support" starter="Email" professional="Priority" enterprise="Dedicated" />
                <FeatureComparison
                  feature="SSO Authentication"
                  starter={false}
                  professional={false}
                  enterprise={true}
                />
                <FeatureComparison feature="SLA Guarantees" starter={false} professional={false} enterprise={true} />
              </div>
            </div>
          </div>
        </div>
        {/* 在Feature Comparison底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* FAQ Section - Expandable Cards */}
      <section className="w-full py-12 md:py-16 bg-white relative -mt-10 z-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">Frequently Asked Questions</h2>
              <p className="text-[#7f8c8d]">Find answers to common questions about our pricing and plans.</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "How is pricing calculated?",
                  answer:
                    "Our pricing is based on the number of eligible employees in your organization. We offer volume discounts for larger organizations. Contact our sales team for a custom quote.",
                },
                {
                  question: "Can I change plans later?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the start of your next billing cycle.",
                },
                {
                  question: "Is there a setup fee?",
                  answer:
                    "There is no setup fee for Starter and Professional plans. Enterprise plans may include a one-time implementation fee depending on the complexity of your requirements.",
                },
                {
                  question: "Do you offer discounts for non-profits?",
                  answer:
                    "Yes, we offer special pricing for non-profit organizations. Please contact our sales team with your non-profit credentials to learn more about our discount program.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, ACH transfers, and wire transfers. Enterprise customers can also be invoiced with net-30 payment terms.",
                },
                {
                  question: "Is there a contract or commitment?",
                  answer:
                    "Monthly plans can be canceled at any time. Annual plans offer a discount but require a one-year commitment. Enterprise plans typically have custom contract terms.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-[#f8f9fa] rounded-xl overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${index}`} className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center text-left">
                          <div className="w-8 h-8 rounded-full bg-[#e6f5f6] flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-[#167d83] font-semibold">{index + 1}</span>
                          </div>
                          <span className="text-lg font-semibold text-[#2c3e50]">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-0 ml-11 text-[#7f8c8d]">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 在FAQ Section底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#167d83"
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* CTA Section - Gradient with Floating Elements */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#167d83] to-[#0e5a5f] text-white relative -mt-10 z-20 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to get started?</h2>

            <p className="text-white/80 mb-8 text-xl">
              Choose the plan that's right for your organization or contact us for a custom solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>

            <div className="mt-12 flex justify-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <p className="text-white font-bold">Secure Payments</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <p className="text-white font-bold">500+ Customers</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <p className="text-white font-bold">4.9/5 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


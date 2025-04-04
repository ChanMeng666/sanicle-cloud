"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle, Calendar, Clock, Users, Star } from "lucide-react"

export default function DemoRequestPage() {
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
    <main className="flex flex-col items-center">
      {/* Hero Section - Minimalist Design */}
      <section className="w-full bg-[#167d83] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              Schedule a Demo
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
              See Sanicle.cloud in Action
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Schedule a personalized demo to discover how our platform can transform your workplace benefits and
              support women's health.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Request Form - Multi-step */}
      <section className="w-full py-12 md:py-16 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#fef6e9] opacity-50 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#e6f5f6] opacity-50 rounded-tr-full"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {!formSubmitted ? (
                  <>
                    {/* Progress Steps */}
                    <div className="bg-[#f8f9fa] p-4 border-b">
                      <div className="flex justify-between">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-1 ${
                                step >= i ? "bg-[#167d83] text-white" : "bg-gray-200 text-gray-500"
                              }`}
                            >
                              {i}
                            </div>
                            <span className={`text-xs ${step >= i ? "text-[#167d83]" : "text-gray-500"}`}>
                              {i === 1 ? "Your Info" : i === 2 ? "Company Details" : "Preferences"}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 h-1 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-[#167d83] rounded-full transition-all duration-300"
                          style={{ width: `${(step / 3) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Form Steps */}
                    <form onSubmit={handleSubmit} className="p-6">
                      {step === 1 && (
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold text-[#2c3e50] mb-4">Your Information</h2>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input id="firstName" placeholder="Enter your first name" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input id="lastName" placeholder="Enter your last name" required />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Work Email</Label>
                            <Input id="email" type="email" placeholder="you@company.com" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="Your phone number" />
                          </div>

                          <div className="pt-4 flex justify-end">
                            <Button
                              type="button"
                              onClick={nextStep}
                              className="bg-[#167d83] hover:bg-[#0e5a5f] text-white"
                            >
                              Next Step <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold text-[#2c3e50] mb-4">Company Details</h2>

                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input id="company" placeholder="Your company name" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="jobTitle">Job Title</Label>
                            <Input id="jobTitle" placeholder="Your position" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="companySize">Company Size</Label>
                            <Select>
                              <SelectTrigger id="companySize">
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-50">1-50 employees</SelectItem>
                                <SelectItem value="51-200">51-200 employees</SelectItem>
                                <SelectItem value="201-500">201-500 employees</SelectItem>
                                <SelectItem value="501-1000">501-1000 employees</SelectItem>
                                <SelectItem value="1000+">1000+ employees</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="industry">Industry</Label>
                            <Select>
                              <SelectTrigger id="industry">
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="technology">Technology</SelectItem>
                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                                <SelectItem value="retail">Retail</SelectItem>
                                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="pt-4 flex justify-between">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={prevStep}
                              className="border-[#167d83] text-[#167d83]"
                            >
                              Back
                            </Button>
                            <Button
                              type="button"
                              onClick={nextStep}
                              className="bg-[#167d83] hover:bg-[#0e5a5f] text-white"
                            >
                              Next Step <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold text-[#2c3e50] mb-4">Your Preferences</h2>

                          <div className="space-y-2">
                            <Label htmlFor="interests">What are you most interested in learning about?</Label>
                            <Textarea
                              id="interests"
                              placeholder="Tell us about your specific needs and interests"
                              rows={4}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Preferred Demo Format</Label>
                            <div className="grid grid-cols-2 gap-4 pt-2">
                              <div className="border rounded-lg p-4 cursor-pointer hover:border-[#167d83] hover:bg-[#e6f5f6]/20 transition-colors">
                                <div className="flex items-center mb-2">
                                  <input type="radio" id="format-live" name="format" className="mr-2" />
                                  <Label htmlFor="format-live" className="cursor-pointer font-medium">
                                    Live Demo
                                  </Label>
                                </div>
                                <p className="text-sm text-[#7f8c8d]">Interactive session with a product specialist</p>
                              </div>
                              <div className="border rounded-lg p-4 cursor-pointer hover:border-[#167d83] hover:bg-[#e6f5f6]/20 transition-colors">
                                <div className="flex items-center mb-2">
                                  <input type="radio" id="format-recorded" name="format" className="mr-2" />
                                  <Label htmlFor="format-recorded" className="cursor-pointer font-medium">
                                    Recorded Demo
                                  </Label>
                                </div>
                                <p className="text-sm text-[#7f8c8d]">Watch a pre-recorded demo at your convenience</p>
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 flex justify-between">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={prevStep}
                              className="border-[#167d83] text-[#167d83]"
                            >
                              Back
                            </Button>
                            <Button type="submit" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </form>
                  </>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#167d83] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">Thank You!</h3>
                    <p className="text-[#7f8c8d] mb-6 max-w-md mx-auto">
                      Your demo request has been submitted successfully. One of our team members will contact you
                      shortly to schedule your personalized demo.
                    </p>
                    <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white">Back to Home</Button>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-[#2c3e50] mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-2 text-sm font-bold">
                    ?
                  </span>
                  What to Expect
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-[#e6f5f6] rounded-full">
                      <Calendar className="h-6 w-6 text-[#167d83]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2c3e50] text-lg mb-1">Scheduling</h3>
                      <p className="text-[#7f8c8d]">
                        After submitting your request, our team will reach out within 24 hours to schedule a convenient
                        time for your demo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-[#e6f5f6] rounded-full">
                      <Clock className="h-6 w-6 text-[#167d83]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2c3e50] text-lg mb-1">Personalized Demo</h3>
                      <p className="text-[#7f8c8d]">
                        Our 30-minute demo is tailored to your organization's specific needs and interests in menstrual
                        health benefits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-[#e6f5f6] rounded-full">
                      <Users className="h-6 w-6 text-[#167d83]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2c3e50] text-lg mb-1">Q&A Session</h3>
                      <p className="text-[#7f8c8d]">
                        After the demo, our team will answer any questions you have about implementation, pricing, and
                        next steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-none shadow-md bg-[#fef6e9]">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-[#EE4C23] fill-[#EE4C23]" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[#2c3e50] italic mb-2">
                        "The demo was incredibly informative and helped us understand exactly how Sanicle.cloud could
                        benefit our female employees."
                      </p>
                      <p className="text-sm font-semibold text-[#2c3e50]">Jennifer Lee</p>
                      <p className="text-xs text-[#7f8c8d]">HR Director, TechCorp Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#2c3e50] text-lg mb-2">Not ready for a demo yet?</h3>
                  <p className="text-[#7f8c8d] mb-4">
                    If you'd prefer to learn more before scheduling a demo, we're happy to provide additional
                    information.
                  </p>
                  <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                    Download Brochure
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel Style */}
      <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">What Our Clients Say</h2>
            <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
              Hear from organizations that have transformed their workplace with Sanicle.cloud.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "The demo was incredibly informative and helped us understand exactly how Sanicle.cloud could benefit our female employees.",
                author: "Jennifer Lee",
                role: "HR Director, TechCorp Inc.",
              },
              {
                quote:
                  "After seeing the platform in action, the decision to implement Sanicle.cloud was easy. The ROI has been tremendous in terms of employee satisfaction.",
                author: "Michael Rodriguez",
                role: "Benefits Manager, Global Solutions",
              },
              {
                quote:
                  "The personalized demo addressed all our concerns about privacy and implementation. The onboarding process was seamless.",
                author: "Sarah Johnson",
                role: "Chief People Officer, Innovate Co.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className={`border-none shadow-md transform ${index === 1 ? "md:-translate-y-4" : ""}`}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="inline-block h-5 w-5 text-[#EE4C23] fill-[#EE4C23]" />
                    ))}
                  </div>
                  <p className="text-[#2c3e50] mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#167d83] text-white flex items-center justify-center mr-3">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">{testimonial.author}</p>
                      <p className="text-sm text-[#7f8c8d]">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Background */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-r from-[#167d83] to-[#0e5a5f] text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to transform your workplace benefits?</h2>
            <p className="text-white/80 mb-8">
              Schedule your demo today and discover how Sanicle.cloud can support your female employees.
            </p>
            <Button className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
              Request Your Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}


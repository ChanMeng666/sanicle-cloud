"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle, Calendar, Users, Building, Clock, ChevronRight } from "lucide-react"
import { FormStep1 } from "./form-steps/FormStep1"
import { FormStep2 } from "./form-steps/FormStep2"
import { FormStep3 } from "./form-steps/FormStep3"
import { SuccessMessage } from "./SuccessMessage"
import { Card, CardContent } from "@/components/ui/card"

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
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-beige via-beige-light to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 inset-x-0 h-32 bg-pattern-dots opacity-20"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-secondary/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Book Your <span className="text-primary relative">Personalized Demo<span className="absolute bottom-1 -z-10 left-0 w-full h-3 bg-primary/10"></span></span>
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Fill out the form below, and our product experts will contact you promptly to arrange a personalized demonstration showcasing how our platform can meet your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-3">
            <Card variant={formSubmitted ? "gradient" : "default"} className="overflow-hidden border-primary/10">
              {!formSubmitted ? (
                <>
                  {/* Progress steps */}
                  <div className="bg-gradient-to-r from-beige to-white p-5 border-b border-primary/10">
                    <div className="flex justify-between">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mb-2 transition-all duration-300 ${
                              step >= i 
                                ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-md" 
                                : "bg-primary/10 text-primary/60"
                            }`}
                          >
                            {i}
                          </div>
                          <span className={`text-xs ${step >= i ? "text-primary font-medium" : "text-slate"}`}>
                            {i === 1 ? "Personal Info" : i === 2 ? "Company Details" : "Your Preferences"}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 h-1.5 bg-primary/10 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500"
                        style={{ width: `${(step / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Form steps */}
                  <form onSubmit={handleSubmit} className="p-6 md:p-8">
                    {step === 1 && <FormStep1 onNext={nextStep} />}
                    {step === 2 && <FormStep2 onNext={nextStep} onPrev={prevStep} />}
                    {step === 3 && <FormStep3 onSubmit={handleSubmit} onPrev={prevStep} />}
                  </form>
                </>
              ) : (
                <SuccessMessage />
              )}
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card variant="beige" hover className="sticky top-4 border-secondary/10">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">Why Choose a Demo?</h3>
                </div>
                
                <ul className="space-y-5">
                  {[
                    {
                      icon: <Users className="h-5 w-5" />,
                      text: "Understand how our platform can meet your specific needs",
                    },
                    {
                      icon: <ArrowRight className="h-5 w-5" />,
                      text: "See our services and features in action",
                    },
                    {
                      icon: <Building className="h-5 w-5" />,
                      text: "Learn about implementation process and required resources",
                    },
                    {
                      icon: <CheckCircle className="h-5 w-5" />,
                      text: "Ask questions and get real-time answers",
                    },
                    {
                      icon: <Clock className="h-5 w-5" />,
                      text: "Discuss pricing and ROI analysis",
                    },
                  ].map((point, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="bg-primary-pale h-8 w-8 rounded-lg flex items-center justify-center text-primary mr-3 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        {point.icon}
                      </div>
                      <span className="text-slate pt-1">{point.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-secondary/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-pale to-beige border border-primary/20 flex items-center justify-center mr-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Customer Advisor"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Customer Advisor</p>
                      <p className="text-sm text-slate">Product Expert</p>
                    </div>
                  </div>
                  <Card variant="outline" className="p-4 border-primary/20">
                    <p className="text-sm text-slate italic">
                      "I'll personally guide you through our platform and ensure you have all the necessary information to evaluate if our services are right for your organization."
                    </p>
                  </Card>
                  
                  <Button variant="soft" size="lg" className="w-full mt-4" rounded="lg">
                    <span>View Customer Reviews</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 
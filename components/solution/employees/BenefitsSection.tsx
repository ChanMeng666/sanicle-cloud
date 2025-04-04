"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Shield, Calendar, ChevronRight, BarChart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function BenefitsSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-beige/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
              <span className="relative inline-block">
                Health Benefits
                <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/20 -z-10"></span>
              </span>
            </h2>
            <p className="text-slate text-lg max-w-xl">
              Explore how our health management platform helps you manage health and improve workplace experience.
            </p>
          </div>
          <Button asChild variant="soft-secondary" size="lg" rounded="lg" className="mt-6 md:mt-0 group">
            <Link href="/all-benefits" className="flex items-center">
              View All Benefits <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Benefits content blocks */}
        <div className="space-y-20 md:space-y-32">
          {/* Benefit 1: Health Tracking */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="border-primary/10 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary-pale flex items-center justify-center mb-6">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Personalized Health Tracking</h3>
                  <p className="text-lg text-slate mb-8">
                    Use our AI-driven platform to track and predict your health status, receive personalized reminders and recommendations to better manage your daily health.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Precise health data analysis",
                      "Personalized health insights",
                      "Mobile access anytime, anywhere"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start group">
                        <CheckCircle className="h-6 w-6 text-secondary mr-4 mt-0.5 flex-shrink-0 group-hover:text-secondary/80 transition-colors" />
                        <span className="text-charcoal text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="secondary" size="lg" rounded="lg" className="mt-8">
                    Learn More Features
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-2xl opacity-30 blur-xl transform rotate-3"></div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Health Tracking"
                  className="relative z-10 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <div className="flex items-center text-sm">
                    <BarChart className="h-6 w-6 text-secondary mr-3" />
                    <div>
                      <p className="font-bold text-charcoal">Data Insights</p>
                      <p className="text-slate text-xs">Smart analysis improves health conditions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 2: Expert Resources */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-30 blur-xl transform -rotate-3"></div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Expert Resources"
                  className="relative z-10 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <div className="flex items-center text-sm">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <p className="font-bold text-charcoal">Expert Support</p>
                      <p className="text-slate text-xs">Professional team provides consultation services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="border-primary/10 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-beige flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Expert Resources and Support</h3>
                  <p className="text-lg text-slate mb-8">
                    Access educational content and resources reviewed by healthcare professionals to help you understand and manage your health, providing comprehensive health support.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Professionally verified health content",
                      "Personalized recommended articles and videos",
                      "Online expert consultation services"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start group">
                        <CheckCircle className="h-6 w-6 text-primary mr-4 mt-0.5 flex-shrink-0 group-hover:text-primary/80 transition-colors" />
                        <span className="text-charcoal text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="default" size="lg" rounded="lg" className="mt-8">
                    Browse Expert Resources
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefit 3: Privacy and Security */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card variant="gradient" className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Privacy and Security</h3>
                  <p className="text-lg text-white/80 mb-8">
                    Your health data remains private and secure on our industry-standard compliant platform, ensuring personal privacy is fully protected.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Complete control of your data",
                      "No data shared with employers without consent",
                      "Secure encryption and storage"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start group">
                        <CheckCircle className="h-6 w-6 text-white/90 mr-4 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                        <span className="text-white text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="lg" rounded="lg" className="mt-8 border-white text-white hover:bg-white/20">
                    View Privacy Policy
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-2xl opacity-40 blur-xl transform rotate-3"></div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Data Privacy and Security"
                  className="relative z-10 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <div className="flex items-center text-sm">
                    <Shield className="h-6 w-6 text-secondary mr-3" />
                    <div>
                      <p className="font-bold text-charcoal">Data Protection</p>
                      <p className="text-slate text-xs">100% Secure Encryption</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <Button asChild size="xl" variant="secondary" rounded="full" className="shadow-xl">
            <Link href="/signup">Experience All Benefits Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 
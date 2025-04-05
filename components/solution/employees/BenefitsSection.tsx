"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Shield, Calendar, ChevronRight, BarChart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function BenefitsSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-white relative overflow-hidden">
      {/* 顶部过渡渐变 - 从Hero部分过渡 */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-beige-light/30 to-transparent z-0"></div>
      
      {/* 波点背景 */}
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.04] z-0"></div>
      
      {/* 底部过渡渐变 - 向下一部分过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-50/20 to-transparent z-0"></div>
      
      {/* 装饰叶片元素 */}
      <div className="absolute -top-20 right-0 w-[300px] h-[300px] opacity-[0.06] transform rotate-45 z-0">
        <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      <div className="absolute -bottom-20 left-0 w-[300px] h-[300px] opacity-[0.05] transform -rotate-45 z-0">
        <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      
      {/* 彩色蜡笔线条装饰 */}
      <div className="absolute top-0 left-0 right-0 z-[1]">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,0 400,8 600,4 C800,0 1000,6 1200,4" stroke="#f472b6" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-3">
              <span className="relative inline-block">
                Health Benefits
                <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/20 -z-10 rounded-full"></span>
              </span>
            </h2>
            <p className="text-neutral-600 text-lg max-w-xl">
              Explore how our health management platform helps you manage health and improve workplace experience.
            </p>
          </div>
          <Button asChild className="bg-secondary/90 hover:bg-secondary text-white px-6 py-2.5 rounded-full mt-6 md:mt-0 group shadow-md hover:shadow-lg transition-all">
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
              <Card className="border-primary/10 hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary-pale flex items-center justify-center mb-6 shadow-sm">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Personalized Health Tracking</h3>
                  <p className="text-lg text-neutral-600 mb-8">
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
                        <span className="text-neutral-700 text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full mt-8 shadow-md hover:shadow-lg transition-all">
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
                      <p className="font-bold text-neutral-800">Data Insights</p>
                      <p className="text-neutral-500 text-xs">Smart analysis improves health conditions</p>
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
                      <p className="font-bold text-neutral-800">Expert Support</p>
                      <p className="text-neutral-500 text-xs">Professional team provides consultation services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="border-primary/10 hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-beige flex items-center justify-center mb-6 shadow-sm">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Expert Resources and Support</h3>
                  <p className="text-lg text-neutral-600 mb-8">
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
                        <span className="text-neutral-700 text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full mt-8 shadow-md hover:shadow-lg transition-all">
                    Browse Expert Resources
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefit 3: Privacy and Security */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="bg-gradient-to-br from-primary via-primary/90 to-teal-600 hover:shadow-lg transition-all duration-300 text-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-6 shadow-sm">
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
                  
                  <Button variant="outline" className="border-white text-white hover:bg-white/20 px-6 py-2.5 rounded-full mt-8 transition-all">
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
                      <p className="font-bold text-neutral-800">Data Protection</p>
                      <p className="text-neutral-500 text-xs">100% Secure Encryption</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white px-10 py-3 rounded-full shadow-xl transform transition-transform hover:-translate-y-0.5">
            <Link href="/signup">Experience All Benefits Now</Link>
          </Button>
        </div>
      </div>
      
      {/* 波浪形分隔线 - 向下一部分过渡 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L60,53.3C120,75,240,117,360,122.7C480,128,600,96,720,85.3C840,75,960,85,1080,90.7C1200,96,1320,96,1380,96L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
      
      {/* 彩色蜡笔线条装饰 - 底部 */}
      <div className="absolute bottom-[15%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,8 400,0 600,4 C800,8 1000,2 1200,4" stroke="#06b6d4" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
} 
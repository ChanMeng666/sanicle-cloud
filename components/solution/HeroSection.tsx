"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, CheckCircle, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden bg-beige">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>

      {/* Circular decorations */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/10"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-secondary/10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="bg-primary/10 text-primary rounded-full px-4 py-2 inline-flex items-center gap-2 font-medium">
              <CheckCircle className="h-5 w-5" />
              Enterprise Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Cloud services <span className="text-primary relative">
                tailored
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-10"></span>
              </span> for your business
            </h1>
            
            <p className="text-slate text-lg md:text-xl max-w-2xl">
              We provide professional cloud solutions that meet the needs of businesses across different industries and scales, helping you accelerate digital transformation and improve operational efficiency.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" variant="default" rounded="lg" className="shadow-lg">
                <Link href="/demo">Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="soft" rounded="lg">
                <Link href="/pricing">View Plans & Pricing</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary-pale flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-charcoal">500+</h3>
                <p className="text-sm text-slate">Trusted by Businesses</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-secondary-light/20 flex items-center justify-center mb-3">
                  <BarChart className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-charcoal">99.9%</h3>
                <p className="text-sm text-slate">Service Availability</p>
              </div>
              
              <div className="hidden md:block bg-white rounded-xl p-4 shadow-sm border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-beige-dark flex items-center justify-center mb-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-charcoal">Customizable</h3>
                <p className="text-sm text-slate">Flexible Configuration</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 border border-primary/5 transform hover:-rotate-1 transition-transform duration-300">
              <div className="absolute -top-6 -right-6 bg-primary text-white rounded-lg py-2 px-4 shadow-lg">
                Business Solutions
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Needs Analysis</h3>
                    <p className="text-sm text-slate">Professional consultation based on your business needs</p>
                  </div>
                </div>
                
                <div className="w-full h-1 bg-gray-100 relative">
                  <div className="absolute top-0 left-0 h-full w-3/4 bg-primary rounded-full"></div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-bold mr-3">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Solution Design</h3>
                    <p className="text-sm text-slate">Custom-tailored complete solution for you</p>
                  </div>
                </div>
                
                <div className="w-full h-1 bg-gray-100 relative">
                  <div className="absolute top-0 left-0 h-full w-1/2 bg-primary-light rounded-full"></div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold mr-3">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Implementation</h3>
                    <p className="text-sm text-slate">Efficient implementation by professional team</p>
                  </div>
                </div>
                
                <div className="w-full h-1 bg-gray-100 relative">
                  <div className="absolute top-0 left-0 h-full w-1/4 bg-secondary rounded-full"></div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center text-white font-bold mr-3">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Support</h3>
                    <p className="text-sm text-slate">24/7 technical support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave bottom */}
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
  )
} 

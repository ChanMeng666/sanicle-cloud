"use client"

import { CheckCircle, Shield, Smartphone, Zap, Users, Clock, Bell, FileText } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Mobile Application",
      description:
        "User-friendly mobile application for employees to track and manage their menstrual health.",
      features: ["Intuitive Cycle Tracking", "Personalized Insights", "Educational Resources"],
      color: "bg-primary",
      image: "/placeholder.svg?height=300&width=400",
      position: "right"
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "AI-Driven Insights",
      description:
        "Advanced analytics and machine learning providing personalized health recommendations.",
      features: ["Pattern Recognition", "Personalized Recommendations", "Predictive Analytics"],
      color: "bg-secondary",
      image: "/placeholder.svg?height=300&width=400",
      position: "left"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Privacy Controls",
      description: "Comprehensive privacy settings giving users control over their health data.",
      features: ["Granular Sharing Controls", "Data Export Options", "Anonymous Insights"],
      color: "bg-primary",
      image: "/placeholder.svg?height=300&width=400",
      position: "right"
    },
    {
      icon: <Bell className="h-8 w-8 text-white" />,
      title: "Smart Notifications",
      description: "Customizable alerts and reminders to help users stay on top of their health.",
      features: ["Personalized Reminders", "Appointment Alerts", "Medication Tracking"],
      color: "bg-secondary",
      image: "/placeholder.svg?height=300&width=400",
      position: "left"
    }
  ]

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-pale/50 rounded-bl-[100px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary-pale/50 rounded-tr-[100px] z-0"></div>
      
      {/* Floating decorative elements */}
      <div className="hidden md:block absolute top-1/4 right-10 h-16 w-16 bg-primary/10 rounded-full animate-float"></div>
      <div className="hidden md:block absolute bottom-1/4 left-10 h-20 w-20 bg-secondary/10 rounded-full animate-float animation-delay-1000"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Platform <span className="text-primary">Features</span>
          </h2>
          <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto">
            Explore our comprehensive platform features providing all-round health support for female employees.
          </p>
        </div>

        {/* Zigzag Layout */}
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${feature.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              {/* Text content */}
              <div className="w-full md:w-1/2 md:px-6 mb-8 md:mb-0">
                <div className={`${feature.color} w-14 h-1 rounded-full mb-4`}></div>
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mr-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal">{feature.title}</h3>
                </div>
                
                <p className="text-slate mb-6">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 ${feature.color === "bg-primary" ? "text-primary" : "text-secondary"} mr-3 flex-shrink-0`} />
                      <span className="text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Image/visual content */}
              <div className="w-full md:w-1/2 md:px-6">
                <div className="relative">
                  {/* Decorative background */}
                  <div className={`absolute inset-0 ${feature.color}/10 rounded-2xl transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} scale-105`}></div>
                  
                  {/* Main image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-auto object-cover"
                    />
                    
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-tr from-${feature.color === "bg-primary" ? "primary" : "secondary"}/20 to-transparent mix-blend-overlay`}></div>
                    
                    {/* Feature indicator */}
                    <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium shadow-md ${feature.color === "bg-primary" ? "text-primary" : "text-secondary"}`}>
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom feature highlight */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto bg-primary-pale rounded-2xl p-6 md:p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl transform scale-150"></div>
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center">
                  <FileText className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Enterprise Reporting Dashboard</h3>
              <p className="text-slate mb-4">
                Comprehensive analytics dashboard providing employers with anonymized, aggregated insights to better understand workforce health needs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-primary-pale text-primary text-xs font-medium rounded-full">
                  Anonymous Data Analysis
                </span>
                <span className="inline-block px-3 py-1 bg-primary-pale text-primary text-xs font-medium rounded-full">
                  Wellness Trend Reporting
                </span>
                <span className="inline-block px-3 py-1 bg-primary-pale text-primary text-xs font-medium rounded-full">
                  ROI Measurement Tools
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Upcoming features teaser */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-pale text-primary text-sm font-medium">
            <span className="mr-2">🚀</span> More features coming soon
          </div>
        </div>
      </div>
    </section>
  )
} 
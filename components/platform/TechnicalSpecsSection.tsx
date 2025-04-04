"use client"

import { CheckCircle, Shield, Database, Lock, Monitor, Zap, Server } from "lucide-react"
import { useEffect, useState } from "react"

export function TechnicalSpecsSection() {
  const securityFeatures = [
    "HIPAA compliance for medical data protection",
    "SOC 2 Type II certified infrastructure",
    "End-to-end encryption for all data",
    "Multi-factor authentication",
    "Regular security audits and penetration testing",
    "Role-based access control",
  ]

  const techSpecs = [
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Security",
      description: "Enterprise-grade security protocols",
      details: "HIPAA compliant, SOC 2 Type II certified",
      color: "bg-[#167d83]"
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: "Privacy",
      description: "Advanced data protection mechanisms",
      details: "End-to-end encryption, secure data storage",
      color: "bg-[#EE4C23]"
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Scalability",
      description: "Elastic cloud infrastructure",
      details: "Auto-scaling, distributed data centers",
      color: "bg-[#167d83]"
    },
    {
      icon: <Monitor className="h-6 w-6 text-white" />,
      title: "Reliability",
      description: "99.9% uptime guarantee",
      details: "24/7 monitoring and incident response",
      color: "bg-[#EE4C23]"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Performance",
      description: "Optimized for speed and efficiency",
      details: "<200ms response time, load balancing",
      color: "bg-[#167d83]"
    },
    {
      icon: <Server className="h-6 w-6 text-white" />,
      title: "Integration",
      description: "Easy connection with your systems",
      details: "RESTful APIs, SSO authentication",
      color: "bg-[#EE4C23]"
    }
  ];

  // Predefined positions for the technical specs to avoid hydration mismatch
  const positions = [
    { top: "15%", left: "50%" },      // top
    { top: "25%", left: "85%" },      // top right
    { top: "50%", left: "95%" },      // right
    { top: "75%", left: "85%" },      // bottom right
    { top: "85%", left: "50%" },      // bottom
    { top: "75%", left: "15%" },      // bottom left
  ];

  // Use client-side rendering for the circular layout
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c3e50]">Technical Specifications</h2>
          <p className="text-[#7f8c8d] mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Enterprise-grade infrastructure designed for security, reliability, and scalability.
          </p>
        </div>

        {/* Circular layout specs showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[600px] md:block">
            {/* Center element */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-white rounded-full shadow-lg items-center justify-center z-20">
              <div className="text-center">
                <div className="text-[#167d83] font-bold text-3xl">100%</div>
                <div className="text-[#2c3e50] font-medium text-sm">HIPAA Compliant</div>
              </div>
            </div>
            
            {/* Connection lines (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-1/2 w-[500px] h-[500px] border-2 border-dashed border-[#e6f5f6] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Technical specs in circular layout (desktop) */}
            {isMounted && (
              <div className="hidden md:block">
                {techSpecs.map((spec, index) => (
                  <div 
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 w-44 transition-all duration-300 hover:scale-110"
                    style={{ 
                      top: positions[index].top, 
                      left: positions[index].left 
                    }}
                  >
                    <div className="bg-white rounded-xl shadow-md p-4 text-center">
                      <div className={`${spec.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                        {spec.icon}
                      </div>
                      <h3 className="text-[#2c3e50] font-semibold mb-1">{spec.title}</h3>
                      <p className="text-[#7f8c8d] text-xs mb-1">{spec.description}</p>
                      <p className="text-[#167d83] text-xs font-medium">{spec.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Mobile grid layout fallback */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
              {techSpecs.map((spec, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-start">
                  <div className={`${spec.color} w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                    {spec.icon}
                  </div>
                  <div>
                    <h3 className="text-[#2c3e50] font-semibold mb-1">{spec.title}</h3>
                    <p className="text-[#7f8c8d] text-xs mb-1">{spec.description}</p>
                    <p className="text-[#167d83] text-xs font-medium">{spec.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Security features highlight */}
        <div className="mt-12 md:mt-32 lg:mt-40 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-[#167d83] p-6 text-white flex flex-col justify-center">
              <Shield className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Security First</h3>
              <p className="text-white/80 text-sm">
                We prioritize the protection of your sensitive health data with comprehensive security measures.
              </p>
            </div>
            
            <div className="md:w-2/3 p-6">
              <h3 className="text-[#2c3e50] font-bold mb-4">Security Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 flex-shrink-0" />
                    <span className="text-sm text-[#2c3e50]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Technical metrics */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-block px-4 py-2 bg-white shadow-md rounded-full text-sm text-[#167d83]">
            <span className="font-semibold">1M+</span> Processing Capacity/Hour • <span className="font-semibold">&lt;200ms</span> Response Time • <span className="font-semibold">99.9%</span> Uptime
          </div>
        </div>
      </div>
    </section>
  )
} 
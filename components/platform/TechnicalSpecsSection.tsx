"use client"

import { CheckCircle, Shield } from "lucide-react"

export function TechnicalSpecsSection() {
  const securityFeatures = [
    "HIPAA compliance for healthcare data protection",
    "SOC 2 Type II certified infrastructure",
    "End-to-end encryption for all data",
    "Multi-factor authentication",
    "Regular security audits and penetration testing",
    "Role-based access controls",
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Technical Specifications</h2>
          <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
            Enterprise-grade infrastructure designed for security, reliability, and scalability.
          </p>
        </div>

        {/* 创新的交互式规格展示 */}
        <div className="specs-showcase max-w-5xl mx-auto">
          <div className="specs-container grid md:grid-cols-2 gap-8">
            <div className="specs-card bg-white rounded-xl shadow-md overflow-hidden">
              <div className="specs-header bg-[#167d83] text-white p-4 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-semibold">Security & Compliance</h3>
              </div>

              <div className="p-6">
                <div className="specs-progress-container mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-[#2c3e50] font-medium">HIPAA Compliance</span>
                    <span className="text-sm text-[#167d83] font-medium">100%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className="bg-[#167d83] h-2.5 rounded-full w-full"></div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {securityFeatures.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                      <span className="text-[#2c3e50]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="specs-card bg-white rounded-xl shadow-md overflow-hidden">
              <div className="specs-header bg-[#EE4C23] text-white p-4 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-6 w-6 mr-2"
                >
                  <path d="M17 6.1H3a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8.9a3 3 0 0 0-3-3"/>
                  <path d="M10 3v4"/>
                  <path d="M14 3v4"/>
                  <path d="M12 14v4"/>
                  <path d="M12 14h4"/>
                </svg>
                <h3 className="text-xl font-semibold">Scalable Infrastructure</h3>
              </div>

              <div className="p-6">
                <div className="specs-progress-container mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-[#2c3e50] font-medium">Uptime SLA</span>
                    <span className="text-sm text-[#EE4C23] font-medium">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className="bg-[#EE4C23] h-2.5 rounded-full w-[99.9%]"></div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "Elastic cloud architecture for automatic scaling",
                    "Distributed data centers for low latency access",
                    "Real-time data processing capabilities",
                    "Automated backup and recovery systems",
                    "24/7 monitoring and incident response",
                    "Load balancing for optimal performance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#EE4C23] mr-2 mt-0.5" />
                      <span className="text-[#2c3e50]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
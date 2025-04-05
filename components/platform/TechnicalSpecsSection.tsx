"use client"

import { CheckCircle, Shield } from "lucide-react"

export function TechnicalSpecsSection() {
  const securityFeatures = [
    "HIPAA compliance for medical data protection",
    "SOC 2 Type II certified infrastructure",
    "End-to-end encryption for all data",
    "Multi-factor authentication",
    "Regular security audits and penetration testing",
    "Role-based access control",
  ]

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Top wave transition from previous section */}
      <div className="absolute top-0 left-0 right-0">
        <div className="w-full h-20 bg-gradient-to-b from-white to-[#f8f9fa] opacity-50"></div>
      </div>
      
      {/* Background subtle pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      {/* Colored decorative lines */}
      <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-coral-100 via-primary/10 to-teal-100 opacity-30"></div>
      <div className="absolute bottom-24 left-0 right-0 h-1 bg-gradient-to-r from-teal-100 via-primary/10 to-coral-100 opacity-30"></div>
      
      {/* Decorative leaf elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <img 
          src="/logo/leave-green.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-20 transform rotate-12"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-20 transform -rotate-12"
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800">Technical Specifications</h2>
          <p className="text-neutral-600 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Enterprise-grade infrastructure designed for security, reliability, and scalability.
          </p>
        </div>

        {/* Specifications showcase */}
        <div className="specs-showcase max-w-5xl mx-auto">
          <div className="specs-container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="specs-card bg-white rounded-xl shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="specs-header bg-primary text-white p-4 flex items-center">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                <h3 className="text-lg sm:text-xl font-semibold">Security and Compliance</h3>
              </div>

              <div className="p-5 sm:p-6">
                <div className="specs-progress-container mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs sm:text-sm text-neutral-800 font-medium">HIPAA Compliance</span>
                    <span className="text-xs sm:text-sm text-primary font-medium">100%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 sm:h-2.5">
                    <div className="bg-primary h-2 sm:h-2.5 rounded-full w-full transform origin-left transition-transform duration-1000 hover:scale-x-95"></div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {securityFeatures.map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-neutral-700 text-xs sm:text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="specs-card bg-white rounded-xl shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="specs-header bg-secondary text-white p-4 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
                >
                  <path d="M17 6.1H3a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8.9a3 3 0 0 0-3-3"/>
                  <path d="M10 3v4"/>
                  <path d="M14 3v4"/>
                  <path d="M12 14v4"/>
                  <path d="M12 14h4"/>
                </svg>
                <h3 className="text-lg sm:text-xl font-semibold">Scalable Infrastructure</h3>
              </div>

              <div className="p-5 sm:p-6">
                <div className="specs-progress-container mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs sm:text-sm text-neutral-800 font-medium">Uptime SLA</span>
                    <span className="text-xs sm:text-sm text-secondary font-medium">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 sm:h-2.5">
                    <div className="bg-secondary h-2 sm:h-2.5 rounded-full w-[99.9%] transform origin-left transition-transform duration-1000 hover:scale-x-95"></div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "Auto-scaling elastic cloud architecture",
                    "Distributed data centers for low-latency access",
                    "Real-time data processing capability",
                    "Automatic backup and recovery systems",
                    "24/7 monitoring and incident response",
                    "Load balancing for optimal performance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mr-2 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-neutral-700 text-xs sm:text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technical metrics */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="stat-card bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="text-primary text-2xl sm:text-3xl font-bold mb-1">99.9%</div>
            <div className="text-neutral-500 text-xs sm:text-sm">Uptime</div>
          </div>
          <div className="stat-card bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="text-primary text-2xl sm:text-3xl font-bold mb-1">&lt;200ms</div>
            <div className="text-neutral-500 text-xs sm:text-sm">Response Time</div>
          </div>
          <div className="stat-card bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="text-primary text-2xl sm:text-3xl font-bold mb-1">100%</div>
            <div className="text-neutral-500 text-xs sm:text-sm">HIPAA Compliant</div>
          </div>
          <div className="stat-card bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="text-primary text-2xl sm:text-3xl font-bold mb-1">1M+</div>
            <div className="text-neutral-500 text-xs sm:text-sm">Processing Capacity/Hour</div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition to CTA */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#167d83" fillOpacity="0.8" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,58.7C840,64,960,96,1080,96C1200,96,1320,64,1380,48L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
} 
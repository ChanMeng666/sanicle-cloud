"use client"

import { useState } from "react"
import { Calendar, Gift, BookOpen, Users, Shield, CheckCircle } from "lucide-react"
import { BenefitAccordion } from "./BenefitAccordion"

export function BenefitFeatures() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;
    
    // Calculate rotation based on mouse position relative to container center
    const xRotation = ((y - container.height / 2) / container.height) * 6;
    const yRotation = ((x - container.width / 2) / container.width) * -6;
    
    setRotation({ x: xRotation, y: yRotation });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Top decorative elements for seamless transition */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-teal-50/30 to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-teal-100 via-primary/20 to-coral-100 opacity-30"></div>
      <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-coral-100 via-primary/20 to-teal-100 opacity-30"></div>
      
      {/* Decorative leaf elements */}
      <div className="absolute top-1/4 right-0 -mr-12 w-40 h-40">
        <img 
          src="/logo/leave-green.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-10 transform rotate-12"
        />
      </div>
      <div className="absolute bottom-1/4 left-0 -ml-12 w-40 h-40">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-10 transform -rotate-12"
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-primary text-sm font-medium mb-3">
              Comprehensive Coverage
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-800 mb-3">Explore Our Benefits</h2>
            <p className="text-neutral-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
              Click on each benefit to learn more about how our platform supports menstrual health in the workplace.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <BenefitAccordion
              title="Advanced Cycle Tracking"
              icon={<Calendar className="h-5 w-5" />}
              defaultOpen={true}
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <p className="text-neutral-600 mb-4 text-sm md:text-base">
                    Our platform offers advanced cycle tracking features coupled with AI-driven insights to help employees understand their menstrual patterns and predict upcoming cycles.
                  </p>
                  <ul className="space-y-2 md:space-y-3">
                    {[
                      "Personalized cycle predictions",
                      "Symptom tracking and analysis",
                      "Pattern recognition for health insights",
                      "Private and secure data storage",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-6 md:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal-400 rounded-lg opacity-10 blur-lg transform rotate-2"></div>
                  <img
                    src="/images/AdvancedCycleTracking.png"
                    alt="Cycle tracking interface"
                    className="relative z-10 rounded-lg shadow-lg w-full h-48 md:h-auto object-cover"
                  />
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="Menstrual Product Access" icon={<Gift className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="order-2 md:order-1 relative mt-6 md:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-coral-400 rounded-lg opacity-10 blur-lg transform -rotate-2"></div>
                  <img
                    src="/images/MenstrualProductAccess.png"
                    alt="Menstrual products"
                    className="relative z-10 rounded-lg shadow-lg w-full h-48 md:h-auto object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-neutral-600 mb-4 text-sm md:text-base">
                    Employees can access various menstrual products through our platform, with flexible allowance and delivery options.
                  </p>
                  <ul className="space-y-2 md:space-y-3">
                    {[
                      "Monthly product allowance",
                      "Multiple product options",
                      "Eco-friendly alternatives",
                      "Convenient home or office delivery",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="Educational Resources" icon={<BookOpen className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <p className="text-neutral-600 mb-4 text-sm md:text-base">
                    Our platform provides comprehensive educational resources on menstrual health, hormonal conditions, and workplace accommodations.
                  </p>
                  <ul className="space-y-2 md:space-y-3">
                    {[
                      "Expert-reviewed articles and guides",
                      "Video tutorials and webinars",
                      "Condition-specific information (PCOS, endometriosis, etc.)",
                      "Workplace accommodation resources",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div 
                  className="relative mt-6 md:mt-0 perspective-[1000px]"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal-400 rounded-lg opacity-10 blur-lg transform rotate-2"></div>
                  <div 
                    className="relative z-10 rounded-lg shadow-lg w-full h-48 md:h-auto overflow-hidden transition-transform duration-300 ease-out transform-gpu"
                    style={{ 
                      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <img
                      src="/images/EducationalResources.png"
                      alt="Virtual health consultant AI interface for menopause management"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Feature badge */}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md text-xs font-medium text-primary flex items-center">
                      <span className="mr-1">🤖</span> AI Health Consultant
                    </div>
                  </div>
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="Expert Support" icon={<Users className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div 
                  className="order-2 md:order-1 relative mt-6 md:mt-0 perspective-[1000px]"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-coral-400 rounded-lg opacity-10 blur-lg transform -rotate-2"></div>
                  <div 
                    className="relative z-10 rounded-lg shadow-lg w-full h-48 md:h-auto overflow-hidden transition-transform duration-300 ease-out transform-gpu"
                    style={{ 
                      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <img
                      src="/images/11_37_02.png"
                      alt="Digital wellness platform with virtual support community"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Feature badge */}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md text-xs font-medium text-primary flex items-center">
                      <span className="mr-1">✨</span> Virtual Community Support
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-neutral-600 mb-4 text-sm md:text-base">
                    Employees can access expert support for menstrual health issues, including consultations with healthcare professionals.
                  </p>
                  <ul className="space-y-2 md:space-y-3">
                    {[
                      "Virtual consultations with healthcare providers",
                      "Chat support for quick questions",
                      "Personalized recommendations",
                      "Referrals to specialists when needed",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="Privacy and Security" icon={<Shield className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <p className="text-neutral-600 mb-4 text-sm md:text-base">
                    Your health data remains private and secure on our HIPAA-compliant platform.
                  </p>
                  <ul className="space-y-2 md:space-y-3">
                    {[
                      "HIPAA-compliant for maximum protection",
                      "No employer data sharing without consent",
                      "Secure cloud storage with encryption",
                      "Anonymous data for insights only with consent",
                      "Multi-factor authentication for secure access",
                      "User control over data access, editing, and deletion",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-6 md:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal-400 rounded-lg opacity-10 blur-lg transform rotate-2"></div>
                  <img
                    src="/images/PrivacyAndSecurity.png"
                    alt="Privacy and security"
                    className="relative z-10 rounded-lg shadow-lg w-full h-48 md:h-auto object-cover"
                  />
                </div>
              </div>
            </BenefitAccordion>
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#f8f9fa" 
            fillOpacity="1" 
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  )
} 
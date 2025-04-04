"use client"

import { Calendar, Gift, BookOpen, Users, Shield, CheckCircle } from "lucide-react"
import { BenefitAccordion } from "./BenefitAccordion"

export function BenefitFeatures() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
              Comprehensive Coverage
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2c3e50] mb-3">Explore Our Benefits</h2>
            <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto text-sm md:text-base">
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
                  <p className="text-[#7f8c8d] mb-4 text-sm md:text-base">
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
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-[#2c3e50] text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-6 md:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#167d83] to-[#22c0c7] rounded-lg opacity-10 blur-lg transform rotate-2"></div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Cycle tracking interface"
                    className="relative z-10 rounded-lg shadow-lg w-full h-48 md:h-auto object-cover"
                  />
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="Menstrual Product Access" icon={<Gift className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="order-2 md:order-1 relative mt-6 md:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EE4C23] to-[#ff6347] rounded-lg opacity-10 blur-lg transform -rotate-2"></div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Menstrual products"
                    className="relative z-10 rounded-lg shadow-lg w-full h-48 md:h-auto object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-[#7f8c8d] mb-4 text-sm md:text-base">
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
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-[#2c3e50] text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="Educational Resources" icon={<BookOpen className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <p className="text-[#7f8c8d] mb-4 text-sm md:text-base">
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
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-[#2c3e50] text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-6 md:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#167d83] to-[#22c0c7] rounded-lg opacity-10 blur-lg transform rotate-2"></div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Educational resources"
                    className="relative z-10 rounded-lg shadow-lg w-full h-48 md:h-auto object-cover"
                  />
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="Expert Support" icon={<Users className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="order-2 md:order-1 relative mt-6 md:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EE4C23] to-[#ff6347] rounded-lg opacity-10 blur-lg transform -rotate-2"></div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Expert support"
                    className="relative z-10 rounded-lg shadow-lg w-full h-48 md:h-auto object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-[#7f8c8d] mb-4 text-sm md:text-base">
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
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-[#2c3e50] text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BenefitAccordion>

            <BenefitAccordion title="Privacy and Security" icon={<Shield className="h-5 w-5" />}>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <p className="text-[#7f8c8d] mb-4 text-sm md:text-base">
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
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#167d83] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-[#2c3e50] text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-6 md:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#167d83] to-[#22c0c7] rounded-lg opacity-10 blur-lg transform rotate-2"></div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Privacy and security"
                    className="relative z-10 rounded-lg shadow-lg w-full h-48 md:h-auto object-cover"
                  />
                </div>
              </div>
            </BenefitAccordion>
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import { Handshake } from "lucide-react"

export function PartnershipProgram() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[#e6f5f6] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#167d83] rounded-full opacity-5 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#167d83] rounded-full opacity-5 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-[#167d83] text-xs md:text-sm font-medium rounded-full mb-3 shadow-sm">
            Partnership Options
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c3e50] mb-3">Our Partnership Programs</h2>
          <p className="text-[#7f8c8d] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Join our network of benefits brokers and consultants to bring innovative menstrual health solutions to your clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
            <div className="bg-[#fef6e9] p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50]">Referral Partner</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#fef6e9] flex items-center justify-center transform transition-transform duration-500 hover:rotate-12">
                  <Handshake className="h-8 w-8 md:h-10 md:w-10 text-[#EE4C23]" />
                </div>
              </div>

              <p className="text-[#7f8c8d] mb-6 text-center text-sm md:text-base">
                Ideal for brokers who want to refer clients to Sanicle.cloud, while we handle implementation and management.
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Competitive referral fees",
                  "Minimal time investment",
                  "Co-branded marketing materials",
                  "Regular updates on client status",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#EE4C23] mr-3"></div>
                    <span className="text-[#2c3e50] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-[#EE4C23] to-[#f06845] hover:from-[#d43d18] hover:to-[#e05835] text-white rounded-lg font-medium text-sm md:text-base shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Apply to Become a Referral Partner
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
            <div className="bg-[#e6f5f6] p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50]">Channel Partner</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#e6f5f6] flex items-center justify-center transform transition-transform duration-500 hover:rotate-12">
                  <Handshake className="h-8 w-8 md:h-10 md:w-10 text-[#167d83]" />
                </div>
              </div>

              <p className="text-[#7f8c8d] mb-6 text-center text-sm md:text-base">
                Ideal for brokers who want to fully integrate Sanicle.cloud into their product portfolio and actively participate in the sales process.
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Higher commission rates",
                  "Customized sales support",
                  "Joint marketing campaigns",
                  "Dedicated client success manager",
                  "Priority product roadmap access",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#167d83] mr-3"></div>
                    <span className="text-[#2c3e50] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-[#167d83] to-[#22c0c7] hover:from-[#0e5a5f] hover:to-[#17a0a6] text-white rounded-lg font-medium text-sm md:text-base shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Apply to Become a Channel Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import { Handshake, Users, Award, BarChart, CheckCircle, ArrowRight } from "lucide-react"

export function PartnershipProgram() {
  const partnershipTypes = [
    {
      id: "referral",
      title: "Referral Partner",
      icon: <Handshake className="h-8 w-8 text-white" />,
      iconBg: "bg-[#EE4C23]",
      description: "Ideal for brokers who want to refer clients to Sanicle.cloud, while we handle implementation and management.",
      benefits: [
        "Competitive referral fees",
        "Minimal time investment",
        "Co-branded marketing materials",
        "Regular updates on client status"
      ],
      buttonText: "Apply to Become a Referral Partner",
      buttonColor: "from-[#EE4C23] to-[#f06845] hover:from-[#d43d18] hover:to-[#e05835]"
    },
    {
      id: "channel",
      title: "Channel Partner",
      icon: <Users className="h-8 w-8 text-white" />,
      iconBg: "bg-[#167d83]",
      description: "Ideal for brokers who want to fully integrate Sanicle.cloud into their product portfolio and actively participate in the sales process.",
      benefits: [
        "Higher commission rates",
        "Customized sales support",
        "Joint marketing campaigns",
        "Dedicated client success manager",
        "Priority product roadmap access"
      ],
      buttonText: "Apply to Become a Channel Partner",
      buttonColor: "from-[#167d83] to-[#22c0c7] hover:from-[#0e5a5f] hover:to-[#17a0a6]"
    },
    {
      id: "strategic",
      title: "Strategic Partner",
      icon: <BarChart className="h-8 w-8 text-white" />,
      iconBg: "bg-[#8e44ad]",
      description: "For large brokerages and consulting firms seeking exclusive arrangements and customized solutions.",
      benefits: [
        "Exclusive territory options",
        "Custom implementation plans",
        "White-labeled solution options",
        "Executive-level relationship",
        "Revenue share opportunities"
      ],
      buttonText: "Explore Strategic Partnership",
      buttonColor: "from-[#8e44ad] to-[#9b59b6] hover:from-[#7d3c98] hover:to-[#8e44ad]"
    }
  ];

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

        <div className="max-w-5xl mx-auto">
          {/* Partner Program Tabs */}
          <div className="flex flex-col md:flex-row mb-8 overflow-hidden bg-white rounded-xl shadow-md">
            {/* Tab Navigation */}
            <div className="md:w-1/3 bg-[#f8f9fa] p-1 md:p-0">
              {partnershipTypes.map((partner, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-4 md:p-5 cursor-pointer transition-all duration-300 ${index === 0 ? 'bg-white md:border-l-4 md:border-[#EE4C23]' : 'hover:bg-white/50 md:border-l-4 md:border-transparent'}`}
                >
                  <div className={`${partner.iconBg} w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                    {partner.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2c3e50]">{partner.title}</h3>
                    <p className="text-[#7f8c8d] text-sm hidden md:block mt-1">{partner.description.split('.')[0]}.</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Active Tab Content (showing first tab by default) */}
            <div className="md:w-2/3 p-6 md:p-8">
              <h3 className={`text-xl md:text-2xl font-bold text-[#EE4C23] mb-2`}>{partnershipTypes[0].title}</h3>
              <p className="text-[#7f8c8d] mb-6">{partnershipTypes[0].description}</p>
              
              <h4 className="text-[#2c3e50] font-semibold mb-3">Partner Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {partnershipTypes[0].benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#EE4C23] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#2c3e50]">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-4 items-center">
                <button className={`px-5 py-3 bg-gradient-to-r ${partnershipTypes[0].buttonColor} text-white rounded-lg font-medium shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center`}>
                  {partnershipTypes[0].buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="text-[#167d83] font-medium">Learn More</button>
              </div>
              
              {/* Partner comparison hint */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <p className="text-[#7f8c8d] text-sm">
                  Not sure which partnership is right for you? 
                  <span className="text-[#167d83] font-medium cursor-pointer ml-1">View comparison chart</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Partner Testimonial */}
          <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-[#167d83]/10 p-6 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#167d83]/20 rounded-bl-full"></div>
                <Award className="h-12 w-12 text-[#167d83] mb-4" />
                <h3 className="text-xl font-bold text-[#167d83] mb-2">Partner Success</h3>
                <p className="text-[#2c3e50] text-sm">
                  Join our growing network of successful partners making an impact.
                </p>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[#2c3e50] text-lg italic mb-4">
                  "Partnering with Sanicle.cloud has been transformative for our brokerage. We've expanded our client portfolio and now offer a truly unique solution in the market."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#167d83] flex items-center justify-center text-white font-bold mr-3">JD</div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">Jane Doe</p>
                    <p className="text-sm text-[#7f8c8d]">Benefits Consultant, Acme Benefits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
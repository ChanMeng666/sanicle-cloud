"use client"

import { CheckCircle, Heart, Users } from "lucide-react"

export function HowItWorks() {
  const employerSteps = [
    {
      number: 1,
      title: "Simple Plan Management",
      description: "Select the best plan tailored to your company's needs and budget.",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      number: 2,
      title: "Quick Employee Enrollment",
      description: "Enroll employees effortlessly and distribute access codes in seconds.",
      icon: <Heart className="h-6 w-6 text-white" />,
    },
    {
      number: 3,
      title: "Monitor Usage",
      description: "Monitor program usage and gather feedback to measure success (available on select plans).",
      icon: <CheckCircle className="h-6 w-6 text-white" />,
    },
  ]

  const employeeSteps = [
    {
      number: 1,
      title: "Redeem Access Code",
      description: "Use your unique code to access Sanicle.cloud's comprehensive women's health resources.",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      number: 2,
      title: "Self-Guided Resources",
      description: "Explore our library of articles, guides, and videos on menstrual health, menopause management, and mental wellbeing.",
      icon: <Heart className="h-6 w-6 text-white" />,
    },
    {
      number: 3,
      title: "Expert AI Support & Consultations",
      description: "Get AI guidance or schedule consultations with OBGYNs, menopause specialists, and mental health professionals tailored to your needs.",
      icon: <CheckCircle className="h-6 w-6 text-white" />,
    },
    {
      number: 4,
      title: "Personalized Solutions",
      description: "Discover personalized recommendations for your unique needs—whether for period care, menopause symptoms, or mental wellbeing support.",
      icon: <CheckCircle className="h-6 w-6 text-white" />,
    },
  ]

  return (
    <section className="w-full pt-20 pb-32 sm:pt-24 sm:pb-36 md:pt-28 md:pb-40 lg:pt-32 lg:pb-44 relative overflow-hidden">
      {/* Top wave transition */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
      
      {/* Gradient background from coral to white */}
      <div className="absolute inset-0 bg-gradient-to-b from-tertiary/70 to-white z-0"></div>
      <div className="absolute inset-0 pattern-dots opacity-5"></div>

      <div className="container px-4 md:px-6 relative z-10 pt-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 mb-2 md:mb-4">How it Works</h2>
        </div>

        {/* Employers Console Section */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-primary mb-8">Employers Console</h3>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-[80%] h-1 bg-teal-100 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="md:hidden absolute left-1/2 top-[10%] bottom-[10%] w-1 bg-teal-100 transform -translate-x-1/2 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              {employerSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center p-4 md:p-6 group"
                  style={{ zIndex: 10 }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 relative bg-primary flex items-center justify-center mb-4 sm:mb-5 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-xl">
                      <img 
                        src="/logo/leave-white.svg" 
                        alt="Leaf background" 
                        className="absolute w-full h-full opacity-20"
                      />
                      <span className="text-white text-lg sm:text-xl font-bold relative z-10">{step.number}</span>
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 animate-pulse-opacity">
                      <img 
                        src="/logo/leave-green.svg" 
                        alt="Leaf decoration" 
                        className="w-full h-full opacity-20"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-sm sm:text-base text-neutral-600 max-w-[220px]">{step.description}</p>

                  <div className="hidden md:flex absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary/20 items-center justify-center shadow-sm relative overflow-hidden rounded-lg">
                    <img 
                      src="/logo/leave-white.svg" 
                      alt="Leaf background" 
                      className="absolute w-full h-full opacity-30"
                    />
                    <div className="relative z-10">
                      {step.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Employee Console Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-center text-primary mb-8">Employee Console</h3>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-[80%] h-1 bg-teal-100 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="md:hidden absolute left-1/2 top-[10%] bottom-[10%] w-1 bg-teal-100 transform -translate-x-1/2 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              {employeeSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center p-4 md:p-6 group"
                  style={{ zIndex: 10 }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 relative bg-primary flex items-center justify-center mb-4 sm:mb-5 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-xl">
                      <img 
                        src="/logo/leave-white.svg" 
                        alt="Leaf background" 
                        className="absolute w-full h-full opacity-20"
                      />
                      <span className="text-white text-lg sm:text-xl font-bold relative z-10">{step.number}</span>
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 animate-pulse-opacity">
                      <img 
                        src="/logo/leave-green.svg" 
                        alt="Leaf decoration" 
                        className="w-full h-full opacity-20"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-sm sm:text-base text-neutral-600 max-w-[220px]">{step.description}</p>

                  <div className="hidden md:flex absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary/20 items-center justify-center shadow-sm relative overflow-hidden rounded-lg">
                    <img 
                      src="/logo/leave-white.svg" 
                      alt="Leaf background" 
                      className="absolute w-full h-full opacity-30"
                    />
                    <div className="relative z-10">
                      {step.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Special button for mobile devices */}
        <div className="mt-12 text-center md:hidden">
          <a href="/platform/overview" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Learn more about our platform
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,0L48,5.3C96,11,192,21,288,42.7C384,64,480,96,576,96C672,96,768,64,864,48C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
} 
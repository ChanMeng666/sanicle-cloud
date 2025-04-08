"use client"

import { CheckCircle, Shield, Smartphone, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Mobile Application",
      description:
        "User-friendly mobile application for employees to track and manage their menstrual health.",
      features: ["Intuitive Cycle Tracking", "Personalized Insights", "Educational Resources"],
      color: "bg-primary",
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "AI-Driven Insights",
      description:
        "Advanced analytics and machine learning providing personalized health recommendations.",
      features: ["Pattern Recognition", "Personalized Recommendations", "Predictive Analytics"],
      color: "bg-secondary",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Privacy Controls",
      description: "Comprehensive privacy settings giving users control over their health data.",
      features: ["Granular Sharing Controls", "Data Export Options", "Anonymous Insights"],
      color: "bg-primary",
    },
  ]

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative top elements for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-teal-50/50 to-transparent"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      {/* Colored pencil line decoration */}
      <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-teal-100 via-primary/20 to-coral-100 transform -translate-y-1/2 opacity-30"></div>
      
      {/* Decorative leaf elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 -mr-12">
        <img 
          src="/logo/leave-green.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-5 transform rotate-12"
        />
      </div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 -ml-12">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Leaf decoration" 
          className="w-full h-full opacity-5 transform -rotate-12"
        />
      </div>
      
      {/* Floating leaf elements */}
      <div className="hidden md:block absolute top-1/3 right-10">
        <img 
          src="/logo/leave-green.svg" 
          alt="Leaf decoration" 
          className="h-16 w-16 opacity-20 animate-float"
        />
      </div>
      <div className="hidden md:block absolute bottom-1/3 left-10">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Leaf decoration" 
          className="h-20 w-20 opacity-20 animate-float-delay"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Platform <span className="text-primary">Features</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover our extensive platform features for female employees.
          </p>
        </div>

        {/* Feature cards */}
        <div className="features-showcase max-w-6xl mx-auto">
          <div className="feature-content">
            <div className="feature-panel active">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-card bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group"
                  >
                    <div className={`${feature.color} h-2 sm:h-3`}></div>
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${feature.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {feature.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-neutral-800 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                      </div>

                      <p className="text-neutral-600 text-sm sm:text-base mb-6">{feature.description}</p>

                      <ul className="space-y-3 border-t border-gray-100 pt-4">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle
                              className={`h-4 w-4 sm:h-5 sm:w-5 ${feature.color === "bg-primary" ? "text-primary" : "text-secondary"} mr-2 mt-0.5 group-hover:scale-125 transition-transform duration-300`}
                            />
                            <span className="text-neutral-700 text-sm sm:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Upcoming features teaser */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-primary text-sm font-medium">
            <span className="mr-2">🚀</span> More features coming soon
          </div>
        </div>
      </div>

      {/* Wave divider for transition to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#f8f9fa" d="M0,96L48,101.3C96,107,192,117,288,117.3C384,117,480,107,576,90.7C672,75,768,53,864,58.7C960,64,1056,96,1152,106.7C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
} 
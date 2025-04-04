"use client"

import { BookOpen, Users, TrendingUp, Target, Award, ChevronRight } from "lucide-react"

export function CareerGrowthSection() {
  const careerSteps = [
    {
      title: "Onboarding",
      description: "Start your journey with comprehensive training and immediate integration into our supportive team environment.",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-primary",
      textColor: "text-white",
      step: 1
    },
    {
      title: "Mentorship",
      description: "Work directly with experienced team members who will guide your development and help you navigate your career path.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-primary-dark",
      textColor: "text-white",
      step: 2
    },
    {
      title: "Skill Development",
      description: "Access continuous learning opportunities, professional development workshops, and industry certifications.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-secondary",
      textColor: "text-white",
      step: 3
    },
    {
      title: "Leadership Training",
      description: "Develop management skills through our leadership program, preparing you for greater responsibilities and team leadership.",
      icon: <Target className="h-6 w-6" />,
      color: "bg-secondary-dark",
      textColor: "text-white",
      step: 4
    },
    {
      title: "Career Advancement",
      description: "Progress through clear advancement paths with transparent promotion criteria and competitive compensation growth.",
      icon: <Award className="h-6 w-6" />,
      color: "bg-accent",
      textColor: "text-white",
      step: 5
    }
  ]

  const careerPath = [
    { title: "Associate", years: "0-2 years", color: "var(--primary)" },
    { title: "Senior", years: "2-4 years", color: "var(--primary-dark)" },
    { title: "Lead", years: "4-6 years", color: "var(--secondary)" },
    { title: "Manager", years: "6-8 years", color: "var(--secondary-dark)" },
    { title: "Director", years: "8+ years", color: "var(--accent)" }
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-pale to-primary-light rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary-light to-beige rounded-tr-full opacity-30"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary to-primary-light text-white text-xs md:text-sm font-medium rounded-full shadow-sm mb-4">
            Career Development
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Grow Your Career With Us
          </h2>
          <p className="text-slate text-lg">
            At Sanicle.cloud, we invest in your growth with clear progression paths and continuous learning opportunities.
          </p>
        </div>

        {/* Career Growth Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {careerSteps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Step number badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                <span className={`font-bold text-lg ${step.color.replace('bg-', 'text-')}`}>{step.step}</span>
              </div>
              
              <div className={`${step.color} p-6`}>
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center ${step.color.replace('bg-', 'text-')}`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${step.textColor}`}>{step.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-slate mb-4">{step.description}</p>
                <a 
                  href="#" 
                  className={`inline-flex items-center text-sm font-medium ${step.color.replace('bg-', 'text-')}`}
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Career Path Visualization */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">Your Career Path at Sanicle.cloud</h3>
          
          <div className="relative">
            {/* Path Line */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            
            {/* Career Stages */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
              {careerPath.map((stage, index) => (
                <div key={index} className="flex flex-col items-center text-center md:w-1/5">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-4 z-10" 
                    style={{ backgroundColor: stage.color }}
                  >
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h4 className="font-bold text-charcoal text-lg mb-1">{stage.title}</h4>
                  <span className="text-sm text-slate">{stage.years}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Callout */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-xl shadow-lg p-8 text-white">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-3">Ready to Start Your Journey?</h3>
              <p className="text-white/80">Join our team and experience a workplace that values growth, innovation, and work-life balance.</p>
            </div>
            <div>
              <a 
                href="/company/careers#openings" 
                className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
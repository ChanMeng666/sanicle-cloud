"use client"

import { Building, Droplet, Package, Globe, Award, BarChart } from "lucide-react"
import { motion } from "framer-motion"

export function OurStory() {
  const milestones = [
    {
      year: "2018",
      title: "Beginning",
      description: "Sanicle.cloud was born from a revolutionary idea to transform how organizations handle menstrual health. Our founders identified a critical gap in workplace wellness programs.",
      icon: <Building className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      color: "bg-primary-deep",
      accent: "border-primary-deep"
    },
    {
      year: "2019",
      title: "Seed Funding",
      description: "We secured our initial seed funding of $2.5M from progressive investors who shared our vision for workplace transformation.",
      icon: <Droplet className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      color: "bg-primary-dark", 
      accent: "border-primary-dark"
    },
    {
      year: "2020",
      title: "Platform Launch",
      description: "Despite global challenges, we successfully launched our platform, serving our first 10 enterprise clients and reaching over 5,000 employees.",
      icon: <Package className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      color: "bg-primary",
      accent: "border-primary"
    },
    {
      year: "2021",
      title: "Expansion",
      description: "Expanded our operations across North America, partnering with 50+ benefits brokers to bring our solution to more organizations.",
      icon: <Globe className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      color: "bg-primary-light",
      accent: "border-primary-light"
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $15M in Series A funding to accelerate product development and market expansion, validating our approach to workplace menstrual health.",
      icon: <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      color: "bg-secondary",
      accent: "border-secondary"
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Named one of Fast Company's Most Innovative Companies in Workplace Wellness, now serving 200+ organizations and over 100,000 employees worldwide.",
      icon: <BarChart className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      color: "bg-secondary-light",
      accent: "border-secondary-light"
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="w-full py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-pale rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-beige rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white text-primary text-xs md:text-sm font-medium rounded-full shadow-sm mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">The Sanicle Story</h2>
            <p className="text-slate max-w-2xl mx-auto">
              From a simple idea to a global platform, our mission to revolutionize workplace menstrual health has come a long way.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-deep via-primary to-secondary transform -translate-x-1/2 rounded-full"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start mb-16 md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              variants={itemVariants}
            >
              {/* Year marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className={`w-16 h-16 rounded-full border-4 border-white ${milestone.color} shadow-lg flex items-center justify-center`}>
                  {milestone.icon}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/50 to-transparent"></div>
              </div>
              
              {/* Content card */}
              <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`h-2 ${milestone.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className={`px-3 py-1 rounded-full ${milestone.color} bg-opacity-10 text-sm font-semibold ${milestone.accent.replace('border', 'text')}`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-charcoal ml-3">{milestone.title}</h3>
                    </div>
                    <p className="text-slate leading-relaxed">{milestone.description}</p>
                    
                    {/* Additional achievement indicators */}
                    {(milestone.title === "Platform Launch" || milestone.title === "Series A Funding") && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${milestone.color}`}></div>
                          <span className="ml-2 text-sm font-medium text-charcoal">
                            {milestone.title === "Platform Launch" ? "First 10 enterprise clients" : "Largest funding round to date"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Connection line */}
                <div className={`hidden md:block absolute top-8 ${
                  index % 2 === 0 ? 'left-[45%] right-1/2' : 'right-[45%] left-1/2'
                } h-0.5 bg-gradient-to-r ${
                  index % 2 === 0 
                    ? `from-transparent to-${milestone.color.replace('bg-', '')}` 
                    : `from-${milestone.color.replace('bg-', '')} to-transparent`
                }`}></div>
              </div>
            </motion.div>
          ))}
          
          {/* Future indicator */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl shadow-md py-4 px-8 inline-flex items-center">
              <span className="text-primary font-semibold mr-2">The story continues</span>
              <div className="relative w-16 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
"use client"

import { useState } from "react"
import { ArrowDown, Heart, Smartphone, Sparkles, Bell, Zap } from "lucide-react"

export function AppPreview() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;
    
    // Calculate position relative to container center
    const xRotation = ((y - container.height / 2) / container.height) * 8;
    const yRotation = ((x - container.width / 2) / container.width) * -8;
    
    setRotation({ x: xRotation, y: yRotation });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Top wave transition - from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-transparent z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pattern-dots opacity-[0.05] z-0 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pattern-dots opacity-[0.05] z-0 rounded-full"></div>
      
      {/* Background decorative elements */}
      <div className="absolute -left-32 top-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-beige opacity-[0.15] blur-3xl z-0"></div>
      <div className="absolute -right-32 bottom-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-teal-pale opacity-[0.15] blur-3xl z-0"></div>
      
      {/* Decorative leaf elements */}
      <div className="absolute top-10 right-10 w-[200px] h-[200px] opacity-[0.06] transform rotate-12 z-0">
        <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] opacity-[0.05] transform -rotate-12 z-0">
        <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-full h-full" />
      </div>
      
      {/* Colored crayon line decoration */}
      <div className="absolute top-[5%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,0 400,8 600,4 C800,0 1000,6 1200,4" stroke="#06b6d4" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-beige text-secondary text-sm font-medium rounded-full mb-3 shadow-sm">
            AI & Mobile App
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 leading-tight">
            <span className="relative inline-block">
              Smart Health Assistant & Cycle Tracking
              <span className="absolute bottom-2 left-0 w-full h-3 bg-teal-pale/60 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="text-neutral-600 mt-3 max-w-2xl mx-auto">
            The Sanicle.cloud platform offers personalized menstrual health management through AI-powered health assistants and intuitive cycle tracking features.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="md:col-span-5 mx-auto md:mx-0">
            <div 
              className="relative perspective-[1000px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute -left-4 -top-4 h-48 w-48 md:h-72 md:w-72 bg-teal-light/20 rounded-full blur-3xl z-0"></div>
              <div 
                className="relative z-10 bg-gradient-to-b from-slate-100 to-slate-200 p-3 rounded-[2.5rem] shadow-xl border-8 border-white/90 max-w-sm mx-auto transition-transform duration-300 ease-out transform-gpu"
                style={{ 
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <img
                  src="/images/10_53_13.png"
                  alt="AI health assistant with menstrual cycle tracking dashboard"
                  className="rounded-[2rem] w-full h-auto shadow-inner"
                />

                {/* Interactive elements */}
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-pulse-opacity z-20">
                  <Bell className="h-5 w-5 text-secondary" />
                </div>

                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-pulse-opacity z-20" style={{ animationDelay: "1s" }}>
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>

                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-pulse-opacity z-20" style={{ animationDelay: "2s" }}>
                  <Zap className="h-5 w-5 text-secondary" />
                </div>
              </div>
              
              {/* Decorative leaf elements around the phone */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 opacity-[0.1] transform rotate-45 z-0">
                <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full" />
              </div>
              <div className="absolute -top-10 -left-10 w-16 h-16 opacity-[0.08] transform -rotate-45 z-0">
                <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-full h-full" />
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-8">
              {[
                {
                  title: "AI-Driven Cycle Prediction",
                  description: "Utilizes AI technology to analyze your data, predict cycle changes in advance, and provide personalized health recommendations.",
                  icon: <ArrowDown className="h-5 w-5 text-white" />,
                  color: "from-primary to-primary-deep",
                },
                {
                  title: "Holistic Data Visualization",
                  description: "Displays your health data through an intuitive holographic interface, helping you better understand your body status and cycle patterns.",
                  icon: <Sparkles className="h-5 w-5 text-white" />,
                  color: "from-secondary to-secondary/80",
                },
                {
                  title: "Smart Health Reminders",
                  description: "Provides intelligent reminders and suggestions based on your cycle and personal situation, helping you better manage your health and life.",
                  icon: <Bell className="h-5 w-5 text-white" />,
                  color: "from-primary to-primary-deep",
                },
                {
                  title: "Personalized Health Insights",
                  description: "AI analyzes your health data to provide in-depth personalized insights, helping you understand your physical condition and make more informed decisions.",
                  icon: <Zap className="h-5 w-5 text-white" />,
                  color: "from-secondary to-secondary/80",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start group">
                  <div 
                    className={`mr-4 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave-shaped divider - transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L60,85.3C120,75,240,53,360,64C480,75,600,117,720,128C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
      
      {/* Colored crayon line decoration - bottom */}
      <div className="absolute bottom-[10%] left-0 right-0 z-[1] overflow-hidden">
        <svg className="w-full opacity-10" height="8" viewBox="0 0 1000 8" preserveAspectRatio="none">
          <path d="M0,4 C200,8 400,0 600,4 C800,8 1000,2 1200,4" stroke="#f472b6" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
} 
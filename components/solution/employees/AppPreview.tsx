"use client"

import { ArrowDown, Heart, Smartphone, Sparkles, Bell, Zap } from "lucide-react"

export function AppPreview() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-32 top-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-beige opacity-30 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-teal-pale opacity-30 blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-beige text-coral-DEFAULT text-sm font-medium rounded-full mb-3">
            Mobile App
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-charcoal leading-tight">
            <span className="relative inline-block">
              Your Personal Health Assistant
              <span className="absolute bottom-2 left-0 w-full h-3 bg-teal-pale/60 -z-10"></span>
            </span>
          </h2>
          <p className="text-slate mt-3 max-w-2xl mx-auto">
            The Sanicle.cloud app provides a seamless experience for managing your menstrual health.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="md:col-span-5 mx-auto md:mx-0">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-48 w-48 md:h-72 md:w-72 bg-teal-light/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 bg-gradient-to-b from-slate-100 to-slate-200 p-2 rounded-[2.5rem] shadow-xl border-8 border-white/90 max-w-xs mx-auto transform hover:rotate-0 hover:scale-[1.02] transition-all duration-500" style={{ transform: "rotate(-3deg)" }}>
                <img
                  src="/placeholder.svg?height=600&width=300"
                  alt="Mobile app interface"
                  className="rounded-[2rem] w-full"
                />

                {/* Interactive elements */}
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-pulse-opacity">
                  <Bell className="h-5 w-5 text-coral-DEFAULT" />
                </div>

                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-pulse-opacity" style={{ animationDelay: "1s" }}>
                  <Sparkles className="h-5 w-5 text-teal-DEFAULT" />
                </div>

                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-pulse-opacity" style={{ animationDelay: "2s" }}>
                  <Zap className="h-5 w-5 text-coral-DEFAULT" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-8">
              {[
                {
                  title: "Smart Cycle Tracking",
                  description: "Track your cycle with AI-driven insights and predictions to understand your body changes in advance.",
                  icon: <ArrowDown className="h-5 w-5 text-white" />,
                  color: "from-teal-DEFAULT to-teal-deep",
                },
                {
                  title: "Personalized Resources",
                  description: "Access articles, videos, and resources tailored specifically for you to help better understand your health.",
                  icon: <Heart className="h-5 w-5 text-white" />,
                  color: "from-coral-DEFAULT to-coral-DEFAULT/80",
                },
                {
                  title: "Product Access",
                  description: "Order menstrual products directly through the app with seamless delivery to your office or home.",
                  icon: <Smartphone className="h-5 w-5 text-white" />,
                  color: "from-teal-DEFAULT to-teal-deep",
                },
                {
                  title: "Health Insights",
                  description: "Understand patterns and get suggestions for improving health, with real-time updates on your body condition.",
                  icon: <Sparkles className="h-5 w-5 text-white" />,
                  color: "from-coral-DEFAULT to-coral-DEFAULT/80",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start group">
                  <div 
                    className={`mr-4 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg mb-2 group-hover:text-teal-DEFAULT transition-colors">{item.title}</h3>
                    <p className="text-slate">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Users, Smile, Clock, Zap, BarChart } from "lucide-react"

export function CompanyCultureSection() {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      title: "Care First",
      description:
        "We put care at the core of everything we do, always striving to improve the quality of work life for every woman.",
      color: "bg-pink-50 border-pink-100 text-pink-700",
      iconBg: "bg-pink-100",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Teamwork",
      description:
        "We believe that through collaboration and collective effort, we can create outcomes greater than any individual could achieve alone.",
      color: "bg-blue-50 border-blue-100 text-blue-700",
      iconBg: "bg-blue-100",
    },
    {
      icon: <Smile className="h-6 w-6 text-yellow-500" />,
      title: "Positive Attitude",
      description:
        "When facing challenges, we maintain a positive attitude, viewing every difficulty as an opportunity for growth and innovation.",
      color: "bg-yellow-50 border-yellow-100 text-yellow-700",
      iconBg: "bg-yellow-100",
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-500" />,
      title: "Work-Life Balance",
      description:
        "We respect everyone's personal time and support our team members in finding a healthy balance between work and life.",
      color: "bg-emerald-50 border-emerald-100 text-emerald-700",
      iconBg: "bg-emerald-100",
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-500" />,
      title: "Innovation",
      description:
        "We encourage innovative thinking and bold experimentation, constantly seeking new approaches to solving problems.",
      color: "bg-indigo-50 border-indigo-100 text-indigo-700",
      iconBg: "bg-indigo-100",
    },
    {
      icon: <BarChart className="h-6 w-6 text-purple-500" />,
      title: "Continuous Growth",
      description:
        "We are committed to the ongoing development of individuals and teams, providing opportunities for learning and advancement.",
      color: "bg-purple-50 border-purple-100 text-purple-700",
      iconBg: "bg-purple-100",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white relative z-20 overflow-hidden">
      {/* Top transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-white pointer-events-none"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      
      {/* Background leaf decorations */}
      <div className="absolute top-20 left-0 w-64 h-64 opacity-10 hidden lg:block">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-full h-full rotate-45" />
      </div>
      <div className="absolute bottom-20 right-0 w-80 h-80 opacity-10 hidden lg:block">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-full h-full -rotate-12" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left content area */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Company Culture
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
              Join a team driven by 
              <span className="relative inline-block">
                values
                <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary/20 -rotate-1"></span>
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Sanicle.cloud, our culture is built on shared values and a sense of mission. We believe that by creating a diverse, inclusive, and vibrant work environment, we can unlock everyone's full potential and drive change in women's workplace health together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`p-5 rounded-xl border ${value.color} flex items-start hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]`}
                >
                  <div className={`${value.iconBg} p-2.5 rounded-lg mr-4 flex-shrink-0`}>
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg mb-1.5">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg transition-all duration-300 px-6">
              Learn About Our Culture
            </Button>
          </div>

          {/* Right image area */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-[url('/images/12_31_09.png')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>
              
              {/* Leaf decorations around the image */}
              <div className="absolute -top-6 -left-6 w-16 h-16 opacity-70">
                <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-full h-full" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 opacity-70 rotate-180">
                <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-full h-full" />
              </div>
              
              {/* Decorative overlapping images */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg overflow-hidden shadow-xl transform rotate-6 border-4 border-white">
                <div className="w-full h-full bg-[url('/images/12_32_28.png')] bg-cover bg-center"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-primary/20"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 opacity-30">
                  <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-full h-full" />
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg overflow-hidden shadow-xl transform -rotate-6 border-4 border-white">
                <div className="w-full h-full bg-[url('/placeholder.svg?height=150&width=150')] bg-cover bg-center"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-secondary/20"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 opacity-30">
                  <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-full h-full" />
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="flex -space-x-2 mr-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex-shrink-0"></div>
                    ))}
                  </div>
                  <span className="text-xs text-slate-800 font-medium">and 12 others</span>
                </div>
                <p className="text-xs text-slate-600">"This is a place where every member can feel belonging and growth"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full h-auto">
          <path
            fill="#f8fafc"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,101.3C672,107,768,85,864,74.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
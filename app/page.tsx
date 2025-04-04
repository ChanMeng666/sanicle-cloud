"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Heart,
  Network,
  Play,
  ChevronDown,
  ArrowUpRight,
  Star,
  ShieldIcon,
  LockIcon,
} from "lucide-react"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    /* 添加自定义样式 */
    const style = document.createElement("style")
    style.textContent = `
      /* 六边形样式 */
      .hexagon {
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      }
      
      .hexagon-inner {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      /* 统计卡片动画 */
      @keyframes stat-fill {
        from { width: 0; }
        to { width: 100%; }
      }
      
      .animate-stat-fill {
        animation: stat-fill 2s ease-out forwards;
      }
      
      /* 浮动动画 */
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      
      .animate-float-delay {
        animation: float 4s ease-in-out 2s infinite;
      }
    `
    document.head.appendChild(style)
    
    // 清理函数，组件卸载时移除样式
    return () => {
      document.head.removeChild(style)
    }
  }, []) // 空依赖数组确保效果只运行一次
  
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section - Asymmetrical Split with Animated Elements */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e6f5f6] via-white to-[#fef6e9]"></div>

        {/* Animated background shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#167d83]/5 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#EE4C23]/5 animate-pulse delay-1000"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium">
                Revolutionizing Women's Health
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2c3e50] leading-tight">
                Empower Your <span className="text-[#167d83]">Workplace</span> with Menstrual Health Benefits
              </h1>

              <p className="text-lg text-[#7f8c8d] md:text-xl max-w-2xl">
                Sanicle.cloud offers a modular, end-to-end employee benefits platform with flexible menstrual health
                options, freeing employees from vendor fatigue and creating cost-effective benefits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white rounded-full">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6] rounded-full"
                >
                  Watch Demo <Play className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-[#e6f5f6] flex items-center justify-center text-[#167d83] text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-sm text-[#7f8c8d]">
                    Trusted by <span className="font-semibold text-[#2c3e50]">500+</span> companies worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#167d83]/10 rounded-full blur-3xl"></div>

              <div className="relative">
                {/* Main image */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="Women in professional setting"
                    className="w-full"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute top-0 -right-10 z-20 bg-white rounded-lg shadow-lg p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-3">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">97% Satisfaction</p>
                      <p className="text-sm text-[#7f8c8d]">From our users</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-10 -left-10 z-20 bg-white rounded-lg shadow-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#fef6e9] text-[#EE4C23] flex items-center justify-center mr-3">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">1,200+ Users</p>
                      <p className="text-sm text-[#7f8c8d]">On waitlist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <p className="text-[#7f8c8d] text-sm mb-2">Scroll to explore</p>
          <ChevronDown className="h-5 w-5 text-[#167d83]" />
        </div>

        {/* 使用斜线分隔符替代波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2"></div>
      </section>

      {/* Platform Value Proposition - 创新的六边形网格布局 */}
      <section className="w-full py-16 md:py-24 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
              Transforming Women's Workplace Wellbeing
            </h2>
            <p className="text-lg text-[#7f8c8d]">
              We're a B2B-B2G platform dedicated to creating healthier, more inclusive workplaces through comprehensive
              menstrual health support.
            </p>
          </div>

          {/* 六边形网格布局 */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
              {[
                {
                  icon: <Users className="h-10 w-10 text-white" />,
                  title: "Empowering HR Managers",
                  description:
                    "We provide HR with tools and resources to address menstrual health, including benefits management and educational materials.",
                  color: "bg-[#167d83]",
                },
                {
                  icon: <Heart className="h-10 w-10 text-white" />,
                  title: "Tackling Hormonal Imbalances",
                  description:
                    "Sanicle.cloud offers support for conditions like PMS and PCOS, allowing women to manage their health effectively on the job.",
                  color: "bg-[#EE4C23]",
                },
                {
                  icon: <Network className="h-10 w-10 text-white" />,
                  title: "Building A Strong Network",
                  description:
                    "We connect employers with leading healthcare providers, ensuring access to quality care for female employees.",
                  color: "bg-[#167d83]",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-white" />,
                  title: "Improving Workplace Well-being",
                  description:
                    "Our platform promotes overall well-being through comprehensive menstrual health support and resources.",
                  color: "bg-[#EE4C23]",
                },
                {
                  icon: <ShieldIcon className="h-10 w-10 text-white" />,
                  title: "Ensuring Data Privacy",
                  description:
                    "We prioritize the security and privacy of sensitive health data with enterprise-grade protection.",
                  color: "bg-[#167d83]",
                },
                {
                  icon: <LockIcon className="h-10 w-10 text-white" />,
                  title: "Seamless Integration",
                  description: "Our platform integrates with existing HR systems for a smooth implementation process.",
                  color: "bg-[#EE4C23]",
                },
              ].map((feature, index) => (
                <div key={index} className="flex justify-center">
                  <div className="hexagon w-64 h-72 relative">
                    <div className={`hexagon-inner ${feature.color} p-6 flex flex-col items-center text-center`}>
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/90 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - 创新的交互式步骤图 */}
      <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">How Sanicle.cloud Works</h2>
            <p className="text-lg text-[#7f8c8d]">
              Our streamlined process makes it easy to implement comprehensive menstrual health benefits in your
              workplace.
            </p>
          </div>

          {/* 创新的步骤图 - 圆形连接的流程 */}
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-[70%] h-1 bg-[#e6f5f6] transform -translate-x-1/2 -translate-y-1/2"></div>

            <div className="flex flex-col md:flex-row justify-between items-center">
              {[
                {
                  number: 1,
                  title: "Partner with us",
                  description: "Simple onboarding and plan selection tailored to your organization's needs.",
                  icon: <Users className="h-6 w-6 text-white" />,
                },
                {
                  number: 2,
                  title: "Explore solutions",
                  description: "Access our platform and discover the full range of menstrual health benefits.",
                  icon: <Heart className="h-6 w-6 text-white" />,
                },
                {
                  number: 3,
                  title: "Easy implementation",
                  description: "Seamless integration with your existing benefits system and employee onboarding.",
                  icon: <CheckCircle className="h-6 w-6 text-white" />,
                },
                {
                  number: 4,
                  title: "Ongoing support",
                  description: "Continuous assistance and regular updates to ensure optimal program performance.",
                  icon: <Network className="h-6 w-6 text-white" />,
                },
              ].map((step, index) => (
                <div key={index} className="mb-8 md:mb-0 w-full md:w-1/4 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-[#167d83] flex items-center justify-center z-10 relative">
                      {step.icon}
                    </div>
                    <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-[#167d83]/30 animate-ping"></div>
                  </div>
                  <div className="text-center mt-4 px-4">
                    <div className="w-8 h-8 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center text-lg font-bold mb-2 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3e50] mb-2">{step.title}</h3>
                    <p className="text-[#7f8c8d]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 使用锯齿状分隔符 */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#ffffff"
              opacity="1"
            ></path>
          </svg>
        </div>
      </section>

      {/* Statistics Section - 创新的动态数据可视化 */}
      <section className="w-full py-16 md:py-24 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  value: "1200+",
                  label: "Users on Waitlist",
                  icon: <Users className="h-8 w-8 text-[#167d83]" />,
                },
                {
                  value: "80+",
                  label: "Enterprise Client LOI",
                  icon: <CheckCircle className="h-8 w-8 text-[#EE4C23]" />,
                },
                {
                  value: "65+",
                  label: "Employee Resource Groups",
                  icon: <Network className="h-8 w-8 text-[#167d83]" />,
                },
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="stat-card bg-white border-2 border-gray-100 rounded-xl p-8 shadow-lg relative z-10 h-full transform transition-transform duration-500 group-hover:-translate-y-2 overflow-hidden">
                    {/* 背景动画效果 */}
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-gray-50"></div>
                    <div className="absolute right-8 bottom-8 w-16 h-16 rounded-full bg-gray-100"></div>

                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${index % 2 === 0 ? "bg-[#e6f5f6]" : "bg-[#fef6e9]"}`}
                      >
                        {stat.icon}
                      </div>
                      <div className="stat-progress w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${index % 2 === 0 ? "bg-[#167d83]" : "bg-[#EE4C23]"} animate-stat-fill`}
                        ></div>
                      </div>
                    </div>

                    <h3 className={`text-5xl font-bold mb-2 ${index % 2 === 0 ? "text-[#167d83]" : "text-[#EE4C23]"}`}>
                      {stat.value}
                    </h3>
                    <p className="text-[#7f8c8d] text-lg">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - 创新的交错引用设计 */}
      <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">What Our Clients Say</h2>
            <p className="text-lg text-[#7f8c8d]">
              Hear from the companies transforming workplace health with Sanicle.cloud.
            </p>
          </div>

          {/* 创新的交错引用设计 */}
          <div className="max-w-5xl mx-auto">
            <div className="testimonial-slider relative">
              <div className="testimonial-track flex flex-nowrap overflow-hidden">
                {[
                  {
                    quote:
                      "Sanicle.cloud has transformed how we approach women's health benefits in our company. The platform is intuitive and our employees love it. We've seen a significant improvement in employee satisfaction and retention.",
                    author: "Sarah Johnson",
                    role: "HR Director, Tech Solutions Inc.",
                    initials: "SJ",
                    color: "bg-[#e6f5f6]",
                    textColor: "text-[#167d83]",
                  },
                  {
                    quote:
                      "The comprehensive approach to menstrual health has significantly improved workplace wellbeing and reduced absenteeism.",
                    author: "Michael Chen",
                    role: "Benefits Manager",
                    initials: "MC",
                    color: "bg-[#fef6e9]",
                    textColor: "text-[#EE4C23]",
                  },
                  {
                    quote:
                      "As a benefits broker, Sanicle.cloud has been a game-changer for my clients looking for innovative health solutions.",
                    author: "Priya Patel",
                    role: "Senior Benefits Consultant",
                    initials: "PP",
                    color: "bg-[#e6f5f6]",
                    textColor: "text-[#167d83]",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="testimonial-slide w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg p-8 relative">
                      <div
                        className={`absolute top-0 right-0 w-24 h-24 ${testimonial.color} opacity-20 rounded-bl-3xl`}
                      ></div>
                      <div className={`${testimonial.textColor} text-4xl font-serif absolute top-4 left-4 opacity-20`}>
                        "
                      </div>

                      <div className="relative z-10">
                        <p className="text-lg text-[#2c3e50] italic mb-6 pt-6 pl-6">{testimonial.quote}</p>

                        <div className="flex items-center">
                          <div
                            className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center mr-4 font-bold ${testimonial.textColor}`}
                          >
                            {testimonial.initials}
                          </div>
                          <div>
                            <p className="font-semibold text-[#2c3e50]">{testimonial.author}</p>
                            <p className="text-sm text-[#7f8c8d]">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="testimonial-dots flex justify-center mt-8 space-x-2">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 rounded-full ${i === 0 ? "bg-[#167d83]" : "bg-[#e6f5f6]"}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 使用对角线分隔符 */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2"></div>
      </section>

      {/* Privacy Features - 创新的交互式信息图表 */}
      <section className="w-full py-16 md:py-24 bg-white relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
                Privacy First
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-6">
                Complete Control of Your Period Data
              </h2>

              {/* 创新的交互式信息图表 */}
              <div className="privacy-features relative">
                <div className="privacy-feature-connector absolute left-6 top-6 bottom-6 w-1 bg-[#e6f5f6]"></div>

                {[
                  "HIPAA compliant for maximum privacy protection",
                  "No employer data sharing without consent",
                  "Secure cloud storage with encryption",
                  "Anonymized data for insights, with consent",
                  "Multi-factor authentication for secure access",
                  "User control over data access, edits, and deletions",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="privacy-feature flex items-start relative mb-6 pl-16 transform transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-[#167d83] text-white flex items-center justify-center z-10">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div className="privacy-feature-content bg-white border border-gray-100 rounded-lg p-4 shadow-sm w-full">
                      <p className="text-[#2c3e50] font-medium">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#167d83]/10 rounded-full blur-3xl"></div>

              <div className="relative">
                {/* Main image */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src="/placeholder.svg?height=500&width=500" alt="Data privacy illustration" className="w-full" />
                </div>

                {/* Floating elements */}
                <div className="absolute top-10 -left-10 z-20 bg-white rounded-lg shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-3">
                      <ShieldIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">HIPAA Compliant</p>
                      <p className="text-sm text-[#7f8c8d]">Enterprise security</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 right-10 z-20 bg-white rounded-lg shadow-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#fef6e9] text-[#EE4C23] flex items-center justify-center mr-3">
                      <LockIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">User Control</p>
                      <p className="text-sm text-[#7f8c8d]">Your data, your rules</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - 创新的互动式团队展示 */}
      <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">Meet the Sanicle.cloud Team</h2>
            <p className="text-lg text-[#7f8c8d]">
              Sanicle boasts a powerful team with diverse backgrounds and a shared passion for revolutionizing menstrual
              health.
            </p>
          </div>

          {/* 创新的互动式团队展示 */}
          <div className="team-showcase max-w-5xl mx-auto">
            <div className="team-grid grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Dr. Omopeju Afanu",
                  role: "CEO",
                  bio: "Experienced healthcare professional with a passion for women's health.",
                  avatar: "OA",
                  color: "bg-[#167d83]",
                },
                {
                  name: "Eliana Franco Taveras",
                  role: "CMO",
                  bio: "Marketing expert with extensive experience in healthcare technology.",
                  avatar: "EF",
                  color: "bg-[#EE4C23]",
                },
                {
                  name: "Chaste Inegbedion",
                  role: "CPO",
                  bio: "Product visionary focused on creating intuitive healthcare solutions.",
                  avatar: "CI",
                  color: "bg-[#167d83]",
                },
                {
                  name: "Jane Smith",
                  role: "CTO",
                  bio: "Technology leader with expertise in secure healthcare platforms.",
                  avatar: "JS",
                  color: "bg-[#EE4C23]",
                },
              ].map((member, index) => (
                <div key={index} className="team-member relative group">
                  <div className="team-card bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 group-hover:shadow-xl">
                    <div className={`h-24 ${member.color}`}></div>
                    <div className="p-6 pt-14 text-center">
                      <h3 className="text-xl font-bold text-[#2c3e50] mb-1">{member.name}</h3>
                      <p
                        className={`${member.color === "bg-[#167d83]" ? "text-[#167d83]" : "text-[#EE4C23]"} font-medium mb-3`}
                      >
                        {member.role}
                      </p>
                      <p className="text-[#7f8c8d] text-sm">{member.bio}</p>

                      <Button
                        variant="ghost"
                        className={`mt-4 ${member.color === "bg-[#167d83]" ? "text-[#167d83] hover:bg-[#e6f5f6]" : "text-[#EE4C23] hover:bg-[#fef6e9]"}`}
                      >
                        Read Bio <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="team-avatar absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div
                        className={`w-16 h-16 rounded-full ${member.color} text-white flex items-center justify-center text-xl font-bold border-4 border-white`}
                      >
                        {member.avatar}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 使用曲线分隔符 */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#167d83"
              opacity="1"
            ></path>
          </svg>
        </div>
      </section>

      {/* CTA Section - 创新的分层设计 */}
      <section className="w-full py-16 md:py-24 bg-[#167d83] text-white relative overflow-hidden">
        {/* 创新的背景图案 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.1)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
        </div>

        {/* 分层设计元素 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0e5a5f] rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0e5a5f] rounded-tr-full opacity-50"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="cta-card bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Get health benefits you'll actually use and love
              </h2>

              <p className="text-white/80 mb-8 text-xl">
                Join the growing number of companies prioritizing women's health in the workplace.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white rounded-full">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
                  Book a Demo
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  <span className="text-white text-sm">No credit card required</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  <span className="text-white text-sm">14-day free trial</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  <span className="text-white text-sm">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


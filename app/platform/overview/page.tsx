"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Database,
  Zap,
  Smartphone,
  Layers,
  Lock,
  Users,
  ChevronRight,
  BarChart,
} from "lucide-react"
import { useEffect } from "react"

export default function PlatformOverviewPage() {
  useEffect(() => {
    /* 添加自定义样式 */
    const style = document.createElement("style")
    style.textContent = `
      /* 背景图案 */
      .bg-pattern {
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");
      }
      
      .bg-grid-pattern {
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L20,0 L20,20 L0,20 Z' fill='none' stroke='%23167d83' strokeWidth='0.5' strokeOpacity='0.1'/%3E%3C/svg%3E");
      }
      
      /* 平台展示动画 */
      .platform-device {
        transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
        transition: transform 0.5s ease;
      }
      
      .platform-device:hover {
        transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
      }
      
      /* 功能卡片交互 */
      .feature-tab {
        transition: all 0.3s ease;
      }
      
      .feature-panel {
        display: none;
      }
      
      .feature-panel.active {
        display: block;
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
      {/* Hero Section - 创新的分割设计 */}
      <section className="w-full bg-gradient-to-r from-[#167d83] to-[#0e5a5f] py-16 md:py-24 text-white overflow-hidden relative">
        {/* 创新的背景图案 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="circuit-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0,0 L10,0 L10,10 L0,10 Z" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="0" cy="0" r="1" fill="white" />
                  <circle cx="10" cy="10" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-2">
                Platform Overview
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                A Comprehensive Platform for Menstrual Health Benefits
              </h1>
              <p className="text-white/80 text-lg md:text-xl">
                Sanicle.cloud offers a modular, end-to-end employee benefits platform with flexible menstrual health
                options, freeing employers from vendor fatigue.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button className="bg-white text-[#167d83] hover:bg-white/90">
                  Explore Features <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Request Demo
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="platform-showcase relative w-full max-w-lg">
                {/* 创新的3D展示效果 */}
                <div className="platform-device relative z-20 bg-white rounded-xl shadow-2xl overflow-hidden border-8 border-gray-100">
                  <img src="/placeholder.svg?height=500&width=500" alt="Platform dashboard" className="w-full" />
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100 flex items-center px-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                </div>

                {/* 浮动UI元素 */}
                <div className="absolute top-1/4 -right-12 z-30 bg-white rounded-lg shadow-lg p-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-2">
                      <Users className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-[#2c3e50]">Users</p>
                      <p className="text-[#7f8c8d]">1,234</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 -left-12 z-30 bg-white rounded-lg shadow-lg p-3 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#fef6e9] text-[#EE4C23] flex items-center justify-center mr-2">
                      <BarChart className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-[#2c3e50]">Analytics</p>
                      <p className="text-[#7f8c8d]">Real-time</p>
                    </div>
                  </div>
                </div>

                {/* 背景装饰 */}
                <div className="absolute -left-4 -top-4 h-72 w-72 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -right-4 -bottom-4 h-72 w-72 bg-white/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 创新的分隔设计 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Platform Features - 创新的交互式功能展示 */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50] mb-2">Key Platform Features</h2>
            <p className="text-[#7f8c8d] max-w-2xl mx-auto">
              Discover the powerful capabilities that make Sanicle.cloud the leading menstrual health benefits platform.
            </p>
          </div>

          {/* 创新的交互式功能展示 */}
          <div className="feature-showcase max-w-6xl mx-auto">
            <div className="feature-tabs flex justify-center mb-8">
              <div className="inline-flex bg-[#f8f9fa] rounded-full p-1">
                <button className="feature-tab active px-6 py-2 rounded-full bg-[#167d83] text-white font-medium">
                  For Users
                </button>
                <button className="feature-tab px-6 py-2 rounded-full text-[#7f8c8d] font-medium hover:bg-gray-100">
                  For Admins
                </button>
                <button className="feature-tab px-6 py-2 rounded-full text-[#7f8c8d] font-medium hover:bg-gray-100">
                  Technology
                </button>
              </div>
            </div>

            <div className="feature-content">
              <div className="feature-panel active">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Smartphone className="h-8 w-8 text-white" />,
                      title: "Mobile App",
                      description:
                        "User-friendly mobile application for employees to track and manage their menstrual health.",
                      features: ["Intuitive cycle tracking", "Personalized insights", "Educational resources"],
                      color: "bg-[#167d83]",
                    },
                    {
                      icon: <Zap className="h-8 w-8 text-white" />,
                      title: "AI-Powered Insights",
                      description:
                        "Advanced analytics and machine learning to provide personalized health recommendations.",
                      features: ["Pattern recognition", "Personalized recommendations", "Predictive analytics"],
                      color: "bg-[#EE4C23]",
                    },
                    {
                      icon: <Shield className="h-8 w-8 text-white" />,
                      title: "Privacy Controls",
                      description: "Comprehensive privacy settings that put users in control of their health data.",
                      features: ["Granular sharing controls", "Data export options", "Anonymized insights"],
                      color: "bg-[#167d83]",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="feature-card bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                      <div className={`${feature.color} h-3`}></div>
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div
                            className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mr-4`}
                          >
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-[#2c3e50]">{feature.title}</h3>
                        </div>

                        <p className="text-[#7f8c8d] mb-6">{feature.description}</p>

                        <ul className="space-y-3 border-t border-gray-100 pt-4">
                          {feature.features.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle
                                className={`h-5 w-5 ${feature.color === "bg-[#167d83]" ? "text-[#167d83]" : "text-[#EE4C23]"} mr-2 mt-0.5`}
                              />
                              <span className="text-[#2c3e50]">{item}</span>
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
        </div>
      </section>

      {/* Technical Specifications - 创新的交互式规格展示 */}
      <section className="w-full py-12 md:py-16 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Technical Specifications</h2>
            <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
              Enterprise-grade infrastructure designed for security, reliability, and scalability.
            </p>
          </div>

          {/* 创新的交互式规格展示 */}
          <div className="specs-showcase max-w-5xl mx-auto">
            <div className="specs-container grid md:grid-cols-2 gap-8">
              <div className="specs-card bg-white rounded-xl shadow-md overflow-hidden">
                <div className="specs-header bg-[#167d83] text-white p-4 flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold">Security & Compliance</h3>
                </div>

                <div className="p-6">
                  <div className="specs-progress-container mb-6">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#2c3e50] font-medium">HIPAA Compliance</span>
                      <span className="text-sm text-[#167d83] font-medium">100%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-[#167d83] h-2.5 rounded-full w-full"></div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "HIPAA compliance for healthcare data protection",
                      "SOC 2 Type II certified infrastructure",
                      "End-to-end encryption for all data",
                      "Multi-factor authentication",
                      "Regular security audits and penetration testing",
                      "Role-based access controls",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="specs-card bg-white rounded-xl shadow-md overflow-hidden">
                <div className="specs-header bg-[#EE4C23] text-white p-4 flex items-center">
                  <Database className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold">Infrastructure & Performance</h3>
                </div>

                <div className="p-6">
                  <div className="specs-progress-container mb-6">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#2c3e50] font-medium">Uptime SLA</span>
                      <span className="text-sm text-[#EE4C23] font-medium">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-[#EE4C23] h-2.5 rounded-full w-[99.9%]"></div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Cloud-based architecture for scalability",
                      "99.9% uptime SLA",
                      "Global CDN for fast access worldwide",
                      "Automated backups and disaster recovery",
                      "Real-time data processing",
                      "Mobile-optimized interfaces",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#EE4C23] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section - 创新的交互式集成展示 */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Seamless Integration</h2>
            <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
              Sanicle.cloud integrates with your existing HR and benefits systems for a streamlined experience.
            </p>
          </div>

          {/* 创新的交互式集成展示 */}
          <div className="integration-showcase max-w-5xl mx-auto">
            <div className="integration-diagram relative">
              {/* 中央平台 */}
              <div className="integration-platform bg-[#167d83] text-white rounded-xl shadow-lg p-6 max-w-md mx-auto mb-12 relative z-20">
                <div className="flex items-center justify-center mb-4">
                  <Smartphone className="h-10 w-10 mr-3" />
                  <h3 className="text-xl font-semibold">Sanicle.cloud Platform</h3>
                </div>
                <p className="text-white/80 text-center">
                  Our secure, scalable platform serves as the central hub for all your menstrual health benefits.
                </p>

                {/* 连接点 */}
                <div className="absolute top-1/2 left-0 w-4 h-4 bg-[#0e5a5f] rounded-full transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 right-0 w-4 h-4 bg-[#0e5a5f] rounded-full transform translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-[#0e5a5f] rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#0e5a5f] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* 集成系统 */}
              <div className="integration-systems grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "HR Systems",
                    icon: <Users className="h-6 w-6 text-[#167d83]" />,
                    description: "Connect with popular HRIS platforms",
                  },
                  {
                    title: "Benefits Admin",
                    icon: <Database className="h-6 w-6 text-[#167d83]" />,
                    description: "Integrate with benefits platforms",
                  },
                  {
                    title: "Single Sign-On",
                    icon: <Lock className="h-6 w-6 text-[#167d83]" />,
                    description: "Support for SAML and OAuth",
                  },
                  {
                    title: "Custom API",
                    icon: <Layers className="h-6 w-6 text-[#167d83]" />,
                    description: "Flexible API for custom integrations",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="integration-system bg-white rounded-lg shadow-md p-4 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#e6f5f6] flex items-center justify-center mr-3">
                        {item.icon}
                      </div>
                      <h4 className="font-semibold text-[#2c3e50]">{item.title}</h4>
                    </div>
                    <p className="text-[#7f8c8d] text-sm">{item.description}</p>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Button variant="ghost" size="sm" className="text-[#167d83] hover:bg-[#e6f5f6] p-0">
                        Learn more <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 创新的分层设计 */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-r from-[#167d83] to-[#0e5a5f] text-white relative">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="cta-card bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to explore the platform?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Schedule a personalized demo to see how Sanicle.cloud can transform your workplace benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-white text-[#167d83] hover:bg-white/90">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


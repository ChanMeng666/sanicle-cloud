"use client"

import { CheckCircle, Shield } from "lucide-react"

export function TechnicalSpecsSection() {
  const securityFeatures = [
    "医疗数据保护的HIPAA合规性",
    "SOC 2 Type II认证的基础设施",
    "所有数据的端到端加密",
    "多因素身份验证",
    "定期的安全审计和渗透测试",
    "基于角色的访问控制",
  ]

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* 背景图案 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* 装饰元素 */}
      <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c3e50]">技术规格</h2>
          <p className="text-[#7f8c8d] mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            为安全性、可靠性和可扩展性设计的企业级基础设施。
          </p>
        </div>

        {/* 创新的交互式规格展示 */}
        <div className="specs-showcase max-w-5xl mx-auto">
          <div className="specs-container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="specs-card bg-white rounded-xl shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="specs-header bg-[#167d83] text-white p-4 flex items-center">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                <h3 className="text-lg sm:text-xl font-semibold">安全与合规</h3>
              </div>

              <div className="p-5 sm:p-6">
                <div className="specs-progress-container mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs sm:text-sm text-[#2c3e50] font-medium">HIPAA合规性</span>
                    <span className="text-xs sm:text-sm text-[#167d83] font-medium">100%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 sm:h-2.5">
                    <div className="bg-[#167d83] h-2 sm:h-2.5 rounded-full w-full transform origin-left transition-transform duration-1000 hover:scale-x-95"></div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {securityFeatures.map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#167d83] mr-2 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[#2c3e50] text-xs sm:text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="specs-card bg-white rounded-xl shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="specs-header bg-[#EE4C23] text-white p-4 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
                >
                  <path d="M17 6.1H3a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8.9a3 3 0 0 0-3-3"/>
                  <path d="M10 3v4"/>
                  <path d="M14 3v4"/>
                  <path d="M12 14v4"/>
                  <path d="M12 14h4"/>
                </svg>
                <h3 className="text-lg sm:text-xl font-semibold">可扩展基础设施</h3>
              </div>

              <div className="p-5 sm:p-6">
                <div className="specs-progress-container mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs sm:text-sm text-[#2c3e50] font-medium">运行时间SLA</span>
                    <span className="text-xs sm:text-sm text-[#EE4C23] font-medium">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 sm:h-2.5">
                    <div className="bg-[#EE4C23] h-2 sm:h-2.5 rounded-full w-[99.9%] transform origin-left transition-transform duration-1000 hover:scale-x-95"></div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "自动扩展的弹性云架构",
                    "分布式数据中心，实现低延迟访问",
                    "实时数据处理能力",
                    "自动备份和恢复系统",
                    "24/7监控和事件响应",
                    "负载均衡以获得最佳性能",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#EE4C23] mr-2 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[#2c3e50] text-xs sm:text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* 技术优势指标 */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="stat-card bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="text-[#167d83] text-2xl sm:text-3xl font-bold mb-1">99.9%</div>
            <div className="text-[#7f8c8d] text-xs sm:text-sm">正常运行时间</div>
          </div>
          <div className="stat-card bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="text-[#167d83] text-2xl sm:text-3xl font-bold mb-1">&lt;200ms</div>
            <div className="text-[#7f8c8d] text-xs sm:text-sm">响应时间</div>
          </div>
          <div className="stat-card bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="text-[#167d83] text-2xl sm:text-3xl font-bold mb-1">100%</div>
            <div className="text-[#7f8c8d] text-xs sm:text-sm">HIPAA合规</div>
          </div>
          <div className="stat-card bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="text-[#167d83] text-2xl sm:text-3xl font-bold mb-1">1M+</div>
            <div className="text-[#7f8c8d] text-xs sm:text-sm">处理能力/小时</div>
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

export default function PlatformIntegrationPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
          Platform <span className="text-[#167d83]">Integration</span>
        </h1>
        <p className="text-lg text-[#7f8c8d] max-w-3xl">
          Learn how Sanicle.cloud seamlessly integrates with your existing systems to provide comprehensive health management solutions for your business.
        </p>
      </div>

      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50] mb-4">
              Seamless Connection with Your Ecosystem
            </h2>
            <p className="text-[#7f8c8d]">
              Sanicle.cloud is designed to integrate seamlessly with your existing enterprise systems and tools,
              ensuring smooth data flow without complex IT setup.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e6f5f6] rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#167d83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#2c3e50] mb-2">HRIS System Integration</h3>
              <p className="text-[#7f8c8d] text-sm">
                Integrates with mainstream HRIS systems including Workday, ADP, and BambooHR for employee data synchronization.
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e6f5f6] rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#167d83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#2c3e50] mb-2">SSO Authentication</h3>
              <p className="text-[#7f8c8d] text-sm">
                Supports single sign-on through standard protocols such as SAML, OAuth, and OIDC, simplifying user access.
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e6f5f6] rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#167d83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#2c3e50] mb-2">API Interfaces</h3>
              <p className="text-[#7f8c8d] text-sm">
                Provides RESTful APIs and WebHooks for easy integration with custom systems and applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50] mb-4">
                Integration Partners
              </h2>
              <p className="text-[#7f8c8d] mb-6">
                We partner with leading health benefits management platforms and HR system providers 
                to ensure Sanicle.cloud seamlessly fits into your existing technology stack.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white p-3 rounded-md shadow-sm flex items-center justify-center h-20">
                    <span className="text-[#7f8c8d] text-sm">Partner {i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#167d83] to-[#22c0c7] rounded-lg opacity-10 blur-lg transform rotate-2"></div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="System Integration"
                className="relative z-10 rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 
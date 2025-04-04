import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Heart,
  Calendar,
  ChevronRight,
  Smartphone,
  ArrowDown,
  Bell,
  Sparkles,
  Zap,
  Users,
} from "lucide-react"

export default function EmployeesPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section - Overlapping Elements with Circular Design */}
      <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fef6e9] rounded-full opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e6f5f6] rounded-full opacity-50 transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-4">
                For Employees
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#2c3e50] mb-6">
                Take Control of Your <br />
                <span className="relative">
                  <span className="relative z-10">Menstrual Health</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-[#fef6e9] -z-10"></span>
                </span>
              </h1>
              <p className="text-xl text-[#7f8c8d] max-w-2xl mx-auto mb-8">
                Access personalized menstrual health resources, products, and support through your employer's benefits
                program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Feature circles */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
              {[
                {
                  icon: <Heart className="h-6 w-6 text-[#167d83]" />,
                  title: "Track Your Cycle",
                  description: "Monitor patterns and get personalized insights",
                },
                {
                  icon: <Shield className="h-6 w-6 text-[#167d83]" />,
                  title: "Private & Secure",
                  description: "Your data remains private and protected",
                },
                {
                  icon: <Smartphone className="h-6 w-6 text-[#167d83]" />,
                  title: "Mobile Access",
                  description: "Manage your health anytime, anywhere",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#e6f5f6] flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-[#2c3e50] text-sm md:text-base">{feature.title}</h3>
                  <p className="text-[#7f8c8d] text-xs md:text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path
              fill="#e6f5f6"
              fillOpacity="1"
              d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Benefits Section - Alternating Columns */}
      <section className="w-full py-12 md:py-16 bg-[#e6f5f6]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Benefits for Employees</h2>
              <p className="text-[#7f8c8d] mt-2 max-w-xl">
                Discover how Sanicle.cloud can help you manage your menstrual health and improve your workplace
                experience.
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
              View All Benefits <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Alternating content blocks */}
          <div className="space-y-16">
            {/* Block 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 rounded-full bg-[#fef6e9] flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-[#EE4C23]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-3">Personalized Health Management</h3>
                  <p className="text-[#7f8c8d] mb-5">
                    Access tailored resources and support for your unique menstrual health needs.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Track your cycle with smart insights",
                      "Receive personalized recommendations",
                      "Access educational resources",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Personalized health tracking"
                    className="relative z-10 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#EE4C23] rounded-lg opacity-10 blur-lg transform -rotate-3"></div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Data privacy and security"
                    className="relative z-10 rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 rounded-full bg-[#e6f5f6] flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-[#167d83]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-3">Privacy & Security</h3>
                  <p className="text-[#7f8c8d] mb-5">
                    Your health data remains private and secure with our HIPAA-compliant platform.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Complete control of your data",
                      "No employer data sharing without consent",
                      "Secure encryption and storage",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 rounded-full bg-[#fef6e9] flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-[#EE4C23]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-3">Workplace Support</h3>
                  <p className="text-[#7f8c8d] mb-5">
                    Get the support you need to manage menstrual health in your professional life.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Access to menstrual health products",
                      "Support for PMS and PCOS",
                      "Resources for workplace accommodations",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                        <span className="text-[#2c3e50]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Workplace support"
                    className="relative z-10 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section - Interactive Mockup */}
      <section className="w-full py-12 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#fef6e9] text-[#EE4C23] text-sm font-medium rounded-full mb-3">
              Mobile App
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Your Personal Health Assistant</h2>
            <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
              The Sanicle.cloud app provides a seamless experience for managing your menstrual health.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 md:col-start-2">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-72 w-72 bg-[#7ac8cd]/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 bg-[#f8f9fa] p-2 rounded-[2.5rem] shadow-xl border-8 border-[#2c3e50]/10 max-w-xs mx-auto">
                  <img
                    src="/placeholder.svg?height=600&width=300"
                    alt="Mobile app interface"
                    className="rounded-[2rem] w-full"
                  />

                  {/* Interactive elements */}
                  <div className="absolute top-1/4 right-0 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                    <Bell className="h-5 w-5 text-[#EE4C23]" />
                  </div>

                  <div className="absolute top-1/2 left-0 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                    <Sparkles className="h-5 w-5 text-[#167d83]" />
                  </div>

                  <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                    <Zap className="h-5 w-5 text-[#EE4C23]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="space-y-8">
                {[
                  {
                    title: "Smart Cycle Tracking",
                    description: "Track your cycle with AI-powered insights and predictions.",
                    icon: <ArrowDown className="h-5 w-5 text-white" />,
                  },
                  {
                    title: "Personalized Resources",
                    description: "Access articles, videos, and resources tailored to your needs.",
                    icon: <Heart className="h-5 w-5 text-white" />,
                  },
                  {
                    title: "Product Access",
                    description: "Order menstrual products directly through the app.",
                    icon: <Smartphone className="h-5 w-5 text-white" />,
                  },
                  {
                    title: "Health Insights",
                    description: "Understand patterns and get recommendations for better health.",
                    icon: <Sparkles className="h-5 w-5 text-white" />,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#167d83] to-[#0e5a5f] flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2c3e50] text-lg mb-1">{item.title}</h3>
                      <p className="text-[#7f8c8d]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section - Radial Grid */}
      <section className="w-full py-12 md:py-16 bg-[#fef6e9]">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">Complete Control of Your Period Data</h2>
            <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
              Your privacy is our priority. We ensure your data remains secure and under your control.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center circle */}
            <div className="relative z-20 w-48 h-48 bg-white rounded-full shadow-lg mx-auto mb-8 flex flex-col items-center justify-center p-4">
              <Shield className="h-12 w-12 text-[#167d83] mb-2" />
              <h3 className="text-lg font-semibold text-[#2c3e50] text-center">Your Data</h3>
              <p className="text-sm text-[#7f8c8d] text-center">100% under your control</p>
            </div>

            {/* Outer circles */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  title: "HIPAA Compliant",
                  description: "Our platform meets the highest standards for healthcare data protection.",
                },
                {
                  title: "Secure Encryption",
                  description: "All your data is encrypted and stored securely in the cloud.",
                },
                {
                  title: "User Control",
                  description: "You decide who can access your data and when it can be deleted.",
                },
                {
                  title: "No Employer Sharing",
                  description: "Your data is never shared with your employer without explicit consent.",
                },
                {
                  title: "Multi-factor Authentication",
                  description: "Extra security measures to ensure only you can access your account.",
                },
                {
                  title: "Anonymized Insights",
                  description: "Any data used for research is fully anonymized and only with consent.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-5 transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <Shield className="h-8 w-8 text-[#167d83] mb-3" />
                  <h3 className="text-lg font-semibold text-[#2c3e50] mb-2">{item.title}</h3>
                  <p className="text-[#7f8c8d] text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#e6f5f6] rounded-full opacity-20 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-[#167d83]/20 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* CTA Section - Split Design */}
      <section className="w-full py-12 md:py-16 bg-[#167d83] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Ready to take control of your menstrual health?
              </h2>
              <p className="text-white/80 mb-6">
                Ask your employer about Sanicle.cloud benefits or sign up directly if your company is already enrolled.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-white text-[#167d83] hover:bg-white/90">
                  Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Request Info
                </Button>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Already a Member?</h3>
                  <p className="text-white/80">Log in to access your account</p>
                </div>
              </div>
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30">
                Log In to Your Account
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


"use client"

import { Shield } from "lucide-react"

export function PrivacySection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-teal-pale/20"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-beige rounded-full opacity-20"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-coral-light/20 rounded-full opacity-30"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-pale text-teal-DEFAULT text-sm font-medium mb-4">
              HIPAA Compliant
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-charcoal mb-4">Privacy is Our Commitment</h2>
            <p className="text-slate max-w-2xl mx-auto">
              Your health data remains private and secure. We use state-of-the-art encryption technology and strict access controls to protect your information.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 relative">
            {[
              {
                title: "HIPAA Compliant",
                description: "Our platform meets the highest standards for medical data protection.",
              },
              {
                title: "Secure Encryption",
                description: "All your data is encrypted and securely stored in the cloud.",
              },
              {
                title: "User Control",
                description: "You decide who can access your data and when it can be deleted.",
              },
              {
                title: "Not Shared with Employers",
                description: "Your data is never shared with your employer without your explicit consent.",
              },
              {
                title: "Multi-factor Authentication",
                description: "Additional security measures ensure only you can access your account.",
              },
              {
                title: "Anonymous Insights",
                description: "Any data used for research is completely anonymous and only used with consent.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 md:p-6 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-pale to-teal-light flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-teal-DEFAULT" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-teal-DEFAULT/10 rounded-full -z-10 animate-pulse-opacity"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-coral-DEFAULT/10 rounded-full -z-10 animate-pulse-opacity" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-teal-DEFAULT/5 rounded-full -z-10 animate-pulse-opacity" style={{ animationDelay: "2s" }}></div>
          </div>
          
          {/* Footer information */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-sm text-slate/80 max-w-xl mx-auto">
              We comply with strict data protection regulations, including HIPAA, GDPR, and CCPA. View our
              <a href="#" className="text-teal-DEFAULT hover:text-teal-deep underline mx-1">Privacy Policy</a>
              to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 
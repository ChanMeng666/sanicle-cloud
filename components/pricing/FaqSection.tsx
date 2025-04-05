"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How do I choose the right plan for my company?",
      answer:
        "When selecting a plan, consider your number of employees and the features you need. The Starter plan is best for small businesses (up to 50 employees), the Professional plan for mid-sized companies needing more features, and the Enterprise plan for large organizations or those with special requirements. You can also contact our sales team for personalized recommendations.",
    },
    {
      question: "Can I change my subscription plan at any time?",
      answer:
        "Yes, you can upgrade your plan at any time to get more features. If you need to downgrade, you can make changes at the end of your current subscription period. All changes will take effect in your next billing cycle.",
    },
    {
      question: "How is the pricing calculated?",
      answer:
        "Our pricing is based on a monthly fee per active employee. An active employee is someone in your organization who has been added to the platform and has access to the services. You only pay for employees who use the platform.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial that allows you to experience our platform before making a decision. During the trial period, you'll have access to all Professional features without needing to provide credit card information.",
    },
    {
      question: "Is my employee data secure?",
      answer:
        "Yes, we prioritize data security. We use industry-standard encryption, adhere to strict privacy policies, and conduct regular security audits. Our platform complies with HIPAA and SOC 2 Type II standards, ensuring your employees' sensitive health data receives the highest level of protection.",
    },
    {
      question: "Can I get an invoice instead of paying online?",
      answer:
        "Enterprise customers can opt for invoice payments. For other plans, we typically use credit cards or other online payment methods for automatic billing, but if you have special requirements, please contact our sales team to discuss possible arrangements.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden" id="faq">
      {/* Top transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/70 to-white pointer-events-none z-10"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Background leaf decorations */}
      <div className="absolute top-0 right-0 opacity-10 -mt-20 -mr-20 hidden md:block">
        <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-96 h-96 transform rotate-45" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-10 -mb-20 -ml-20 hidden md:block">
        <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-80 h-80 transform -rotate-12" />
      </div>
      <div className="absolute top-1/3 left-10 opacity-10 hidden lg:block">
        <img src="/logo/leave-coral.svg" alt="Decorative leaf" className="w-40 h-40 transform rotate-90" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-10 hidden lg:block">
        <img src="/logo/leave-white.svg" alt="Decorative leaf" className="w-48 h-48 transform -rotate-45" />
      </div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-48 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 relative" data-aos="fade-up">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full opacity-20">
            <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-24 h-24" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 inline-block">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FAQ</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our plans and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow group"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-slate-800 hover:text-primary data-[state=open]:text-primary data-[state=open]:bg-primary-pale/20 transition-all relative">
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 transition-opacity">
                    <img src={index % 2 === 0 ? "/logo/leave-green.svg" : "/logo/leave-pink.svg"} alt="Decorative leaf" className="w-4 h-4" />
                  </div>
                  <span className="pl-1">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-6 text-slate-600 relative">
                  <div className="absolute right-6 bottom-6 opacity-5">
                    <img src={index % 2 === 0 ? "/logo/leave-pink.svg" : "/logo/leave-green.svg"} alt="Decorative leaf" className="w-16 h-16 transform rotate-12" />
                  </div>
                  <p className="leading-relaxed relative z-10">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-pale/50 to-secondary-pale/50 py-10 px-6 md:px-10 rounded-2xl max-w-4xl mx-auto shadow-sm relative overflow-hidden" data-aos="fade-up" data-aos-delay="300">
          {/* CTA section leaf decorations */}
          <div className="absolute top-0 right-0 opacity-10 transform -rotate-12">
            <img src="/logo/leave-pink.svg" alt="Decorative leaf" className="w-32 h-32" />
          </div>
          <div className="absolute bottom-0 left-0 opacity-10 transform rotate-45">
            <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-24 h-24" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center">
                <span className="hidden md:inline-block mr-3 opacity-70">
                  <img src="/logo/leave-black.svg" alt="Decorative leaf" className="w-6 h-6" />
                </span>
                Still have questions?
              </h3>
              <p className="text-slate-600">
                We're here to help with any questions about our pricing and features.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <img src="/logo/leave-white.svg" alt="Decorative leaf" className="w-full h-full object-cover" />
                </div>
                <span className="relative z-10">Contact Sales</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-primary text-primary hover:bg-primary-pale/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <img src="/logo/leave-green.svg" alt="Decorative leaf" className="w-full h-full object-cover" />
                </div>
                <span className="relative z-10">View Documentation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer wave transition */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" className="w-full h-auto">
          <path
            fill="#f8fafc"
            fillOpacity="1"
            d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
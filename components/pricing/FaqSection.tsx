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
    <section className="w-full py-16 md:py-24 bg-white" id="faq">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
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
                className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-slate-800 hover:text-primary data-[state=open]:text-primary data-[state=open]:bg-primary-pale/10 transition-all">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-6 text-slate-600">
                  <p className="leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-pale to-secondary-pale py-10 px-6 md:px-10 rounded-2xl max-w-4xl mx-auto shadow-sm" data-aos="fade-up" data-aos-delay="300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Still have questions?</h3>
              <p className="text-slate-600">
                We're here to help with any questions about our pricing and features.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm"
              >
                Contact Sales
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-primary text-primary hover:bg-primary-pale/50 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
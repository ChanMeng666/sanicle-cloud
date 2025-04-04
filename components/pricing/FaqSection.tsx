"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

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
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal">Frequently Asked Questions</h2>
          <p className="text-slate mt-2 max-w-2xl mx-auto">
            Answers to common questions about our pricing and subscriptions. If you have other questions, please feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-1">
                <AccordionTrigger className="px-4 text-left font-medium text-charcoal hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 text-slate">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10 bg-primary-pale/30 py-8 px-4 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-charcoal mb-2">Have more questions?</h3>
          <p className="text-slate mb-4">
            Our team is ready to help you answer any questions about our products and pricing.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="rounded-full">
              Contact Sales
            </Button>
            <Button variant="outline" className="rounded-full">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 
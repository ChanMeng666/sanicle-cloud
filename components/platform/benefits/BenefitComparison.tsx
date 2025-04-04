"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ComparisonCard } from "./ComparisonCard"

export function BenefitComparison() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
              Benefit Comparison
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">Comparative Analysis</h2>
            <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
              See how Sanicle.cloud's comprehensive benefits package compares to traditional workplace benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ComparisonCard
              title="Traditional Benefits"
              features={[
                "Basic health insurance",
                "Limited women's health coverage",
                "Generic health resources",
                "No menstrual product coverage",
                "Limited privacy controls",
                "One-size-fits-all approach",
              ]}
              included={false}
            />

            <ComparisonCard
              title="Sanicle.cloud Benefits"
              features={[
                "Comprehensive menstrual health tracking",
                "Personalized health insights",
                "Monthly menstrual product allowance",
                "Expert medical consultations",
                "HIPAA-compliant privacy protection",
                "Tailored to individual needs",
              ]}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#7f8c8d] mb-6">Ready to upgrade your workplace benefits package?</p>
            <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white rounded-full px-8">
              Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 
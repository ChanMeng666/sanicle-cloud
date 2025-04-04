import { ArrowRight } from "lucide-react"

export function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: "Partner with us",
      description: "Simple Plan Management",
    },
    {
      number: 2,
      title: "Explore solution",
      description: "Quick Employee Enrollment",
    },
    {
      number: 3,
      title: "Easy payment",
      description: "Monitor program usage",
    },
    {
      number: 4,
      title: "Enjoy wide range of health options",
      description: "Comprehensive health benefits",
    },
  ]

  return (
    <div className="grid md:grid-cols-4 gap-6 relative">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#167d83] text-white flex items-center justify-center text-2xl font-bold mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-[#2c3e50] mb-2">{step.title}</h3>
            <p className="text-[#7f8c8d]">{step.description}</p>
          </div>

          {/* Connector */}
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#7ac8cd] -z-10">
              <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-[#7ac8cd]" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}


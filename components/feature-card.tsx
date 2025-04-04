import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
      <div className="mb-4 p-2 bg-[#e6f5f6] rounded-md">{icon}</div>
      <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">{title}</h3>
      <p className="text-[#7f8c8d]">{description}</p>
    </div>
  )
}


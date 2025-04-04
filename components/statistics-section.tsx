export function StatisticsSection() {
  const stats = [
    { value: "1200+", label: "Users on Waitlist" },
    { value: "80+", label: "Enterprise Client LOI" },
    { value: "65+", label: "Employee Resource Groups" },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-4xl font-bold text-[#167d83]">{stat.value}</h3>
              <p className="text-[#7f8c8d]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


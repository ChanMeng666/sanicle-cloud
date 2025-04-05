export function StatisticsSection() {
  const stats = [
    { value: "1200+", label: "Users on Waitlist", leafColor: "green" },
    { value: "80+", label: "Enterprise Client LOI", leafColor: "pink" },
    { value: "65+", label: "Employee Resource Groups", leafColor: "green" },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Top decorative element to connect with previous section */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-tertiary/20 to-transparent"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Colored pencil line decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-100 via-primary/30 to-coral-100 transform -translate-y-1/2 opacity-30"></div>
      
      {/* Leaf decorations */}
      <div className="absolute top-10 right-20 opacity-5 animate-float">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-32 h-32 transform rotate-45" />
      </div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 opacity-10">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-64 h-64 transform -rotate-45" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2 p-6 relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 mx-auto opacity-10 flex items-center justify-center pointer-events-none overflow-hidden">
                <img 
                  src={`/logo/leave-${stat.leafColor}.svg`} 
                  alt="Leaf background" 
                  className="w-40 h-40 transform group-hover:rotate-12 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-4xl font-bold text-primary relative z-10">{stat.value}</h3>
              <p className="text-neutral-600 relative z-10">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export function StatisticsSection() {
  const stats = [
    { value: "1200+", label: "Users on Waitlist", leafColor: "green" },
    { value: "80+", label: "Enterprise Client LOI", leafColor: "pink" },
    { value: "65+", label: "Employee Resource Groups", leafColor: "green" },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-10">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-64 h-64 transform rotate-45" />
      </div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 opacity-10">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-64 h-64 transform -rotate-45" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
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
              <h3 className="text-4xl font-bold text-[#167d83] relative z-10">{stat.value}</h3>
              <p className="text-[#7f8c8d] relative z-10">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


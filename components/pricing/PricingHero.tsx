"use client"

import { useState } from "react"

// Custom pricing toggle component
export const PricingToggle = ({
  onToggle,
}: {
  onToggle: (isAnnual: boolean) => void
}) => {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleToggle = () => {
    setIsAnnual(!isAnnual)
    onToggle(!isAnnual)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-4">
      <span className={`text-sm font-medium transition-colors duration-200 ${!isAnnual ? "text-primary font-semibold" : "text-slate-500"}`}>Monthly</span>
      <button
        onClick={handleToggle}
        className="relative w-16 h-8 bg-primary-pale rounded-full p-1 transition-colors duration-300 shadow-inner"
        aria-label={isAnnual ? "Switch to monthly billing" : "Switch to annual billing"}
      >
        <span className="sr-only">{isAnnual ? "Switch to monthly billing" : "Switch to annual billing"}</span>
        <div
          className={`absolute top-1 w-6 h-6 bg-primary rounded-full shadow transition-transform duration-300 ${
            isAnnual ? "translate-x-8" : "translate-x-0"
          }`}
        ></div>
      </button>
      <div className="flex items-center">
        <span className={`text-sm font-medium transition-colors duration-200 ${isAnnual ? "text-primary font-semibold" : "text-slate-500"}`}>Annual</span>
        <span className="ml-2 text-xs font-medium text-white bg-secondary px-2 py-1 rounded-full shadow-sm">Save 20%</span>
      </div>
    </div>
  )
}

export function PricingHero({ onToggle }: { onToggle: (isAnnual: boolean) => void }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;
    
    // Calculate rotation based on mouse position relative to container center
    const xRotation = ((y - container.height / 2) / container.height) * 8;
    const yRotation = ((x - container.width / 2) / container.width) * -8;
    
    setRotation({ x: xRotation, y: yRotation });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="w-full py-16 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-primary-pale/30"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Large glow effects */}
        <div className="absolute -top-32 -left-32">
          <div className="w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
        <div className="absolute top-1/2 -right-32">
          <div className="w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
        </div>
        
        {/* Large leaf decorations */}
        <div className="absolute top-10 right-[10%] hidden md:block">
          <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-32 h-32 opacity-20 rotate-45" />
        </div>
        <div className="absolute bottom-20 left-[5%] hidden md:block">
          <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-40 h-40 opacity-20 -rotate-12" />
        </div>
        
        {/* Pencil line decoration */}
        <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <div 
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 shadow-sm backdrop-blur-sm"
              data-aos="fade-down" 
              data-aos-delay="100"
            >
              Transparent Pricing for Every Business
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light mb-8"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Simple Plans for Your Organization
            </h1>

            <p 
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto md:mx-0 leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              Choose the plan that best fits your organization's size and needs. All plans include our core menstrual health benefits platform with top-tier security and support.
            </p>

            <div data-aos="fade-up" data-aos-delay="400" className="relative">
              <PricingToggle onToggle={onToggle} />
              
              {/* Small decorative elements around toggle */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden md:block">
                <img src="/logo/leave-green.svg" alt="" className="w-5 h-5 opacity-30 rotate-45" />
              </div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden md:block">
                <img src="/logo/leave-pink.svg" alt="" className="w-5 h-5 opacity-30 -rotate-12" />
              </div>
            </div>
          </div>

          {/* Subscription Visualization Image with 3D effect */}
          <div 
            className="relative mx-auto perspective-[1000px] max-w-lg hidden md:block"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-70"></div>
            
            <div 
              className="relative z-10 transition-transform duration-300 ease-out transform-gpu rounded-xl overflow-hidden shadow-2xl border-2 border-white/50"
              style={{ 
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <img
                src="/images/11_17_48.png"
                alt="Premium cloud subscription visualization"
                className="w-full h-auto"
              />
              
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 bg-white p-3 rounded-lg shadow-lg z-30 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg">✦</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Starting from</p>
                  <p className="text-primary font-bold">$8/user</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Small leaf decorations */}
      <div className="absolute top-20 right-20 hidden lg:block animate-float">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-12 h-12 opacity-30 rotate-45" />
      </div>
      <div className="absolute bottom-40 left-20 hidden lg:block animate-float-delay">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-16 h-16 opacity-30 -rotate-12" />
      </div>
      
      {/* Wave divider at the bottom of Hero Section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
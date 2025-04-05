"use client"

import { Globe, Users, Award, Star, Heart, Sparkles } from "lucide-react"

export function Milestones() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 relative -mt-10 z-20 overflow-hidden">
      {/* Top transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50/80 to-slate-50 pointer-events-none"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-dots opacity-15"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-96 h-96 opacity-20 blur-3xl animate-float-delay" />
      </div>
      <div className="absolute bottom-1/4 left-1/4">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-96 h-96 opacity-20 blur-3xl animate-float" />
      </div>
      
      {/* Colored pencil line decorations */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>

      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Milestones & Achievements</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Key moments that have shaped Sanicle.cloud's growth and impact.
          </p>
        </div>

        {/* Desktop impact display */}
        <div className="relative max-w-4xl mx-auto hidden md:block h-[700px]">
          {/* Center leaf-shape instead of circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-64 h-64 flex flex-col items-center justify-center p-6 text-white animate-pulse-opacity">
            <div className="absolute inset-0 w-full h-full">
              <img src="/logo/leave-green.svg" alt="Leaf background" className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light mix-blend-soft-light"></div>
            </div>
            <div className="absolute inset-0 shadow-glow opacity-40"></div>
            <div className="relative z-10 flex flex-col items-center">
              <Globe className="h-12 w-12 mb-3" />
              <h3 className="text-xl font-bold text-center">Global Impact</h3>
              <p className="text-sm text-center text-white/80 mt-1">Transforming workplaces worldwide</p>
            </div>
          </div>

          {/* Outer leaf patterns instead of circles */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] animate-scale-up-down">
            <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-10 h-10 opacity-30" />
            </div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-90">
              <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-10 h-10 opacity-30" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-180">
              <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-10 h-10 opacity-30" />
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
              <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-10 h-10 opacity-30" />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px]">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
          </div>

          {/* Achievement items - using radial layout */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 relative mr-3">
                <img src="/logo/leave-green.svg" alt="Leaf background" className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <span className="text-slate-800 font-bold whitespace-nowrap">500+ Companies</span>
            </div>
          </div>

          <div className="absolute top-[25%] right-12 transform translate-x-0 -translate-y-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 relative mr-3">
                <img src="/logo/leave-pink.svg" alt="Leaf background" className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
              </div>
              <span className="text-slate-800 font-bold whitespace-nowrap">12 Countries</span>
            </div>
          </div>

          <div className="absolute top-[75%] right-12 transform translate-x-0 translate-y-0">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 relative mr-3">
                <img src="/logo/leave-white.svg" alt="Leaf background" className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
              <span className="text-slate-800 font-bold whitespace-nowrap">3 Industry Awards</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 relative mr-3">
                <img src="/logo/leave-green.svg" alt="Leaf background" className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
              </div>
              <span className="text-slate-800 font-bold whitespace-nowrap">4.8/5 Rating</span>
            </div>
          </div>

          <div className="absolute top-[75%] left-12 transform -translate-x-0 translate-y-0">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 relative mr-3">
                <img src="/logo/leave-pink.svg" alt="Leaf background" className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <span className="text-slate-800 font-bold whitespace-nowrap">10,000+ Users</span>
            </div>
          </div>

          <div className="absolute top-[25%] left-12 transform -translate-x-0 -translate-y-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <div className="w-10 h-10 relative mr-3">
                <img src="/logo/leave-white.svg" alt="Leaf background" className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
              </div>
              <span className="text-slate-800 font-bold whitespace-nowrap">$5M in Funding</span>
            </div>
          </div>

          {/* Connection lines */}
          <div className="absolute inset-0 top-1/2 left-1/2 w-[550px] h-[550px] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <svg className="w-full h-full" viewBox="0 0 550 550">
              <g stroke="#167d83" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.3">
                <line x1="275" y1="0" x2="275" y2="275" />
                <line x1="550" y1="137.5" x2="275" y2="275" />
                <line x1="550" y1="412.5" x2="275" y2="275" />
                <line x1="275" y1="550" x2="275" y2="275" />
                <line x1="0" y1="412.5" x2="275" y2="275" />
                <line x1="0" y1="137.5" x2="275" y2="275" />
              </g>
            </svg>
          </div>
        </div>

        {/* Tablet and mobile display - more compact grid layout */}
        <div className="md:hidden relative">
          <div className="w-48 h-48 mx-auto flex flex-col items-center justify-center p-6 text-white mb-10 relative">
            <div className="absolute inset-0 w-full h-full">
              <img src="/logo/leave-green.svg" alt="Leaf background" className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light mix-blend-soft-light"></div>
            </div>
            <div className="relative z-10">
              <Globe className="h-10 w-10 mb-2" />
              <h3 className="text-lg font-bold text-center">Global Impact</h3>
              <p className="text-xs text-center text-white/80 mt-1">Transforming workplaces worldwide</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "500+ Companies",
                leaf: "green"
              },
              {
                icon: <Globe className="h-6 w-6 text-primary" />,
                title: "12 Countries",
                leaf: "pink"
              },
              {
                icon: <Award className="h-6 w-6 text-primary" />,
                title: "3 Industry Awards",
                leaf: "white"
              },
              {
                icon: <Star className="h-6 w-6 text-primary" />,
                title: "4.8/5 Rating",
                leaf: "green"
              },
              {
                icon: <Heart className="h-6 w-6 text-primary" />,
                title: "10,000+ Users",
                leaf: "pink"
              },
              {
                icon: <Sparkles className="h-6 w-6 text-primary" />,
                title: "$5M in Funding",
                leaf: "white"
              },
            ].map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-4 flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-10 h-10 relative mr-3 flex-shrink-0">
                  <img src={`/logo/leave-${achievement.leaf}.svg`} alt="Leaf background" className="absolute inset-0 w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </div>
                <span className="text-slate-800 font-bold text-sm">{achievement.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave divider for smooth transition to footer or next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
} 
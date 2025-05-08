import React from "react"

interface PageLayoutProps {
  children: React.ReactNode
  leafColor: string
  memberName: string
}

export function PageLayout({ children, leafColor, memberName }: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Header background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      {/* Leaf decorations */}
      <div className="absolute -top-20 right-[10%] transform rotate-45">
        <img src={`/logo/leave-${leafColor}.svg`} alt="Leaf decoration" className="opacity-10 w-64 h-64 blur-sm" />
      </div>
      <div className="absolute -bottom-20 left-[15%] transform rotate-45">
        <img src={`/logo/leave-${leafColor}.svg`} alt="Leaf decoration" className="opacity-5 w-[20rem] h-[20rem] blur-md" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary/5 to-transparent"></div>
    </main>
  )
} 
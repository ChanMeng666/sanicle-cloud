import Link from "next/link"
import { ChevronLeft } from "lucide-react"
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
      
      {/* Top leaf decorations */}
      <div className="absolute -top-20 right-[10%] transform rotate-45">
        <img src={`/logo/leave-${leafColor}.svg`} alt="Leaf decoration" className="opacity-10 w-64 h-64 blur-sm" />
      </div>
      <div className="absolute -top-10 left-[5%] transform -rotate-15">
        <img src="/logo/leave-coral.svg" alt="Leaf decoration" className="opacity-5 w-48 h-48 blur-sm" />
      </div>
      
      {/* Bottom leaf decoration */}
      <div className="absolute -bottom-40 right-[5%] transform rotate-180">
        <img src="/logo/leave-coral.svg" alt="Leaf decoration" className="opacity-5 w-[30rem] h-[30rem] blur-md" />
      </div>
      <div className="absolute -bottom-20 left-[15%] transform rotate-45">
        <img src={`/logo/leave-${leafColor}.svg`} alt="Leaf decoration" className="opacity-5 w-[20rem] h-[20rem] blur-md" />
      </div>
      
      <div className="container max-w-screen-xl mx-auto px-4 pt-20 pb-32 relative z-10">
        {/* Navigation */}
        <nav className="mb-12 flex items-center justify-between py-4 border-b border-gray-100">
          <div className="flex items-center">
            <Link 
              href="/company/about#team" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
            >
              <span className="flex items-center justify-center w-9 h-9 mr-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <ChevronLeft className="h-5 w-5 text-primary" />
              </span>
              <span className="font-medium">Back to Team</span>
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/company/about#team" className="hover:text-primary transition-colors">
              Team
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{memberName}</span>
          </div>
        </nav>
        
        {children}
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary/5 to-transparent"></div>
    </main>
  )
} 
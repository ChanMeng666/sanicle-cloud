"use client"

import { useRef, useEffect, useState } from "react"
import { CheckCircle, Heart, LockIcon, Network, ShieldIcon, Users, Brain, Sun, ChevronLeft, ChevronRight } from "lucide-react"

export function ValueProposition() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Check scroll position to show/hide navigation arrows
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };
  
  // Scroll horizontally
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current || isScrolling) return;
    
    setIsScrolling(true);
    const scrollAmount = 400; // px to scroll
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const targetScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;
    
    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    // Reset scrolling state after animation
    setTimeout(() => {
      setIsScrolling(false);
      checkScrollPosition();
    }, 500);
  };

  // Initialize and track scroll position
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      checkScrollPosition();
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      
      // Check on resize too
      window.addEventListener('resize', checkScrollPosition);
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const features = [
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Empowering HR Managers",
      description:
        "We provide HR with tools and resources to address women's health comprehensively, including menstrual health, menopause, and mental wellbeing benefits management.",
      color: "bg-primary",
      leafColor: "green"
    },
    {
      icon: <Heart className="h-10 w-10 text-white" />,
      title: "Tackling Hormonal Imbalances",
      description:
        "Sanicle.cloud offers support for conditions like PMS, PCOS, and menopause symptoms, allowing women to manage their health effectively on the job.",
      color: "bg-secondary",
      leafColor: "pink"
    },
    {
      icon: <Network className="h-10 w-10 text-white" />,
      title: "Building A Strong Network",
      description:
        "We connect employers with leading healthcare providers, ensuring access to quality care for female employees across all life stages.",
      color: "bg-primary",
      leafColor: "green"
    },
    {
      icon: <Sun className="h-10 w-10 text-white" />,
      title: "Supporting Menopause Transition",
      description:
        "Our platform provides resources, support, and workplace accommodations for women experiencing menopause, helping them thrive professionally during this transition.",
      color: "bg-secondary",
      leafColor: "pink"
    },
    {
      icon: <Brain className="h-10 w-10 text-white" />,
      title: "Prioritizing Mental Wellbeing",
      description:
        "We integrate mental health support specifically designed for women, addressing the unique psychological aspects connected to hormonal health.",
      color: "bg-primary",
      leafColor: "green"
    },
    {
      icon: <ShieldIcon className="h-10 w-10 text-white" />,
      title: "Ensuring Data Privacy",
      description:
        "We prioritize the security and privacy of sensitive health data with enterprise-grade protection across all health domains.",
      color: "bg-secondary",
      leafColor: "pink"
    },
    {
      icon: <LockIcon className="h-10 w-10 text-white" />,
      title: "Seamless Integration",
      description: "Our platform integrates with existing HR systems for a smooth implementation process.",
      color: "bg-secondary",
      leafColor: "white"
    },
  ]

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-white relative" id="features">
      <div className="absolute top-0 right-0 opacity-5">
        <img src="/logo/leave-green.svg" alt="" className="w-64 h-64 transform rotate-45" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-5">
        <img src="/logo/leave-pink.svg" alt="" className="w-64 h-64 transform -rotate-12" />
      </div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto px-4 relative">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full opacity-20">
            <img src="/logo/leave-green.svg" alt="" className="w-24 h-24" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sanicle.cloud is a comprehensive solution.</h2>
          <p className="text-base md:text-lg text-slate">
            We're a B2B-B2G platform dedicated to transforming women's workplace wellbeing. Here's how:
          </p>
        </div>

        {/* Horizontal scrollable card layout */}
        <div className="relative px-4 md:px-8 py-4">
          {/* Left navigation arrow */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')} 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow-md border border-gray-200 hover:bg-white transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
          )}
          
          {/* Right navigation arrow */}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')} 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow-md border border-gray-200 hover:bg-white transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          )}
          
          {/* Horizontal scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-hide snap-x scroll-px-4"
            style={{ scrollbarWidth: 'thin', WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex space-x-6 md:space-x-8 pl-2 pr-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[280px] md:w-[320px] snap-start scroll-ml-4"
                >
                  <div className={`${feature.color} rounded-2xl shadow-card-hover h-full p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}>
                    {/* Leaf decoration */}
                    <div className="absolute -right-10 -bottom-10 opacity-20 transition-opacity duration-300 group-hover:opacity-30">
                      <img 
                        src={`/logo/leave-${feature.leafColor}.svg`} 
                        alt="" 
                        className="w-32 h-32 transform rotate-12"
                      />
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/90 text-sm flex-grow">
                        {feature.description}
                      </p>
                      
                      {/* Small leaf indicator */}
                      <div className="w-4 h-4 mt-4 self-end opacity-60">
                        <img 
                          src={`/logo/leave-white.svg`} 
                          alt="" 
                          className="w-full h-full transform -rotate-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-2 items-center space-x-1">
            <div className="text-xs text-gray-500">Scroll for more</div>
            <ChevronRight className="h-3 w-3 text-gray-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import { useRef, useEffect, useState } from "react"
import { CheckCircle, Heart, LockIcon, Network, ShieldIcon, Users, Brain, Sun, ChevronLeft, ChevronRight, MoveRight, LineChart, Sparkles, PuzzleIcon, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ValueProposition() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isIconError, setIconError] = useState(false);
  
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
      color: "bg-teal-600",
      leafColor: "green"
    },
    {
      icon: <Sun className="h-10 w-10 text-white" />,
      title: "Supporting Menopause Transition",
      description:
        "Our platform provides resources, support, and workplace accommodations for women experiencing menopause, helping them thrive professionally during this transition.",
      color: "bg-coral-600",
      leafColor: "pink"
    },
    {
      icon: <Brain className="h-10 w-10 text-white" />,
      title: "Prioritizing Mental Wellbeing",
      description:
        "We integrate mental health support specifically designed for women, addressing the unique psychological aspects connected to hormonal health.",
      color: "bg-teal-500",
      leafColor: "green"
    },
    {
      icon: <ShieldIcon className="h-10 w-10 text-white" />,
      title: "Ensuring Data Privacy",
      description:
        "We prioritize the security and privacy of sensitive health data with enterprise-grade protection across all health domains.",
      color: "bg-coral-500",
      leafColor: "pink"
    },
    {
      icon: <LockIcon className="h-10 w-10 text-white" />,
      title: "Seamless Integration",
      description: "Our platform integrates with existing HR systems for a smooth implementation process.",
      color: "bg-neutral-700",
      leafColor: "white"
    },
  ]

  const benefits = [
    {
      title: "Comprehensive Period Care",
      description:
        "Our smart dispensers offer a range of quality menstrual products, ensuring that all employees have access to the products they need, when they need them.",
      icon: "/icons/period-care.svg",
      fallbackIcon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "Data-Driven Insights",
      description:
        "Gain valuable insights into usage patterns and employee needs, allowing you to optimize your menstrual health offerings and support.",
      icon: "/icons/data-insights.svg",
      fallbackIcon: <LineChart className="h-6 w-6 text-primary" />
    },
    {
      title: "Promote Inclusivity",
      description:
        "Demonstrate your commitment to creating an inclusive workplace where everyone feels valued and supported, regardless of their menstrual health needs.",
      icon: "/icons/inclusivity.svg",
      fallbackIcon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Enhance Employee Well-being",
      description:
        "Support employees during their periods, reducing absenteeism and presenteeism while boosting overall satisfaction and productivity.",
      icon: "/icons/wellbeing.svg",
      fallbackIcon: <Sparkles className="h-6 w-6 text-primary" />
    },
    {
      title: "Easy Implementation",
      description:
        "Our turnkey solution includes installation, maintenance, and restocking, making it effortless to provide essential menstrual care.",
      icon: "/icons/easy-setup.svg",
      fallbackIcon: <PuzzleIcon className="h-6 w-6 text-primary" />
    },
    {
      title: "Sustainability Focus",
      description:
        "Our eco-friendly products and commitment to reducing waste align with your company's environmental goals and values.",
      icon: "/icons/sustainability.svg",
      fallbackIcon: <Leaf className="h-6 w-6 text-primary" />
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-grid opacity-5"></div>
      
      {/* Decorative leaf elements - 减小负边距 */}
      <div className="absolute top-1/4 -left-12 transform -rotate-12">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-64 h-64 opacity-5" />
      </div>
      <div className="absolute top-3/4 -right-12 transform rotate-12">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-64 h-64 opacity-5" />
      </div>
      
      {/* Small floating leaves */}
      <div className="absolute top-1/3 right-1/4 animate-float">
        <img src="/logo/leave-green.svg" alt="Small leaf" className="w-12 h-12 opacity-20" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float-delay">
        <img src="/logo/leave-pink.svg" alt="Small leaf" className="w-10 h-10 opacity-15" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              <span className="font-semibold">For Employers</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-800">
              Transform Your Workplace with Sanicle
            </h2>
            <p className="mx-auto max-w-[700px] text-neutral-600 md:text-lg">
              Join forward-thinking companies that prioritize menstrual health as an essential aspect of workplace
              wellness.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="relative overflow-hidden group border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white/90">
              <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-all duration-500">
                <img src={index % 2 === 0 ? "/logo/leave-green.svg" : "/logo/leave-pink.svg"} alt="Leaf decoration" className="w-full h-full" />
              </div>
              
              <CardContent className="p-6 pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {isIconError ? benefit.fallbackIcon : (
                      <img 
                        src={benefit.icon} 
                        alt="" 
                        className="w-6 h-6" 
                        onError={(e) => {
                          setIconError(true);
                          console.log(`Failed to load icon: ${benefit.icon}`);
                        }}
                      />
                    )}
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-800">{benefit.title}</h3>
                </div>
                <p className="text-neutral-600">{benefit.description}</p>
                <div className="mt-4 flex items-center text-primary group-hover:underline">
                  <span className="text-sm font-medium">Learn more</span>
                  <MoveRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-teal-100 via-white to-coral-100 p-[1px] shadow-xl transition-all duration-300 hover:shadow-2xl">
            <div className="relative z-10 flex flex-col items-center overflow-hidden rounded-xl bg-white p-8 text-center">
              <div className="absolute -right-8 -top-8 opacity-5">
                <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-32 h-32" />
              </div>
              <div className="absolute -left-8 -bottom-8 opacity-5">
                <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-32 h-32" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-neutral-800">Ready to get started?</h3>
              <p className="mb-6 text-neutral-600">
                Join the growing list of forward-thinking companies that are prioritizing menstrual health in the
                workplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Request A Demo
                </a>
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
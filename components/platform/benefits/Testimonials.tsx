"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        "Implementing this platform has transformed how we support our female employees. The comprehensive health tracking and product access has reduced absenteeism and improved overall workplace satisfaction.",
      author: "Sarah Johnson",
      position: "HR Director",
      company: "TechInnovate Inc.",
      image: "/testimonials/sarah.jpg",
    },
    {
      quote:
        "As someone who suffers from endometriosis, having access to expert resources and consultations through my workplace benefits has been life-changing. I feel supported and can manage my symptoms more effectively.",
      author: "Jessica Lee",
      position: "UX Designer",
      company: "Creative Solutions",
      image: "/testimonials/jessica.jpg",
    },
    {
      quote:
        "The platform's privacy features gave me confidence to track my cycle without worrying about data security. The personalized insights have helped me understand patterns affecting my productivity.",
      author: "Maria Rodriguez",
      position: "Project Manager",
      company: "Global Systems",
      image: "/testimonials/maria.jpg",
    },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/20 to-white opacity-60"></div>
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      {/* Decorative leaf elements */}
      <div className="absolute top-20 right-10 w-40 h-40 opacity-[0.08] transform rotate-12">
        <img 
          src="/logo/leave-green.svg" 
          alt="Decorative leaf" 
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-20 left-10 w-32 h-32 opacity-[0.06] transform -rotate-12">
        <img 
          src="/logo/leave-pink.svg" 
          alt="Decorative leaf" 
          className="w-full h-full"
        />
      </div>
      
      {/* Large quote symbol */}
      <div className="absolute top-1/4 right-1/4 text-primary/5">
        <Quote className="h-40 w-40" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-primary text-sm font-medium mb-3">
              Success Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-800 mb-3">What Our Users Say</h2>
            <p className="text-neutral-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
              Hear from employees and HR managers who have implemented our platform
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-neutral-100 overflow-hidden">
            {/* Background gradient for the testimonial card */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-white to-coral-50/20"></div>
            
            {/* Decorative elements for the testimonial card */}
            <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
              <img src="/logo/leave-green.svg" alt="" className="w-full h-full transform rotate-45" />
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20 opacity-10">
              <img src="/logo/leave-pink.svg" alt="" className="w-full h-full transform -rotate-45" />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img
                      src={testimonials[activeTestimonial].image || "/placeholder.svg?height=100&width=100"}
                      alt={testimonials[activeTestimonial].author}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 rounded-full border border-primary/10"></div>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="mb-4 relative">
                    <Quote className="absolute -top-2 -left-3 h-6 w-6 text-primary/20" />
                    <p className="text-neutral-700 italic relative z-10 text-base md:text-lg">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{testimonials[activeTestimonial].author}</h4>
                    <p className="text-sm text-neutral-500">
                      {testimonials[activeTestimonial].position} at {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full border-primary/20 text-primary hover:bg-primary/5"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeTestimonial ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full border-primary/20 text-primary hover:bg-primary/5"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#167D83" 
            fillOpacity="0.1" 
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  )
} 
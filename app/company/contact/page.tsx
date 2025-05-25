"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Check, Send, Phone, Mail, MapPin, CalendarCheck } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false)
      setFormSubmitted(true)
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
        setFormSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <main className="w-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-primary/5 to-transparent opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-secondary/5 blur-xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-xl pointer-events-none"></div>
      
      {/* Large decorative leaves */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10 hidden lg:block pointer-events-none">
        <img src="/logo/leave-green.svg" alt="Leaf decoration" className="w-full h-full transform rotate-45" />
      </div>
      <div className="absolute bottom-10 left-10 w-40 h-40 opacity-10 hidden lg:block pointer-events-none">
        <img src="/logo/leave-pink.svg" alt="Leaf decoration" className="w-full h-full transform -rotate-12" />
      </div>
      
      {/* Hero section with background image */}
      <section className="w-full py-24 md:py-32 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/office.jpg" 
            alt="Sanicle Office" 
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60 mix-blend-multiply"></div>
        </div>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white mb-4">
              Get in Touch
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              We'd Love to Hear From You
            </h1>
            <p className="text-xl text-white/90 mx-auto max-w-2xl mb-8">
              Whether you have questions about our services, want to schedule a demo, or just want to learn more about Sanicle.Cloud, we're here to help.
            </p>
            
            {/* Our Mission section */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 max-w-2xl mx-auto">
              <h3 className="font-bold text-xl text-white mb-2">Our Mission</h3>
              <p className="text-white/90">Improving women's health experiences in the workplace through innovative technology and personalized care solutions.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main content section */}
      <section className="w-full py-12 md:py-16 lg:py-20 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 opacity-10">
                  <img src="/logo/leave-green.svg" alt="" className="w-full h-full" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-6">
                  Our team is ready to assist you with any questions or inquiries you might have. Here's how you can reach us:
                </p>
              </div>
              
              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">Monday-Friday, 9am-5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">hello@sanicle.cloud</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond as quickly as possible</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office</h3>
                    <p className="text-gray-600">123 Innovation Drive, San Francisco, CA 94103</p>
                    <p className="text-sm text-gray-500 mt-1">Please schedule an appointment before visiting</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="rounded-full bg-primary/10 p-3">
                    <CalendarCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Schedule a Demo</h3>
                    <p className="text-gray-600">Want to see our platform in action?</p>
                    <p className="text-sm text-gray-500 mt-1">Fill out the form and let us know your availability</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 bg-white p-6 md:p-8 rounded-xl shadow-lg relative overflow-hidden border border-gray-100">
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-5 pointer-events-none">
                <img src="/logo/leave-green.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 opacity-5 pointer-events-none">
                <img src="/logo/leave-pink.svg" alt="" className="w-full h-full rotate-45" />
              </div>
              
              <div className="relative">
                <h2 className="text-2xl font-bold tracking-tight mb-2">Send us a Message</h2>
                <div className="h-1 w-20 bg-primary/20 rounded-full mb-4"></div>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us! We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Enter your name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-50 border-gray-200 focus:bg-white transition-colors duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-50 border-gray-200 focus:bg-white transition-colors duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Enter subject" 
                      required 
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-gray-50 border-gray-200 focus:bg-white transition-colors duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Type your message here..." 
                      required 
                      className="min-h-[150px] bg-gray-50 border-gray-200 focus:bg-white transition-colors duration-200"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base shadow-md transition-all duration-200 hover:shadow-lg" 
                    disabled={submitting}
                  >
                    {submitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 
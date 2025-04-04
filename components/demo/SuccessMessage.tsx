"use client"

import { CheckCircle, Calendar, Home, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export function SuccessMessage() {
  return (
    <div className="p-8 md:p-12 text-center">
      <div className="relative mx-auto mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-pale to-beige flex items-center justify-center mx-auto border-4 border-white shadow-lg">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/10 rounded-full animate-pulse-opacity"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/10 rounded-full animate-pulse-opacity" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Thank You for Your Request!</h3>
      <p className="text-slate text-lg mb-8 max-w-md mx-auto">
        We have received your demo request. Our customer success team will contact you within <span className="font-medium text-primary">24 hours</span> to arrange a detailed demonstration.
      </p>

      <Card variant="beige" className="mb-8 max-w-lg mx-auto">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-center">
            <div className="bg-secondary/20 h-10 w-10 rounded-lg flex items-center justify-center text-secondary mr-3">
              <Calendar className="h-5 w-5" />
            </div>
            <span className="text-charcoal font-semibold">Your Next Steps</span>
          </div>
          <p className="text-slate leading-relaxed">
            Please check your email. You will receive a confirmation email containing a calendar invite link where you can select a time that works for you.
          </p>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" variant="default" rounded="lg" className="shadow-lg">
          <Link href="/" className="flex items-center">
            <Home className="h-5 w-5 mr-2" />
            Return to Home
          </Link>
        </Button>
        <Button asChild size="lg" variant="soft" rounded="lg">
          <Link href="/resources" className="flex items-center">
            <Book className="h-5 w-5 mr-2" />
            Explore Resources
          </Link>
        </Button>
      </div>
      
      <div className="mt-8 text-sm text-slate/80 max-w-md mx-auto">
        <p>If you have any questions, please contact our customer service team: <span className="text-primary">support@sanicle.cloud</span></p>
      </div>
    </div>
  )
} 
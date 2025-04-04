"use client"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#167d83]/5 pattern-dots"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">User Testimonials</h2>
            <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
              Hear what employees who have experienced Sanicle.cloud benefits have to say.
            </p>
          </div>

          <div className="relative">
            {/* Large quotation marks */}
            <div className="absolute -top-10 -left-10 text-9xl text-[#167d83]/10 font-serif">"</div>
            <div className="absolute -bottom-10 -right-10 text-9xl text-[#167d83]/10 font-serif">"</div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 md:row-span-1 bg-white rounded-2xl shadow-lg p-8 transform md:translate-y-12 z-20">
                <p className="text-lg text-[#2c3e50] italic mb-6">
                  "The cycle tracking and personalized insights have been incredibly helpful. I can better schedule my workdays around my cycle, and the product delivery is very convenient."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-4 font-bold">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">Jane Doe</p>
                    <p className="text-sm text-[#7f8c8d]">Marketing Manager</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 md:col-start-8 md:row-start-1 bg-[#e6f5f6] rounded-2xl shadow-lg p-8 z-10">
                <p className="text-lg text-[#2c3e50] italic mb-6">
                  "Accessing educational resources about PCOS has changed my life. I finally understand my condition better."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#167d83] flex items-center justify-center mr-4 font-bold">
                    AT
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">Amy Taylor</p>
                    <p className="text-sm text-[#7f8c8d]">Software Engineer</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 md:col-start-2 md:row-start-2 bg-[#fef6e9] rounded-2xl shadow-lg p-8 transform md:-translate-y-12 z-10">
                <p className="text-lg text-[#2c3e50] italic mb-6">
                  "The expert consultations have been invaluable. I was able to discuss my concerns with healthcare providers without taking time off work."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#EE4C23] flex items-center justify-center mr-4 font-bold">
                    SL
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c3e50]">Sarah Lee</p>
                    <p className="text-sm text-[#7f8c8d]">HR Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
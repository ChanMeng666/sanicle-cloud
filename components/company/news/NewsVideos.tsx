"use client"

export function NewsVideos() {
  return (
    <section className="w-full py-16 bg-slate-50">
      {/* Video Section - Achievements Showcase */}
      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-slide-up">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Our Recent Success
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Highlights from Our Global Impact</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how Sanicle is transforming workplaces and driving gender equity worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* First Video */}
          <div className="bg-white rounded-xl shadow-lg p-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/wKiliI0U-HE?si=Qrfhl-yDZfVpiNbe" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Sanicle's Workplace Flo: Equity Wins</h3>
            <p className="text-slate-600 text-sm">
              Behind the scenes at the Beyond Beijing 30 Summit—a landmark event marking 30 years of the Beijing Declaration with unfiltered conversations on gender equity and workplace transformation.
            </p>
          </div>

          {/* Second Video */}
          <div className="bg-white rounded-xl shadow-lg p-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/h_DKbHYPhMk?si=FUFlnWSzKNuKLmOT" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Humankind or Evil? NOVA Awards at UN CSW69</h3>
            <p className="text-slate-600 text-sm">
              Witness raw debates and breakthroughs from the Beyond Beijing 30 Summit at the UN Commission on the Status of Women, featuring the prestigious NOVA Awards—recognized as the gold standard for social innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 
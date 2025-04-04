import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Award, Clock, Globe, Sparkles, ChevronDown, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section - Parallax Layers */}
      <section className="w-full min-h-[80vh] relative flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#167d83]/90 to-[#167d83]/70"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30"></div>

        {/* Floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/10 animate-float-delay"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 text-white">
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <Heart className="h-4 w-4 mr-2" /> Our Story
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Transforming <br />
                <span className="text-[#EE4C23]">Women's Health</span> <br />
                in the Workplace
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Sanicle.cloud is dedicated to revolutionizing how organizations support women's health through
                innovative menstrual health benefits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                  Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Join Our Team
                </Button>
              </div>
            </div>

            <div className="md:col-span-5 relative">
              <div className="relative">
                {/* Main image */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img src="/placeholder.svg?height=600&width=500" alt="Diverse team members" className="w-full" />
                </div>

                {/* Floating elements */}
                <div className="absolute top-0 -right-10 z-20 bg-white rounded-lg shadow-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#e6f5f6] text-[#167d83] flex items-center justify-center mr-3">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">Founded 2022</p>
                      <p className="text-sm text-[#7f8c8d]">By healthcare experts</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-10 -left-10 z-20 bg-white rounded-lg shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#fef6e9] text-[#EE4C23] flex items-center justify-center mr-3">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2c3e50]">Global Impact</p>
                      <p className="text-sm text-[#7f8c8d]">Changing workplaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
          <p className="text-sm mb-2">Scroll to explore</p>
          <ChevronDown className="h-5 w-5" />
        </div>
        {/* 在Hero Section底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Founder Quote Section - Immersive Card */}
      <section className="w-full py-16 md:py-24 bg-white relative -mt-20 z-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute -top-10 -left-10 text-9xl text-[#167d83]/10 font-serif">"</div>
            <div className="absolute -bottom-10 -right-10 text-9xl text-[#167d83]/10 font-serif">"</div>

            <div className="bg-[#fef6e9] rounded-2xl p-8 md:p-12 shadow-xl relative z-10">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#EE4C23]/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-xl w-48 h-48 mx-auto">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="Dr. Omopeju Afanu"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold text-[#2c3e50]">Dr. Omopeju Afanu</h3>
                      <p className="text-[#EE4C23]">Founder & CEO</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p className="text-xl md:text-2xl text-[#2c3e50] italic mb-6">
                    "After years of working in healthcare and seeing firsthand how menstrual health issues impact
                    women's professional lives, we set out to create a solution that would address these challenges
                    while providing employers with an innovative benefits option."
                  </p>

                  <p className="text-[#7f8c8d]">
                    Our mission is to transform workplace health by making menstrual health benefits accessible,
                    comprehensive, and stigma-free. We believe that when women have the support they need to manage
                    their menstrual health, everyone benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 在Founder Quote Section底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f8f9fa"
              fillOpacity="1"
              d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Story Section - Interactive Timeline */}
      <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative -mt-10 z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">The Sanicle.cloud Story</h2>
            <p className="text-lg text-[#7f8c8d]">From idea to innovation: how we're transforming workplace health.</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-[#e6f5f6] md:transform md:-translate-x-1/2"></div>

            {[
              {
                year: "2022",
                title: "The Beginning",
                description:
                  "Sanicle.cloud was founded by Dr. Omopeju Afanu and a team of healthcare professionals and technology experts who recognized a critical gap in workplace benefits: comprehensive support for women's menstrual health.",
                icon: <Sparkles className="h-6 w-6 text-white" />,
                position: "left",
              },
              {
                year: "2022",
                title: "Seed Funding",
                description:
                  "Secured initial investment to develop the platform and build the core team, allowing us to turn our vision into reality.",
                icon: <Star className="h-6 w-6 text-white" />,
                position: "right",
              },
              {
                year: "2023",
                title: "Platform Launch",
                description:
                  "Official launch of the Sanicle.cloud platform with our first enterprise clients, marking a significant milestone in our journey.",
                icon: <Globe className="h-6 w-6 text-white" />,
                position: "left",
              },
              {
                year: "2023",
                title: "Expansion",
                description:
                  "Grew to serve over 50 companies and expanded the team to 25 members, extending our impact across multiple industries.",
                icon: <Users className="h-6 w-6 text-white" />,
                position: "right",
              },
              {
                year: "2024",
                title: "Series A Funding",
                description:
                  "Raised significant funding to accelerate growth and enhance platform capabilities, setting the stage for our next phase of development.",
                icon: <Award className="h-6 w-6 text-white" />,
                position: "left",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-24 pl-10 md:pl-0 ${
                  milestone.position === "left"
                    ? "md:pr-12 md:text-right md:ml-0 md:mr-auto"
                    : "md:pl-12 md:ml-auto md:mr-0"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-auto ${
                    milestone.position === "left" ? "md:right-0" : "md:left-0"
                  } top-0 w-10 h-10 rounded-full bg-[#167d83] flex items-center justify-center z-10 transform ${
                    milestone.position === "left" ? "md:translate-x-1/2" : "md:-translate-x-1/2"
                  }`}
                >
                  {milestone.icon}
                </div>

                {/* Content */}
                <div
                  className={`bg-white p-6 rounded-xl shadow-lg ${
                    milestone.position === "left" ? "md:rounded-r-none" : "md:rounded-l-none"
                  } transform transition-transform duration-500 hover:-translate-y-2`}
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-[#2c3e50] mb-2">{milestone.title}</h3>
                  <p className="text-[#7f8c8d]">{milestone.description}</p>
                </div>

                {/* Connector line for mobile */}
                <div className="absolute left-5 top-10 bottom-0 w-1 bg-[#e6f5f6] md:hidden"></div>
              </div>
            ))}
          </div>
        </div>
        {/* 在Our Story Section底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Values - Rotating Cards */}
      <section className="w-full py-16 md:py-24 bg-white relative -mt-10 z-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">What We Stand For</h2>
            <p className="text-lg text-[#7f8c8d]">The principles that guide everything we do at Sanicle.cloud.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Heart className="h-10 w-10 text-white" />,
                title: "Empathy & Understanding",
                description:
                  "We approach women's health with compassion and a deep understanding of the unique challenges faced in the workplace.",
                color: "from-[#EE4C23] to-[#d43d18]",
              },
              {
                icon: <Users className="h-10 w-10 text-white" />,
                title: "Inclusivity & Diversity",
                description:
                  "We believe in creating solutions that support all women, recognizing the diversity of experiences and needs.",
                color: "from-[#167d83] to-[#0e5a5f]",
              },
              {
                icon: <Award className="h-10 w-10 text-white" />,
                title: "Innovation & Excellence",
                description:
                  "We continuously push the boundaries of what's possible in healthcare technology to deliver exceptional solutions.",
                color: "from-[#EE4C23] to-[#d43d18]",
              },
            ].map((value, index) => (
              <div key={index} className="perspective-1000">
                <div className="relative h-[400px] w-full transform-style-3d transition-transform duration-1000 hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl">
                    <div
                      className={`bg-gradient-to-br ${value.color} h-full w-full p-8 flex flex-col items-center justify-center text-center`}
                    >
                      <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                        {value.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                      <p className="text-white/90">{value.description}</p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl rotate-y-180">
                    <div className="bg-white h-full w-full p-8 flex flex-col items-center justify-center text-center">
                      <h3 className="text-2xl font-bold text-[#2c3e50] mb-4">{value.title}</h3>
                      <p className="text-[#7f8c8d] mb-6">{value.description}</p>
                      <p className="text-[#7f8c8d] italic">
                        "This value guides our approach to product development, customer service, and team culture."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 在Our Values底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f8f9fa"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Company Milestones - Circular Progress */}
      <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative -mt-10 z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#167d83]/5 pattern-dots"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
              Our Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">Milestones & Achievements</h2>
            <p className="text-lg text-[#7f8c8d]">
              The key moments that have shaped Sanicle.cloud's growth and impact.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center circle */}
            <div className="relative z-20 w-64 h-64 bg-[#167d83] rounded-full shadow-xl mx-auto flex flex-col items-center justify-center p-6 text-white">
              <Globe className="h-12 w-12 mb-3" />
              <h3 className="text-xl font-bold text-center">Global Impact</h3>
              <p className="text-sm text-center text-white/80 mt-1">Transforming workplaces worldwide</p>
            </div>

            {/* Outer circles */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-2 border-[#167d83]/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-[#167d83]/10 rounded-full"></div>
            </div>

            {/* Achievement items */}
            {[
              {
                icon: <Users className="h-6 w-6 text-[#167d83]" />,
                title: "500+ Companies",
                position: "top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
              },
              {
                icon: <Globe className="h-6 w-6 text-[#167d83]" />,
                title: "12 Countries",
                position: "top-1/4 right-0 transform translate-x-1/2",
              },
              {
                icon: <Award className="h-6 w-6 text-[#167d83]" />,
                title: "3 Industry Awards",
                position: "bottom-1/4 right-0 transform translate-x-1/2",
              },
              {
                icon: <Star className="h-6 w-6 text-[#167d83]" />,
                title: "4.9/5 Rating",
                position: "bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2",
              },
              {
                icon: <Heart className="h-6 w-6 text-[#167d83]" />,
                title: "10,000+ Users",
                position: "bottom-1/4 left-0 transform -translate-x-1/2",
              },
              {
                icon: <Sparkles className="h-6 w-6 text-[#167d83]" />,
                title: "$5M Funding",
                position: "top-1/4 left-0 transform -translate-x-1/2",
              },
            ].map((item, index) => (
              <div key={index} className={`absolute ${item.position} z-20`}>
                <div className="bg-white rounded-full shadow-lg p-4 flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#e6f5f6] flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-[#2c3e50] whitespace-nowrap">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 在Company Milestones底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Team Section - Staggered Grid */}
      <section className="w-full py-16 md:py-24 bg-white relative -mt-10 z-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">Meet the People Behind Sanicle.cloud</h2>
            <p className="text-lg text-[#7f8c8d]">
              Our diverse team brings together expertise in healthcare, technology, and business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Omopeju Afanu",
                role: "CEO",
                image: "/placeholder.svg?height=300&width=300",
                avatar: "OA",
                offset: "md:translate-y-0",
              },
              {
                name: "Eliana Franco Taveras",
                role: "CMO",
                image: "/placeholder.svg?height=300&width=300",
                avatar: "EF",
                offset: "md:translate-y-12",
              },
              {
                name: "Chaste Inegbedion",
                role: "CPO",
                image: "/placeholder.svg?height=300&width=300",
                avatar: "CI",
                offset: "md:translate-y-24",
              },
              {
                name: "Jane Smith",
                role: "CTO",
                image: "/placeholder.svg?height=300&width=300",
                avatar: "JS",
                offset: "md:translate-y-12",
              },
            ].map((member, index) => (
              <div
                key={index}
                className={`relative group ${member.offset} transform transition-transform duration-500 hover:-translate-y-2`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#167d83] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-white/80">{member.role}</p>
                    <Button variant="ghost" className="mt-2 text-white hover:bg-white/10 self-start p-0">
                      View Profile <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white">View Full Team</Button>
          </div>
        </div>
        {/* 在Team Section底部添加波浪形分隔线 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#167d83"
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* CTA Section - Gradient with Floating Elements */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#167d83] to-[#0e5a5f] text-white relative -mt-10 z-20 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join us in revolutionizing women's workplace health
            </h2>

            <p className="text-white/80 mb-8 text-xl">
              Partner with Sanicle.cloud to create a more inclusive and supportive workplace for all employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white text-sm">Innovative Solutions</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white text-sm">Expert Team</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-white text-sm">Global Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


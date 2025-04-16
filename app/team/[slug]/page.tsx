import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

// Define our team members data
const teamMembers = [
  {
    name: "Dr. Omopeju Afanu",
    role: "Chief Executive Officer - CEO",
    bio: "A passionate advocate for women's health, leads with a user-first, insight-driven approach to product innovation.",
    longBio: `Dr. Omopeju Afanu is the visionary CEO of Sanicle, bringing her extensive medical expertise and passion for women's health to revolutionize menstrual wellness. 
    
    With a background in medicine and a deep understanding of women's health challenges, Dr. Afanu recognized the gap in personalized menstrual health solutions. Her approach combines scientific rigor with user-centered design, ensuring that Sanicle addresses real needs with evidence-based solutions.
    
    Under her leadership, Sanicle has developed innovative AI-powered technology that makes personalized menstrual health accessible to everyone. Dr. Afanu regularly speaks at global health conferences about the importance of integrating technology with healthcare to improve outcomes for women worldwide.`,
    avatar: "OA",
    images: [
      "/images/team/OmopejuAfanu.jpg",
      "/images/team/omopeju-speaking.jpg",
      "/images/team/omopeju-research.jpg"
    ],
    leafColor: "green",
    slug: "omopeju-afanu",
    achievements: [
      "Led development of AI-driven menstrual health tracking technology",
      "Published research on women's health technology accessibility",
      "Speaker at Women's Health Innovation Summit 2023"
    ],
    quote: "Technology has the power to transform women's healthcare when designed with empathy and scientific rigor."
  },
  {
    name: "Chaste Inegbedion",
    role: "Chief Product Officer",
    bio: "Known as 'Mr. Padman,' a global leader in femtech, using expertise in product management to build inclusive solutions.",
    longBio: `Chaste Inegbedion, affectionately known as "Mr. Padman," brings unparalleled expertise in femtech product development to his role as Chief Product Officer at Sanicle.
    
    With years of experience leading product teams in the health technology sector, Chaste has developed a reputation for creating intuitive, inclusive solutions that address real user needs. His approach to product management always starts with deep user research and empathy.
    
    Chaste is passionate about breaking taboos around menstrual health and ensuring that technology serves diverse populations. Under his guidance, Sanicle's product strategy emphasizes accessibility, privacy, and personalization.`,
    avatar: "CI",
    images: [
      "/images/team/ChasteInegbedion.jpg",
      "/images/team/chaste-workshop.jpg",
      "/images/team/chaste-product.jpg"
    ],
    leafColor: "white",
    slug: "chaste-inegbedion",
    achievements: [
      "Pioneered user-centered design methodologies for menstrual health products",
      "Developed inclusive product testing frameworks",
      "Led cross-cultural research on menstrual health needs"
    ],
    quote: "Great products emerge from deep empathy and understanding of diverse user experiences."
  },
  {
    name: "Daryll Hall",
    role: "AI Creative Project Manager",
    bio: "AI and tech background, paired with experience in successful exits, fuels Sanicle's innovation.",
    longBio: `Daryll Hall serves as Sanicle's AI Creative Project Manager, bringing a unique blend of technical expertise and creative vision to the company's AI initiatives.
    
    With extensive experience in artificial intelligence and machine learning, Daryll has previously led teams that created innovative AI solutions in healthcare. His track record includes successful exits from tech startups, giving him valuable insights into scaling innovative technologies.
    
    At Sanicle, Daryll oversees the development of our AI capabilities, ensuring they are both technically sound and creatively applied to solve real-world menstrual health challenges. His leadership has been instrumental in developing Sanicle's personalized health insights and predictive analytics features.`,
    avatar: "DH",
    images: [
      "/images/team/DaryllHall.jpg",
      "/images/team/daryll-coding.jpg",
      "/images/team/daryll-presentation.jpg"
    ],
    leafColor: "white",
    slug: "daryll-hall",
    achievements: [
      "Developed machine learning algorithms for menstrual cycle prediction",
      "Previous successful exit in health technology startup",
      "Mentor for AI ethics in healthcare applications"
    ],
    quote: "AI is at its best when it enhances human capabilities rather than replacing them."
  },
  {
    name: "Gabby Hurst",
    role: "Chief Experience Officer - CXO",
    bio: "Excels in product management, creating innovative, customer-centric solutions with technical insight and emotional intelligence.",
    longBio: `Gabby Hurst leads Sanicle's experience design as our Chief Experience Officer, ensuring that every interaction with our platform is intuitive, supportive, and empowering.
    
    With a background spanning product management and user experience design, Gabby brings a holistic perspective to creating solutions that truly meet users' needs. Her approach combines rigorous data analysis with deep emotional intelligence, allowing her to translate complex health information into accessible, actionable insights.
    
    Gabby's passion for improving women's health experiences stems from her own journey and the recognition that technology can play a transformative role when designed with genuine empathy. At Sanicle, she has pioneered user research methodologies that center diverse voices and experiences.`,
    avatar: "GH",
    images: [
      "/images/team/GabbyHurst.jpg",
      "/images/team/gabby-design.jpg",
      "/images/team/gabby-workshop.jpg"
    ],
    leafColor: "white",
    slug: "gabby-hurst",
    achievements: [
      "Created Sanicle's user-centered research methodology",
      "Redesigned onboarding experience increasing user retention by 45%",
      "Speaker on inclusive design at UX for Healthcare conference"
    ],
    quote: "Great experiences are born from listening deeply to users and responding with genuine empathy."
  },
  {
    name: "Chan Meng",
    role: "Senior AI/ML Infrastructure Engineer",
    bio: "Full-stack developer leading AI-powered solutions for women's workplace health, with expertise in cloud-native architecture and mentorship for women in STEM.",
    longBio: `Chan Meng is Sanicle's Senior AI/ML Infrastructure Engineer, architecting the robust technical foundation that powers our AI-driven health insights.
    
    As an accomplished full-stack developer with specialized expertise in machine learning operations, Chan ensures that Sanicle's AI solutions are not only innovative but also scalable, reliable, and secure. Her work in cloud-native architecture has enabled Sanicle to deliver personalized insights to users around the world.
    
    Beyond her technical contributions, Chan is passionate about increasing representation in STEM fields. She actively mentors women in technology and leads Sanicle's initiatives to create more inclusive AI systems that work for diverse populations.`,
    avatar: "CM",
    images: [
      "/images/team/ChanMeng.jpg",
      "/images/team/chan-coding.jpg",
      "/images/team/chan-mentoring.jpg"
    ],
    leafColor: "pink",
    slug: "chan-meng",
    achievements: [
      "Built Sanicle's cloud-native ML infrastructure",
      "Created mentorship program for women in AI",
      "Contributed to open-source projects for ethical AI development"
    ],
    quote: "The most powerful AI solutions are those that reflect the diversity of the users they serve."
  },
]

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug)
  
  if (!member) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-teal-50">
          <path d="M0,96L48,101.3C96,107,192,117,288,117.3C384,117,480,107,576,90.7C672,75,768,53,864,58.7C960,64,1056,96,1152,106.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      
      {/* Leaf decorations */}
      <div className="absolute right-0 top-1/3 transform rotate-45">
        <img src={`/logo/leave-${member.leafColor}.svg`} alt="Leaf decoration" className="opacity-5 w-96 h-96 blur-md" />
      </div>
      <div className="absolute left-0 bottom-1/3 transform -rotate-45">
        <img src="/logo/leave-coral.svg" alt="Leaf decoration" className="opacity-5 w-96 h-96 blur-md" />
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-20 relative z-10">
        {/* Navigation */}
        <nav className="mb-12">
          <Link 
            href="/company/about#team" 
            className="inline-flex items-center text-primary hover:text-teal-700 transition-colors group"
          >
            <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <ChevronLeft className="h-4 w-4 text-primary" />
            </span>
            <span className="font-medium">Back to Team</span>
          </Link>
        </nav>
        
        {/* Header Section */}
        <header className="mb-16 max-w-4xl mx-auto text-center relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-20">
            <img src={`/logo/leave-${member.leafColor}.svg`} alt="Leaf decoration" className="w-24 h-24" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-3">{member.name}</h1>
          <p className="text-primary text-lg font-medium mb-4">{member.role}</p>
          <div className="w-20 h-1 bg-primary/30 mx-auto mb-6 rounded-full"></div>
          {member.quote && (
            <blockquote className="italic text-neutral-600 max-w-2xl mx-auto">
              "{member.quote}"
            </blockquote>
          )}
        </header>
        
        <div className="grid md:grid-cols-12 gap-10">
          {/* Sidebar */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-24 space-y-8">
              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-xl shadow-md border border-neutral-100">
                <div className="aspect-square relative">
                  <Image 
                    src={member.images[0]} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 opacity-70">
                    <img src={`/logo/leave-${member.leafColor}.svg`} alt="Leaf decoration" className="w-full h-full" />
                  </div>
                </div>
              </div>
              
              {/* Quick Bio */}
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                <h3 className="font-semibold text-neutral-800 mb-2">Bio</h3>
                <p className="text-neutral-600">{member.bio}</p>
              </div>
              
              {/* Achievements */}
              {member.achievements && (
                <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                  <h3 className="font-semibold text-neutral-800 mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-neutral-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Social Links (Placeholder) */}
              <div className="flex justify-center space-x-4">
                {/* Add actual social media icons and links when available */}
                <span className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </span>
                <span className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </span>
              </div>
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="md:col-span-8 lg:col-span-9">
            {/* Bio */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-6 flex items-center">
                <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </span>
                About {member.name.split(' ')[0]}
              </h2>
              <div className="prose prose-neutral max-w-none lg:prose-lg">
                {member.longBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={index === 0 ? "text-lg text-neutral-700 leading-relaxed" : "text-neutral-600 leading-relaxed"}>
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </section>
            
            {/* Gallery */}
            <section>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-6 flex items-center">
                <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </span>
                Photo Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.images.slice(1).map((image, index) => (
                  <div key={index} className="group relative rounded-xl overflow-hidden shadow-md border border-neutral-100 transition-transform hover:scale-[1.01] duration-300">
                    <div className="aspect-[4/3] relative">
                      <Image 
                        src={image} 
                        alt={`${member.name} - Photo ${index + 2}`} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm font-medium">Photo {index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-coral-50">
          <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,85.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </main>
  )
} 
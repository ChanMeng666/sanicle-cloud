import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Search,
  MapPin,
  Clock,
  Heart,
  Star,
  Users,
  Coffee,
  Leaf,
  Globe,
  ChevronRight,
  CheckCircle,
  Building,
  Sparkles,
  Award,
  Zap,
} from "lucide-react"

export default function CareersPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section - Immersive Video Background */}
      <section className="w-full min-h-[80vh] relative flex items-center overflow-hidden">
        {/* Video background would go here in a real implementation */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#167d83]/90 to-[#167d83]/70 z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-50"></div>

        <div className="container px-4 md:px-6 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" /> Join Our Team
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Build Your Career, <br />
              <span className="text-[#EE4C23]">Change Lives</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              At Sanicle.cloud, we're revolutionizing women's health in the workplace. Join our mission-driven team and
              make a real impact on people's lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">
                Browse Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Our Culture
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-10 h-16 rounded-full border-2 border-white/50 flex items-center justify-center">
            <div className="w-2 h-4 bg-white/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Job Search Section - Interactive Map */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">Find Your Perfect Role</h2>
              <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
                Explore our open positions across departments and locations.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                {/* Search sidebar */}
                <div className="md:col-span-2 bg-[#f8f9fa] p-6 border-r border-gray-200">
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7f8c8d]" />
                      <input
                        type="text"
                        placeholder="Search positions..."
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#167d83] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#2c3e50] mb-3">Departments</h3>
                    <div className="space-y-2">
                      {["All Departments", "Engineering", "Product", "Marketing", "Operations", "HR", "Design"].map(
                        (dept, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`dept-${index}`}
                              className="h-4 w-4 text-[#167d83] focus:ring-[#167d83] rounded"
                              defaultChecked={index === 0}
                            />
                            <label htmlFor={`dept-${index}`} className="ml-2 text-[#2c3e50]">
                              {dept}
                            </label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#2c3e50] mb-3">Locations</h3>
                    <div className="space-y-2">
                      {["All Locations", "Remote", "New York, NY", "San Francisco, CA", "London, UK"].map(
                        (loc, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`loc-${index}`}
                              className="h-4 w-4 text-[#167d83] focus:ring-[#167d83] rounded"
                              defaultChecked={index === 0}
                            />
                            <label htmlFor={`loc-${index}`} className="ml-2 text-[#2c3e50]">
                              {loc}
                            </label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#2c3e50] mb-3">Job Type</h3>
                    <div className="space-y-2">
                      {["All Types", "Full-time", "Part-time", "Contract", "Internship"].map((type, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`type-${index}`}
                            className="h-4 w-4 text-[#167d83] focus:ring-[#167d83] rounded"
                            defaultChecked={index === 0}
                          />
                          <label htmlFor={`type-${index}`} className="ml-2 text-[#2c3e50]">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map and job listings */}
                <div className="md:col-span-3 p-6">
                  <div className="mb-6 relative h-64 bg-[#e6f5f6] rounded-xl overflow-hidden">
                    {/* This would be a real map in production */}
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center"></div>

                    {/* Location markers */}
                    <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-6 h-6 bg-[#167d83] rounded-full flex items-center justify-center text-white text-xs">
                          3
                        </div>
                        <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-[#167d83] rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>

                    <div className="absolute top-2/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-6 h-6 bg-[#EE4C23] rounded-full flex items-center justify-center text-white text-xs">
                          2
                        </div>
                        <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-[#EE4C23] rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>

                    <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-6 h-6 bg-[#167d83] rounded-full flex items-center justify-center text-white text-xs">
                          5
                        </div>
                        <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-[#167d83] rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">10 Open Positions</h3>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Senior Frontend Engineer",
                        department: "Engineering",
                        location: "Remote",
                        type: "Full-time",
                        posted: "2 days ago",
                        color: "border-l-[#167d83]",
                      },
                      {
                        title: "Product Manager",
                        department: "Product",
                        location: "New York, NY",
                        type: "Full-time",
                        posted: "1 week ago",
                        color: "border-l-[#EE4C23]",
                      },
                      {
                        title: "Content Marketing Specialist",
                        department: "Marketing",
                        location: "Remote",
                        type: "Full-time",
                        posted: "3 days ago",
                        color: "border-l-[#167d83]",
                      },
                      {
                        title: "UX/UI Designer",
                        department: "Design",
                        location: "San Francisco, CA",
                        type: "Full-time",
                        posted: "Just now",
                        color: "border-l-[#EE4C23]",
                      },
                    ].map((job, index) => (
                      <div
                        key={index}
                        className={`border-l-4 ${job.color} bg-white rounded-r-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h4 className="font-semibold text-[#2c3e50] text-lg">{job.title}</h4>
                            <p className="text-[#7f8c8d]">{job.department}</p>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center mt-2 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-[#167d83] mr-1" />
                              <span className="text-sm text-[#7f8c8d]">{job.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-[#167d83] mr-1" />
                              <span className="text-sm text-[#7f8c8d]">{job.type}</span>
                            </div>
                            <div className="flex items-center md:ml-4">
                              <span className="text-xs bg-[#e6f5f6] text-[#167d83] px-2 py-1 rounded-full">
                                {job.posted}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                            View Details <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white">View All Positions</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture - Immersive Gallery */}
      <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
                Our Culture
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">Life at Sanicle.cloud</h2>
              <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
                Experience a workplace that values innovation, inclusivity, and work-life balance.
              </p>
            </div>

            <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[600px]">
              <div className="col-span-8 row-span-1 relative rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">Collaborative Environment</h3>
                    <p className="text-white/80">We work together to solve complex problems.</p>
                  </div>
                </div>
              </div>

              <div className="col-span-4 row-span-1 relative rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Remote work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Remote-First</h3>
                    <p className="text-white/80">Work from anywhere.</p>
                  </div>
                </div>
              </div>

              <div className="col-span-4 row-span-1 relative rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Learning sessions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Continuous Learning</h3>
                    <p className="text-white/80">Growth opportunities.</p>
                  </div>
                </div>
              </div>

              <div className="col-span-8 row-span-1 relative rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=800"
                  alt="Team retreat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">Team Retreats</h3>
                    <p className="text-white/80">We connect in person to build relationships and celebrate success.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-[#EE4C23] hover:bg-[#d43d18] text-white">Learn More About Our Culture</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Hexagonal Grid */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
                  Employee Benefits
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50] mb-4">We Take Care of Our Team</h2>
                <p className="text-[#7f8c8d] mb-6">
                  At Sanicle.cloud, we believe in supporting our employees' wellbeing, growth, and work-life balance
                  with comprehensive benefits.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#f8f9fa] rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-[#EE4C23] mb-2" />
                    <h3 className="font-semibold text-[#2c3e50] text-lg">Health & Wellness</h3>
                    <p className="text-[#7f8c8d] text-sm">Comprehensive medical, dental, and vision coverage.</p>
                  </div>

                  <div className="bg-[#f8f9fa] rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-[#167d83] mb-2" />
                    <h3 className="font-semibold text-[#2c3e50] text-lg">Flexible Work</h3>
                    <p className="text-[#7f8c8d] text-sm">
                      Remote-first with flexible hours to support work-life balance.
                    </p>
                  </div>

                  <div className="bg-[#f8f9fa] rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                    <Sparkles className="h-8 w-8 text-[#EE4C23] mb-2" />
                    <h3 className="font-semibold text-[#2c3e50] text-lg">Learning Budget</h3>
                    <p className="text-[#7f8c8d] text-sm">Annual budget for courses, conferences, and books.</p>
                  </div>

                  <div className="bg-[#f8f9fa] rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                    <Award className="h-8 w-8 text-[#167d83] mb-2" />
                    <h3 className="font-semibold text-[#2c3e50] text-lg">Equity</h3>
                    <p className="text-[#7f8c8d] text-sm">Every employee receives equity in the company.</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="border-[#167d83] text-[#167d83] hover:bg-[#e6f5f6]">
                    View All Benefits <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-[#167d83]/5 rounded-full blur-3xl"></div>

                {/* Hexagonal grid */}
                <div className="relative grid grid-cols-3 gap-4">
                  {[
                    { icon: <Coffee className="h-6 w-6 text-[#167d83]" />, label: "Free Lunch" },
                    { icon: <Globe className="h-6 w-6 text-[#EE4C23]" />, label: "Remote Work" },
                    { icon: <Leaf className="h-6 w-6 text-[#167d83]" />, label: "Wellness Days" },
                    { icon: <Users className="h-6 w-6 text-[#EE4C23]" />, label: "Team Retreats" },
                    { icon: <Star className="h-6 w-6 text-[#167d83]" />, label: "Recognition" },
                    { icon: <Building className="h-6 w-6 text-[#EE4C23]" />, label: "401(k) Match" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="hexagon bg-white shadow-lg p-4 flex flex-col items-center justify-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-2">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-[#2c3e50]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Growth - Vertical Timeline */}
      <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
                Career Growth
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">Your Journey With Us</h2>
              <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
                We're committed to helping you grow professionally and personally.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#e6f5f6] transform -translate-x-1/2"></div>

              {[
                {
                  title: "Onboarding",
                  description: "A comprehensive onboarding program to set you up for success.",
                  icon: <Users className="h-6 w-6 text-white" />,
                  color: "bg-[#167d83]",
                  position: "left",
                },
                {
                  title: "Mentorship",
                  description: "One-on-one mentorship with experienced team members.",
                  icon: <Star className="h-6 w-6 text-white" />,
                  color: "bg-[#EE4C23]",
                  position: "right",
                },
                {
                  title: "Skill Development",
                  description: "Regular workshops and learning opportunities to build new skills.",
                  icon: <Zap className="h-6 w-6 text-white" />,
                  color: "bg-[#167d83]",
                  position: "left",
                },
                {
                  title: "Leadership Training",
                  description: "Prepare for leadership roles with specialized training programs.",
                  icon: <Award className="h-6 w-6 text-white" />,
                  color: "bg-[#EE4C23]",
                  position: "right",
                },
                {
                  title: "Career Advancement",
                  description: "Clear paths for advancement and regular performance reviews.",
                  icon: <Sparkles className="h-6 w-6 text-white" />,
                  color: "bg-[#167d83]",
                  position: "left",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-12 ${
                    item.position === "left" ? "pr-12 text-right ml-0 mr-auto" : "pl-12 ml-auto mr-0"
                  } w-1/2`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute ${
                      item.position === "left" ? "right-0" : "left-0"
                    } top-0 w-10 h-10 rounded-full ${item.color} flex items-center justify-center z-10 transform ${
                      item.position === "left" ? "translate-x-1/2" : "-translate-x-1/2"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={`bg-white p-6 rounded-xl shadow-lg ${
                      item.position === "left" ? "rounded-r-none" : "rounded-l-none"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">{item.title}</h3>
                    <p className="text-[#7f8c8d]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Stories - Immersive Cards */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#e6f5f6] text-[#167d83] text-sm font-medium mb-3">
                Employee Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">Meet Our Team</h2>
              <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
                Hear from the people who make Sanicle.cloud an amazing place to work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Senior Product Manager",
                  story:
                    "I joined Sanicle.cloud because I wanted to work on products that make a real difference in people's lives. Every day, I get to collaborate with talented people who are passionate about improving women's health in the workplace.",
                  image: "/placeholder.svg?height=400&width=300",
                  color: "from-[#167d83]",
                },
                {
                  name: "Michael Chen",
                  role: "Frontend Engineer",
                  story:
                    "The engineering culture here is amazing. We're encouraged to innovate and solve meaningful problems while maintaining a healthy work-life balance. I've grown so much as an engineer since joining the team.",
                  image: "/placeholder.svg?height=400&width=300",
                  color: "from-[#EE4C23]",
                },
                {
                  name: "Priya Patel",
                  role: "Customer Success Lead",
                  story:
                    "I've never worked at a company that cares so deeply about both its customers and employees. The mission-driven culture makes every day meaningful, and I'm proud of the impact we're making.",
                  image: "/placeholder.svg?height=400&width=300",
                  color: "from-[#167d83]",
                },
              ].map((person, index) => (
                <div key={index} className="relative group h-[500px] rounded-xl overflow-hidden">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className={`absolute inset-0 bg-gradient-to-t ${person.color} to-transparent opacity-90`}></div>

                  <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{person.name}</h3>
                    <p className="text-white/80 mb-4">{person.role}</p>
                    <p className="text-white/90">{person.story}</p>

                    <Button className="mt-4 bg-white text-[#167d83] hover:bg-white/90">Read Full Story</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process - Interactive Steps */}
      <section className="w-full py-12 md:py-16 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#fef6e9] text-[#EE4C23] text-sm font-medium mb-3">
                Application Process
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50]">Our Hiring Journey</h2>
              <p className="text-[#7f8c8d] mt-3 max-w-2xl mx-auto">
                We've designed a thoughtful process to find the right candidates while respecting your time.
              </p>
            </div>

            <div className="relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                {[
                  { step: 1, label: "Application" },
                  { step: 2, label: "Initial Interview" },
                  { step: 3, label: "Assessment" },
                  { step: 4, label: "Team Interviews" },
                  { step: 5, label: "Offer" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-[#167d83] text-white flex items-center justify-center text-lg font-bold mb-2">
                      {item.step}
                    </div>
                    <span className="text-[#2c3e50] font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2c3e50] mb-4">1. Application</h3>
                    <p className="text-[#7f8c8d] mb-6">
                      Submit your application through our careers page. We review every application and aim to respond
                      within 5 business days.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Review job description carefully",
                        "Submit your resume and cover letter",
                        "Answer a few short questions about your experience",
                        "We'll confirm receipt of your application",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#167d83] mr-2 mt-0.5" />
                          <span className="text-[#2c3e50]">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex space-x-4">
                      <Button disabled className="bg-gray-200 text-gray-500 cursor-not-allowed">
                        Previous
                      </Button>
                      <Button className="bg-[#167d83] hover:bg-[#0e5a5f] text-white">Next Step</Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-[#167d83] rounded-lg opacity-10 blur-lg transform rotate-3"></div>
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Application process"
                      className="relative z-10 rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Immersive Background */}
      <section className="w-full py-16 md:py-20 bg-[#167d83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join Our Mission to Transform Women's Health
            </h2>

            <p className="text-white/80 mb-8 text-xl">
              Be part of a team that's making a real difference in the workplace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#167d83] hover:bg-white/90">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn About Our Culture
              </Button>
            </div>

            <div className="mt-12 flex justify-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <p className="text-white font-bold text-2xl">50+</p>
                <p className="text-white/80">Team Members</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <p className="text-white font-bold text-2xl">12</p>
                <p className="text-white/80">Countries</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <p className="text-white font-bold text-2xl">100%</p>
                <p className="text-white/80">Mission-Driven</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0e5a5f] text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sanicle.cloud</h3>
            <p className="text-white/80 mb-6">
              Revolutionizing women&apos;s workplace health through innovative benefits solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solution/employers" className="text-white/80 hover:text-white">
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/solution/employees" className="text-white/80 hover:text-white">
                  For Employees
                </Link>
              </li>
              <li>
                <Link href="/solution/brokers" className="text-white/80 hover:text-white">
                  For Brokers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company/about" className="text-white/80 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-white/80 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-[#7ac8cd]" />
                <span className="text-white/80">123 Innovation Way, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#7ac8cd]" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#7ac8cd]" />
                <span className="text-white/80">info@sanicle.cloud</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">&copy; {currentYear} Sanicle.cloud. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/60 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-white/60 hover:text-white text-sm">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


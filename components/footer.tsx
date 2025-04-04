import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Physics Point</h3>
            <p className="mb-4">
              Empowering students to excel in physics through expert guidance and personalized learning.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-purple-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-purple-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-purple-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-purple-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-purple-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-purple-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/toppers" className="hover:text-purple-400">
                  Past Toppers
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-purple-400">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-purple-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>9J4H+RF2, Gulistan Colony, Navadia, Fatehgarh, Uttar Pradesh 209601</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@physicspoint.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Physics Point. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


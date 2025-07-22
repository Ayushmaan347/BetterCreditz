import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const footerLinks = {
    Services: [
      { name: "Credit Repair", href: "/services/credit-repair" },
      { name: "Debt Settlement", href: "/services/debt-settlement" },
      { name: "Mortgage Solutions", href: "/services/mortgage" },
      { name: "Credit Cards", href: "/services/credit-cards" },
      { name: "Personal Loans", href: "/services/personal-loans" },
      { name: "Credit Monitoring", href: "/services/credit-monitoring" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Reviews", href: "/reviews" },
    ],
    Resources: [
      { name: "Credit Education", href: "/education" },
      { name: "Financial Tools", href: "/tools" },
      { name: "Credit Score Guide", href: "/guides/credit-score" },
      { name: "FAQ", href: "/faq" },
      { name: "Support Center", href: "/support" },
      { name: "Webinars", href: "/webinars" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Disclosures", href: "/disclosures" },
      { name: "Accessibility", href: "/accessibility" },
      { name: "State Licenses", href: "/licenses" },
    ],
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="bg-slate-800 rounded-2xl p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated on Credit Tips</h3>
            <p className="text-gray-300 mb-6">
              Get expert credit advice, financial tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900" />
              <Button className="bg-green-600 hover:bg-green-700 whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BC</span>
              </div>
              <span className="text-xl font-bold">BetterCreditz</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering millions to achieve financial freedom through better credit solutions. Your trusted partner in
              credit repair and financial wellness.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-sm">1-800-BETTER-C</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-sm">support@bettercreditz.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-green-400">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>© 2024 BetterCreditz. All rights reserved.</p>
              <p>NMLS ID: 123456</p>
              <p>Equal Housing Opportunity</p>
            </div>

            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=30&width=60" alt="BBB Accredited" className="h-8" />
              <img src="/placeholder.svg?height=30&width=60" alt="SSL Secured" className="h-8" />
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 leading-relaxed">
            <p>
              BetterCreditz is not a credit repair organization as defined under federal or state law, including the
              Credit Repair Organizations Act. BetterCreditz provides educational services and software tools to help
              you understand and improve your credit profile.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

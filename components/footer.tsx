import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Services: [
      { name: "Credit Repair", href: "/credit-repair" },
      { name: "Debt Settlement", href: "/debt-settlement" },
      { name: "Mortgage", href: "/mortgage" },
      { name: "Credit Cards", href: "/credit-cards" },
      { name: "Personal Loans", href: "/personal-loans" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    Resources: [
      { name: "Credit Education", href: "/education" },
      { name: "Financial Tools", href: "/tools" },
      { name: "FAQ", href: "/faq" },
      { name: "Support", href: "/support" },
      { name: "Reviews", href: "/reviews" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Disclosures", href: "/disclosures" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BC</span>
              </div>
              <span className="text-xl font-bold">BetterCreditz</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering millions to achieve financial freedom through better credit solutions.
            </p>
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
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 BetterCreditz. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">NMLS ID: 123456 | Equal Housing Opportunity</p>
        </div>
      </div>
    </footer>
  )
}

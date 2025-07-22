"use client"

import { useEffect } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  Home,
  Wrench,
  Banknote,
  Calculator,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import AOS from "aos"
import "aos/dist/aos.css"

const services = [
  {
    icon: Wrench,
    title: "Credit Repair",
    description: "Remove negative items and improve your credit score with our proven dispute process.",
    features: ["Dispute inaccurate items", "Credit report analysis", "Score improvement tracking"],
    href: "/services/credit-repair",
    badge: "Most Popular",
    badgeColor: "bg-green-500",
    iconColor: "from-green-500 to-emerald-500",
  },
  {
    icon: Calculator,
    title: "Debt Settlement",
    description: "Negotiate with creditors to reduce your debt burden and create manageable payment plans.",
    features: ["Professional negotiation", "Debt reduction up to 50%", "Payment plan options"],
    href: "/services/debt-settlement",
    badge: "Save Money",
    badgeColor: "bg-blue-500",
    iconColor: "from-blue-500 to-cyan-500",
  },
  {
    icon: Home,
    title: "Mortgage Solutions",
    description: "Find the best mortgage rates and get pre-approved for your dream home purchase.",
    features: ["Competitive rates", "Fast pre-approval", "Expert guidance"],
    href: "/services/mortgage",
    badge: "Low Rates",
    badgeColor: "bg-purple-500",
    iconColor: "from-purple-500 to-indigo-500",
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Discover credit cards tailored to your credit profile with the best rewards and terms.",
    features: ["Personalized matches", "Reward optimization", "Approval predictions"],
    href: "/services/credit-cards",
    badge: "Rewards",
    badgeColor: "bg-orange-500",
    iconColor: "from-orange-500 to-amber-500",
  },
  {
    icon: Banknote,
    title: "Personal Loans",
    description: "Access personal loans with competitive rates for any financial need or goal.",
    features: ["Quick approval", "Flexible terms", "No hidden fees"],
    href: "/services/personal-loans",
    badge: "Fast Approval",
    badgeColor: "bg-red-500",
    iconColor: "from-red-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Credit Monitoring",
    description: "Stay on top of your credit with real-time monitoring and personalized insights.",
    features: ["24/7 monitoring", "Identity protection", "Monthly reports"],
    href: "/services/credit-monitoring",
    badge: "Protection",
    badgeColor: "bg-indigo-500",
    iconColor: "from-indigo-500 to-sky-500",
  },
]

export default function ServicesSection() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f0f9ff] via-white to-[#e0f2f1] dark:from-[#0d1117] dark:via-[#111827] dark:to-[#0d1117]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-20 blur-2xl" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <circle cx="400" cy="300" r="300" fill="url(#gradient)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Financial products for every step of your journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            From credit repair to mortgage solutions, we provide comprehensive financial services tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl p-1 bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-all hover:scale-105 hover:-rotate-[1deg]"
            >
              <div className="relative z-10 rounded-2xl p-6 transition-all duration-300">
                {service.badge && (
                  <Badge className={`absolute top-4 right-4 ${service.badgeColor} text-white z-20 shadow`}>
                    {service.badge}
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.iconColor} flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-700">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full bg-white text-green-700 border border-green-600 hover:bg-green-600 hover:text-white"
                    asChild
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="400">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Not sure which service is right for you?
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
            asChild
          >
            <Link href="/consultation">Get Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

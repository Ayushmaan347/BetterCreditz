import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Home, Wrench, Banknote, Calculator, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    title: "Credit Repair",
    description: "Remove negative items and improve your credit score with our proven dispute process.",
    features: ["Dispute inaccurate items", "Credit report analysis", "Score improvement tracking"],
    href: "/services/credit-repair",
    badge: "Most Popular",
    badgeColor: "bg-green-500",
  },
  {
    icon: Calculator,
    title: "Debt Settlement",
    description: "Negotiate with creditors to reduce your debt burden and create manageable payment plans.",
    features: ["Professional negotiation", "Debt reduction up to 50%", "Payment plan options"],
    href: "/services/debt-settlement",
    badge: "Save Money",
    badgeColor: "bg-blue-500",
  },
  {
    icon: Home,
    title: "Mortgage Solutions",
    description: "Find the best mortgage rates and get pre-approved for your dream home purchase.",
    features: ["Competitive rates", "Fast pre-approval", "Expert guidance"],
    href: "/services/mortgage",
    badge: "Low Rates",
    badgeColor: "bg-purple-500",
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Discover credit cards tailored to your credit profile with the best rewards and terms.",
    features: ["Personalized matches", "Reward optimization", "Approval predictions"],
    href: "/services/cards",
    badge: "Rewards",
    badgeColor: "bg-orange-500",
  },
  {
    icon: Banknote,
    title: "Personal Loans",
    description: "Access personal loans with competitive rates for any financial need or goal.",
    features: ["Quick approval", "Flexible terms", "No hidden fees"],
    href: "/services/loans",
    badge: "Fast Approval",
    badgeColor: "bg-red-500",
  },
  {
    icon: TrendingUp,
    title: "Credit Monitoring",
    description: "Stay on top of your credit with real-time monitoring and personalized insights.",
    features: ["24/7 monitoring", "Identity protection", "Monthly reports"],
    href: "/services/monitoring",
    badge: "Protection",
    badgeColor: "bg-indigo-500",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Financial products for every step of your journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From credit repair to mortgage solutions, we provide comprehensive financial services tailored to your
            unique needs and credit profile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md relative overflow-hidden"
            >
              {service.badge && (
                <Badge className={`absolute top-4 right-4 ${service.badgeColor} text-white`}>{service.badge}</Badge>
              )}

              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors bg-transparent border border-gray-300 text-gray-700"
                  asChild
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Not sure which service is right for you?</p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <Link href="/consultation">Get Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

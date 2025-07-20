import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Home, Wrench, Banknote, Calculator, TrendingUp } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Calculator,
    title: "Debt Settlement",
    description: "Negotiate with creditors to reduce your debt burden and create manageable payment plans.",
    features: ["Professional negotiation", "Debt reduction up to 50%", "Payment plan options"],
    href: "/debt-settlement",
  },
  {
    icon: Home,
    title: "Mortgage Solutions",
    description: "Find the best mortgage rates and get pre-approved for your dream home purchase.",
    features: ["Competitive rates", "Fast pre-approval", "Expert guidance"],
    href: "/mortgage",
  },
  {
    icon: Wrench,
    title: "Credit Repair",
    description: "Improve your credit score with our proven strategies and dispute resolution services.",
    features: ["Credit report analysis", "Dispute management", "Score improvement tracking"],
    href: "/credit-repair",
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Discover credit cards tailored to your credit profile with the best rewards and terms.",
    features: ["Personalized matches", "Reward optimization", "Approval predictions"],
    href: "/cards",
  },
  {
    icon: Banknote,
    title: "Personal Loans",
    description: "Access personal loans with competitive rates for any financial need or goal.",
    features: ["Quick approval", "Flexible terms", "No hidden fees"],
    href: "/loans",
  },
  {
    icon: TrendingUp,
    title: "Credit Monitoring",
    description: "Stay on top of your credit with real-time monitoring and personalized insights.",
    features: ["24/7 monitoring", "Identity protection", "Monthly reports"],
    href: "/credit-score",
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
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
                  variant="outline"
                  className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors bg-transparent"
                  asChild
                >
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

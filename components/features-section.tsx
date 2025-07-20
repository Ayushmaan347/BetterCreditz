import { CheckCircle, Shield, Zap, Users, Award, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your data is protected with 256-bit encryption and multi-factor authentication.",
  },
  {
    icon: Zap,
    title: "Instant Pre-Qualification",
    description: "Get pre-qualified for loans and cards in seconds without affecting your credit score.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Access to certified financial advisors and credit specialists whenever you need help.",
  },
  {
    icon: Award,
    title: "Personalized Recommendations",
    description: "AI-powered matching system finds the best financial products for your unique situation.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock credit monitoring with instant alerts for any changes to your report.",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Over 2 million users have improved their financial health with our platform.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why choose BetterCreditz?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver the best financial solutions for
            your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

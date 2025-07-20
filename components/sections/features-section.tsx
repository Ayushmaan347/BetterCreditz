import { Shield, Zap, Award, Clock, Brain, Phone } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description:
      "Our advanced AI analyzes your credit profile to find the best financial products tailored specifically for you.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Your personal and financial data is protected with 256-bit encryption and multi-factor authentication.",
  },
  {
    icon: Zap,
    title: "Instant Pre-Qualification",
    description: "Get pre-qualified for loans and credit cards in seconds without any impact on your credit score.",
  },
  {
    icon: Phone,
    title: "Expert Support 24/7",
    description: "Access to certified financial advisors and credit specialists whenever you need guidance or help.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Over 15 years of experience helping customers improve their credit scores by an average of 150+ points.",
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description: "Round-the-clock credit monitoring with instant alerts for any changes to your credit reports.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why 2+ million customers choose BetterCreditz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver the best financial solutions for
            your unique needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center hover:bg-gray-50 rounded-2xl p-6 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted & Accredited</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <img src="/placeholder.svg?height=60&width=120" alt="BBB A+ Rating" className="h-12 mx-auto mb-2" />
              <p className="text-sm text-gray-600">BBB A+ Rating</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg?height=60&width=120" alt="SSL Secured" className="h-12 mx-auto mb-2" />
              <p className="text-sm text-gray-600">256-bit SSL Encryption</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg?height=60&width=120" alt="FCRA Compliant" className="h-12 mx-auto mb-2" />
              <p className="text-sm text-gray-600">FCRA Compliant</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg?height=60&width=120" alt="NMLS Licensed" className="h-12 mx-auto mb-2" />
              <p className="text-sm text-gray-600">NMLS Licensed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

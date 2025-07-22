"use client"

import {
  Shield,
  Zap,
  Award,
  Clock,
  Brain,
  Phone,
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description:
      "Our advanced AI analyzes your credit profile to find the best financial products tailored specifically for you.",
    iconColor: "from-purple-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Your personal and financial data is protected with 256-bit encryption and multi-factor authentication.",
    iconColor: "from-slate-700 to-gray-800",
  },
  {
    icon: Zap,
    title: "Instant Pre-Qualification",
    description:
      "Get pre-qualified for loans and credit cards in seconds without any impact on your credit score.",
    iconColor: "from-yellow-400 to-orange-500",
  },
  {
    icon: Phone,
    title: "Expert Support 24/7",
    description:
      "Access to certified financial advisors and credit specialists whenever you need guidance or help.",
    iconColor: "from-pink-500 to-rose-500",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Over 15 years of experience helping customers improve their credit scores by an average of 150+ points.",
    iconColor: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description:
      "Round-the-clock credit monitoring with instant alerts for any changes to your credit reports.",
    iconColor: "from-sky-500 to-cyan-500",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Why 2+ million customers choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
              BetterCreditz
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver the best financial solutions for your unique needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 backdrop-blur-lg border border-gray-200 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 rounded-3xl transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-tr ${feature.iconColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white drop-shadow" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-24 bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-3xl p-10 shadow-inner border dark:border-white/10">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Trusted & Accredited</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              { label: "BBB A+ Rating", image: "/placeholder.svg?height=60&width=120" },
              { label: "256-bit SSL Encryption", image: "/placeholder.svg?height=60&width=120" },
              { label: "FCRA Compliant", image: "/placeholder.svg?height=60&width=120" },
              { label: "NMLS Licensed", image: "/placeholder.svg?height=60&width=120" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-12 mx-auto mb-2 opacity-80"
                />
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

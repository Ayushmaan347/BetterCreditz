import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full hero-pattern opacity-10"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to transform your financial future?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Join over 2 million users who trust BetterCreditz to improve their credit, reduce debt, and achieve their
          financial goals. Start your journey today with a free credit score check.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6" asChild>
            <Link href="/get-started">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6 bg-transparent"
            asChild
          >
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Talk to an Expert
            </Link>
          </Button>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm opacity-80 mb-3">Speak with a credit expert</p>
            <p className="font-bold">1-800-BETTER-C</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <MessageCircle className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm opacity-80 mb-3">Get instant answers</p>
            <p className="font-bold">Available 24/7</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <ArrowRight className="h-8 w-8 text-purple-400 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Get Started</h3>
            <p className="text-sm opacity-80 mb-3">Free credit score check</p>
            <p className="font-bold">No impact to credit</p>
          </div>
        </div>

        <div className="mt-12 text-sm opacity-75">
          <p>No hidden fees • No long-term contracts • 100% satisfaction guarantee</p>
        </div>
      </div>
    </section>
  )
}

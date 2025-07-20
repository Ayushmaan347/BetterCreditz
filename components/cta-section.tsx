import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to take control of your financial future?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join over 2 million users who trust BetterCreditz to improve their credit and achieve their financial goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
            <Link href="/get-started">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6 bg-transparent"
            asChild
          >
            <Link href="/contact">Talk to an Expert</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

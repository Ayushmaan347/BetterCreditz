'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { CheckCircle } from 'lucide-react'

export default function DebtSettlementPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <div className="relative h-[450px] md:h-[350px] w-full">
        <Image
          src="/images/debt-settlement-hero.jpg"
          alt="Debt Settlement"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
            Struggling with Debt? <br className="hidden md:block" />
            We're Here to Help You Settle It.
          </h1>
        </div>
      </div>

      {/* Info Section */}
      <section className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
          What is Debt Settlement?
        </h2>

        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Debt settlement is a financial strategy that allows you to negotiate with creditors to reduce the amount you owe. It's a powerful option for individuals who are overwhelmed by unsecured debt and want a path to financial freedom.
        </p>

        {/* Benefits List */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            'Reduce your total debt by negotiating with creditors',
            'Get relief from late fees and high interest rates',
            'Avoid bankruptcy and take control of your finances',
            'Work with professionals who understand your situation',
          ].map((point, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle className="text-green-600 mt-1" />
              <p className="text-base">{point}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-lg shadow-lg transition-all duration-300"
            onClick={() => router.push('/consultation')}
          >
            Apply Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

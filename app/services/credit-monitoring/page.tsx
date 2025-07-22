'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function CreditMonitoringPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/images/credit-monitoring-hero.jpg"
          alt="Credit Monitoring"
          fill
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6 text-white">
          <motion.h1 initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-bold mb-4">
            Monitor & Protect Your Credit
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-lg max-w-3xl">
            Real-time alerts, identity theft protection, and full control over your credit profile.
          </motion.p>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}>
            <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white text-lg py-4 px-8 rounded-full shadow-lg">
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-green-50">
        <h2 className="text-center text-3xl font-semibold mb-12">Why Monitor with Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {[
            { title: '24/7 Alerts', desc: 'Instant notifications for any credit changes.' },
            { title: 'Identity Protection', desc: 'Advanced tools to keep your personal data safe.' },
            { title: 'Score Boost Tools', desc: 'Tips and tools to gradually improve your credit.' },
          ].map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-green-700">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <h2 className="text-center text-3xl font-bold mb-10">Trusted by Customers</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {[
            { name: 'Ellie K.', text: 'Caught identity fraud before it escalated—saved me thousands!', },
            { name: 'Ravi S.', text: 'Alerts are prompt and dashboards are intuitive and helpful.', },
          ].map((t, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.3 }} className="bg-green-50 p-6 rounded-lg shadow">
              <p className="italic text-gray-800">“{t.text}”</p>
              <p className="mt-4 font-semibold text-green-700 text-right">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Protect Your Credit Today</h2>
        <p className="mb-6 max-w-xl mx-auto">Stay alert, stay informed, and secure your financial future with our monitoring tools.</p>
        <Button className="bg-white text-green-700 rounded-full px-8 py-4 text-lg font-semibold hover:bg-gray-100">
          Apply Now
        </Button>
      </section>

      <Footer />
    </div>
  )
}

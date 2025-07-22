'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function PersonalLoansPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/images/personal-loans-hero.jpg"
          alt="Personal Loans"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Fast & Flexible Personal Loans
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg max-w-3xl"
          >
            Access funds quickly, with flexible repayment plans and competitive rates to match your lifestyle.
          </motion.p>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}>
            <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white text-lg py-4 px-8 rounded-full shadow-lg">
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-green-50">
        <h2 className="text-center text-3xl font-semibold mb-12">Why Choose Our Loans?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {[
            { title: 'Low Rates & Fees', desc: 'Transparent pricing and competitive interest.' },
            { title: 'Flexible Terms', desc: 'Repayment options tailored to your needs.' },
            { title: 'Quick Approval', desc: 'Fast decision-making and disbursement.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-700">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <h2 className="text-center text-3xl font-bold mb-10">Happy Borrowers</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {[
            { name: 'Laura J.', text: 'I got funds in 24 hours—exactly what I needed.', },
            { name: 'Marcus S.', text: 'Easy process, friendly support, zero surprises.', },
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.3 }} className="bg-green-50 p-6 rounded-lg shadow">
              <p className="italic text-gray-800">“{t.text}”</p>
              <p className="mt-4 font-semibold text-green-700 text-right">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Finance Your Plans?</h2>
        <p className="mb-6 max-w-xl mx-auto">Apply now and get the funds you need fast.</p>
        <Button className="bg-white text-green-700 rounded-full px-8 py-4 text-lg font-semibold hover:bg-gray-100">
          Apply Now
        </Button>
      </section>

      <Footer />
    </div>
  )
}

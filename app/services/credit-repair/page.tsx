'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function CreditRepairPage() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/images/credit-repair-bg.jpg"
          alt="Credit Repair Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center p-8">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Rebuild Your Credit with Confidence
            </motion.h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              Get professional help to fix errors, improve your score, and take control of your financial future.
            </p>
            <motion.div
              className="mt-8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full"
                onClick={() => window.location.href = '/consultation/billing_form'}
              >
                Apply for Credit Repair
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized Disputes",
              desc: "We challenge inaccurate items on your credit report tailored to your case.",
              icon: "⚡",
            },
            {
              title: "24/7 Dashboard",
              desc: "Track progress anytime through your client portal.",
              icon: "📊",
            },
            {
              title: "Credit Coaching",
              desc: "Get guidance from certified credit experts.",
              icon: "🧠",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/30 dark:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-20 bg-green-100 dark:bg-green-900">
        <h2 className="text-3xl font-bold text-center mb-10">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Amanda T.",
              feedback:
                "Within 3 months, my credit score jumped by 70 points. These people are magic!",
            },
            {
              name: "Rajesh P.",
              feedback: "Very supportive team, and I loved the dashboard to track disputes.",
            },
            {
              name: "Lisa M.",
              feedback: "Helped me remove old collections and buy my first home!",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white/60 dark:bg-black/30 p-6 rounded-xl backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-md"
            >
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">"{testimonial.feedback}"</p>
              <div className="mt-4 font-semibold text-right">— {testimonial.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Credit?</h2>
        <p className="text-lg mb-6">Start your journey to better credit today.</p>
        <Button
          className="bg-white text-green-700 font-semibold text-md px-6 py-3 rounded-full hover:bg-green-100"
          onClick={() => window.location.href = '/consultation/billing_form'}
        >
          Get Started
        </Button>
      </section>

      <Footer />
    </div>
  );
}

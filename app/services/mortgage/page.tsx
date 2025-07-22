'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function MortgagePage() {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/images/mortgage-hero.jpg"
          alt="Mortgage Options"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Secure Your Dream Home
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl max-w-2xl"
          >
            Explore personalized mortgage plans tailored to your lifestyle and financial goals.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Why Choose Us for Your Mortgage?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Low Interest Rates',
              desc: 'We offer some of the most competitive mortgage rates in the market.'
            },
            {
              title: 'Flexible Terms',
              desc: 'Choose from a variety of term options that best fit your life plans.'
            },
            {
              title: 'Fast Approval',
              desc: 'Quick online application process and fast approval within 24 hours.'
            },
            {
              title: 'Trusted Advisors',
              desc: 'Our mortgage experts are with you every step of the way.'
            },
            {
              title: 'Zero Hidden Fees',
              desc: 'Transparent pricing and no unexpected charges — ever.'
            },
            {
              title: 'Credit Friendly',
              desc: 'We work with all credit types and help build your financial future.'
            }
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-700">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-green-100">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Rachel W.',
              feedback: 'Getting a mortgage with them was the smoothest financial experience I’ve ever had.',
            },
            {
              name: 'Daniel P.',
              feedback: 'They walked me through everything and helped me lock in a great rate!',
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md border"
            >
              <p className="text-gray-700 italic">“{t.feedback}”</p>
              <p className="mt-4 font-semibold text-gray-900">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-20 text-white text-center px-6">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Ready to Move In?
        </motion.h2>
        <p className="text-lg mb-8">Apply now and let's get started on your mortgage journey.</p>
        <Button className="bg-white text-green-700 font-semibold text-md px-8 py-4 rounded-full shadow-md hover:bg-gray-100">
          Apply Now
        </Button>
      </section>

      <Footer />
    </div>
  );
}

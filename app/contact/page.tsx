import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ContactForm from "@/components/forms/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["1-800-BETTER-C", "(1-800-238-8372)"],
      description: "Mon-Fri 8AM-8PM EST",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@bettercreditz.com", "info@bettercreditz.com"],
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Financial District", "New York, NY 10004"],
      description: "Visit our headquarters",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8AM - 8PM", "Saturday: 9AM - 5PM"],
      description: "EST Time Zone",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Ready to start your credit journey? Get in touch with our expert team today.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 font-medium mb-1">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does credit repair take?",
                  answer:
                    "Credit repair timelines vary, but most clients see improvements within 3-6 months. Complex cases may take longer.",
                },
                {
                  question: "Will checking my credit score hurt my credit?",
                  answer:
                    "No, checking your own credit score is a 'soft inquiry' and doesn't affect your credit score.",
                },
                {
                  question: "What's included in your credit monitoring service?",
                  answer:
                    "Our service includes 24/7 monitoring, monthly reports, identity theft protection, and personalized improvement recommendations.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

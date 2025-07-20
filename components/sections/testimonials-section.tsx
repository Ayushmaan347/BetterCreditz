"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    location: "Austin, TX",
    content:
      "BetterCreditz helped me improve my credit score by 150 points in just 6 months. Their credit repair service is outstanding and the customer support is incredible!",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    beforeScore: 580,
    afterScore: 730,
  },
  {
    name: "Michael Chen",
    role: "First-time Homebuyer",
    location: "Seattle, WA",
    content:
      "The mortgage pre-approval process was seamless. I got the best rates available and closed on my dream home faster than I ever expected. Highly recommend!",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    beforeScore: 650,
    afterScore: 780,
  },
  {
    name: "Emily Rodriguez",
    role: "Recent Graduate",
    location: "Miami, FL",
    content:
      "As someone new to credit, their personalized recommendations helped me choose the perfect starter credit card and build my credit the right way.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    beforeScore: 0,
    afterScore: 720,
  },
  {
    name: "David Thompson",
    role: "Entrepreneur",
    location: "Denver, CO",
    content:
      "After bankruptcy, I thought my credit was ruined forever. BetterCreditz helped me rebuild and now I have access to business loans again. Life-changing!",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    beforeScore: 450,
    afterScore: 680,
  },
  {
    name: "Lisa Park",
    role: "Teacher",
    location: "Portland, OR",
    content:
      "The debt settlement program saved me thousands of dollars. The team negotiated with my creditors and helped me become debt-free in 18 months.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    beforeScore: 520,
    afterScore: 710,
  },
  {
    name: "Robert Williams",
    role: "Retired Veteran",
    location: "Phoenix, AZ",
    content:
      "Excellent service and results. The credit monitoring alerts helped me catch identity theft early. Their team is professional and truly cares about their clients.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    beforeScore: 600,
    afterScore: 750,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = 3

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage))
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - testimonialsPerPage) : prev - testimonialsPerPage,
    )
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What our customers say</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who have transformed their financial lives
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-600">out of 5 (2,847 reviews)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {currentTestimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-green-500 mb-4" />

                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Score Improvement */}
                {testimonial.beforeScore > 0 && (
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-2">Credit Score Improvement</div>
                      <div className="flex items-center justify-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-500">{testimonial.beforeScore}</div>
                          <div className="text-xs text-gray-500">Before</div>
                        </div>
                        <div className="text-green-500">→</div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-500">{testimonial.afterScore}</div>
                          <div className="text-xs text-gray-500">After</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-green-600 mt-2">
                        +{testimonial.afterScore - testimonial.beforeScore} points
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4">
          <Button variant="outline" size="icon" onClick={prevTestimonials} disabled={currentIndex === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / testimonialsPerPage) === index ? "bg-green-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index * testimonialsPerPage)}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonials}
            disabled={currentIndex + testimonialsPerPage >= testimonials.length}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

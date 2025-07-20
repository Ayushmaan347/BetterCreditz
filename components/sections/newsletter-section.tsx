"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, TrendingUp, BookOpen, DollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Successfully subscribed!",
        description: "Welcome to our newsletter. Check your email for confirmation.",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubscribing(false)
    }
  }

  const benefits = [
    {
      icon: TrendingUp,
      title: "Credit Tips",
      description: "Weekly tips to improve your credit score",
    },
    {
      icon: BookOpen,
      title: "Financial Education",
      description: "Learn about loans, mortgages, and more",
    },
    {
      icon: DollarSign,
      title: "Exclusive Offers",
      description: "Special deals from our lending partners",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <Mail className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Stay Ahead of Your Credit Game</h2>
              <p className="text-xl text-gray-600">
                Get expert credit advice, financial tips, and exclusive offers delivered to your inbox every week.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 whitespace-nowrap"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe Free"}
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">
                Join 50,000+ subscribers. Unsubscribe anytime. No spam, ever.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

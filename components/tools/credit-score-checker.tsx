"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Shield, TrendingUp, Clock, CheckCircle } from "lucide-react"

export default function CreditScoreChecker() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    income: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Redirect or success logic
  }

  const benefits = [
    {
      icon: Shield,
      title: "100% Free",
      description: "No hidden fees or charges",
    },
    {
      icon: TrendingUp,
      title: "No Credit Impact",
      description: "Soft credit check only",
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get your score in 60 seconds",
    },
    {
      icon: CheckCircle,
      title: "Secure & Private",
      description: "Bank-level encryption",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              Check Your Credit Score <span className="text-green-600">for Free</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Get your free credit score and personalized recommendations to improve your financial health.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-700/30 rounded-xl flex items-center justify-center shadow-sm">
                    <benefit.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/80 dark:bg-white/5 border border-green-100 dark:border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What you'll get:</h3>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Credit scores from all 3 bureaus
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Detailed credit report analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Personalized recommendations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Pre-qualified loan & card offers
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <Card className="shadow-2xl border-0 bg-white/90 dark:bg-white/5 backdrop-blur-lg rounded-3xl transition-all">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Get Your Free Credit Score
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">Takes less than 2 minutes</p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="bg-white/70 dark:bg-gray-900/30"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="bg-white/70 dark:bg-gray-900/30"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/70 dark:bg-gray-900/30"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    maxLength={5}
                    className="bg-white/70 dark:bg-gray-900/30"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="income">Annual Income</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, income: value })}>
                    <SelectTrigger className="bg-white/70 dark:bg-gray-900/30">
                      <SelectValue placeholder="Select your income range" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-900">
                      <SelectItem value="under-25k">Under $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                      <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                      <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                      <SelectItem value="over-150k">Over $150,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold text-lg py-6 rounded-xl transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Checking Your Score..." : "Get My Free Score"}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-2">
                  By clicking “Get My Free Score”, you agree to our Terms & Privacy Policy. This is a soft inquiry.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

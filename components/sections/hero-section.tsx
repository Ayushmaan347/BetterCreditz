"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, TrendingUp, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300">Trusted by 2M+ customers</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Where credit meets <span className="gradient-text">confidence</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your financial future with AI-powered credit solutions. Get personalized recommendations, see
                approval odds before applying, and improve your credit score—all without impacting your credit.
              </p>
            </div>

            {/* Quick Start Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4">Get Your Free Credit Score</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-gray-900 border-0 flex-1"
                />
                <Button className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
                  Check Score Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                No credit card required • Soft credit check • Results in 60 seconds
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span>No Credit Impact</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-400" />
                <span>2M+ Happy Customers</span>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6 bg-transparent"
                asChild
              >
                <Link href="/about">Learn How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                {/* Credit Score Display */}
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-green-600 mb-2">750</div>
                  <div className="text-gray-600">Excellent Credit</div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-gray-900">94%</div>
                    <div className="text-sm text-gray-600">Approval Rate</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-gray-900">$50K</div>
                    <div className="text-sm text-gray-600">Avg. Credit Limit</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badges */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              +150 Points
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Pre-Approved
            </div>
            <div className="absolute top-1/2 -left-6 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              $0 Fees
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

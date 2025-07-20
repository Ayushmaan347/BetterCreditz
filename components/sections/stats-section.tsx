"use client"

import { useEffect, useState } from "react"

const stats = [
  { label: "Credit Points Improved", value: 500000000, suffix: "M+", prefix: "" },
  { label: "Happy Customers", value: 2000000, suffix: "M+", prefix: "" },
  { label: "Average Score Increase", value: 150, suffix: "+", prefix: "" },
  { label: "Success Rate", value: 94, suffix: "%", prefix: "" },
]

function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0)
    }
    return num.toLocaleString()
  }

  return (
    <span className="text-4xl lg:text-5xl font-bold text-gray-900">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted by millions nationwide</h2>
          <p className="text-gray-600">Real results from real customers</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

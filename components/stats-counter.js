"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function StatsCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  const animateCount = () => {
    let start = 0
    const duration = 2000
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }

  return (
    <Card className="overflow-hidden border-none bg-white shadow-lg">
      <CardContent className="p-8 text-center">
        <div ref={countRef} className="mb-4 text-5xl font-bold text-green-600">{`${count}${suffix}`}</div>
        <p className="text-xl text-gray-700">{label}</p>
      </CardContent>
    </Card>
  )
}

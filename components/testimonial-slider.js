"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"


  const testimonials = [
  {
    id: 1,
    quote:
      "JSons Communications transformed our lead generation process. Their team's expertise helped us increase conversions by 40% in just three months.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "FinTech Solutions",
    image: "/placeholder.png?height=100&width=100&text=1",
  },
  {
    id: 2,
    quote:
      "The quality of leads we receive from JSons is exceptional. Their team understands our business and consistently delivers results that exceed our expectations.",
    author: "Michael Chen",
    position: "Sales Manager",
    company: "Insurance Partners",
    image: "/placeholder.png?height=100&width=100&text=2",
  },
  {
    id: 3,
    quote:
      "Working with JSons has been a game-changer for our customer support. Their team is professional, responsive, and truly cares about our customers.",
    author: "Emily Rodriguez",
    position: "Customer Success Lead",
    company: "E-Commerce Plus",
    image: "/placeholder.png?height=100&width=100&text=3",
  },
  {
    id: 4,
    quote:
      "We've tried several telemarketing services, but JSons Communications stands out for their attention to detail and commitment to quality. Highly recommended!",
    author: "David Wilson",
    position: "Operations Director",
    company: "Global Services Inc.",
    image: "/placeholder.png?height=100&width=100&text=4",
  },
  {
    id: 5,
    quote:
      "Exceptional experience with JSons! Their campaign strategy directly contributed to a 25% increase in sales within the first quarter.",
    author: "Ayesha Khan",
    position: "Growth Manager",
    company: "RetailPro",
    image: "/placeholder.png?height=100&width=100&text=5",
  },
  {
    id: 6,
    quote:
      "Their insights and expertise made our outreach smarter and more impactful. JSons helped us tap into markets we couldn’t reach before.",
    author: "Liam Patel",
    position: "Business Analyst",
    company: "LogiTech Works",
    image: "/placeholder.png?height=100&width=100&text=6",
  },
];


export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-xl">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="relative md:col-span-2">
            <Quote className="absolute -top-2 left-0 h-12 w-12 text-green-200" />
            <div className="relative z-10 h-full">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="mb-8 text-xl italic leading-relaxed text-gray-600">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="relative mr-4 h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonials[activeIndex].image || "/placeholder.png"}
                        alt={testimonials[activeIndex].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{testimonials[activeIndex].author}</h4>
                      <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                      <p className="text-green-600">{testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:col-span-3">
            <div className="relative h-[300px] overflow-hidden rounded-xl md:h-full">
              <Image
                src={`/placeholder.png?height=600&width=800&text=Testimonial ${activeIndex + 1}`}
                alt="Testimonial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-lg bg-white/90 p-4 backdrop-blur-sm">
                  <p className="font-medium text-gray-900">
                    "{testimonials[activeIndex].company} saw a significant improvement in their conversion rates after
                    partnering with us."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-gray-300"
          onClick={prevSlide}
          disabled={isAnimating}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === activeIndex ? "bg-green-600 w-8" : "bg-gray-300"
              }`}
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setActiveIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-gray-300"
          onClick={nextSlide}
          disabled={isAnimating}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}

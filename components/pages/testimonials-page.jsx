/* app/testimonials/page.jsx — full page */

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionHeading from "@/components/section-heading";
import PageBanner from "@/components/page-banner";
import TestimonialSlider from "@/components/testimonial-slider";

const allTestimonials = [
  {
    quote:
      "Very cooperative staff. I appreciate their efforts, especially Ms. Emaan. She is very helpful and friendly.",
    name: "Taha Shahid",
    rating: 5,
    avatar: "/pic/icon.webp?height=100&width=100&text=1",
  },
  {
    quote:
      "Very professional and helpful staff. I got my family visa done with their help. Highly recommended.",
    name: "Kamran Ali",
    rating: 5,
    avatar: "/pic/icon.webp?height=100&width=100&text=2",
  },
  {
    quote:
      "I had a very good experience. My cousin recommended them and I am satisfied with their services.",
    name: "Sadaf Fatima",
    rating: 5,
    avatar: "/pic/icon.webp?height=100&width=100&text=3",
  },
  {
    quote:
      "Best place for immigration consultancy. Got my study visa approved without hassle.",
    name: "Fatima Khan",
    rating: 5,
    avatar: "/pic/icon.webp?height=100&width=100&text=4",
  },
  {
    quote:
      "Excellent guidance and staff behavior. They provide complete information and support.",
    name: "Zeeshan Haider",
    rating: 5,
    avatar: "/pic/icon.webp?text=5",
  },
  {
    quote:
      "I appreciate their efforts. Their team was always available and helped me step-by-step.",
    name: "Fahad Anwar",
    rating: 5,
    avatar: "/pic/icon.webp?text=6",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ─── Header ─────────────────────────────────────────── */}
      <Header />

      {/* ─── Hero / Banner ─────────────────────────────────── */}
      <PageBanner
        title="Client Testimonials"
        description="Hear what our clients have to say about their experience working with us"
        image="/placeholder.png?height=600&width=1200&text=Testimonials"
      />

      {/* ─── Featured Testimonials Slider ───────────────────── */}
     
      {/* ─── All Testimonials Grid ──────────────────────────── */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CLIENT FEEDBACK"
            title="What Our Clients Say"
            description="Read testimonials from businesses across various industries"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allTestimonials.map((t, i) => (
              <Card
                key={i}
                className="overflow-hidden border-none bg-white shadow-lg"
              >
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-green-500" />

                  <p className="mb-4 text-gray-600 italic">"{t.quote}"</p>

                  {/* Stars */}
                  <div className="mb-4 text-yellow-400">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Case Studies ───────────────────────────────────── */}
      

      {/* ─── Footer ─────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}

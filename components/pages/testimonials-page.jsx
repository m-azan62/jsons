import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionHeading from "@/components/section-heading"
import PageBanner from "@/components/page-banner"
import TestimonialSlider from "@/components/testimonial-slider"

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <PageBanner
        title="Client Testimonials"
        description="Hear what our clients have to say about their experience working with us"
        image="/placeholder.png?height=600&width=1200&text=Testimonials"
      />

      {/* Featured Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FEATURED"
            title="Success Stories"
            description="Our clients share their experiences and results from working with JSons Communications"
          />

          <TestimonialSlider />
        </div>
      </section>

      {/* All Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CLIENT FEEDBACK"
            title="What Our Clients Say"
            description="Read testimonials from businesses across various industries"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Card key={i} className="overflow-hidden border-none bg-white shadow-lg">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-green-500" />
                  <p className="mb-6 text-gray-600 italic">
                    "JSons Communications has been instrumental in our growth. Their team's expertise and dedication
                    have helped us increase our customer base significantly."
                  </p>
                  <div className="flex items-center">
                    <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={`/placeholder.png?height=100&width=100&text=${i}`}
                        alt="Client"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Client Name</h4>
                      <p className="text-green-600">Company Name</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CASE STUDIES"
            title="Client Success Stories"
            description="Detailed examples of how we've helped businesses achieve their goals"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden border-none bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=Case+Study+1"
                  alt="Case Study 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-green-600 text-white hover:bg-green-700">Finance</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Increasing Lead Conversion by 40%</h3>
                <p className="mb-4 text-gray-600">
                  How we helped a financial services company improve their lead generation and conversion rates.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600">Read case study →</span>
                  <span className="text-sm text-gray-500">5 min read</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=Case+Study+2"
                  alt="Case Study 2"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-green-600 text-white hover:bg-green-700">E-commerce</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Reducing Customer Churn by 25%</h3>
                <p className="mb-4 text-gray-600">
                  Our customer retention strategy for an e-commerce platform that significantly reduced churn rate.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600">Read case study →</span>
                  <span className="text-sm text-gray-500">4 min read</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=Case+Study+3"
                  alt="Case Study 3"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-green-600 text-white hover:bg-green-700">Insurance</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Scaling Sales Operations by 300%</h3>
                <p className="mb-4 text-gray-600">
                  How we helped an insurance company rapidly scale their sales operations without sacrificing quality.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600">Read case study →</span>
                  <span className="text-sm text-gray-500">6 min read</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, MessageSquare, Mail, MapPin, CheckCircle, ArrowRight, Users, BarChart, Award } from "lucide-react"
import ServiceCard from "@/components/service-card"
import TestimonialSlider from "@/components/testimonial-slider"
import StatsCounter from "@/components/stats-counter"
import SectionHeading from "@/components/section-heading"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0 opacity-30">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                A LEADING TELEMARKETING COMPANY
              </Badge>
              <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Your Trusted Partner for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Sales & Lead Generation</span>
                  <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-green-200"></span>
                </span>{" "}
                Success
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
                Since 2014, we've been helping businesses increase conversions and build lasting customer relationships
                through expert telemarketing solutions.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Join Our Team
                </Button>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                      ></div>
                    ))}
                  </div>
                  <span>Trusted by 500+ clients</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="JSons Communications Team"
                  width={600}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 left-0 sm:-left-6 z-0 h-24 w-24 rounded-lg bg-green-200"></div>
              <div className="absolute -right-6 -top-6 z-0 h-24 w-24 rounded-lg bg-green-500 opacity-50 hidden sm:block"></div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <Phone className="h-8 w-8 flex-shrink-0 text-green-500" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500">Call Us</p>
                <p className="truncate font-medium text-sm">+123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <MessageSquare className="h-8 w-8 flex-shrink-0 text-green-500" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500">WhatsApp</p>
                <p className="truncate font-medium text-sm">Chat Now</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <Mail className="h-8 w-8 flex-shrink-0 text-green-500" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500">Email</p>
                <p className="truncate font-medium text-sm">info@jsons.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <MapPin className="h-8 w-8 flex-shrink-0 text-green-500" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500">Location</p>
                <p className="truncate font-medium text-sm">Business Ave.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR SERVICES"
            title="Comprehensive Telemarketing Solutions"
            description="We offer tailored telemarketing services to meet your specific business needs and help you achieve your goals."
          />

          <Tabs defaultValue="sales" className="mx-auto max-w-5xl">
            <TabsList className="mb-8 grid w-full grid-cols-1 gap-2 bg-green-50 sm:grid-cols-3 sm:gap-0">
              <TabsTrigger value="sales" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Sales & Lead Generation
              </TabsTrigger>
              <TabsTrigger value="support" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Customer Support
              </TabsTrigger>
              <TabsTrigger
                value="specialized"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Specialized Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sales" className="mt-0">
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  icon="Phone"
                  title="Cold Calling"
                  description="Strategic outreach to potential clients to generate interest in your products or services."
                />
                <ServiceCard
                  icon="Calendar"
                  title="Appointment Setting"
                  description="Scheduling qualified meetings between your sales team and potential clients."
                />
                <ServiceCard
                  icon="RefreshCw"
                  title="Follow-up Calls"
                  description="Maintaining contact with leads to nurture relationships and increase conversion rates."
                />
                <ServiceCard
                  icon="Filter"
                  title="Lead Qualification"
                  description="Identifying and qualifying prospects based on your specific criteria."
                />
                <ServiceCard
                  icon="TrendingUp"
                  title="Sales Conversion"
                  description="Converting leads into customers through effective sales techniques."
                />
                <ServiceCard
                  icon="BarChart"
                  title="Performance Tracking"
                  description="Detailed reporting and analytics to measure campaign effectiveness."
                />
              </div>
            </TabsContent>

            <TabsContent value="support" className="mt-0">
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  icon="PhoneIncoming"
                  title="Inbound Support"
                  description="Professional handling of customer inquiries, orders, and support requests."
                />
                <ServiceCard
                  icon="PhoneOutgoing"
                  title="Outbound Support"
                  description="Proactive customer outreach for satisfaction surveys and service updates."
                />
                <ServiceCard
                  icon="MessageSquare"
                  title="Live Chat Support"
                  description="Real-time customer assistance through web-based chat platforms."
                />
                <ServiceCard
                  icon="Mail"
                  title="Email Support"
                  description="Timely and professional responses to customer email inquiries."
                />
                <ServiceCard
                  icon="Users"
                  title="Customer Retention"
                  description="Strategies to maintain customer relationships and reduce churn."
                />
                <ServiceCard
                  icon="Clock"
                  title="24/7 Availability"
                  description="Round-the-clock support options to serve customers at any time."
                />
              </div>
            </TabsContent>

            <TabsContent value="specialized" className="mt-0">
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  icon="Briefcase"
                  title="Finance & Insurance"
                  description="Specialized telemarketing for financial services and insurance products."
                />
                <ServiceCard
                  icon="ShoppingCart"
                  title="E-commerce Support"
                  description="Order processing, returns management, and customer service for online retailers."
                />
                <ServiceCard
                  icon="Target"
                  title="Campaign Management"
                  description="End-to-end planning, execution, and optimization of telemarketing campaigns."
                />
                <ServiceCard
                  icon="Globe"
                  title="Multilingual Services"
                  description="Support in multiple languages to reach diverse customer bases."
                />
                <ServiceCard
                  icon="Shield"
                  title="Compliance Management"
                  description="Ensuring all calls adhere to industry regulations and best practices."
                />
                <ServiceCard
                  icon="BarChart2"
                  title="Market Research"
                  description="Gathering customer insights and market intelligence through targeted calls."
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-16 text-white sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-lg bg-white opacity-10 hidden sm:block"></div>
              <div className="relative z-10 rounded-lg bg-white/10 p-6 backdrop-blur-sm sm:p-8">
                <div className="mb-6 h-1 w-16 bg-white"></div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-200">OUR MISSION</h3>
                <h2 className="mb-6 text-xl font-bold sm:text-2xl lg:text-3xl">
                  We are committed to providing our clients the best strategic guidance available
                </h2>
                <p className="text-green-100">
                  Our mission is to deliver exceptional telemarketing services that drive measurable results for our
                  clients while maintaining the highest standards of professionalism and integrity.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-lg bg-white opacity-10 hidden sm:block"></div>
              <div className="relative z-10 rounded-lg bg-white/10 p-6 backdrop-blur-sm sm:p-8">
                <div className="mb-6 h-1 w-16 bg-white"></div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-200">OUR VISION</h3>
                <h2 className="mb-6 text-xl font-bold sm:text-2xl lg:text-3xl">
                  Leading the Industry with Innovative Solutions that Forge Lasting Bonds & Drive Business Success
                </h2>
                <p className="text-green-100">
                  We aim to be the premier telemarketing partner for businesses worldwide, known for our innovative
                  approach, exceptional results, and commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHY CHOOSE US"
            title="What Sets Us Apart"
            description="We deliver results through expertise, dedication, and a customer-first approach"
          />

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green-100 opacity-0 transition-all duration-500 group-hover:opacity-100 hidden sm:block"></div>
              <CardContent className="relative z-10 p-6">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">10+ Years Experience</h3>
                <p className="text-gray-600">
                  Over a decade of industry expertise and proven results across multiple sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green-100 opacity-0 transition-all duration-500 group-hover:opacity-100 hidden sm:block"></div>
              <CardContent className="relative z-10 p-6">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Expert Team</h3>
                <p className="text-gray-600">Highly trained professionals with specialized industry knowledge.</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green-100 opacity-0 transition-all duration-500 group-hover:opacity-100 hidden sm:block"></div>
              <CardContent className="relative z-10 p-6">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Quality Monitoring</h3>
                <p className="text-gray-600">Industry-leading call quality assurance and performance tracking.</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green-100 opacity-0 transition-all duration-500 group-hover:opacity-100 hidden sm:block"></div>
              <CardContent className="relative z-10 p-6">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Cost-Effective</h3>
                <p className="text-gray-600">Flexible solutions that deliver high ROI and scale with your business.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="COMPANY STATS"
            title="Our Numbers Speak for Themselves"
            description="We've achieved remarkable results for our clients over the years"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCounter value={10} suffix="+" label="Years of Experience" />
            <StatsCounter value={500} suffix="+" label="Satisfied Clients" />
            <StatsCounter value={1} suffix="M+" label="Calls Handled" />
            <StatsCounter value={30} suffix="%" label="Avg. Conversion Increase" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TESTIMONIALS"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear what our clients have to say"
          />

          <TestimonialSlider />

          <div className="mt-16 text-center">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">Trusted by Leading Companies</h3>
            <div className="flex flex-wrap justify-center gap-4 opacity-70 sm:gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-12 w-24 rounded bg-gray-200 sm:w-32"></div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/testimonials">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                View All Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-green-700 shadow-2xl">
            <div className="relative px-6 py-12 sm:px-16 sm:py-20">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white opacity-10 hidden sm:block"></div>
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white opacity-10 hidden sm:block"></div>

              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-green-100 sm:text-xl">
                  Join hundreds of satisfied clients who have boosted their sales and improved customer relationships
                  with JSons Communications.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

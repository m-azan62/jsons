import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, Mail, MapPin, CheckCircle } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import ContactForm from "@/components/contact-form"

export default function Preview() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-500 font-medium mb-2">A LEADING TELEMARKETING COMPANY</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Partner for Sales, Support & Lead Generation Success!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Since 2014, we've been helping businesses increase conversions and build lasting customer relationships
                through expert telemarketing solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-500 hover:bg-green-600">Get a Free Consultation</Button>
                <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
                  Join Our Team
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <a href="#" className="flex items-center text-gray-700 hover:text-green-500">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:text-green-500">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>+123 456 7890</span>
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:text-green-500">
                  <Mail className="mr-2 h-5 w-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="JSons Communications Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive telemarketing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Sales & Lead Generation"
              description="Cold calling, appointment setting, follow-ups, and qualified lead generation to boost your sales pipeline."
              icon="Phone"
            />
            <ServiceCard
              title="Customer Support Solutions"
              description="Inbound & outbound support, live chat, email support, and customer retention services."
              icon="HeadphonesIcon"
            />
            <ServiceCard
              title="Quality Assurance"
              description="Industry-leading call quality monitoring, performance tracking, and continuous improvement."
              icon="ShieldCheckIcon"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver results through expertise, dedication, and a customer-first approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">10+ Years Experience</h3>
                <p className="text-gray-600">
                  Over a decade of industry expertise and proven results across multiple sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">Highly trained professionals with specialized industry knowledge.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Monitoring</h3>
                <p className="text-gray-600">Industry-leading call quality assurance and performance tracking.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cost-Effective</h3>
                <p className="text-gray-600">Flexible solutions that deliver high ROI and scale with your business.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-1 w-16 bg-green-500 mb-6"></div>
              <h3 className="text-gray-500 uppercase font-medium mb-4">OUR MISSION</h3>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                We are committed to providing our clients the best strategic guidance available
              </h2>
              <p className="text-gray-600">
                Our mission is to deliver exceptional telemarketing services that drive measurable results for our
                clients while maintaining the highest standards of professionalism and integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-1 w-16 bg-green-500 mb-6"></div>
              <h3 className="text-gray-500 uppercase font-medium mb-4">OUR VISION</h3>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Leading the Industry with Innovative Solutions that Forge Lasting Bonds & Drive Business Success
              </h2>
              <p className="text-gray-600">
                We aim to be the premier telemarketing partner for businesses worldwide, known for our innovative
                approach, exceptional results, and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="JSons Communications transformed our lead generation process. Their team's expertise helped us increase conversions by 40% in just three months."
              author="Sarah Johnson"
              company="FinTech Solutions"
            />
            <TestimonialCard
              quote="The quality of leads we receive from JSons is exceptional. Their team understands our business and consistently delivers results that exceed our expectations."
              author="Michael Chen"
              company="Insurance Partners"
            />
            <TestimonialCard
              quote="Working with JSons has been a game-changer for our customer support. Their team is professional, responsive, and truly cares about our customers."
              author="Emily Rodriguez"
              company="E-Commerce Plus"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-500 text-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-1 w-16 bg-white mx-auto mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">COMPANY STATS</h2>
            <p className="text-xl max-w-3xl mx-auto">Our numbers speak for themselves</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">10+</p>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-xl">Satisfied Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">1M+</p>
              <p className="text-xl">Calls Handled</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">30%</p>
              <p className="text-xl">Avg. Conversion Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="h-1 w-16 bg-green-500 mb-6"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform your telemarketing strategy? Contact us today for a free consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                    <p className="mt-1 text-gray-600">123 Business Avenue, Suite 456, City, Country</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">info@jsonscommunications.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-500 rounded-lg shadow-xl p-8 sm:p-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg text-green-50 mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have boosted their sales and improved customer relationships with
                JSons Communications.
              </p>
              <Button className="bg-white text-green-500 hover:bg-green-50">Get Started Today</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

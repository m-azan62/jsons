import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import SectionHeading from "@/components/section-heading"
import PageBanner from "@/components/page-banner"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <PageBanner
        title="Contact Us"
        description="Get in touch with our team for any inquiries or to request a free consultation"
        image="/placeholder.png?height=600&width=1200&text=Contact+Us"
      />

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GET IN TOUCH"
            title="We'd Love to Hear From You"
            description="Reach out to us for any questions, inquiries, or to schedule a consultation"
          />

          <div className="grid gap-12 rounded-2xl bg-white p-8 shadow-xl lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h3>

              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Our Location</h4>
                    <p className="text-gray-600">123 Business Avenue, Suite 456, City, Country</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@jsonscommunications.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.png?height=600&width=800&text=Map"
                  alt="Office Location Map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR OFFICES"
            title="Visit Us Around the World"
            description="Our global presence allows us to serve clients across different regions with localized expertise"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=New+York"
                  alt="New York Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">New York</h3>
                <p className="mb-4 text-gray-600">123 Business Avenue, Suite 456, New York, NY 10001</p>
                <div className="flex items-center text-green-600">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+1 (212) 555-7890</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=London"
                  alt="London Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">London</h3>
                <p className="mb-4 text-gray-600">456 Business Street, Floor 3, London, UK EC1A 1BB</p>
                <div className="flex items-center text-green-600">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+44 20 7123 4567</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=Singapore"
                  alt="Singapore Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Singapore</h3>
                <p className="mb-4 text-gray-600">789 Business Park, #08-01, Singapore 123456</p>
                <div className="flex items-center text-green-600">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+65 6123 4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

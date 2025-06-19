import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceCard from "@/components/service-card";
import SectionHeading from "@/components/section-heading";
import PageBanner from "@/components/page-banner";
import FaqAccordion from "@/components/faq-accordion";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <PageBanner
        title="Our Services"
        description="Comprehensive telemarketing solutions tailored to your business needs"
        image="/pic/services-banner.webp?height=600&width=1200&text=Our+Services"
      />

      {/* Main Services Section */}
<section className="py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      badge="WHAT WE OFFER"
      title="Comprehensive Telemarketing Solutions"
      description="We offer tailored telemarketing services to meet your specific business needs and help you achieve your goals."
    />

    <div className="mx-auto max-w-5xl px-4">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Lead Generation */}
        <div id="lead-generation" className="scroll-mt-24">
          <ServiceCard
            icon="Filter"
            title="Lead Generation"
            description="At J. Sons Communications, we consistently generate 3,000+ qualified leads daily across high-demand verticals, including Final Expense, Auto Insurance, Auto Warranty, Health Insurance, and Home Improvement. Our targeted outreach and expert agents ensure a steady pipeline of potential customers for your business."
          />
        </div>

        {/* Life Insurance Sales */}
        <div id="life-insurance-sales" className="scroll-mt-24">
          <ServiceCard
            icon="Shield"
            title="Life Insurance Sales"
            description="J. Sons Communications is currently generating over $100,000 in monthly premiums, driven by the performance of our skilled on-shore sales agents and our competent off-shore support team. Our strategic sales approach and customer-focused conversations lead to consistent, high-value conversions."
          />
        </div>

        {/* Quality Assurance */}
        <div id="quality-assurance" className="scroll-mt-24">
          <ServiceCard
            icon="CheckCircle"
            title="Quality Assurance"
            description="At J. Sons Communications, our leadership has successfully delivered customized Quality Assurance solutions to numerous clients over the years. We design tailored QA systems that ensure compliance, improve agent performance, and consistently uphold service excellence."
          />
        </div>

        {/* Inbound & Customer Service */}
        <div id="inbound-customer-service" className="scroll-mt-24">
          <ServiceCard
            icon="PhoneIncoming"
            title="Inbound & Customer Service"
            description="J. Sons Communications has a dedicated team of trained professionals ready to handle all types of inbound customer interactions efficiently and independently. From inquiries to issue resolution, we ensure a smooth, responsive, and customer-first experience every time."
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Service Process Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR APPROACH"
            title="How We Deliver Results"
            description="Our proven methodology ensures successful campaigns and satisfied clients"
          />

          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/pic/SERVICES-2.webp"
                  alt="Our Service Process"
                  width={600}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-0 h-24 w-24 rounded-lg bg-green-200"></div>
              <div className="absolute -right-6 -top-6 z-0 h-24 w-24 rounded-lg bg-green-500 opacity-50"></div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-3 text-green-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                      1
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">
                      Consultation & Needs Assessment
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We begin by understanding your business, goals, and target
                      audience to create a tailored strategy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-3 text-green-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                      2
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">
                      Strategy & Campaign Planning
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Our team develops a comprehensive plan with clear
                      objectives, scripts, and performance metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-3 text-green-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                      3
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">
                      Training & Call Execution
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Our specialized agents are trained on your
                      products/services before beginning the campaign.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-3 text-green-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                      4
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">
                      Quality Assurance & Reporting
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We monitor calls, provide detailed reports, and ensure
                      compliance with industry standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-green-100 p-3 text-green-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                      5
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">
                      Continuous Optimization
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We analyze results and refine our approach to maximize
                      performance and ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INDUSTRIES"
            title="Sectors We Specialize In"
            description="Our expertise spans across multiple industries, providing tailored solutions for each"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=Finance"
                  alt="Finance Industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Finance & Banking</h3>
                <p className="mb-4 text-gray-600">
                  Lead generation and customer support for financial
                  institutions, banks, and investment firms.
                </p>
                {/* <Link href="#" className="text-green-600 hover:text-green-700">
                  Learn more →
                </Link> */}
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=Insurance"
                  alt="Insurance Industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Insurance</h3>
                <p className="mb-4 text-gray-600">
                  Policy sales, claims support, and customer retention for
                  insurance companies and brokers.
                </p>
                {/* <Link href="#" className="text-green-600 hover:text-green-700">
                  Learn more →
                </Link> */}
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=E-commerce"
                  alt="E-commerce Industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">E-commerce</h3>
                <p className="mb-4 text-gray-600">
                  Order processing, customer service, and sales support for
                  online retailers and marketplaces.
                </p>
                {/* <Link href="#" className="text-green-600 hover:text-green-700">
                  Learn more →
                </Link> */}
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=Healthcare"
                  alt="Healthcare Industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Healthcare</h3>
                <p className="mb-4 text-gray-600">
                  Appointment scheduling, patient follow-ups, and service
                  inquiries for healthcare providers.
                </p>
                {/* <Link href="#" className="text-green-600 hover:text-green-700">
                  Learn more →
                </Link> */}
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=Technology"
                  alt="Technology Industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Technology</h3>
                <p className="mb-4 text-gray-600">
                  Lead generation, technical support, and customer service for
                  software and hardware companies.
                </p>
                {/* <Link href="#" className="text-green-600 hover:text-green-700">
                  Learn more →
                </Link> */}
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.png?height=400&width=600&text=Real+Estate"
                  alt="Real Estate Industry"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Real Estate</h3>
                <p className="mb-4 text-gray-600">
                  Lead qualification, appointment setting, and follow-ups for
                  real estate agencies and developers.
                </p>
                {/* <Link href="#" className="text-green-600 hover:text-green-700">
                  Learn more →
                </Link> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our telemarketing services"
          />

          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-green-700 shadow-2xl">
            <div className="relative px-8 py-16 sm:px-16 sm:py-20">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white opacity-10"></div>
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white opacity-10"></div>

              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Boost Your Business?
                </h2>
                <p className="mb-10 text-xl leading-relaxed text-green-100">
                  Contact us today for a free consultation and discover how our
                  telemarketing services can help you achieve your goals.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-green-50"
                  >
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

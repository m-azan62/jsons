import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TeamGrid from "@/components/team-grid"
import SectionHeading from "@/components/section-heading"
import PageBanner from "@/components/page-banner"
import ProcessTimeline from "@/components/process-timeline"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <PageBanner
        title="About JSons Communications"
        description="Learn about our story, mission, and the team behind our success"
        image="/placeholder.svg?height=600&width=1200&text=About+Us"
      />

      {/* Company Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="JSons Communications Office"
                  width={600}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-0 h-24 w-24 rounded-lg bg-green-200"></div>
              <div className="absolute -right-6 -top-6 z-0 h-24 w-24 rounded-lg bg-green-500 opacity-50"></div>
            </div>

            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">OUR STORY</Badge>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Decade of Excellence in Telemarketing
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Since 2014, JSons Communications has been at the forefront of telemarketing and business process
                outsourcing (BPO), helping businesses in insurance, finance, and e-commerce scale through expert call
                center solutions.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Our team of dedicated professionals combines industry expertise with cutting-edge technology to deliver
                exceptional results for our clients. We pride ourselves on building long-term partnerships based on
                trust, transparency, and consistent performance.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                  <div>
                    <h3 className="font-bold">Industry Expertise</h3>
                    <p className="text-gray-600">Specialized knowledge across sectors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                  <div>
                    <h3 className="font-bold">Advanced Technology</h3>
                    <p className="text-gray-600">State-of-the-art call center systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                  <div>
                    <h3 className="font-bold">Dedicated Teams</h3>
                    <p className="text-gray-600">Committed professionals for your success</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                  <div>
                    <h3 className="font-bold">Proven Results</h3>
                    <p className="text-gray-600">Track record of client success stories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-lg bg-white opacity-10"></div>
              <div className="relative z-10 rounded-lg bg-white/10 p-8 backdrop-blur-sm">
                <div className="mb-6 h-1 w-16 bg-white"></div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-200">OUR MISSION</h3>
                <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
                  We are committed to providing our clients the best strategic guidance available
                </h2>
                <p className="text-green-100">
                  Our mission is to deliver exceptional telemarketing services that drive measurable results for our
                  clients while maintaining the highest standards of professionalism and integrity.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-lg bg-white opacity-10"></div>
              <div className="relative z-10 rounded-lg bg-white/10 p-8 backdrop-blur-sm">
                <div className="mb-6 h-1 w-16 bg-white"></div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-200">OUR VISION</h3>
                <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
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

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR VALUES"
            title="The Principles That Guide Us"
            description="Our core values shape everything we do and how we serve our clients"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-green-600"></div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every interaction, campaign, and relationship. Our commitment to quality
                  drives everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-green-600"></div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Integrity</h3>
                <p className="text-gray-600">
                  We operate with complete transparency and honesty, building trust with our clients, partners, and team
                  members.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-green-600"></div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Innovation</h3>
                <p className="text-gray-600">
                  We continuously seek new and better ways to serve our clients, embracing technology and creative
                  solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-green-600"></div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with our clients as true partners, aligning our goals with their success and growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR PROCESS"
            title="How We Work"
            description="A streamlined approach to deliver exceptional results"
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR TEAM"
            title="Meet Our Leadership"
            description="The experienced professionals behind our success"
          />

          <TeamGrid />
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
                  Ready to Work With Our Team?
                </h2>
                <p className="mb-10 text-xl leading-relaxed text-green-100">
                  Let our experienced professionals help you achieve your business goals through expert telemarketing
                  solutions.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                    Contact Us Today
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
  )
}

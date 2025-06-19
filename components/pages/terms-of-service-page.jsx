import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageBanner
        title="Terms of Service"
        description="Please read our terms and conditions before using JSons Communications services."
        image="/placeholder.png?height=600&width=1200&text=Terms+of+Service"
      />

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-600">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
            <p>
              JSons Communications offers telemarketing and BPO services. We reserve the right to modify or discontinue any service at our discretion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p>
              You agree to use our services lawfully and refrain from any activity that could harm the company or other users.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p>
              All content on this site, including logos, text, and graphics, is the property of JSons Communications unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p>
              We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access if you violate these terms or misuse our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of Pakistan. Any disputes will be resolved in local jurisdiction courts.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

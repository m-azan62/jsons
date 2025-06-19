import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageBanner
        title="Privacy Policy"
        description="Learn how JSons Communications collects, uses, and protects your information."
        image="/placeholder.png?height=600&width=1200&text=Privacy+Policy"
      />

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-600">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              At JSons Communications, we value your privacy. This policy outlines how we collect, use, and protect your personal data when you use our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, phone number, and any information you provide through contact forms or service inquiries.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our services and website experience</li>
              <li>To send promotional updates if you opt in</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection</h2>
            <p>
              We implement strong security measures to protect your data and prevent unauthorized access, disclosure, or loss.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p>
              We may use third-party services (e.g., analytics, CRM tools) that may collect data. These services are governed by their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p>
              You have the right to access, modify, or request deletion of your personal information by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates</h2>
            <p>
              This policy may be updated from time to time. The latest version will always be available on this page.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

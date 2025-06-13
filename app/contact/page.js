// ✅ app/contact/page.js
'use client'

import { useState } from 'react'
import ContactPage from '@/components/pages/contact-page'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageBanner from '@/components/page-banner'
import SectionHeading from '@/components/section-heading'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

export default function ContactPageContainer() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (formData) => {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <PageBanner
        title="Contact Us"
        description="Get in touch with our team for any inquiries or to request a free consultation"
        image="/placeholder.png?height=600&width=1200&text=Contact+Us"
      />

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GET IN TOUCH"
            title="We'd Love to Hear From You"
            description="Reach out to us for any questions, inquiries, or to schedule a consultation"
          />

          <div className="grid gap-12 rounded-2xl bg-white p-8 shadow-xl lg:grid-cols-2">
            {/* Info Section */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h3>
              <div className="mb-8 space-y-6">
                <ContactInfo icon={<MapPin />} title="Our Location" text="123 Business Avenue, Suite 456, City, Country" />
                <ContactInfo icon={<Phone />} title="Phone" text="+123 456 7890" />
                <ContactInfo icon={<Mail />} title="Email" text="info@jsonscommunications.com" />
                <ContactInfo icon={<Clock />} title="Business Hours" text="Mon-Fri: 9-6, Sat: 10-2" />
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image src="/placeholder.png?height=600&width=800&text=Map" alt="Map" fill className="object-cover" />
              </div>
            </div>

            <ContactPage onSubmit={handleSubmit} status={status} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ContactInfo({ icon, title, text }) {
  return (
    <div className="flex items-start">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">{icon}</div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  )
}

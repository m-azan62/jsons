"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          inquiryType: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-gray-900">Send Us a Message</h3>

      {submitSuccess ? (
        <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-8 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h4 className="mb-2 text-xl font-bold text-gray-900">Message Sent Successfully!</h4>
          <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="inquiryType" className="mb-1 block text-sm font-medium text-gray-700">
                Inquiry Type *
              </label>
              <Select value={formData.inquiryType} onValueChange={handleSelectChange} required>
                <SelectTrigger className="border-gray-300 focus:border-green-500 focus:ring-green-500">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Inquiry</SelectItem>
                  <SelectItem value="support">Customer Support</SelectItem>
                  <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                  <SelectItem value="careers">Careers</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
                rows={4}
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}

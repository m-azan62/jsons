import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Facebook, Linkedin, Instagram, Mail } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <img
                src="/json.png"
                alt="JSons Communications Logo"
                className="h-20 w-auto mx-12"
              />
            </div>
            <p className="mb-6 text-gray-400">
              Your trusted partner for telemarketing and BPO services since 2014. We help businesses grow through
              effective communication strategies.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                icon={<Facebook className="h-5 w-5" />}
                href="https://www.facebook.com/share/1ZU5y5Nw6D/"
              />
              <SocialLink
                icon={<Linkedin className="h-5 w-5" />}
                href="https://www.linkedin.com/company/jsons-communications/posts/?feedView=all"
              />
              <SocialLink
                icon={<Instagram className="h-5 w-5" />}
                href="https://www.instagram.com/j.sonscommunications/"
              />
              <SocialLink
                icon={<FaTiktok className="h-5 w-5" />}
                href="https://www.tiktok.com/@jsonscom?_t=ZS-8xHre3XOano&_r=1"
              />
            </div>

          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Services</h3>
            <ul className="space-y-4">
              <FooterLink href="/services#lead-generation">Lead Generation</FooterLink>
              <FooterLink href="/services#life-insurance-sales">Life Insurance Sales</FooterLink>
              <FooterLink href="/services#quality-assurance">Quality Assurance</FooterLink>
              <FooterLink href="/services#inbound-customer-service">Inbound &amp; Customer Service</FooterLink>
            </ul>
          </div>


          <div>
            <h3 className="mb-6 text-lg font-semibold">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Service</FooterLink>
              <FooterLink href="/career">Careers</FooterLink>
              <FooterLink href="/testimonials">Testimonials</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Subscribe</h3>
            <p className="mb-4 text-gray-400">Stay updated with our latest news and offers.</p>
            <div className="mb-4 flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none border-gray-700 bg-gray-800 text-white focus:border-green-500 focus:ring-green-500"
              />
              <Button className="rounded-l-none bg-green-600 hover:bg-green-700">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="h-5 w-5" />
              <span>jobs@jsonscommunications.com</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-gray-400 md:text-left">
              &copy; {new Date().getFullYear()} JSons Communications. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-green-600 hover:text-white"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  )
}

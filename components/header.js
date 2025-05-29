"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-40">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-green-600"></div>
              <span className={`text-xl font-bold ${isScrolled ? "text-gray-900" : "text-gray-900"}`}>
                JSons Communications
              </span>
            </div>
          </div>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 md:flex">
          <NavLink href="/" isActive={isActive("/")} isScrolled={isScrolled}>
            Home
          </NavLink>
          <NavLink href="/services" isActive={isActive("/services")} isScrolled={isScrolled}>
            Services
          </NavLink>
          <NavLink href="/about" isActive={isActive("/about")} isScrolled={isScrolled}>
            About
          </NavLink>
          <NavLink href="/testimonials" isActive={isActive("/testimonials")} isScrolled={isScrolled}>
            Testimonials
          </NavLink>
          <NavLink href="/contact" isActive={isActive("/contact")} isScrolled={isScrolled}>
            Contact
          </NavLink>
          <NavLink href="/career" isActive={isActive("/career")} isScrolled={isScrolled}>
            Careers
          </NavLink>
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <a
            href="tel:+1234567890"
            className={`flex items-center gap-2 ${isScrolled ? "text-gray-700" : "text-gray-900"} hover:text-green-600`}
          >
            <Phone className="h-4 w-4" />
            <span>+123 456 7890</span>
          </a>
          <Link href="/contact">
            <Button className="bg-green-600 text-white hover:bg-green-700">Get a Quote</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/" isActive={isActive("/")} onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/services" isActive={isActive("/services")} onClick={() => setIsMenuOpen(false)}>
                Services
              </MobileNavLink>
              <MobileNavLink href="/about" isActive={isActive("/about")} onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink
                href="/testimonials"
                isActive={isActive("/testimonials")}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </MobileNavLink>
              <MobileNavLink href="/contact" isActive={isActive("/contact")} onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
              <div className="pt-4">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700">Get a Quote</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children, isActive, isScrolled }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm font-medium transition-colors ${isActive
          ? "text-green-600"
          : isScrolled
            ? "text-gray-700 hover:text-green-600"
            : "text-gray-900 hover:text-green-600"
        }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children, isActive }) {
  return (
    <Link
      href={href}
      className={`block py-2 text-base font-medium ${isActive ? "text-green-600" : "text-gray-900 hover:text-green-600"
        }`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

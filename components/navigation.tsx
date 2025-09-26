"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // ✅ Import Next.js Image
import { CallButton } from "@/components/call-button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/emergency", label: "Emergency" },
  ]

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-orange-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            {/* ✅ Replace SVG with logo.jpg */}
            <Image
              src="/logo.jpg" // public/ folder me rakho
              alt="Key 2 BHP Logo"
              width={48}
              height={48}
              className="rounded-md drop-shadow-lg"
            />
            <div className="text-white">
              <div className="font-serif font-bold text-xl tracking-wide">KEY 2 BHP</div>
              <div className="text-sm text-orange-400 font-medium tracking-wider">
                AUTO LOCKSMITH LTD
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Call Now Button */}
          <div className="hidden md:flex items-center space-x-4">
            <CallButton
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
              title="Call Key 2 BHP Now"
              description="Choose your preferred locksmith for immediate assistance"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </CallButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-orange-500 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-orange-500/20">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-orange-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <CallButton
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 rounded-lg"
                  title="Call Key 2 BHP Now"
                  description="Choose your preferred locksmith for immediate assistance"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </CallButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

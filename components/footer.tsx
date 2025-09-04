"use client"

import Link from "next/link"
import { CallButton } from "@/components/call-button"
import { Phone, Clock, Key } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Key className="h-6 w-6 text-black" />
              </div>
              <div>
                <div className="font-serif font-bold text-lg">Key 2 BHP</div>
                <div className="text-sm text-orange-500">Auto Locksmith Ltd</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Family-run auto locksmith business providing expert car key programming, lock replacement, and emergency
              unlock services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Emergency
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-orange-500">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 text-sm">Male Locksmith: +44 7936 755530</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 text-sm">Female Locksmith: 073 0990 3243</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 text-sm">24/7 Emergency Service</span>
              </li>
            </ul>
          </div>

          {/* Emergency Call */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-orange-500">Emergency?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Need immediate assistance? Our expert locksmiths are available 24/7.
            </p>
            <CallButton
              className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 rounded-lg transition-all duration-200"
              title="Emergency Call"
              description="Get immediate help from our emergency locksmith service"
            >
              <Phone className="h-4 w-4 mr-2" />
              Emergency Call
            </CallButton>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Key 2 BHP Auto Locksmith Ltd. All rights reserved. Family-run business you can trust.
          </p>
        </div>
      </div>
    </footer>
  )
}

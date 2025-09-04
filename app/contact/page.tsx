"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be implemented later
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us Directly",
      details: [
        { label: "Male Locksmith", value: "+44 7936 755530" },
        { label: "Female Locksmith", value: "073 0990 3243" },
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [{ label: "General Inquiries", value: "info@key2bhp.co.uk" }],
    },
    {
      icon: Clock,
      title: "Service Hours",
      details: [
        { label: "Emergency Service", value: "24/7 Available" },
        { label: "Regular Hours", value: "Mon-Sun: 8AM-8PM" },
      ],
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: [{ label: "Coverage", value: "Local Area & Surrounding" }],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/contact-locksmith-hero.png')`, // Updated to use Ultra HD contact hero image
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-6">
            Contact <span className="text-orange-500">Key 2 BHP</span>
            <span className="block mt-2">Auto Locksmith Ltd</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with our family-run locksmith business. We're here to help with all your automotive locksmith
            needs, 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
              onClick={() => {
                /* Will implement call functionality later */
              }}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now for Immediate Help
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-black">Send Us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-black font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-black font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-black font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-black font-medium">
                        Service Needed
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-orange-500 bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="emergency-lockout">Emergency Vehicle Lockout</option>
                        <option value="key-programming">Car Key Programming</option>
                        <option value="lock-replacement">Lock Replacement</option>
                        <option value="key-cutting">Key Cutting & Duplication</option>
                        <option value="ignition-services">Ignition Services</option>
                        <option value="security-systems">Security System Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-black font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Please describe your locksmith needs or any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 text-lg rounded-lg transition-all duration-200"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif font-bold text-3xl text-black mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Choose the best way to reach our family-run locksmith business. We're available 24/7 for emergency
                  services.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                          <info.icon className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-lg text-black mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex flex-col sm:flex-row sm:items-center">
                                <span className="text-gray-600 text-sm font-medium sm:w-32">{detail.label}:</span>
                                <span className="text-black font-medium">{detail.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Direct Call Buttons */}
              <Card className="border-0 shadow-lg bg-black text-white">
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-xl mb-4 text-center">Need Immediate Assistance?</h3>
                  <p className="text-gray-300 text-center mb-6 text-sm">
                    Call our expert locksmiths directly for fast, professional service.
                  </p>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 text-lg rounded-lg transition-all duration-200"
                      onClick={() => {
                        /* Will implement call functionality later */
                      }}
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call Male Locksmith: +44 7936 755530
                    </Button>

                    <Button
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 text-lg rounded-lg transition-all duration-200"
                      onClick={() => {
                        /* Will implement call functionality later */
                      }}
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call Female Locksmith: 073 0990 3243
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">Our Service Area</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide professional automotive locksmith services throughout the local area and surrounding regions.
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div
              className="w-full h-96 bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=800&text=Service+Area+Map')`,
              }}
            >
              <div className="bg-black/80 text-white p-6 rounded-lg text-center">
                <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <h3 className="font-serif font-bold text-lg mb-2">Service Area Coverage</h3>
                <p className="text-sm text-gray-300">Local area and surrounding regions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">Why Contact Key 2 BHP?</h2>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">
              When you contact us, you're reaching a family business that truly cares about your satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-black">Fast Response</h3>
              <p className="text-black/80 text-sm">
                Quick response to all inquiries and emergency calls with professional service.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-black">Personal Service</h3>
              <p className="text-black/80 text-sm">
                Direct communication with our family team, not a call center or automated system.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-black">Expert Solutions</h3>
              <p className="text-black/80 text-sm">
                Professional advice and solutions for all your automotive locksmith needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

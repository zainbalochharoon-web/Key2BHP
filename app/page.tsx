"use client"

import { Button } from "@/components/ui/button"

import { CallButton } from "@/components/call-button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Clock, Shield, Users, Star, CheckCircle, MapPin, Award, Truck, Zap, MessageCircle, ChevronDown } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-locksmith.png')`,
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Expert Auto Locksmith Services
            <span className="block text-orange-500 mt-2">You Can Trust</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Family-run business providing professional car key programming, lock replacement, and emergency unlock
            services with fast response times across the area.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <CallButton
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              title="Emergency Locksmith Service"
              description="Get immediate help from our professional locksmith team"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now - Emergency Service
            </CallButton>

            <CallButton
              size="lg"
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 bg-black/50 backdrop-blur-sm"
              title="24/7 Locksmith Service"
              description="Available around the clock for all your locksmith needs"
            >
              <Clock className="h-5 w-5 mr-2" />
              24/7 Available
            </CallButton>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-orange-500" />
              <span>Fast Response Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-orange-500" />
              <span>Expert Auto Locksmiths</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-orange-500" />
              <span>Family-Run Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-black">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-sm font-medium">Happy Customers</div>
            </div>
            <div className="text-black">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </div>
            <div className="text-black">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm font-medium">Service Available</div>
            </div>
            <div className="text-black">
              <div className="text-4xl font-bold mb-2">15min</div>
              <div className="text-sm font-medium">Average Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-black">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-sm font-medium">Happy Customers</div>
            </div>
            <div className="text-black">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </div>
            <div className="text-black">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm font-medium">Service Available</div>
            </div>
            <div className="text-black">
              <div className="text-4xl font-bold mb-2">15min</div>
              <div className="text-sm font-medium">Average Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Professional Auto Locksmith Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From emergency lockouts to advanced car key programming, our expert team provides comprehensive automotive
              locksmith solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/car-key-programming.png')`,
                  }}
                ></div>
                <h3 className="font-serif font-bold text-xl mb-4 text-black">Car Key Programming</h3>
                <p className="text-gray-600 mb-6">
                  Advanced programming for all modern vehicle keys, transponders, and remote controls with cutting-edge
                  equipment.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-medium">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/emergency-unlock.png')`,
                  }}
                ></div>
                <h3 className="font-serif font-bold text-xl mb-4 text-black">Emergency Lockout</h3>
                <p className="text-gray-600 mb-6">
                  24/7 emergency response for vehicle lockouts with non-destructive entry techniques and rapid service.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-medium">Emergency Call</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/lock-replacement.png')`,
                  }}
                ></div>
                <h3 className="font-serif font-bold text-xl mb-4 text-black">Lock Replacement</h3>
                <p className="text-gray-600 mb-6">
                  Complete lock replacement and repair services for doors, ignitions, and security systems on all
                  vehicle types.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-medium">Get Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Serving All Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide mobile locksmith services throughout the region with fast response times.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors">
              <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-black mb-2">Downtown</h3>
              <p className="text-sm text-gray-600">15 min response</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors">
              <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-black mb-2">Suburbs</h3>
              <p className="text-sm text-gray-600">20 min response</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors">
              <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-black mb-2">Highway</h3>
              <p className="text-sm text-gray-600">25 min response</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors">
              <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-black mb-2">Rural</h3>
              <p className="text-sm text-gray-600">30 min response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Serving All Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide mobile locksmith services throughout the region with fast response times.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors">
              <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-black mb-2">Downtown</h3>
              <p className="text-sm text-gray-600">15 min response</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors">
              <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-black mb-2">Suburbs</h3>
              <p className="text-sm text-gray-600">20 min response</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors">
              <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-black mb-2">Highway</h3>
              <p className="text-sm text-gray-600">25 min response</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors">
              <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-black mb-2">Rural</h3>
              <p className="text-sm text-gray-600">30 min response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">
              Why Choose <span className="text-orange-500">Key 2 BHP</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              As a family-run business, we combine years of expertise with personal service you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-orange-500">Fast Response</h3>
              <p className="text-gray-300 text-sm">
                Quick arrival times and efficient service to get you back on the road fast.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-orange-500">Expert Service</h3>
              <p className="text-gray-300 text-sm">
                Highly trained professionals with years of automotive locksmith experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-orange-500">Family-Run</h3>
              <p className="text-gray-300 text-sm">
                Personal service from a trusted family business that cares about your satisfaction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-orange-500">Quality Guaranteed</h3>
              <p className="text-gray-300 text-sm">
                Professional workmanship with satisfaction guarantee on all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers who've experienced our service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                </div>
                <p className="text-gray-600 mb-4">
                  "Amazing service! They arrived in 15 minutes and had my car unlocked in no time. Professional and friendly team."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-black">Sarah M.</div>
                    <div className="text-sm text-gray-500">Downtown Customer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional car key programming service. They handled my BMW key replacement perfectly. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-black">Mike R.</div>
                    <div className="text-sm text-gray-500">Suburban Customer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                  <Star className="h-5 w-5 text-orange-500 fill-current" />
                </div>
                <p className="text-gray-600 mb-4">
                  "24/7 emergency service that actually delivers! Called at 2 AM and they were here in 20 minutes."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-black">John D.</div>
                    <div className="text-sm text-gray-500">Highway Customer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our locksmith services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-black mb-3">How quickly can you respond to emergencies?</h3>
              <p className="text-gray-600">
                We typically respond within 15-30 minutes depending on your location. Our mobile locksmiths are strategically positioned throughout the area for fast response times.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-black mb-3">Do you work on all vehicle types?</h3>
              <p className="text-gray-600">
                Yes, we work on all makes and models including cars, trucks, motorcycles, RVs, and commercial vehicles. Our technicians are certified for all vehicle types.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-black mb-3">What forms of payment do you accept?</h3>
              <p className="text-gray-600">
                We accept cash, credit cards, debit cards, and mobile payments. We also work with most major insurance companies for covered services.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-black mb-3">Is your service available 24/7?</h3>
              <p className="text-gray-600">
                Absolutely! We provide 24/7 emergency locksmith services. Whether it's 2 AM or 2 PM, we're here to help with your automotive locksmith needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Technology Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Latest <span className="text-blue-600">Technology</span> & Innovation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay ahead with cutting-edge automotive security technology and advanced key programming systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl text-black mb-4 text-center">Smart Key Technology</h3>
              <p className="text-gray-600 text-center mb-6">
                Advanced programming for proximity keys, push-to-start systems, and biometric authentication.
              </p>
              <div className="text-center">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Latest Tech</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl text-black mb-4 text-center">Anti-Theft Systems</h3>
              <p className="text-gray-600 text-center mb-6">
                Modern immobilizer systems, GPS tracking integration, and advanced security protocols.
              </p>
              <div className="text-center">
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Security</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl text-black mb-4 text-center">Connected Car Keys</h3>
              <p className="text-gray-600 text-center mb-6">
                Bluetooth-enabled keys, mobile app integration, and remote access capabilities.
              </p>
              <div className="text-center">
                <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Connected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Network Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Emergency <span className="text-red-600">Response Network</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our strategic network of mobile locksmiths ensures rapid response times across all areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                <div className="text-2xl font-bold text-red-600">15</div>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Downtown</h3>
              <p className="text-sm text-gray-600">Ultra-fast response</p>
              <div className="w-16 h-1 bg-red-500 mx-auto mt-3 group-hover:w-20 transition-all duration-300"></div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <div className="text-2xl font-bold text-orange-600">20</div>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Suburbs</h3>
              <p className="text-sm text-gray-600">Quick arrival</p>
              <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 group-hover:w-20 transition-all duration-300"></div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                <div className="text-2xl font-bold text-yellow-600">25</div>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Highway</h3>
              <p className="text-sm text-gray-600">Reliable service</p>
              <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3 group-hover:w-20 transition-all duration-300"></div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <div className="text-2xl font-bold text-green-600">30</div>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Rural</h3>
              <p className="text-sm text-gray-600">Extended coverage</p>
              <div className="w-16 h-1 bg-green-500 mx-auto mt-3 group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Live tracking available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Premium <span className="text-purple-600">Services</span> & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exclusive services designed for luxury vehicles and high-end security requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl text-black mb-4">Luxury Vehicle Specialists</h3>
              <p className="text-gray-600 mb-6">
                Expert service for BMW, Mercedes, Audi, Porsche, and other premium brands with specialized equipment.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-600 font-semibold">Premium Service</span>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <ChevronDown className="h-4 w-4 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-t-4 border-pink-500">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors duration-300">
                <Truck className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-bold text-xl text-black mb-4">Mobile Workshop</h3>
              <p className="text-gray-600 mb-6">
                Fully equipped mobile workshop with professional tools for on-site key cutting and programming.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-pink-600 font-semibold">Mobile Service</span>
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <ChevronDown className="h-4 w-4 text-pink-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-t-4 border-indigo-500 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
                <Star className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-bold text-xl text-black mb-4">VIP Membership</h3>
              <p className="text-gray-600 mb-6">
                Priority service, extended warranty, and exclusive benefits for our valued customers.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-semibold">VIP Benefits</span>
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <ChevronDown className="h-4 w-4 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Certifications Section */}
      <section className="py-20 bg-gradient-to-l from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Industry <span className="text-emerald-600">Certifications</span> & Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team holds the highest industry certifications and follows strict quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">ISO Certified</h3>
              <p className="text-sm text-gray-600 mb-4">Quality Management</p>
              <div className="w-12 h-1 bg-emerald-500 mx-auto group-hover:w-16 transition-all duration-300"></div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Security Licensed</h3>
              <p className="text-sm text-gray-600 mb-4">Government Approved</p>
              <div className="w-12 h-1 bg-teal-500 mx-auto group-hover:w-16 transition-all duration-300"></div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Team Certified</h3>
              <p className="text-sm text-gray-600 mb-4">All Technicians</p>
              <div className="w-12 h-1 bg-blue-500 mx-auto group-hover:w-16 transition-all duration-300"></div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Award Winning</h3>
              <p className="text-sm text-gray-600 mb-4">Industry Recognition</p>
              <div className="w-12 h-1 bg-indigo-500 mx-auto group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-white px-8 py-4 rounded-full shadow-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
              <span className="text-sm font-medium text-gray-700">All certifications verified annually</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Customer <span className="text-amber-600">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real customers who experienced exceptional service and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-l-4 border-amber-500">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-amber-600">J</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-black mb-2">James Wilson - Business Owner</h3>
                  <p className="text-gray-600 mb-4">
                    "Locked out of my delivery van at 3 AM. Called Key 2 BHP and they were here in 18 minutes. 
                    Professional service that saved my business day!"
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Verified Customer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-l-4 border-yellow-500">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-yellow-600">M</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-black mb-2">Maria Rodriguez - Luxury Car Owner</h3>
                  <p className="text-gray-600 mb-4">
                    "Lost my BMW key fob. They programmed a new one on-site with all the advanced features. 
                    Service was impeccable and reasonably priced."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Verified Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-white px-8 py-4 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-ping"></div>
              <span className="text-sm font-medium text-gray-700">Join 5000+ satisfied customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Support Hub Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">
              24/7 <span className="text-orange-500">Support Hub</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Round-the-clock support with multiple communication channels for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-300 transform group-hover:scale-110">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-orange-400">Emergency Hotline</h3>
              <p className="text-gray-300 mb-4">Direct line to our emergency response team</p>
              <div className="text-2xl font-bold text-white">+ 07309903243</div>
              <div className="text-sm text-orange-400 mt-2">Always Available</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300 transform group-hover:scale-110">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-blue-400">Live Chat</h3>
              <p className="text-gray-300 mb-4">Instant messaging with our support team</p>
              <div className="text-2xl font-bold text-white">Online Now</div>
              <div className="text-sm text-blue-400 mt-2">Real-time Support</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300 transform group-hover:scale-110">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-green-400">Response Time</h3>
              <p className="text-gray-300 mb-4">Average response time for all inquiries</p>
              <div className="text-2xl font-bold text-white">Under 2 Min</div>
              <div className="text-sm text-green-400 mt-2">Guaranteed</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Right Now?</h3>
            <p className="text-gray-300 mb-6">Our support team is standing by to assist you 24/7</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CallButton
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
                title="24/7 Emergency Support"
                description="Get immediate help from our support team"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Support Now
              </CallButton>
              <div className="text-white/60 text-sm">or</div>
              <div className="bg-white/20 px-6 py-4 rounded-lg border border-white/30">
                <span className="text-white font-medium">Live Chat Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Features Section */}
      <section className="py-20 bg-gradient-to-r from-violet-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Mobile <span className="text-violet-600">App Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our mobile app for instant access to locksmith services and real-time tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-violet-200 transition-colors duration-300">
                  <Zap className="h-6 w-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black mb-2">One-Tap Emergency Call</h3>
                  <p className="text-gray-600">Instant emergency service with your exact location automatically shared.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-fuchsia-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-fuchsia-200 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-fuchsia-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black mb-2">Real-Time Tracking</h3>
                  <p className="text-gray-600">Track your locksmith's arrival with live GPS updates and ETA.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black mb-2">In-App Chat</h3>
                  <p className="text-gray-600">Direct communication with your assigned locksmith technician.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors duration-300">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black mb-2">Secure Payments</h3>
                  <p className="text-gray-600">Multiple payment options with secure, encrypted transactions.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-3xl shadow-2xl inline-block transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-64 h-96 bg-gradient-to-b from-violet-400 to-fuchsia-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                  Mobile App
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-fuchsia-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <div className="text-sm text-gray-600">Available on iOS & Android</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full shadow-lg">
              <div className="text-violet-600 font-bold">Coming Soon</div>
              <div className="w-2 h-2 bg-violet-600 rounded-full animate-pulse"></div>
              <span className="text-gray-700">Download our app for enhanced experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Environmental <span className="text-green-600">Commitment</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to sustainable practices and reducing our environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <div className="text-2xl">🌱</div>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Eco-Friendly Materials</h3>
              <p className="text-sm text-gray-600">Using sustainable materials for all our services</p>
              <div className="w-12 h-1 bg-green-500 mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                <div className="text-2xl">♻️</div>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Waste Reduction</h3>
              <p className="text-sm text-gray-600">Minimizing waste through efficient practices</p>
              <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Energy Efficient</h3>
              <p className="text-sm text-gray-600">Using energy-efficient equipment and vehicles</p>
              <div className="w-12 h-1 bg-teal-500 mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <div className="text-2xl">🌍</div>
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Carbon Neutral</h3>
              <p className="text-sm text-gray-600">Working towards carbon-neutral operations</p>
              <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Our Green Promise</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              We're committed to environmental responsibility. Our mobile locksmith service reduces travel emissions, 
              we use eco-friendly materials, and we're constantly improving our sustainability practices.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-800">100% Mobile Service</span>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <span className="text-sm font-medium text-emerald-800">Eco-Friendly Materials</span>
              </div>
              <div className="flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <span className="text-sm font-medium text-teal-800">Waste Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Network Section */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Strategic <span className="text-rose-600">Partnerships</span> & Network
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading automotive brands, insurance companies, and service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-l-4 border-rose-500">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-200 transition-colors duration-300">
                <div className="text-2xl">🚗</div>
              </div>
              <h3 className="font-bold text-xl text-black mb-4">Automotive Brands</h3>
              <p className="text-gray-600 mb-6">
                Official partnerships with BMW, Mercedes, Audi, Volkswagen, and other leading manufacturers.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-rose-600 font-semibold">Certified Partner</span>
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-rose-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-l-4 border-pink-500">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors duration-300">
                <div className="text-2xl">🛡️</div>
              </div>
              <h3 className="font-bold text-xl text-black mb-4">Insurance Partners</h3>
              <p className="text-gray-600 mb-6">
                Preferred provider for major insurance companies including AA, RAC, and Direct Line.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-pink-600 font-semibold">Preferred Provider</span>
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-pink-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-l-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <div className="text-2xl">🔧</div>
              </div>
              <h3 className="font-bold text-xl text-black mb-4">Service Network</h3>
              <p className="text-gray-600 mb-6">
                Extensive network of garages, dealerships, and automotive service centers.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-pink-600 font-semibold">Network Partner</span>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Partnership Benefits</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Our strategic partnerships ensure you receive the highest quality service, genuine parts, 
              and comprehensive warranty coverage on all work performed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-rose-600" />
                </div>
                <h4 className="font-semibold text-black mb-2">Genuine Parts</h4>
                <p className="text-sm text-gray-600">Access to original manufacturer parts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-pink-600" />
                </div>
                <h4 className="font-semibold text-black mb-2">Extended Warranty</h4>
                <p className="text-sm text-gray-600">Comprehensive coverage on all services</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-black mb-2">Expert Training</h4>
                <p className="text-sm text-gray-600">Regular manufacturer training updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
              Meet Our <span className="text-sky-600">Amazing Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The dedicated professionals behind Key 2 BHP - committed to providing exceptional locksmith services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="font-bold text-2xl text-black mb-4">Family-Run Excellence</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our locksmith business is built on family values and years of automotive expertise. 
                  We take pride in delivering professional, reliable service that you can trust.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700">15+ years of experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700">Certified technicians</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700">24/7 emergency service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700">Customer satisfaction guarantee</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-80 h-96 bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/client.jpg" 
                    alt="Our Professional Team - Key 2 BHP Locksmiths" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce">
                  ✓
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Trusted by 5000+ customers</span>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Innovation Hub Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">
              Future <span className="text-pink-400">Innovation Hub</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Pioneering the next generation of automotive security and locksmith services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500/30 transition-colors duration-300">
                <div className="text-3xl">🤖</div>
              </div>
              <h3 className="font-bold text-xl mb-4 text-pink-300">AI-Powered Diagnostics</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence for instant vehicle security analysis and predictive maintenance.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-pink-300">In Development</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
                <div className="text-3xl">🔮</div>
              </div>
              <h3 className="font-bold text-xl mb-4 text-purple-300">Predictive Security</h3>
              <p className="text-gray-300 mb-6">
                Machine learning algorithms that predict and prevent potential security vulnerabilities.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <span className="text-sm text-purple-300">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors duration-300">
                <div className="text-3xl">🚀</div>
              </div>
              <h3 className="font-bold text-xl mb-4 text-indigo-300">Quantum Security</h3>
              <p className="text-gray-300 mb-6">
                Next-generation quantum encryption for ultra-secure vehicle access and communication.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <span className="text-sm text-indigo-300">Research Phase</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Innovation Timeline</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Our research and development team is constantly working on cutting-edge solutions to revolutionize 
              the automotive locksmith industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="text-lg font-bold">2024</div>
                </div>
                <h4 className="font-semibold text-pink-300 mb-2">AI Integration</h4>
                <p className="text-sm text-gray-400">Smart diagnostics launch</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="text-lg font-bold">2025</div>
                </div>
                <h4 className="font-semibold text-purple-300 mb-2">Predictive Tech</h4>
                <p className="text-sm text-gray-400">ML security systems</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="text-lg font-bold">2026</div>
                </div>
                <h4 className="font-semibold text-indigo-300 mb-2">Quantum Ready</h4>
                <p className="text-sm text-gray-400">Advanced encryption</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="text-lg font-bold">2027</div>
                </div>
                <h4 className="font-semibold text-blue-300 mb-2">Future Tech</h4>
                <p className="text-sm text-gray-400">Next generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">
            Need Auto Locksmith Services Right Now?
          </h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            Don't wait - our expert locksmiths are ready to help. Available 24/7 for emergency services with fast
            response times.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CallButton
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
              title="Immediate Locksmith Service"
              description="Call now for fast, professional locksmith assistance"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now for Immediate Service
            </CallButton>

            <CallButton
              size="lg"
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 bg-transparent"
              title="Get Free Quote"
              description="Contact us for a free, no-obligation quote"
            >
              Get Free Quote
            </CallButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

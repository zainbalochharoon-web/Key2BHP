"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CallButton } from "@/components/call-button"
import { Phone, Heart, Award, Clock, Shield, Star, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Family Values",
      description: "Built on trust, integrity, and genuine care for our customers' needs and satisfaction.",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Years of experience and continuous training ensure the highest quality service standards.",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Fast response times and dependable service when you need us most, day or night.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Fully licensed, insured, and committed to protecting your vehicle and property.",
    },
  ]

  const teamMembers = [
    {
      name: "Male Locksmith",
      role: "Senior Auto Locksmith",
      phone: "+44 7936 755530",
      image: "/male-locksmith-portrait.png", // Updated to use Ultra HD image
      description: "Expert in advanced car key programming and security systems with over 15 years of experience.",
    },
    {
      name: "Female Locksmith",
      role: "Auto Locksmith Specialist",
      phone: "073 0990 3243",
      image: "/female-locksmith-portrait.png", // Updated to use Ultra HD image
      description:
        "Specializes in emergency lockout services and precision lock repairs with exceptional customer care.",
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
            backgroundImage: `url('/family-locksmith-business.png')`, // Updated to use Ultra HD image
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-6">
            About <span className="text-orange-500">Key 2 BHP</span>
            <span className="block mt-2">Auto Locksmith Ltd</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A trusted family-run business providing professional automotive locksmith services with personal care and
            expert craftsmanship you can rely on.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-6">Our Family Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Key 2 BHP Auto Locksmith Ltd was founded as a family business with a simple mission: to provide
                  honest, reliable, and professional automotive locksmith services to our community. What started as a
                  passion for helping people in their time of need has grown into a trusted local business.
                </p>
                <p>
                  Our family-run approach means every customer receives personal attention and care. We understand that
                  being locked out of your vehicle or losing your keys can be stressful, which is why we're committed to
                  providing fast, friendly, and professional service that puts your mind at ease.
                </p>
                <p>
                  With years of combined experience in automotive locksmith services, our team stays up-to-date with the
                  latest technology and techniques. From traditional key cutting to advanced transponder programming, we
                  have the expertise to handle any automotive lock and key challenge.
                </p>
              </div>

              <div className="mt-8">
                <CallButton
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
                  title="Family Business Service"
                  description="Call our family business for personal, professional service"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Our Family Business
                </CallButton>
              </div>
            </div>

            <div className="relative">
              <div
                className="w-full h-96 bg-cover bg-center rounded-2xl shadow-lg"
                style={{
                  backgroundImage: `url('/family-locksmith-business.png')`, // Updated to use Ultra HD image
                }}
              ></div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-black p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="font-serif font-bold text-2xl">15+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">Our Family Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our family business and ensure every customer receives exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-4 text-black">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">
              Meet Our <span className="text-orange-500">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our skilled family team is ready to help with all your automotive locksmith needs, providing professional
              service with a personal touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className="w-full h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  ></div>
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl text-white mb-2">{member.name}</h3>
                    <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <Phone className="h-4 w-4 inline mr-1" />
                        {member.phone}
                      </div>
                      <CallButton
                        className="bg-orange-500 hover:bg-orange-600 text-black font-medium"
                        title={`Call ${member.name}`}
                        description={`Direct line to ${member.name} for immediate assistance`}
                        directPhone={member.phone}
                      >
                        Call Direct
                      </CallButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-6">
                Why Choose Our Family Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                When you choose Key 2 BHP Auto Locksmith Ltd, you're not just getting a service provider – you're
                getting a family business that truly cares about your satisfaction and peace of mind.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-black mb-1">Personal Service</h4>
                    <p className="text-gray-600 text-sm">
                      Direct communication with our family team, not a call center
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-black mb-1">Local Reputation</h4>
                    <p className="text-gray-600 text-sm">
                      Built on trust and word-of-mouth recommendations from satisfied customers
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-black mb-1">Fair Pricing</h4>
                    <p className="text-gray-600 text-sm">
                      Honest, transparent pricing with no hidden fees or surprises
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-black mb-1">Quality Guarantee</h4>
                    <p className="text-gray-600 text-sm">We stand behind our work with a satisfaction guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-black mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">Our family's reputation depends on your satisfaction</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="text-center">
                  <div className="font-serif font-bold text-3xl text-orange-500">100%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction Goal</div>
                </div>
                <div className="text-center">
                  <div className="font-serif font-bold text-3xl text-orange-500">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Availability</div>
                </div>
                <div className="text-center">
                  <div className="font-serif font-bold text-3xl text-orange-500">Fast</div>
                  <div className="text-sm text-gray-600">Response Times</div>
                </div>
              </div>

              <CallButton
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 text-lg rounded-lg transition-all duration-200"
                title="Experience Family Service"
                description="Call now to experience our family-run business approach"
              >
                <Phone className="h-5 w-5 mr-2" />
                Experience Our Family Service
              </CallButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

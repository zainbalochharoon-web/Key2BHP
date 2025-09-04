"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CallButton } from "@/components/call-button"
import { Phone, Clock, Key, Car, Shield, Wrench, Zap, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Key,
      title: "Car Key Programming",
      description:
        "Advanced programming for all modern vehicle keys, transponders, and remote controls using cutting-edge diagnostic equipment.",
      features: [
        "Transponder key programming",
        "Remote control programming",
        "Smart key programming",
        "Key fob replacement",
        "All vehicle makes & models",
      ],
      image: "/car-key-programming.png", // Updated to use Ultra HD image
    },
    {
      icon: Car,
      title: "Emergency Vehicle Lockout",
      description:
        "24/7 emergency response for vehicle lockouts with non-destructive entry techniques and rapid arrival times.",
      features: [
        "Non-destructive entry methods",
        "24/7 emergency availability",
        "Fast response times",
        "All vehicle types",
        "Professional equipment",
      ],
      image: "/emergency-unlock.png", // Updated to use Ultra HD image
    },
    {
      icon: Wrench,
      title: "Lock Replacement & Repair",
      description:
        "Complete lock replacement and repair services for doors, ignitions, and security systems on all vehicle types.",
      features: [
        "Door lock replacement",
        "Ignition lock repair",
        "Trunk lock services",
        "High-security locks",
        "Quality parts guarantee",
      ],
      image: "/lock-replacement.png", // Updated to use Ultra HD image
    },
    {
      icon: Shield,
      title: "Security System Services",
      description:
        "Professional installation, repair, and maintenance of vehicle security systems and anti-theft devices.",
      features: [
        "Alarm system installation",
        "Immobilizer programming",
        "Security diagnostics",
        "Anti-theft solutions",
        "System upgrades",
      ],
      image: "/security-upgrade.png", // Updated to use Ultra HD image
    },
    {
      icon: Zap,
      title: "Key Cutting & Duplication",
      description:
        "Precision key cutting and duplication services for all types of vehicle keys using professional equipment.",
      features: [
        "Laser cut keys",
        "Traditional key cutting",
        "High-security keys",
        "Spare key creation",
        "Same-day service",
      ],
      image: "/key-cutting-service.png", // Updated to use Ultra HD image
    },
    {
      icon: Car,
      title: "Ignition Services",
      description:
        "Complete ignition cylinder repair, replacement, and key programming for all vehicle ignition systems.",
      features: [
        "Ignition cylinder replacement",
        "Stuck key extraction",
        "Ignition repair",
        "Key programming",
        "Switch replacement",
      ],
      image: "/ignition-repair.png", // Updated to use Ultra HD image
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
            backgroundImage: `url('/hero-locksmith.png')`, // Updated to use Ultra HD image
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-6">
            Professional Auto Locksmith
            <span className="block text-orange-500 mt-2">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive automotive locksmith solutions from our expert family-run team. Fast, reliable, and
            professional service you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CallButton
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
              title="Professional Locksmith Service"
              description="Call now for expert automotive locksmith assistance"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call for Service
            </CallButton>

            <CallButton
              size="lg"
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 bg-transparent"
              title="Get Free Quote"
              description="Contact us for a free, no-obligation quote"
            >
              Get Free Quote
            </CallButton>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">Our Expert Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From emergency lockouts to advanced programming, we provide comprehensive automotive locksmith solutions
              with professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div
                    className="w-full md:w-2/5 h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  ></div>

                  <div className="w-full md:w-3/5 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="bg-orange-500 p-2 rounded-lg">
                          <service.icon className="h-6 w-6 text-black" />
                        </div>
                        <CardTitle className="font-serif text-xl text-black">{service.title}</CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <CallButton
                        className="bg-orange-500 hover:bg-orange-600 text-black font-medium w-full"
                        title={`${service.title} Service`}
                        description={`Call now for professional ${service.title.toLowerCase()} service`}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call for This Service
                      </CallButton>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-500 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-black p-4 rounded-full">
                <Clock className="h-12 w-12 text-orange-500" />
              </div>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-4">Emergency Locksmith Service</h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Locked out of your vehicle? Need immediate assistance? Our emergency locksmith service is available 24/7
              with rapid response times.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CallButton
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
                title="Emergency Locksmith Service"
                description="Call now for immediate emergency locksmith assistance"
              >
                <Phone className="h-5 w-5 mr-2" />
                Emergency Call Now
              </CallButton>

              <div className="text-black font-medium">Available 24/7 • Fast Response • Professional Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas & Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-black mb-6">Why Choose Our Services?</h2>
              <p className="text-lg text-gray-600 mb-8">
                As a family-run business, we combine professional expertise with personal service. Every job is
                completed to the highest standards with a satisfaction guarantee.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700 font-medium">Fully insured and licensed professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700 font-medium">Latest diagnostic and programming equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700 font-medium">Competitive pricing with no hidden fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700 font-medium">Satisfaction guarantee on all work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700 font-medium">Fast response times and flexible scheduling</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-serif font-bold text-2xl text-black mb-6 text-center">Get Your Free Quote Today</h3>
              <p className="text-gray-600 text-center mb-8">
                Contact our expert team for a free, no-obligation quote on any of our services.
              </p>

              <div className="space-y-4">
                <CallButton
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 text-lg rounded-lg transition-all duration-200"
                  title="Free Quote Request"
                  description="Call now for a free, no-obligation quote"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Free Quote
                </CallButton>

                <div className="text-center text-sm text-gray-500">
                  <p>Male Locksmith: +44 7936 755530</p>
                  <p>Female Locksmith: 073 0990 3243</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CallButton } from "@/components/call-button"
import { Phone, Clock, Zap, AlertTriangle, Car, Key, Shield, CheckCircle } from "lucide-react"

export default function EmergencyPage() {
  const emergencyServices = [
    {
      icon: Car,
      title: "Vehicle Lockout",
      description: "Locked out of your car? We'll get you back in quickly and safely without damage.",
      response: "15-30 minutes",
    },
    {
      icon: Key,
      title: "Lost Car Keys",
      description: "Lost your only set of keys? We can cut and program new keys on-site.",
      response: "30-45 minutes",
    },
    {
      icon: AlertTriangle,
      title: "Broken Key Extraction",
      description: "Key broken in the lock or ignition? We'll extract it and provide a replacement.",
      response: "20-40 minutes",
    },
    {
      icon: Shield,
      title: "Ignition Problems",
      description: "Can't start your car due to ignition issues? We provide immediate solutions.",
      response: "30-60 minutes",
    },
  ]

  const whyChooseEmergency = [
    "24/7 availability - day or night",
    "Fast response times across the area",
    "Non-destructive entry methods",
    "Fully equipped mobile service",
    "Experienced emergency specialists",
    "Competitive emergency rates",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Emergency Hero Section */}
      <section className="relative py-20 bg-red-600 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/emergency-response-hero.png')`, // Updated to use correct Ultra HD emergency hero image
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500 p-4 rounded-full animate-pulse">
              <AlertTriangle className="h-12 w-12 text-black" />
            </div>
          </div>

          <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
            EMERGENCY
            <span className="block text-orange-500 mt-2">LOCKSMITH</span>
          </h1>

          <p className="text-2xl sm:text-3xl mb-8 font-bold">LOCKED OUT? LOST KEYS? BROKEN KEY?</p>

          <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
            Don't panic! Our emergency locksmith team is available 24/7 with fast response times to get you back on the
            road quickly and safely.
          </p>

          {/* Emergency Call Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <CallButton
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-12 py-6 text-2xl rounded-lg transition-all duration-200 transform hover:scale-105 shadow-2xl animate-pulse"
              title="EMERGENCY LOCKSMITH"
              description="Call now for immediate emergency locksmith assistance"
            >
              <Phone className="h-8 w-8 mr-3" />
              CALL NOW - EMERGENCY
            </CallButton>
          </div>

          <div className="text-center">
            <div className="text-orange-500 font-bold text-lg mb-2">AVAILABLE 24/7</div>
            <div className="text-white text-sm">Male Locksmith: +44 7936 755530 | Female Locksmith: 073 0990 3243</div>
          </div>
        </div>
      </section>

      {/* Fast Response Banner */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-8 w-8 text-orange-500" />
              <div>
                <div className="font-bold text-2xl text-orange-500">15-30 MIN</div>
                <div className="text-sm">Average Response Time</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Zap className="h-8 w-8 text-orange-500" />
              <div>
                <div className="font-bold text-2xl text-orange-500">24/7</div>
                <div className="text-sm">Emergency Availability</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-orange-500" />
              <div>
                <div className="font-bold text-2xl text-orange-500">NO DAMAGE</div>
                <div className="text-sm">Safe Entry Methods</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-black mb-4">
              Emergency Services <span className="text-orange-500">Available Now</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whatever your automotive locksmith emergency, our expert team is ready to help with fast, professional
              service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyServices.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                      <service.icon className="h-8 w-8 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-2xl mb-3 text-black">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <Clock className="h-4 w-4 inline mr-1" />
                          Response: {service.response}
                        </div>
                        <CallButton
                          className="bg-red-600 hover:bg-red-700 text-white font-bold"
                          title={`Emergency ${service.title}`}
                          description={`Call now for immediate ${service.title.toLowerCase()} assistance`}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Emergency Call
                        </CallButton>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-4xl text-black mb-6">What to Expect When You Call</h2>
              <p className="text-lg text-gray-600 mb-8">
                When you contact our emergency service, here's exactly what happens to get you the fastest possible
                help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-1">Immediate Response</h4>
                    <p className="text-gray-600 text-sm">
                      Your call is answered immediately by our emergency team, not a call center.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-1">Quick Assessment</h4>
                    <p className="text-gray-600 text-sm">
                      We quickly assess your situation and dispatch the nearest available locksmith.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-1">Fast Arrival</h4>
                    <p className="text-gray-600 text-sm">
                      Our locksmith arrives within 15-30 minutes with all necessary equipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-1">Professional Solution</h4>
                    <p className="text-gray-600 text-sm">
                      We resolve your emergency quickly and safely, getting you back on the road.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-600 text-white rounded-2xl p-8 text-center">
              <div className="mb-6">
                <AlertTriangle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h3 className="font-serif font-bold text-3xl mb-4">Emergency Situation?</h3>
                <p className="text-lg mb-8">Don't wait - every minute counts in an emergency!</p>
              </div>

              <div className="space-y-4 mb-8">
                <CallButton
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 text-xl rounded-lg transition-all duration-200 transform hover:scale-105"
                  title="CALL MALE LOCKSMITH NOW"
                  description="Emergency line to male locksmith for immediate assistance"
                  directPhone="+44 7936 755530"
                >
                  <Phone className="h-6 w-6 mr-2" />
                  CALL MALE LOCKSMITH NOW
                </CallButton>

                <CallButton
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 text-xl rounded-lg transition-all duration-200 transform hover:scale-105"
                  title="CALL FEMALE LOCKSMITH NOW"
                  description="Emergency line to female locksmith for immediate assistance"
                  directPhone="073 0990 3243"
                >
                  <Phone className="h-6 w-6 mr-2" />
                  CALL FEMALE LOCKSMITH NOW
                </CallButton>
              </div>

              <div className="text-sm text-gray-200">
                <p>Available 24 hours a day, 7 days a week</p>
                <p>Fast response • Professional service • Fair pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Emergency Service */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl mb-4">
              Why Choose Our <span className="text-orange-500">Emergency Service</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              When you're in an emergency, you need a locksmith you can trust to respond quickly and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseEmergency.map((reason, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <span className="text-white">{reason}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <CallButton
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-12 py-4 text-xl rounded-lg transition-all duration-200 transform hover:scale-105"
              title="GET EMERGENCY HELP NOW"
              description="Call now for immediate emergency locksmith assistance"
            >
              <Phone className="h-6 w-6 mr-2" />
              GET EMERGENCY HELP NOW
            </CallButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

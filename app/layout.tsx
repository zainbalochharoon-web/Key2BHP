import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title:
    "Key 2 BHP Auto Locksmith Ltd - Professional Car Key & Auto Locksmith Services",
  description:
    "Family-run auto locksmith business providing expert car key programming, lock replacement, and emergency unlock services. Fast response time you can trust.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png", // ✅ favicon added
  },
}

// ✅ JSON-LD Schema
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.key2bhpautolocksmith.co.uk/#website",
      "url": "https://www.key2bhpautolocksmith.co.uk/",
      "name": "Key 2 BHP Auto Locksmith Ltd",
      "publisher": {
        "@id": "https://www.key2bhpautolocksmith.co.uk/#organization"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.key2bhpautolocksmith.co.uk/#webpage",
      "url": "https://www.key2bhpautolocksmith.co.uk/",
      "name": "Key 2 BHP Auto Locksmith - Manchester Emergency Car Locksmith",
      "description":
        "Trusted 24/7 emergency auto locksmith in Manchester. Car key programming, lockouts, ignition repair. Fast mobile response across Greater Manchester.",
      "isPartOf": {
        "@id": "https://www.key2bhpautolocksmith.co.uk/#website"
      },
      "about": {
        "@id": "https://www.key2bhpautolocksmith.co.uk/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.key2bhpautolocksmith.co.uk/#breadcrumbs"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "Organization",
      "@id": "https://www.key2bhpautolocksmith.co.uk/#organization",
      "name": "Key 2 BHP Auto Locksmith Ltd",
      "url": "https://www.key2bhpautolocksmith.co.uk/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.key2bhpautolocksmith.co.uk/path-to-logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44 7936 755530",
        "contactType": "Customer Service",
        "availableLanguage": "English",
        "areaServed": "GB"
      },
      "sameAs": ["https://share.google/0lPYFJ5gusLZ2glkc"]
    },
    {
      "@type": "AutoService",
      "@id": "https://www.key2bhpautolocksmith.co.uk/#business",
      "name": "Key 2 BHP Auto Locksmith Ltd",
      "image": "https://www.key2bhpautolocksmith.co.uk/path-to-image.jpg",
      "priceRange": "££",
      "telephone": "+44 7936 755530",
      "email": "info@key2bhpautolocksmith.co.uk",
      "url": "https://www.key2bhpautolocksmith.co.uk/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "34 Laburnum Road",
        "addressLocality": "Denton",
        "addressRegion": "Manchester",
        "postalCode": "M34 2NE",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 53.4549,
        "longitude": -2.1020
      },
      "areaServed": {
        "@type": "Place",
        "name":
          "Manchester, Greater Manchester, Stockport, Tameside, Oldham, Salford, Rochdale, Bury, Bolton"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Auto Locksmith Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Emergency Vehicle Unlocking" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Lost Car Key Replacement" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Car Key Programming" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Remote Key Fob Repair" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Ignition Lock Repair" }
          }
        ]
      },
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Mobile Payment"],
      "review": {
        "@type": "Review",
        "author": { "@type": "Person", "name": "John D." },
        "datePublished": "2025-07-10",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody":
          "Fast and reliable locksmith service. Got me back into my car within 20 minutes. Highly recommended!"
      },
      "sameAs": ["https://share.google/0lPYFJ5gusLZ2glkc"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.key2bhpautolocksmith.co.uk/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.key2bhpautolocksmith.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.key2bhpautolocksmith.co.uk/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contact",
          "item": "https://www.key2bhpautolocksmith.co.uk/contact-us"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer 24/7 emergency car locksmith service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, we operate 24/7 across Greater Manchester and surrounding areas. Call us any time and we'll get to you quickly."
          }
        },
        {
          "@type": "Question",
          "name": "Can you replace lost car keys without the original?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Absolutely. We can cut and program replacement keys for most makes and models, even if you’ve lost the original."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas do you cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We cover all of Greater Manchester including Stockport, Salford, Bury, Oldham, Rochdale, Tameside, Bolton and more."
          }
        }
      ]
    }
  ]
} as const

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      className={`${workSans.variable} ${openSans.variable} antialiased`}
    >
      <body className={`${workSans.variable} ${openSans.variable} antialiased`}>
        {/* ✅ Inject Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  )
}

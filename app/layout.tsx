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
  title: "Key 2 BHP Auto Locksmith Ltd - Professional Car Key & Auto Locksmith Services",
  description:
    "Family-run auto locksmith business providing expert car key programming, lock replacement, and emergency unlock services. Fast response time you can trust.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body className={`${workSans.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

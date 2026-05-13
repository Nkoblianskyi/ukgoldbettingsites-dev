import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Serif_4, Barlow_Condensed } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source-serif",
})

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
})

export const metadata: Metadata = {
  title: "UK Gold Betting Sites - Best UK Bookmakers 2026",
  description:
    "Independent ranking of the best UKGC-licensed betting sites in the United Kingdom. Expert reviews, welcome offers, and unbiased ratings for UK bettors. ukgoldbettingsites.com",
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#0f0f0f",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSerif.variable} ${barlow.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full">
          {children}

        </div>
      </body>
    </html>
  )
}

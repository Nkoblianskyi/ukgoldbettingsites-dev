"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { InfoSections } from "@/components/info-sections"
import { TopSitesModal } from "@/components/top-sites-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <TopSitesModal />
      <Header />
      <Hero />
      <RatingSection />
      <InfoSections />
      <CookieBanner />
      <TopSitesModal />
      <Footer />

    </div>
  )
}

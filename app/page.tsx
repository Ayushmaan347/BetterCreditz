import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import FeaturesSection from "@/components/sections/features-section"
import StatsSection from "@/components/sections/stats-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import CTASection from "@/components/sections/cta-section"
import Footer from "@/components/layout/footer"
import CreditScoreChecker from "@/components/tools/credit-score-checker"
import NewsletterSection from "@/components/sections/newsletter-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <CreditScoreChecker />
        <FeaturesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

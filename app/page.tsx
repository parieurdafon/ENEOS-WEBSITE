import { HeroSection } from "@/components/home/hero-section"
import { QuickQuoteForm } from "@/components/home/quick-quote-form"
import { AboutSection } from "@/components/home/about-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PartnersSection } from "@/components/home/partners-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickQuoteForm />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <PartnersSection />
    </>
  )
}

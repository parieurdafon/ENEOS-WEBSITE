import Head from 'next/head'
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
      <Head>
        {/* SEO Meta Tags */}
        <title>ENEOS HABITAT - Diagnostic immobilier et étude thermique Bordeaux</title>
        <meta name="description" content="ENEOS HABITAT propose des diagnostics immobiliers, études thermiques et audits énergétiques à Bordeaux et en Gironde. Obtenez un devis rapide et sécurisé." />
        <meta name="keywords" content="diagnostic immobilier, DPE, audit énergétique, étude thermique, Bordeaux, Gironde, vente maison, location appartement" />
        <meta name="author" content="ENEOS HABITAT" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="ENEOS HABITAT - Diagnostic immobilier et étude thermique Bordeaux" />
        <meta property="og:description" content="Obtenez vos diagnostics immobiliers et études thermiques rapidement et en toute sécurité avec ENEOS HABITAT, expert à Bordeaux et Gironde." />
        <meta property="og:image" content="https://www.eneoshabitat.fr/logo.png" /> {/* Remplace par ton logo réel */}
        <meta property="og:url" content="https://www.eneoshabitat.fr" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ENEOS HABITAT - Diagnostic immobilier Bordeaux" />
        <meta name="twitter:description" content="Faites vos diagnostics immobiliers et études thermiques rapidement et en toute sécurité avec ENEOS HABITAT." />
        <meta name="twitter:image" content="https://www.eneoshabitat.fr/logo.png" />

        <link rel="canonical" href="https://www.eneoshabitat.fr" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> {/* adapte si nécessaire */}
      </Head>

      {/* Contenu du site */}
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
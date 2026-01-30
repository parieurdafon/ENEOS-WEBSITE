"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home, Key, Building } from "lucide-react"

const slides = [
  {
    image: "/images/hero-1.jpeg",
    title: "Tous vos diagnostics immobiliers",
    subtitle: "en région bordelaise",
    description: "ENEOS HABITAT réalise tous vos diagnostics obligatoires avec expertise et professionnalisme",
    cta: "Contactez notre équipe",
    ctaLink: "/contact",
    icon: Home,
  },
  {
    image: "/images/hero-2.jpg",
    title: "Réaliser le diagnostic",
    subtitle: "avant vente de votre bien",
    description: "Obtenez tous les documents obligatoires pour vendre sereinement",
    cta: "Vos obligations vente",
    ctaLink: "/vente",
    icon: Key,
  },
  {
    image: "/images/hero-3.jpg",
    title: "Obtenez le diagnostic",
    subtitle: "avant location de votre bien",
    description: "Mettez en location votre bien en toute conformité",
    cta: "Vos obligations location",
    ctaLink: "/location",
    icon: Building,
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e35]/90 via-[#1a2e35]/70 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <div
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: index === currentSlide ? "200ms" : "0ms" }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
                    <slide.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">ENEOS HABITAT</span>
                  </div>
                </div>

                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: index === currentSlide ? "300ms" : "0ms" }}
                >
                  {slide.title}
                </h1>

                <h2
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d8a5e] mb-6 transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: index === currentSlide ? "400ms" : "0ms" }}
                >
                  {slide.subtitle}
                </h2>

                <p
                  className={`text-lg text-white/80 mb-8 max-w-xl transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: index === currentSlide ? "500ms" : "0ms" }}
                >
                  {slide.description}
                </p>

                <div
                  className={`flex flex-wrap gap-4 transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: index === currentSlide ? "600ms" : "0ms" }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#2d8a5e] hover:bg-[#238a50] text-white px-8"
                  >
                    <Link href={slide.ctaLink}>{slide.cta}</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-[#1a2e35]"
                  >
                    <Link href="/devis">Devis gratuit</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors flex items-center justify-center"
        aria-label="Diapositive précédente"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors flex items-center justify-center"
        aria-label="Diapositive suivante"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#2d8a5e] w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest rotate-90 origin-center translate-x-4">SCROLL</span>
        <div className="w-px h-12 bg-white/30 mt-4">
          <div className="w-full h-1/2 bg-[#2d8a5e] animate-pulse" />
        </div>
      </div>
    </section>
  )
}

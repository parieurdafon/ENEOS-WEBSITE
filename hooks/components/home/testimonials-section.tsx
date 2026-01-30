"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marie D.",
    role: "Propriétaire à Bordeaux",
    content: "Service impeccable ! Intervention rapide et rapport très détaillé. Je recommande ENEOS HABITAT pour tous vos diagnostics immobiliers. L'équipe est professionnelle et très réactive.",
    rating: 5,
  },
  {
    name: "Jean-Pierre L.",
    role: "Agent immobilier",
    content: "Excellent partenaire pour notre agence. Les diagnostics sont toujours livrés dans les délais et les rapports sont clairs pour nos clients. Une collaboration de confiance depuis plusieurs mois.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    role: "Propriétaire à Cadaujac",
    content: "Très satisfaite des services d'ENEOS HABITAT. Le diagnostiqueur a pris le temps de m'expliquer chaque point du rapport. Prix compétitifs et travail de qualité.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    role: "Investisseur immobilier",
    content: "Je travaille régulièrement avec ENEOS HABITAT pour mes biens locatifs. Toujours fiables, professionnels et disponibles. Je les recommande sans hésitation.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-[#2d8a5e]/10 text-[#2d8a5e] rounded-full text-sm font-medium mb-4">
            TÉMOIGNAGES
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ce que disent <span className="text-[#2d8a5e]">nos clients</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez les retours de nos clients satisfaits à travers la Gironde.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
              <Quote className="h-12 w-12 text-[#2d8a5e]/20 mb-6" />
              
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                {testimonials[currentIndex].content}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-[#2d8a5e] hover:bg-[#2d8a5e] hover:text-white transition-all flex items-center justify-center"
                    aria-label="Témoignage précédent"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-[#2d8a5e] hover:bg-[#2d8a5e] hover:text-white transition-all flex items-center justify-center"
                    aria-label="Témoignage suivant"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#2d8a5e] w-6"
                      : "bg-gray-300 hover:bg-[#2d8a5e]/50"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

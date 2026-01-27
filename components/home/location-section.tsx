"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Navigation, Building2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const zones = [
  "Cadaujac",
  "Bordeaux",
  "Pessac",
  "Mérignac",
  "Talence",
  "Gradignan",
  "Villenave-d'Ornon",
  "Bègles",
  "Léognan",
  "Martillac",
  "La Brède",
  "Saint-Médard-d'Eyrans",
]

export function LocationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2d8a5e]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[#2d8a5e]/10 text-[#2d8a5e] rounded-full text-sm font-semibold mb-4">
            NOTRE LOCALISATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Où nous trouver ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Basés à Cadaujac, nous intervenons dans toute la région bordelaise pour vos diagnostics immobiliers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map & Address */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
              <div className="aspect-video bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45296.77485677!2d-0.5468!3d44.7518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527c2f0bc3e8f%3A0x406651748b3e8d0!2s33140%20Cadaujac!5e0!3m2!1sfr!2sfr!4v1705678901234!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  title="Localisation ENEOS HABITAT à Cadaujac"
                />
              </div>
              {/* Map overlay card */}
              <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#2d8a5e] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">ENEOS HABITAT</h3>
                    <p className="text-sm text-muted-foreground">33140 Cadaujac, France</p>
                    <a 
                      href="https://www.google.com/maps/dir//33140+Cadaujac" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-[#2d8a5e] hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      <Navigation className="h-3 w-3" />
                      Itinéraire
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#1a5f3c] to-[#2d8a5e] rounded-xl p-6 text-white">
                <Phone className="h-8 w-8 mb-4 opacity-80" />
                <p className="text-white/70 text-sm mb-1">Téléphone</p>
                <a href="tel:+33661070891" className="text-xl font-bold hover:underline">
                  +33 6 61 07 08 91
                </a>
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-6 text-white">
                <Mail className="h-8 w-8 mb-4 opacity-80" />
                <p className="text-white/70 text-sm mb-1">Email</p>
                <a href="mailto:Contact@eneoshabitat.fr" className="text-lg font-bold hover:underline break-all">
                  contact@eneoshabitat.fr
                </a>
              </div>
            </div>
          </div>

          {/* Info & Zones */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Company Info */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/logo.png"
                  alt="ENEOS HABITAT"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground">ENEOS HABITAT</h3>
                  <p className="text-muted-foreground">Études thermiques et diagnostics immobiliers</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-[#2d8a5e] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">SIREN</p>
                    <p className="text-muted-foreground">989 825 484</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#2d8a5e] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">33140 Cadaujac, France</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#2d8a5e] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Horaires</p>
                    <p className="text-muted-foreground">Du lundi au samedi de 09h à 19h</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-muted-foreground mb-3">Partenaire assurance</p>
                <span className="inline-block px-4 py-2 bg-white rounded-lg font-semibold text-[#2d8a5e] shadow-sm">
                  KLARITY
                </span>
              </div>
            </div>

            {/* Zones d'intervention */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#2d8a5e]" />
                Zones d'intervention
              </h3>
              <div className="flex flex-wrap gap-2">
                {zones.map((zone, index) => (
                  <span
                    key={zone}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-[#2d8a5e] hover:text-white rounded-full text-sm transition-colors cursor-default"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {zone}
                  </span>
                ))}
                <span className="px-3 py-1.5 bg-[#2d8a5e]/10 text-[#2d8a5e] rounded-full text-sm font-medium">
                  + toute la Gironde
                </span>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-[#2d8a5e]" />
                  <span>Intervention rapide sous 48h</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="flex-1 bg-[#2d8a5e] hover:bg-[#238a50] text-white">
                <Link href="/contact">Nous contacter</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1 bg-transparent">
                <Link href="/devis">Devis gratuit</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

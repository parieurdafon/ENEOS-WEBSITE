import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Clock, Shield } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "Expertise certifiée",
    description: "Diagnostiqueurs certifiés et assurés",
  },
  {
    icon: Clock,
    title: "Intervention rapide",
    description: "RDV sous 48h, rapport sous 24h",
  },
  {
    icon: Shield,
    title: "Qualité garantie",
    description: "Diagnostics conformes et rigoureux",
  },
]

const features = [
  "Diagnostiqueurs certifiés et expérimentés",
  "Rapports clairs et détaillés",
  "Tarifs compétitifs et transparents",
  "Intervention rapide en Gironde",
  "Accompagnement personnalisé",
  "Disponibilité 6j/7",
]

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
         {/* Image Side */}
<div className="relative">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
    <Image
      src="/images/about.jpeg"
      alt="Expert ENEOS HABITAT"
      width={600}
      height={500}
      className="w-full h-[300px] lg:h-[400px] object-cover"  // ← Réduit de 400/500 à 300/400
    />
    {/* Experience Badge */}
    <div className="absolute -bottom-6 -right-6 bg-[#2d8a5e] text-white p-6 rounded-2xl shadow-xl flex items-center justify-center min-w-[160px]">  {/* ← p-8 → p-6, min-w-[180px] → min-w-[160px] */}
      <div className="text-center">
        <div className="text-3xl font-bold mb-1">+10</div>  {/* ← text-4xl → text-3xl */}
        <div className="text-sm text-white/90 whitespace-nowrap">ans d'expérience</div>
      </div>
    </div>
  </div>
  
  {/* Decorative elements */}
  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#2d8a5e]/10 rounded-2xl -z-10" />
  <div className="absolute bottom-12 -left-12 w-32 h-32 bg-orange-500/10 rounded-full -z-10" />
</div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1 bg-[#2d8a5e]/10 text-[#2d8a5e] rounded-full text-sm font-medium mb-4">
              Bienvenue
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Bienvenue chez <span className="text-[#2d8a5e]">ENEOS HABITAT</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">ENEOS HABITAT</strong> est votre partenaire de confiance pour réaliser des 
              <strong className="text-foreground"> diagnostics immobiliers</strong> en Gironde. Notre cabinet est situé à Cadaujac, 
              proche de Bordeaux, mais nous intervenons dans toute la région.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Vous cherchez à vendre ou à louer votre logement ? Nous nous occupons de réaliser les diagnostics 
              immobiliers obligatoires avec rigueur et professionnalisme. Notre objectif est de vous fournir un 
              Dossier de Diagnostic Technique complet et conforme.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d8a5e] shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[#2d8a5e] hover:bg-[#238a50] text-white"
            >
              <Link href="/a-propos">En savoir plus sur nous</Link>
            </Button>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-[#2d8a5e]/5 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-[#2d8a5e]/10 flex items-center justify-center shrink-0">
                <item.icon className="h-7 w-7 text-[#2d8a5e]" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
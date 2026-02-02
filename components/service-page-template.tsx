import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, FileText, Phone, ArrowRight, Shield, Calendar } from "lucide-react"

interface ServiceInfo {
  title: string
  subtitle: string
  description: string
  longDescription: string[]
  image: string
  obligatoryFor: string[]
  validity: string
  validityDetails: string
  applicableTo: string
  price: string
  documents: string[]
  process: {
    title: string
    description: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
}

export function ServicePageTemplate({ service }: { service: ServiceInfo }) {
  return (
    <>
      {/* Hero Section - IMAGE PLUS VISIBLE */}
      <section className="relative py-20 lg:py-28 bg-[#1a2e35] overflow-hidden">
        {/* Image de fond - opacité augmentée de 20% à 50% */}
        <div className="absolute inset-0">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover opacity-100"
            priority
          />
          {/* Overlay allégé - de 95% à 70-85% pour voir l'image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e35]/60 via-[#1a2e35]/40 to-[#1a2e35]/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#2d8a5e]/90 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4 border border-white/30">
  DIAGNOSTIC OBLIGATOIRE
</span>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow">
              {service.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#2d8a5e] hover:bg-[#238a50] text-white shadow-xl">
                <Link href="/devis">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#1a2e35] shadow-xl">
                <a href="tel:+33661070891">
                  <Phone className="mr-2 h-5 w-5" />
                  +33 6 61 07 08 91
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="relative z-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2d8a5e]/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-[#2d8a5e]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Validité</p>
                  <p className="font-bold text-foreground">{service.validity}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Applicable aux</p>
                  <p className="font-bold text-foreground">{service.applicableTo}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Intervention</p>
                  <p className="font-bold text-foreground">Sous 48h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {"Qu'est-ce que le"} {service.title} ?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {service.longDescription.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Obligatory For */}
              <div className="mt-10 p-6 bg-[#2d8a5e]/5 rounded-xl border border-[#2d8a5e]/20">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#2d8a5e]" />
                  Obligatoire pour
                </h3>
                <ul className="space-y-3">
                  {service.obligatoryFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#2d8a5e] mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Validity Details */}
              <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                  Durée de validité
                </h3>
                <p className="text-muted-foreground">{service.validityDetails}</p>
              </div>

              {/* Process */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Comment se déroule le diagnostic ?
                </h3>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-[#2d8a5e] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Questions fréquentes
                </h3>
                <div className="space-y-4">
                  {service.faq.map((item, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-semibold text-foreground mb-2">{item.question}</h4>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* CTA Card */}
                <div className="bg-[#1a2e35] rounded-2xl p-8 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Besoin de ce diagnostic ?</h3>
                  <p className="text-white/80 mb-6">
                    Obtenez votre devis gratuit en quelques clics et bénéficiez {"d'une"} intervention rapide.
                  </p>
                  <Button asChild className="w-full bg-[#2d8a5e] hover:bg-[#238a50] text-white">
                    <Link href="/devis">Devis gratuit</Link>
                  </Button>
                  <div className="mt-4 text-center">
                    <a href="tel:+33661070891" className="text-[#2d8a5e] hover:underline">
                      ou appelez le +33 6 61 07 08 91
                    </a>
                  </div>
                </div>

                {/* Documents Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border">
                  <h3 className="font-bold text-foreground mb-4">Documents fournis</h3>
                  <ul className="space-y-3">
                    {service.documents.map((doc, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#2d8a5e]" />
                        <span className="text-muted-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="mt-6 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Découvrez nos autres diagnostics</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "DPE", href: "/services/dpe" },
              { name: "Amiante", href: "/services/amiante" },
              { name: "Plomb", href: "/services/plomb" },
              { name: "Électricité", href: "/services/electricite" },
              { name: "Gaz", href: "/services/gaz" },
              { name: "Termites", href: "/services/termites" },
              { name: "ERP", href: "/services/erp" },
              { name: "Loi Carrez", href: "/services/carrez" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-[#2d8a5e] hover:text-white transition-all"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
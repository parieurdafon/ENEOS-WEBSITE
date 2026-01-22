import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Amiante",
    description: "Recherche d'Amiante pour les biens dont le permis de construire a été délivré avant le 1er Juillet 1997, obligations dans le cadre d'une vente ou d'une location.",
    image: "/images/amiante.jpg",
    href: "/services/amiante",
  },
  {
    title: "Plomb",
    description: "Recherche de Plomb pour les biens dont le permis de construire a été délivré avant 1949, obligations dans le cadre d'une vente ou d'une location.",
    image: "/images/plomb.jpg",
    href: "/services/plomb",
  },
  {
    title: "Termites",
    description: "Diagnostic d'état relatif à la présence de termites selon une zone infestée identifiée par arrêté préfectorale. Obligation dans le cadre d'une vente.",
    image: "/images/termites.jpg",
    href: "/services/termites",
  },
  {
    title: "Électricité",
    description: "Diagnostic Électricité sur les biens immobiliers dont l'installation a plus de 15 ans. Obligation dans le cadre d'une vente ou location.",
    image: "/images/electricite.jpg",
    href: "/services/electricite",
  },
  {
    title: "Gaz",
    description: "Diagnostic Gaz sur les biens immobiliers dont l'installation a plus de 15 ans. Obligation dans le cadre d'une vente ou location.",
    image: "/images/gaz.jpg",
    href: "/services/gaz",
  },
  {
    title: "DPE",
    description: "Diagnostic de performance énergétique sur tout biens immobilier disposant d'un moyen de chauffage. Obligation dans le cadre d'une vente ou location.",
    image: "/images/dpe.jpg",
    href: "/services/dpe",
  },
  {
    title: "ERP",
    description: "État des risques et pollutions selon la localisation de votre bien défini par arrêté préfectorale. Obligation dans le cadre d'une vente ou location.",
    image: "/images/erp.jpg",
    href: "/services/erp",
  },
  {
    title: "Loi Carrez",
    description: "Mesure de la surface privative pour les biens situé en copropriété. Obligation dans le cadre d'une vente.",
    image: "/images/carrez.jpg",
    href: "/services/carrez",
  },
  {
    title: "Loi Boutin",
    description: "Mesure de la surface habitable pour les maisons individuelles ou les appartements. Obligation dans le cadre d'une location.",
    image: "/images/carrez.jpg",
    href: "/services/boutin",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-[#2d8a5e]/10 text-[#2d8a5e] rounded-full text-sm font-medium mb-4">
            LES DIAGNOSTICS
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Les prestations <span className="text-[#2d8a5e]">obligatoires</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez tous les diagnostics immobiliers obligatoires pour la vente ou la location de votre bien.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-[#2d8a5e] font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2d8a5e] hover:bg-[#238a50] text-white rounded-xl font-semibold transition-colors"
          >
            Devis en ligne 24/24h
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

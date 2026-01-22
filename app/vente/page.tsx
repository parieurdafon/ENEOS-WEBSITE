import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Home, AlertTriangle, FileCheck } from "lucide-react"

const obligatoryDiagnostics = [
  {
    title: "DPE - Diagnostic de Performance Énergétique",
    description: "Obligatoire pour toute vente. Évalue la consommation énergétique et l'impact environnemental du bien.",
    validity: "10 ans",
    href: "/services/dpe",
  },
  {
    title: "Amiante",
    description: "Obligatoire pour les biens dont le permis de construire a été délivré avant le 1er juillet 1997.",
    validity: "Illimité si négatif",
    href: "/services/amiante",
  },
  {
    title: "Plomb (CREP)",
    description: "Obligatoire pour les biens construits avant le 1er janvier 1949.",
    validity: "1 an si positif, illimité si négatif",
    href: "/services/plomb",
  },
  {
    title: "Électricité",
    description: "Obligatoire si l'installation électrique a plus de 15 ans.",
    validity: "3 ans",
    href: "/services/electricite",
  },
  {
    title: "Gaz",
    description: "Obligatoire si l'installation gaz a plus de 15 ans.",
    validity: "3 ans",
    href: "/services/gaz",
  },
  {
    title: "Termites",
    description: "Obligatoire dans les zones déclarées par arrêté préfectoral (Gironde concernée).",
    validity: "6 mois",
    href: "/services/termites",
  },
  {
    title: "ERP - État des Risques et Pollutions",
    description: "Obligatoire pour tous les biens, informe sur les risques naturels, miniers et technologiques.",
    validity: "6 mois",
    href: "/services/erp",
  },
  {
    title: "Loi Carrez",
    description: "Obligatoire pour les biens en copropriété. Mesure la surface privative.",
    validity: "Illimité (sauf travaux)",
    href: "/services/carrez",
  },
]

export default function VentePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-[#1a2e35] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-1.jpg"
            alt="Vente immobilière"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
              <Home className="h-5 w-5" />
              <span className="text-sm font-medium">VENTE IMMOBILIÈRE</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Diagnostics obligatoires pour la <span className="text-[#2d8a5e]">vente</span> de votre bien
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Vendez votre bien en toute sérénité avec un Dossier de Diagnostic Technique complet et conforme.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#2d8a5e] hover:bg-[#238a50] text-white">
                <Link href="/devis">
                  Obtenir mon devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1a2e35]">
                <a href="tel:+33661070891">Appeler maintenant</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-amber-50 border border-amber-200 rounded-xl mb-8">
              <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Important</h3>
                <p className="text-amber-700">
                  Le DDT (Dossier de Diagnostic Technique) doit être fourni à l&apos;acquéreur au plus tard lors de la signature de la promesse de vente ou de l&apos;acte authentique. L&apos;absence de ces documents peut entraîner l&apos;annulation de la vente ou une diminution du prix.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Pourquoi réaliser vos diagnostics avant la vente ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Sécuriser votre transaction immobilière",
                "Informer l'acquéreur sur l'état du bien",
                "Éviter les litiges post-vente",
                "Respecter vos obligations légales",
                "Valoriser votre bien sur le marché",
                "Accélérer le processus de vente",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2d8a5e] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 bg-[#2d8a5e]/10 text-[#2d8a5e] rounded-full text-sm font-medium mb-4">
              VOS OBLIGATIONS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Les diagnostics obligatoires pour la vente
            </h2>
            <p className="text-muted-foreground text-lg">
              Découvrez tous les diagnostics requis pour constituer votre DDT
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {obligatoryDiagnostics.map((diag, index) => (
              <Link
                key={index}
                href={diag.href}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d8a5e]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#2d8a5e] transition-colors">
                    <FileCheck className="h-6 w-6 text-[#2d8a5e] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-[#2d8a5e] transition-colors">
                      {diag.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{diag.description}</p>
                    <p className="text-xs font-medium text-[#2d8a5e]">Validité: {diag.validity}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#2d8a5e] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2d8a5e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin de vos diagnostics pour la vente ?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Obtenez votre devis gratuit en quelques clics et planifiez l&apos;intervention de notre diagnostiqueur certifié.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#2d8a5e] hover:bg-white/90">
              <Link href="/devis">
                Devis gratuit en ligne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#2d8a5e]">
              <a href="tel:+33661070891">+33 6 61 07 08 91</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

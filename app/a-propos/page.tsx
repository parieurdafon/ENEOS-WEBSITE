import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Target, Leaf, ArrowRight, MapPin, Phone, Mail } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Nous nous engageons à fournir des diagnostics de la plus haute qualité, réalisés par des professionnels certifiés.",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Basés à Cadaujac, nous intervenons dans toute la Gironde avec un service personnalisé et une grande réactivité.",
  },
  {
    icon: Target,
    title: "Précision",
    description: "Nos diagnostics sont réalisés avec rigueur et nos rapports sont clairs, détaillés et conformes aux réglementations.",
  },
  {
    icon: Leaf,
    title: "Engagement",
    description: "En tant que société à mission, nous nous engageons pour un habitat plus durable et responsable.",
  },
]

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-[#1a2e35] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
              QUI SOMMES-NOUS
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Découvrez <span className="text-[#2d8a5e]">ENEOS HABITAT</span>
            </h1>
            <p className="text-lg text-white/80">
              Votre partenaire de confiance pour tous vos diagnostics immobiliers en Gironde.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/team.jpeg"
                alt="Équipe ENEOS HABITAT"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#2d8a5e] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <span className="block text-3xl font-bold">Certifications LCP</span>
                  
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Notre <span className="text-[#2d8a5e]">histoire</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">ENEOS HABITAT</strong> est né de la volonté de proposer des services de diagnostic immobilier de qualité, alliant expertise technique et accompagnement personnalisé.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Fondée par <strong className="text-foreground">Guillaume A</strong>, ingénieur thermicien de formation, ENEOS HABITAT témoigne de son engagement en faveur d'un habitat plus durable et responsable. Basée à <strong className="text-foreground">Bordeaux</strong>, notre entreprise intervient dans toute la région pour accompagner propriétaires, vendeurs et bailleurs dans leurs projets immobiliers.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Notre équipe de diagnostiqueurs certifiés met son expertise à votre service afin de vous fournir des rapports fiables, conformes à la réglementation en vigueur et livrés dans les meilleurs délais.
              </p>


              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Diagnostiqueurs certifiés",
                  "Intervention sous 48h",
                  "Rapport sous 24h",
                  "Tarifs transparents",
                  "Société à mission",
                  "Partenaire KLARITY",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#2d8a5e] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-[#2d8a5e]/10 text-[#2d8a5e] rounded-full text-sm font-medium mb-4">
              NOS VALEURS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ce qui nous <span className="text-[#2d8a5e]">anime</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Découvrez les valeurs qui guident notre travail au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-[#2d8a5e]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-[#2d8a5e]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Informations légales</h2>
              <p className="text-muted-foreground">
                ENEOS HABITAT est une entreprise française enregistrée et certifiée.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-bold text-lg mb-6">Identité de l&apos;entreprise</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Raison sociale</span>
                    <span className="font-medium">ENEOS HABITAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Forme juridique</span>
                    <span className="font-medium">SAS - Société à mission</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capital social</span>
                    <span className="font-medium">2 000 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SIREN</span>
                    <span className="font-medium">989 825 484</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SIRET</span>
                    <span className="font-medium">989 825 484 00011</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">N° TVA</span>
                    <span className="font-medium">FR 87 989825484</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-bold text-lg mb-6">Coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#2d8a5e] mt-0.5" />
                    <div>
                      <p className="font-medium">Siège social</p>
                      <p className="text-muted-foreground">3466 Avenue de Toulouse<br />33140 Cadaujac</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#2d8a5e]" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a href="tel:+33661070891" className="text-[#2d8a5e] hover:underline">+33 6 61 07 08 91</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#2d8a5e]" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contact@eneoshabitat.fr" className="text-[#2d8a5e] hover:underline">contact@eneoshabitat.fr</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2d8a5e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour obtenir votre devis gratuit et découvrir nos services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#2d8a5e] hover:bg-white/90">
              <Link href="/devis">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#2d8a5e]">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
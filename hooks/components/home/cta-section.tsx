import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CreditCard, FileText, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Online Payment Card */}
          <div className="bg-gradient-to-br from-[#1a2e35] to-[#2a4a55] rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="h-8 w-8" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                PAIEMENT EN LIGNE
              </h3>
              <h4 className="text-xl text-[#2d8a5e] font-semibold mb-4">
                {"Récupérer votre rapport en un éclair"}
              </h4>

              <p className="text-white/80 leading-relaxed mb-8">
                {"Grâce à notre service de paiement en ligne, récupérer votre rapport n'a jamais été aussi simple et rapide. Dès que celui-ci est prêt, vous recevrez une notification vous en informant. Rendez-vous ensuite sur nos services, payez et téléchargez votre rapport."}
              </p>

              <p className="text-[#2d8a5e] font-semibold mb-6">{"C'est terminé !"}</p>

              <Button
                asChild
                size="lg"
                className="bg-[#2d8a5e] hover:bg-[#238a50] text-white"
              >
                <Link href="/paiement">
                  Accéder au paiement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Devis Card */}
          <div className="bg-[#2d8a5e] rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="h-8 w-8" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                DEVIS GRATUIT
              </h3>
              <h4 className="text-xl text-white/90 font-semibold mb-4">
                Obtenez votre devis personnalisé en quelques clics
              </h4>

              <p className="text-white/80 leading-relaxed mb-8">
                {"Notre formulaire de devis en ligne vous permet d'obtenir une estimation précise et transparente pour tous vos diagnostics immobiliers. Remplissez les informations concernant votre bien et recevez votre devis instantanément."}
              </p>

              <p className="text-white font-semibold mb-6">Disponible 24h/24 - 7j/7</p>

              <Button
                asChild
                size="lg"
                className="bg-white text-[#2d8a5e] hover:bg-white/90"
              >
                <Link href="/devis">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

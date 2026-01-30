import { Shield, Award, CheckCircle } from "lucide-react"

export function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            NOS CERTIFICATIONS ET PARTENAIRES
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {/* Partner 1 - Klarity */}
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-[#2d8a5e]/10 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-[#2d8a5e]" />
            </div>
            <span className="font-semibold text-foreground">KLARITY</span>
            <span className="text-xs text-muted-foreground">Partenaire Assurance</span>
          </div>

          {/* Certification */}
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Award className="h-8 w-8 text-blue-500" />
            </div>
            <span className="font-semibold text-foreground">Certifié</span>
            <span className="text-xs text-muted-foreground">Diagnostiqueur agréé</span>
          </div>

          {/* Société à mission */}
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-orange-500" />
            </div>
            <span className="font-semibold text-foreground">Société à mission</span>
            <span className="text-xs text-muted-foreground">Engagement RSE</span>
          </div>
        </div>

        {/* Legal Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            ENEOS HABITAT - SAS au capital de 2 000€ - SIREN 989 825 484 - Siège social : 3466 Avenue de Toulouse, 33140 Cadaujac
          </p>
        </div>
      </div>
    </section>
  )
}

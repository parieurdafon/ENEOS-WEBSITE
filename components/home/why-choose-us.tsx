import { Award, Shield, Users, Clock, FileCheck, HeadphonesIcon } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Qualité",
    description: "Bénéficiez de diagnostics précis et fiables grâce à notre expertise certifiée et nos technologies de pointe. Transparence, rapidité et qualité sont nos maîtres mots pour un service irréprochable.",
    color: "bg-blue-500",
  },
  {
    icon: Shield,
    title: "Transparence",
    description: "Notre engagement envers la transparence garantit des diagnostics clairs et détaillés. Faites confiance à ENEOS HABITAT pour des rapports compréhensibles et des conseils limpides.",
    color: "bg-[#2d8a5e]",
  },
  {
    icon: Users,
    title: "Prise de contact directe",
    description: "Chez ENEOS HABITAT, la prise de contact directe est notre priorité. Profitez d'un service rapide et personnalisé avec un expert dédié à vos besoins, pour une expérience client exceptionnelle.",
    color: "bg-orange-500",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description: "Nous intervenons rapidement sur votre site pour réaliser les diagnostics nécessaires. Rendez-vous sous 48h et rapport livré sous 24h après l'intervention.",
    color: "bg-purple-500",
  },
  {
    icon: FileCheck,
    title: "Conformité",
    description: "Tous nos diagnostics respectent scrupuleusement les réglementations en vigueur. Vos documents seront conformes aux exigences légales pour sécuriser vos transactions.",
    color: "bg-teal-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Accompagnement",
    description: "Nous vous accompagnons tout au long de votre projet immobilier. Notre équipe reste disponible pour répondre à vos questions et vous conseiller au mieux.",
    color: "bg-rose-500",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-[#2d8a5e]/10 text-[#2d8a5e] rounded-full text-sm font-medium mb-4">
            NOS ENGAGEMENTS
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pourquoi choisir <span className="text-[#2d8a5e]">ENEOS HABITAT</span> ?
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez ce qui fait la différence avec notre cabinet de diagnostics immobiliers.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <reason.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

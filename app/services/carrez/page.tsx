import { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Diagnostic Loi Carrez | ENEOS HABITAT",
  description: "Mesurage Loi Carrez avec ENEOS HABITAT. Obligatoire pour la vente de biens en copropriété. Devis gratuit, intervention rapide en Gironde.",
}

const carrezService = {
  title: "Diagnostic Loi Carrez",
  subtitle: "Mesurage de la surface privative pour les biens en copropriété",
  description: "Le diagnostic Loi Carrez permet de certifier la superficie privative d'un lot de copropriété. Ce mesurage est obligatoire pour toute vente d'un bien en copropriété.",
  longDescription: [
    "La loi Carrez du 18 décembre 1996 impose de mentionner la superficie privative dans tout acte de vente d'un lot de copropriété. Cette surface correspond à la surface de plancher des locaux clos et couverts.",
    "Sont exclus du calcul : les surfaces dont la hauteur sous plafond est inférieure à 1,80 m, les caves, garages, places de stationnement, et les parties communes.",
    "En cas d'erreur supérieure à 5% en défaveur de l'acquéreur, celui-ci peut demander une diminution du prix proportionnelle dans un délai d'un an à compter de la signature de l'acte.",
  ],
  image: "/images/carrez.jpg",
  obligatoryFor: [
    "Vente d'un lot de copropriété",
    "Vente d'un appartement en copropriété",
    "Vente d'un local commercial en copropriété",
    "Mention obligatoire dans la promesse de vente et l'acte",
  ],
  validity: "Illimitée (sauf travaux)",
  validityDetails: "Le certificat Loi Carrez est valable sans limite de durée, sauf si des travaux modifiant la superficie ont été réalisés (agrandissement, création de mezzanine, etc.). Dans ce cas, un nouveau mesurage est nécessaire.",
  applicableTo: "Biens en copropriété",
  price: "À partir de 70€",
  documents: [
    "Certificat Loi Carrez",
    "Plan détaillé du lot",
    "Détail des surfaces par pièce",
    "Méthodologie de calcul",
    "Attestation du diagnostiqueur",
  ],
  process: [
    {
      title: "Prise de rendez-vous",
      description: "Contactez-nous pour planifier l'intervention à votre convenance.",
    },
    {
      title: "Mesurage sur site",
      description: "Le diagnostiqueur mesure toutes les pièces du lot avec précision à l'aide d'outils professionnels.",
    },
    {
      title: "Calcul de la surface",
      description: "La surface Carrez est calculée en excluant les surfaces non comptabilisables (hauteur < 1,80 m, etc.).",
    },
    {
      title: "Remise du certificat",
      description: "Vous recevez un certificat officiel mentionnant la surface privative de votre lot.",
    },
  ],
  faq: [
    {
      question: "Quelle est la différence entre surface Carrez et surface habitable ?",
      answer: "La surface Carrez s'applique uniquement aux lots de copropriété et exclut les surfaces de moins de 1,80 m de hauteur. La surface habitable (loi Boutin) s'applique aux locations et exclut également les surfaces occupées par les murs, cloisons, escaliers, etc.",
    },
    {
      question: "Les caves et garages sont-ils inclus dans le calcul ?",
      answer: "Non, les caves, garages, places de stationnement, boxes et parkings ne sont pas comptabilisés dans la surface Carrez, même s'ils font partie du lot.",
    },
    {
      question: "Que se passe-t-il si la surface indiquée est erronée ?",
      answer: "Si l'erreur dépasse 5% de la surface réelle, l'acquéreur peut demander une réduction du prix proportionnelle dans un délai d'un an suivant la signature de l'acte authentique.",
    },
  ],
}

export default function CarrezPage() {
  return <ServicePageTemplate service={carrezService} />
}

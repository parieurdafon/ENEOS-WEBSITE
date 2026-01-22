import { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Diagnostic Amiante | ENEOS HABITAT",
  description: "Diagnostic amiante obligatoire pour les biens construits avant 1997. ENEOS HABITAT réalise votre diagnostic amiante en Gironde. Devis gratuit, intervention rapide.",
}

const amianteService = {
  title: "Diagnostic Amiante",
  subtitle: "Détectez la présence d'amiante dans votre bien immobilier",
  description: "Le diagnostic amiante permet de repérer la présence de matériaux ou produits contenant de l'amiante dans un bien immobilier. Ce diagnostic est obligatoire pour tous les biens dont le permis de construire a été délivré avant le 1er juillet 1997.",
  longDescription: [
    "L'amiante est un matériau qui a été largement utilisé dans la construction jusqu'en 1997 pour ses propriétés isolantes et ignifuges. Cependant, l'inhalation de fibres d'amiante peut provoquer de graves maladies respiratoires, dont certains cancers.",
    "Le diagnostic amiante vise à identifier les matériaux et produits susceptibles de contenir de l'amiante : flocages, calorifugeages, faux plafonds, dalles de sol, toiture en fibrociment, etc.",
    "En fonction des résultats, le diagnostiqueur évalue l'état de conservation des matériaux amiantés et préconise si nécessaire des mesures de surveillance, de confinement ou de retrait.",
  ],
  image: "/images/amiante.jpg",
  obligatoryFor: [
    "Vente d'un bien construit avant le 1er juillet 1997",
    "Location d'un bien (parties privatives)",
    "Travaux de rénovation ou de démolition",
    "Constitution du Dossier Technique Amiante (DTA) pour les parties communes",
  ],
  validity: "Illimitée si négatif",
  validityDetails: "Si le diagnostic révèle la présence d'amiante, sa validité dépend de l'état de conservation des matériaux. Un contrôle périodique peut être requis. Si le diagnostic est négatif (absence d'amiante), il a une durée de validité illimitée, sauf si des travaux sont réalisés.",
  applicableTo: "Biens avant juillet 1997",
  price: "À partir de 90€",
  documents: [
    "Rapport de repérage amiante",
    "Liste des matériaux analysés",
    "État de conservation si présence",
    "Recommandations et préconisations",
    "Attestation de conformité",
  ],
  process: [
    {
      title: "Étude préalable",
      description: "Analyse des documents du bien (année de construction, plans) pour cibler les zones à inspecter.",
    },
    {
      title: "Inspection visuelle",
      description: "Notre diagnostiqueur inspecte l'ensemble du bien pour repérer les matériaux susceptibles de contenir de l'amiante.",
    },
    {
      title: "Prélèvements si nécessaire",
      description: "Des prélèvements peuvent être effectués pour analyse en laboratoire accrédité COFRAC.",
    },
    {
      title: "Remise du rapport",
      description: "Vous recevez un rapport détaillé avec l'état de conservation des matériaux et les préconisations.",
    },
  ],
  faq: [
    {
      question: "Mon bien date de 1998, dois-je faire un diagnostic amiante ?",
      answer: "Non, le diagnostic amiante n'est obligatoire que pour les biens dont le permis de construire a été délivré avant le 1er juillet 1997, date d'interdiction de l'amiante en France.",
    },
    {
      question: "Que faire si de l'amiante est détecté ?",
      answer: "En fonction de l'état de conservation des matériaux, plusieurs options s'offrent à vous : surveillance périodique, confinement (encapsulage) ou retrait par une entreprise spécialisée et certifiée.",
    },
    {
      question: "L'amiante est-il dangereux s'il est en bon état ?",
      answer: "L'amiante en bon état et non dégradé ne présente pas de danger immédiat. Le risque survient lorsque les fibres sont libérées dans l'air, notamment lors de travaux ou si le matériau est dégradé.",
    },
  ],
}

export default function AminatePage() {
  return <ServicePageTemplate service={amianteService} />
}

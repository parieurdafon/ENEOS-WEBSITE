import { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "DPE - Diagnostic de Performance Énergétique | ENEOS HABITAT",
  description: "Réalisez votre DPE (Diagnostic de Performance Énergétique) avec ENEOS HABITAT. Diagnostic obligatoire pour la vente et location. Devis gratuit, intervention rapide en Gironde.",
}

const dpeService = {
  title: "DPE - Diagnostic de Performance Énergétique",
  subtitle: "Évaluez la performance énergétique de votre bien immobilier",
  description: "Le Diagnostic de Performance Énergétique (DPE) est un document qui renseigne sur la performance énergétique d'un logement ou d'un bâtiment. Il évalue la consommation d'énergie et l'impact en termes d'émissions de gaz à effet de serre.",
  longDescription: [
    "Le DPE est obligatoire lors de la vente ou de la location d'un bien immobilier. Il permet aux futurs acquéreurs ou locataires de comparer les performances énergétiques des différents biens et d'estimer leurs futures dépenses énergétiques.",
    "Depuis la réforme du 1er juillet 2021, le DPE est devenu opposable, ce qui signifie que l'acquéreur ou le locataire peut se retourner contre le vendeur ou le bailleur en cas d'information erronée.",
    "Le diagnostic évalue deux critères principaux : la consommation d'énergie primaire (exprimée en kWh/m²/an) et les émissions de gaz à effet de serre (exprimées en kg CO2/m²/an). Ces résultats sont traduits en étiquettes allant de A (très performant) à G (très énergivore).",
  ],
  image: "/images/dpe.jpg",
  obligatoryFor: [
    "Toute vente d'un bien immobilier",
    "Toute mise en location d'un bien immobilier",
    "Construction d'un bâtiment neuf (DPE neuf)",
    "Affichage dans les annonces immobilières",
  ],
  validity: "10 ans",
  validityDetails: "Le DPE est valable 10 ans. Cependant, les DPE réalisés entre le 1er janvier 2013 et le 31 décembre 2017 ne sont plus valides depuis le 1er janvier 2023. Les DPE réalisés entre le 1er janvier 2018 et le 30 juin 2021 restent valides jusqu'au 31 décembre 2024.",
  applicableTo: "Tous biens avec chauffage",
  price: "À partir de 120€",
  documents: [
    "Rapport DPE complet",
    "Étiquettes énergie et climat",
    "Recommandations d'amélioration",
    "Descriptif du bien",
    "Attestation de conformité",
  ],
  process: [
    {
      title: "Prise de rendez-vous",
      description: "Contactez-nous pour convenir d'un créneau d'intervention adapté à vos disponibilités.",
    },
    {
      title: "Visite du bien",
      description: "Notre diagnostiqueur certifié se rend sur place pour effectuer les relevés nécessaires : surfaces, isolation, systèmes de chauffage, etc.",
    },
    {
      title: "Analyse et calculs",
      description: "Les données collectées sont analysées selon la méthode de calcul 3CL-DPE 2021 pour déterminer les performances énergétiques.",
    },
    {
      title: "Remise du rapport",
      description: "Vous recevez votre rapport DPE complet sous 24h à 48h avec les étiquettes énergie et climat.",
    },
  ],
  faq: [
    {
      question: "Le DPE est-il obligatoire pour louer un logement ?",
      answer: "Oui, le DPE est obligatoire pour toute mise en location. Il doit être annexé au contrat de bail et son étiquette énergétique doit figurer dans l'annonce immobilière.",
    },
    {
      question: "Qu'est-ce qu'un logement classé F ou G ?",
      answer: "Les logements classés F ou G sont considérés comme des passoires thermiques. Depuis 2023, les logements classés G+ sont interdits à la location. Les logements classés G seront interdits en 2025, et les F en 2028.",
    },
    {
      question: "Comment améliorer la note de mon DPE ?",
      answer: "Plusieurs travaux peuvent améliorer votre DPE : isolation des murs, toiture et planchers, remplacement des fenêtres, changement du système de chauffage pour une solution plus performante, installation d'une VMC, etc.",
    },
  ],
}

export default function DPEPage() {
  return <ServicePageTemplate service={dpeService} />
}

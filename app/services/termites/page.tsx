import { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Diagnostic Termites | ENEOS HABITAT",
  description: "Réalisez votre diagnostic termites avec ENEOS HABITAT. Obligatoire en zone à risque pour la vente. Devis gratuit, intervention rapide en Gironde.",
}

const termitesService = {
  title: "Diagnostic Termites",
  subtitle: "Détection de la présence de termites dans votre bien",
  description: "Le diagnostic termites permet de détecter la présence de termites et autres insectes xylophages qui peuvent fragiliser les structures en bois de votre bien immobilier.",
  longDescription: [
    "Les termites sont des insectes qui se nourrissent de cellulose (bois, papier). Ils peuvent causer des dégâts considérables aux structures d'un bâtiment, parfois de manière invisible car ils attaquent le bois de l'intérieur.",
    "Ce diagnostic est obligatoire pour toute vente d'un bien situé dans une zone déclarée à risque par arrêté préfectoral. La Gironde fait partie des départements concernés par ce risque.",
    "Le diagnostiqueur examine visuellement les parties accessibles du bien (caves, combles, charpentes) et recherche les indices de présence de termites ou d'autres insectes xylophages (capricornes, vrillettes).",
  ],
  image: "/images/termites.jpg",
  obligatoryFor: [
    "Vente d'un bien situé en zone à risque (arrêté préfectoral)",
    "Vente de terrain situé en zone à risque",
    "Démolition d'un bâtiment en zone à risque",
  ],
  validity: "6 mois",
  validityDetails: "Le diagnostic termites est valable 6 mois. Cette durée courte s'explique par la rapidité avec laquelle une infestation peut se développer. Un nouveau diagnostic doit être réalisé si ce délai est dépassé.",
  applicableTo: "Biens en zone à risque",
  price: "À partir de 80€",
  documents: [
    "Rapport de diagnostic complet",
    "Plan de repérage des zones inspectées",
    "Constatations (présence ou absence)",
    "Identification des insectes le cas échéant",
    "Recommandations si infestation détectée",
  ],
  process: [
    {
      title: "Prise de rendez-vous",
      description: "Contactez-nous pour planifier l'intervention. Prévoyez l'accès aux caves, combles et dépendances.",
    },
    {
      title: "Inspection visuelle",
      description: "Le diagnostiqueur examine les parties accessibles du bien en recherchant les indices de présence de termites.",
    },
    {
      title: "Sondages",
      description: "Des sondages non destructifs sont réalisés sur les éléments en bois pour détecter une éventuelle attaque.",
    },
    {
      title: "Remise du rapport",
      description: "Vous recevez un rapport indiquant la présence ou l'absence de termites et d'autres insectes xylophages.",
    },
  ],
  faq: [
    {
      question: "La Gironde est-elle concernée par le risque termites ?",
      answer: "Oui, la Gironde fait partie des départements où le risque termites est avéré. De nombreuses communes sont couvertes par un arrêté préfectoral rendant le diagnostic obligatoire pour toute vente.",
    },
    {
      question: "Que faire si des termites sont détectés ?",
      answer: "En cas de présence de termites, vous devez déclarer l'infestation en mairie dans un délai d'un mois. Des travaux de traitement sont fortement recommandés pour stopper l'infestation et préserver le bien.",
    },
    {
      question: "Le diagnostic couvre-t-il d'autres insectes que les termites ?",
      answer: "Oui, le diagnostic recherche également la présence d'autres insectes xylophages comme les capricornes, les vrillettes ou les lyctus qui peuvent également endommager le bois.",
    },
  ],
}

export default function TermitesPage() {
  return <ServicePageTemplate service={termitesService} />
}

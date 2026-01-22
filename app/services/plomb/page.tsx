import { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Diagnostic Plomb (CREP) | ENEOS HABITAT",
  description: "Réalisez votre diagnostic plomb (CREP) avec ENEOS HABITAT. Obligatoire pour les biens construits avant 1949. Devis gratuit, intervention rapide en Gironde.",
}

const plombService = {
  title: "Diagnostic Plomb (CREP)",
  subtitle: "Constat de Risque d'Exposition au Plomb pour votre bien immobilier",
  description: "Le Constat de Risque d'Exposition au Plomb (CREP) est un diagnostic qui permet de mesurer la concentration en plomb des revêtements du logement, notamment les peintures.",
  longDescription: [
    "Le diagnostic plomb est obligatoire pour tous les biens immobiliers construits avant le 1er janvier 1949. Il vise à protéger les occupants, en particulier les jeunes enfants, contre le saturnisme (intoxication au plomb).",
    "Le diagnostiqueur utilise un appareil à fluorescence X pour mesurer la concentration en plomb dans les revêtements. Si la concentration dépasse le seuil de 1 mg/cm², des mesures doivent être prises.",
    "En cas de présence de plomb à des concentrations dangereuses, le propriétaire doit réaliser des travaux pour supprimer le risque d'exposition, notamment en recouvrant ou en remplaçant les revêtements concernés.",
  ],
  image: "/images/plomb.jpg",
  obligatoryFor: [
    "Vente d'un bien construit avant le 1er janvier 1949",
    "Location d'un bien construit avant le 1er janvier 1949",
    "Parties communes d'immeubles construits avant 1949",
    "Travaux dans un bien construit avant 1949",
  ],
  validity: "Illimité si négatif, 1 an si positif (vente) / 6 ans (location)",
  validityDetails: "Si le diagnostic révèle l'absence de plomb ou une concentration inférieure à 1 mg/cm², sa validité est illimitée. En cas de présence de plomb supérieure au seuil, le CREP est valable 1 an pour une vente et 6 ans pour une location.",
  applicableTo: "Biens construits avant 1949",
  price: "À partir de 100€",
  documents: [
    "Rapport CREP complet",
    "Relevés par zone",
    "Concentrations en plomb mesurées",
    "Notice d'information sur le plomb",
    "Recommandations si plomb détecté",
  ],
  process: [
    {
      title: "Prise de rendez-vous",
      description: "Contactez-nous pour planifier l'intervention d'un diagnostiqueur certifié.",
    },
    {
      title: "Mesures sur site",
      description: "Le diagnostiqueur utilise un appareil à fluorescence X pour analyser tous les revêtements (peintures, tapisseries, etc.).",
    },
    {
      title: "Analyse des résultats",
      description: "Les mesures sont analysées et comparées au seuil réglementaire de 1 mg/cm².",
    },
    {
      title: "Remise du rapport",
      description: "Vous recevez un rapport détaillé avec les concentrations relevées et les éventuelles recommandations.",
    },
  ],
  faq: [
    {
      question: "Pourquoi le plomb est-il dangereux ?",
      answer: "Le plomb est un métal toxique qui peut provoquer le saturnisme, particulièrement dangereux pour les jeunes enfants. L'intoxication se fait principalement par ingestion de poussières ou d'écailles de peinture contenant du plomb.",
    },
    {
      question: "Mon bien date d'après 1949, dois-je faire un diagnostic plomb ?",
      answer: "Non, le diagnostic plomb n'est obligatoire que pour les biens dont le permis de construire a été délivré avant le 1er janvier 1949. Après cette date, l'utilisation de peintures au plomb était déjà très réduite.",
    },
    {
      question: "Que faire si du plomb est détecté ?",
      answer: "Si le diagnostic révèle une concentration supérieure à 1 mg/cm², vous devez informer les occupants et réaliser des travaux pour supprimer le risque d'exposition (recouvrement, remplacement des revêtements).",
    },
  ],
}

export default function PlombPage() {
  return <ServicePageTemplate service={plombService} />
}

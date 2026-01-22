import { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "ERP - État des Risques et Pollutions | ENEOS HABITAT",
  description: "Obtenez votre ERP (État des Risques et Pollutions) avec ENEOS HABITAT. Obligatoire pour toute vente ou location. Devis gratuit en Gironde.",
}

const erpService = {
  title: "ERP - État des Risques et Pollutions",
  subtitle: "Information sur les risques naturels, miniers et technologiques",
  description: "L'État des Risques et Pollutions (ERP) informe les acquéreurs et locataires sur les risques naturels, miniers, technologiques, sismiques et de pollution auxquels un bien est exposé.",
  longDescription: [
    "L'ERP est un document obligatoire pour toute transaction immobilière (vente ou location). Il permet à l'acquéreur ou au locataire de connaître les risques auxquels le bien est exposé.",
    "Ce document recense les risques identifiés par les autorités : inondations, mouvements de terrain, séismes, risques industriels, pollution des sols, radon, etc.",
    "L'ERP doit être établi à partir des informations officielles mises à disposition par les préfectures et doit dater de moins de 6 mois au moment de la signature de l'acte ou du contrat de bail.",
  ],
  image: "/images/erp.jpg",
  obligatoryFor: [
    "Vente de tout bien immobilier",
    "Location de tout bien immobilier",
    "Vente de terrain",
    "Tout type de transaction immobilière",
  ],
  validity: "6 mois",
  validityDetails: "L'ERP est valable 6 mois à compter de sa date d'établissement. Si ce délai est dépassé au moment de la signature de l'acte, un nouveau document doit être établi.",
  applicableTo: "Tous les biens immobiliers",
  price: "À partir de 30€",
  documents: [
    "État des Risques et Pollutions complet",
    "Cartographies des zones à risque",
    "Liste des arrêtés de catastrophe naturelle",
    "Information sur le radon",
    "Information sur les pollutions des sols",
  ],
  process: [
    {
      title: "Demande d'ERP",
      description: "Communiquez-nous l'adresse complète du bien concerné.",
    },
    {
      title: "Recherche des informations",
      description: "Nous consultons les bases de données officielles pour identifier les risques applicables au bien.",
    },
    {
      title: "Établissement du document",
      description: "L'ERP est rédigé en conformité avec les exigences réglementaires.",
    },
    {
      title: "Remise du document",
      description: "Vous recevez votre ERP rapidement, prêt à être annexé à votre acte ou contrat.",
    },
  ],
  faq: [
    {
      question: "Quels risques sont couverts par l'ERP ?",
      answer: "L'ERP couvre les risques naturels (inondations, mouvements de terrain, sécheresse, etc.), les risques miniers, les risques technologiques (industriels), le risque sismique, le potentiel radon et les secteurs d'information sur les sols (pollution).",
    },
    {
      question: "L'ERP est-il obligatoire même si le bien n'est exposé à aucun risque ?",
      answer: "Oui, l'ERP est obligatoire pour toute transaction, même si aucun risque n'est identifié. Dans ce cas, le document attestera de l'absence de risques connus à la date de son établissement.",
    },
    {
      question: "Comment est déterminée l'exposition aux risques ?",
      answer: "L'exposition aux risques est déterminée par la localisation du bien par rapport aux zones définies dans les Plans de Prévention des Risques (PPR) et autres documents officiels.",
    },
  ],
}

export default function ERPPage() {
  return <ServicePageTemplate service={erpService} />
}

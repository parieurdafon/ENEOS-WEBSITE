import { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Diagnostic Électricité | ENEOS HABITAT",
  description: "Réalisez votre diagnostic électricité avec ENEOS HABITAT. Obligatoire pour les installations de plus de 15 ans. Devis gratuit, intervention rapide en Gironde.",
}

const electriciteService = {
  title: "Diagnostic Électricité",
  subtitle: "Vérification de la sécurité de votre installation électrique",
  description: "Le diagnostic électricité évalue l'état de l'installation intérieure d'électricité afin d'identifier les risques pouvant porter atteinte à la sécurité des personnes.",
  longDescription: [
    "Ce diagnostic est obligatoire pour toute vente ou location d'un bien dont l'installation électrique a plus de 15 ans. Il permet de repérer les anomalies et les dangers potentiels de l'installation.",
    "Le diagnostiqueur vérifie de nombreux points de contrôle : présence d'un appareil général de commande et de protection, dispositifs de protection différentielle, prises de terre, protection contre les surintensités, etc.",
    "Bien que le diagnostic identifie les anomalies, il n'oblige pas le propriétaire à effectuer des travaux. Cependant, il permet d'informer l'acquéreur ou le locataire des risques éventuels.",
  ],
  image: "/images/electricite.jpg",
  obligatoryFor: [
    "Vente d'un bien avec installation de plus de 15 ans",
    "Location d'un bien avec installation de plus de 15 ans",
    "Mise en copropriété d'un immeuble de plus de 15 ans",
  ],
  validity: "3 ans (vente) / 6 ans (location)",
  validityDetails: "Le diagnostic électricité est valable 3 ans dans le cadre d'une vente et 6 ans dans le cadre d'une location. Passé ce délai, un nouveau diagnostic devra être réalisé.",
  applicableTo: "Installations de plus de 15 ans",
  price: "À partir de 95€",
  documents: [
    "Rapport de diagnostic complet",
    "Liste des anomalies détectées",
    "Schéma de l'installation",
    "Recommandations de mise en sécurité",
    "Notice d'information",
  ],
  process: [
    {
      title: "Prise de rendez-vous",
      description: "Contactez-nous pour planifier l'intervention à votre convenance.",
    },
    {
      title: "Vérification de l'installation",
      description: "Le diagnostiqueur contrôle plus de 90 points selon la norme XP C16-600 : tableau électrique, prises, interrupteurs, etc.",
    },
    {
      title: "Identification des anomalies",
      description: "Les défauts sont classés par niveau de danger et documentés dans le rapport.",
    },
    {
      title: "Remise du rapport",
      description: "Vous recevez un rapport détaillé avec les anomalies identifiées et les recommandations.",
    },
  ],
  faq: [
    {
      question: "Dois-je effectuer les travaux signalés dans le diagnostic ?",
      answer: "Le diagnostic n'impose pas de travaux obligatoires. Cependant, il informe l'acquéreur ou le locataire des risques. En cas de vente, les anomalies peuvent faire l'objet d'une négociation.",
    },
    {
      question: "Comment savoir si mon installation a plus de 15 ans ?",
      answer: "Vous pouvez vous référer à la date de construction du bien ou aux travaux de rénovation électrique effectués. En cas de doute, une attestation de conformité du Consuel peut prouver la date de l'installation.",
    },
    {
      question: "Quelles sont les anomalies les plus fréquentes ?",
      answer: "Les anomalies les plus courantes sont : absence de mise à la terre, absence de disjoncteur différentiel 30mA, matériel vétuste ou non conforme, fils non protégés, prises non reliées à la terre.",
    },
  ],
}

export default function ElectricitePage() {
  return <ServicePageTemplate service={electriciteService} />
}

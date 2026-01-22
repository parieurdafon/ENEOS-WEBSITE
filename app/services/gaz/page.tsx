import { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Diagnostic Gaz | ENEOS HABITAT",
  description: "Réalisez votre diagnostic gaz avec ENEOS HABITAT. Obligatoire pour les installations de plus de 15 ans. Devis gratuit, intervention rapide en Gironde.",
}

const gazService = {
  title: "Diagnostic Gaz",
  subtitle: "Vérification de la sécurité de votre installation gaz",
  description: "Le diagnostic gaz évalue l'état des installations intérieures de gaz afin d'identifier les risques pouvant porter atteinte à la sécurité des personnes (fuites, intoxication au monoxyde de carbone, explosion).",
  longDescription: [
    "Ce diagnostic est obligatoire pour toute vente ou location d'un bien équipé d'une installation gaz de plus de 15 ans. Il permet de repérer les anomalies et les dangers potentiels.",
    "Le diagnostiqueur vérifie l'ensemble de l'installation : tuyauteries fixes, raccordements des appareils, ventilation des locaux, combustion des appareils à gaz.",
    "En cas de danger grave et immédiat (DGI), le diagnostiqueur doit interrompre l'alimentation en gaz et signaler la situation au distributeur. Dans ce cas, des travaux sont obligatoires avant toute remise en service.",
  ],
  image: "/images/gaz.jpg",
  obligatoryFor: [
    "Vente d'un bien avec installation gaz de plus de 15 ans",
    "Location d'un bien avec installation gaz de plus de 15 ans",
    "Mise en copropriété d'un immeuble avec installation gaz de plus de 15 ans",
  ],
  validity: "3 ans (vente) / 6 ans (location)",
  validityDetails: "Le diagnostic gaz est valable 3 ans dans le cadre d'une vente et 6 ans dans le cadre d'une location. Un certificat de conformité Qualigaz de moins de 3 ans peut remplacer ce diagnostic.",
  applicableTo: "Installations de plus de 15 ans",
  price: "À partir de 85€",
  documents: [
    "Rapport de diagnostic complet",
    "Liste des anomalies détectées",
    "Classification des risques",
    "Recommandations de mise en sécurité",
    "Notice d'information",
  ],
  process: [
    {
      title: "Prise de rendez-vous",
      description: "Contactez-nous pour planifier l'intervention. Assurez-vous que le gaz est alimenté le jour du diagnostic.",
    },
    {
      title: "Contrôle de l'installation",
      description: "Le diagnostiqueur vérifie les tuyauteries, raccordements, appareils et la ventilation des locaux.",
    },
    {
      title: "Test de combustion",
      description: "Les appareils de production d'eau chaude et de chauffage sont testés pour vérifier leur bon fonctionnement.",
    },
    {
      title: "Remise du rapport",
      description: "Vous recevez un rapport détaillé avec les anomalies identifiées, classées par niveau de danger.",
    },
  ],
  faq: [
    {
      question: "Qu'est-ce qu'un Danger Grave et Immédiat (DGI) ?",
      answer: "Un DGI est une anomalie qui présente un risque immédiat pour la sécurité des occupants (fuite de gaz importante, risque d'intoxication au CO). Dans ce cas, le diagnostiqueur coupe l'alimentation gaz et des travaux sont obligatoires.",
    },
    {
      question: "Mon installation est récente, dois-je faire un diagnostic ?",
      answer: "Si votre installation gaz a moins de 15 ans, le diagnostic n'est pas obligatoire. Cependant, vous pouvez fournir un certificat de conformité Qualigaz pour prouver la conformité de l'installation.",
    },
    {
      question: "Le gaz doit-il être alimenté pour le diagnostic ?",
      answer: "Oui, le gaz doit être alimenté le jour de l'intervention pour permettre au diagnostiqueur de tester les appareils et de vérifier l'absence de fuites.",
    },
  ],
}

export default function GazPage() {
  return <ServicePageTemplate service={gazService} />
}

import { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Diagnostic Loi Boutin - Surface Habitable | ENEOS HABITAT",
  description: "Mesurage de la surface habitable (Loi Boutin) avec ENEOS HABITAT. Obligatoire pour la location. Devis gratuit, intervention rapide en Gironde.",
}

const boutinService = {
  title: "Loi Boutin - Surface Habitable",
  subtitle: "Mesurage de la surface habitable pour les locations",
  description: "Le diagnostic Loi Boutin permet de certifier la surface habitable d'un logement mis en location. Ce mesurage est obligatoire pour toute location à usage de résidence principale.",
  longDescription: [
    "La loi Boutin du 25 mars 2009 impose de mentionner la surface habitable dans tout contrat de location d'un logement vide à usage de résidence principale. Cette obligation a été renforcée par la loi ALUR de 2014.",
    "La surface habitable correspond à la surface de plancher construite, déduction faite des surfaces occupées par les murs, cloisons, marches et cages d'escaliers, gaines, embrasures de portes et fenêtres.",
    "Contrairement à la loi Carrez, le calcul exclut également les combles non aménagés, caves, sous-sols, remises, garages, terrasses, loggias, balcons, séchoirs extérieurs, vérandas, et locaux communs.",
  ],
  image: "/images/carrez.jpg",
  obligatoryFor: [
    "Location d'un logement vide à usage de résidence principale",
    "Mention obligatoire dans le contrat de bail",
    "Location meublée (recommandé)",
    "Bail mobilité",
  ],
  validity: "Illimitée (sauf travaux)",
  validityDetails: "Le certificat de surface habitable est valable sans limite de durée, tant que des travaux modifiant la superficie n'ont pas été réalisés. Tout agrandissement ou modification nécessite un nouveau mesurage.",
  applicableTo: "Logements mis en location",
  price: "À partir de 60€",
  documents: [
    "Attestation de surface habitable",
    "Plan détaillé du logement",
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
      description: "Le diagnostiqueur mesure toutes les pièces du logement avec précision.",
    },
    {
      title: "Calcul de la surface",
      description: "La surface habitable est calculée selon les critères définis par la loi Boutin.",
    },
    {
      title: "Remise de l'attestation",
      description: "Vous recevez une attestation officielle mentionnant la surface habitable du logement.",
    },
  ],
  faq: [
    {
      question: "Quelle est la différence entre surface Carrez et surface habitable ?",
      answer: "La surface habitable (Boutin) est généralement inférieure à la surface Carrez car elle exclut davantage d'éléments : épaisseur des murs, cloisons, embrasures de portes et fenêtres. De plus, la loi Carrez s'applique à la vente en copropriété tandis que la loi Boutin s'applique à la location.",
    },
    {
      question: "Que se passe-t-il si la surface mentionnée dans le bail est erronée ?",
      answer: "Si la surface réelle est inférieure de plus de 5% à celle mentionnée dans le bail, le locataire peut demander une diminution de loyer proportionnelle dans un délai de 6 mois à compter de la prise d'effet du bail.",
    },
    {
      question: "La surface habitable doit-elle figurer dans les annonces ?",
      answer: "Oui, depuis la loi ALUR de 2014, la surface habitable doit obligatoirement être mentionnée dans toutes les annonces de location de logements vides à usage de résidence principale.",
    },
  ],
}

export default function BoutinPage() {
  return <ServicePageTemplate service={boutinService} />
}

import { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, AlertCircle, Clock, Euro, FileText, TrendingUp, Home, Zap, Shield, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Audit Énergétique | ENEOS HABITAT - Gironde (33)",
  description: "Audit énergétique complet pour améliorer la performance énergétique de votre bien. Obligatoire pour la vente de maisons classées F ou G. Intervention rapide en Gironde et Nouvelle-Aquitaine.",
}

export default function AuditEnergetiquePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="inline h-4 w-4 mr-2" />
              Étude énergétique approfondie
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Audit Énergétique
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8">
              Un plan d'action personnalisé pour améliorer la performance énergétique de votre bien
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50" asChild>
                <Link href="/devis">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="tel:+33661070891">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Prix Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-emerald-600 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">Tarif Audit Énergétique</CardTitle>
                    <CardDescription className="text-emerald-100">
                      Prix tout compris avec rapport détaillé
                    </CardDescription>
                  </div>
                  <Euro className="h-12 w-12" />
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <p className="text-5xl md:text-6xl font-bold text-emerald-600 mb-2">
                    À partir de 800€
                  </p>
                  <p className="text-lg text-gray-600">TTC - Tarif selon surface et configuration</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="font-semibold text-emerald-800 mb-2">Maison jusqu'à 100m²</p>
                    <p className="text-2xl font-bold text-emerald-600">800€ TTC</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="font-semibold text-emerald-800 mb-2">Maison 100-200m²</p>
                    <p className="text-2xl font-bold text-emerald-600">1 000€ TTC</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="font-semibold text-emerald-800 mb-2">Maison 200m²</p>
                    <p className="text-2xl font-bold text-emerald-600">1 200€ TTC</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-400">
                    <p className="font-semibold text-orange-800 mb-2">Pack Audit + DPE</p>
                    <p className="text-2xl font-bold text-orange-600">-15% sur le total</p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>💡 Aides disponibles :</strong> L'audit énergétique peut être éligible à MaPrimeRénov' et autres aides à la rénovation énergétique.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qu'est-ce qu'un Audit Énergétique */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Qu'est-ce qu'un Audit Énergétique ?
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                L'audit énergétique est une <strong>étude approfondie et personnalisée</strong> de votre bien immobilier 
                qui va bien au-delà du simple DPE. Il analyse en détail tous les aspects énergétiques de votre logement 
                pour identifier les points faibles et proposer des solutions concrètes d'amélioration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-emerald-600 mb-4" />
                  <CardTitle>Contenu de l'audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>État des lieux énergétique complet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Analyse thermique du bâti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Étude des systèmes de chauffage, ventilation, eau chaude</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Évaluation des déperditions énergétiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Détection des ponts thermiques</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-emerald-600 mb-4" />
                  <CardTitle>Préconisations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>2 scénarios de travaux minimum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Estimation chiffrée des coûts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Calcul des économies d'énergie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Aides financières mobilisables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Ordre de priorité des travaux</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Différence DPE vs Audit */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Quelle différence entre DPE et Audit Énergétique ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* DPE */}
              <Card className="border-2 border-blue-200">
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center justify-between mb-4">
                    <Home className="h-10 w-10 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      OBLIGATOIRE
                    </span>
                  </div>
                  <CardTitle className="text-2xl">DPE</CardTitle>
                  <CardDescription>Diagnostic de Performance Énergétique</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">📊 Objectif</p>
                      <p className="text-gray-600">Évaluation globale de la performance énergétique</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">📋 Contenu</p>
                      <p className="text-gray-600">Classement énergétique (A à G), consommation estimée, émissions de GES</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">⏱️ Durée</p>
                      <p className="text-gray-600">1 à 2 heures sur place</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">💰 Prix</p>
                      <p className="text-gray-600">À partir de 120€ TTC</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">✅ Recommandations</p>
                      <p className="text-gray-600">Recommandations générales</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Audit Énergétique */}
              <Card className="border-2 border-emerald-600 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Zap className="h-10 w-10" />
                    <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      PLUS COMPLET
                    </span>
                  </div>
                  <CardTitle className="text-2xl">Audit Énergétique</CardTitle>
                  <CardDescription className="text-emerald-100">
                    Étude approfondie avec plan d'actions
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">📊 Objectif</p>
                      <p className="text-gray-600">Plan d'action détaillé pour améliorer la performance</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">📋 Contenu</p>
                      <p className="text-gray-600">Analyse complète + 2 scénarios de travaux chiffrés + gains énergétiques</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">⏱️ Durée</p>
                      <p className="text-gray-600">3 à 4 heures sur place + étude</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">💰 Prix</p>
                      <p className="text-gray-600">À partir de 800€ TTC</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">✅ Recommandations</p>
                      <p className="text-gray-600">Programme de travaux détaillé et chiffré</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
              <p className="text-emerald-900 font-semibold mb-2">💡 À retenir</p>
              <p className="text-emerald-800">
                Le DPE est un état des lieux, l'audit énergétique est une feuille de route. Si vous envisagez des travaux 
                de rénovation, l'audit est indispensable pour optimiser vos investissements et vos économies d'énergie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quand est-il obligatoire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Quand l'Audit Énergétique est-il obligatoire ?
            </h2>

            <Card className="border-2 border-red-200 mb-8">
              <CardHeader className="bg-red-50">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                  <div>
                    <CardTitle className="text-xl">Obligation depuis le 1er avril 2023</CardTitle>
                    <CardDescription>Pour certaines ventes de maisons individuelles</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900">🏠 Biens concernés :</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Maisons individuelles ou monopropriétés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Classées F ou G au DPE (passoires thermiques)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Lors d'une vente (pas pour la location)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900">📅 Calendrier d'application :</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded">
                        <span className="font-bold text-red-600">Depuis avril 2023</span>
                        <span>→ Maisons classées F et G</span>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded">
                        <span className="font-bold text-orange-600">Dès janvier 2025</span>
                        <span>→ Extension prévue aux maisons E</span>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded">
                        <span className="font-bold text-yellow-600">Dès janvier 2034</span>
                        <span>→ Extension prévue aux maisons D</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                    <p className="text-sm text-blue-900">
                      <strong>💡 Bon à savoir :</strong> L'audit doit être remis à l'acquéreur dès la première visite 
                      et annexé à la promesse de vente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Les avantages de l'Audit Énergétique
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Euro className="h-10 w-10 text-emerald-600 mb-3" />
                  <CardTitle>Économies financières</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Réduction de vos factures énergétiques</li>
                    <li>• Priorisation des travaux les plus rentables</li>
                    <li>• Accès aux aides financières (MaPrimeRénov', CEE...)</li>
                    <li>• Valorisation de votre patrimoine immobilier</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Home className="h-10 w-10 text-emerald-600 mb-3" />
                  <CardTitle>Confort amélioré</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Meilleure isolation thermique</li>
                    <li>• Température homogène dans tout le logement</li>
                    <li>• Élimination des courants d'air</li>
                    <li>• Réduction des variations de température</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-emerald-600 mb-3" />
                  <CardTitle>Santé et bien-être</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Meilleure qualité de l'air intérieur</li>
                    <li>• Réduction de l'humidité et des moisissures</li>
                    <li>• Amélioration de la ventilation</li>
                    <li>• Environnement plus sain pour les occupants</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-emerald-600 mb-3" />
                  <CardTitle>Impact environnemental</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Réduction des émissions de CO₂</li>
                    <li>• Diminution de votre empreinte carbone</li>
                    <li>• Contribution à la transition énergétique</li>
                    <li>• Valorisation écologique de votre bien</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comment se déroule l'Audit Énergétique ?
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Prise de rendez-vous</h3>
                  <p className="text-gray-700">Contactez-nous pour fixer une date d'intervention. Nous intervenons en moins de 48h en Gironde.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Visite sur place (3-4h)</h3>
                  <p className="text-gray-700">Notre expert examine en détail votre bien : isolation, menuiseries, systèmes de chauffage, ventilation, ponts thermiques...</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Analyse et modélisation</h3>
                  <p className="text-gray-700">Nous réalisons une étude thermique complète avec modélisation 3D de votre logement et simulation des scénarios de travaux.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Remise du rapport (sous 15 jours)</h3>
                  <p className="text-gray-700">Vous recevez un rapport complet avec 2 scénarios de travaux minimum, estimations chiffrées et aides mobilisables.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Accompagnement personnalisé</h3>
                  <p className="text-gray-700">Nous restons à votre disposition pour vous expliquer le rapport et vous conseiller sur la mise en œuvre des travaux.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'un Audit Énergétique ?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Intervention rapide en Gironde (33) en moins de 48h<br />
              et en Nouvelle-Aquitaine (16, 17, 24, 47, 40) en moins de 72h
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50" asChild>
                <Link href="/devis">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="tel:+33661070891">
                  <Phone className="mr-2 h-5 w-5" />
                  06 61 07 08 91
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Combien de temps est valable un audit énergétique ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    L'audit énergétique est valable 5 ans. Cependant, si vous réalisez des travaux importants 
                    (isolation, changement de système de chauffage...), il est recommandé de le refaire pour 
                    bénéficier des nouvelles aides et avoir un état actualisé.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Puis-je bénéficier d'aides pour financer l'audit ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Oui ! L'audit énergétique peut être éligible à MaPrimeRénov' avec une aide jusqu'à 500€ 
                    selon vos revenus. Il peut également être inclus dans le financement global de vos travaux 
                    de rénovation via les primes CEE (Certificats d'Économies d'Énergie).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dois-je faire un DPE en plus de l'audit ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Oui, le DPE reste obligatoire pour toute vente ou location. L'audit énergétique vient en 
                    complément pour les maisons F ou G en vente. Cependant, l'audit inclut déjà les informations 
                    du DPE. Nous proposons un pack Audit + DPE avec -15% sur le total.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Qui peut réaliser un audit énergétique ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Seuls les professionnels certifiés et qualifiés peuvent réaliser un audit énergétique 
                    réglementaire. ENEOS HABITAT dispose de toutes les certifications nécessaires et d'une 
                    expérience reconnue dans le domaine des études thermiques et diagnostics énergétiques.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Les recommandations sont-elles obligatoires ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Non, les travaux recommandés dans l'audit ne sont pas obligatoires. L'audit est un outil 
                    d'aide à la décision qui vous permet de planifier vos travaux de manière optimale. Vous êtes 
                    libre de suivre ou non les recommandations, et de les réaliser dans l'ordre qui vous convient.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
"use client"

import React, { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Lock, CheckCircle, FileText, Download, Search } from "lucide-react"

export default function PaiementPage() {
  const searchParams = useSearchParams()
  const initialReference = searchParams.get("reference") || ""
  const [referenceNumber, setReferenceNumber] = useState(initialReference)
  const [isSearching, setIsSearching] = useState(false)
  const [reportFound, setReportFound] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    // Simulate search
    setTimeout(() => {
      setIsSearching(false)
      if (referenceNumber.length >= 6) {
        setReportFound(true)
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#1a2e35] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
              PAIEMENT EN LIGNE
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Récupérez votre <span className="text-[#2d8a5e]">rapport</span>
            </h1>
            <p className="text-lg text-white/80">
              Payez en ligne et téléchargez immédiatement votre rapport de diagnostic.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#2d8a5e]/10 rounded-xl flex items-center justify-center">
                <Search className="h-6 w-6 text-[#2d8a5e]" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Rechercher votre rapport</h2>
                <p className="text-sm text-muted-foreground">Entrez votre numéro de référence</p>
              </div>
            </div>

            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <Label htmlFor="reference">Numéro de référence</Label>
                <Input
                  id="reference"
                  placeholder="Ex: DIAG-2024-001234"
                  value={referenceNumber}
                  onChange={(e) => setReferenceNumber(e.target.value)}
                  className="mt-2"
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Vous trouverez ce numéro dans l&apos;email de confirmation reçu après l&apos;intervention.
                </p>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#2d8a5e] hover:bg-[#238a50] text-white"
                disabled={isSearching}
              >
                {isSearching ? "Recherche en cours..." : "Rechercher mon rapport"}
              </Button>
            </form>
          </div>

          {/* Report Found */}
          {reportFound && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fadeIn">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-green-700">Rapport trouvé !</h2>
                  <p className="text-sm text-muted-foreground">Référence: {referenceNumber}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-10 w-10 text-[#2d8a5e]" />
                  <div className="flex-1">
                    <h3 className="font-semibold">Pack Diagnostics Vente</h3>
                    <p className="text-sm text-muted-foreground">
                      DPE + Amiante + Plomb + Électricité + ERP
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Adresse: 123 Rue Exemple, 33000 Bordeaux
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#2d8a5e]">350€</p>
                    <p className="text-xs text-muted-foreground">TTC</p>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div className="space-y-6">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-[#2d8a5e]" />
                  Informations de paiement
                </h3>

                <div>
                  <Label htmlFor="cardName">Nom sur la carte</Label>
                  <Input id="cardName" placeholder="JEAN DUPONT" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="cardNumber">Numéro de carte</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-2" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Date d&apos;expiration</Label>
                    <Input id="expiry" placeholder="MM/AA" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" type="password" className="mt-2" />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4" />
                  <span>Paiement sécurisé par cryptage SSL</span>
                </div>

                <Button className="w-full bg-[#2d8a5e] hover:bg-[#238a50] text-white py-6 text-lg">
                  Payer 350€ et télécharger
                </Button>
              </div>
            </div>
          )}

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-[#2d8a5e]/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="h-5 w-5 text-[#2d8a5e]" />
              </div>
              <h3 className="font-semibold mb-2">Paiement sécurisé</h3>
              <p className="text-sm text-muted-foreground">
                Vos données bancaires sont protégées par un cryptage SSL de bout en bout.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-[#2d8a5e]/10 rounded-lg flex items-center justify-center mb-4">
                <Download className="h-5 w-5 text-[#2d8a5e]" />
              </div>
              <h3 className="font-semibold mb-2">Téléchargement immédiat</h3>
              <p className="text-sm text-muted-foreground">
                Dès le paiement validé, téléchargez votre rapport au format PDF.
              </p>
            </div>
          </div>

          {/* Help */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Vous ne trouvez pas votre rapport ou rencontrez un problème ?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild className="bg-transparent">
                <a href="tel:+33661070891">Appeler le +33 6 61 07 08 91</a>
              </Button>
              <Button variant="outline" asChild className="bg-transparent">
                <a href="mailto:Contact@eneoshabitat.fr">Envoyer un email</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Building2, Warehouse, ArrowRight } from "lucide-react"

type TransactionType = "vente" | "location" | "autre" | null
type PropertyType = "maison" | "appartement" | "autre" | null

export function QuickQuoteForm() {
  const [transactionType, setTransactionType] = useState<TransactionType>(null)
  const [propertyType, setPropertyType] = useState<PropertyType>(null)

  const getQuoteLink = () => {
    const params = new URLSearchParams()
    if (transactionType) params.set("transaction", transactionType)
    if (propertyType) params.set("bien", propertyType)
    return `/devis?${params.toString()}`
  }

  return (
    <section className="relative z-20 -mt-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-[#2d8a5e]/10 text-[#2d8a5e] rounded-full text-sm font-medium mb-3">
              Devis instantané
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Demandez votre devis <span className="text-[#2d8a5e]">en ligne 24h/24</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Transaction Type */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                Vous réalisez :
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "vente", label: "Une vente" },
                  { value: "location", label: "Une location" },
                  { value: "autre", label: "Autre" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setTransactionType(option.value as TransactionType)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      transactionType === option.value
                        ? "border-[#2d8a5e] bg-[#2d8a5e]/5 text-[#2d8a5e]"
                        : "border-gray-200 hover:border-[#2d8a5e]/50"
                    }`}
                  >
                    <span className="font-medium text-sm">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                Votre type de bien :
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "maison", label: "Maison", icon: Home },
                  { value: "appartement", label: "Appartement", icon: Building2 },
                  { value: "autre", label: "Autre bien", icon: Warehouse },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setPropertyType(option.value as PropertyType)}
                    className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                      propertyType === option.value
                        ? "border-[#2d8a5e] bg-[#2d8a5e]/5 text-[#2d8a5e]"
                        : "border-gray-200 hover:border-[#2d8a5e]/50"
                    }`}
                  >
                    <option.icon className="h-6 w-6" />
                    <span className="font-medium text-xs">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#2d8a5e] hover:bg-[#238a50] text-white px-10 py-6 text-lg"
            >
              <Link href={getQuoteLink()}>
                Découvrez vos tarifs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

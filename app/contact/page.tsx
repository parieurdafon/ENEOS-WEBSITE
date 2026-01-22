"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#1a2e35] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
              CONTACT
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Contactez <span className="text-[#2d8a5e]">ENEOS HABITAT</span>
            </h1>
            <p className="text-lg text-white/80">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant vos diagnostics immobiliers.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/logo.png"
                  alt="ENEOS HABITAT"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h2 className="font-bold text-xl">ENEOS HABITAT</h2>
                  <p className="text-sm text-muted-foreground">Diagnostics Immobiliers</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d8a5e]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-[#2d8a5e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+33661070891" className="text-[#2d8a5e] hover:underline">
                      +33 6 61 07 08 91
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d8a5e]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-[#2d8a5e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:Contact@eneoshabitat.fr" className="text-[#2d8a5e] hover:underline">
                      Contact@eneoshabitat.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d8a5e]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[#2d8a5e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      3466 Avenue de Toulouse<br />
                      33140 Cadaujac
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d8a5e]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-[#2d8a5e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires</h3>
                    <p className="text-muted-foreground">
                      Lundi - Samedi<br />
                      09h00 - 19h00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Informations légales</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><span className="font-medium">SIREN:</span> 989 825 484</p>
                  <p><span className="font-medium">SIRET:</span> 989 825 484 00011</p>
                  <p><span className="font-medium">Forme:</span> SAS</p>
                  <p><span className="font-medium">Capital:</span> 2 000€</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-[#2d8a5e]" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Message envoyé !</h2>
                  <p className="text-muted-foreground mb-8">
                    Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-[#2d8a5e] hover:bg-[#238a50] text-white">
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input id="lastName" placeholder="Votre nom" className="mt-2" required />
                      </div>
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input id="firstName" placeholder="Votre prénom" className="mt-2" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="votre@email.fr" className="mt-2" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" type="tel" placeholder="06 XX XX XX XX" className="mt-2" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Sujet *</Label>
                      <Input id="subject" placeholder="Objet de votre message" className="mt-2" required />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Votre message..."
                        className="mt-2"
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#2d8a5e] hover:bg-[#238a50] text-white">
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer le message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.1723456789!2d-0.5234567!3d44.7456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ0JzQ0LjQiTiAwwrAzMScyNC4yIlc!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation ENEOS HABITAT"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

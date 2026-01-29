"use client"

import React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Configuration EmailJS
  const SERVICE_ID = 'service_lfcbs5q'
  const TEMPLATE_ID = 'template_1naj5b5'
  const PUBLIC_KEY = '-QOPPR0iHkHtsOjeP'

  // Initialiser EmailJS au chargement du composant
  useEffect(() => {
    console.log('🔧 Initialisation EmailJS...')
    console.log('Public Key:', PUBLIC_KEY)
    
    try {
      emailjs.init(PUBLIC_KEY)
      console.log('✅ EmailJS initialisé avec succès')
    } catch (error) {
      console.error('❌ Erreur initialisation EmailJS:', error)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    console.log('📧 Début de l\'envoi...')

    // Sauvegarder la référence du formulaire AVANT de changer l'état
    const form = e.currentTarget

    try {
      // Récupération des données du formulaire
      const formData = new FormData(form)
      
      const templateParams = {
        to_email: 'Contact@eneoshabitat.fr',
        from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        from_email: formData.get('email'),
        phone: formData.get('phone') || 'Non renseigné',
        subject: formData.get('subject'),
        message: formData.get('message'),
        first_name: formData.get('firstName'),
        last_name: formData.get('lastName'),
      }

      console.log('📋 Données du formulaire:', templateParams)
      console.log('🔑 Service ID:', SERVICE_ID)
      console.log('📝 Template ID:', TEMPLATE_ID)

      // Vérification que emailjs est bien chargé
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS n\'est pas chargé')
      }

      console.log('🚀 Envoi de l\'email via EmailJS...')

      // Envoi de l'email via EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      )

      console.log('✅ Réponse EmailJS:', response)
      console.log('📬 Status:', response.status)
      console.log('📬 Text:', response.text)

      // Reset du formulaire AVANT de changer l'état
      form.reset()

      setIsSubmitted(true)
      setIsLoading(false)
    } catch (err: any) {
      console.error('❌ ERREUR COMPLÈTE:', err)
      console.error('Type de l\'erreur:', typeof err)
      console.error('Erreur stringifiée:', JSON.stringify(err, null, 2))
      
      // Essayer d'extraire plus d'infos
      console.error('Détails erreur:', {
        name: err?.name,
        message: err?.message,
        text: err?.text,
        status: err?.status,
        stack: err?.stack
      })
      
      // Vérifier si c'est une erreur réseau
      if (err?.message?.includes('Failed to fetch') || err?.message?.includes('Network')) {
        setError('Erreur réseau : impossible de contacter le serveur EmailJS. Vérifiez votre connexion internet.')
      } else if (err?.text) {
        setError(`Erreur EmailJS : ${err.text}`)
      } else if (err?.message) {
        setError(`Erreur : ${err.message}`)
      } else {
        setError('Une erreur inconnue est survenue. Consultez la console pour plus de détails.')
      }
      
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      {/* Hero avec image de fond */}
<div className="relative bg-[#1a2e35] text-white py-20 overflow-hidden">
  {/* Image de fond */}
  <div className="absolute inset-0">
    <Image
      src="/images/team.jpeg"
      alt="Contact ENEOS HABITAT"
      fill
      className="object-cover opacity-50"
      priority
    />
    {/* Overlay pour garder le texte lisible */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e35]/85 via-[#1a2e35]/70 to-[#1a2e35]/85" />
  </div>

  {/* Contenu par-dessus l'image */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white/20">
        CONTACT
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
        Contactez <span className="text-[#2d8a5e]">ENEOS HABITAT</span>
      </h1>
      <p className="text-lg text-white/90 drop-shadow">
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
                      contact@eneoshabitat.fr
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
                  <h2 className="text-2xl font-bold mb-4">Message envoyé avec succès !</h2>
                  <p className="text-muted-foreground mb-8">
                    Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)} 
                    className="bg-[#2d8a5e] hover:bg-[#238a50] text-white"
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                  
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                      <strong>⚠️ Erreur:</strong><br />
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input 
                          id="lastName" 
                          name="lastName"
                          placeholder="Votre nom" 
                          className="mt-2" 
                          required 
                          disabled={isLoading}
                        />
                      </div>
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input 
                          id="firstName" 
                          name="firstName"
                          placeholder="Votre prénom" 
                          className="mt-2" 
                          required 
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="votre@email.fr" 
                          className="mt-2" 
                          required 
                          disabled={isLoading}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          placeholder="06 XX XX XX XX" 
                          className="mt-2" 
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Sujet *</Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        placeholder="Objet de votre message" 
                        className="mt-2" 
                        required 
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Votre message..."
                        className="mt-2"
                        rows={6}
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#2d8a5e] hover:bg-[#238a50] text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Envoyer le message
                        </>
                      )}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.5234567!2d-0.5289999!3d44.7456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x20db0718369e24b1%3A0x1585cef5f6998650!2s3466%20Avenue%20de%20Toulouse%2C%2033140%20Cadaujac!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation ENEOS HABITAT - 3466 Avenue de Toulouse, 33140 Cadaujac"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
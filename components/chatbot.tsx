"use client"

import React from "react"
import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Bonjour ! Je suis l'assistant virtuel d'ENEOS HABITAT. Comment puis-je vous aider aujourd'hui ?",
    isBot: true,
    timestamp: new Date(),
  },
]

const quickReplies = [
  "Demander un devis",
  "Infos sur le DPE",
  "Zones d'intervention",
  "Audit énergétique",
  "Prendre rendez-vous",
]

const botResponses: Record<string, string> = {
  devis: "Pour obtenir un devis gratuit et personnalisé, vous pouvez utiliser notre formulaire de devis en ligne disponible 24h/24. Il vous suffit de cliquer sur 'Devis en ligne' dans le menu ou de me dire quel type de diagnostic vous souhaitez.",
  dpe: "Le DPE (Diagnostic de Performance Énergétique) évalue la consommation énergétique d'un bien et son impact sur les émissions de gaz à effet de serre. Il est obligatoire pour toute vente ou location. Sa validité est de 10 ans. Souhaitez-vous un devis pour un DPE ?",
  zone: "ENEOS HABITAT intervient dans toute la Gironde (33) en moins de 48h et en région Nouvelle-Aquitaine (16, 17, 24, 47, 40) en moins de 72h. Nous nous déplaçons rapidement pour réaliser vos diagnostics. Où se situe votre bien ?",
  rendez: "Pour prendre rendez-vous, vous pouvez nous appeler au +33 6 61 07 08 91 ou nous envoyer un email à Contact@eneoshabitat.fr. Nous sommes disponibles du lundi au samedi de 9h à 19h.",
  prix: "Nos tarifs sont compétitifs et adaptés à chaque situation. Le prix dépend du type de bien, de sa superficie et des diagnostics nécessaires. Demandez un devis gratuit pour connaître le tarif exact. Profitez de nos remises sur les packs : -20% à partir de 4 diagnostics, -25% pour 5 diagnostics, -30% pour 6 diagnostics ou plus !",
  amiante: "Le diagnostic amiante est obligatoire pour les biens construits avant le 1er juillet 1997. Il recherche la présence d'amiante dans les matériaux de construction. Souhaitez-vous plus d'informations ?",
  plomb: "Le diagnostic plomb (CREP) est obligatoire pour les logements construits avant 1949. Il détecte la présence de plomb dans les peintures. Valable 1 an pour la vente si positif, illimité si négatif.",
  electricite: "Le diagnostic électricité est obligatoire pour les installations de plus de 15 ans lors d'une vente ou location. Il vérifie la conformité et la sécurité de l'installation électrique.",
  gaz: "Le diagnostic gaz concerne les installations de plus de 15 ans. Il vérifie la sécurité de l'installation et est valable 3 ans pour la vente, 6 ans pour la location.",
  termites: "L'état relatif à la présence de termites est obligatoire dans les zones à risque définies par arrêté préfectoral. Il est valable 6 mois. La Gironde est concernée par ce risque.",
  erp: "L'ERP (État des Risques et Pollutions) informe sur les risques naturels, miniers, technologiques et de pollution auxquels est exposé le bien. Obligatoire pour toute transaction.",
  carrez: "La loi Carrez concerne les biens en copropriété. Elle mesure la surface privative du lot. Ce diagnostic est valable sans limite de temps sauf si des travaux modifient la surface.",
  boutin: "La surface habitable (loi Boutin) est obligatoire pour toute location. Elle mesure la surface de plancher après déduction des surfaces occupées par les murs, cloisons, etc.",
  audit: "L'audit énergétique est une étude approfondie de votre bien immobilier pour identifier les travaux de rénovation énergétique les plus pertinents. Plus complet que le DPE, il propose un plan d'actions chiffré pour améliorer votre performance énergétique. Obligatoire depuis 2023 pour la vente de maisons classées F ou G. Souhaitez-vous plus d'informations ?",
  default: "Je comprends votre demande. Pour une réponse plus précise, n'hésitez pas à nous contacter directement au +33 6 61 07 08 91 ou par email à Contact@eneoshabitat.fr. Puis-je vous aider autrement ?",
}

function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes("devis") || lowerMessage.includes("tarif") || lowerMessage.includes("prix")) {
    return lowerMessage.includes("prix") ? botResponses.prix : botResponses.devis
  }
  if (lowerMessage.includes("dpe") || lowerMessage.includes("énergétique") || lowerMessage.includes("performance")) {
    return botResponses.dpe
  }
  if (lowerMessage.includes("audit")) {
    return botResponses.audit
  }
  if (lowerMessage.includes("zone") || lowerMessage.includes("intervention") || lowerMessage.includes("secteur") || lowerMessage.includes("où") || lowerMessage.includes("déplace")) {
    return botResponses.zone
  }
  if (lowerMessage.includes("rendez") || lowerMessage.includes("rdv") || lowerMessage.includes("appel") || lowerMessage.includes("contact")) {
    return botResponses.rendez
  }
  if (lowerMessage.includes("amiante")) {
    return botResponses.amiante
  }
  if (lowerMessage.includes("plomb")) {
    return botResponses.plomb
  }
  if (lowerMessage.includes("électri") || lowerMessage.includes("electri")) {
    return botResponses.electricite
  }
  if (lowerMessage.includes("gaz")) {
    return botResponses.gaz
  }
  if (lowerMessage.includes("termite") || lowerMessage.includes("insecte")) {
    return botResponses.termites
  }
  if (lowerMessage.includes("erp") || lowerMessage.includes("risque") || lowerMessage.includes("pollution")) {
    return botResponses.erp
  }
  if (lowerMessage.includes("carrez") || lowerMessage.includes("copropriété")) {
    return botResponses.carrez
  }
  if (lowerMessage.includes("boutin") || lowerMessage.includes("habitable")) {
    return botResponses.boutin
  }
  if (lowerMessage.includes("bonjour") || lowerMessage.includes("salut") || lowerMessage.includes("hello")) {
    return "Bonjour ! Je suis ravi de vous accueillir. Comment puis-je vous aider avec vos diagnostics immobiliers aujourd'hui ?"
  }
  if (lowerMessage.includes("merci")) {
    return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. ENEOS HABITAT est à votre service !"
  }
  
  return botResponses.default
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(text),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#1a5f3c] text-white shadow-lg hover:bg-[#154d31] transition-all duration-300 flex items-center justify-center ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#1a5f3c] text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Assistant ENEOS</h3>
                <p className="text-xs text-green-200">En ligne - Réponse instantanée</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Fermer le chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`flex items-end gap-2 max-w-[85%] ${
                  message.isBot ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    message.isBot
                      ? "bg-[#1a5f3c] text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {message.isBot ? (
                    <Bot className="h-4 w-4" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    message.isBot
                      ? "bg-white text-gray-800 rounded-bl-md shadow-sm"
                      : "bg-[#1a5f3c] text-white rounded-br-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1a5f3c] text-white flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="px-4 py-3 border-t bg-white">
          <div className="flex flex-wrap gap-2 mb-3">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-[#1a5f3c] hover:text-white text-gray-700 rounded-full transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-white">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Écrivez votre message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
              className="bg-[#1a5f3c] hover:bg-[#154d31] text-white px-4"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
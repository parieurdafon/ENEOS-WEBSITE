import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ChatBot } from '@/components/chatbot'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'ENEOS HABITAT - Études Thermiques et Diagnostics Immobiliers',
  description: 'ENEOS HABITAT, votre expert en diagnostics immobiliers et études thermiques à Cadaujac. DPE, Amiante, Plomb, Électricité, Gaz, Termites, ERP, Loi Carrez. Devis gratuit en ligne 24h/24.',
  keywords: 'diagnostic immobilier, DPE, amiante, plomb, électricité, gaz, termites, ERP, loi Carrez, Cadaujac, Bordeaux, Gironde',
  authors: [{ name: 'ENEOS HABITAT' }],
  openGraph: {
    title: 'ENEOS HABITAT - Études Thermiques et Diagnostics Immobiliers',
    description: 'Votre expert en diagnostics immobiliers et études thermiques à Cadaujac',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
        <Analytics />
      </body>
    </html>
  )
}

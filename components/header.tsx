'use client'


import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const services = [
  { name: "DPE - Diagnostic Performance Énergétique", href: "/services/dpe" },
  { name: "Amiante", href: "/services/amiante" },
  { name: "Audit Énergétique", href: "/services/audit-energetique" }, // ← AJOUTER CETTE LIGNE
  { name: "Plomb", href: "/services/plomb" },
  { name: "Électricité", href: "/services/electricite" },
  { name: "Gaz", href: "/services/gaz" },
  { name: "Termites", href: "/services/termites" },
  { name: "ERP - État des Risques et Pollutions", href: "/services/erp" },
  { name: "Loi Carrez", href: "/services/carrez" },
  { name: "Loi Boutin", href: "/services/boutin" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1a5f3c] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+33661070891" className="flex items-center gap-2 hover:text-green-200 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+33 6 61 07 08 91</span>
            </a>
            <a href="mailto:Contact@eneoshabitat.fr" className="flex items-center gap-2 hover:text-green-200 transition-colors">
              <Mail className="h-4 w-4" />
              <span>Contact@eneoshabitat.fr</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-green-200">Du lundi au samedi de 09h à 19h</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Partenaire KLARITY</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
  className={`sticky top-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "glass-effect shadow-md py-1"
      : "bg-white py-2"
  }`}
>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ENEOS HABITAT - Études thermiques et diagnostics immobiliers"
                width={120}
                height={120}
                className="h-12 md:h-14 lg:h-16 w-auto transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Accueil
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary font-medium transition-colors">
                  Services <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link href={service.href} className="cursor-pointer">
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/vente"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Vente
              </Link>

              <Link
                href="/location"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Location
              </Link>

              <Link
                href="/a-propos"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                À propos
              </Link>

              <Link
                href="/contact"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Contact
              </Link>
              
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent">
                <Link href="/devis">Devis en ligne 24/24h</Link>
              </Button>
              <Button asChild className="bg-[#1a5f3c] hover:bg-[#154d31] text-white">
                <a href="tel:+33661070891">
                  <Phone className="h-4 w-4 mr-2" />
                  Appeler
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="py-2 text-foreground hover:text-primary font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Accueil
                </Link>

                <div className="py-2">
                  <p className="font-medium text-foreground mb-2">Services</p>
                  <div className="pl-4 flex flex-col gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-muted-foreground hover:text-primary text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/vente"
                  className="py-2 text-foreground hover:text-primary font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Vente
                </Link>

                <Link
                  href="/location"
                  className="py-2 text-foreground hover:text-primary font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Location
                </Link>

                <Link
                  href="/a-propos"
                  className="py-2 text-foreground hover:text-primary font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  À propos
                </Link>
               

                <Link
                  href="/contact"
                  className="py-2 text-foreground hover:text-primary font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                

                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Button asChild className="w-full bg-[#1a5f3c] hover:bg-[#154d31] text-white">
                    <Link href="/devis">Devis en ligne 24/24h</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href="tel:+33661070891">
                      <Phone className="h-4 w-4 mr-2" />
                      +33 6 61 07 08 91
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
 
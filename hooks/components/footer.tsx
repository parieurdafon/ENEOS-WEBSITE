import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a2e35] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Restez informé</h3>
            <p className="text-white/70 mb-6">
              Recevez nos conseils et actualités en diagnostics immobiliers directement par email.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
              />
              <Button className="bg-[#2d8a5e] hover:bg-[#238a50] text-white">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="ENEOS HABITAT"
                width={140}
                height={140}
                className="h-24 w-auto bg-white rounded-lg p-2"
              />
            </Link>

            <p className="text-white/70 leading-relaxed mb-6">
              ENEOS HABITAT accompagne particuliers et professionnels dans leurs diagnostics immobiliers
              et études thermiques, avec rigueur, transparence et expertise.
            </p>

            <div className="flex gap-4">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2d8a5e] transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nous contacter</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-[#2d8a5e]" />
                <span>
                  3466 Avenue de Toulouse<br />
                  33140 Cadaujac
                </span>
              </li>
              <li>
                <a href="tel:+33661070891" className="flex items-center gap-3 hover:text-white">
                  <Phone className="h-5 w-5 text-[#2d8a5e]" />
                  +33 6 61 07 08 91
                </a>
              </li>
              <li>
                <a href="mailto:Contact@eneoshabitat.fr" className="flex items-center gap-3 hover:text-white">
                  <Mail className="h-5 w-5 text-[#2d8a5e]" />
                  contact@eneoshabitat.fr
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-[#2d8a5e]" />
                Lun - Sam : 09h à 19h
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">Informations légales</h4>
            <p className="text-sm text-white/70">
              <strong className="text-[#2d8a5e]">SIREN :</strong> 989 825 484
            </p>
            <p className="text-sm text-white/70 mt-2">
              <strong className="text-[#2d8a5e]">SIRET :</strong> 989 825 484 00011
            </p>
            <p className="text-sm text-white/60 mt-4">
              SAS au capital de 2 000 € – Société à mission
            </p>
          </div>

        </div>
      </div>

      {/* Bottom */}
      {/* Bottom */}
{/* Bottom Bar */}
<div className="border-t border-white/10">
  <div className="container mx-auto px-4 py-6">
    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/60">

      {/* Copyright */}
      <p>
        © {new Date().getFullYear()} ENEOS HABITAT. Tous droits réservés.
      </p>

      {/* Mentions légales */}
      <Link
        href="/mentions-legales"
        className="flex items-center gap-2 hover:text-white transition-colors"
      >
        <MessageCircle className="h-4 w-4" />
        <span>Mentions légales</span>
      </Link>

    </div>
  </div>
</div>


    </footer>
  )
}

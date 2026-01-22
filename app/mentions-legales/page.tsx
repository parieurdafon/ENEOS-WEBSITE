import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales | ENEOS HABITAT",
  description: "Mentions légales du site ENEOS HABITAT - Diagnostics immobiliers en Gironde.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1a2e35] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Mentions Légales</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">1. Informations légales</h2>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">Raison sociale :</strong> ENEOS HABITAT</p>
              <p><strong className="text-foreground">Forme juridique :</strong> SAS - Société par Actions Simplifiée (Société à mission)</p>
              <p><strong className="text-foreground">Capital social :</strong> 2 000 €</p>
              <p><strong className="text-foreground">SIREN :</strong> 989 825 484</p>
              <p><strong className="text-foreground">SIRET :</strong> 989 825 484 00011</p>
              <p><strong className="text-foreground">Numéro de TVA :</strong> FR 87 989825484</p>
              <p><strong className="text-foreground">Siège social :</strong> 3466 Avenue de Toulouse, 33140 Cadaujac</p>
              <p><strong className="text-foreground">Téléphone :</strong> +33 6 61 07 08 91</p>
              <p><strong className="text-foreground">Email :</strong> Contact@eneoshabitat.fr</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">2. Directeur de la publication</h2>
            <p className="text-muted-foreground">
              Le directeur de la publication est le représentant légal de la société ENEOS HABITAT.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">3. Hébergement</h2>
            <div className="space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Hébergeur :</strong> Vercel Inc.</p>
              <p><strong className="text-foreground">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">4. Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive 
              d&apos;ENEOS HABITAT ou de ses partenaires. Toute reproduction, représentation, modification, publication, 
              transmission ou dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que 
              ce soit, et sur quelque support que ce soit est interdite sans l&apos;autorisation écrite préalable 
              d&apos;ENEOS HABITAT.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">5. Protection des données personnelles</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique 
              et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition 
              aux données personnelles vous concernant.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Les informations recueillies via les formulaires de ce site sont destinées uniquement à ENEOS HABITAT 
              pour le traitement de vos demandes. Elles ne sont en aucun cas cédées à des tiers.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Pour exercer vos droits, contactez-nous à : Contact@eneoshabitat.fr
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">6. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic. 
              En continuant à naviguer sur ce site, vous acceptez leur utilisation. Vous pouvez configurer 
              votre navigateur pour refuser les cookies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">7. Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              ENEOS HABITAT s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées 
              sur ce site. Toutefois, ENEOS HABITAT ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité 
              des informations mises à disposition sur ce site. En conséquence, ENEOS HABITAT décline toute 
              responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations 
              disponibles sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">8. Droit applicable</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et après 
              tentative de recherche d&apos;une solution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

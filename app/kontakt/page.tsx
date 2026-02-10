import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from "lucide-react";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktiere ${RESTAURANT.name} in Heilbronn. Adresse: ${RESTAURANT.address.full}. Telefon: ${RESTAURANT.phoneFormatted}. Wir freuen uns auf dich!`,
  openGraph: {
    title: `Kontakt | ${RESTAURANT.name}`,
    description: `So erreichst du uns: Adresse, Telefon, Öffnungszeiten und Anfahrt.`,
  },
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-card to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            <span className="text-primary">Kontakt</span> & Anfahrt
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir freuen uns auf deinen Besuch oder Anruf. Hier findest du alle
            wichtigen Informationen.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold text-foreground text-lg">
                      Adresse
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      {RESTAURANT.name}
                      <br />
                      {RESTAURANT.address.street}
                      <br />
                      {RESTAURANT.address.zip} {RESTAURANT.address.city}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${RESTAURANT.address.googleMapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      <Navigation className="h-4 w-4" />
                      Route planen
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground text-lg">
                      Telefon
                    </h2>
                    <a
                      href={RESTAURANT.phoneLink}
                      className="block mt-2 text-2xl font-bold text-primary hover:underline"
                    >
                      {RESTAURANT.phoneFormatted}
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Für Bestellungen, Reservierungen & Fragen
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground text-lg">
                      E-Mail
                    </h2>
                    <a
                      href={`mailto:${RESTAURANT.email}`}
                      className="block mt-2 text-lg text-primary hover:underline"
                    >
                      {RESTAURANT.email}
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Wir antworten in der Regel innerhalb eines Tages
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold text-foreground text-lg mb-4">
                      Öffnungszeiten
                    </h2>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-border">
                        <span className="text-muted-foreground">
                          {RESTAURANT.openingHours.weekdays.days}
                        </span>
                        <span className="font-medium text-foreground">
                          {RESTAURANT.openingHours.weekdays.hours}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-border">
                        <span className="text-muted-foreground">
                          {RESTAURANT.openingHours.weekend.days}
                        </span>
                        <span className="font-medium text-foreground">
                          {RESTAURANT.openingHours.weekend.hours}
                        </span>
                      </div>
                      <div className="pt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-amber-500 font-semibold">
                            {RESTAURANT.openingHours.closed.name}
                          </span>
                          <span className="font-medium text-amber-500">
                            {RESTAURANT.openingHours.closed.day}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="aspect-[4/3] lg:aspect-[3/4]">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${RESTAURANT.address.googleMapsQuery}&zoom=16`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tokio Sushi Standort"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-4 border-t border-border">
                  <a
                    href={`https://maps.google.com/?q=${RESTAURANT.address.googleMapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary/10 text-primary rounded-xl font-medium hover:bg-primary/20 transition-colors"
                  >
                    In Google Maps öffnen
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lieferando Banner */}
      <section className="py-12 bg-card border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            Du möchtest lieber online bestellen?
          </p>
          <a
            href={RESTAURANT.links.lieferando}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#FF8000] text-white rounded-xl font-semibold hover:bg-[#E67300] transition-colors"
          >
            Auf Lieferando bestellen
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ExternalLink, MapPin, Clock, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Jetzt bestellen",
  description: `Sushi bestellen bei ${RESTAURANT.name} in Heilbronn. Online bestellen, telefonisch oder über Lieferando. Abholung und Lieferung möglich.`,
  openGraph: {
    title: `Jetzt bestellen | ${RESTAURANT.name}`,
    description: `Bestelle frisches Sushi in Heilbronn. Online, telefonisch oder über Lieferando.`,
  },
};

export default function BestellenPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-card to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Jetzt <span className="text-primary">bestellen</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Wähle deine bevorzugte Bestellmethode – wir freuen uns auf deine
            Bestellung!
          </p>
        </div>
      </section>

      {/* Order Options */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Lieferando */}
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 hover:border-[#FF8000]/50 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#FF8000]/10 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🛵</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    Lieferando
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Online bestellen mit Lieferung
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Bestelle bequem über Lieferando und lass dir dein Sushi direkt
                nach Hause liefern. Schnell, einfach und zuverlässig.
              </p>
              <a
                href={RESTAURANT.links.lieferando}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#FF8000] text-white rounded-xl font-semibold hover:bg-[#E67300] transition-colors group-hover:scale-[1.02] transform transition-transform"
              >
                <ShoppingBag className="h-5 w-5" />
                Auf Lieferando bestellen
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Telefonisch */}
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 hover:border-primary/50 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    Telefonisch
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Direkt anrufen & bestellen
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Ruf uns an und bestelle direkt bei uns. Wir beraten dich gerne
                und nehmen deine Bestellung entgegen.
              </p>
              <a
                href={RESTAURANT.phoneLink}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors group-hover:scale-[1.02] transform transition-transform"
              >
                <Phone className="h-5 w-5" />
                {RESTAURANT.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Pickup Info */}
          <div className="mt-8 bg-card rounded-2xl border border-border p-6 lg:p-8">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              Abholung vor Ort
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                <p className="text-muted-foreground">
                  {RESTAURANT.address.street}
                  <br />
                  {RESTAURANT.address.zip} {RESTAURANT.address.city}
                </p>
                <a
                  href={`https://maps.google.com/?q=${RESTAURANT.address.googleMapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:underline"
                >
                  Route planen
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{RESTAURANT.openingHours.weekdays.days}</span>
                    <span className="text-foreground font-medium">
                      {RESTAURANT.openingHours.weekdays.hours}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{RESTAURANT.openingHours.weekend.days}</span>
                    <span className="text-foreground font-medium">
                      {RESTAURANT.openingHours.weekend.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="mt-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl border border-primary/30 p-6 lg:p-8 text-center">
            <span className="text-4xl mb-4 block">🍣</span>
            <h2 className="text-xl font-bold text-foreground">
              Mittagstisch
            </h2>
            <p className="mt-2 text-primary font-semibold">
              {RESTAURANT.openingHours.lunch.info} · {RESTAURANT.openingHours.lunch.hours}
            </p>
            <p className="mt-2 text-muted-foreground">
              Genieße unser Mittagsangebot mit frischem Sushi!
            </p>
            <a
              href={RESTAURANT.phoneLink}
              className="inline-flex items-center gap-2 mt-4 text-primary hover:underline font-medium"
            >
              <Phone className="h-4 w-4" />
              Jetzt reservieren
            </a>
          </div>
        </div>
      </section>

      {/* Back to Menu */}
      <section className="py-12 bg-card border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">
            Noch unsicher? Schau dir erst unsere Speisekarte an.
          </p>
          <Link href="/speisekarte">
            <Button variant="outline" size="lg">
              Zur Speisekarte
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

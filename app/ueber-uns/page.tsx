import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Award, Heart, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Über uns",
  description: `Erfahre mehr über ${RESTAURANT.name} in Heilbronn. Unsere Geschichte, Philosophie und unser Engagement für Qualität und Frische.`,
  openGraph: {
    title: `Über uns | ${RESTAURANT.name}`,
    description: `Lerne unser Team kennen und erfahre, was uns antreibt: Leidenschaft für japanische Küche und höchste Qualität.`,
  },
};

const values = [
  {
    icon: Leaf,
    title: "Frische Zutaten",
    description:
      "Wir beziehen unsere Zutaten täglich frisch von ausgewählten Lieferanten und achten auf höchste Qualitätsstandards.",
  },
  {
    icon: Heart,
    title: "Mit Liebe gemacht",
    description:
      "Jedes Sushi wird von Hand mit viel Sorgfalt und Leidenschaft zubereitet – so wie es die japanische Tradition vorsieht.",
  },
  {
    icon: Award,
    title: "Qualität zuerst",
    description:
      "Kompromisslose Qualität bei allen Zutaten und in der Zubereitung ist unser oberstes Gebot.",
  },
  {
    icon: Users,
    title: "Für unsere Gäste",
    description:
      "Deine Zufriedenheit steht bei uns an erster Stelle. Wir möchten, dass jeder Besuch ein Genuss wird.",
  },
];

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-card to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Über uns
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                Willkommen bei
                <br />
                <span className="text-primary">{RESTAURANT.name}</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Seit Jahren sind wir deine Adresse für authentisches,
                frisches Sushi und Asia Fusion in Heilbronn. Unsere Leidenschaft für die
                japanische Küche und das Streben nach höchster Qualität treiben
                uns jeden Tag an.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Bei uns findest du keine Massenware, sondern handgemachtes
                Sushi mit ausgewählten Zutaten. Von klassischen Nigiri und Maki
                bis hin zu kreativen Rolls – wir bieten für jeden Geschmack das
                Richtige.
              </p>
            </div>

            {/* Logo */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black/30 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60" />
                {/* Logo centered */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image
                    src="/images/logo-full.png"
                    alt="Tokio Sushi Asia Fusion Logo"
                    width={400}
                    height={400}
                    className="object-contain drop-shadow-[0_0_40px_rgba(196,30,58,0.3)]"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm rounded-2xl border border-white/10 p-5 shadow-xl">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Jahre Erfahrung
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm rounded-2xl border border-white/10 p-5 shadow-xl">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Frische Qualität
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Image Full Width */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/restaurant.jpg"
          alt="Tokio Sushi Restaurant Ambiente"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Modernes Ambiente
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto drop-shadow-md">
              Genieße dein Sushi in stilvollem Ambiente – oder bestelle bequem nach Hause
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Unsere Werte
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Was uns ausmacht
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Unsere Philosophie und unser Anspruch an uns selbst
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl border border-white/5 p-6 text-center hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/images/sushi-detail.png"
                alt="Frisches Sushi von Tokio Sushi Heilbronn"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Philosophie
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Tradition trifft Moderne
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Wir glauben, dass gutes Sushi mehr ist als nur Essen – es ist
                eine Kunstform. Deshalb legen wir größten Wert auf die Auswahl
                unserer Zutaten und die traditionelle Zubereitung.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Unser Reis wird nach japanischer Tradition zubereitet, unser
                Fisch ist immer frisch, und unsere Kreationen verbinden das
                Beste aus Tradition und moderner Asia Fusion Küche.
              </p>
              <div className="mt-8 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground mt-1">Gerichte</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-xs text-muted-foreground mt-1">Zufriedene Gäste</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5</div>
                  <div className="text-xs text-muted-foreground mt-1">Sterne Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-card to-background border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Überzeuge dich selbst
          </h2>
          <p className="mt-3 text-muted-foreground">
            Probiere unser Sushi und erlebe den Unterschied.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bestellen">
              <Button size="lg" className="w-full sm:w-auto">
                <ShoppingBag className="h-5 w-5" />
                Jetzt bestellen
              </Button>
            </Link>
            <Link href="/speisekarte">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Speisekarte ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${RESTAURANT.name}. Rechtliche Informationen und Kontaktdaten.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Impressum
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-muted-foreground">
              {RESTAURANT.name}
              <br />
              {RESTAURANT.address.street}
              <br />
              {RESTAURANT.address.zip} {RESTAURANT.address.city}
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Kontakt
            </h2>
            <p className="text-muted-foreground">
              Telefon: {RESTAURANT.phoneFormatted}
              <br />
              E-Mail: {RESTAURANT.email}
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-muted-foreground">
              {RESTAURANT.name}
              <br />
              {RESTAURANT.address.street}
              <br />
              {RESTAURANT.address.zip} {RESTAURANT.address.city}
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Streitschlichtung
            </h2>
            <p className="text-muted-foreground">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              <br />
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Haftung für Inhalte
            </h2>
            <p className="text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Haftung für Links
            </h2>
            <p className="text-muted-foreground">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Urheberrecht
            </h2>
            <p className="text-muted-foreground">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

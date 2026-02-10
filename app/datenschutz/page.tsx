import type { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${RESTAURANT.name}. Informationen zur Verarbeitung personenbezogener Daten.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              Allgemeine Hinweise
            </h3>
            <p className="text-muted-foreground">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              Datenerfassung auf dieser Website
            </h3>
            <p className="text-muted-foreground">
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              Datenschutz
            </h3>
            <p className="text-muted-foreground">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="text-muted-foreground">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
              <br />
              <br />
              {RESTAURANT.name}
              <br />
              {RESTAURANT.address.street}
              <br />
              {RESTAURANT.address.zip} {RESTAURANT.address.city}
              <br />
              <br />
              Telefon: {RESTAURANT.phoneFormatted}
              <br />
              E-Mail: {RESTAURANT.email}
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              Cookies
            </h3>
            <p className="text-muted-foreground">
              Diese Website verwendet nur technisch notwendige Cookies. Dabei
              handelt es sich um kleine Textdateien, die Ihr Browser automatisch
              erstellt und die auf Ihrem Endgerät gespeichert werden.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              Server-Log-Dateien
            </h3>
            <p className="text-muted-foreground">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              4. Externe Dienste
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              Google Maps
            </h3>
            <p className="text-muted-foreground">
              Diese Website nutzt Google Maps zur Darstellung unseres Standorts.
              Anbieter ist die Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Irland. Bei der Nutzung von Google Maps werden
              Daten an Google übertragen.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              Google Fonts
            </h3>
            <p className="text-muted-foreground">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              so genannte Google Fonts. Beim Aufruf einer Seite lädt Ihr Browser
              die benötigten Fonts in ihren Browsercache, um Texte und
              Schriftarten korrekt anzuzeigen.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              5. Ihre Rechte
            </h2>
            <p className="text-muted-foreground">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren
              Fragen zum Thema Datenschutz können Sie sich jederzeit unter der
              im Impressum angegebenen Adresse an uns wenden.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

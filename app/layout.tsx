import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileOrderBar } from "@/components/layout/mobile-order-bar";
import { RESTAURANT } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-jp",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#C41E3A",
};

export const metadata: Metadata = {
  metadataBase: new URL(RESTAURANT.links.website),
  title: {
    default: `${RESTAURANT.name} | Sushi Restaurant Heilbronn`,
    template: `%s | ${RESTAURANT.name}`,
  },
  description: `${RESTAURANT.description} Jetzt online bestellen oder anrufen: ${RESTAURANT.phoneFormatted}`,
  keywords: [
    "Sushi Heilbronn",
    "Sushi Restaurant Heilbronn",
    "Sushi Innenstadt Heilbronn",
    "Sushi Lieferservice Heilbronn",
    "Sushi bestellen Heilbronn",
    "Japanisches Restaurant Heilbronn",
    "Maki Heilbronn",
    "Nigiri Heilbronn",
    "Sushi Takeaway Heilbronn",
    "Asia Fusion Heilbronn",
    "Tokio Sushi",
    "Sushi Allee Heilbronn",
  ],
  authors: [{ name: RESTAURANT.name }],
  creator: RESTAURANT.name,
  publisher: RESTAURANT.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: RESTAURANT.links.website,
    siteName: RESTAURANT.name,
    title: `${RESTAURANT.name} | Frisches Sushi in Heilbronn`,
    description: RESTAURANT.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${RESTAURANT.name} - Frisches Sushi in Heilbronn`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESTAURANT.name} | Sushi Restaurant Heilbronn`,
    description: RESTAURANT.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: RESTAURANT.links.website,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// JSON-LD Schema für Restaurant
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": RESTAURANT.links.website,
  name: RESTAURANT.name,
  image: `${RESTAURANT.links.website}/og-image.jpg`,
  url: RESTAURANT.links.website,
  telephone: RESTAURANT.phone,
  email: RESTAURANT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: RESTAURANT.address.street,
    addressLocality: RESTAURANT.address.city,
    postalCode: RESTAURANT.address.zip,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: RESTAURANT.geo.lat,
    longitude: RESTAURANT.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
      opens: "11:30",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
      opens: "17:30",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "12:00",
      closes: "22:00",
    },
  ],
  servesCuisine: ["Japanese", "Sushi"],
  priceRange: "$$",
  acceptsReservations: "True",
  menu: `${RESTAURANT.links.website}/speisekarte`,
  hasMenu: {
    "@type": "Menu",
    url: `${RESTAURANT.links.website}/speisekarte`,
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Nigiri",
        hasMenuItem: {
          "@type": "MenuItem",
          name: "Lachs Nigiri",
          description: "Frischer Lachs auf Sushi-Reis",
        },
      },
      {
        "@type": "MenuSection",
        name: "Maki",
      },
      {
        "@type": "MenuSection",
        name: "Inside-Out Rolls",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "250",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileOrderBar />
      </body>
    </html>
  );
}

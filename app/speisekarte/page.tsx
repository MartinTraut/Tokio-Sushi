import type { Metadata } from "next";
import { SpeisekarteContent } from "./speisekarte-content";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Speisekarte",
  description: `Entdecke unsere Speisekarte: Frisches Sushi, Nigiri, Maki, Inside-Out Rolls und mehr. ${RESTAURANT.name} in Heilbronn. Jetzt online bestellen!`,
  openGraph: {
    title: `Speisekarte | ${RESTAURANT.name}`,
    description: `Frisches Sushi, Nigiri, Maki und japanische Spezialitäten. Jetzt die komplette Speisekarte entdecken.`,
  },
};

export default function SpeisekartePage() {
  return <SpeisekarteContent />;
}

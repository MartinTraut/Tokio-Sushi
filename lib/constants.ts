// Restaurant Informationen - Tokio Sushi Heilbronn
export const RESTAURANT = {
  name: "Tokio Sushi",
  legalName: "Tokio Sushi Heilbronn",
  subtitle: "Asia Fusion",
  tagline: "Frisches Sushi & Asia Fusion in Heilbronn.",
  description: "Premium Sushi & Asia Fusion Restaurant in Heilbronn. Frisch zubereitetes Sushi, Maki, Nigiri, Sashimi und mehr. Abholung und Lieferung.",

  // Kontakt
  phone: "07131 9195988",
  phoneFormatted: "07131 - 919 59 88",
  phoneLink: "tel:+4971319195988",
  email: "info@tokio-sushi.de",

  // Adresse
  address: {
    street: "Allee 33-35",
    zip: "74072",
    city: "Heilbronn",
    district: "Innenstadt",
    country: "Deutschland",
    full: "Allee 33-35, 74072 Heilbronn",
    googleMapsQuery: "Tokio+Sushi+Allee+33+Heilbronn",
  },

  // Öffnungszeiten
  openingHours: {
    weekdays: {
      days: "Montag, Dienstag, Donnerstag, Freitag",
      hours: "11:30 - 14:30 & 17:30 - 22:00 Uhr",
    },
    weekend: {
      days: "Samstag & Sonntag",
      hours: "12:00 - 22:00 Uhr",
    },
    closed: {
      name: "Ruhetag",
      day: "Mittwoch",
    },
    lunch: {
      name: "Mittagstisch",
      hours: "11:30 - 14:30 Uhr",
      info: "Mo, Di, Do, Fr",
    },
  },

  // Links
  links: {
    lieferando: "https://www.lieferando.de/speisekarte/tokio-sushi-heilbronn",
    website: "https://www.tokio-sushi.de",
  },

  // Social Media
  social: {
    instagram: "",
    facebook: "",
  },

  // Geo (Heilbronn Innenstadt)
  geo: {
    lat: 49.1427,
    lng: 9.2109,
  },
} as const;

// Navigation
export const NAV_ITEMS = [
  { href: "/", label: "Start" },
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/bestellen", label: "Bestellen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

// Trust-Elemente
export const TRUST_ITEMS = [
  {
    icon: "fish",
    title: "Frische Zutaten",
    description: "Täglich frischer Fisch",
  },
  {
    icon: "clock",
    title: "Schnelle Zubereitung",
    description: "Mit Liebe handgemacht",
  },
  {
    icon: "truck",
    title: "Lieferung & Abholung",
    description: "Bequem zu dir nach Hause",
  },
  {
    icon: "award",
    title: "Premium Qualität",
    description: "Seit Jahren in Heilbronn",
  },
] as const;

// Speisekarten-Kategorien
export const MENU_CATEGORIES = [
  { id: "nigiri", name: "Nigiri", description: "Handgeformter Reis mit frischem Fisch" },
  { id: "maki", name: "Maki", description: "Klassische Sushi-Rollen im Nori-Blatt" },
  { id: "inside-out", name: "Inside-Out", description: "California Style mit Reis außen" },
  { id: "temaki", name: "Temaki", description: "Handgerollte Sushi-Tüten" },
  { id: "sashimi", name: "Sashimi", description: "Purer Fischgenuss ohne Reis" },
  { id: "donburi", name: "Donburi", description: "Japanische Reisschalen" },
  { id: "bento", name: "Bento", description: "Zusammengestellte Menüs" },
  { id: "sets", name: "Sushi Sets", description: "Sushi-Kombinationen" },
  { id: "warm", name: "Warme Gerichte", description: "Suppen, Nudeln & mehr" },
  { id: "desserts", name: "Desserts", description: "Süßer Abschluss" },
] as const;

// Beispiel-Gerichte (Platzhalter - mit echten Daten ersetzen wenn verfügbar)
export const MENU_ITEMS = [
  // Nigiri
  { id: 1, category: "nigiri", name: "Sake Nigiri", description: "2 Stück, frischer Lachs auf Sushi-Reis", price: 4.50, image: "/images/sushi/nigiri-salmon.jpg", popular: true },
  { id: 2, category: "nigiri", name: "Maguro Nigiri", description: "2 Stück, Thunfisch auf Sushi-Reis", price: 5.50, image: "/images/sushi/nigiri-tuna.jpg", popular: true },
  { id: 3, category: "nigiri", name: "Ebi Nigiri", description: "2 Stück, gekochte Garnelen", price: 4.80, image: "/images/sushi/nigiri-shrimp.jpg", popular: false },
  { id: 4, category: "nigiri", name: "Unagi Nigiri", description: "2 Stück, gegrillter Aal", price: 6.00, image: "/images/sushi/nigiri-eel.jpg", popular: false },
  { id: 5, category: "nigiri", name: "Tamago Nigiri", description: "2 Stück, japanisches Omelett", price: 3.50, image: "/images/sushi/nigiri-tamago.jpg", popular: false },

  // Maki
  { id: 10, category: "maki", name: "Sake Maki", description: "6 Stück, klassische Lachsrolle", price: 5.00, image: "/images/sushi/maki-salmon.jpg", popular: true },
  { id: 11, category: "maki", name: "Tekka Maki", description: "6 Stück, mit frischem Thunfisch", price: 5.50, image: "/images/sushi/maki-tuna.jpg", popular: false },
  { id: 12, category: "maki", name: "Avocado Maki", description: "6 Stück, vegetarisch mit Avocado", price: 4.00, image: "/images/sushi/maki-avocado.jpg", popular: false },
  { id: 13, category: "maki", name: "Kappa Maki", description: "6 Stück, mit Gurke", price: 3.50, image: "/images/sushi/maki-cucumber.jpg", popular: false },

  // Inside-Out
  { id: 20, category: "inside-out", name: "California Roll", description: "8 Stück, Surimi, Avocado, Gurke, Sesam", price: 8.50, image: "/images/sushi/california-roll.jpg", popular: true },
  { id: 21, category: "inside-out", name: "Spicy Tuna Roll", description: "8 Stück, scharfer Thunfisch mit Frühlingszwiebel", price: 9.50, image: "/images/sushi/spicy-tuna.jpg", popular: true },
  { id: 22, category: "inside-out", name: "Rainbow Roll", description: "8 Stück, mit verschiedenen Fischsorten", price: 12.00, image: "/images/sushi/rainbow-roll.jpg", popular: true },
  { id: 23, category: "inside-out", name: "Dragon Roll", description: "8 Stück, Aal, Avocado, Garnele", price: 13.00, image: "/images/sushi/dragon-roll.jpg", popular: true },

  // Temaki
  { id: 25, category: "temaki", name: "Sake Temaki", description: "Handrolle mit Lachs", price: 4.50, image: "/images/sushi/temaki-salmon.jpg", popular: false },
  { id: 26, category: "temaki", name: "Spicy Tuna Temaki", description: "Handrolle mit scharfem Thunfisch", price: 5.00, image: "/images/sushi/temaki-tuna.jpg", popular: false },

  // Sashimi
  { id: 30, category: "sashimi", name: "Sake Sashimi", description: "5 Stück, purer Lachs", price: 9.00, image: "/images/sushi/sashimi-salmon.jpg", popular: true },
  { id: 31, category: "sashimi", name: "Maguro Sashimi", description: "5 Stück, purer Thunfisch", price: 10.00, image: "/images/sushi/sashimi-tuna.jpg", popular: false },
  { id: 32, category: "sashimi", name: "Sashimi Moriawase", description: "12 Stück, gemischte Auswahl", price: 18.00, image: "/images/sushi/sashimi-mix.jpg", popular: true },

  // Donburi
  { id: 35, category: "donburi", name: "Chirashi Don", description: "Sushi-Reis mit verschiedenen Fischsorten", price: 14.00, image: "/images/sushi/chirashi.jpg", popular: true },
  { id: 36, category: "donburi", name: "Sake Don", description: "Sushi-Reis mit Lachs", price: 12.00, image: "/images/sushi/sake-don.jpg", popular: false },

  // Bento
  { id: 40, category: "bento", name: "Bento Box Classic", description: "Gemischtes Sushi, Salat, Miso-Suppe", price: 15.00, image: "/images/sushi/bento-classic.jpg", popular: true },
  { id: 41, category: "bento", name: "Bento Box Deluxe", description: "Premium Sushi-Auswahl, Salat, Suppe, Dessert", price: 22.00, image: "/images/sushi/bento-deluxe.jpg", popular: true },

  // Sets
  { id: 50, category: "sets", name: "Sushi Set Klein", description: "12 Teile: 4 Nigiri, 8 Maki", price: 15.00, image: "/images/sushi/set-small.jpg", popular: false },
  { id: 51, category: "sets", name: "Sushi Set Mittel", description: "24 Teile: 6 Nigiri, 18 Maki/Rolls", price: 28.00, image: "/images/sushi/set-medium.jpg", popular: true },
  { id: 52, category: "sets", name: "Sushi Set Groß", description: "36 Teile: 8 Nigiri, 28 Maki/Rolls", price: 42.00, image: "/images/sushi/set-large.jpg", popular: true },
  { id: 53, category: "sets", name: "All You Can Eat", description: "Unbegrenzt Sushi (Mo & Do 18-22 Uhr)", price: 17.00, image: "/images/sushi/all-you-can-eat.jpg", popular: true },

  // Warme Gerichte
  { id: 60, category: "warm", name: "Miso Suppe", description: "Traditionelle japanische Suppe mit Tofu", price: 3.50, image: "/images/sushi/miso-soup.jpg", popular: false },
  { id: 61, category: "warm", name: "Edamame", description: "Gesalzene Sojabohnen", price: 4.00, image: "/images/sushi/edamame.jpg", popular: false },
  { id: 62, category: "warm", name: "Gyoza", description: "6 Stück, japanische Teigtaschen", price: 6.00, image: "/images/sushi/gyoza.jpg", popular: true },
  { id: 63, category: "warm", name: "Ramen", description: "Japanische Nudelsuppe", price: 12.00, image: "/images/sushi/ramen.jpg", popular: false },

  // Desserts
  { id: 70, category: "desserts", name: "Mochi Eis", description: "3 Stück, verschiedene Sorten", price: 5.50, image: "/images/sushi/mochi.jpg", popular: true },
  { id: 71, category: "desserts", name: "Matcha Eis", description: "Grüntee-Eis", price: 4.00, image: "/images/sushi/matcha-ice.jpg", popular: false },
] as const;

// Mittagsmenüs
export const LUNCH_MENUS = [
  { id: 1, name: "Mittagsmenü 1", description: "6 Maki + 2 Nigiri", price: 7.50 },
  { id: 2, name: "Mittagsmenü 2", description: "8 California Roll", price: 7.50 },
  { id: 3, name: "Mittagsmenü 3", description: "Chirashi Bowl klein", price: 7.50 },
  { id: 4, name: "Mittagsmenü 4", description: "Bento Box Lunch", price: 7.50 },
] as const;

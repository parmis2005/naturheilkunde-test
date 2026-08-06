export const practice = {
  name: "Naturheilpraxis Mustermann",
  practitioner: "Max Mustermann",
  title: "Heilpraktiker Köln",
  addressLine1: "Musterstraße 12",
  addressLine2: "50667 Köln",
  addressFull: "Musterstraße 12, 50667 Köln",
  secondLocationName: "PRAXIS M. MUSTERMANN / BeckenBodenBoosta",
  secondLocationAddress: "Gartenstr. 45, 50354 Hürth",
  phone: "0123 456789",
  phoneHref: "tel:+490123456789",
  mobile: "0123 456789",
  mobileHref: "tel:+490123456789",
  whatsappHref: "https://wa.me/490123456789",
  fax: "0123 456789",
  email: "info@naturheilpraxis-mustermann.de",
  hours: "Montag – Freitag: 8:30 – 18:30 Uhr",
  doctolibUrl:
    "https://www.doctolib.de/heilpraktiker/koeln/max-mustermann?utm_campaign=website-button&utm_source=max-mustermann-website-button&utm_medium=referral&utm_content=option-8&utm_term=max-mustermann",
  oldAppointmentUrl: "https://naturheilpraxis-mustermann.de/content/terminvereinbarung",
  mapsQuery: "Musterstraße 12, 50667 Köln",
  lat: 50.941,
  lon: 6.958,
  mapsEmbedSrc:
    "https://www.openstreetmap.org/export/embed.html?bbox=6.9540000%2C50.9380000%2C6.9620000%2C50.9440000&layer=mapnik&marker=50.9410000%2C6.9580000",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Schwerpunkte",
    href: "/schwerpunkte",
    children: [
      { label: "Blutegeltherapie", href: "/schwerpunkte/blutegeltherapie" },
      {
        label: "Laserakupunktur / Lasertherapie",
        href: "/schwerpunkte/laserakupunktur-lasertherapie",
      },
      { label: "Osteopathie", href: "/schwerpunkte/osteopathie" },
      { label: "Raucherentwöhnung", href: "/schwerpunkte/raucherentwoehnung" },
      { label: "Hilfe beim Abnehmen", href: "/schwerpunkte/hilfe-beim-abnehmen" },
      { label: "Beckenbodentraining", href: "/schwerpunkte/beckenbodentraining" },
    ],
  },
  {
    label: "Service",
    href: "/service",
    children: [
      { label: "Allgemeiner Hinweis", href: "/service/allgemeiner-hinweis" },
      { label: "Honorar / Preise", href: "/service/honorar" },
      { label: "Gutscheine", href: "/service/gutscheine" },
      { label: "Urlaubszeiten", href: "/service/urlaubszeiten" },
    ],
  },
  { label: "Kontakt", href: "/kontakt" },
  {
    label: "Praxisgemeinschaft",
    href: "https://massagepraxis-sonnenschein.de",
    children: [
      { label: "Massagepraxis", href: "https://massagepraxis-sonnenschein.de" },
      { label: "Praxis für Psychotherapie", href: "https://psychotherapie-bergmann.de" },
    ],
  },
];

export const footerPartnerLinks = [
  { label: "Massagepraxis Sonnenschein", href: "https://massagepraxis-sonnenschein.de" },
  {
    label: "Psychotherapiepraxis Bergmann",
    href: "https://psychotherapie-bergmann.de",
  },
];

export const externalContactLinks = [
  {
    label: "Naturheilpraxis Mustermann bei GoYellow",
    href: "#",
  },
  {
    label: "Heilpraktiker für Lasertherapie Köln",
    href: "#",
  },
  { label: "Firmenbuch für Köln", href: "#" },
  { label: "www.naturheilkunde-verzeichnis.de", href: "#" },
  { label: "www.wohlfuehlportal-beispiel.de", href: "#" },
  {
    label: "Physiotherapie Musterstadt",
    href: "#",
  },
  { label: "Regional.de Köln", href: "#" },
  { label: "www.heilpraktiker-beispiel.info", href: "#" },
  { label: "Max Mustermann bei jameda.de", href: "#" },
];

export const healthArticles = [
  {
    title: "Wie kommt es zu einer Pilzinfektion?",
    date: "Samstag, 1. August 2026",
    href: "#",
    teaser:
      "Was ist ein Pilz, und warum gibt es Pilze, die bei Menschen Infektionen auslösen können?",
  },
  {
    title: "Haarpflege im Sommer",
    date: "Donnerstag, 30. Juli 2026",
    href: "#",
    teaser:
      "Sommerliche Sonne belastet nicht nur die Haut, sondern auch die Haare.",
  },
  {
    title: "Wenn Schwitzen zum Lebensproblem wird",
    date: "Dienstag, 28. Juli 2026",
    href: "#",
    teaser:
      "Übermäßiges krankhaftes Schwitzen belastet Betroffene körperlich und seelisch.",
  },
];

export type ServiceSummary = {
  slug: string;
  title: string;
  shortTitle: string;
  teaser: string;
  image: string;
};

export const services: ServiceSummary[] = [
  {
    slug: "blutegeltherapie",
    title: "Blutegeltherapie",
    shortTitle: "Blutegeltherapie",
    teaser:
      "Eine jahrhundertealte, ausleitende Behandlungsmethode – besonders bewährt bei Arthrose, Nervenschmerzen und rheumatischen Beschwerden.",
    image: "/images/blutegel_2.jpg",
  },
  {
    slug: "laserakupunktur-lasertherapie",
    title: "Laserakupunktur / Lasertherapie",
    shortTitle: "Laserakupunktur",
    teaser:
      "Nadelfreie Akupunktur mit gebündeltem Licht – schmerzfrei, auch für empfindliche Patient:innen und Kinder geeignet.",
    image: "/images/laser_1.jpg",
  },
  {
    slug: "osteopathie",
    title: "Osteopathie",
    shortTitle: "Osteopathie",
    teaser:
      "Ganzheitliche manuelle Diagnostik und Behandlung von Gelenk-, Rücken- und Kopfbeschwerden ohne Hilfsmittel.",
    image: "/images/osteo_1.jpg",
  },
  {
    slug: "raucherentwoehnung",
    title: "Raucherentwöhnung",
    shortTitle: "Raucherentwöhnung",
    teaser:
      "Rauchfrei werden mit Laserakupunktur – ohne Gewichtszunahme, schmerzfrei und in nur einer Sitzung.",
    image: "/images/raucher_hero.jpg",
  },
  {
    slug: "hilfe-beim-abnehmen",
    title: "Hilfe beim Abnehmen",
    shortTitle: "Abnehmen",
    teaser:
      "Sanfte Lasertherapie an Ohrpunkten unterstützt Stoffwechsel, Sättigungsgefühl und einen nachhaltig neuen Lebensstil.",
    image: "/images/abnehmen_hero.jpg",
  },
  {
    slug: "beckenbodentraining",
    title: "Beckenbodentraining",
    shortTitle: "Beckenbodentraining",
    teaser:
      "Der BeckenBodenBoosta trainiert Ihren Beckenboden im Sitzen – ganz ohne Ausziehen und ohne aktives Mitmachen.",
    image: "/images/becken_2.jpg",
  },
];

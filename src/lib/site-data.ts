export const practice = {
  name: "Naturheilpraxis Meschede",
  practitioner: "Michael Meschede",
  title: "Heilpraktiker Köln",
  addressLine1: "Breite Str. 28-30",
  addressLine2: "50667 Köln",
  addressFull: "Breite Str. 28-30, 50667 Köln",
  secondLocationName: "PRAXIS M. MESCHEDE / BeckenBodenBoosta",
  secondLocationAddress: "Bachstr. 60, 50354 Hürth",
  phone: "0221 9345700",
  phoneHref: "tel:+492219345700",
  mobile: "0155 66835501",
  mobileHref: "tel:+4915566835501",
  whatsappHref: "https://wa.me/4915566835501",
  fax: "0221 25083081",
  email: "info@naturheilpraxis-meschede.de",
  hours: "Montag – Freitag: 8:30 – 18:30 Uhr",
  doctolibUrl:
    "https://www.doctolib.de/heilpraktiker/koeln/michael-meschede?utm_campaign=website-button&utm_source=michael-meschede-website-button&utm_medium=referral&utm_content=option-8&utm_term=michael-meschede",
  oldAppointmentUrl: "https://naturheilpraxis-meschede.de/content/terminvereinbarung",
  mapsQuery: "Breite Str. 28-30, 50667 Köln",
  lat: 50.9391801,
  lon: 6.9522776,
  mapsEmbedSrc:
    "https://www.openstreetmap.org/export/embed.html?bbox=6.9482776%2C50.9361801%2C6.9562776%2C50.9421801&layer=mapnik&marker=50.9391801%2C6.9522776",
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
    href: "https://kanomassage.de",
    children: [
      { label: "Massagepraxis", href: "https://kanomassage.de" },
      { label: "Praxis für Psychotherapie", href: "https://psychotherapie-multhaupt.de" },
    ],
  },
];

export const footerPartnerLinks = [
  { label: "Massagepraxis Kanomassage", href: "https://kanomassage.de" },
  {
    label: "Psychotherapiepraxis Multhaupt",
    href: "https://psychotherapie-multhaupt.de",
  },
];

export const externalContactLinks = [
  {
    label: "Naturheilpraxis Meschede bei GoYellow",
    href: "https://www.goyellow.de/home/heilpraktiker-fuer-lasertherapie-naturheilpraxis-meschede-altstadt-stadt-koeln.html?topxid=9283465",
  },
  {
    label: "Heilpraktiker für Lasertherapie Köln",
    href: "https://www.goyellow.de/suche/heilpraktiker-f%C3%BCr-lasertherapie/k%C3%B6ln?topxid=9283465",
  },
  { label: "Firmenbuch für Köln", href: "http://www.koeln-informativ.de/" },
  { label: "www.naturheilkunde.de", href: "http://www.naturheilkunde.de/" },
  { label: "www.wohlfuehlportal.de", href: "http://www.wohlfuehlportal.de/" },
  {
    label: "Physiotherapie Witten Bochum Remscheid",
    href: "http://physiotherapie-witten-bochum-remscheid.de/",
  },
  { label: "Regional.de Köln", href: "http://www.regional.de/ks/179" },
  { label: "www.heilpraktiker.info", href: "http://www.heilpraktiker.info" },
  { label: "Michael Meschede bei jameda.de", href: "https://www.jameda.de/michael-meschede/heilpraktiker/koeln" },
];

export const healthArticles = [
  {
    title: "Wie kommt es zu einer Pilzinfektion?",
    date: "Samstag, 25. Juli 2026",
    href: "http://www.gesundheit-aktuell.de/artikel/wie-kommt-es-zu-einer-pilzinfektion.html",
    teaser:
      "Was ist ein Pilz, und warum gibt es Pilze, die bei Menschen Infektionen auslösen können?",
  },
  {
    title: "Haarpflege im Sommer",
    date: "Donnerstag, 23. Juli 2026",
    href: "http://www.gesundheit-aktuell.de/artikel/haarpflege-im-sommer.html",
    teaser:
      "Sommerliche Sonne belastet nicht nur die Haut, sondern auch die Haare.",
  },
  {
    title: "Wenn Schwitzen zum Lebensproblem wird",
    date: "Dienstag, 21. Juli 2026",
    href: "http://www.gesundheit-aktuell.de/artikel/wenn-schwitzen-zum-lebensproblem-wird.html",
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

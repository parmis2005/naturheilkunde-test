export type Section = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  listTitle?: string;
};

export type Schwerpunkt = {
  slug: string;
  navLabel: string;
  title: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  sections: Section[];
  gallery: string[];
  priceNote?: string;
  ctaText: string;
};

export const schwerpunkte: Schwerpunkt[] = [
  {
    slug: "blutegeltherapie",
    navLabel: "Blutegeltherapie",
    title: "Blutegeltherapie in Köln",
    metaDescription:
      "Blutegeltherapie in der Naturheilpraxis Meschede in Köln: ausleitendes Verfahren bei Arthrose, Nervenschmerzen und rheumatischen Beschwerden.",
    heroImage: "/images/blutegel_2.jpg",
    heroImageAlt: "Blutegeltherapie in der Naturheilpraxis Meschede in Köln",
    intro:
      "Die Blutegeltherapie zählt zu den ältesten bekannten Heilverfahren der Menschheit. Als ausleitendes und derivatives Verfahren setze ich sie in meiner Kölner Praxis gezielt bei chronischen Schmerz- und Entzündungsprozessen ein.",
    sections: [
      {
        heading: "Wie wirkt die Blutegeltherapie?",
        paragraphs: [
          "Beim Biss verliert der Patient über den Saugakt und den anschließenden Nachblutungsreiz etwa 5 bis 10 ml Blut je Blutegel. Entscheidend ist jedoch nicht allein der Blutverlust, sondern der Speichel des Medizinischen Blutegels: Er enthält mehr als 100 verschiedene Wirkstoffe, von denen bislang rund 25 wissenschaftlich näher untersucht sind. Diese Substanzen wirken unter anderem gerinnungshemmend, entzündungshemmend und durchblutungsfördernd.",
        ],
      },
      {
        heading: "Wann setze ich Blutegel ein?",
        paragraphs: [
          "Das mit Abstand häufigste Anwendungsgebiet in meiner Praxis ist die Arthrose, insbesondere an Knie- und Daumensattelgelenken. Darüber hinaus behandle ich mit der Blutegeltherapie erfolgreich Nervenschmerzen, rheumatische Beschwerden und Wirbelsäulenprobleme.",
        ],
        listTitle: "Weitere Anwendungsgebiete:",
        list: [
          "Arthrose (Knie, Daumensattelgelenk und weitere Gelenke)",
          "Nervenschmerzen",
          "Rheumatische Erkrankungen",
          "Wirbelsäulenbeschwerden",
          "Menstruationsbeschwerden und Endometriose",
          "Schuppenflechte (Psoriasis) und Neurodermitis",
        ],
      },
      {
        heading: "Wie fühlt sich die Behandlung an und wie oft ist sie nötig?",
        paragraphs: [
          "Die meisten Patient:innen berichten von einer spürbaren Vitalisierung für Körper und besonders Geist nach der Behandlung. Für einen nachhaltigen Effekt empfehle ich, die Blutegeltherapie alle 12 bis 36 Monate zu wiederholen.",
        ],
      },
      {
        heading: "Woher stammen die Blutegel?",
        paragraphs: [
          "Ich beziehe meine Blutegel ausschließlich von der Biebertaler Blutegelzucht GmbH. So ist die Sterilität der Tiere garantiert, und jeder Blutegel wird nur ein einziges Mal bei einem Patienten eingesetzt.",
        ],
      },
    ],
    gallery: [
      "/images/blutegel_1.jpg",
      "/images/blutegel_2.jpg",
      "/images/blutegel_3.jpg",
      "/images/blutegel_4.jpg",
    ],
    priceNote: "Die genauen Kosten der Blutegeltherapie erfahren Sie auf Anfrage.",
    ctaText:
      "Sie möchten wissen, ob eine Blutegeltherapie bei Ihren Beschwerden sinnvoll ist? Vereinbaren Sie einen Termin – ich berate Sie gern persönlich.",
  },
  {
    slug: "laserakupunktur-lasertherapie",
    navLabel: "Laserakupunktur / Lasertherapie",
    title: "Laserakupunktur & Lasertherapie in Köln",
    metaDescription:
      "Laserakupunktur und Lasertherapie in der Naturheilpraxis Meschede in Köln: nadelfrei, absolut schmerzfrei, auch für Kinder geeignet.",
    heroImage: "/images/laser_1.jpg",
    heroImageAlt: "Laserakupunktur in der Naturheilpraxis Meschede in Köln",
    intro:
      "Bei der Laserakupunktur stimuliere ich Akupunkturpunkte nicht mit Nadeln, sondern mit gebündeltem rotem oder infrarotem, energiearmem Licht. Die Lasertherapie nutzt dieselbe Technik großflächig zur Behandlung von Verletzungen, Wunden, Entzündungen und Schmerzen.",
    sections: [
      {
        heading: "Typische Anwendungsgebiete bei der natürlichen Schmerzbehandlung",
        list: [
          "Wirbelsäulenbeschwerden",
          "Gelenkerkrankungen",
          "Sehnenprobleme",
          "Sportverletzungen",
          "Hauterkrankungen",
          "Abszesse",
        ],
      },
      {
        heading: "Weitere erfolgreiche Einsatzgebiete",
        paragraphs: [
          "Darüber hinaus setze ich die Laserakupunktur auch bei anderen Themen erfolgreich ein – etwa zur Unterstützung bei der Raucherentwöhnung und im Stressmanagement.",
        ],
      },
      {
        heading: "Vorteile gegenüber der klassischen Nadelakupunktur",
        paragraphs: [
          "Meine Lasertherapie-Geräte arbeiten mit 21 Laserdioden und behandeln eine Fläche von 55 cm² gleichzeitig. Die Anwendung ist absolut schmerzfrei und eignet sich damit hervorragend für sensible Patient:innen und besonders für Kinder, bei denen klassische Nadeln oft nicht infrage kommen.",
        ],
      },
    ],
    gallery: [
      "/images/laser_1.jpg",
      "/images/laser_2.jpg",
      "/images/laser_3.jpg",
      "/images/laser_4.jpg",
      "/images/laser_5.jpg",
      "/images/laser_6.jpg",
      "/images/laser_7.jpg",
      "/images/laser_8.jpg",
    ],
    ctaText:
      "Neugierig, ob Laserakupunktur bei Ihrem Anliegen helfen kann? Buchen Sie Ihren Termin online oder schreiben Sie mir eine E-Mail.",
  },
  {
    slug: "osteopathie",
    navLabel: "Osteopathie",
    title: "Osteopathie in Köln",
    metaDescription:
      "Osteopathie in der Naturheilpraxis Meschede in Köln: rein manuelle, ganzheitliche Diagnostik und Behandlung von Gelenk-, Rücken- und Kopfbeschwerden.",
    heroImage: "/images/osteo_1.jpg",
    heroImageAlt: "Osteopathie-Behandlung in der Naturheilpraxis Meschede in Köln",
    intro:
      "Die Osteopathie wurde Ende des 19. Jahrhunderts von Dr. Andrew Taylor Still begründet. Sein Leitgedanke begleitet mich bis heute: „Ich glaube, die menschliche Maschine ist Gottes Apotheke.“ Osteopathie arbeitet ausschließlich mit den Händen – ohne Geräte, ohne Medikamente.",
    sections: [
      {
        heading: "Wie läuft eine osteopathische Behandlung ab?",
        paragraphs: [
          "Mit gezieltem Ertasten der Gewebeschichten spüre ich Bewegungseinschränkungen und Spannungen im Körper auf. Eine Sitzung dauert zwischen 30 und 60 Minuten und wird individuell auf Ihre Beschwerden abgestimmt.",
        ],
      },
      {
        heading: "Möglichkeiten der Osteopathie",
        listTitle: "Typische Anwendungsgebiete sind unter anderem:",
        list: [
          "Gelenkprobleme",
          "Kreuzschmerzen und Ischialgie",
          "Schleudertrauma und Nackenbeschwerden",
          "Kopfschmerzen und Migräne (häufig kombiniert mit Laserakupunktur)",
          "Schwindel",
          "Tinnitus",
        ],
      },
      {
        heading: "Grenzen der Osteopathie",
        paragraphs: [
          "Akute Notfälle und schwere Erkrankungen wie Tumoren liegen außerhalb des osteopathischen Behandlungsspektrums. In solchen Fällen kann eine begleitende osteopathische Behandlung dennoch wertvolle Unterstützung bieten – in enger Abstimmung mit der schulmedizinischen Therapie.",
        ],
      },
      {
        heading: "Kostenübernahme",
        paragraphs: [
          "Ob und in welcher Höhe Ihre Krankenkasse die Kosten für osteopathische Behandlungen übernimmt, ist individuell unterschiedlich. Ich empfehle, dies vorab direkt bei Ihrer Kasse zu erfragen.",
        ],
      },
    ],
    gallery: ["/images/osteo_1.jpg", "/images/osteo_2.jpg", "/images/osteo_3.jpg"],
    ctaText:
      "Sie leiden unter Rücken-, Kopf- oder Gelenkbeschwerden? Vereinbaren Sie einen osteopathischen Termin in meiner Kölner Praxis.",
  },
  {
    slug: "raucherentwoehnung",
    navLabel: "Raucherentwöhnung",
    title: "Natürliche Raucherentwöhnung in Köln",
    metaDescription:
      "Rauchfrei werden mit Laserakupunktur in der Naturheilpraxis Meschede in Köln – schmerzfrei, ohne Gewichtszunahme, in nur einer Sitzung.",
    heroImage: "/images/raucher_hero.jpg",
    heroImageAlt: "Natürliche Raucherentwöhnung mit Laserakupunktur in Köln",
    intro:
      "Rauchfrei durch Laserakupunktur: Als erfahrener Nichtraucher-Experte in Köln stimuliere ich gezielt Ohrakupunkturpunkte, um Nikotinverlangen zu unterdrücken und Entzugserscheinungen zu minimieren – schmerzfrei und ohne Nebenwirkungen.",
    sections: [
      {
        heading: "Nichtraucher:in werden ohne Gewichtszunahme",
        paragraphs: [
          "Eine Sitzung dauert inklusive Vorgespräch etwa 75 Minuten. Nach meiner Erfahrung werden fast 80 % der Patient:innen bereits nach einer einzigen Sitzung dauerhaft rauchfrei. Damit Sie nach dem Rauchstopp nicht mit Gewichtszunahme kämpfen müssen, behandle ich zusätzlich und ohne Mehrkosten Akupunkturpunkte, die das Gewichtsmanagement unterstützen.",
        ],
      },
      {
        heading: "Für wen eignet sich die Behandlung?",
        paragraphs: ["Die Methode wirkt unabhängig von:"],
        list: [
          "Ihrem Alter",
          "eventuellen Zweifeln an der Wirksamkeit",
          "der Anzahl der täglich gerauchten Zigaretten",
          "der Dauer Ihres Rauchens",
          "bisherigen, erfolglosen Aufhörversuchen",
          "der Art des Tabakprodukts (Zigaretten, Zigarren, Pfeife, E-Zigarette, Vape)",
        ],
      },
      {
        heading: "Ihr neues Leben ohne Zigarette",
        listTitle: "Was sich in Ihrem Körper verbessert:",
        list: [
          "Nach 24 Stunden: Das Herzinfarktrisiko beginnt zu sinken",
          "Nach 48 Stunden: Geschmacks- und Geruchssinn verbessern sich spürbar",
          "Nach 3 Monaten: Die Lungenkapazität steigt um bis zu 30 %",
          "Nach 12 Monaten: Das Herzinfarktrisiko sinkt um 50 %",
          "Nach 10 Jahren: Das Lungenkrebsrisiko normalisiert sich",
        ],
      },
    ],
    gallery: ["/images/raucher_hero.jpg"],
    priceNote:
      "Die Behandlung kostet 279 € als Endpreis (inkl. Vorgespräch, Laserbehandlung und Gewichtsmanagement, ca. 75 Minuten). Nachbehandlungen innerhalb von 3 Monaten kosten 25 €, danach 65 €. Als Gutschein ist die Behandlung bereits für 229 € erhältlich.",
    ctaText:
      "Bereit für ein rauchfreies Leben? Vereinbaren Sie Ihren Termin zur Laserakupunktur – schmerzfrei, schnell und wirksam.",
  },
  {
    slug: "hilfe-beim-abnehmen",
    navLabel: "Hilfe beim Abnehmen",
    title: "Hilfe beim Abnehmen in Köln",
    metaDescription:
      "Gewichtsabnahme durch Laserakupunktur in der Naturheilpraxis Meschede in Köln – natürlich, schmerzfrei und ohne Nebenwirkungen.",
    heroImage: "/images/abnehmen_hero.jpg",
    heroImageAlt: "Hilfe beim Abnehmen durch Laserakupunktur in Köln",
    intro:
      "Diäten allein scheitern oft an Heißhunger, Gewohnheiten und fehlender Motivation. Mit sanfter Laserakupunktur an Ohrpunkten unterstütze ich Ihren Stoffwechsel und helfen Ihnen, nachhaltig neue Essgewohnheiten zu entwickeln.",
    sections: [
      {
        heading: "Ist die Behandlung das Richtige für Sie?",
        paragraphs: [
          "Diese Behandlung könnte gut zu Ihnen passen, wenn Sie eine oder mehrere der folgenden Fragen mit Ja beantworten: Essen Sie häufig, ohne wirklich hungrig zu sein? Fällt es Ihnen schwer, regelmäßig Sport zu treiben? Haben Sie Schwierigkeiten, eine Diät konsequent durchzuhalten? Fühlen Sie sich in einem Kreislauf aus Diäten und erneuter Gewichtszunahme gefangen?",
        ],
      },
      {
        heading: "Wie wirkt die Laserakupunktur beim Abnehmen?",
        listTitle: "Die Behandlung unterstützt Sie auf mehreren Ebenen:",
        list: [
          "Optimierung des Stoffwechsels",
          "Reduktion des Hungergefühls",
          "Verbesserung der Stimmung",
          "Verbesserte Fettverbrennung",
          "Weniger Neubildung von Fettdepots",
          "Mehr Energie für Bewegung und Sport",
        ],
      },
      {
        heading: "Ablauf und Verträglichkeit",
        paragraphs: [
          "Die Behandlung ist schmerzfrei und nebenwirkungsfrei. Wie bei jeder naturheilkundlichen Methode variiert das individuelle Ergebnis von Person zu Person.",
        ],
      },
    ],
    gallery: ["/images/abnehmen_hero.jpg"],
    priceNote:
      "Erstsitzung (60 Minuten): 140 €. Folgesitzungen (40 Minuten): 65 €. Als Gutschein ist die Erstsitzung ebenfalls für 140 € erhältlich.",
    ctaText:
      "Starten Sie Ihren Weg zu einem neuen Lebensgefühl – vereinbaren Sie Ihre erste Sitzung zur Laserakupunktur beim Abnehmen.",
  },
  {
    slug: "beckenbodentraining",
    navLabel: "Beckenbodentraining",
    title: "BeckenBodenBoosta – Beckenbodentraining in Köln & Hürth",
    metaDescription:
      "BeckenBodenBoosta in der Naturheilpraxis Meschede: modernstes elektromagnetisches Beckenbodentraining ohne Ausziehen und ohne Mitmachen.",
    heroImage: "/images/becken_2.jpg",
    heroImageAlt: "BeckenBodenBoosta Beckenbodentraining in Köln und Hürth",
    intro:
      "„Setzen … und gut!“ Der BeckenBodenBoosta ist das modernste Beckenbodentraining, bei dem Sie sich nicht ausziehen und nicht aktiv mitmachen müssen – Sie nehmen einfach nur Platz.",
    sections: [
      {
        heading: "Was ist der BeckenBodenBoosta?",
        paragraphs: [
          "Der BeckenBodenBoosta ist ein spezieller PelviPower-Stuhl, der Ihren Beckenboden mittels elektromagnetischer Impulse trainiert. In einer 30-minütigen Sitzung löst das Gerät mehrere Tausend gezielte Beckenbodenkontraktionen aus – vollständig bekleidet und ganz ohne eigenes Zutun.",
        ],
      },
      {
        heading: "Für wen ist der BeckenBodenBoosta geeignet?",
        list: [
          "Belastungs- und Dranginkontinenz",
          "Stuhlinkontinenz",
          "Rückbildung nach der Geburt",
          "Nach Prostata-Operationen",
          "Erektile Dysfunktion",
          "Allgemeine Beckenbodenschwäche und Prävention",
        ],
      },
      {
        heading: "Auch für Männer geeignet?",
        paragraphs: [
          "Ja. Der BeckenBodenBoosta eignet sich ausdrücklich auch für Männer, etwa zur Unterstützung nach Prostata-Operationen oder bei erektiler Dysfunktion.",
        ],
      },
      {
        heading: "Müssen Sie sich ausziehen?",
        paragraphs: [
          "Nein. Sie sitzen während der gesamten Behandlung vollständig bekleidet auf dem Spezialstuhl. Die Intensität der Impulse stellen Sie dabei selbst ein.",
        ],
      },
      {
        heading: "Wie viele Sitzungen sind sinnvoll?",
        paragraphs: [
          "Erste Effekte spüren die meisten Patient:innen nach 6 bis 12 Behandlungen. Ihr allererster Termin ist bei mir kostenlos, damit Sie den BeckenBodenBoosta unverbindlich kennenlernen können.",
        ],
      },
      {
        heading: "BeckenBodenBoosta oder klassisches Beckenbodentraining?",
        paragraphs: [
          "Im Vergleich zu eigenständigem Training erzielt der BeckenBodenBoosta bis zu 15-mal stärkere Trainingsergebnisse und ist rund 5-mal effektiver als vergleichbare alternative Methoden – bei nur 30 Minuten Zeitaufwand ohne aktive Anstrengung.",
        ],
      },
    ],
    gallery: [
      "/images/becken_1.jpg",
      "/images/becken_2.jpg",
      "/images/becken_3.jpg",
      "/images/becken_4.jpg",
      "/images/becken_5.jpg",
      "/images/becken_6.jpg",
    ],
    priceNote:
      "Der erste Termin ist kostenlos. Einzelsitzung: 49 €. Trainingspakete von 5 bis 50 Sitzungen: 210 € bis 1.300 € (Karten sind unter bis zu 3 Personen übertragbar).",
    ctaText:
      "Testen Sie den BeckenBodenBoosta unverbindlich – Ihr erster Termin in Köln oder Hürth ist kostenlos.",
  },
];

export function getSchwerpunkt(slug: string) {
  return schwerpunkte.find((s) => s.slug === slug);
}

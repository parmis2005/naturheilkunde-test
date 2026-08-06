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
      "Blutegeltherapie in der Naturheilpraxis Mustermann in Köln: ausleitendes Verfahren bei Arthrose, Nervenschmerzen und rheumatischen Beschwerden.",
    heroImage: "/images/blutegel_2.jpg",
    heroImageAlt: "Blutegeltherapie in der Naturheilpraxis Mustermann in Köln",
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
          "Arthrose, z. B. Knie-, Hüft-, Sprung-, Daumensattel- und Schultergelenksarthrose",
          "Nervenschmerzen",
          "Arthritis, Rheuma, Weichteilrheuma (Fibromyalgie) und Gicht",
          "Wirbelsäulenbeschwerden, z. B. Bandscheibenvorfälle",
          "Fersensporn, Zerrungen, Golferarm, Tennisellenbogen und Achillessehnenreizungen",
          "Verstauchungen, Narbenbeschwerden und starke muskuläre Verspannungen",
          "Entzündete Krampfadern und Besenreiser ohne kosmetischen Effekt",
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
          "Ich beziehe meine Blutegel ausschließlich von der Rheinland Blutegelzucht GmbH. So ist die Sterilität der Tiere garantiert, und jeder Blutegel wird nur ein einziges Mal bei einem Patienten eingesetzt.",
        ],
      },
      {
        heading: "Informationen zu Ablauf und Kosten",
        paragraphs: [
          "Wenn Sie eine persönliche Beratung zur Blutegeltherapie wünschen, kontaktieren Sie mich bitte per E-Mail oder telefonisch. Ich schicke Ihnen die Informationen zum Behandlungsablauf und zu den Kosten zu oder bespreche diese bei Ihrem nächsten Termin persönlich mit Ihnen.",
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
      "Laserakupunktur und Lasertherapie in der Naturheilpraxis Mustermann in Köln: nadelfrei, absolut schmerzfrei, auch für Kinder geeignet.",
    heroImage: "/images/laser_1.jpg",
    heroImageAlt: "Laserakupunktur in der Naturheilpraxis Mustermann in Köln",
    intro:
      "Bei der Laserakupunktur stimuliere ich Akupunkturpunkte nicht mit Nadeln, sondern mit gebündeltem rotem oder infrarotem, energiearmem Licht. Die Lasertherapie nutzt dieselbe Technik großflächig zur Behandlung von Verletzungen, Wunden, Entzündungen und Schmerzen.",
    sections: [
      {
        heading: "Typische Anwendungsgebiete bei der natürlichen Schmerzbehandlung",
        list: [
          "Wirbelsäulenbeschwerden wie Hexenschuss, Bandscheibenvorfall oder chronische Nackenschmerzen",
          "Gelenkerkrankungen, Verschleißerscheinungen, Schleimbeutelentzündungen und Entzündungen",
          "Sehnenerkrankungen, besonders entzündliche Sehnenprobleme",
          "Sportverletzungen wie Tennisellenbogen, Golferarm, Prellungen und Verstauchungen",
          "Muskuläre Kontrakturen und schmerzhafte Verkürzungen",
          "Hauterkrankungen, Lippenherpes und Wundheilungsstörungen",
          "Abszesse als Behandlungsoption anstelle einer Operation",
          "Narbenentstörung bei Operations- und Verletzungsnarben",
          "Migräne, häufig in Verbindung mit osteopathischer Behandlung",
        ],
      },
      {
        heading: "Weitere erfolgreiche Einsatzgebiete",
        paragraphs: [
          "Darüber hinaus setze ich die Laserakupunktur auch bei anderen Themen erfolgreich ein – etwa zur Unterstützung bei der Raucherentwöhnung, beim Abnehmen, im Stressmanagement bis hin zu Burn-out-Themen und zum Wiederfinden von körperlicher und seelischer Balance.",
        ],
      },
      {
        heading: "Vorteile gegenüber der klassischen Nadelakupunktur",
        paragraphs: [
          "Meine Lasertherapie-Geräte arbeiten mit 21 Laserdioden und behandeln eine Fläche von 55 cm² gleichzeitig. Die Anwendung ist absolut schmerzfrei und eignet sich damit hervorragend für sensible Patient:innen und besonders für Kinder, bei denen klassische Nadeln oft nicht infrage kommen.",
        ],
        list: [
          "Keine Nadeln und keine Schmerzen",
          "Kurze Behandlungszeit von meist 15 bis 30 Minuten",
          "Sehr geringes Risiko und kaum Behandlungseinschränkungen",
          "Auch bei Blutgerinnungsstörungen anwendbar",
          "Zusätzliche Behandlungsoption neben Osteopathie, Blutegeltherapie, Stoßwellentherapie, Hypnose oder Operationen",
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
      "Osteopathie in der Naturheilpraxis Mustermann in Köln: rein manuelle, ganzheitliche Diagnostik und Behandlung von Gelenk-, Rücken- und Kopfbeschwerden.",
    heroImage: "/images/osteo_1.jpg",
    heroImageAlt: "Osteopathie-Behandlung in der Naturheilpraxis Mustermann in Köln",
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
        paragraphs: [
          "Die Osteopathie betrachtet Beschwerden als mögliches Ergebnis gestörter Wechselwirkungen zwischen Bewegungsapparat, Gewebe und Organen. Ziel ist nicht nur die Bekämpfung einzelner Symptome, sondern das Lösen von Funktionsstörungen und Blockaden, damit der Körper seine Selbstregulation besser nutzen kann.",
        ],
        listTitle: "Typische Anwendungsgebiete sind unter anderem:",
        list: [
          "Gelenkprobleme und Beschwerden im Bewegungsapparat",
          "Kreuzschmerzen, Hexenschuss und Ischialgie",
          "Operationsfolgen wie Narben und Verwachsungen",
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
      "Rauchfrei werden mit Laserakupunktur in der Naturheilpraxis Mustermann in Köln – schmerzfrei, ohne Gewichtszunahme, in nur einer Sitzung.",
    heroImage: "/images/raucher_hero.jpg",
    heroImageAlt: "Natürliche Raucherentwöhnung mit Laserakupunktur in Köln",
    intro:
      "Rauchfrei durch Laserakupunktur: Als erfahrener Nichtraucher-Experte in Köln stimuliere ich gezielt Ohrakupunkturpunkte, um Nikotinverlangen zu unterdrücken und Entzugserscheinungen zu minimieren – schmerzfrei und ohne Nebenwirkungen.",
    sections: [
      {
        heading: "Nichtraucher:in werden ohne Gewichtszunahme",
        paragraphs: [
          "Eine Sitzung dauert inklusive Vorgespräch etwa 75 Minuten. Nach meiner Erfahrung werden fast 80 % der Patient:innen bereits nach einer einzigen Sitzung dauerhaft rauchfrei. Damit Sie nach dem Rauchstopp nicht mit Gewichtszunahme kämpfen müssen, behandle ich zusätzlich und ohne Mehrkosten Akupunkturpunkte, die das Gewichtsmanagement unterstützen.",
          "Die Softlaser-Behandlung stimuliert Akupunkturpunkte an den Ohren, die das Verlangen nach Nikotin deutlich reduzieren und Entzugserscheinungen minimieren sollen. Die Frequenz des Lasers wird patientenbezogen eingestellt; zum Abschluss erhalten Sie ein kleines Geschenk für den Start in das rauchfreie Leben.",
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
          "der Art des Tabakprodukts (Zigaretten, Zigarren, Zigarillos, Pfeife, E-Zigarette, Iqos oder Vape)",
        ],
      },
      {
        heading: "Gutschein und mögliche Nachbehandlungen",
        paragraphs: [
          "Die Kosten für die Raucherentwöhnung sind ein Endpreis; versteckte Zusatzkosten oder ein zusätzlich berechnetes Erstgespräch kommen nicht hinzu. Sollte wider Erwarten eine weitere Laserakupunktur nötig sein, gelten für Nachbehandlungen die auf der Honorar-Seite genannten Preise.",
          "Über einen Gutschein können Sie die Raucherentwöhnung auch verschenken oder für sich selbst erwerben und dabei sparen.",
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
      "Die Behandlung kostet 279 € als Endpreis (inkl. Vorgespräch, Laserbehandlung und Gewichtsmanagement, ca. 75 Minuten). Nachbehandlungen innerhalb von 3 Monaten kosten 25 €, danach 65 €. Als Gutschein ist die Behandlung aktuell für 249 € erhältlich.",
    ctaText:
      "Bereit für ein rauchfreies Leben? Vereinbaren Sie Ihren Termin zur Laserakupunktur – schmerzfrei, schnell und wirksam.",
  },
  {
    slug: "hilfe-beim-abnehmen",
    navLabel: "Hilfe beim Abnehmen",
    title: "Hilfe beim Abnehmen in Köln",
    metaDescription:
      "Gewichtsabnahme durch Laserakupunktur in der Naturheilpraxis Mustermann in Köln – natürlich, schmerzfrei und ohne Nebenwirkungen.",
    heroImage: "/images/abnehmen_hero.jpg",
    heroImageAlt: "Hilfe beim Abnehmen durch Laserakupunktur in Köln",
    intro:
      "Diäten allein scheitern oft an Heißhunger, Gewohnheiten und fehlender Motivation. Mit sanfter Laserakupunktur an Ohrpunkten unterstütze ich Ihren Stoffwechsel und helfe Ihnen, nachhaltig neue Essgewohnheiten zu entwickeln.",
    sections: [
      {
        heading: "Ist die Behandlung das Richtige für Sie?",
        paragraphs: [
          "Diese Behandlung könnte gut zu Ihnen passen, wenn Sie eine oder mehrere der folgenden Fragen mit Ja beantworten: Essen Sie häufig, ohne wirklich hungrig zu sein? Fällt es Ihnen schwer, regelmäßig Sport zu treiben? Haben Sie Schwierigkeiten, eine Diät konsequent durchzuhalten? Fühlen Sie sich in einem Kreislauf aus Diäten und erneuter Gewichtszunahme gefangen?",
          "Die Behandlung richtet sich an Menschen, die ihr Essverhalten und ihre Lebensgewohnheiten mental leichter verändern möchten – etwa beim Verzicht auf Zucker, beim Durchhalten einer Ernährungsumstellung oder beim Aufbau regelmäßiger Bewegung.",
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
          "Die erste Behandlung dauert ca. 60 Minuten und beginnt mit einem Vorgespräch zu Essgewohnheiten und Lebenssituation. Danach startet direkt die Laserbehandlung.",
          "Die Behandlung ist schmerzfrei und nebenwirkungsfrei. Viele Patient:innen nutzen den ersten Termin als deutlichen Motivations- und Stoffwechselimpuls; weitere Termine können je nach Ziel und Bedarf in individueller Frequenz vereinbart werden.",
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
      "BeckenBodenBoosta in der Naturheilpraxis Mustermann: modernstes elektromagnetisches Beckenbodentraining ohne Ausziehen und ohne Mitmachen.",
    heroImage: "/images/becken_2.jpg",
    heroImageAlt: "BeckenBodenBoosta Beckenbodentraining in Köln und Hürth",
    intro:
      "„Setzen … und gut!“ Der BeckenBodenBoosta ist ein modernes, hochintensives Beckenbodentraining auf einem speziellen Beckenbodenstuhl. Die Behandlung erfolgt vollständig bekleidet, ohne aktive Bewegung und ohne Einführen von Geräten – Sie nehmen einfach nur Platz.",
    sections: [
      {
        heading: "Was ist der BeckenBodenBoosta?",
        paragraphs: [
          "Der BeckenBodenBoosta ist ein medizinisch orientierter PelviPower-Stuhl, der mittels elektromagnetischer Stimulation auch sehr tiefliegende Muskelschichten erreicht. Eine Sitzung kann – abhängig vom gewählten Programm – mehrere tausend gezielte Beckenbodenanspannungen ersetzen.",
        ],
        list: [
          "entspanntes Sitzen",
          "vollständig angezogen",
          "automatische, intensive Muskelaktivierung",
          "kein aktives Anspannen erforderlich",
        ],
      },
      {
        heading: "Für wen ist der BeckenBodenBoosta geeignet?",
        list: [
          "Belastungs- und Dranginkontinenz",
          "Stuhlinkontinenz",
          "Rückbildung nach der Geburt",
          "Vor und nach Prostata-Operationen",
          "Erektile Dysfunktion",
          "Senkungsbeschwerden",
          "Rückenschmerzen, Piriformis-Syndrom und Hüftschmerzen",
          "Allgemeine Beckenbodenschwäche und Prävention",
          "Stabilisierung und Ergänzung zur Physiotherapie",
        ],
        paragraphs: [
          "Besonders hilfreich ist die Behandlung für Menschen, die ihren Beckenboden nicht gezielt ansteuern oder wahrnehmen können.",
        ],
      },
      {
        heading: "Auch für Männer geeignet?",
        paragraphs: [
          "Ja. Der BeckenBodenBoosta eignet sich ausdrücklich auch für Männer, etwa vor und nach Prostata-Operationen, bei erektiler Dysfunktion, bei Inkontinenz oder bei einem hyperaktiven Beckenboden. Die Behandlung erfolgt diskret und wird individuell an Ihre Beschwerden angepasst.",
        ],
      },
      {
        heading: "Wie fühlt sich das Training an?",
        paragraphs: [
          "Das Training wird häufig als rhythmisches An- und Entspannen beschrieben: kräftig, gut tolerierbar, nicht unangenehm und nicht schmerzhaft. Nach einigen Sitzungen fühlt es sich für viele fast wie eine Massage an.",
          "Die Intensität können Sie selbst schrittweise steigern. Wenn Sie das lieber gemeinsam abstimmen möchten, begleite ich Sie dabei.",
        ],
      },
      {
        heading: "Müssen Sie sich ausziehen?",
        paragraphs: [
          "Nein. Sie sitzen während der gesamten Behandlung vollständig bekleidet auf dem Spezialstuhl – genau so, wie Sie in die Praxis kommen. Es ist kein Umziehen, keine Intimsituation und kein körperlicher Kontakt notwendig.",
        ],
      },
      {
        heading: "Wie viele Sitzungen sind sinnvoll?",
        paragraphs: [
          "Die Anzahl der Sitzungen hängt vom individuellen Befund, Ihren Beschwerden und Ihrem persönlichen Ziel ab. Vor Beginn biete ich eine 30-minütige kostenlose Probesitzung, kläre relevante Kontraindikationen und gebe eine ehrliche Einschätzung, ob der BeckenBodenBoosta sinnvoll ist und wie viele Sitzungen realistisch nötig sein können.",
          "Erste deutliche Verbesserungen spüren die meisten Patient:innen spätestens nach 6 bis 12 Behandlungen; manchmal früher, manchmal später. Danach entscheiden Sie in Ruhe selbst, ob und wie Sie weitermachen möchten.",
        ],
      },
      {
        heading: "Gibt es Kontraindikationen?",
        paragraphs: [
          "Ja. Wie bei jeder intensiven Therapieform werden mögliche Kontraindikationen vor der ersten Sitzung ausführlich abgefragt. Ihre Sicherheit hat oberste Priorität.",
        ],
        list: [
          "bestimmte Implantate, z. B. Hüftimplantate",
          "Herzschrittmacher",
          "Schwangerschaft",
        ],
      },
      {
        heading: "BeckenBodenBoosta oder klassisches Beckenbodentraining?",
        paragraphs: [
          "Im Vergleich zu eigenständigem Training erzielt der BeckenBodenBoosta bis zu 15-mal stärkere Trainingsergebnisse und ist rund 5-mal effektiver als vergleichbare alternative Methoden – bei nur 30 Minuten Zeitaufwand ohne aktive Anstrengung.",
        ],
        list: [
          "erreicht tiefer liegende Muskulatur",
          "kein aktives Mitmachen oder Anspannen erforderlich",
          "effektiv auch bei fehlender Körperwahrnehmung",
          "ohne Einführen von Geräten und ohne Spezialkleidung",
        ],
      },
      {
        heading: "Warum BeckenBodenBoosta in meiner Praxis?",
        list: [
          "individuelle Einstellung jeder Sitzung",
          "langjährige therapeutische Erfahrung",
          "Heilpraktiker-Praxis statt Fitnessstudio",
          "persönliche Betreuung ohne Zeitdruck",
          "faire Sitzungsmodelle",
          "Standorte in Köln Innenstadt und Hürth-Efferen",
        ],
        paragraphs: [
          "In meiner Praxis kommt ein besonders leistungsstarker Magnetfeldstuhl zum Einsatz, mit dem Beschwerden gezielt und individuell behandelt werden können.",
        ],
      },
      {
        heading: "Studien, Bericht und Praxisvideo",
        paragraphs: [
          "Wissenschaftliche Studien zum Beckenbodentraining mit Magnetfeldtherapie finden Sie unter https://naturheilpraxis-mustermann.de/content/studien-zum-beckenbodentraining-mit-der-magnetfeldtherapie-pelvipower.",
          "Das Deutsche Ärzteblatt hat unter dem Titel „Harninkontinenz: Muskeltraining im Magnetfeld“ über Magnetfeldtherapie bei Harninkontinenz berichtet: https://www.aerzteblatt.de/archiv/36817/Harninkontinenz-Muskeltraining-im-Magnetfeld.",
          "Ein Praxisvideo wird in Kürze an dieser Stelle verlinkt.",
        ],
      },
      {
        heading: "Behandlungsablauf",
        paragraphs: [
          "Beim ersten kostenlosen Termin folgt nach einem individuellen Anamnesegespräch in der Regel direkt die Probesitzung. Sie nehmen 30 Minuten auf dem PelviPower-Spezialstuhl Platz und bleiben dabei vollständig bekleidet.",
          "Ab dem zweiten Termin können viele Patient:innen ihre individuelle Behandlung nach kurzer Einweisung eigenständig starten und durchführen. Wenn Sie darüber hinaus Unterstützung wünschen, begleite ich Sie selbstverständlich weiter.",
          "Für Fragen vorab können Sie das Kontaktformular nutzen, eine Telefonnummer hinterlassen oder per WhatsApp an 0123456789 schreiben.",
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
      "Der erste Termin ist kostenlos. Einzelsitzung: 49 €. Trainingskarten: 5er Karte 210 € (42 € pro Termin), 10er Karte 390 € (39 €), 20er Karte 680 € (34 €, beliebtestes Produkt), 30er Karte 960 € (32 €), 40er Karte 1.120 € (28 €), 50er Karte 1.300 € (26 €, Familien- und Freunde-Karte für maximal 3 Personen). Trainingskarten können bequem per PayPal gekauft werden; Ratenkauf und Später-Bezahlen sind möglich. Resttermine werden bei Anschlusskarten übertragen. Sollten Sie im Umkreis von 50 km um Köln oder Hürth einen günstigeren vergleichbaren Anbieter finden, sprechen Sie mich bitte an.",
    ctaText:
      "Testen Sie den BeckenBodenBoosta unverbindlich – Ihr erster Termin in Köln oder Hürth ist kostenlos.",
  },
];

export function getSchwerpunkt(slug: string) {
  return schwerpunkte.find((s) => s.slug === slug);
}

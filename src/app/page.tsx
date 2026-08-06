import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import MapEmbed from "@/components/MapEmbed";
import { healthArticles, practice, services } from "@/lib/site-data";

const benefits = [
  {
    title: "Natürlich",
    text: "Sanfte, naturheilkundliche Verfahren ohne Nebenwirkungen anstelle von Medikamenten.",
  },
  {
    title: "Ganzheitlich",
    text: "Ich betrachte nicht nur das Symptom, sondern den Menschen als Ganzes.",
  },
  {
    title: "Direkt beim ersten Termin",
    text: "In der Regel beginnt die Behandlung bereits beim ersten Besuch in der Praxis.",
  },
  {
    title: "Zentral in Köln",
    text: "Mitten in der Kölner Innenstadt, nur wenige Gehminuten vom Appellhofplatz entfernt.",
  },
];

const firstAppointmentDocs = [
  "Aktuelle Medikamentenpläne mit Dosierung",
  "Laborwerte",
  "Facharztberichte",
  "Röntgenbilder",
  "MRT-Aufnahmen",
  "CT-Aufnahmen",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 animate-hero-kenburns">
            <Image
              src="/images/koeln-skyline-sketch.jpg"
              alt="Kölner Dom und Hohenzollernbrücke, stilisierte Skyline-Zeichnung"
              fill
              priority
              sizes="100vw"
              className="object-cover object-left-bottom"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/70 to-primary-800/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <p className="mb-4 inline-block rounded-full bg-accent-500/90 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Neu in Köln und Hürth: BeckenBodenBoosta
          </p>
          <h1 className="max-w-5xl font-serif-heading text-[2rem] font-semibold leading-[1.08] text-white sm:text-5xl sm:leading-[1.05] lg:text-6xl">
            <span className="block">Natürliche</span>
            <span className="block">
              <span className="font-extrabold tracking-[-0.02em] text-accent-100">
                Schmerzbehandlung
              </span>
              <span className="hidden sm:inline"> in der</span>
            </span>
            <span className="block sm:hidden">in der Naturheilpraxis</span>
            <span className="block sm:hidden">Mustermann</span>
            <span className="hidden sm:block">Naturheilpraxis Mustermann</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-primary-100 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-relaxed">
            <span className="sm:hidden">
              Ich behandle Ihre Schmerzen natürlich, ganzheitlich und meist direkt beim
              ersten Termin.
            </span>
            <span className="hidden sm:inline">
              Ich behandle Ihre Schmerzen natürlich, ganzheitlich und in der Regel bereits
              direkt beim ersten Termin – mit Blutegeltherapie, Laserakupunktur,
              Osteopathie und weiteren bewährten naturheilkundlichen Verfahren.
            </span>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              href={practice.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent-500 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600"
            >
              Termin bei Doctolib buchen
            </a>
            <Link
              href="/kontakt"
              className="rounded-full border border-white/40 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Kontakt aufnehmen
            </Link>
          </div>
          <p className="mt-6 text-xs leading-5 text-primary-200 sm:mt-8 sm:text-sm sm:leading-normal">
            {practice.addressFull} · {practice.hours}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-primary-100 bg-cream-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {benefits.map((b) => (
            <div key={b.title}>
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-serif-heading text-lg">
                {b.title.charAt(0)}
              </div>
              <h3 className="font-semibold text-primary-800">{b.title}</h3>
              <p className="mt-2 text-sm text-primary-600">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured gallery */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/blutegel_2.jpg"
              alt="Blutegeltherapie in der Naturheilpraxis Mustermann"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-primary-800">
              Blutegeltherapie
            </span>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/laser_1.jpg"
              alt="Laserakupunktur in der Naturheilpraxis Mustermann"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-primary-800">
              Laserakupunktur
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-primary-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/osteo_2.jpg"
              alt="Behandlung in der Naturheilpraxis Mustermann in Köln"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Über die Praxis
            </p>
            <h2 className="mt-2 font-serif-heading text-3xl font-semibold text-primary-800">
              Max Mustermann – Heilpraktiker in Köln
            </h2>
            <p className="mt-4 text-primary-700">
              Als Heilpraktiker in eigener Praxis mitten in Köln habe ich mich auf die
              natürliche Behandlung von Schmerzen spezialisiert. Mein Behandlungsansatz
              folgt drei Grundsätzen: Ich behandle Ihre Schmerzen natürlich, ganzheitlich
              und – wann immer möglich – bereits direkt beim ersten Termin.
            </p>
            <p className="mt-4 text-primary-700">
              Zu meinen Schwerpunkten zählen Blutegeltherapie, Laserakupunktur und
              Lasertherapie, Osteopathie sowie die Magnetfeldtherapie. Darüber hinaus
              begleite ich Sie bei der Raucherentwöhnung, beim Abnehmen und mit modernem
              Beckenbodentraining über den BeckenBodenBoosta – am Standort in Köln und in
              Hürth.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-800 hover:text-accent-600"
            >
              Mehr über die Praxis erfahren
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M7.5 4.5 13 10l-5.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* BeckenBodenBoosta highlight */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl bg-accent-100 lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
            <Image
              src="/images/becken_2.jpg"
              alt="BeckenBodenBoosta – Beckenbodentraining im Sitzen"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="px-6 py-10 sm:px-10 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Setzen … und gut!
            </p>
            <h2 className="mt-2 font-serif-heading text-3xl font-semibold text-primary-800">
              Beckenbodentraining, bei dem Sie nichts weiter tun müssen als Platz zu nehmen
            </h2>
            <p className="mt-4 text-primary-700">
              Der BeckenBodenBoosta trainiert Ihren Beckenboden vollständig bekleidet, im
              Sitzen und ganz ohne aktives Mitmachen. Eine Sitzung dauert rund 30 Minuten
              und erzielt bis zu 15-mal stärkere Trainingsergebnisse als eigenständiges
              Training – Ihr erster Termin ist kostenlos.
            </p>
            <Link
              href="/schwerpunkte/beckenbodentraining"
              className="mt-6 inline-block rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-800"
            >
              Mehr zum BeckenBodenBoosta
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Schwerpunkte
            </p>
            <h2 className="mt-2 font-serif-heading text-3xl font-semibold text-primary-800">
              Naturheilkundliche Behandlungen in Köln
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/schwerpunkte/${s.slug}`}
                className="group overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-primary-800">{s.title}</h3>
                  <p className="mt-2 text-sm text-primary-600">{s.teaser}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                    Mehr erfahren
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M7.5 4.5 13 10l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* First appointment */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Ihr erster Termin
            </p>
            <h2 className="mt-2 font-serif-heading text-3xl font-semibold text-primary-800">
              Das passiert beim ersten Termin zur natürlichen Schmerzbehandlung
            </h2>
            <p className="mt-4 text-primary-700">
              Am Anfang steht ein ausführliches Anamnesegespräch: frühere schwere
              Erkrankungen, Unfälle und Operationen. Anschließend folgt in der Regel eine
              körperliche Untersuchung, bevor wir gemeinsam den Behandlungsplan besprechen.
              In den meisten Fällen beginnt die erste Behandlung noch am selben Termin –
              Ausnahmen bilden Blutegeltherapie, Abnehmen, Raucherentwöhnung und
              Beckenbodentraining, die etwas Vorbereitung benötigen.
            </p>
            <p className="mt-4 text-primary-700">
              Auch ohne vorhandene Befunde finden wir gemeinsam ein passendes
              Therapiekonzept. Für den ersten Termin nehme ich mir bewusst viel Zeit; die
              Kosten liegen bei 65 € – unabhängig davon, ob der Termin eine halbe Stunde
              oder länger dauert.
            </p>
            <h3 className="mt-8 font-semibold text-primary-800">
              Bitte bringen Sie zum ersten Termin mit:
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {firstAppointmentDocs.map((doc) => (
                <li key={doc} className="flex items-start gap-2 text-sm text-primary-700">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" fill="currentColor">
                    <path d="M8.3 13.4 4.9 10l-1.4 1.4 4.8 4.8 9-9-1.4-1.4z" />
                  </svg>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto">
            <Image
              src="/images/laser_2.jpg"
              alt="Beratungsgespräch in der Naturheilpraxis Mustermann"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro video */}
      <section className="bg-primary-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Praxisfilm
            </p>
            <h2 className="mt-2 font-serif-heading text-3xl font-semibold text-primary-800">
              So finden Sie den Weg in die Naturheilpraxis Mustermann in Köln
            </h2>
            <p className="mt-4 text-primary-700">
              Termine zur Schmerztherapie, Raucherentwöhnung und weiteren Behandlungen
              können Sie telefonisch oder per E-Mail vereinbaren; am schnellsten klappt es
              über Doctolib oder per E-Mail.
            </p>
          </div>
          <div className="mt-8 flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl border border-primary-100 bg-primary-100/60 text-primary-400 shadow-sm">
            <svg viewBox="0 0 24 24" className="h-14 w-14" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-sm font-semibold">Videoplatzhalter</span>
          </div>
        </div>
      </section>

      <CTASection
        title="Vereinbaren Sie noch heute Ihren Termin"
        text="Termine vergebe ich am liebsten und schnellsten über Doctolib. Alternativ erreichen Sie mich per E-Mail oder über das Kontaktformular – ich melde mich in der Regel innerhalb von 24 Stunden."
      />

      {/* Location */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              So finden Sie uns
            </p>
            <h2 className="mt-2 font-serif-heading text-3xl font-semibold text-primary-800">
              Naturheilpraxis Mustermann in der Kölner Innenstadt
            </h2>
            <div className="mt-6 space-y-4 text-primary-700">
              <p>
                <strong className="text-primary-800">Adresse:</strong>
                <br />
                {practice.addressFull}
              </p>
              <p>
                <strong className="text-primary-800">Öffnungszeiten:</strong>
                <br />
                {practice.hours}
              </p>
              <p>
                <strong className="text-primary-800">Parken:</strong> Opera Passagen
                Parkhaus direkt gegenüber, ca. 2 Gehminuten entfernt.
              </p>
              <p>
                <strong className="text-primary-800">ÖPNV:</strong> U-Bahn-Haltestelle
                Appellhofplatz (Linien 3, 4, 5, 16, 18), ca. 3 Gehminuten entfernt.
              </p>
              <p>
                <strong className="text-primary-800">Zweitstandort:</strong>{" "}
                {practice.secondLocationName}, {practice.secondLocationAddress}
              </p>
            </div>
          </div>
          <MapEmbed />
        </div>
      </section>

      {/* Gesundheit aktuell */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Gesundheit aktuell
            </p>
            <h2 className="mt-2 font-serif-heading text-3xl font-semibold text-primary-800">
              Aktuelle Gesundheitsthemen
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {healthArticles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                  {article.date}
                </p>
                <h3 className="mt-3 font-serif-heading text-xl font-semibold text-primary-800">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm text-primary-600">{article.teaser}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

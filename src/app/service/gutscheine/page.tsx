import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { practice } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gutscheine",
  description:
    "Verschenken Sie Gesundheit: Gutscheine der Naturheilpraxis Meschede in Köln, z. B. für die Raucherentwöhnung mit Laserakupunktur.",
};

export default function GutscheinePage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Gutscheine"
        subtitle="Verschenken Sie ein Stück Gesundheit – mit einem Gutschein aus der Naturheilpraxis Meschede."
        image="/images/laser_1.jpg"
        imageAlt="Gutschein der Naturheilpraxis Meschede in Köln"
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-accent-300 bg-accent-100/60 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            Aktuelles Angebot
          </p>
          <h2 className="mt-2 font-serif-heading text-2xl font-semibold text-primary-800">
            Gutschein Raucherentwöhnung für 249 € statt 279 €
          </h2>
          <p className="mt-4 text-primary-700">
            Der Gutschein umfasst das Vorgespräch und die Laserakupunktur zur
            Raucherentwöhnung sowie zusätzlich die Laserakupunktur gegen unerwünschte
            Gewichtszunahme (insgesamt ca. 75 Minuten).
          </p>
        </div>

        <h2 className="mt-12 font-serif-heading text-2xl font-semibold text-primary-800">
          So erhalten Sie Ihren Gutschein
        </h2>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start gap-3 text-primary-700">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-xs font-semibold text-white">
              1
            </span>
            Online-Zahlung per PayPal – der Gutschein wird Ihnen anschließend per Post
            zugeschickt.
          </li>
          <li className="flex items-start gap-3 text-primary-700">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-xs font-semibold text-white">
              2
            </span>
            Anfrage per E-Mail an{" "}
            <a href={`mailto:${practice.email}`} className="font-semibold text-accent-600">
              {practice.email}
            </a>{" "}
            mit anschließender Rechnungsstellung per Post.
          </li>
          <li className="flex items-start gap-3 text-primary-700">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-xs font-semibold text-white">
              3
            </span>
            Persönlicher Kauf direkt in der Praxis in der Breite Str. 28-30, 50667 Köln.
          </li>
        </ul>

        <h2 className="mt-12 font-serif-heading text-2xl font-semibold text-primary-800">
          Wichtige Bedingungen
        </h2>
        <ul className="mt-4 space-y-2">
          {[
            "Der Gutschein ist personalisiert und nicht übertragbar.",
            "Er ist neun Monate ab Kaufdatum gültig.",
            "Der Gutschein behält seinen Wert auch bei zukünftigen Preiserhöhungen.",
            "Eine Barauszahlung des Restwerts ist nicht möglich.",
            "Eine Kombination mit anderen Rabattaktionen ist ausgeschlossen.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-primary-700">
              <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500" fill="currentColor">
                <path d="M8.3 13.4 4.9 10l-1.4 1.4 4.8 4.8 9-9-1.4-1.4z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CTASection
        title="Gutschein anfragen"
        text="Schreiben Sie mir eine E-Mail oder rufen Sie an – ich sende Ihnen gerne alle Informationen zu Ihrem persönlichen Gutschein zu."
      />
    </>
  );
}

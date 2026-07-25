import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MapEmbed from "@/components/MapEmbed";
import ContactForm from "@/components/ContactForm";
import { practice } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie die Naturheilpraxis Meschede in Köln: Adresse, Telefon, E-Mail, Öffnungszeiten und Anfahrt.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Kontakt & Anfahrt"
        subtitle="Termine vergebe ich am liebsten und schnellsten über Doctolib. Alternativ erreichen Sie mich per Telefon, E-Mail oder über das Kontaktformular."
        image="/images/osteo_3.jpg"
        imageAlt="Naturheilpraxis Meschede in Köln"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif-heading text-2xl font-semibold text-primary-800">
              Naturheilpraxis Meschede
            </h2>
            <address className="mt-4 space-y-2 not-italic text-primary-700">
              <p>{practice.addressLine1}</p>
              <p>{practice.addressLine2}</p>
              <p className="pt-2">
                Tel:{" "}
                <a href={practice.phoneHref} className="font-semibold text-accent-600">
                  {practice.phone}
                </a>
              </p>
              <p>Fax: {practice.fax}</p>
              <p>
                E-Mail:{" "}
                <a href={`mailto:${practice.email}`} className="font-semibold text-accent-600">
                  {practice.email}
                </a>
              </p>
            </address>

            <div className="mt-8 rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <h3 className="font-semibold text-primary-800">Öffnungszeiten</h3>
              <p className="mt-2 text-primary-700">{practice.hours}</p>
              <p className="mt-4 text-sm text-primary-600">
                Ich bin aufgrund laufender Patientenbehandlungen telefonisch nur selten
                erreichbar – für Terminanfragen nutzen Sie daher gerne die E-Mail-Adresse
                oder Doctolib. Ich melde mich in der Regel innerhalb von 24 Stunden.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-primary-100 bg-white p-6">
              <h3 className="font-semibold text-primary-800">So finden Sie uns</h3>
              <p className="mt-2 text-sm text-primary-700">
                <strong className="text-primary-800">Parken:</strong> Opera Passagen
                Parkhaus direkt gegenüber, ca. 2 Gehminuten entfernt.
              </p>
              <p className="mt-2 text-sm text-primary-700">
                <strong className="text-primary-800">ÖPNV:</strong> U-Bahn-Haltestelle
                Appellhofplatz (Linien 3, 4, 5, 16, 18), ca. 3 Gehminuten entfernt.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-primary-100 bg-white p-6">
              <h3 className="font-semibold text-primary-800">
                {practice.secondLocationName}
              </h3>
              <p className="mt-2 text-sm text-primary-700">
                {practice.secondLocationAddress}
              </p>
              <p className="mt-2 text-sm text-primary-600">
                Standort für Beckenbodentraining mit dem BeckenBodenBoosta in Hürth.
              </p>
            </div>

            <a
              href={practice.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600"
            >
              Termin bei Doctolib buchen
            </a>
          </div>

          <div>
            <h2 className="font-serif-heading text-2xl font-semibold text-primary-800">
              Nachricht schreiben
            </h2>
            <p className="mt-2 text-sm text-primary-600">
              Nutzen Sie das Formular für allgemeine Anfragen. Für die Terminbuchung
              empfehle ich Doctolib.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}

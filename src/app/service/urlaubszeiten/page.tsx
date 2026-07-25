import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { practice } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Urlaubszeiten",
  description:
    "Aktuelle Urlaubs- und Fortbildungszeiten der Naturheilpraxis Meschede in Köln.",
};

export default function UrlaubszeitenPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Urlaubszeiten"
        subtitle="Urlaub und Fortbildungen 2026"
        image="/images/osteo_3.jpg"
        imageAlt="Naturheilpraxis Meschede in Köln"
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-accent-300 bg-accent-100/60 p-6 sm:p-8">
          <h2 className="font-serif-heading text-2xl font-semibold text-primary-800">
            Vom 06.08.2026 bis zum 25.08.2026
          </h2>
          <p className="mt-4 text-primary-700">
            In diesem Zeitraum bin ich wegen meines Sommerurlaubs persönlich nicht
            erreichbar. In dringenden Fällen wenden sich Kölner Patient:innen bitte an
            meinen Kollegen Danil, Hürther Patient:innen an Sandra.
          </p>
          <p className="mt-4 text-primary-700">
            Terminanfragen können Sie in dieser Zeit selbstverständlich über Doctolib
            stellen – so erhalten Sie auch während meiner Abwesenheit sofort Ihren
            Wunschtermin.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-primary-100 bg-primary-50 p-6 sm:p-8">
          <h3 className="font-semibold text-primary-800">Beckenbodentraining</h3>
          <p className="mt-2 text-primary-700">
            Das Beckenbodentraining (Folgetermine) auf dem PelviPower-Spezialstuhl ist
            in den Zeiten meiner Abwesenheit selbstverständlich weiterhin möglich. Sollte
            die Praxis vollständig geschlossen sein, wodurch das Training nicht mehr
            stattfinden kann, erhalten Sie hierzu gesonderte Hinweise.
          </p>
        </div>

        <p className="mt-8 text-primary-700">
          Sie können mir jederzeit auch eine E-Mail schreiben:{" "}
          <a href={`mailto:${practice.email}`} className="font-semibold text-accent-600">
            {practice.email}
          </a>
        </p>
      </section>

      <CTASection
        title="Termin trotz Abwesenheit sichern"
        text="Über Doctolib können Sie jederzeit – auch während meiner Urlaubszeiten – einen passenden Termin buchen."
      />
    </>
  );
}

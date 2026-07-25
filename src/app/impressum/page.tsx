import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { practice } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Naturheilpraxis Meschede in Köln.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        title="Impressum"
        image="/images/osteo_1.jpg"
        imageAlt="Naturheilpraxis Meschede"
      />
      <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-primary-700 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-3">
            {practice.name}
            <br />
            Inhaber: {practice.practitioner}
            <br />
            {practice.addressLine1}
            <br />
            {practice.addressLine2}
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            Kontakt
          </h2>
          <p className="mt-3">
            Telefon: {practice.phone}
            <br />
            Fax: {practice.fax}
            <br />
            E-Mail: {practice.email}
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            Berufsbezeichnung und berufsrechtliche Regelungen
          </h2>
          <p className="mt-3">
            Berufsbezeichnung: Heilpraktiker (verliehen in Deutschland)
            <br />
            Erlaubnis erteilt am 07.11.2012 durch das Gesundheitsamt Köln.
          </p>
          <p className="mt-3">
            Zuständige Aufsichtsbehörde:
            <br />
            Gesundheitsamt Köln
            <br />
            Neumarkt 15-21, 50667 Köln
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            Berufshaftpflichtversicherung
          </h2>
          <p className="mt-3">
            Die Continentale Sachversicherung AG
            <br />
            Ruhrallee 92, 44139 Dortmund
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            Umsatzsteuer
          </h2>
          <p className="mt-3">
            Gemäß § 4 Abs. 14a UStG werden auf Heilbehandlungen im Bereich der
            Humanmedizin keine Umsatzsteuer erhoben.
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            Redaktionell verantwortlich
          </h2>
          <p className="mt-3">
            {practice.practitioner}, {practice.addressLine1}, {practice.addressLine2}
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            Haftung für Inhalte
          </h2>
          <p className="mt-3">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
            TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
            Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt.
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            Haftung für Links
          </h2>
          <p className="mt-3">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
            wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
            keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
            jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            Bildnachweise
          </h2>
          <p className="mt-3">
            Ausgewählte Bilder: Fotolia, Panthermedia, Köln Verliebt.
          </p>
        </div>
      </section>
    </>
  );
}

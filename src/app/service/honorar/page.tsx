import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Honorar",
  description:
    "Honorarübersicht der Naturheilpraxis Mustermann in Köln: Preise für Erstberatung, Folgesitzungen, Raucherentwöhnung, Abnehmen und Beckenbodentraining.",
};

const generalFees = [
  { label: "Erster Termin zur natürlichen Schmerzbehandlung (1–2 Stunden)", price: "65 €" },
  { label: "Folgesitzung, volle Stunde (60 Min.)", price: "85 €" },
  { label: "Folgesitzung, halbe Stunde (30 Min.)", price: "65 €" },
  { label: "Folgesitzung, Viertelstunde (15 Min.)", price: "35 €" },
  { label: "Kurzberatung ohne Therapie (ca. 20 Min.)", price: "25 €" },
];

const specialFees = [
  {
    label: "Raucherentwöhnung (Laserakupunktur, ca. 75 Min., Endpreis)",
    price: "279 €",
  },
  { label: "Raucherentwöhnung – Nachbehandlung (innerhalb 3 Monate)", price: "25 €" },
  { label: "Raucherentwöhnung – Nachbehandlung (nach 3 Monaten)", price: "65 €" },
  { label: "Raucherentwöhnung als Gutschein", price: "249 €" },
  { label: "Hilfe beim Abnehmen – Erstsitzung (60 Min.)", price: "140 €" },
  { label: "Hilfe beim Abnehmen – Folgesitzung (40 Min.)", price: "65 €" },
  { label: "BeckenBodenBoosta – erste Sitzung", price: "kostenlos" },
  { label: "BeckenBodenBoosta – Einzelsitzung", price: "49 €" },
  { label: "BeckenBodenBoosta – 5er-Trainingskarte", price: "210 € / 42 € pro Termin" },
  { label: "BeckenBodenBoosta – 10er-Trainingskarte", price: "390 € / 39 € pro Termin" },
  { label: "BeckenBodenBoosta – 20er-Trainingskarte", price: "680 € / 34 € pro Termin" },
  { label: "BeckenBodenBoosta – 30er-Trainingskarte", price: "960 € / 32 € pro Termin" },
  { label: "BeckenBodenBoosta – 40er-Trainingskarte", price: "1.120 € / 28 € pro Termin" },
  { label: "BeckenBodenBoosta – 50er-Trainingskarte", price: "1.300 € / 26 € pro Termin" },
  { label: "Blutegeltherapie", price: "auf Anfrage" },
];

export default function HonorarPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Honorar"
        subtitle="Transparente Preise für alle Behandlungen in der Naturheilpraxis Mustermann – alle Preise sind Endpreise, es kommt keine Mehrwertsteuer hinzu."
        image="/images/osteo_2.jpg"
        imageAlt="Beratungsgespräch in der Naturheilpraxis Mustermann"
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6 sm:p-8">
          <h2 className="font-serif-heading text-2xl font-semibold text-primary-800">
            Erstattung durch Krankenkassen
          </h2>
          <div className="mt-4 space-y-3 text-primary-700">
            <p>
              Gesetzliche Kranken- und Ersatzkassen übernehmen naturheilkundliche
              Therapieverfahren im Normalfall nicht. Private Krankenversicherungen,
              Zusatzversicherungen oder Beihilfe erstatten Heilpraktikerkosten je nach
              Vertrag ganz oder teilweise.
            </p>
            <p>
              Bitte prüfen Sie Ihre persönlichen Versicherungsbedingungen möglichst vor
              Therapiebeginn. Nicht erstattete Kosten tragen Sie selbst; gegebenenfalls
              können diese als außergewöhnliche Belastungen steuerlich geltend gemacht
              werden.
            </p>
          </div>
        </div>

        <h2 className="mt-12 font-serif-heading text-2xl font-semibold text-primary-800">
          Allgemeine Behandlungskosten
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-primary-100">
          <table className="w-full text-left text-sm">
            <tbody>
              {generalFees.map((fee, i) => (
                <tr
                  key={fee.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-primary-50"}
                >
                  <td className="px-5 py-3.5 text-primary-700">{fee.label}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-primary-800">
                    {fee.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 font-serif-heading text-2xl font-semibold text-primary-800">
          Spezielle Behandlungen
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-primary-100">
          <table className="w-full text-left text-sm">
            <tbody>
              {specialFees.map((fee, i) => (
                <tr
                  key={fee.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-primary-50"}
                >
                  <td className="px-5 py-3.5 text-primary-700">{fee.label}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-primary-800">
                    {fee.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border border-accent-300 bg-accent-100/60 p-6">
          <h3 className="font-semibold text-primary-800">Ausfallgebühr</h3>
          <p className="mt-2 text-primary-700">
            Für reservierte Termine, die nicht wahrgenommen oder nicht bis mindestens 48
            Stunden vor Sitzungsbeginn abgesagt werden, berechne ich eine pauschale
            Ausfallgebühr von 50 €. Termine für den BeckenBodenBoosta
            Magnetfeld-Spezialstuhl sind davon ausgenommen; hier gibt es generell keine
            Ausfallgebühr.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary-100 bg-white p-6">
            <h3 className="font-semibold text-primary-800">Rechnung und Zahlung</h3>
            <p className="mt-2 text-primary-700">
              Rechnungen erhalten Sie in der Regel nach Beendigung der Therapie oder am
              Monatsende und können diese innerhalb von 3 Tagen überweisen. Alternativ
              können berechnete Leistungen direkt nach der Sitzung in der Praxis bezahlt
              werden.
            </p>
          </div>
          <div className="rounded-2xl border border-primary-100 bg-white p-6">
            <h3 className="font-semibold text-primary-800">Sonderfälle</h3>
            <p className="mt-2 text-primary-700">
              Bei Raucherentwöhnung, Beckenbodentraining und Hilfe beim Abnehmen ist keine
              Zahlung auf Rechnung möglich. Gutscheine müssen vor der Terminvereinbarung
              vollständig bezahlt sein; eine Barauszahlung ist ausgeschlossen.
            </p>
          </div>
          <div className="rounded-2xl border border-primary-100 bg-white p-6">
            <h3 className="font-semibold text-primary-800">Außerhalb der Öffnungszeiten</h3>
            <p className="mt-2 text-primary-700">
              Behandlungen außerhalb der regulären Öffnungszeiten werden nach einem
              gesonderten Tarif berechnet, der vorher mit Ihnen abgesprochen wird.
            </p>
          </div>
          <div className="rounded-2xl border border-primary-100 bg-white p-6">
            <h3 className="font-semibold text-primary-800">Steuer und Erstattung</h3>
            <p className="mt-2 text-primary-700">
              Es handelt sich um umsatzsteuerfreie Leistungen nach §4 Nr. 14 UStG. Alle
              angegebenen Preise sind Endpreise. Rechnungen können Sie bei der Krankenkasse
              einreichen oder steuerlich prüfen lassen.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Fragen zum Honorar?"
        text="Gerne bespreche ich mit Ihnen individuell, welche Behandlung für Ihr Anliegen sinnvoll ist und was diese kostet."
      />
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Honorar",
  description:
    "Honorarübersicht der Naturheilpraxis Meschede in Köln: Preise für Erstberatung, Folgesitzungen, Raucherentwöhnung, Abnehmen und Beckenbodentraining.",
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
  { label: "Raucherentwöhnung als Gutschein", price: "229 €" },
  { label: "Hilfe beim Abnehmen – Erstsitzung (60 Min.)", price: "140 €" },
  { label: "Hilfe beim Abnehmen – Folgesitzung (40 Min.)", price: "65 €" },
  { label: "BeckenBodenBoosta – erste Sitzung", price: "kostenlos" },
  { label: "BeckenBodenBoosta – Einzelsitzung", price: "49 €" },
  { label: "BeckenBodenBoosta – Trainingspakete (5–50 Sitzungen)", price: "210 € – 1.300 €" },
  { label: "Blutegeltherapie", price: "auf Anfrage" },
];

export default function HonorarPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Honorar"
        subtitle="Transparente Preise für alle Behandlungen in der Naturheilpraxis Meschede – alle Preise verstehen sich inklusive gesetzlicher Mehrwertsteuer."
        image="/images/osteo_2.jpg"
        imageAlt="Beratungsgespräch in der Naturheilpraxis Meschede"
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-serif-heading text-2xl font-semibold text-primary-800">
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
            Ausfallgebühr von 50 €.
          </p>
        </div>
      </section>

      <CTASection
        title="Fragen zum Honorar?"
        text="Gerne bespreche ich mit Ihnen individuell, welche Behandlung für Ihr Anliegen sinnvoll ist und was diese kostet."
      />
    </>
  );
}

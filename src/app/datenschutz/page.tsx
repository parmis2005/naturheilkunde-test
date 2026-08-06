import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { practice } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Naturheilpraxis Mustermann in Köln.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        title="Datenschutzerklärung"
        image="/images/laser_1.jpg"
        imageAlt="Naturheilpraxis Mustermann"
      />
      <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-primary-700 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            1. Verantwortlicher
          </h2>
          <p className="mt-3">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            {practice.name}, {practice.practitioner}
            <br />
            {practice.addressLine1}, {practice.addressLine2}
            <br />
            Telefon: {practice.phone} · E-Mail: {practice.email}
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p className="mt-3">
            Beim Besuch dieser Website erhebt Ihr Browser automatisch Informationen, die
            Ihr Endgerät an unseren Server übermittelt (Server-Logfiles). Dazu gehören
            IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und -version sowie das
            verwendete Betriebssystem. Diese Daten sind nicht bestimmten Personen
            zuordenbar und werden ausschließlich zur Gewährleistung eines störungsfreien
            Betriebs sowie zur Verbesserung unseres Angebots ausgewertet.
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            3. Kontaktformular und E-Mail-Kontakt
          </h2>
          <p className="mt-3">
            Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
            Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
            Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit
            Ihre Anfrage der Vertragserfüllung dient oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich ist.
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            4. Terminbuchung über Doctolib
          </h2>
          <p className="mt-3">
            Für die Online-Terminvergabe verweisen wir auf den externen Dienst Doctolib.
            Bei Nutzung dieses Dienstes gelten die Datenschutzbestimmungen des jeweiligen
            Anbieters. Wir haben keinen Einfluss auf die dort verarbeiteten Daten.
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            5. Cookies
          </h2>
          <p className="mt-3">
            Diese Website verwendet ausschließlich technisch notwendige Cookies, die für
            den Betrieb der Seite erforderlich sind. Diese Cookies werden nicht zu
            Marketing- oder Analysezwecken eingesetzt.
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            6. Ihre Rechte
          </h2>
          <p className="mt-3">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung,
            Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum
            Thema personenbezogener Daten können Sie sich jederzeit über die im
            Impressum angegebenen Kontaktdaten an uns wenden. Ihnen steht zudem ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
        </div>

        <div>
          <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
            7. Datensicherheit
          </h2>
          <p className="mt-3">
            Wir verwenden geeignete technische und organisatorische
            Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche
            Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen
            den unbefugten Zugriff Dritter zu schützen.
          </p>
        </div>
      </section>
    </>
  );
}

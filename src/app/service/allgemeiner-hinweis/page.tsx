import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { practice } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Allgemeiner Hinweis",
  description:
    "Aktuelle Neuigkeiten und Hinweise der Naturheilpraxis Mustermann in Köln: Baumpflanzaktion, BeckenBodenBoosta und Informationen zu naturheilkundlichen Therapieverfahren.",
};

export default function AllgemeinerHinweisPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Allgemeiner Hinweis"
        subtitle="Aktuelles aus der Naturheilpraxis Mustermann in Köln."
        image="/images/becken_3.jpg"
        imageAlt="Naturheilpraxis Mustermann Köln – Aktuelles"
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            Neu in der Naturheilpraxis Mustermann
          </p>
          <h2 className="mt-2 font-serif-heading text-2xl font-semibold text-primary-800">
            Für jeden neuen Patienten wird ein Baum gepflanzt
          </h2>
          <p className="mt-4 text-primary-700">
            Für jede neue Patientin und jeden neuen Patienten in der Naturheilpraxis
            Mustermann, der seinen Termin wahrnimmt und die Rechnung bezahlt, wird ein Baum
            gepflanzt. Unser Partnerunternehmen{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-600"
            >
              baumfreunde-online.de
            </a>{" "}
            unterstützt uns dabei.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-primary-100 bg-white p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            Seit über drei Jahren in Köln und Hürth
          </p>
          <h2 className="mt-2 font-serif-heading text-2xl font-semibold text-primary-800">
            Der BeckenBodenBoosta Magnetfeld-Spezialstuhl
          </h2>
          <p className="mt-4 text-primary-700">
            Für eine natürliche und effektive Beckenbodenbehandlung – in Alltagskleidung
            und ohne nerviges Eigentraining. Ohne Ausziehen und ohne Mitmachen. Einfach
            setzen … und gut! Buchen Sie jetzt Ihren ersten kostenlosen Termin.
          </p>
          <Link
            href="/schwerpunkte/beckenbodentraining"
            className="mt-4 inline-block font-semibold text-accent-600 hover:text-accent-500"
          >
            Mehr zum BeckenBodenBoosta →
          </Link>
        </div>

        <div className="mt-8 rounded-2xl border border-accent-300 bg-accent-100/60 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            Bonusaktion
          </p>
          <h2 className="mt-2 font-serif-heading text-2xl font-semibold text-primary-800">
            Bei der Raucherentwöhnung 15 % sparen
          </h2>
          <p className="mt-4 text-primary-700">
            Kaufen Sie einen Gutschein für eine Raucherentwöhnung – das funktioniert auch
            für den Eigenbedarf. Statt 279 € zahlen Sie beim Kauf eines Gutscheins nur
            249 €.
          </p>
          <Link
            href="/service/gutscheine"
            className="mt-4 inline-block font-semibold text-accent-600 hover:text-accent-500"
          >
            Gutschein sichern →
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="font-serif-heading text-2xl font-semibold text-primary-800">
            Termin buchen
          </h2>
          <p className="mt-4 text-primary-700">
            Einen Termin buchen Sie am besten über Doctolib. Hierfür ist eine kurze,
            kostenlose Registrierung nötig, die nur wenige Minuten dauert. Anschließend
            können Sie Ihren Termin jederzeit verschieben, ändern oder stornieren. Sollten
            Sie Probleme bei der Terminbuchung über Doctolib haben, kontaktieren Sie mich
            gerne per E-Mail:{" "}
            <a href={`mailto:${practice.email}`} className="font-semibold text-accent-600">
              {practice.email}
            </a>
            .
          </p>
        </div>

        <div className="mt-10 border-t border-primary-100 pt-8">
          <h3 className="font-semibold text-primary-800">
            Hinweis zu allen hier vorgestellten Therapieverfahren
          </h3>
          <p className="mt-3 text-sm text-primary-600">
            Bei den auf diesen Seiten vorgestellten Therapieverfahren handelt es sich um
            Behandlungsmethoden aus der naturheilkundlichen Erfahrungsmedizin, die
            bislang teilweise nicht zu den allgemein anerkannten Methoden der Schulmedizin
            gehören. Alle getroffenen Aussagen über Wirkungen sowie Indikationen der
            Therapieverfahren beruhen auf den Erkenntnissen und Erfahrungswerten bei der
            Anwendung dieser Behandlungsmethoden.
          </p>
        </div>
      </section>

      <CTASection
        title="Jetzt Termin vereinbaren"
        text="Buchen Sie bequem online über Doctolib oder schreiben Sie mir eine E-Mail."
      />
    </>
  );
}

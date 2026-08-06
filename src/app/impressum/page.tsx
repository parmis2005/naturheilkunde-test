import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { practice } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Naturheilpraxis Mustermann in Köln.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        title="Impressum"
        image="/images/osteo_1.jpg"
        imageAlt="Naturheilpraxis Mustermann"
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
            Erlaubnis erteilt am 14.03.2015 durch das Gesundheitsamt Köln.
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
            Nordwest Versicherung AG
            <br />
            Musterallee 10, 44135 Dortmund
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
            Diese Testseite verwendet frei lizenzierte Fotografien (Creative Commons
            BY / BY-SA / CC0 / Public Domain) verschiedener Fotograf:innen, gefunden über{" "}
            <a href="https://openverse.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-600">
              openverse.org
            </a>
            . Sie zeigen keine reale Person, Praxis oder Örtlichkeit im Zusammenhang mit
            dieser (fiktiven) Website.
          </p>
          <ul className="mt-4 space-y-1.5 text-sm text-primary-600">
            <li>&bdquo;Asian medicinal leech (Hirudo nipponia)&ldquo; – Nature.Catcher (CC BY-SA)</li>
            <li>&bdquo;European Medicinal Leech&ldquo; – ajott (CC BY)</li>
            <li>&bdquo;North American Medicinal Leech, Bar Harbor&ldquo; – Wes Gapp (CC BY)</li>
            <li>&bdquo;North American Medicinal Leech, Tolland&ldquo; – Kristiina Hurme (CC BY)</li>
            <li>&bdquo;Laser therapy on a knee used to treat pain&ldquo; – Shixart1985 (CC BY)</li>
            <li>&bdquo;Facial laser therapy&ldquo; – Kolobetsoo (CC BY-SA)</li>
            <li>&bdquo;Acupuncture Needles&ldquo; – Acuhealth (CC BY-SA)</li>
            <li>&bdquo;Inserting acupuncture needles&ldquo; / &bdquo;Patient with acupuncture moxibustion&ldquo; – Wonderlane (CC BY)</li>
            <li>&bdquo;Warring States Gold Acupuncture Needles&ldquo; – Gary Lee Todd, Ph.D. (CC0)</li>
            <li>&bdquo;Acupuncture Needles&ldquo; – elyob (CC BY-SA)</li>
            <li>&bdquo;Acupuncture&ldquo; – gemeinfrei (Public Domain)</li>
            <li>&bdquo;Chiropractic spinal adjustment&ldquo; – Michael Dorausch (CC BY-SA)</li>
            <li>&bdquo;My dad&apos;s adjusting table&ldquo; – skyfaller (CC BY-SA)</li>
            <li>&bdquo;British School of Osteopathy&ldquo; – Mark Morgan Trinidad B (CC BY)</li>
            <li>&bdquo;She Quit Smoking&ldquo; – cogdogblog (CC BY)</li>
            <li>&bdquo;&apos;fit for life&apos; bento&ldquo; – gamene (CC BY)</li>
            <li>&bdquo;Physiotherapy room of Clinic of KarRC 2009&ldquo; – Igor Georgievskiy (CC BY-SA)</li>
            <li>&bdquo;Sauna Hotel Arthurissa&ldquo; – Hotel Arthur Helsinki (CC BY)</li>
            <li>&bdquo;Spa therapy&ldquo; – faithchad (CC BY-SA)</li>
            <li>&bdquo;Spa treatment room portrait&ldquo; – bloggeratlarge (CC0)</li>
            <li>&bdquo;A restful, well-lighted space&ldquo; – woodleywonderworks (CC BY)</li>
            <li>&bdquo;Cologne Cathedral and the Hohenzollern Bridge&ldquo; – jiuguangw (CC BY-SA)</li>
          </ul>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { footerPartnerLinks, navigation, practice, services } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-100 bg-primary-800 text-primary-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-serif-heading text-xl font-semibold text-white">
            {practice.name}
          </h3>
          <p className="mt-1 text-sm text-primary-200">{practice.title}</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-primary-100">
            <p>{practice.addressLine1}</p>
            <p>{practice.addressLine2}</p>
            <p className="pt-2">
              <a href={practice.phoneHref} className="hover:text-white">
                Tel: {practice.phone}
              </a>
            </p>
            <p>Fax: {practice.fax}</p>
            <p>
              <a href={`mailto:${practice.email}`} className="hover:text-white">
                {practice.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-200">
            Schwerpunkte
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/schwerpunkte/${s.slug}`} className="text-primary-100 hover:text-white">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-200">
            Service
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation
              .find((n) => n.label === "Service")
              ?.children?.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-primary-100 hover:text-white">
                    {c.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/kontakt" className="text-primary-100 hover:text-white">
                Kontakt
              </Link>
            </li>
          </ul>
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary-200">
            Partnerpraxen
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            {footerPartnerLinks.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-100 hover:text-white"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-200">
            Öffnungszeiten
          </h4>
          <p className="mt-4 text-sm text-primary-100">{practice.hours}</p>
          <p className="mt-4 text-sm text-primary-100">
            {practice.secondLocationName}
            <br />
            {practice.secondLocationAddress}
          </p>
          <a
            href={practice.doctolibUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-600"
          >
            Termin bei Doctolib
          </a>
        </div>
      </div>

      <div className="border-t border-primary-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-primary-300 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {practice.name} · {practice.practitioner}
          </p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-4 text-[11px] text-primary-400 sm:px-6 lg:px-8">
          Hero-Illustration basiert auf einem Foto von Thomas Wolf,{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Hohenzollernbr%C3%BCcke_K%C3%B6ln.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary-200"
          >
            www.foto-tw.de
          </a>
          , Lizenz{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/3.0/deed.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary-200"
          >
            CC BY-SA 3.0
          </a>
          .
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Service",
  description:
    "Serviceübersicht der Naturheilpraxis Meschede in Köln: Allgemeiner Hinweis, Honorar, Gutscheine und Urlaubszeiten.",
};

const items = [
  {
    href: "/service/allgemeiner-hinweis",
    title: "Allgemeiner Hinweis",
    text: "Aktuelle Neuigkeiten aus der Praxis, Bonusaktionen und Informationen zu den Therapieverfahren.",
  },
  {
    href: "/service/honorar",
    title: "Honorar",
    text: "Transparente Übersicht aller Behandlungskosten.",
  },
  {
    href: "/service/gutscheine",
    title: "Gutscheine",
    text: "Verschenken Sie Gesundheit – Gutscheine für Behandlungen in der Naturheilpraxis Meschede.",
  },
  {
    href: "/service/urlaubszeiten",
    title: "Urlaubszeiten",
    text: "Aktuelle Urlaubs- und Fortbildungszeiten der Praxis.",
  },
];

export default function ServiceOverviewPage() {
  return (
    <>
      <PageHero
        title="Service"
        subtitle="Alle wichtigen Informationen rund um Ihren Besuch in der Naturheilpraxis Meschede."
        image="/images/osteo_1.jpg"
        imageAlt="Service der Naturheilpraxis Meschede"
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="font-serif-heading text-xl font-semibold text-primary-800">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-primary-600">{item.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                Mehr erfahren
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M7.5 4.5 13 10l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

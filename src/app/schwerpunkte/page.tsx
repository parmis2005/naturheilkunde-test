import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { schwerpunkte } from "@/lib/schwerpunkte-data";

export const metadata: Metadata = {
  title: "Schwerpunkte",
  description:
    "Alle naturheilkundlichen Schwerpunkte der Naturheilpraxis Mustermann in Köln im Überblick: Blutegeltherapie, Laserakupunktur, Osteopathie, Raucherentwöhnung, Abnehmen und Beckenbodentraining.",
};

export default function SchwerpunkteOverviewPage() {
  return (
    <>
      <PageHero
        title="Unsere Schwerpunkte"
        subtitle="Naturheilkundliche Behandlungen in Köln – natürlich, ganzheitlich und in der Regel direkt beim ersten Termin."
        image="/images/osteo_2.jpg"
        imageAlt="Naturheilkundliche Behandlung in der Naturheilpraxis Mustermann"
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schwerpunkte.map((s) => (
            <Link
              key={s.slug}
              href={`/schwerpunkte/${s.slug}`}
              className="group overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.heroImage}
                  alt={s.heroImageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="font-semibold text-primary-800">{s.navLabel}</h2>
                <p className="mt-2 text-sm text-primary-600">{s.intro}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                  Mehr erfahren
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7.5 4.5 13 10l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

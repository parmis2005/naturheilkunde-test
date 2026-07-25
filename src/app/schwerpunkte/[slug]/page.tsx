import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/ImageGallery";
import CTASection from "@/components/CTASection";
import { getSchwerpunkt, schwerpunkte } from "@/lib/schwerpunkte-data";

export function generateStaticParams() {
  return schwerpunkte.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getSchwerpunkt(slug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.metaDescription,
  };
}

export default async function SchwerpunktPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getSchwerpunkt(slug);
  if (!data) notFound();

  return (
    <>
      <PageHero
        eyebrow="Schwerpunkte"
        title={data.title}
        subtitle={data.intro}
        image={data.heroImage}
        imageAlt={data.heroImageAlt}
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {data.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-serif-heading text-2xl font-semibold text-primary-800">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="mt-4 break-words text-primary-700">
                  {p}
                </p>
              ))}
              {section.list && (
                <>
                  {section.listTitle && (
                    <p className="mt-4 font-medium text-primary-800">{section.listTitle}</p>
                  )}
                  <ul className="mt-3 space-y-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-primary-700">
                        <svg
                          viewBox="0 0 20 20"
                          className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500"
                          fill="currentColor"
                        >
                          <path d="M8.3 13.4 4.9 10l-1.4 1.4 4.8 4.8 9-9-1.4-1.4z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}

          {data.slug === "beckenbodentraining" && (
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/f9I6IyZxoGQ?si=SnfY-BW3WP8A_nOg"
                  title="BeckenBodenBoosta Praxisvideo"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <a
                href="https://www.paypal.com/ncp/payment/TZSCHGGMHENX2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600"
              >
                Trainingskarte über PayPal kaufen
              </a>
            </div>
          )}

          {data.priceNote && (
            <div className="rounded-2xl border border-accent-300 bg-accent-100/60 p-6">
              <h3 className="font-semibold text-primary-800">Behandlungskosten</h3>
              <p className="mt-2 text-primary-700">{data.priceNote}</p>
            </div>
          )}
        </div>
      </section>

      {data.gallery.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif-heading text-2xl font-semibold text-primary-800">
            Impressionen aus der Praxis
          </h2>
          <ImageGallery images={data.gallery} alt={data.title} />
        </section>
      )}

      <CTASection title="Jetzt Termin vereinbaren" text={data.ctaText} />
    </>
  );
}

import Link from "next/link";
import { practice } from "@/lib/site-data";

type Props = {
  title: string;
  text: string;
};

export default function CTASection({ title, text }: Props) {
  return (
    <section className="bg-primary-700">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif-heading text-2xl font-semibold text-white sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-2xl text-primary-100">{text}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={practice.doctolibUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent-500 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600"
          >
            Termin bei Doctolib buchen
          </a>
          <Link
            href="/kontakt"
            className="rounded-full border border-primary-200 px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}

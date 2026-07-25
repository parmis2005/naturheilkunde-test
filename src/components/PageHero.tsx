import Image from "next/image";
import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({ eyebrow, title, subtitle, image, imageAlt }: Props) {
  return (
    <section className="relative overflow-hidden bg-primary-800">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-800/90 to-primary-800/70" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <nav className="mb-4 text-xs text-primary-200">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          {eyebrow && <span> / {eyebrow}</span>}
        </nav>
        <h1 className="max-w-3xl font-serif-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-primary-100 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

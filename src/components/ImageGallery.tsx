import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageGallery({ images, alt }: Props) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {images.map((src, i) => (
        <div
          key={src}
          className="relative aspect-square overflow-hidden rounded-xl border border-primary-100 bg-primary-50"
        >
          <Image
            src={src}
            alt={`${alt} – Bild ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
            className="object-cover transition duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

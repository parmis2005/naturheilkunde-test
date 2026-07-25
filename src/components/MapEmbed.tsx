import { practice } from "@/lib/site-data";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-primary-100 shadow-sm">
      <iframe
        title={`Anfahrt zur ${practice.name}`}
        src={practice.mapsEmbedSrc}
        width="100%"
        height="380"
        referrerPolicy="no-referrer-when-downgrade"
        className="block w-full"
      />
      <div className="flex items-center justify-between bg-primary-50 px-4 py-2.5 text-xs text-primary-600">
        <span>{practice.addressFull}</span>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            practice.mapsQuery
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent-600 hover:text-accent-500"
        >
          Route planen →
        </a>
      </div>
    </div>
  );
}

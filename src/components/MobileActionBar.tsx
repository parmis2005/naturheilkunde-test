import { practice } from "@/lib/site-data";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-primary-100 bg-cream-50/95 backdrop-blur md:hidden">
      <a
        href={practice.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-primary-800"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 5c0 8.5 6.5 15 15 15l2-4-5-2-2 2c-2.5-1-4-2.5-5-5l2-2-2-5-4 1Z" strokeLinejoin="round" />
        </svg>
        Anrufen
      </a>
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
          practice.mapsQuery
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 border-l border-primary-100 py-3 text-sm font-semibold text-primary-800"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.3" />
        </svg>
        Route
      </a>
      <a
        href={practice.doctolibUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 border-l border-primary-100 bg-accent-500 py-3 text-sm font-semibold text-white"
      >
        Termin
      </a>
    </div>
  );
}

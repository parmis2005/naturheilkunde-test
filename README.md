# Naturheilpraxis Meschede – Website

Professionelle, responsive Next.js-Website für die Naturheilpraxis Meschede
(Heilpraktiker Köln), inhaltlich orientiert an naturheilpraxis-meschede.de.

## Tech-Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Danach im Browser [http://localhost:3000](http://localhost:3000) öffnen.

## Produktions-Build

```bash
npm run build
npm start
```

## Struktur

- `src/app` – Seiten (App Router): Home, Schwerpunkte, Service, Kontakt, Impressum, Datenschutz
- `src/components` – wiederverwendbare UI-Komponenten (Header, Footer, Formulare, Karte, …)
- `src/lib` – zentrale Inhalts- und Konfigurationsdaten
- `public/images` – Bildmaterial der Praxis

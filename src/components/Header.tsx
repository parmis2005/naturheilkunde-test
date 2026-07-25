"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation, practice } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 bg-cream-50/95 backdrop-blur supports-[backdrop-filter]:bg-cream-50/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={`${practice.name} – ${practice.title}`}
            width={460}
            height={140}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <div
              key={item.href}
              className="group relative"
              onMouseEnter={() => setOpenSubmenu(item.label)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-primary-800 transition hover:bg-primary-50 hover:text-primary-700"
              >
                {item.label}
                {item.children && (
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                    <path d="M5.25 7.5 10 12.25 14.75 7.5H5.25Z" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div
                  className={`absolute left-0 top-full w-72 rounded-xl border border-primary-100 bg-cream-50 p-2 shadow-lg transition ${
                    openSubmenu === item.label
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-primary-800 transition hover:bg-primary-50"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={practice.phoneHref}
            className="text-sm font-semibold text-primary-800 hover:text-primary-600"
          >
            {practice.phone}
          </a>
          <a
            href={practice.doctolibUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600"
          >
            Termin buchen
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-primary-200 text-primary-800 lg:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-100 bg-cream-50 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navigation.map((item) => (
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="flex-1 rounded-md px-2 py-2.5 text-base font-medium text-primary-800"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`${item.label} Untermenü`}
                      className="p-2 text-primary-700"
                      onClick={() =>
                        setOpenSubmenu((cur) => (cur === item.label ? null : item.label))
                      }
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className={`h-5 w-5 transition-transform ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                      >
                        <path d="M5.25 7.5 10 12.25 14.75 7.5H5.25Z" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && openSubmenu === item.label && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-primary-100 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-md px-2 py-2 text-sm text-primary-700"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={practice.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Termin buchen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

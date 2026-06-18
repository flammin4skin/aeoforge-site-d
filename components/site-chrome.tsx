import Link from "next/link";
import { Wind } from "lucide-react";

import { SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <Wind className="h-5 w-5 text-sky-600" aria-hidden />
          <span>{SITE.name}</span>
        </Link>
        <p className="hidden text-sm text-slate-500 sm:block">{SITE.tagline}</p>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-8 text-sm text-slate-600 sm:px-6">
        <p>
          Educational guides only — not medical advice. Thresholds summarize public guidance from
          EPA, ASHRAE, and WHO; your building and health needs may differ.
        </p>
        <p className="mt-2 text-slate-500">Last reviewed June 2026</p>
      </div>
    </footer>
  );
}

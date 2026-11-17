"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, LOCALES } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { Messages } from "@/lib/types";
import WhatsAppIcon from "./WhatsAppIcon";

const LOCALE_KEY = "flushfit.locale";

export default function Header({ locale, messages }: { locale: Locale; messages: Messages }) {
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);

  const localeHref = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  const nav = [
    { label: messages.nav.catalogue, href: `/${locale}/catalogue` },
    { label: messages.nav.flushPlates, href: `/${locale}/catalogue/flush-plates` },
    { label: messages.nav.electrical, href: `/${locale}/catalogue/recessed-sockets` },
  ];
  const wa = whatsappLink(messages.whatsapp.headerMessage);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={`/${locale}`} className="brand" aria-label={messages.brand.name}>
          <img src="/images/logo.png" alt="" className="brand__mark" width={28} height={30} />
          <span className="brand__word">FLUSHFIT</span>
        </Link>
        <nav className="main-nav" aria-label={messages.nav.catalogue}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link" aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={localeHref(l)}
                hrefLang={l}
                aria-current={l === locale ? "true" : undefined}
                onClick={() => {
                  try {
                    window.localStorage.setItem(LOCALE_KEY, l);
                  } catch {
                    // storage unavailable — the URL still carries the locale
                  }
                }}
              >
                {messages.lang[l]}
              </Link>
            ))}
          </div>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="header-wa">
            <WhatsAppIcon />
            {messages.nav.whatsappUs}
          </a>
          <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}>
            {open ? messages.nav.close : messages.nav.menu}
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className="mobile-nav" data-open={open} aria-label={messages.nav.menu}>
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          <WhatsAppIcon />
          {messages.nav.whatsappUs}
        </a>
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, LOCALES } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { Messages } from "@/lib/types";

const LOCALE_KEY = "flushfit.locale";

export default function Header({ locale, messages }: { locale: Locale; messages: Messages }) {
  const pathname = usePathname();

  const localeHref = (target: Locale) => {
    const segments = (pathname || `/${locale}`).split("/");
    segments[1] = target; // ["", locale, ...rest]
    return segments.join("/") || `/${target}`;
  };

  const nav = [
    { label: messages.nav.catalogue, href: `/${locale}/catalogue` },
    { label: messages.nav.flushPlates, href: `/${locale}/catalogue/flush-plates` },
    { label: messages.nav.electrical, href: `/${locale}/catalogue/recessed-sockets` },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={`/${locale}`} className="brand">
          <span className="brand__name">{messages.brand.name}</span>
          <span className="brand__tag">{messages.brand.tagline}</span>
        </Link>
        <nav className="main-nav">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang-switch">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={localeHref(l)}
                onClick={() => {
                  try {
                    window.localStorage.setItem(LOCALE_KEY, l);
                  } catch {
                    // ignore
                  }
                }}
                className={l === locale ? "lang-switch__item--active" : undefined}
              >
                {messages.lang[l]}
              </Link>
            ))}
          </div>
          <a
            href={whatsappLink(messages.whatsapp.headerMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            {messages.nav.whatsappUs}
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useAppState } from "@/context/AppStateContext";
import { slug } from "@/lib/slug";

const NAV = [
  { label: "Catalogue", href: "/catalogue" },
  { label: "Flush plates", href: "/catalogue/" + slug("Flush plates") },
  { label: "Electrical", href: "/catalogue/" + slug("Recessed sockets") },
  { label: "Dealers", href: "/contact" },
];

export default function Header() {
  const { list } = useAppState();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand">
          <span className="brand__name">FLUSH FIT</span>
          <span className="brand__tag">Recessed bathroom hardware</span>
        </Link>
        <nav className="main-nav">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang-switch">
            <span className="lang-switch__item--active">EN</span>
            <span>SQ</span>
            <span>IT</span>
          </div>
          <Link href="/quote" className="btn btn-dark">
            Request list · {list.length}
          </Link>
        </div>
      </div>
    </header>
  );
}

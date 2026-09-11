"use client";

import { useState } from "react";
import Link from "next/link";
import { Messages } from "@/lib/types";

export default function Footer({ messages }: { messages: Messages }) {
  const [subscribed, setSubscribed] = useState(false);
  const f = messages.footer;

  const submitNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 2400);
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="brand__name" style={{ marginBottom: 12 }}>
            {messages.brand.name}
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "30ch" }}>{f.brandBlurb}</p>
        </div>
        {f.columns.map((col) => (
          <div key={col.title}>
            <div className="footer-heading">{col.title}</div>
            <div className="footer-links">
              {col.links.map((l) => (
                <Link key={l} href="#">
                  {l}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div className="footer-heading">{f.specifierNotesTitle}</div>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-muted)", margin: "0 0 14px", maxWidth: "32ch" }}>
            {f.specifierNotesBody}
          </p>
          <form onSubmit={submitNewsletter} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <input
              type="email"
              required
              placeholder={f.emailPlaceholder}
              style={{
                flex: 1,
                minWidth: 150,
                border: "1px solid var(--border-strong)",
                background: "var(--bg)",
                padding: "11px 12px",
                borderRadius: 2,
                fontSize: 14,
              }}
            />
            <button type="submit" className="btn btn-dark" style={{ padding: "11px 18px", fontSize: 13.5 }}>
              {subscribed ? f.thanks : f.subscribe}
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__inner">
          <span>{f.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Messages } from "@/lib/types";

export default function Footer({ messages }: { messages: Messages }) {
  const [subscribed, setSubscribed] = useState(false);
  const f = messages.footer;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand__word" style={{ marginBottom: 12 }}>
              FLUSHFIT
            </div>
            <p className="muted" style={{ maxWidth: "34ch" }}>
              {f.brandBlurb}
            </p>
          </div>
          {f.columns.map((col) => (
            <div key={col.title}>
              <div className="footer-heading">{col.title}</div>
              <div className="footer-links">
                {col.links.map((l) => (
                  <a key={l} href="#">
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div className="footer-heading">{f.specifierNotesTitle}</div>
            <p className="muted">{f.specifierNotesBody}</p>
            <form
              className="newsletter"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {f.emailPlaceholder}
              </label>
              <input id="newsletter-email" type="email" required placeholder={f.emailPlaceholder} autoComplete="email" />
              <button type="submit">{subscribed ? f.thanks : f.subscribe}</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom__inner">
          <span>{f.copyright}</span>
          <a href="https://wa.me/355684069999">+355 68 406 9999</a>
        </div>
      </div>
    </footer>
  );
}

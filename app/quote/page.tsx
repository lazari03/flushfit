"use client";

import Link from "next/link";
import { useAppState } from "@/context/AppStateContext";
import { QUOTE_FIELDS, findProduct } from "@/lib/data";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function QuotePage() {
  const { list, quoteJustSent, incItem, decItem, removeItem, submitQuote, clearJustSent } = useAppState();

  const unitCount = list.reduce((n, it) => n + it.qty, 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitQuote();
  };

  return (
    <main className="container-narrow" style={{ padding: "44px 24px 96px" }}>
      <h1 style={{ fontWeight: 300, fontSize: "clamp(34px, 4.4vw, 50px)", margin: "0 0 12px", letterSpacing: "-.015em" }}>
        Your request list
      </h1>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", margin: "0 0 40px", maxWidth: "52ch" }}>
        Send the list and we reply with article pricing, availability and drawings. No account needed.
      </p>

      {list.length === 0 && !quoteJustSent && (
        <div style={{ border: "1px solid var(--border)", padding: "56px 32px", textAlign: "center", background: "var(--bg-alt)" }}>
          <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "0 0 22px" }}>Nothing on the list yet.</p>
          <Link href="/catalogue" className="btn btn-dark" style={{ padding: "14px 26px" }}>
            Browse the catalogue
          </Link>
        </div>
      )}

      {list.length === 0 && quoteJustSent && (
        <div style={{ border: "1px solid var(--ink)", background: "var(--ink)", color: "var(--bg)", padding: "48px 32px" }}>
          <div style={{ fontSize: 30, marginBottom: 12 }}>Request sent</div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text-inverse-muted)", margin: "0 0 26px", maxWidth: "46ch" }}>
            A specifier will reply with pricing, lead times and drawings within one working day.
          </p>
          <Link href="/" className="btn-light-on-dark" onClick={clearJustSent} style={{ padding: "14px 24px" }}>
            Back to home
          </Link>
        </div>
      )}

      {list.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "start" }}>
          <div>
            <div style={{ borderTop: "1px solid var(--ink)" }}>
              {list.map((it) => {
                const p = findProduct(it.code);
                if (!p) return null;
                return (
                  <div key={it.key} style={{ display: "flex", gap: 18, padding: "20px 0", borderBottom: "1px solid var(--border)", alignItems: "center", flexWrap: "wrap" }}>
                    <div style={{ position: "relative", width: 76, height: 76, flex: "none" }}>
                      <ImagePlaceholder caption={it.code} />
                    </div>
                    <div style={{ flex: 1, minWidth: 140 }}>
                      <div style={{ fontSize: 11, letterSpacing: ".14em", color: "var(--text-muted)", marginBottom: 6 }}>{it.code}</div>
                      <div style={{ fontSize: 15, marginBottom: 5 }}>{p.name}</div>
                      <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{it.finish}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--border)", borderRadius: 2 }}>
                      <button type="button" className="btn-stepper" style={{ padding: "0 12px", height: 38 }} onClick={() => decItem(it.key)}>
                        −
                      </button>
                      <span style={{ minWidth: 26, textAlign: "center", fontSize: 14 }}>{it.qty}</span>
                      <button type="button" className="btn-stepper" style={{ padding: "0 12px", height: 38 }} onClick={() => incItem(it.key)}>
                        +
                      </button>
                    </div>
                    <button type="button" className="text-btn" style={{ fontSize: 13 }} onClick={() => removeItem(it.key)}>
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 0", fontSize: 14, gap: 16, flexWrap: "wrap" }}>
              <span style={{ color: "var(--text-muted)" }}>
                {list.length} articles · {unitCount} units
              </span>
              <Link href="/catalogue" className="btn-ghost">
                Add more
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form-panel" style={{ background: "var(--bg-alt)" }}>
            <div className="form-title">Send for pricing</div>
            {QUOTE_FIELDS.map((f) => (
              <label key={f.name} className="field">
                {f.label}
                <input type={f.type} name={f.name} placeholder={f.placeholder} required />
              </label>
            ))}
            <label className="field">
              Project notes
              <textarea rows={4} name="notes" placeholder="Wall build-up, delivery window, finish preference" />
            </label>
            <button type="submit" className="btn btn-dark" style={{ padding: 15, marginTop: 4 }}>
              Send request
            </button>
            <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "var(--text-muted)", margin: 0 }}>
              Reply within one working day. Trade accounts receive net pricing.
            </p>
          </form>
        </div>
      )}
    </main>
  );
}

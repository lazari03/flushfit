import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ContactForm from "@/components/ContactForm";
import { DEALERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dealers & contact — Flush Fit",
};

export default function ContactPage() {
  return (
    <main className="container" style={{ padding: "44px 24px 96px" }}>
      <h1 style={{ fontWeight: 300, fontSize: "clamp(34px, 4.4vw, 50px)", margin: "0 0 12px", letterSpacing: "-.015em" }}>
        Dealers &amp; contact
      </h1>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", margin: "0 0 44px", maxWidth: "52ch" }}>
        Showrooms in Tirana, Durrës, Vlorë and Prishtina hold the full finish range. For project quantities, write to
        the specification desk directly.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 52, alignItems: "start" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 18 }}>
            Showrooms
          </div>
          <div style={{ borderTop: "1px solid var(--ink)" }}>
            {DEALERS.map((d) => (
              <div key={d.name} style={{ padding: "20px 0", borderBottom: "1px solid var(--border)", display: "flex", gap: 20, justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: 16, marginBottom: 6 }}>{d.name}</div>
                  <div style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.5 }}>{d.address}</div>
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", textAlign: "right" }}>
                  {d.city}
                  <br />
                  {d.phone}
                </div>
              </div>
            ))}
          </div>
          <div style={{ position: "relative", aspectRatio: "16/9", marginTop: 32, border: "1px solid var(--border)" }}>
            <ImagePlaceholder caption="Map or showroom photo" aspectRatio="16/9" />
          </div>
        </div>

        <div style={{ display: "grid", gap: 28 }}>
          <div style={{ background: "var(--ink)", color: "var(--bg)", padding: 30 }}>
            <div style={{ fontSize: 24, marginBottom: 16 }}>Specification desk</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--text-inverse-muted)", margin: "0 0 22px" }}>
              Drawings, wall build-ups and finish samples for architects and installers.
            </p>
            <div style={{ display: "grid", gap: 9, fontSize: 15 }}>
              <a href="mailto:spec@flushfit.al" style={{ color: "var(--link-inverse)" }}>
                spec@flushfit.al
              </a>
              <span>+355 4 000 0000</span>
              <span style={{ color: "var(--text-inverse-muted)", fontSize: 13.5 }}>Mon–Sat, 08:30–17:00 CET</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

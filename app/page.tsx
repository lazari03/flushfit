import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CategoryTile from "@/components/CategoryTile";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, FEATURED_CODES, HOW_IT_WORKS, PRODUCTS, PROOFS, SPEC_POINTS } from "@/lib/data";

export default function HomePage() {
  const featured = FEATURED_CODES.map((code) => PRODUCTS.find((p) => p.code === code)!).filter(Boolean);

  return (
    <main>
      {/* Hero */}
      <section
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 56,
          alignItems: "center",
          minHeight: 610,
        }}
      >
        <div style={{ padding: "72px 0" }}>
          <p className="eyebrow eyebrow--accent">The invisible fit</p>
          <h1
            style={{
              fontWeight: 300,
              fontSize: "clamp(44px, 5.4vw, 78px)",
              lineHeight: 0.98,
              letterSpacing: "-.02em",
              margin: "0 0 26px",
              textWrap: "pretty",
            }}
          >
            Hardware that sits <em style={{ color: "var(--accent)" }}>inside</em> the wall.
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.62, color: "var(--text-body)", maxWidth: "46ch", margin: "0 0 36px" }}>
            Flush plates, sockets, switches, paper holders and towel bars built into the surface instead of onto it. One
            recess depth, one finish family, no visible fixings.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/catalogue" className="btn btn-dark btn-lg">
              Browse the catalogue
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Talk to a specifier
            </Link>
          </div>
        </div>
        <div style={{ position: "relative", aspectRatio: "4/5", minHeight: 430 }}>
          <ImagePlaceholder caption="Lifestyle shot — flush plate installed in a tiled wall" aspectRatio="4/5" minHeight={430} />
        </div>
      </section>

      {/* Proof row */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-alt)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(215px, 1fr))" }}>
          {PROOFS.map((p) => (
            <div key={p.label} style={{ padding: "34px 28px 34px 0" }}>
              <div style={{ fontSize: 34, lineHeight: 1, marginBottom: 10 }}>{p.value}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)" }}>{p.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Systems */}
      <section className="container" style={{ paddingTop: 84 }}>
        <div className="divider-row">
          <div>
            <p className="eyebrow">Systems</p>
            <h2 className="section-heading">Six systems, one recess depth</h2>
          </div>
          <Link href="/catalogue" className="btn-ghost">
            All articles →
          </Link>
        </div>
        <div className="tile-grid tile-grid--cat">
          {CATEGORIES.map((c) => (
            <CategoryTile key={c.name} category={c} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container" style={{ paddingTop: 84 }}>
        <div className="divider-row">
          <div>
            <p className="eyebrow">Featured</p>
            <h2 className="section-heading">Specified most often</h2>
          </div>
          <Link href="/catalogue" className="btn-ghost">
            View all →
          </Link>
        </div>
        <div className="tile-grid tile-grid--product">
          {featured.map((p) => (
            <ProductCard key={p.code} product={p} />
          ))}
        </div>
      </section>

      {/* Specification */}
      <section className="container" style={{ padding: "84px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "3/2" }}>
            <ImagePlaceholder caption="Detail shot — recessed socket, flush with plaster" aspectRatio="3/2" />
          </div>
          <div>
            <p className="eyebrow eyebrow--accent" style={{ marginBottom: 22 }}>
              Specification
            </p>
            <h2 style={{ fontWeight: 300, fontSize: 34, lineHeight: 1.12, margin: "0 0 20px", letterSpacing: "-.01em" }}>
              Drawn for the installer, invisible to the client
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--text-body)", margin: "0 0 28px", maxWidth: "48ch" }}>
              Every article ships with a steel mounting box, a plaster-in frame and a DWG drawing. Recess depths are
              standardised at 45 mm so electrics, sanitary and joinery are coordinated once.
            </p>
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {SPEC_POINTS.map((s) => (
                <div key={s.num} style={{ display: "flex", gap: 18, padding: "15px 0", fontSize: 14, borderBottom: "1px solid var(--border)" }}>
                  <span style={{ color: "var(--accent)", minWidth: 28 }}>{s.num}</span>
                  <span style={{ color: "var(--text-body)", lineHeight: 1.5 }}>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ borderTop: "1px solid var(--border)", background: "var(--bg-alt)" }}>
        <div className="container" style={{ padding: "84px 24px" }}>
          <p className="eyebrow">Installation</p>
          <h2 className="section-heading" style={{ marginBottom: 12 }}>
            How it works
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", margin: "0 0 40px", maxWidth: "54ch" }}>
            Four systems, four sequences. Each article ships as a full kit — box, frame, fixings and drawing — so the
            wall is cut once.
          </p>
          <div style={{ display: "grid", gap: 1, background: "var(--border)", border: "1px solid var(--border)" }}>
            {HOW_IT_WORKS.map((h) => (
              <div
                key={h.slot}
                style={{ background: "var(--bg)", display: "flex", flexWrap: "wrap", alignItems: "stretch" }}
              >
                <div style={{ position: "relative", flex: "1 1 min(100%, 320px)", minHeight: 220 }}>
                  <ImagePlaceholder caption={`${h.title} — install photo`} />
                </div>
                <div style={{ flex: "1 1 min(100%, 420px)", minWidth: 0, padding: 30, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontSize: 19, marginBottom: 12 }}>{h.title}</div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-body)", margin: 0, maxWidth: "52ch" }}>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div
          className="container"
          style={{ padding: "72px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}
        >
          <div>
            <h2 style={{ fontWeight: 300, fontSize: 34, lineHeight: 1.12, margin: "0 0 14px" }}>Working on a project?</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-inverse-muted)", margin: 0, maxWidth: "44ch" }}>
              Build a request list as you browse. Send it once and receive article pricing, lead times and drawings
              within one working day.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <Link href="/catalogue" className="btn-light-on-dark">
              Start a list
            </Link>
            <Link href="/contact" className="btn-outline-on-dark">
              Find a dealer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

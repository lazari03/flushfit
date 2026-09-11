"use client";

import { useAppState } from "@/context/AppStateContext";
import { CATEGORIES, FINISHES, PRODUCTS } from "@/lib/data";
import { slug } from "@/lib/slug";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ALL = "All articles";

export default function CatalogueView({ categoryName }: { categoryName: string | null }) {
  const { finish, setFinish } = useAppState();
  const activeCategory = categoryName ?? ALL;
  const catMeta = CATEGORIES.find((c) => c.name === activeCategory);
  const shown = activeCategory === ALL ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);
  const activeBlurb = catMeta
    ? catMeta.blurb
    : "Every recessed article, across all six systems. Filter by system or ask for the full price list.";

  return (
    <main className="container" style={{ paddingBottom: 96 }}>
      <div style={{ padding: "40px 0 30px", borderBottom: "1px solid var(--border)" }}>
        <p className="eyebrow">Catalogue</p>
        <h1 style={{ fontWeight: 300, fontSize: "clamp(34px, 4.4vw, 52px)", margin: "0 0 14px", letterSpacing: "-.015em" }}>
          {activeCategory}
        </h1>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", maxWidth: "56ch", margin: 0 }}>{activeBlurb}</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-start", paddingTop: 36 }}>
        <aside style={{ display: "grid", gap: 34, flex: "1 1 220px", maxWidth: 260 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>
              Systems
            </div>
            <div style={{ display: "grid", gap: 2 }}>
              <Link
                href="/catalogue"
                className="filter-link"
                style={{ color: activeCategory === ALL ? "var(--accent)" : "var(--ink)" }}
              >
                {ALL}
              </Link>
              {CATEGORIES.map((c) => (
                <Link
                  key={c.name}
                  href={`/catalogue/${slug(c.name)}`}
                  className="filter-link"
                  style={{ color: c.name === activeCategory ? "var(--accent)" : "var(--ink)" }}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>
              Finish
            </div>
            <div style={{ display: "grid", gap: 11 }}>
              {FINISHES.map((f) => (
                <button
                  key={f.name}
                  type="button"
                  className="finish-link"
                  style={{ color: f.name === finish ? "var(--accent)" : "var(--text-body)" }}
                  onClick={() => setFinish(f.name)}
                >
                  <span
                    className="finish-dot"
                    style={{ background: f.hex, outline: f.name === finish ? "1px solid var(--ink)" : "none", outlineOffset: 2 }}
                  />
                  {f.name}
                </button>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 22, fontSize: 13, lineHeight: 1.55, color: "var(--text-muted)" }}>
            Prices are issued per project. Add articles to your request list for a quotation.
          </div>
        </aside>

        <div style={{ flex: "1 1 min(100%, 520px)", minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 18,
              fontSize: 13,
              color: "var(--text-muted)",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <span>
              {shown.length} articles · shown in {finish}
            </span>
            <span>45 mm standard recess depth</span>
          </div>
          <div className="tile-grid tile-grid--product">
            {shown.map((p) => (
              <ProductCard key={p.code} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useAppState } from "@/context/AppStateContext";
import { CATEGORY_ORDER, FINISH_HEX, FINISH_ORDER, productsInCategory, PRODUCT_CATALOG } from "@/lib/data";
import { format, Locale } from "@/lib/i18n";
import { CategoryId, Messages } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function CatalogueView({
  categoryId,
  locale,
  messages,
}: {
  categoryId: CategoryId | null;
  locale: Locale;
  messages: Messages;
}) {
  const { finishId, setFinishId } = useAppState();
  const shown = categoryId ? productsInCategory(categoryId) : PRODUCT_CATALOG;
  const activeName = categoryId ? messages.categories[categoryId].name : messages.catalogue.allName;
  const activeBlurb = categoryId ? messages.categories[categoryId].blurb : messages.catalogue.allBlurb;
  const finishName = messages.finishes[finishId];

  return (
    <main className="container" style={{ paddingBottom: 96 }}>
      <div style={{ padding: "40px 0 30px", borderBottom: "1px solid var(--border)" }}>
        <p className="eyebrow">{messages.catalogue.kicker}</p>
        <h1 style={{ fontWeight: 300, fontSize: "clamp(34px, 4.4vw, 52px)", margin: "0 0 14px", letterSpacing: "-.015em" }}>
          {activeName}
        </h1>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", maxWidth: "56ch", margin: 0 }}>{activeBlurb}</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-start", paddingTop: 36 }}>
        <aside style={{ display: "grid", gap: 34, flex: "1 1 220px", maxWidth: 260 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>
              {messages.catalogue.systemsLabel}
            </div>
            <div style={{ display: "grid", gap: 2 }}>
              <Link
                href={`/${locale}/catalogue`}
                className="filter-link"
                style={{ color: categoryId === null ? "var(--accent)" : "var(--ink)" }}
              >
                {messages.catalogue.allName}
              </Link>
              {CATEGORY_ORDER.map((id) => (
                <Link
                  key={id}
                  href={`/${locale}/catalogue/${id}`}
                  className="filter-link"
                  style={{ color: id === categoryId ? "var(--accent)" : "var(--ink)" }}
                >
                  {messages.categories[id].name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>
              {messages.catalogue.finishLabel}
            </div>
            <div style={{ display: "grid", gap: 11 }}>
              {FINISH_ORDER.map((id) => (
                <button
                  key={id}
                  type="button"
                  className="finish-link"
                  style={{ color: id === finishId ? "var(--accent)" : "var(--text-body)" }}
                  onClick={() => setFinishId(id)}
                >
                  <span
                    className="finish-dot"
                    style={{ background: FINISH_HEX[id], outline: id === finishId ? "1px solid var(--ink)" : "none", outlineOffset: 2 }}
                  />
                  {messages.finishes[id]}
                </button>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 22, fontSize: 13, lineHeight: 1.55, color: "var(--text-muted)" }}>
            {messages.catalogue.priceNote}
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
            <span>{format(messages.catalogue.shownInPrefix, { count: shown.length, finish: finishName })}</span>
            <span>{messages.catalogue.recessNote}</span>
          </div>
          <div className="tile-grid tile-grid--product">
            {shown.map((p) => (
              <ProductCard key={p.code} code={p.code} categoryId={p.categoryId} locale={locale} messages={messages} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

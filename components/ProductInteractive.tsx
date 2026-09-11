"use client";

import { useState } from "react";
import { useAppState } from "@/context/AppStateContext";
import { COMPAT, FINISHES } from "@/lib/data";
import { Product } from "@/lib/types";

export default function ProductInteractive({ product }: { product: Product }) {
  const { finish, setFinish, addItem } = useAppState();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const compatList = COMPAT[product.category] || [];
  const hasCompat = compatList.length > 0;

  const handleAdd = () => {
    addItem(product.code, finish, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <>
      <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>
        Finish — {finish}
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
        {FINISHES.map((f) => (
          <button
            key={f.name}
            type="button"
            title={f.name}
            className="finish-swatch"
            style={{
              background: f.hex,
              outline: f.name === finish ? "1px solid var(--ink)" : "none",
              outlineOffset: 3,
            }}
            onClick={() => setFinish(f.name)}
          />
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "stretch", marginBottom: 14, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--border-strong)", borderRadius: 2 }}>
          <button type="button" className="btn-stepper" style={{ padding: "0 16px", height: 50, fontSize: 17 }} onClick={() => setQty((q) => Math.max(1, q - 1))}>
            −
          </button>
          <span style={{ minWidth: 34, textAlign: "center", fontSize: 15 }}>{qty}</span>
          <button type="button" className="btn-stepper" style={{ padding: "0 16px", height: 50, fontSize: 17 }} onClick={() => setQty((q) => q + 1)}>
            +
          </button>
        </div>
        <button
          type="button"
          className="btn btn-dark"
          style={{ flex: 1, minWidth: 190, height: 50, padding: "0 26px" }}
          onClick={handleAdd}
        >
          {justAdded ? "Added to list ✓" : "Add to request list"}
        </button>
      </div>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 34 }}>Quotation issued per project · drawings included</div>

      <div style={{ borderTop: "1px solid var(--border)" }}>
        {product.specs.map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 24, padding: "13px 0", borderBottom: "1px solid var(--border)", fontSize: 14 }}>
            <span style={{ color: "var(--text-muted)" }}>{k}</span>
            <span style={{ textAlign: "right" }}>{v}</span>
          </div>
        ))}
      </div>

      {hasCompat && (
        <div style={{ marginTop: 28, border: "1px solid var(--border)", background: "var(--bg-alt)", padding: 22 }}>
          <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>
            Compatible with
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {compatList.map((c) => (
              <span key={c} style={{ border: "1px solid var(--border-strong)", background: "var(--bg)", padding: "7px 12px", borderRadius: 2, fontSize: 13, color: "var(--text-body)" }}>
                {c}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "var(--text-muted)", margin: "16px 0 0" }}>
            Not on the list? Send the cistern or box model with your request and we confirm the fit.
          </p>
        </div>
      )}
    </>
  );
}

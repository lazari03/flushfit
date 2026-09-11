"use client";

import { useState } from "react";
import { format } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { CategoryId, Messages } from "@/lib/types";

export default function ProductInteractive({
  code,
  categoryId,
  messages,
}: {
  code: string;
  categoryId: CategoryId;
  messages: Messages;
}) {
  const [qty, setQty] = useState(1);

  const product = messages.products[code];
  const compatList = messages.compat[categoryId] || [];
  const hasCompat = compatList.length > 0;

  const enquiryMessage = format(messages.whatsapp.productQuote, { qty, name: product.name, code });

  return (
    <>
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
        <a
          href={whatsappLink(enquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
          style={{ flex: 1, minWidth: 190, height: 50, padding: "0 26px" }}
        >
          {messages.product.enquireWhatsapp}
        </a>
      </div>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 34 }}>{messages.product.quotationNote}</div>

      <div style={{ borderTop: "1px solid var(--border)" }}>
        {[
          ...product.specs,
          [messages.product.shippingLabel, messages.product.shippingValue],
          [messages.product.warrantyLabel, messages.product.warrantyValue],
        ].map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 24, padding: "13px 0", borderBottom: "1px solid var(--border)", fontSize: 14 }}>
            <span style={{ color: "var(--text-muted)" }}>{k}</span>
            <span style={{ textAlign: "right" }}>{v}</span>
          </div>
        ))}
      </div>

      {hasCompat && (
        <div style={{ marginTop: 28, border: "1px solid var(--border)", background: "var(--bg-alt)", padding: 22 }}>
          <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>
            {messages.product.compatibleWith}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {compatList.map((c) => (
              <span key={c} style={{ border: "1px solid var(--border-strong)", background: "var(--bg)", padding: "7px 12px", borderRadius: 2, fontSize: 13, color: "var(--text-body)" }}>
                {c}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "var(--text-muted)", margin: "16px 0 0" }}>{messages.product.notOnList}</p>
        </div>
      )}
    </>
  );
}

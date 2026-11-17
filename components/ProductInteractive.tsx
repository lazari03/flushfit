"use client";

import { useState } from "react";
import { format } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { CategoryId, Messages } from "@/lib/types";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ProductInteractive({ code, categoryId, messages }: { code: string; categoryId: CategoryId; messages: Messages }) {
  const [qty, setQty] = useState(1);
  const product = messages.products[code];
  const compat = messages.compat[categoryId] || [];
  const p = messages.product;
  const rows: [string, string][] = [...product.specs, [p.shippingLabel, p.shippingValue], [p.warrantyLabel, p.warrantyValue]];

  return (
    <>
      <div className="qty-row">
        <div className="stepper">
          <button type="button" aria-label="−1" onClick={() => setQty((q) => Math.max(1, q - 1))}>
            −
          </button>
          <output aria-live="polite">{qty}</output>
          <button type="button" aria-label="+1" onClick={() => setQty((q) => q + 1)}>
            +
          </button>
        </div>
        <a href={whatsappLink(format(messages.whatsapp.productQuote, { qty, name: product.name, code }))} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          <WhatsAppIcon />
          {p.enquireWhatsapp}
        </a>
      </div>
      <p className="small muted">{p.quotationNote}</p>

      <dl className="spec-table">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      {compat.length > 0 && (
        <div className="compat">
          <div className="compat__title">{p.compatibleWith}</div>
          <ul className="compat__list">
            {compat.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="small muted" style={{ marginTop: 14 }}>
            {p.notOnList}
          </p>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import { useAppState } from "@/context/AppStateContext";
import { format, Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { CategoryId, Messages } from "@/lib/types";
import { CATEGORY_IMAGES } from "@/lib/data";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ProductCard({
  code,
  categoryId,
  locale,
  messages,
}: {
  code: string;
  categoryId: CategoryId;
  locale: Locale;
  messages: Messages;
}) {
  const { finishId } = useAppState();
  const product = messages.products[code];
  const categoryName = messages.categories[categoryId].name;
  const finishName = messages.finishes[finishId];
  const enquiryMessage = format(messages.whatsapp.productEnquiry, { name: product.name, code, finish: finishName });

  return (
    <div className="tile-card">
      <Link href={`/${locale}/product/${code}`} className="tile">
        <ImagePlaceholder caption={product.name} src={CATEGORY_IMAGES[categoryId]} aspectRatio="1/1" />
        <div style={{ padding: "18px 20px 8px" }}>
          <div className="tile-eyebrow">{categoryName}</div>
          <div className="tile-title">{product.name}</div>
          <div className="tile-meta">{product.meta}</div>
        </div>
      </Link>
      <div style={{ padding: "14px 20px 20px", marginTop: "auto" }}>
        <a href={whatsappLink(enquiryMessage)} target="_blank" rel="noopener noreferrer" className="btn-block-outline">
          {messages.product.enquireWhatsapp}
        </a>
      </div>
    </div>
  );
}

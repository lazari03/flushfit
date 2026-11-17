import Link from "next/link";
import { format, Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { CategoryId, Messages } from "@/lib/types";
import { CATEGORY_IMAGES } from "@/lib/data";
import ImagePlaceholder from "./ImagePlaceholder";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ProductCard({ code, categoryId, locale, messages }: { code: string; categoryId: CategoryId; locale: Locale; messages: Messages }) {
  const product = messages.products[code];
  const enquiry = format(messages.whatsapp.productEnquiry, { name: product.name, code });

  return (
    <article className="product-card">
      <Link href={`/${locale}/product/${code}`} className="product-card__link">
        <ImagePlaceholder caption={product.name} src={CATEGORY_IMAGES[categoryId]} sizes="(max-width: 760px) 50vw, 25vw" />
        <div className="product-card__code">{code}</div>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__meta">{product.meta}</div>
      </Link>
      <a href={whatsappLink(enquiry)} target="_blank" rel="noopener noreferrer" className="product-card__cta">
        <WhatsAppIcon />
        {messages.product.enquireWhatsapp}
      </a>
    </article>
  );
}

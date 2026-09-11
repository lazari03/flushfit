import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { CategoryId, Messages } from "@/lib/types";
import { CATEGORY_IMAGES } from "@/lib/data";
import ImagePlaceholder from "./ImagePlaceholder";

export default function RelatedTile({
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
  const product = messages.products[code];
  const categoryName = messages.categories[categoryId].name;
  return (
    <Link href={`/${locale}/product/${code}`} className="tile">
      <ImagePlaceholder caption={product.name} src={CATEGORY_IMAGES[categoryId]} aspectRatio="4/3" />
      <div style={{ padding: "16px 18px 22px" }}>
        <div className="tile-eyebrow" style={{ marginBottom: 8 }}>
          {categoryName}
        </div>
        <div style={{ fontSize: 14.5 }}>{product.name}</div>
      </div>
    </Link>
  );
}

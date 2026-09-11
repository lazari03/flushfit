import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { CategoryId, Messages } from "@/lib/types";
import ImagePlaceholder from "./ImagePlaceholder";

export default function CategoryTile({ categoryId, locale, messages }: { categoryId: CategoryId; locale: Locale; messages: Messages }) {
  const c = messages.categories[categoryId];
  return (
    <Link href={`/${locale}/catalogue/${categoryId}`} className="tile">
      <ImagePlaceholder caption={c.hint} aspectRatio="1/1" />
      <div style={{ padding: "20px 22px 26px" }}>
        <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 7 }}>{c.name}</div>
        <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)" }}>{c.blurb}</div>
      </div>
    </Link>
  );
}

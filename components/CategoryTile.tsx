import Link from "next/link";
import { Category } from "@/lib/types";
import { slug } from "@/lib/slug";
import ImagePlaceholder from "./ImagePlaceholder";

export default function CategoryTile({ category }: { category: Category }) {
  return (
    <Link href={`/catalogue/${slug(category.name)}`} className="tile">
      <ImagePlaceholder caption={category.hint} aspectRatio="1/1" />
      <div style={{ padding: "20px 22px 26px" }}>
        <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 7 }}>{category.name}</div>
        <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)" }}>{category.blurb}</div>
      </div>
    </Link>
  );
}

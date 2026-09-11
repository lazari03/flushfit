import Link from "next/link";
import { Product } from "@/lib/types";
import ImagePlaceholder from "./ImagePlaceholder";

export default function RelatedTile({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.code}`} className="tile">
      <ImagePlaceholder caption={product.name} aspectRatio="4/3" />
      <div style={{ padding: "16px 18px 22px" }}>
        <div className="tile-eyebrow" style={{ marginBottom: 8 }}>
          {product.category}
        </div>
        <div style={{ fontSize: 14.5 }}>{product.name}</div>
      </div>
    </Link>
  );
}

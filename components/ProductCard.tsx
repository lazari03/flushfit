"use client";

import Link from "next/link";
import { useAppState } from "@/context/AppStateContext";
import { Product } from "@/lib/types";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ProductCard({ product }: { product: Product }) {
  const { finish, addItem } = useAppState();

  return (
    <div className="tile-card">
      <Link href={`/product/${product.code}`} className="tile">
        <ImagePlaceholder caption={product.name} aspectRatio="1/1" />
        <div style={{ padding: "18px 20px 8px" }}>
          <div className="tile-eyebrow">{product.category}</div>
          <div className="tile-title">{product.name}</div>
          <div className="tile-meta">{product.meta}</div>
        </div>
      </Link>
      <div style={{ padding: "14px 20px 20px", marginTop: "auto" }}>
        <button type="button" className="btn-add" onClick={() => addItem(product.code, finish, 1)}>
          Add to request list
        </button>
      </div>
    </div>
  );
}

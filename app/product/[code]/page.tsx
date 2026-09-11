import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProductInteractive from "@/components/ProductInteractive";
import RelatedTile from "@/components/RelatedTile";
import { PRODUCTS, findProduct, relatedProducts } from "@/lib/data";
import { slug } from "@/lib/slug";

type Props = { params: Promise<{ code: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ code: p.code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const product = findProduct(code.toUpperCase());
  return { title: product ? `${product.name} — Flush Fit` : "Product — Flush Fit" };
}

export default async function ProductPage({ params }: Props) {
  const { code } = await params;
  const product = findProduct(code.toUpperCase());
  if (!product) notFound();
  const related = relatedProducts(product);

  return (
    <main className="container" style={{ paddingBottom: 96 }}>
      <div style={{ padding: "26px 0", fontSize: 12.5, color: "var(--text-muted)", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <Link href="/" style={{ color: "var(--text-muted)", fontSize: 12.5 }}>
          Home
        </Link>
        <span>/</span>
        <Link href={`/catalogue/${slug(product.category)}`} style={{ color: "var(--text-muted)", fontSize: 12.5 }}>
          {product.category}
        </Link>
        <span>/</span>
        <span style={{ color: "var(--ink)" }}>{product.name}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "start" }}>
        <div style={{ display: "grid", gap: 1, background: "var(--border)", border: "1px solid var(--border)" }}>
          <div style={{ position: "relative", aspectRatio: "1/1", background: "var(--bg)" }}>
            <ImagePlaceholder caption="Product photo on neutral ground" aspectRatio="1/1" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
            <div style={{ position: "relative", aspectRatio: "1/1", background: "var(--bg)" }}>
              <ImagePlaceholder caption="Installed detail" aspectRatio="1/1" />
            </div>
            <div style={{ position: "relative", aspectRatio: "1/1", background: "var(--bg)" }}>
              <ImagePlaceholder caption="Section drawing" aspectRatio="1/1" />
            </div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, letterSpacing: ".14em", color: "var(--text-muted)", marginBottom: 14 }}>
            {product.code} · {product.category}
          </div>
          <h1 style={{ fontWeight: 300, fontSize: "clamp(32px, 3.6vw, 46px)", lineHeight: 1.04, margin: "0 0 18px", letterSpacing: "-.015em" }}>
            {product.name}
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.62, color: "var(--text-body)", margin: "0 0 32px", maxWidth: "48ch" }}>{product.description}</p>

          <ProductInteractive product={product} />

          <div style={{ display: "flex", gap: 22, marginTop: 24, fontSize: 13.5, flexWrap: "wrap" }}>
            <a href="#">Download DWG</a>
            <a href="#">Installation sheet (PDF)</a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section style={{ marginTop: 84, borderTop: "1px solid var(--border)", paddingTop: 36 }}>
          <h2 style={{ fontWeight: 300, fontSize: 28, margin: "0 0 24px" }}>Coordinates with</h2>
          <div className="tile-grid tile-grid--related">
            {related.map((p) => (
              <RelatedTile key={p.code} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

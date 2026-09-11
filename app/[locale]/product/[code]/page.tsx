import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProductInteractive from "@/components/ProductInteractive";
import RelatedTile from "@/components/RelatedTile";
import { CATEGORY_IMAGES, PRODUCT_CATALOG, findProductMeta, relatedProductCodes } from "@/lib/data";
import { LOCALES, Locale, getMessages } from "@/lib/i18n";

type Props = { params: Promise<{ locale: Locale; code: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => PRODUCT_CATALOG.map((p) => ({ locale, code: p.code })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, code } = await params;
  const messages = getMessages(locale);
  const meta = findProductMeta(code);
  const name = meta ? messages.products[meta.code].name : null;
  return { title: name ? `${name} — ${messages.brand.name}` : messages.brand.name };
}

export default async function ProductPage({ params }: Props) {
  const { locale, code: rawCode } = await params;
  const meta = findProductMeta(rawCode);
  if (!meta) notFound();
  const messages = getMessages(locale);
  const product = messages.products[meta.code];
  const categoryName = messages.categories[meta.categoryId].name;
  const related = relatedProductCodes(meta.code).map((c) => findProductMeta(c)!);

  return (
    <main className="container" style={{ paddingBottom: 96 }}>
      <div style={{ padding: "26px 0", fontSize: 12.5, color: "var(--text-muted)", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <Link href={`/${locale}`} style={{ color: "var(--text-muted)", fontSize: 12.5 }}>
          {messages.product.breadcrumbHome}
        </Link>
        <span>/</span>
        <Link href={`/${locale}/catalogue/${meta.categoryId}`} style={{ color: "var(--text-muted)", fontSize: 12.5 }}>
          {categoryName}
        </Link>
        <span>/</span>
        <span style={{ color: "var(--ink)" }}>{product.name}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "start" }}>
        <div style={{ position: "relative", aspectRatio: "1/1", background: "var(--bg)", border: "1px solid var(--border)" }}>
          <ImagePlaceholder caption={messages.product.mainImageCaption} src={CATEGORY_IMAGES[meta.categoryId]} aspectRatio="1/1" />
        </div>

        <div>
          <div style={{ fontSize: 11, letterSpacing: ".14em", color: "var(--text-muted)", marginBottom: 14 }}>
            {meta.code} · {categoryName}
          </div>
          <h1 style={{ fontWeight: 300, fontSize: "clamp(32px, 3.6vw, 46px)", lineHeight: 1.04, margin: "0 0 18px", letterSpacing: "-.015em" }}>
            {product.name}
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.62, color: "var(--text-body)", margin: "0 0 32px", maxWidth: "48ch" }}>{product.description}</p>

          <ProductInteractive code={meta.code} categoryId={meta.categoryId} messages={messages} />

          <div style={{ display: "flex", gap: 22, marginTop: 24, fontSize: 13.5, flexWrap: "wrap" }}>
            <a href="#">{messages.product.downloadDwg}</a>
            <a href="#">{messages.product.installSheet}</a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section style={{ marginTop: 84, borderTop: "1px solid var(--border)", paddingTop: 36 }}>
          <h2 style={{ fontWeight: 300, fontSize: 28, margin: "0 0 24px" }}>{messages.product.coordinatesWith}</h2>
          <div className="tile-grid tile-grid--related">
            {related.map((p) => (
              <RelatedTile key={p.code} code={p.code} categoryId={p.categoryId} locale={locale} messages={messages} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

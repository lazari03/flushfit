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
    <main id="main" className="container">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href={`/${locale}`}>{messages.product.breadcrumbHome}</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/${locale}/catalogue/${meta.categoryId}`}>{categoryName}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" style={{ color: "var(--ink)" }}>{product.name}</span>
      </nav>

      <div className="pdp">
        <div className="pdp__media">
          <ImagePlaceholder caption={`${product.name} — ${messages.product.mainImageCaption}`} src={CATEGORY_IMAGES[meta.categoryId]} priority sizes="(max-width: 860px) 100vw, 58vw" />
        </div>
        <div>
          <div className="pdp__code">
            {meta.code} — {categoryName}
          </div>
          <h1 className="display h1">{product.name}</h1>
          <p className="lede">{product.description}</p>
          <ProductInteractive code={meta.code} categoryId={meta.categoryId} messages={messages} />
          <div className="doc-links">
            <a href="#" className="text-link">{messages.product.downloadDwg}</a>
            <a href="#" className="text-link">{messages.product.installSheet}</a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="related" aria-labelledby="related-title">
          <h2 id="related-title" className="display h2" style={{ marginBottom: 28 }}>
            {messages.product.coordinatesWith}
          </h2>
          <div className="product-row">
            {related.map((p) => (
              <RelatedTile key={p.code} code={p.code} categoryId={p.categoryId} locale={locale} messages={messages} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

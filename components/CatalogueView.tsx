import Link from "next/link";
import { CATEGORY_ORDER, productsInCategory, PRODUCT_CATALOG } from "@/lib/data";
import { format, Locale } from "@/lib/i18n";
import { CategoryId, Messages } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function CatalogueView({ categoryId, locale, messages }: { categoryId: CategoryId | null; locale: Locale; messages: Messages }) {
  const shown = categoryId ? productsInCategory(categoryId) : PRODUCT_CATALOG;
  const c = messages.catalogue;
  const name = categoryId ? messages.categories[categoryId].name : c.allName;
  const blurb = categoryId ? messages.categories[categoryId].blurb : c.allBlurb;

  return (
    <main id="main" className="container" style={{ paddingBottom: "var(--space)" }}>
      <div className="page-head">
        <h1 className="display h1">{name}</h1>
        <p className="lede">{blurb}</p>
      </div>
      <nav className="filter-bar" aria-label={c.systemsLabel}>
        <Link href={`/${locale}/catalogue`} className="filter-chip" aria-current={categoryId === null ? "page" : undefined}>
          {c.allName}
        </Link>
        {CATEGORY_ORDER.map((id) => (
          <Link key={id} href={`/${locale}/catalogue/${id}`} className="filter-chip" aria-current={id === categoryId ? "page" : undefined}>
            {messages.categories[id].name}
          </Link>
        ))}
      </nav>
      <div className="catalogue-meta">
        <span>{format(c.shownInPrefix, { count: shown.length })}</span>
        <span>{c.priceNote}</span>
      </div>
      <div className="product-row">
        {shown.map((p) => (
          <ProductCard key={p.code} code={p.code} categoryId={p.categoryId} locale={locale} messages={messages} />
        ))}
      </div>
    </main>
  );
}

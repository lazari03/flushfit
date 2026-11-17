import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CategoryTile from "@/components/CategoryTile";
import ProductCard from "@/components/ProductCard";
import Emphasis from "@/components/Emphasis";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CATEGORY_IMAGES, CATEGORY_ORDER, FEATURED_CODES, HERO_IMAGE, HOW_IT_WORKS_IMAGES, HOW_IT_WORKS_ORDER, findProductMeta } from "@/lib/data";
import { LOCALES, Locale, getMessages } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const m = getMessages(locale);
  const h = m.home;
  const featured = FEATURED_CODES.map((code) => findProductMeta(code)).filter((p) => p !== undefined);
  const facts = [...h.proofs.map((p) => ({ title: p.title, label: p.label })), { title: h.drawing.depth, label: h.specPoints[1].text }];

  return (
    <main id="main">
      <section className="hero container">
        <div className="hero__grid">
          <div className="hero__copy">
            <h1 className="display h1">
              <Emphasis text={h.headline} />
            </h1>
            <p className="lede">{h.sub}</p>
            <div className="hero__ctas">
              <Link href={`/${locale}/catalogue`} className="btn btn-dark">
                {h.ctaPrimary}
              </Link>
              <a href={whatsappLink(m.whatsapp.heroMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                {h.ctaSecondary}
              </a>
            </div>
          </div>
          {/* A switch pressed flush into a stone wall: the product disappearing is the point. */}
          <ImagePlaceholder caption={m.categories["light-switches"].hint} src={CATEGORY_IMAGES["light-switches"]} className="hero__photo" priority sizes="(max-width: 860px) 100vw, 55vw" />
        </div>
        <ul className="facts">
          {facts.map((f) => (
            <li key={f.title}>
              <div className="fact__title">{f.title}</div>
              <div className="small muted">{f.label}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section container" aria-labelledby="systems-title">
        <div className="section-head">
          <h2 id="systems-title" className="display h2">
            {h.systemsTitle}
          </h2>
          <Link href={`/${locale}/catalogue`} className="text-link">
            {h.allArticlesLink}
          </Link>
        </div>
        <div className="cat-grid">
          {CATEGORY_ORDER.map((id) => (
            <CategoryTile key={id} categoryId={id} locale={locale} messages={m} />
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="featured-title">
        <div className="section-head">
          <h2 id="featured-title" className="display h2">
            {h.featuredTitle}
          </h2>
          <Link href={`/${locale}/catalogue`} className="text-link">
            {h.viewAllLink}
          </Link>
        </div>
        <div className="product-row">
          {featured.map((p) => (
            <ProductCard key={p.code} code={p.code} categoryId={p.categoryId} locale={locale} messages={m} />
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="spec-title">
        <div className="spec">
          <ImagePlaceholder caption={h.heroImageCaption} src={HERO_IMAGE} sizes="(max-width: 900px) 100vw, 58vw" />
          <div>
            <h2 id="spec-title" className="display h2">
              {h.specTitle}
            </h2>
            <p className="lede">{h.specBody}</p>
            <ul className="spec-list">
              {h.specPoints.map((s) => (
                <li key={s.num}>{s.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="how-title">
        <div className="section-head">
          <div>
            <h2 id="how-title" className="display h2">
              {h.howTitle}
            </h2>
            <p className="lede">{h.howIntro}</p>
          </div>
        </div>
        <div className="install">
          {HOW_IT_WORKS_ORDER.map((id) => {
            const item = m.howItWorks[id];
            return (
              <article key={id} className="install__item">
                <ImagePlaceholder caption={item.title} src={HOW_IT_WORKS_IMAGES[id]} sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                <h3 className="h3">{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <div className="container cta__inner">
          <div>
            <h2 id="cta-title" className="display h2">
              {h.ctaBannerTitle}
            </h2>
            <p>{h.ctaBannerBody}</p>
          </div>
          <a href={whatsappLink(m.whatsapp.ctaBannerMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-light">
            <WhatsAppIcon />
            {h.ctaBannerButton}
          </a>
        </div>
      </section>
    </main>
  );
}

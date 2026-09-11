import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CategoryTile from "@/components/CategoryTile";
import ProductCard from "@/components/ProductCard";
import Emphasis from "@/components/Emphasis";
import { CATEGORY_ORDER, FEATURED_CODES, HOW_IT_WORKS_ORDER, findProductMeta } from "@/lib/data";
import { LOCALES, Locale, getMessages } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);
  const featured = FEATURED_CODES.map((code) => findProductMeta(code)!).filter(Boolean);

  return (
    <main>
      {/* Hero */}
      <section
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 56,
          alignItems: "center",
          minHeight: 610,
        }}
      >
        <div style={{ padding: "72px 0" }}>
          <p className="eyebrow eyebrow--accent">{messages.home.kicker}</p>
          <h1
            style={{
              fontWeight: 300,
              fontSize: "clamp(44px, 5.4vw, 78px)",
              lineHeight: 0.98,
              letterSpacing: "-.02em",
              margin: "0 0 26px",
              textWrap: "pretty",
            }}
          >
            <Emphasis text={messages.home.headline} />
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.62, color: "var(--text-body)", maxWidth: "46ch", margin: "0 0 36px" }}>
            {messages.home.sub}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href={`/${locale}/catalogue`} className="btn btn-dark btn-lg">
              {messages.home.ctaPrimary}
            </Link>
            <a href={whatsappLink(messages.whatsapp.heroMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              {messages.home.ctaSecondary}
            </a>
          </div>
        </div>
        <div style={{ position: "relative", aspectRatio: "4/5", minHeight: 430 }}>
          <ImagePlaceholder caption={messages.home.heroImageCaption} aspectRatio="4/5" minHeight={430} />
        </div>
      </section>

      {/* Proof row */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-alt)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(215px, 1fr))" }}>
          {messages.home.proofs.map((p) => (
            <div key={p.label} style={{ padding: "34px 28px 34px 0" }}>
              <div style={{ fontSize: 34, lineHeight: 1, marginBottom: 10 }}>{p.value}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)" }}>{p.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Systems */}
      <section className="container" style={{ paddingTop: 84 }}>
        <div className="divider-row">
          <div>
            <p className="eyebrow">{messages.home.systemsKicker}</p>
            <h2 className="section-heading">{messages.home.systemsTitle}</h2>
          </div>
          <Link href={`/${locale}/catalogue`} className="btn-ghost">
            {messages.home.allArticlesLink}
          </Link>
        </div>
        <div className="tile-grid tile-grid--cat">
          {CATEGORY_ORDER.map((id) => (
            <CategoryTile key={id} categoryId={id} locale={locale} messages={messages} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container" style={{ paddingTop: 84 }}>
        <div className="divider-row">
          <div>
            <p className="eyebrow">{messages.home.featuredKicker}</p>
            <h2 className="section-heading">{messages.home.featuredTitle}</h2>
          </div>
          <Link href={`/${locale}/catalogue`} className="btn-ghost">
            {messages.home.viewAllLink}
          </Link>
        </div>
        <div className="tile-grid tile-grid--product">
          {featured.map((p) => (
            <ProductCard key={p.code} code={p.code} categoryId={p.categoryId} locale={locale} messages={messages} />
          ))}
        </div>
      </section>

      {/* Specification */}
      <section className="container" style={{ padding: "84px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "3/2" }}>
            <ImagePlaceholder caption={messages.home.specImageCaption} aspectRatio="3/2" />
          </div>
          <div>
            <p className="eyebrow eyebrow--accent" style={{ marginBottom: 22 }}>
              {messages.home.specKicker}
            </p>
            <h2 style={{ fontWeight: 300, fontSize: 34, lineHeight: 1.12, margin: "0 0 20px", letterSpacing: "-.01em" }}>
              {messages.home.specTitle}
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--text-body)", margin: "0 0 28px", maxWidth: "48ch" }}>
              {messages.home.specBody}
            </p>
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {messages.home.specPoints.map((s) => (
                <div key={s.num} style={{ display: "flex", gap: 18, padding: "15px 0", fontSize: 14, borderBottom: "1px solid var(--border)" }}>
                  <span style={{ color: "var(--accent)", minWidth: 28 }}>{s.num}</span>
                  <span style={{ color: "var(--text-body)", lineHeight: 1.5 }}>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ borderTop: "1px solid var(--border)", background: "var(--bg-alt)" }}>
        <div className="container" style={{ padding: "84px 24px" }}>
          <p className="eyebrow">{messages.home.howKicker}</p>
          <h2 className="section-heading" style={{ marginBottom: 12 }}>
            {messages.home.howTitle}
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", margin: "0 0 40px", maxWidth: "54ch" }}>
            {messages.home.howIntro}
          </p>
          <div style={{ display: "grid", gap: 1, background: "var(--border)", border: "1px solid var(--border)" }}>
            {HOW_IT_WORKS_ORDER.map((id) => {
              const h = messages.howItWorks[id];
              return (
                <div key={id} style={{ background: "var(--bg)", display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
                  <div style={{ position: "relative", flex: "1 1 min(100%, 320px)", minHeight: 220 }}>
                    <ImagePlaceholder caption={`${h.title} — install photo`} />
                  </div>
                  <div style={{ flex: "1 1 min(100%, 420px)", minWidth: 0, padding: 30, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ fontSize: 19, marginBottom: 12 }}>{h.title}</div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-body)", margin: 0, maxWidth: "52ch" }}>{h.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div
          className="container"
          style={{ padding: "72px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}
        >
          <div>
            <h2 style={{ fontWeight: 300, fontSize: 34, lineHeight: 1.12, margin: "0 0 14px" }}>{messages.home.ctaBannerTitle}</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-inverse-muted)", margin: 0, maxWidth: "44ch" }}>
              {messages.home.ctaBannerBody}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a href={whatsappLink(messages.whatsapp.ctaBannerMessage)} target="_blank" rel="noopener noreferrer" className="btn-light-on-dark">
              {messages.home.ctaBannerButton}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

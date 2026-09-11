import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LOCALES, Locale, isLocale, getMessages } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// Default per-locale <title>/description — leaf pages (catalogue, product)
// override title with their own generateMetadata; this covers the home page
// and anything that doesn't set its own.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const messages = getMessages(isLocale(raw) ? raw : "en");
  return {
    title: `${messages.brand.name} — ${messages.brand.tagline}`,
    description: messages.home.sub,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const messages = getMessages(locale);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <TopBar lines={messages.topbar} />
      <Header locale={locale} messages={messages} />
      {children}
      <Footer messages={messages} />
    </div>
  );
}

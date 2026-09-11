import type { Metadata } from "next";
import CatalogueView from "@/components/CatalogueView";
import { LOCALES, Locale, getMessages } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);
  return { title: `${messages.catalogue.kicker} — ${messages.brand.name}` };
}

export default async function CataloguePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);
  return <CatalogueView categoryId={null} locale={locale} messages={messages} />;
}

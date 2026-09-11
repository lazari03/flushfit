import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogueView from "@/components/CatalogueView";
import { CATEGORY_ORDER, isCategoryId } from "@/lib/data";
import { LOCALES, Locale, getMessages } from "@/lib/i18n";

type Props = { params: Promise<{ locale: Locale; category: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => CATEGORY_ORDER.map((category) => ({ locale, category })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const messages = getMessages(locale);
  if (!isCategoryId(category)) return { title: `${messages.catalogue.kicker} — ${messages.brand.name}` };
  return { title: `${messages.categories[category].name} — ${messages.brand.name}` };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  if (!isCategoryId(category)) notFound();
  const messages = getMessages(locale);
  return <CatalogueView categoryId={category} locale={locale} messages={messages} />;
}

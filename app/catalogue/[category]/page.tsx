import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogueView from "@/components/CatalogueView";
import { CATEGORIES, findCategoryBySlug } from "@/lib/data";
import { slug } from "@/lib/slug";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: slug(c.name) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = findCategoryBySlug(categorySlug);
  return { title: category ? `${category.name} — Flush Fit` : "Catalogue — Flush Fit" };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = findCategoryBySlug(categorySlug);
  if (!category) notFound();
  return <CatalogueView categoryName={category.name} />;
}

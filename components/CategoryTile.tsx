import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { CategoryId, Messages } from "@/lib/types";
import { CATEGORY_IMAGES } from "@/lib/data";
import ImagePlaceholder from "./ImagePlaceholder";

export default function CategoryTile({ categoryId, locale, messages }: { categoryId: CategoryId; locale: Locale; messages: Messages }) {
  const c = messages.categories[categoryId];
  return (
    <Link href={`/${locale}/catalogue/${categoryId}`} className="cat">
      <ImagePlaceholder caption={c.hint} src={CATEGORY_IMAGES[categoryId]} sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw" />
      <h3 className="h3">{c.name}</h3>
      <p className="cat__text">{c.blurb}</p>
    </Link>
  );
}

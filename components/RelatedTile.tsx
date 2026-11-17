import { Locale } from "@/lib/i18n";
import { CategoryId, Messages } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function RelatedTile(props: { code: string; categoryId: CategoryId; locale: Locale; messages: Messages }) {
  return <ProductCard {...props} />;
}

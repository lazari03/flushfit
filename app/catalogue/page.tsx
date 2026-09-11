import type { Metadata } from "next";
import CatalogueView from "@/components/CatalogueView";

export const metadata: Metadata = {
  title: "Catalogue — Flush Fit",
};

export default function CataloguePage() {
  return <CatalogueView categoryName={null} />;
}

// Structural, locale-independent data: which entities exist, their ids/codes,
// ordering, and cross-references. All display text lives in content/<locale>.json.
import { CategoryId, FinishId, HowItWorksId, ProductMeta } from "./types";

export const CATEGORY_ORDER: CategoryId[] = [
  "flush-plates",
  "recessed-sockets",
  "light-switches",
  "paper-holders",
  "towel-systems",
  "manifold-cabinets",
];

export const FINISH_ORDER: FinishId[] = ["brushed-stainless", "matt-white", "matt-black", "brushed-brass", "gunmetal"];

export const FINISH_HEX: Record<FinishId, string> = {
  "brushed-stainless": "#B9B6B0",
  "matt-white": "#EDEAE4",
  "matt-black": "#22221F",
  "brushed-brass": "#A98C55",
  gunmetal: "#5A5A57",
};

export const HOW_IT_WORKS_ORDER: HowItWorksId[] = ["how-flush", "how-electro", "how-holders", "how-cabinet"];

export const PRODUCT_CATALOG: ProductMeta[] = [
  { code: "FP-01", categoryId: "flush-plates" },
  { code: "FP-02", categoryId: "flush-plates" },
  { code: "FP-03", categoryId: "flush-plates" },
  { code: "RS-01", categoryId: "recessed-sockets" },
  { code: "RS-02", categoryId: "recessed-sockets" },
  { code: "RS-03", categoryId: "recessed-sockets" },
  { code: "LS-01", categoryId: "light-switches" },
  { code: "LS-02", categoryId: "light-switches" },
  { code: "LS-03", categoryId: "light-switches" },
  { code: "PH-01", categoryId: "paper-holders" },
  { code: "PH-02", categoryId: "paper-holders" },
  { code: "TS-01", categoryId: "towel-systems" },
  { code: "TS-02", categoryId: "towel-systems" },
  { code: "MC-01", categoryId: "manifold-cabinets" },
  { code: "MC-02", categoryId: "manifold-cabinets" },
];

export const FEATURED_CODES = ["FP-01", "RS-01", "PH-01", "TS-01"];

export const findProductMeta = (code: string): ProductMeta | undefined =>
  PRODUCT_CATALOG.find((p) => p.code === code.toUpperCase());

export const productsInCategory = (categoryId: CategoryId): ProductMeta[] =>
  PRODUCT_CATALOG.filter((p) => p.categoryId === categoryId);

export const relatedProductCodes = (code: string, count = 4): string[] => {
  const current = findProductMeta(code);
  if (!current) return [];
  return PRODUCT_CATALOG.filter((p) => p.code !== current.code && p.categoryId !== current.categoryId)
    .slice(0, count)
    .map((p) => p.code);
};

export const isCategoryId = (value: string): value is CategoryId => (CATEGORY_ORDER as string[]).includes(value);

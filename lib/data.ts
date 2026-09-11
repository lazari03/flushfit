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

// Stock photography standing in for real product shots, one per category.
// Swap for studio photography once it exists — ImagePlaceholder falls back
// to its caption automatically if a src is ever removed.
const UNSPLASH = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=70&auto=format&fit=crop`;
export const CATEGORY_IMAGES: Record<CategoryId, string> = {
  "flush-plates": UNSPLASH("1777869976475-e5e23bc6a0be"),
  "recessed-sockets": UNSPLASH("1565049981953-379c9c2a5d48"),
  "light-switches": UNSPLASH("1623707430101-9e74cefe05e2"),
  "paper-holders": UNSPLASH("1584458290237-181c65bf6647"),
  "towel-systems": UNSPLASH("1620626011761-996317b8d101"),
  "manifold-cabinets": UNSPLASH("1558211583-03ed8a0b3d5f"),
};
export const HERO_IMAGE = UNSPLASH("1584622650111-993a426fbf0a");

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

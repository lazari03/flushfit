export const CATEGORY_IDS = [
  "flush-plates",
  "recessed-sockets",
  "light-switches",
  "paper-holders",
  "towel-systems",
  "manifold-cabinets",
] as const;
export type CategoryId = (typeof CATEGORY_IDS)[number];

export const HOW_IT_WORKS_IDS = ["how-flush", "how-electro", "how-holders", "how-cabinet"] as const;
export type HowItWorksId = (typeof HOW_IT_WORKS_IDS)[number];

export type ProductMeta = {
  code: string;
  categoryId: CategoryId;
};

export type Spec = [string, string];

// Shape of the translated content in content/<locale>.json
export type Messages = {
  nav: { catalogue: string; flushPlates: string; electrical: string; whatsappUs: string };
  lang: { en: string; sq: string; it: string };
  topbar: string[];
  brand: { name: string; tagline: string };
  home: {
    kicker: string;
    headline: string; // emphasis marked with *word*
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroImageCaption: string;
    proofs: { icon: string; title: string; label: string }[];
    systemsKicker: string;
    systemsTitle: string;
    allArticlesLink: string;
    featuredKicker: string;
    featuredTitle: string;
    viewAllLink: string;
    specKicker: string;
    specTitle: string;
    specBody: string;
    specImageCaption: string;
    specPoints: { num: string; text: string }[];
    howKicker: string;
    howTitle: string;
    howIntro: string;
    ctaBannerTitle: string;
    ctaBannerBody: string;
    ctaBannerButton: string;
  };
  categories: Record<CategoryId, { name: string; blurb: string; hint: string }>;
  products: Record<string, { name: string; meta: string; description: string; specs: Spec[] }>;
  howItWorks: Record<HowItWorksId, { title: string; text: string }>;
  compat: Partial<Record<CategoryId, string[]>>;
  catalogue: {
    kicker: string;
    allName: string;
    allBlurb: string;
    systemsLabel: string;
    priceNote: string;
    shownInPrefix: string;
  };
  product: {
    breadcrumbHome: string;
    mainImageCaption: string;
    quotationNote: string;
    shippingLabel: string;
    shippingValue: string;
    warrantyLabel: string;
    warrantyValue: string;
    downloadDwg: string;
    installSheet: string;
    compatibleWith: string;
    notOnList: string;
    coordinatesWith: string;
    enquireWhatsapp: string;
  };
  footer: {
    brandBlurb: string;
    columns: { title: string; links: string[] }[];
    specifierNotesTitle: string;
    specifierNotesBody: string;
    emailPlaceholder: string;
    subscribe: string;
    thanks: string;
    copyright: string;
  };
  whatsapp: {
    headerMessage: string;
    heroMessage: string;
    ctaBannerMessage: string;
    productEnquiry: string;
    productQuote: string;
  };
  notFound: { title: string; body: string; backHome: string };
};

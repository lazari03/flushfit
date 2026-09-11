import { Category, Dealer, Finish, HowItWorksItem, Product } from "./types";
import { slug } from "./slug";

export const CATEGORIES: Category[] = [
  { name: "Flush plates", blurb: "Frameless actuator plates for concealed cisterns.", hint: "Flush plate, tile-flush" },
  { name: "Recessed sockets", blurb: "Power outlets that close level with the wall.", hint: "Recessed socket" },
  { name: "Light switches", blurb: "Touch and rocker switches set into plaster.", hint: "Flush switch" },
  { name: "Paper holders", blurb: "Incasso holders with a soft-closing flap.", hint: "Recessed paper holder" },
  { name: "Towel systems", blurb: "Bars and niches built into the wall face.", hint: "Recessed towel bar" },
  { name: "Manifold cabinets", blurb: "Service access without a visible frame.", hint: "Manifold cabinet door" },
];

export const PRODUCTS: Product[] = [
  {
    code: "FP-01",
    name: "Plate 01 Square",
    category: "Flush plates",
    meta: "Stainless 316 · 180 × 120 mm",
    description:
      "A frameless dual-flush actuator that finishes level with the tile. The plate is cut from 3 mm stainless and set in a plaster-in frame, so the only visible line is the joint around the two touch fields.",
    specs: [
      ["Material", "Stainless steel 316"],
      ["Dimensions", "180 × 120 × 6 mm"],
      ["Recess depth", "45 mm"],
      ["Actuation", "Dual flush, mechanical"],
      ["Cistern fit", "Geberit, Grohe, Tece"],
      ["Included", "Mounting box, frame, DWG"],
    ],
  },
  {
    code: "FP-02",
    name: "Plate 02 Round",
    category: "Flush plates",
    meta: "Stainless 316 · ⌀ 150 mm",
    description: "The round variant of the 01 plate, machined from a single piece with two concentric touch fields.",
    specs: [
      ["Material", "Stainless steel 316"],
      ["Dimensions", "⌀ 150 × 6 mm"],
      ["Recess depth", "45 mm"],
      ["Actuation", "Dual flush, mechanical"],
    ],
  },
  {
    code: "FP-03",
    name: "Plate 03 Tileable",
    category: "Flush plates",
    meta: "Carrier for 6–12 mm tile",
    description: "A carrier plate that accepts the project tile, so the actuator disappears into the wall pattern entirely.",
    specs: [
      ["Material", "Powder-coated steel carrier"],
      ["Tile thickness", "6–12 mm"],
      ["Recess depth", "45 mm"],
      ["Included", "Carrier, frame, cutting template"],
    ],
  },
  {
    code: "RS-01",
    name: "Socket 01 Single",
    category: "Recessed sockets",
    meta: "Type F · IP44 · 45 mm",
    description:
      "A single outlet on a spring-loaded lid that closes flush with the wall when not in use. Rated IP44 for zone 2 placement.",
    specs: [
      ["Outlets", "1 × Type F"],
      ["Rating", "IP44 · 16 A"],
      ["Recess depth", "45 mm"],
      ["Lid", "Push-to-open, soft close"],
      ["Included", "Steel box, frame, DWG"],
    ],
  },
  {
    code: "RS-02",
    name: "Socket 02 Double",
    category: "Recessed sockets",
    meta: "Type F · IP44 · 45 mm",
    description: "Two outlets behind one flush lid, sharing a single mounting box.",
    specs: [
      ["Outlets", "2 × Type F"],
      ["Rating", "IP44 · 16 A"],
      ["Recess depth", "45 mm"],
    ],
  },
  {
    code: "RS-03",
    name: "Socket 03 USB-C",
    category: "Recessed sockets",
    meta: "2 × 30 W USB-C · IP44",
    description: "Charging only, for mirror cabinets and vanity recesses.",
    specs: [
      ["Outlets", "2 × USB-C, 30 W"],
      ["Rating", "IP44"],
      ["Recess depth", "45 mm"],
    ],
  },
  {
    code: "LS-01",
    name: "Switch 01 Touch",
    category: "Light switches",
    meta: "Capacitive · 45 mm",
    description: "A capacitive field flush with the plaster, marked only by a machined hairline.",
    specs: [
      ["Type", "Capacitive touch"],
      ["Load", "Up to 300 W LED"],
      ["Recess depth", "45 mm"],
      ["Finish", "Five standard finishes"],
    ],
  },
  {
    code: "LS-02",
    name: "Switch 02 Rocker",
    category: "Light switches",
    meta: "Single pole · 45 mm",
    description: "A mechanical rocker recessed behind a flush bezel.",
    specs: [
      ["Type", "Single pole rocker"],
      ["Rating", "10 A"],
      ["Recess depth", "45 mm"],
    ],
  },
  {
    code: "LS-03",
    name: "Switch 03 Dimmer",
    category: "Light switches",
    meta: "Trailing edge · 5–150 W",
    description: "Rotary dimmer with the knob set below the wall face.",
    specs: [
      ["Type", "Trailing edge dimmer"],
      ["Load", "5–150 W"],
      ["Recess depth", "45 mm"],
    ],
  },
  {
    code: "PH-01",
    name: "Holder 01 Flap",
    category: "Paper holders",
    meta: "Stainless 316 · 155 × 155 mm",
    description:
      "A recessed paper holder with a soft-closing flap that sits level with the wall. The roll loads from the front and the flap doubles as a shelf when open.",
    specs: [
      ["Material", "Stainless steel 316"],
      ["Dimensions", "155 × 155 × 45 mm"],
      ["Recess depth", "45 mm"],
      ["Capacity", "One roll, ⌀ 120 mm"],
      ["Included", "Box, frame, DWG"],
    ],
  },
  {
    code: "PH-02",
    name: "Holder 02 Open",
    category: "Paper holders",
    meta: "Stainless 316 · 155 × 155 mm",
    description: "An open niche version without a flap, sized for the spare roll.",
    specs: [
      ["Material", "Stainless steel 316"],
      ["Dimensions", "155 × 155 × 45 mm"],
      ["Recess depth", "45 mm"],
    ],
  },
  {
    code: "TS-01",
    name: "Towel 01 Bar",
    category: "Towel systems",
    meta: "Recessed bar · 600 mm",
    description: "A bar set into a shallow niche so towels hang against the wall plane rather than off it.",
    specs: [
      ["Material", "Stainless steel 316"],
      ["Length", "600 mm"],
      ["Recess depth", "45 mm"],
      ["Load", "Up to 12 kg"],
    ],
  },
  {
    code: "TS-02",
    name: "Towel 02 Niche",
    category: "Towel systems",
    meta: "Niche · 300 × 900 mm",
    description: "A full-height niche with a concealed bar at the head, for stacked and hanging towels together.",
    specs: [
      ["Material", "Powder-coated steel liner"],
      ["Opening", "300 × 900 mm"],
      ["Depth", "120 mm"],
    ],
  },
  {
    code: "MC-01",
    name: "Cabinet 01 Manifold",
    category: "Manifold cabinets",
    meta: "Frameless door · 500 × 500 mm",
    description: "A push-to-open service door with no visible frame, giving access to the manifold behind a tiled or plastered face.",
    specs: [
      ["Material", "Steel carcass, tileable door"],
      ["Opening", "500 × 500 mm"],
      ["Depth", "110 mm"],
      ["Opening action", "Push-to-open magnet latch"],
    ],
  },
  {
    code: "MC-02",
    name: "Cabinet 02 Tall",
    category: "Manifold cabinets",
    meta: "Frameless door · 500 × 800 mm",
    description: "The tall variant for vertical manifolds and filter sets.",
    specs: [
      ["Material", "Steel carcass, tileable door"],
      ["Opening", "500 × 800 mm"],
      ["Depth", "110 mm"],
    ],
  },
];

export const FINISHES: Finish[] = [
  { name: "Brushed stainless", hex: "#B9B6B0" },
  { name: "Matt white", hex: "#EDEAE4" },
  { name: "Matt black", hex: "#22221F" },
  { name: "Brushed brass", hex: "#A98C55" },
  { name: "Gunmetal", hex: "#5A5A57" },
];

export const COMPAT: Record<string, string[]> = {
  "Flush plates": ["Geberit Sigma", "Geberit Delta", "Geberit Omega", "TECE", "Alcaplast", "Grohe", "Viega", "Oli", "Jomotech", "Cersanit", "TOTO"],
  "Recessed sockets": ["60 mm standard box", "Type F Schuko", "35 mm deep partition wall", "Solid wall, chased"],
  "Light switches": ["60 mm standard box", "Two-wire circuits", "LED drivers up to 300 W"],
  "Manifold cabinets": ["Tile 6–12 mm", "Plaster finish", "Gypsum partition", "Solid brick"],
};

export const HOW_IT_WORKS: HowItWorksItem[] = [
  {
    title: "Hidden flush plate",
    slot: "how-flush",
    text: "The opening is cut by hand or water jet, then the frame is plastered in level with the tile. The actuator clips to the frame last, after grouting, so the finished wall shows only the joint line. Fits the cistern brands listed on each article.",
  },
  {
    title: "Invisible sockets and switches",
    slot: "how-electro",
    text: "Both mount into a standard 60 mm box, so existing rough-in usually needs no change. The lid closes flush and the article is rated IP44 for zone 2. Suitable for new build and for retrofit into a finished wall.",
  },
  {
    title: "Recessed paper and towel holders",
    slot: "how-holders",
    text: "A steel box is set into the wall build-up and the front frame is plastered or tiled up to. The visible part is only the flap or bar, sitting level with the wall face.",
  },
  {
    title: "Manifold access cabinet",
    slot: "how-cabinet",
    text: "The carcass is fixed into the partition and the door is faced with the project tile, so access stays available without a visible frame. Push-to-open, no handle.",
  },
];

export const PROOFS = [
  { value: "45 mm", label: "One standard recess depth across every system" },
  { value: "5", label: "Finishes, matched across plates, sockets and holders" },
  { value: "DWG", label: "Drawings and installation sheets per article" },
  { value: "1 day", label: "Quotation turnaround on project lists" },
];

export const SPEC_POINTS = [
  { num: "01", text: "Steel mounting box and plaster-in frame supplied with the article." },
  { num: "02", text: "Tolerances allow 6–12 mm tile or 10 mm plaster build-up." },
  { num: "03", text: "Electrical articles rated IP44 for zone 2 placement." },
  { num: "04", text: "Finish samples sent free to trade accounts in Albania and Kosovo." },
];

export const DEALERS: Dealer[] = [
  { name: "Flush Fit Showroom", address: "Rruga e Kavajës 132", city: "Tirana", phone: "+355 4 000 0001" },
  { name: "Ceramica Studio", address: "Bulevardi Bajram Curri 24", city: "Tirana", phone: "+355 4 000 0002" },
  { name: "Adriatik Banjo", address: "Rruga Aleksandër Goga 8", city: "Durrës", phone: "+355 52 000 003" },
  { name: "Interior Vlorë", address: "Rruga Sadik Zotaj 45", city: "Vlorë", phone: "+355 33 000 004" },
  { name: "Studio Dardania", address: "Rruga Nëna Terezë 12", city: "Prishtina", phone: "+383 38 000 005" },
];

export const FOOTER_COLUMNS = [
  { title: "Shop", links: ["Flush plates", "Recessed sockets", "Light switches", "Paper holders", "Towel systems", "Manifold cabinets"] },
  { title: "Service", links: ["Contact", "Shipping & returns", "Installation support", "Trade accounts", "Terms of service"] },
];

export const QUOTE_FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "company", label: "Company", type: "text", placeholder: "Studio, contractor or distributor" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+355 …" },
  { name: "project", label: "Project", type: "text", placeholder: "Project name or address" },
];

export const CONTACT_FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { name: "company", label: "Company", type: "text", placeholder: "Optional" },
];

export const FEATURED_CODES = ["FP-01", "RS-01", "PH-01", "TS-01"];

export const findProduct = (code: string): Product | undefined => PRODUCTS.find((p) => p.code === code);

export const findCategoryBySlug = (categorySlug: string): Category | undefined =>
  CATEGORIES.find((c) => slug(c.name) === categorySlug);

export const relatedProducts = (product: Product, count = 4): Product[] =>
  PRODUCTS.filter((p) => p.code !== product.code && p.category !== product.category).slice(0, count);

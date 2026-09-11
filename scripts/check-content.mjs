#!/usr/bin/env node
// Verifies content/en.json, sq.json and it.json share the exact same key
// structure (and product/category/how-it-works id sets), since lib/i18n.ts
// trusts them to all match the Messages type at runtime.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const LOCALES = ["en", "sq", "it"];

function keyShape(obj, prefix = "") {
  let out = [];
  if (Array.isArray(obj)) {
    out.push(prefix + "[]");
    if (obj.length && typeof obj[0] === "object" && obj[0] !== null && !Array.isArray(obj[0])) {
      out = out.concat(keyShape(obj[0], prefix + "[]"));
    }
    return out;
  }
  if (obj && typeof obj === "object") {
    for (const k of Object.keys(obj).sort()) {
      out.push(prefix + "." + k);
      out = out.concat(keyShape(obj[k], prefix + "." + k));
    }
  }
  return out;
}

const docs = Object.fromEntries(LOCALES.map((l) => [l, JSON.parse(readFileSync(join(root, "content", `${l}.json`), "utf8"))]));
const shapes = Object.fromEntries(LOCALES.map((l) => [l, new Set(keyShape(docs[l]))]));

let ok = true;
for (const a of LOCALES) {
  for (const b of LOCALES) {
    if (a === b) continue;
    const missing = [...shapes[a]].filter((k) => !shapes[b].has(k));
    if (missing.length) {
      ok = false;
      console.error(`${b}.json is missing keys present in ${a}.json:\n  ${missing.join("\n  ")}`);
    }
  }
}

// Spot-check the id-keyed dictionaries against each other's literal id sets
// (categories, products, howItWorks) — catches typo'd keys that keyShape's
// structural check (which only looks at the first array element) can't see.
for (const dict of ["categories", "products", "howItWorks"]) {
  const [first, ...rest] = LOCALES;
  const baseKeys = Object.keys(docs[first][dict]).sort();
  for (const l of rest) {
    const keys = Object.keys(docs[l][dict]).sort();
    if (JSON.stringify(keys) !== JSON.stringify(baseKeys)) {
      ok = false;
      console.error(`content/${l}.json "${dict}" ids differ from content/${first}.json:\n  ${first}: ${baseKeys}\n  ${l}: ${keys}`);
    }
  }
}

if (!ok) {
  process.exit(1);
}
console.log("content/{en,sq,it}.json: shapes and ids match ✓");

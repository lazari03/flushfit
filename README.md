# CODING AGENTS: READ THIS FIRST

This is a **handoff bundle** from Claude Design (claude.ai/design).

A user mocked up designs in HTML/CSS/JS using an AI design tool, then exported this bundle so a coding agent can implement the designs for real.

## What you should do — IMPORTANT

**Read the chat transcripts first.** There are 1 chat transcript(s) in `chats/`. The transcripts show the full back-and-forth between the user and the design assistant — they tell you **what the user actually wants** and **where they landed** after iterating. Don't skip them. The final HTML files are the output, but the chat is where the intent lives.

**Read `project/Flush Fit Webshop.dc.html` in full.** The user had this file open when they triggered the handoff, so it's almost certainly the primary design they want built. Read it top to bottom — don't skim. Then **follow its imports**: open every file it pulls in (shared components, CSS, scripts) so you understand how the pieces fit together before you start implementing.

**If anything is ambiguous, ask the user to confirm before you start implementing.** It's much cheaper to clarify scope up front than to build the wrong thing.

## About the design files

The design medium is **HTML/CSS/JS** — these are prototypes, not production code. Your job is to **recreate them pixel-perfectly** in whatever technology makes sense for the target codebase (React, Vue, native, whatever fits). Match the visual output; don't copy the prototype's internal structure unless it happens to fit.

**Don't render these files in a browser or take screenshots unless the user asks you to.** Everything you need — dimensions, colors, layout rules — is spelled out in the source. Read the HTML and CSS directly; a screenshot won't tell you anything they don't.

## Bundle contents

- `README.md` — this file
- `chats/` — conversation transcripts (read these!)
- `project/` — the `Hidden bathroom fixtures webshop` project files (HTML prototypes, assets, components)

---

## Implementation

`project/Flush Fit Webshop.dc.html` has been implemented as a real app in this repo, per the chat transcript's
explicit stack call-out ("no wordpress next js and react just frontend no account"), then evolved past the
original prototype per the live user's own follow-up requests:

- **Next.js 16 (App Router) + React 18 + TypeScript**, built as a fully **static export**
  (`output: "export"` in `next.config.mjs`) — no backend, no CMS, no accounts, deployable to any static host.
- **No cart / quote form.** Every "add to list" and contact touchpoint is a `wa.me` WhatsApp deep link
  (`lib/whatsapp.ts`), prefilled with the product, finish and quantity where relevant. There is no `/quote` or
  `/contact` route — both were removed at the user's request in favor of WhatsApp as the single enquiry channel.
- **Fully localized (EN / SQ / IT)**, routed as `/[locale]/...` (`/en`, `/sq`, `/it`):
  - Every piece of UI copy, product/category/finish/compatibility text lives in `content/en.json`,
    `content/sq.json` and `content/it.json` — nothing is hardcoded in components. `lib/i18n.ts` loads the
    right file per locale; `npm run check-content` verifies all three stay structurally identical (same keys,
    same product/category/finish ids) so a missing translation fails loudly instead of silently.
  - Structural data (which products/categories/finishes exist, their ids, ordering, cross-references) is
    locale-independent and lives in `lib/data.ts`; only display text is duplicated per locale.
  - `/` is a tiny client-side redirect to the visitor's saved-or-detected locale (static export has no server
    to do this redirect on the backend).
  - The Albanian and Italian copy is my own best-effort translation, not reviewed by a native speaker —
    worth a pass before this goes live.
- `<image-slot>` placeholders became `components/ImagePlaceholder.tsx` — a captioned placeholder box that
  renders a real `<img>` the moment a `src` is passed in, so dropping in real photography later needs no other
  code changes. **No product photography exists yet** — the competitor site referenced during design
  (edplit.com) was intentionally *not* scraped for images (their photography, not licensed for reuse on a
  competing site); the placeholders are still live pending real photos or generated illustrative renders.
- Hover states that the prototype faked with a custom `style-hover` attribute are real CSS `:hover` rules in
  `app/globals.css`.

### Running it

```bash
npm install
npm run dev              # http://localhost:3000/en
npm run check-content     # verify en/sq/it content files stay in sync
npm run build             # static export to out/
npm run start              # serve out/ locally (next start does NOT work with static export)
```

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
explicit stack call-out ("no wordpress next js and react just frontend no account"):

- **Next.js 16 (App Router) + React 18 + TypeScript.** Frontend only — no backend, no CMS, no accounts.
- Real routes replace the prototype's single-view state machine, for shareable URLs and SEO:
  `/`, `/catalogue`, `/catalogue/[category]`, `/product/[code]`, `/quote`, `/contact`.
- The request list ("cart") and selected finish are global client state (`context/AppStateContext.tsx`),
  persisted to `localStorage` so they survive navigation and reloads.
- All copy, products, finishes, compatibility data and dealer info are ported verbatim into `lib/data.ts`.
- `<image-slot>` placeholders became `components/ImagePlaceholder.tsx` — a captioned placeholder box that
  renders a real `<img>` the moment a `src` is passed in, so dropping in product/lifestyle photography later
  needs no other code changes.
- Hover states that the prototype faked with a custom `style-hover` attribute are real CSS `:hover` rules in
  `app/globals.css`.

### Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
```

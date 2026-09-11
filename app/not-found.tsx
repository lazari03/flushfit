import Link from "next/link";
import { DEFAULT_LOCALE, getMessages } from "@/lib/i18n";

// Root-level 404 for paths outside any /<locale> segment (bad links, typos).
// No locale is known here, so this renders in the default locale.
export default function NotFound() {
  const messages = getMessages(DEFAULT_LOCALE);
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 24 }}>
      <div>
        <h1 style={{ fontWeight: 300, fontSize: 40, margin: "0 0 12px" }}>{messages.notFound.title}</h1>
        <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "0 0 24px", maxWidth: "40ch" }}>{messages.notFound.body}</p>
        <Link href={`/${DEFAULT_LOCALE}`} className="btn btn-dark" style={{ padding: "14px 24px" }}>
          {messages.notFound.backHome}
        </Link>
      </div>
    </main>
  );
}
